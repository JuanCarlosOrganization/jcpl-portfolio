"use client";

import { aboutContent } from "@/lib/content";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionLabel from "@/components/ui/SectionLabel";

const philosophyBullets = [
  "Every deliverable is measured by one outcome: calls booked and revenue moved.",
  "If the system is not compounding, I iterate until it is.",
  "No vanity metrics. Open rates and impressions do not pay your rent. Booked calls do.",
];

/**
 * PhilosophyBlock. Compact editorial manifesto with signature.
 * Reduced dead space, micro-proof bullets, clean centered layout.
 */
export default function PhilosophyBlock() {
  return (
    <AnimatedSection className="max-w-2xl mx-auto">
      <div className="relative rounded-2xl border border-[rgba(212,168,83,0.15)] bg-sv-surface py-10 px-7 md:py-14 md:px-12 overflow-hidden text-center">
        {/* Quote ornament */}
        <span
          className="absolute top-4 left-6 select-none font-serif leading-none text-[80px] md:text-[110px] pointer-events-none"
          style={{ color: "rgba(212,168,83,0.2)" }}
          aria-hidden="true"
        >
          &ldquo;
        </span>

        {/* Thin top rule */}
        <div className="w-10 h-px bg-gradient-to-r from-transparent via-[var(--brand-accent)]/40 to-transparent mx-auto mb-6" aria-hidden="true" />

        <SectionLabel label="OPERATING RATIONALE" className="mb-4" />

        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-4 leading-tight">
          {aboutContent.philosophy.headline}
        </h2>

        <p className="text-base md:text-lg text-[var(--text-secondary)] leading-relaxed max-w-md mx-auto">
          {aboutContent.philosophy.body}
        </p>

        {/* Micro bullets */}
        <ul className="mt-6 space-y-2 max-w-sm mx-auto text-left">
          {philosophyBullets.map((bullet, i) => (
            <li key={i} className="flex items-start gap-2.5 text-[0.8rem] text-sv-text-sub leading-snug">
              <span className="mt-1.5 h-1 w-1 rounded-full bg-sv-primary shrink-0" aria-hidden="true" />
              {bullet}
            </li>
          ))}
        </ul>

        {/* Signature */}
        <p className="mt-6 text-xs text-sv-text-sub italic tracking-wide">
          Juan Carlos
        </p>

        {/* Thin bottom rule */}
        <div className="w-10 h-px bg-gradient-to-r from-transparent via-[rgba(212,168,83,0.3)] to-transparent mx-auto mt-6" aria-hidden="true" />

        {/* Subtle glow */}
        <div
          className="absolute inset-0 pointer-events-none rounded-2xl"
          style={{
            background: "radial-gradient(ellipse 70% 50% at 50% 100%, rgba(212,168,83,0.05) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />
      </div>
    </AnimatedSection>
  );
}
