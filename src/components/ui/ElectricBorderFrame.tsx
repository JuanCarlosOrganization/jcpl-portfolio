"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * ElectricBorderFrame. Renders children with a UnicornStudio
 * electric border effect as an absolute overlay.
 * pointer-events-none so it never blocks interaction.
 * Re-inits UnicornStudio after a delay to pick up all data-us-project nodes.
 */
export default function ElectricBorderFrame({
  children,
  project = "l4nPH1yvHWPQ4QgIRlYp",
  className = "",
}: {
  children: ReactNode;
  project?: string;
  className?: string;
}) {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    // Re-init after a delay so both data-us-project nodes exist
    const tryInit = () => {
      if (window.UnicornStudio?.init) {
        window.UnicornStudio.init();
      }
    };

    // Wait for UnicornStudio script (loaded by FounderUnicornProfile) then re-init
    const interval = setInterval(() => {
      if (window.UnicornStudio?.init) {
        clearInterval(interval);
        setTimeout(tryInit, 200);
      }
    }, 100);

    // Safety: clear after 5s
    setTimeout(() => clearInterval(interval), 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`relative rounded-2xl overflow-hidden ${className}`}>
      {/* Children (portrait animation). fills container */}
      <div className="relative z-10 w-full h-full">{children}</div>

      {/* Electric border overlay */}
      <div
        className="absolute inset-0 z-20 pointer-events-none rounded-2xl overflow-hidden"
        aria-hidden="true"
      >
        <div
          data-us-project={project}
          style={{ width: "100%", height: "100%", background: "transparent" }}
        />
      </div>
    </div>
  );
}
