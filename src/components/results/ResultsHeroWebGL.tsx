"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// Dynamically import UnicornScene to ensure it only runs client-side
const UnicornScene = dynamic(
  () => import("unicornstudio-react/next"),
  { ssr: false }
);

export default function ResultsHeroWebGL() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) =>
      setPrefersReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <div className="mt-6 w-full max-w-[1100px] mx-auto px-6">
      <div
        className="w-full h-[240px] sm:h-[320px] rounded-2xl overflow-hidden border border-[rgba(37,99,235,0.15)] bg-sv-surface"
        aria-label="Results hero animation"
      >
        {/* Only render animation after mount and if reduced motion is not preferred */}
        {mounted && !prefersReducedMotion && (
          <UnicornScene
            projectId="hU6U4mKRHf6q7lApTLwx"
            sdkUrl="/unicornStudio.umd.js"
            width="100%"
            height="100%"
            production={true}
            scale={1}
            dpi={1.5}
            fps={60}
            lazyLoad={true}
          />
        )}
        {/* Reduced motion: static fallback. Dark panel, no animation */}
        {mounted && prefersReducedMotion && (
          <div className="w-full h-full bg-sv-surface" aria-hidden="true" />
        )}
      </div>
    </div>
  );
}
