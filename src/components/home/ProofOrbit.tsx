"use client";

import {
  useRef,
  useMemo,
  useEffect,
  useState,
  Suspense,
} from "react";
import Image from "next/image";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Billboard, Environment } from "@react-three/drei";
import * as THREE from "three";

// ─── Public Types ──────────────────────────────────────────────────────────────

export type ProofLogoItem = {
  id: string;
  name: string;
  logo: string;        // image URL (PNG, JPG, WebP)
  accentColor?: string; // hex string. Tints the sphere; default dark navy
};

export type ProofOrbitProps = {
  logos: ProofLogoItem[];
  className?: string;
  height?: number;
  followCursor?: boolean;
  speed?: number; // 0.5 = slow drift · 1 = normal · 2 = active
};

// ─── Physics Constants ─────────────────────────────────────────────────────────

const DAMPING      = 0.993;  // per-frame velocity retention (frame-rate normalised)
const BOUNCE       = 0.55;   // velocity coefficient on boundary hit
const COL_PUSH     = 0.07;   // impulse scale on collision
const COL_SEP      = 0.50;   // position correction on collision
const MAX_SPEED    = 0.65;   // units/s cap
const LEAD_STR     = 0.012;  // cursor force on ball[0]
const FOLLOW_STR   = 0.0018; // cursor force on all other balls
const CURSOR_LERP  = 0.055;  // cursor smoothing (0 = no lag · 1 = instant)

// ─── Shared Circular Alpha Mask ───────────────────────────────────────────────
// Created once per session in the browser. Applies a soft radial fade to the
// logo plane so it reads as a circular decal rather than a hard rectangle.

let _circleMask: THREE.CanvasTexture | null = null;

function getCircleMask(): THREE.CanvasTexture {
  if (_circleMask) return _circleMask;

  const S = 256;
  const cv = document.createElement("canvas");
  cv.width = S;
  cv.height = S;
  const ctx = cv.getContext("2d")!;

  const grad = ctx.createRadialGradient(S / 2, S / 2, S * 0.56, S / 2, S / 2, S / 2);
  grad.addColorStop(0,    "rgba(255,255,255,1)");
  grad.addColorStop(0.74, "rgba(255,255,255,1)");
  grad.addColorStop(1,    "rgba(255,255,255,0)");

  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.arc(S / 2, S / 2, S / 2, 0, Math.PI * 2);
  ctx.fill();

  _circleMask = new THREE.CanvasTexture(cv);
  return _circleMask;
}

// ─── Ball Visual ──────────────────────────────────────────────────────────────
// Renders inside <Suspense>. Suspends (via useLoader) until the logo texture
// is loaded. All balls appear simultaneously once ready.

function BallVisual({
  logoUrl,
  radius,
  baseColor,
}: {
  logoUrl: string;
  radius: number;
  baseColor: THREE.Color;
}) {
  // TextureLoader with crossOrigin so Shopify/Wixstatic CDN images load properly
  const logoTex = useLoader(THREE.TextureLoader, logoUrl, (loader) => {
    (loader as THREE.TextureLoader).crossOrigin = "anonymous";
  });

  useMemo(() => {
    logoTex.colorSpace  = THREE.SRGBColorSpace;
    logoTex.wrapS       = THREE.ClampToEdgeWrapping;
    logoTex.wrapT       = THREE.ClampToEdgeWrapping;
    logoTex.needsUpdate = true;
  }, [logoTex]);

  const mask = useMemo(() => getCircleMask(), []);

  return (
    <>
      {/* ── Main Sphere. Polished glass clearcoat ── */}
      <mesh>
        <sphereGeometry args={[radius, 40, 40]} />
        <meshPhysicalMaterial
          color={baseColor}
          roughness={0.07}
          metalness={0.02}
          clearcoat={1.0}
          clearcoatRoughness={0.04}
          reflectivity={0.45}
          transparent
          opacity={0.90}
        />
      </mesh>

      {/* ── Inner rim. Very faint blue backlight ── */}
      <mesh>
        <sphereGeometry args={[radius * 0.984, 24, 24]} />
        <meshBasicMaterial
          color="#2A58FF"
          transparent
          opacity={0.05}
          side={THREE.BackSide}
        />
      </mesh>

      {/* ── Logo plane. Billboarded, sits flush on sphere surface ──
          Billboard ensures the plane always faces the camera regardless of
          ball position or scene rotation, keeping logos crisp and readable.
          renderOrder={1} + depthWrite={false} guarantees correct layering
          when balls overlap.                                               */}
      <Billboard>
        <mesh position={[0, 0, radius * 1.01]} renderOrder={1}>
          <planeGeometry args={[radius * 1.22, radius * 1.22]} />
          <meshBasicMaterial
            map={logoTex}
            alphaMap={mask}
            transparent
            depthWrite={false}
            opacity={0.90}
          />
        </mesh>
      </Billboard>
    </>
  );
}

