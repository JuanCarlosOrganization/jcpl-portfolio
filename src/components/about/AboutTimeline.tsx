"use client";

import { aboutTimeline } from "@/lib/content";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionLabel from "@/components/ui/SectionLabel";
import StarBorder from "@/components/ui/StarBorder";

/**
 * AboutTimeline. Vertical timeline (Week 1 / Weeks 2–4 / Ongoing)
 * with dot connector, staggered reveals, and StarBorder containers.
 */
export default function AboutTimeline() {
  return (
    <div className="max-w-3xl mx-auto">
      <AnimatedSection>
        <SectionLabel label="Working Model" className="mb-6" />
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">
          How I Work With You
        </h2>
      </AnimatedSection>

      <div className="relative">
        {/* Vertical connector line */}
        <div
          className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--brand-accent)]/40 via-[var(--brand-accent)]/20 to-transparent"
          aria-hidden="true"
        />

        <div className="space-y-6">
          {aboutTimeline.map((step, i) => (
            <AnimatedSection key={step.title} delay={0.15 * i} direction="left">
              <div className="relative pl-16 md:pl-20">
                {/* Phase dot */}
                <div
                  className="absolute left-3.5 md:left-5.5 top-6 flex h-5 w-5 items-center justify-center"
                  aria-hidden="true"
                >
                  <span className="h-3 w-3 rounded-full bg-sv-primary ring-4 ring-[var(--bg-base)]" />
                </div>

                <StarBorder
                  variant="accent"
                  speed={`${8 + i * 2}s`}
                  className="rounded-2xl"
                >
                  <div className="rounded-2xl bg-sv-surface p-6 md:p-8">
                    {/* Header row */}
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-3">
                      <h3 className="text-lg md:text-xl font-bold text-white">
                        {step.title}
                      </h3>
                      <span className="text-xs font-semibold uppercase tracking-wider text-sv-primary">
                        {step.duration}
                      </span>
                    </div>

                    <p className="text-[var(--text-secondary)] leading-relaxed text-sm md:text-base">
                      {step.description}
                    </p>
                  </div>
                </StarBorder>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}
