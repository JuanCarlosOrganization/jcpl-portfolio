"use client";

import { useEffect } from "react";

interface Props {
  projectId: string;
  className?: string;
}

/**
 * UnicornEmbed. Renders a Unicorn Studio project and injects the
 * SDK script via useEffect so it actually executes in the browser.
 * (React does not run <script> tags placed in JSX.)
 */
export default function UnicornEmbed({ projectId, className = "" }: Props) {
  useEffect(() => {
    const init = () => {
      if (window.UnicornStudio?.init) {
        window.UnicornStudio.init();
      }
    };

    const existing = document.querySelector('script[src*="unicornStudio.umd.js"]');

    if (window.UnicornStudio?.init) {
      setTimeout(init, 50);
    } else if (existing) {
      setTimeout(init, 400);
    } else {
      window.UnicornStudio = { isInitialized: false } as never;
      const s = document.createElement("script");
      s.src = "/unicornStudio.umd.js";
      s.onload = () => setTimeout(init, 50);
      document.body.appendChild(s);
    }
  }, []);

  return (
    <div
      data-us-project={projectId}
      className={`w-full h-full ${className}`}
    />
  );
}
