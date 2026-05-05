"use client";

import { aboutContent } from "@/lib/content";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionLabel from "@/components/ui/SectionLabel";
import StarBorder from "@/components/ui/StarBorder";

/**
 * AboutPhilosophy. Single centered statement card
 * with StarBorder accent glow and subtle reveal.
 */
export default function AboutPhilosophy() {
  return (
    <AnimatedSection className="max-w-3xl mx-auto text-center">
      <StarBorder variant="accent" speed="12s" className="rounded-3xl">
        <div className="rounded-3xl bg-sv-surface py-12 px-8 md:py-16 md:px-12">
          <SectionLabel label="Philosophy" className="mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {aboutContent.philosophy.headline}
          </h2>
          <p className="text-lg text-[var(--text-secondary)] leading-relaxed max-w-2xl mx-auto">
            {aboutContent.philosophy.body}
          </p>
        </div>
      </StarBorder>
    </AnimatedSection>
  );
}