// ─── Physics State Type ───────────────────────────────────────────────────────

type BallState = {
  pos:    THREE.Vector3;
  vel:    THREE.Vector3;
  radius: number;
  color:  THREE.Color;
};

// ─── Scene. Physics Loop + All Balls ────────────────────────────────────────

function Scene({
  logos,
  followCursor,
  speed,
  bx,
  by,
}: {
  logos:        ProofLogoItem[];
  followCursor: boolean;
  speed:        number;
  bx:           number; // half-width  scene units
  by:           number; // half-height scene units
}) {
  const refs        = useRef<(THREE.Group | null)[]>(Array(logos.length).fill(null));
  const cursorSmth  = useRef(new THREE.Vector2());
  const cursorTgt   = useRef(new THREE.Vector2());

  // ── Initialise physics state ──
  const balls = useMemo<BallState[]>(() => {
    const n = logos.length;
    return logos.map((logo, i) => {
      // Space balls evenly around a virtual circle with slight random jitter
      const angle  = (i / n) * Math.PI * 2 + 0.3;
      const spread = 0.38 + Math.random() * 0.30;
      const radius = 0.48 + Math.random() * 0.24; // 0.48–0.72 units

      const pos = new THREE.Vector3(
        Math.cos(angle) * bx * spread,
        Math.sin(angle) * by * spread,
        (Math.random() - 0.5) * 0.3,
      );

      const vBase = (0.07 + Math.random() * 0.17) * speed;
      const va    = Math.random() * Math.PI * 2;
      const vel   = new THREE.Vector3(Math.cos(va) * vBase, Math.sin(va) * vBase, 0);

      const hex   = logo.accentColor ?? "#0a1f38";
      const color = new THREE.Color(hex).multiplyScalar(0.52);

      return { pos, vel, radius, color };
    });
  }, [logos, bx, by, speed]); // eslint-disable-line react-hooks/exhaustive-deps

  // ── Cursor tracking ──
  useEffect(() => {
    if (!followCursor) return;
    const fn = (e: MouseEvent) => {
      cursorTgt.current.set(
         (e.clientX / window.innerWidth  - 0.5) * 2,
        -(e.clientY / window.innerHeight - 0.5) * 2,
      );
    };
    window.addEventListener("mousemove", fn, { passive: true });
    return () => window.removeEventListener("mousemove", fn);
  }, [followCursor]);

  // ── Per-frame physics ──
  useFrame((_, delta) => {
    const dt = Math.min(delta, 0.05); // guard against tab-switch spike

    // Smooth cursor toward target
    cursorSmth.current.lerp(cursorTgt.current, CURSOR_LERP);

    // ── Integrate each ball ──
    for (let i = 0; i < balls.length; i++) {
      const b = balls[i];

      // Cursor influence
      if (followCursor) {
        if (i === 0) {
          // Lead ball is gently drawn toward cursor position
          b.vel.x += (cursorSmth.current.x * bx * 0.50 - b.pos.x) * LEAD_STR;
          b.vel.y += (cursorSmth.current.y * by * 0.44 - b.pos.y) * LEAD_STR;
        } else {
          // Other balls receive a subtle global field bias
          b.vel.x += (cursorSmth.current.x * bx * 0.10 - b.pos.x) * FOLLOW_STR;
          b.vel.y += (cursorSmth.current.y * by * 0.08 - b.pos.y) * FOLLOW_STR;
        }
      }

      // Speed clamp
      const spd = b.vel.length();
      const max = MAX_SPEED * speed;
      if (spd > max) b.vel.multiplyScalar(max / spd);

      // Integrate position
      b.pos.x += b.vel.x * dt;
      b.pos.y += b.vel.y * dt;

      // Soft boundary bounce
      const lx = bx - b.radius;
      const ly = by - b.radius;
      if      (b.pos.x >  lx) { b.vel.x *= -BOUNCE; b.pos.x =  lx; }
      else if (b.pos.x < -lx) { b.vel.x *= -BOUNCE; b.pos.x = -lx; }
      if      (b.pos.y >  ly) { b.vel.y *= -BOUNCE; b.pos.y =  ly; }
      else if (b.pos.y < -ly) { b.vel.y *= -BOUNCE; b.pos.y = -ly; }

      // Frame-rate-independent damping
      b.vel.multiplyScalar(Math.pow(DAMPING, dt * 60));

      // Push to Three.js group
      refs.current[i]?.position.set(b.pos.x, b.pos.y, b.pos.z);
    }

    // ── Soft collision between pairs ──
    for (let i = 0; i < balls.length; i++) {
      for (let j = i + 1; j < balls.length; j++) {
        const a  = balls[i];
        const b  = balls[j];
        const dx = b.pos.x - a.pos.x;
        const dy = b.pos.y - a.pos.y;
        const d2 = dx * dx + dy * dy;
        const mn = a.radius + b.radius + 0.18; // minimum separation gap

        if (d2 < mn * mn && d2 > 1e-6) {
          const dist = Math.sqrt(d2);
          const nx   = dx / dist;
          const ny   = dy / dist;
          const over = mn - dist;

          // Velocity impulse
          const imp = COL_PUSH * over;
          a.vel.x -= nx * imp;  a.vel.y -= ny * imp;
          b.vel.x += nx * imp;  b.vel.y += ny * imp;

          // Position correction (prevents sticking)
          const sep = over * COL_SEP * 0.5;
          a.pos.x -= nx * sep;  a.pos.y -= ny * sep;
          b.pos.x += nx * sep;  b.pos.y += ny * sep;

          refs.current[i]?.position.set(a.pos.x, a.pos.y, a.pos.z);
          refs.current[j]?.position.set(b.pos.x, b.pos.y, b.pos.z);
        }
      }
    }
  });

  return (
    <>
      {logos.map((logo, i) => (
        <group
          key={logo.id}
          ref={(el) => { refs.current[i] = el; }}
          position={[balls[i].pos.x, balls[i].pos.y, balls[i].pos.z]}
        >
          <BallVisual
            logoUrl={logo.logo}
            radius={balls[i].radius}
            baseColor={balls[i].color}
          />
        </group>
      ))}
    </>
  );
}

