"use client";

import { useRef, useEffect } from "react";
import {
  Clock,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
  SRGBColorSpace,
  MathUtils,
  Vector3,
  MeshPhysicalMaterial,
  ShaderChunk,
  Color,
  PMREMGenerator,
  SphereGeometry,
  PlaneGeometry,
  AmbientLight,
  PointLight,
  ACESFilmicToneMapping,
  TextureLoader,
  Mesh,
  MeshBasicMaterial,
  Group,
  CanvasTexture,
} from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";

// ─── Public type ──────────────────────────────────────────────────────────────

export type LogoBallItem = {
  id:   string;
  name: string;
  logo: string; // image URL
};

// ─── Circular alpha-mask texture ──────────────────────────────────────────────
// Applied to the logo plane so it reads as a circular decal, not a rectangle.

function makeCircleMask(): CanvasTexture {
  const S = 256;
  const cv = document.createElement("canvas");
  cv.width = S; cv.height = S;
  const ctx = cv.getContext("2d")!;
  const g = ctx.createRadialGradient(S / 2, S / 2, S * 0.52, S / 2, S / 2, S / 2);
  g.addColorStop(0,    "rgba(255,255,255,1)");
  g.addColorStop(0.76, "rgba(255,255,255,1)");
  g.addColorStop(1,    "rgba(255,255,255,0)");
  ctx.fillStyle = g;
  ctx.beginPath();
  ctx.arc(S / 2, S / 2, S / 2, 0, Math.PI * 2);
  ctx.fill();
  return new CanvasTexture(cv);
}

// ─── Subsurface-scattering material ───────────────────────────────────────────
// Adds a real-time scattering term on top of MeshPhysicalMaterial so balls feel
// translucent and lit from within. Matching the premium Ballpit look.

class BallMaterial extends MeshPhysicalMaterial {
  declare uniforms: Record<string, { value: number }>;

  constructor(params: ConstructorParameters<typeof MeshPhysicalMaterial>[0]) {
    super(params);
    (this as any).uniforms = {
      thicknessDistortion:  { value: 0.1 },
      thicknessAmbient:     { value: 0 },
      thicknessAttenuation: { value: 0.1 },
      thicknessPower:       { value: 2 },
      thicknessScale:       { value: 10 },
    };
    (this as any).defines = (this as any).defines ?? {};
    (this as any).defines["USE_UV"] = "";

    this.onBeforeCompile = (shader) => {
      Object.assign(shader.uniforms, (this as any).uniforms);

      shader.fragmentShader =
        `uniform float thicknessPower;
         uniform float thicknessScale;
         uniform float thicknessDistortion;
         uniform float thicknessAmbient;
         uniform float thicknessAttenuation;
        ` + shader.fragmentShader;

      shader.fragmentShader = shader.fragmentShader.replace(
        "void main() {",
        `void RE_Direct_Scattering(
           const in IncidentLight directLight,
           const in vec2 uv,
           const in vec3 geometryPosition,
           const in vec3 geometryNormal,
           const in vec3 geometryViewDir,
           const in vec3 geometryClearcoatNormal,
           inout ReflectedLight reflectedLight
         ) {
           vec3 scatteringHalf = normalize(directLight.direction + (geometryNormal * thicknessDistortion));
           float scatteringDot = pow(saturate(dot(geometryViewDir, -scatteringHalf)), thicknessPower) * thicknessScale;
           #ifdef USE_COLOR
             vec3 scatteringIllu = (scatteringDot + thicknessAmbient) * vColor;
           #else
             vec3 scatteringIllu = (scatteringDot + thicknessAmbient) * diffuse;
           #endif
           reflectedLight.directDiffuse += scatteringIllu * thicknessAttenuation * directLight.color;
         }
         void main() {`
      );

      const replaced = ShaderChunk.lights_fragment_begin.replaceAll(
        "RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );",
        `RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
         RE_Direct_Scattering(directLight, vUv, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, reflectedLight);`
      );
      shader.fragmentShader = shader.fragmentShader.replace(
        "#include <lights_fragment_begin>",
        replaced
      );
    };
  }
}

// ─── Physics engine ───────────────────────────────────────────────────────────

