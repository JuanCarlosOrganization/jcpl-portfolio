"use client";

import { useEffect, useState } from "react";

type Layout = "mobile" | "tablet" | "desktop";

/**
 * Returns the current responsive layout bucket based on window width.
 * SSR-safe: returns "desktop" until mounted, then re-renders with real value.
 *
 * Breakpoints:
 *  - mobile:  < 768
 *  - tablet:  768 – 1023
 *  - desktop: ≥ 1024
 */
export function useLayout(): Layout {
  const [layout, setLayout] = useState<Layout>("desktop");

  useEffect(() => {
    const compute = (): Layout => {
      const w = window.innerWidth;
      if (w < 768) return "mobile";
      if (w < 1024) return "tablet";
      return "desktop";
    };

    const onResize = () => setLayout(compute());
    onResize();

    let raf = 0;
    const debounced = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(onResize);
    };

    window.addEventListener("resize", debounced, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", debounced);
    };
  }, []);

  return layout;
}
