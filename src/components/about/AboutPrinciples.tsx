"use client";

import { aboutPrinciples } from "@/lib/content";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionLabel from "@/components/ui/SectionLabel";
import StarBorder from "@/components/ui/StarBorder";

/**
 * AboutPrinciples. 3 operating principle cards with
 * title + description, numbered badge, staggered reveal.
 */
export default function AboutPrinciples() {
  return (
    <div className="max-w-3xl mx-auto">
      <AnimatedSection>
        <SectionLabel label="Operating Principles" className="mb-6" />
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">
          How I Operate
        </h2>
      </AnimatedSection>

      <div className="grid gap-5 md:grid-cols-3">
        {aboutPrinciples.map((principle, i) => (
          <AnimatedSection key={principle.title} delay={0.1 * i}>
            <StarBorder variant="accent" speed="10s" className="rounded-2xl h-full">
              <div className="flex flex-col items-center text-center gap-4 rounded-2xl bg-sv-surface p-6 md:p-8 h-full">
                {/* Number badge */}
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sv-primary text-sm font-bold text-white"
                  aria-hidden="true"
                >
                  {i + 1}
                </span>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {principle.title}
                  </h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed text-sm md:text-base">
                    {principle.description}
                  </p>
                </div>
              </div>
            </StarBorder>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}
