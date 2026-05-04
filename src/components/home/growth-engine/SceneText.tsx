"use client";

import { motion, useTransform, type MotionValue } from "motion/react";
import type { Scene } from "./types";
import { ACCENT_HEX } from "./types";
import { getSceneOpacity, getSceneLocalProgress } from "./sceneOpacity";
import { SCENE_FADE, TOTAL_SCENES } from "./sceneData";

interface Props {
  scene: Scene;
  progress: MotionValue<number>;
}

export default function SceneText({ scene, progress }: Props) {
  const { index } = scene;

  const opacity = useTransform(progress, (p) =>
    getSceneOpacity(p, index, TOTAL_SCENES, SCENE_FADE)
  );

  // Local progress within the scene's segment, 0 → 1.
  // Drives a small y motion: incoming from below, exits up.
  const localT = useTransform(progress, (p) =>
    getSceneLocalProgress(p, index, TOTAL_SCENES)
  );
  const y = useTransform(localT, (t) => 24 - 48 * t);

  // Blur is driven by opacity itself: blurred when invisible, sharp when visible.
  const filter = useTransform(opacity, (o) => `blur(${(1 - o) * 8}px)`);

  // Hide entirely when effectively invisible — keeps inactive headlines out
  // of the accessibility tree and prevents any sub-pixel ghost paints.
  const visibility = useTransform(opacity, (o) => (o < 0.01 ? "hidden" : "visible"));

  // Only the final scene is interactive (CTA). Others are pointer-events: none
  // even when faintly visible during a transition.
  const isFinal = scene.cta != null;
  const pointerEvents = useTransform(opacity, (o) =>
    isFinal && o > 0.5 ? "auto" : "none"
  );

  return (
    <motion.div
      aria-hidden={isFinal ? undefined : true}
      className="absolute inset-0 z-40 flex items-start justify-center px-6 sm:px-10 pt-[120px] sm:pt-[160px]"
      style={{
        opacity,
        y,
        filter,
        visibility,
        pointerEvents,
        willChange: "opacity, transform, filter",
        contain: "layout paint",
      }}
    >
      <div className="mx-auto w-full max-w-[1100px] text-center">
        <h2
          className="text-[clamp(36px,7vw,96px)] font-[800] leading-[0.98] tracking-[-0.025em] text-white"
          style={{ textShadow: `0 0 60px rgba(0,0,0,0.6)` }}
        >
          {scene.headline.split(". ").map((part, i, arr) => (
            <span key={i} className="block">
              {part}
              {i < arr.length - 1 ? "." : ""}
            </span>
          ))}
        </h2>

        <p
          className="mx-auto mt-7 max-w-[640px] text-[clamp(15px,1.5vw,19px)] leading-[1.6] text-[var(--text-body)]"
          style={{ textShadow: "0 0 30px rgba(0,0,0,0.5)" }}
        >
          {scene.subheadline}
        </p>

        {isFinal && scene.cta && (
          <a
            href={scene.cta.href}
            className="mt-10 inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[15px] font-semibold transition-transform hover:scale-[1.03]"
            style={{
              backgroundColor: ACCENT_HEX.gold,
              color: "#0A0E1A",
              boxShadow: `0 0 0 1px ${ACCENT_HEX.gold}, 0 12px 50px ${ACCENT_HEX.gold}33, 0 0 80px ${ACCENT_HEX.cyan}22`,
            }}
          >
            {scene.cta.label}
            <span aria-hidden>→</span>
          </a>
        )}
      </div>
    </motion.div>
  );
}
