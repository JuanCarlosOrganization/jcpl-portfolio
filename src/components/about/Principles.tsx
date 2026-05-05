"use client";

import { aboutPrinciples } from "@/lib/content";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionLabel from "@/components/ui/SectionLabel";

/**
 * Principles. 3 operating principles, equal height.
 * Brighter card bg, clearer border, refined hover, consistent badge.
 */
export default function Principles() {
  return (
    <div className="max-w-4xl mx-auto">
      <AnimatedSection className="text-center mb-10">
        <SectionLabel label="Operating Principles" className="mb-3" />
        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
          How I Operate
        </h2>
      </AnimatedSection>

      <div className="grid gap-5 md:grid-cols-3">
        {aboutPrinciples.map((principle, i) => (
          <AnimatedSection key={principle.title} delay={0.08 * i}>
            <div
              className="group relative flex flex-col gap-4 rounded-xl border border-[rgba(37,99,235,0.15)] bg-sv-surface p-6 h-full transition-all duration-300 ease-out cursor-default
                hover:-translate-y-0.5 hover:border-[rgba(37,99,235,0.5)] hover:shadow-[0_4px_20px_rgba(37,99,235,0.10)]"
            >
              {/* Numbered outlined badge. Consistent 36×36 */}
              <span
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-[1.5px] border-sv-primary text-xs font-bold text-sv-primary tabular-nums transition-all duration-300 group-hover:bg-[rgba(37,99,235,0.10)] group-hover:shadow-[0_0_10px_rgba(37,99,235,0.20)]"
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              <div>
                <h3 className="text-[0.95rem] font-semibold text-white mb-1.5 transition-colors duration-200 group-hover:text-sv-primary">
                  {principle.title}
                </h3>
                <p className="text-[var(--text-secondary)] leading-relaxed text-sm">
                  {principle.description}
                </p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}
