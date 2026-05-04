"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useMotionValue, type MotionValue } from "motion/react";
import { usePrefersReducedMotionSafe } from "@/components/motion/usePrefersReducedMotionSafe";
import GrowthEngineStatic from "./growth-engine/GrowthEngineStatic";
import VisualLayer from "./growth-engine/VisualLayer";
import SceneText from "./growth-engine/SceneText";
import ParticleField from "./growth-engine/ParticleField";
import Vignette from "./growth-engine/Vignette";
import NoiseOverlay from "./growth-engine/NoiseOverlay";
import { SCENES, SCROLL_DURATION_VH, TOTAL_SCENES } from "./growth-engine/sceneData";
import { ACCENT_HEX } from "./growth-engine/types";

gsap.registerPlugin(ScrollTrigger);

const DEBUG = process.env.NODE_ENV === "development";

export default function GrowthEngineSection() {
  const reduced = usePrefersReducedMotionSafe();
  const [layout, setLayout] = useState<"loading" | "desktop" | "static">("loading");
  const [isCompact, setIsCompact] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const progress = useMotionValue(0);
  const [particlesActive, setParticlesActive] = useState(false);

  // Layout decision — pinned scroll on every device unless reduced motion.
  // Track a `compact` flag so mobile gets a lighter particle density.
  useEffect(() => {
    const compactMq = window.matchMedia("(max-width: 767px)");
    const update = () => {
      setLayout(reduced ? "static" : "desktop");
      setIsCompact(compactMq.matches);
    };
    update();
    compactMq.addEventListener?.("change", update);
    return () => compactMq.removeEventListener?.("change", update);
  }, [reduced]);

  // Pin + progress sync (desktop only)
  useEffect(() => {
    if (layout !== "desktop") return;
    if (!sectionRef.current || !pinRef.current) return;

    const ctx = gsap.context(() => {
      const trigger = ScrollTrigger.create({
        trigger: sectionRef.current!,
        start: "top top",
        end: () => "+=" + window.innerHeight * SCROLL_DURATION_VH,
        pin: pinRef.current!,
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => progress.set(self.progress),
        onEnter: () => setParticlesActive(true),
        onEnterBack: () => setParticlesActive(true),
        onLeave: () => setParticlesActive(false),
        onLeaveBack: () => setParticlesActive(false),
      });

      // Refresh on font load — headlines change height
      if (typeof document !== "undefined" && document.fonts?.ready) {
        document.fonts.ready.then(() => ScrollTrigger.refresh());
      }

      // Debounced refresh on resize
      let resizeTimer: number | null = null;
      const onResize = () => {
        if (resizeTimer) window.clearTimeout(resizeTimer);
        resizeTimer = window.setTimeout(() => {
          ScrollTrigger.refresh();
        }, 150);
      };
      const ro = new ResizeObserver(onResize);
      if (sectionRef.current) ro.observe(sectionRef.current);

      return () => {
        if (resizeTimer) window.clearTimeout(resizeTimer);
        ro.disconnect();
        trigger.kill();
      };
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, [layout, progress]);

  if (layout === "loading") {
    return <section style={{ minHeight: "100vh" }} aria-hidden="true" />;
  }

  if (layout === "static") {
    return <GrowthEngineStatic />;
  }

  return (
    <section
      ref={sectionRef}
      id="growth-engine"
      aria-label="The Growth Engine"
      className="relative"
      style={{
        height: `${(SCROLL_DURATION_VH + 1) * 100}vh`,
        background: "#0D0B09",
      }}
    >
      <div
        ref={pinRef}
        className="relative h-screen w-full overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(212,168,83,0.05) 0%, rgba(13,11,9,0) 60%), #0D0B09",
        }}
      >
        {/* Section label + global stage badge */}
        <div className="pointer-events-none absolute left-1/2 top-8 z-40 -translate-x-1/2 text-center">
          <span
            className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.32em]"
            style={{ color: ACCENT_HEX.gold }}
          >
            <span
              className="inline-block h-px w-8"
              style={{ backgroundColor: ACCENT_HEX.gold }}
            />
            The Growth Engine
            <span
              className="inline-block h-px w-8"
              style={{ backgroundColor: ACCENT_HEX.gold }}
            />
          </span>
          <StageBadge progress={progress} />
        </div>

        {/* Layered visuals */}
        <ParticleField active={particlesActive} density={isCompact ? "tablet" : "desktop"} />
        <VisualLayer progress={progress} />

        {/* Scene text — all stacked, opacity-gated. Only one visible at a time. */}
        {SCENES.map((s) => (
          <SceneText key={s.id} scene={s} progress={progress} />
        ))}

        {/* Overlays */}
        <Vignette />
        <NoiseOverlay />

        {/* Progress indicator */}
        <ProgressIndicator progress={progress} />

        {DEBUG && <DebugIndicator progress={progress} />}
      </div>
    </section>
  );
}

