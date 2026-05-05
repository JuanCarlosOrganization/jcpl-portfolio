"use client";

import { aboutContent } from "@/lib/content";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionLabel from "@/components/ui/SectionLabel";
import StarBorder from "@/components/ui/StarBorder";

/**
 * AboutIntegrated. "Why Integrated Systems Beat Fragmented Freelancers"
 * 3 stacked cards with alternating accent highlight, subtle reveal.
 */
export default function AboutIntegrated() {
  return (
    <div className="max-w-3xl mx-auto">
      <AnimatedSection>
        <SectionLabel label="The Advantage" className="mb-6" />
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
          {aboutContent.advantage.headline}
        </h2>
      </AnimatedSection>

      <div className="space-y-5">
        {aboutContent.advantage.points.map((point, i) => (
          <AnimatedSection key={i} delay={0.1 * i}>
            <StarBorder
              variant="accent"
              speed="10s"
              className="rounded-2xl"
            >
              <div
                className={`rounded-2xl p-6 md:p-8 ${
                  point.accent
                    ? "bg-sv-surface"
                    : "bg-sv-surface"
                }`}
              >
                <p
                  className={`leading-relaxed text-lg ${
                    point.accent
                      ? "text-white font-medium"
                      : "text-[var(--text-secondary)]"
                  }`}
                >
                  {point.text}
                </p>
              </div>
            </StarBorder>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}
