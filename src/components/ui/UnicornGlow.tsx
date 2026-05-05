"use client";

import dynamic from "next/dynamic";
import { useEffect, useState, type ReactNode } from "react";

const UnicornScene = dynamic(() => import("unicornstudio-react/next"), {
  ssr: false,
});

interface UnicornGlowProps {
  children: ReactNode;
  className?: string;
  /** Height of the glow canvas behind the content */
  glowHeight?: string;
  /** Controls the glow intensity via opacity */
  intensity?: number;
}

/**
 * Wraps children with a Unicorn Studio WebGL glow effect behind them.
 * Uses project KgQLt1oeZGOzxz1T0OLX. a subtle luminous aura.
 * Only renders on client, respects prefers-reduced-motion.
 */
export default function UnicornGlow({
  children,
  className = "",
  glowHeight = "200%",
  intensity = 0.7,
}: UnicornGlowProps) {
  const [mounted, setMounted] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setMounted(true);
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <div className={`relative ${className}`}>
      {/* Unicorn glow layer. Positioned behind content */}
      {mounted && !reducedMotion && (
        <div
          className="absolute inset-0 z-0 pointer-events-none overflow-visible"
          aria-hidden="true"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "140%",
            height: glowHeight,
            opacity: intensity,
          }}
        >
          <UnicornScene
            projectId="KgQLt1oeZGOzxz1T0OLX"
            sdkUrl="/unicornStudio.umd.js"
            width="100%"
            height="100%"
            production={true}
            scale={0.5}
            dpi={1}
            fps={30}
            lazyLoad={true}
          />
        </div>
      )}
      {/* Content layer. Above glow */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
