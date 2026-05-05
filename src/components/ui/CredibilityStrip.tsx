"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionWrapper from "@/components/ui/SectionWrapper";
import StarBorder from "@/components/ui/StarBorder";
import { CountUpValue } from "@/components/motion";

interface Metric {
  metric: string;
  label: string;
}

interface Props {
  metrics: Metric[];
}

/**
 * CredibilityStrip. Animated metrics-based trust strip.
 * Uses StarBorder for premium containers + CountUpValue for numeric metrics.
 */
export default function CredibilityStrip({ metrics }: Props) {
  return (
    <SectionWrapper className="!py-12 md:!py-16">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-3xl mx-auto">
        {metrics.map((item, i) => {
          // Extract numeric value for CountUp if possible
          const numericMatch = item.metric.match(/^(\d+)/);
          const numericValue = numericMatch ? parseInt(numericMatch[1], 10) : null;
          const suffix = numericMatch
            ? item.metric.slice(numericMatch[1].length)
            : "";

          return (
            <AnimatedSection key={i} delay={0.12 * i}>
              <StarBorder
                variant="accent"
                speed="8s"
                className="rounded-2xl"
              >
                <div className="flex flex-col items-center justify-center py-6 px-4 bg-[var(--bg-surface)] rounded-2xl text-center min-h-[110px]">
                  <span className="text-3xl md:text-4xl font-bold text-[var(--brand-accent)] mb-1 tabular-nums">
                    {numericValue !== null ? (
                      <CountUpValue
                        to={numericValue}
                        suffix={suffix}
                        durationMs={1400}
                      />
                    ) : (
                      item.metric
                    )}
                  </span>
                  <span className="text-xs md:text-sm text-[var(--text-muted)] leading-snug">
                    {item.label}
                  </span>
                </div>
              </StarBorder>
            </AnimatedSection>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