const _I = new Vector3(), _B = new Vector3(), _O = new Vector3(),
      _N = new Vector3(), _D = new Vector3(), _j = new Vector3(),
      _H = new Vector3(), _T = new Vector3();

interface PhysicsConfig {
  count:          number;
  minSize:        number;
  maxSize:        number;
  size0:          number;
  gravity:        number;
  friction:       number;
  wallBounce:     number;
  maxVelocity:    number;
  maxX:           number;
  maxY:           number;
  maxZ:           number;
  controlSphere0: boolean;
  centerStr?:     number; // gentle center attraction strength (0 = off)
}

class Physics {
  config:       PhysicsConfig;
  positionData: Float32Array;
  velocityData: Float32Array;
  sizeData:     Float32Array;
  center:       Vector3;

  constructor(config: PhysicsConfig) {
    this.config       = config;
    this.positionData = new Float32Array(3 * config.count).fill(0);
    this.velocityData = new Float32Array(3 * config.count).fill(0);
    this.sizeData     = new Float32Array(config.count).fill(1);
    this.center       = new Vector3();
    this.init();
    this.setSizes();
  }

  init() {
    const { config: c, positionData: p } = this;
    this.center.toArray(p, 0); // ball 0 at world center
    // Balls 1-N evenly spaced around a ring. Intentional start composition.
    // RING_R=2.5 fits comfortably within any viewport; center attraction +
    // physics will spread them naturally from this base arrangement.
    const RING_R = 5.0; // larger ring for bigger balls so they don't all start overlapping
    for (let i = 1; i < c.count; i++) {
      const b      = 3 * i;
      const angle  = (i / (c.count - 1)) * Math.PI * 2; // evenly distributed
      const jitter = MathUtils.randFloat(0.8, 1.2);      // ±20% radius jitter
      p[b]     = Math.cos(angle) * RING_R * jitter;
      p[b + 1] = Math.sin(angle) * RING_R * jitter;
      p[b + 2] = MathUtils.randFloatSpread(2 * c.maxZ);
    }
  }

  setSizes() {
    const { config: c, sizeData: s } = this;
    s[0] = c.size0;
    for (let i = 1; i < c.count; i++) s[i] = MathUtils.randFloat(c.minSize, c.maxSize);
  }

  update(e: { delta: number }) {
    const { config: c, positionData: p, sizeData: s, velocityData: v, center } = this;
    let start = 0;

    if (c.controlSphere0) {
      start = 1;
      new Vector3().fromArray(p, 0).lerp(center, 0.1).toArray(p, 0);
      new Vector3().toArray(v, 0);
    }

    for (let i = start; i < c.count; i++) {
      const b = 3 * i;
      _I.fromArray(p, b); _B.fromArray(v, b);
      _B.y -= e.delta * c.gravity * s[i];
      _B.multiplyScalar(c.friction).clampLength(0, c.maxVelocity);
      _I.add(_B);
      _I.toArray(p, b); _B.toArray(v, b);
    }

    for (let i = start; i < c.count; i++) {
      const b = 3 * i;
      _I.fromArray(p, b); _B.fromArray(v, b);
      const ri = s[i];

      for (let j = i + 1; j < c.count; j++) {
        const ob = 3 * j;
        _O.fromArray(p, ob); _N.fromArray(v, ob);
        const rj   = s[j];
        _D.copy(_O).sub(_I);
        const dist = _D.length();
        const sum  = ri + rj;
        if (dist < sum) {
          const over = sum - dist;
          _j.copy(_D).normalize().multiplyScalar(0.5 * over);
          _H.copy(_j).multiplyScalar(Math.max(_B.length(), 1));
          _T.copy(_j).multiplyScalar(Math.max(_N.length(), 1));
          _I.sub(_j); _B.sub(_H); _I.toArray(p, b);  _B.toArray(v, b);
          _O.add(_j); _N.add(_T); _O.toArray(p, ob); _N.toArray(v, ob);
        }
      }

      if (Math.abs(_I.x) + ri > c.maxX) { _I.x = Math.sign(_I.x) * (c.maxX - ri); _B.x = -_B.x * c.wallBounce; }
      if (c.gravity === 0) {
        if (Math.abs(_I.y) + ri > c.maxY) { _I.y = Math.sign(_I.y) * (c.maxY - ri); _B.y = -_B.y * c.wallBounce; }
      } else if (_I.y - ri < -c.maxY) { _I.y = -c.maxY + ri; _B.y = -_B.y * c.wallBounce; }
      const maxBz = Math.max(c.maxZ, c.maxSize);
      if (Math.abs(_I.z) + ri > maxBz) { _I.z = Math.sign(_I.z) * (c.maxZ - ri); _B.z = -_B.z * c.wallBounce; }

      _I.toArray(p, b); _B.toArray(v, b);
    }
  }
}

