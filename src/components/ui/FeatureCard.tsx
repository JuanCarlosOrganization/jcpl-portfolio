"use client";

import { ReactNode } from "react";
import PremiumFrame from "./PremiumFrame";
import { cn } from "@/lib/utils";

type FeatureCardProps = {
  eyebrow?: string;
  title: string;
  visual: ReactNode;
  accentFrom?: string;
  accentTo?: string;
  className?: string;
};

export default function FeatureCard({
  eyebrow,
  title,
  visual,
  accentFrom = "rgba(212, 168, 83, 0.22)",
  accentTo = "rgba(212, 168, 83, 0)",
  className = "",
}: FeatureCardProps) {
  return (
    <PremiumFrame
      variant="elevated"
      radius="xl"
      padding="none"
      className={cn(
        "flex flex-col h-full w-full max-w-full md:aspect-[4/5] min-h-[360px] md:min-h-[420px]",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(120% 80% at 100% 0%, ${accentFrom} 0%, ${accentTo} 55%), radial-gradient(80% 60% at 0% 100%, rgba(212, 168, 83, 0.08) 0%, transparent 60%)`,
        }}
      />

      <div className="relative z-10 flex flex-col h-full p-5 md:p-8">
        <header className="mb-4 md:mb-5">
          {eyebrow ? (
            <div
              className="mb-3 text-[11px] font-medium tracking-[0.18em] uppercase"
              style={{ color: "var(--brand-accent)" }}
            >
              {eyebrow}
            </div>
          ) : null}
          <h3
            className="font-serif leading-[1.15] break-words [overflow-wrap:anywhere]"
            style={{
              fontFamily: "var(--font-serif, 'Cormorant Garamond', serif)",
              fontSize: "clamp(1.25rem, 4.4vw, 2rem)",
              color: "var(--text-primary)",
              letterSpacing: "-0.01em",
            }}
          >
            {title}
          </h3>
        </header>

        <div className="relative flex-1 min-h-[200px]">{visual}</div>
      </div>
    </PremiumFrame>
  );
}