// ─── Mobile Fallback ──────────────────────────────────────────────────────────

function MobileFallback({ logos }: { logos: ProofLogoItem[] }) {
  return (
    <div className="grid grid-cols-2 gap-3 px-2 sm:grid-cols-3">
      {logos.map((logo) => (
        <div
          key={logo.id}
          className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-white/[0.07] bg-[var(--bg-surface)] p-5"
          style={{ minHeight: 100 }}
        >
          <Image
            src={logo.logo}
            alt={logo.name}
            width={110}
            height={36}
            quality={75}
            sizes="110px"
            draggable={false}
            className="max-h-9 w-auto max-w-[110px] object-contain brightness-0 invert opacity-60"
          />
          <span className="text-center text-[10px] font-medium leading-tight text-white/35">
            {logo.name}
          </span>
        </div>
      ))}
    </div>
  );
}

// ─── ProofOrbit (main export) ─────────────────────────────────────────────────

export default function ProofOrbit({
  logos,
  className = "",
  height    = 480,
  followCursor = true,
  speed     = 1,
}: ProofOrbitProps) {
  const [ready,   setReady]   = useState(false);
  const [mobile,  setMobile]  = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setMobile(window.innerWidth < 768);
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    setReady(true);
  }, []);

  // SSR / hydration placeholder. Prevents layout shift
  if (!ready) {
    return <div style={{ height }} className={className} aria-hidden="true" />;
  }

  // Mobile: clean CSS card grid, no canvas
  if (mobile) {
    return <MobileFallback logos={logos} />;
  }

  // Scene bounds in Three.js world units.
  // Camera: position z=6, fov=50 → half-height at z=0 ≈ 2.8 units
  // Aspect 16:9 → half-width ≈ 4.98 units. Use conservative values.
  const BX = 3.6;
  const BY = 2.2;

  return (
    <div
      className={className}
      style={{ height, width: "100%", position: "relative" }}
      aria-hidden="true"
    >
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50, near: 0.1, far: 60 }}
        gl={{
          alpha:                 true,
          antialias:             true,
          powerPreference:       "high-performance",
          preserveDrawingBuffer: false,
        }}
        style={{ background: "transparent" }}
        dpr={[1, Math.min(window.devicePixelRatio, 2)]}
      >
        {/* Lights */}
        <ambientLight intensity={0.45} />
        <directionalLight position={[6, 8, 5]}   intensity={1.1} />
        <directionalLight position={[-4, -3, -4]} intensity={0.25} color="#4B8EFF" />
        <pointLight       position={[0, 3, 5]}    intensity={0.65} color="#6BA4FF" />

        {/* Environment map drives realistic clearcoat reflections */}
        <Environment preset="city" background={false} />

        {/* Suspense: all balls appear together once all textures are loaded */}
        <Suspense fallback={null}>
          <Scene
            logos={logos}
            followCursor={!reduced && followCursor}
            speed={reduced ? 0 : speed}
            bx={BX}
            by={BY}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
