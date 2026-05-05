"use client";

import { aboutTrustStrip } from "@/lib/content";
import AnimatedSection from "@/components/ui/AnimatedSection";
import StarBorder from "@/components/ui/StarBorder";
import { CountUpValue } from "@/components/motion";

/**
 * AboutProofRow. Compact 3-stat credibility row.
 * Uses StarBorder containers + CountUpValue for numeric stats.
 */
export default function AboutProofRow() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-3xl mx-auto">
      {aboutTrustStrip.map((item, i) => {
        const numericMatch = item.metric.match(/^(\d+)/);
        const numericValue = numericMatch
          ? parseInt(numericMatch[1], 10)
          : null;
        const suffix = numericMatch
          ? item.metric.slice(numericMatch[1].length)
          : "";

        return (
          <AnimatedSection key={i} delay={0.12 * i}>
            <StarBorder variant="accent" speed="8s" className="rounded-2xl">
              <div className="flex flex-col items-center justify-center py-6 px-4 bg-sv-surface rounded-2xl text-center min-h-[110px]">
                <span className="text-3xl md:text-4xl font-bold text-sv-primary mb-1 tabular-nums">
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
                <span className="text-xs md:text-sm text-sv-text-sub leading-snug">
                  {item.label}
                </span>
              </div>
            </StarBorder>
          </AnimatedSection>
        );
      })}
    </div>
  );
}
