"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import StarBorder from "@/components/ui/StarBorder";

interface Principle {
  title: string;
  description: string;
}

interface Props {
  principles: Principle[];
}

/**
 * OperatingPrinciples. Three numbered operating principles
 * with StarBorder containers and staggered reveal.
 */
export default function OperatingPrinciples({ principles }: Props) {
  return (
    <SectionWrapper className="bg-[var(--bg-surface)]/30">
      <AnimatedSection className="max-w-3xl mx-auto">
        <SectionLabel label="Operating Principles" className="mb-6" />
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">
          How I Operate
        </h2>

        <div className="space-y-5">
          {principles.map((principle, i) => (
            <AnimatedSection key={i} delay={0.1 * i} direction="left">
              <StarBorder variant="accent" speed="10s" className="rounded-2xl">
                <div className="flex items-start gap-5 rounded-2xl bg-[var(--bg-surface)] p-6 md:p-8">
                  {/* Number badge */}
                  <span
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--brand-accent)] text-sm font-bold text-white mt-0.5"
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>

                  {/* Principle text */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {principle.title}
                    </h3>
                    <p className="text-[var(--text-secondary)] leading-relaxed text-base md:text-lg">
                      {principle.description}
                    </p>
                  </div>
                </div>
              </StarBorder>
            </AnimatedSection>
          ))}
        </div>
      </AnimatedSection>
    </SectionWrapper>
  );
}
