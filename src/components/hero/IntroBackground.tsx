"use client";

import { forwardRef } from "react";

/**
 * IntroBackground. Deep ink luxury backdrop for the intro phase.
 *
 * Old-money Monaco: charcoal depth, subtle radial warmth, zero distraction.
 * Pure CSS. no JS animation cost. GSAP controls opacity externally.
 */
const IntroBackground = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div
      ref={ref}
      className="intro-backdrop"
      aria-hidden="true"
      style={{
        background: `
          radial-gradient(ellipse 70% 50% at 50% 45%, rgba(255,255,255,0.015), transparent 65%),
          radial-gradient(ellipse 90% 70% at 30% 60%, rgba(20,24,22,0.4), transparent 60%),
          radial-gradient(ellipse 80% 60% at 70% 35%, rgba(18,22,20,0.3), transparent 55%),
          linear-gradient(180deg, #0a0e0c 0%, #0d1210 40%, #0b0f0d 70%, #080c0a 100%)
        `,
      }}
    />
  );
});

IntroBackground.displayName = "IntroBackground";
export default IntroBackground;
