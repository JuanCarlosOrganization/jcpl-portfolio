"use client";

import { aboutContent } from "@/lib/content";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionLabel from "@/components/ui/SectionLabel";
import { XCircle, CheckCircle2 } from "lucide-react";

const fragmented = [
  "Web designer, media buyer, SEO person, chatbot vendor. None of them talk to each other.",
  "Deliverables ship in silos. No unified strategy.",
  "You become the project manager for five contractors.",
  "Communication gaps erode results and timelines.",
  "You pay for execution and own zero strategy.",
];

const integrated = [
  "One operator owns positioning, funnel, traffic, and automation as one connected system.",
  "Every layer is built to reinforce the others. Compounding, not fragmenting.",
  "Faster launches, lower costs, and a system that scales.",
];



/**
 * AdvantageCompare. 2-column comparison: Fragmented vs Integrated.
 * Distinct column headers, readable bullet text, improved result line.
 */
export default function AdvantageCompare() {
  return (
    <div className="max-w-4xl mx-auto">
      <AnimatedSection className="text-center mb-10">
        <SectionLabel label="The Advantage" className="mb-3" />
        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
          {aboutContent.advantage.headline}
        </h2>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 gap-5">
        {/* Left: Fragmented */}
        <AnimatedSection direction="left" delay={0.1}>
          <div className="rounded-xl border border-[rgba(229,115,115,0.2)] bg-sv-surface p-6 h-full">
            <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-[#E57373] mb-5 pb-3 border-b border-[rgba(229,115,115,0.2)]">
              Fragmented Freelancers
            </h3>
            <ul className="space-y-3.5">
              {fragmented.map((point, i) => (
                <li key={i} className="flex gap-2.5 items-start">
                  <XCircle
                    className="mt-0.5 shrink-0 text-[#E57373]/50"
                    size={16}
                    aria-hidden="true"
                  />
                  <span className="text-[0.82rem] text-sv-text-sub leading-relaxed">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>

        {/* Right: Integrated */}
        <AnimatedSection direction="right" delay={0.15}>
          <div className="rounded-xl border border-[rgba(212,168,83,0.25)] bg-sv-surface p-6 h-full relative overflow-hidden">
            {/* Subtle glow */}
            <div
              className="absolute inset-0 pointer-events-none rounded-xl"
              style={{
                background: "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(212,168,83,0.06) 0%, transparent 70%)",
              }}
              aria-hidden="true"
            />
            <div className="relative">
              <div className="flex flex-wrap items-center gap-2.5 mb-5 pb-3 border-b border-sv-primary/20">
                <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-sv-primary">
                  Integrated System
                </h3>
                <span className="inline-flex items-center rounded-full bg-[rgba(212,168,83,0.12)] border border-sv-primary/30 px-2.5 py-0.5 text-[0.62rem] font-bold text-sv-primary uppercase tracking-wider leading-none">
                  Recommended
                </span>
              </div>
              <ul className="space-y-4">
                {integrated.map((point, i) => (
                  <li key={i} className="flex gap-2.5 items-start">
                    <CheckCircle2
                      className="mt-0.5 shrink-0 text-sv-primary"
                      size={16}
                      aria-hidden="true"
                    />
                    <span className="text-[0.82rem] text-[var(--text-secondary)] leading-relaxed font-medium">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Fragmentation cost notice */}
      <AnimatedSection delay={0.2} className="mt-6 text-center">
        <p className="text-sm text-red-400/70">
          Fragmentation costs: handoffs, delays, and lost leads.
        </p>
      </AnimatedSection>

      {/* Result sentence. Elevated */}
      <AnimatedSection delay={0.25} className="mt-4 text-center">
        <p className="text-base md:text-lg text-[var(--text-secondary)]">
          <span className="text-white font-semibold">The result:</span>{" "}
          faster launches, lower costs, fewer handoffs and a system that compounds over time.
        </p>
      </AnimatedSection>
    </div>
  );
}