/**
 * Single global stage badge. Reads progress, computes the active scene
 * index, and only re-renders when that index changes (no setState on
 * every scrub frame).
 */
function StageBadge({ progress }: { progress: MotionValue<number> }) {
  const [index, setIndex] = useState(0);
  const indexRef = useRef(0);

  useEffect(() => {
    const compute = (p: number) => {
      const next = Math.max(0, Math.min(TOTAL_SCENES - 1, Math.floor(p * TOTAL_SCENES)));
      if (next !== indexRef.current) {
        indexRef.current = next;
        setIndex(next);
      }
    };
    compute(progress.get());
    return progress.on("change", compute);
  }, [progress]);

  const accent = SCENES[index].accent === "cyan" ? ACCENT_HEX.cyan : ACCENT_HEX.gold;

  return (
    <div
      className="mt-3 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em]"
      style={{
        backgroundColor: `${accent}1A`,
        borderColor: `${accent}55`,
        color: accent,
      }}
      aria-live="polite"
    >
      <span
        className="inline-block h-1.5 w-1.5 rounded-full"
        style={{ backgroundColor: accent, boxShadow: `0 0 10px ${accent}` }}
      />
      Stage {String(index + 1).padStart(2, "0")} / {String(TOTAL_SCENES).padStart(2, "0")}
    </div>
  );
}

function ProgressIndicator({ progress }: { progress: MotionValue<number> }) {
  return (
    <div className="pointer-events-none absolute bottom-8 left-1/2 z-40 flex -translate-x-1/2 items-center gap-2">
      {SCENES.map((s) => (
        <ProgressDot key={s.id} progress={progress} start={s.start} end={s.end} />
      ))}
    </div>
  );
}

function ProgressDot({
  progress,
  start,
  end,
}: {
  progress: MotionValue<number>;
  start: number;
  end: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const unsubscribe = progress.on("change", (p) => {
      const el = ref.current;
      if (!el) return;
      const active = p >= start && p <= end;
      el.style.backgroundColor = active ? ACCENT_HEX.gold : "rgba(245,240,232,0.25)";
      el.style.transform = active ? "scale(1.4)" : "scale(1)";
    });
    return unsubscribe;
  }, [progress, start, end]);
  return (
    <motion.span
      ref={ref}
      className="block h-1.5 w-1.5 rounded-full transition-all duration-200"
      style={{ backgroundColor: "rgba(245,240,232,0.25)" }}
    />
  );
}

/**
 * Dev-only floating readout: scroll progress + active scene id.
 * Removed from production builds via DEBUG flag.
 */
function DebugIndicator({ progress }: { progress: MotionValue<number> }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const tick = (p: number) => {
      const el = ref.current;
      if (!el) return;
      const idx = Math.max(0, Math.min(TOTAL_SCENES - 1, Math.floor(p * TOTAL_SCENES)));
      el.textContent = `p=${p.toFixed(3)}  scene=${idx}  ${SCENES[idx].id}`;
    };
    tick(progress.get());
    return progress.on("change", tick);
  }, [progress]);
  return (
    <div
      ref={ref}
      className="pointer-events-none absolute bottom-3 right-3 z-50 rounded bg-black/70 px-2 py-1 font-mono text-[10px] text-white/80 backdrop-blur"
    >
      p=0.000  scene=0  hero
    </div>
  );
}