// ─── Per-ball colors. Dark navy tones matching brand ─────────────────────────

const BALL_COLORS = [
  new Color("#0c2340"),
  new Color("#0a1e38"),
  new Color("#0d2848"),
  new Color("#091c34"),
  new Color("#0b2542"),
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function LogoBallpit({
  logos,
  className = "",
  height    = 360,
  count,       // total balls rendered; balls beyond logos.length = plain glass
}: {
  logos:      LogoBallItem[];
  className?: string;
  height?:    number;
  count?:     number;
}) {
  const wrapRef   = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap   = wrapRef.current;
    if (!canvas || !wrap || !logos.length) return;

    const ballCount = count ?? logos.length;
    const reduced   = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // ── Renderer ──
    const renderer = new WebGLRenderer({ canvas, powerPreference: "high-performance", antialias: true, alpha: true });
    renderer.outputColorSpace = SRGBColorSpace;
    renderer.toneMapping      = ACESFilmicToneMapping;

    // ── Camera ──
    const camera = new PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.set(0, 0, 20);
    camera.lookAt(0, 0, 0);

    // ── Scene ──
    const scene = new Scene();

    // ── Environment (drives clearcoat reflections) ──
    const pmrem      = new PMREMGenerator(renderer);
    const envTexture = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
    pmrem.dispose();

    // ── Lights ──
    const ambient = new AmbientLight(0xffffff, 1.1);
    const point   = new PointLight(0x4488ff, 160);
    point.position.set(3, 4, 8); // fixed. Not tracking any ball
    scene.add(ambient, point);

    // ── Physics ──
    const physCfg: PhysicsConfig = {
      count:          ballCount,
      minSize:        2.8,     // 3× bigger (was 0.92). ~95px diameter on screen
      maxSize:        4.0,     // 3× bigger (was 1.35). ~135px diameter on screen
      size0:          3.4,     // 3× bigger (was 1.10)
      gravity:        0,       // zero gravity → floating cluster (no bottom-piling)
      friction:       0.988,   // strong damping → balls slow fast, premium feel
      wallBounce:     0.28,    // very soft wall bounce → no pinball energy
      maxVelocity:    0.055,   // lower top speed
      maxX:           5,
      maxY:           5,
      maxZ:           3.0,     // more depth variation for bigger balls (was 1.5)
      controlSphere0: false,
      centerStr:      0.0018,  // gentle pull toward world origin
    };
    const physics = new Physics(physCfg);

    // ── Shared geometries + mask ──
    const sphereGeo  = new SphereGeometry(1, 36, 36);
    const planeGeo   = new PlaneGeometry(2.0, 2.0);
    const circleMask = makeCircleMask();

    // ── Build one Group per ball ──
    // Balls 0..logos.length-1 carry a logo plane.
    // Balls logos.length..ballCount-1 are plain glass spheres.
    const groups:     Group[] = [];
    const logoPlanes: Mesh[]  = [];

    for (let i = 0; i < ballCount; i++) {
      const group = new Group();

      // Sphere
      const mat = new BallMaterial({
        color:              BALL_COLORS[i % BALL_COLORS.length],
        metalness:          0.1,
        roughness:          0.18,
        clearcoat:          1,
        clearcoatRoughness: 0.12,
        envMap:             envTexture,
      });
      (mat as any).envMapRotation.x = -Math.PI / 2;
      group.add(new Mesh(sphereGeo, mat));

      // Logo plane. Only for balls that have a matching logo
      if (i < logos.length) {
        const logoMat = new MeshBasicMaterial({
          transparent: true,
          alphaMap:    circleMask,
          opacity:     0,
          depthWrite:  false,
        });
        const plane = new Mesh(planeGeo, logoMat);
        plane.position.z  = 1.02; // just outside sphere surface
        plane.renderOrder = 1;
        group.add(plane);
        logoPlanes.push(plane);
      }

      group.position.fromArray(physics.positionData, 3 * i);
      group.scale.setScalar(physics.sizeData[i]);

      scene.add(group);
      groups.push(group);
    }

    // ── Load logo textures via Next.js image proxy (avoids CORS entirely) ──
    // /_next/image is served from the SAME origin. No cross-origin request.
    // Shopify CDN + Wixstatic are already in next.config.ts remotePatterns.
    const loader = new TextureLoader();
    logos.forEach((item, i) => {
      const proxied = `/_next/image?url=${encodeURIComponent(item.logo)}&w=256&q=80`;
      loader.load(
        proxied,
        (tex) => {
          tex.colorSpace  = SRGBColorSpace;
          tex.needsUpdate = true;
          const mat       = logoPlanes[i].material as MeshBasicMaterial;
          mat.map         = tex;
          mat.opacity     = 0.92;
          mat.needsUpdate = true;
        },
        undefined,
        () => console.warn("[LogoBallpit] logo failed to load:", item.logo),
      );
    });

    // ── Resize ──
    function resize() {
      const w = wrap!.offsetWidth;
      const h = wrap!.offsetHeight;
      renderer.setSize(w, h);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      const fovRad        = (camera.fov * Math.PI) / 180;
      const wH            = 2 * Math.tan(fovRad / 2) * camera.position.z;
      const wW            = wH * camera.aspect;
      physics.config.maxX = (wW / 2) * 0.88;
      physics.config.maxY = (wH / 2) * 0.88;
    }
    resize();
    const resizeObs = new ResizeObserver(resize);
    resizeObs.observe(wrap);

    // ── Intersection observer. Pause RAF when off-screen ──
    let visible = false;
    const intObs = new IntersectionObserver(([e]) => { visible = e.isIntersecting; }, { threshold: 0 });
    intObs.observe(canvas);

    // ── Animation loop ──
    const clock = new Clock();
    let rafId: number;
    let running = true;

    function animate() {
      if (!running) return;
      rafId = requestAnimationFrame(animate);
      if (!visible) return;

      const delta = Math.min(clock.getDelta(), 0.05);

      if (!reduced) {
        // Center attraction. Gently pulls each ball toward world origin.
        // Prevents wall-camping; keeps the cluster visually intentional.
        // Runs before physics.update() so friction + wall-bounce process it.
        const CENTER_STR = physics.config.centerStr ?? 0.0018;
        const pd = physics.positionData;
        const vd = physics.velocityData;
        for (let i = 0; i < ballCount; i++) {
          const b = 3 * i;
          vd[b]     += -pd[b]     * CENTER_STR;
          vd[b + 1] += -pd[b + 1] * CENTER_STR;
        }
        physics.update({ delta });
      }

      for (let i = 0; i < ballCount; i++) {
        groups[i].position.fromArray(physics.positionData, 3 * i);
        groups[i].scale.setScalar(physics.sizeData[i]);
        // Billboard: only logo-bearing balls need camera-facing quaternion
        if (i < logos.length) {
          logoPlanes[i].quaternion.copy(camera.quaternion);
        }
      }

      renderer.render(scene, camera);
    }
    animate();

    // ── Cleanup ──
    return () => {
      running = false;
      cancelAnimationFrame(rafId);
      resizeObs.disconnect();
      intObs.disconnect();
      sphereGeo.dispose();
      planeGeo.dispose();
      circleMask.dispose();
      envTexture.dispose();
      groups.forEach((g) =>
        g.traverse((obj) => {
          if (obj instanceof Mesh) {
            (Array.isArray(obj.material) ? obj.material : [obj.material])
              .forEach((m) => { m.dispose(); });
          }
        })
      );
      renderer.dispose();
    };
  }, [logos, count]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div ref={wrapRef} className={className} style={{ height, width: "100%" }}>
      <canvas ref={canvasRef} style={{ width: "100%", height: "100%", display: "block" }} />
    </div>
  );
}
