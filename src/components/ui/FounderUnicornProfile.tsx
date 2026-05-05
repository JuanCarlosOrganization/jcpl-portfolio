"use client";
import { useEffect } from "react";

const FALLBACK_SRC = "/images/juan-headshot.webp";

export default function FounderUnicornProfile() {
  useEffect(() => {
    const initUS = () => {
      if (window.UnicornStudio?.init) {
        window.UnicornStudio.init();
      }
    };

    // Check if script already loaded
    const existingScript = document.querySelector(
      'script[src*="unicornStudio.umd.js"]'
    );

    if (window.UnicornStudio?.init) {
      // Already loaded. Re-init to pick up this node
      setTimeout(initUS, 50);
    } else if (existingScript) {
      // Script loading. Wait for it
      setTimeout(initUS, 400);
    } else {
      // First load. Inject script
      window.UnicornStudio = { isInitialized: false } as any;
      const s = document.createElement("script");
      s.src =
        "/unicornStudio.umd.js";
      s.onload = () => setTimeout(initUS, 50);
      document.body.appendChild(s);
    }
  }, []);

  return (
    <div
      data-us-project="bi8sQ4960W9R0aV2JSta"
      style={{
        width: "100%",
        height: "100%",
        borderRadius: "16px",
        overflow: "hidden",
        background: "#181410",
        backgroundImage: `url(${FALLBACK_SRC})`,
        backgroundSize: "cover",
        backgroundPosition: "center top",
      }}
    />
  );
}
