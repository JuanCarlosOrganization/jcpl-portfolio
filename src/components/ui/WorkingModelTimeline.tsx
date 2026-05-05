"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import StarBorder from "@/components/ui/StarBorder";

interface TimelineStep {
  phase: string;
  title: string;
  duration: string;
  description: string;
  icon?: string;
}

interface Props {
  timeline: TimelineStep[];
}

/**
 * WorkingModelTimeline. Vertical timeline showing working model phases.
 * Each step uses a StarBorder container with staggered animation.
 */
export default function WorkingModelTimeline({ timeline }: Props) {
  return (
    <div className="relative">
      {/* Vertical connector line */}
      <div
        className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--brand-accent)]/40 via-[var(--brand-accent)]/20 to-transparent"
        aria-hidden="true"
      />

      <div className="space-y-6">
        {timeline.map((step, i) => (
          <AnimatedSection key={i} delay={0.15 * i} direction="left">
            <div className="relative pl-16 md:pl-20">
              {/* Phase dot */}
              <div
                className="absolute left-3.5 md:left-5.5 top-6 flex h-5 w-5 items-center justify-center"
                aria-hidden="true"
              >
                <span className="h-3 w-3 rounded-full bg-[var(--brand-accent)] ring-4 ring-[var(--bg-base)]" />
              </div>

              <StarBorder
                variant={i === 0 ? "alt" : "accent"}
                speed={`${8 + i * 2}s`}
                className="rounded-2xl"
              >
                <div className="rounded-2xl bg-[var(--bg-surface)] p-6 md:p-8">
                  {/* Header row */}
                  <div className="flex items-center gap-3 mb-3">
                    {step.icon && (
                      <span
                        className="text-2xl select-none"
                        role="img"
                        aria-label={step.phase}
                      >
                        {step.icon}
                      </span>
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                        <h3 className="text-lg md:text-xl font-bold text-white">
                          {step.title}
                        </h3>
                        <span className="text-xs font-semibold uppercase tracking-wider text-[var(--brand-alt)]">
                          {step.duration}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
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
  );
}
