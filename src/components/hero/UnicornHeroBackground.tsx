"use client";

import { useEffect, useRef } from "react";

const SDK_URL =
  "/unicornStudio.umd.js";
const SCRIPT_ID = "unicornstudio-sdk";
const PROJECT_ID = "XM6RVpVCzZNadvE1Pxqw";

/**
 * Renders a Unicorn Studio WebGL scene as a full-bleed background.
 * - Client-only (no window usage outside useEffect)
 * - Loads the SDK script once (guarded by DOM id check)
 * - Maintains 1440×900 aspect ratio via CSS, scales to fill container
 */
export default function UnicornHeroBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Guard: don't run on server
    if (typeof window === "undefined") return;

    const initUnicorn = () => {
      const us = (window as any).UnicornStudio;
      if (us && typeof us.init === "function") {
        us.init();
      }
    };

    // If SDK already loaded, just init
    if (document.getElementById(SCRIPT_ID)) {
      initUnicorn();
      return;
    }

    // Load SDK script once
    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.src = SDK_URL;
    script.async = true;
    script.onload = () => initUnicorn();
    document.head.appendChild(script);

    // Cleanup: Unicorn manages its own canvas lifecycle
  }, []);

  return (
    <div
      ref={containerRef}
      className="cb-unicorn-wrap"
      aria-hidden="true"
    >
      {/* Unicorn Studio project container. Aspect-ratio preserved via CSS */}
      <div
        data-us-project={PROJECT_ID}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
}
