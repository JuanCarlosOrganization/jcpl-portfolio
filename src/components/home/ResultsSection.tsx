"use client";

import { resultsPreview } from "@/lib/content";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import CTAButton from "@/components/ui/CTAButton";
import { Reveal, CountUpValue } from "@/components/motion";

export default function ResultsSection() {
  return (
    <SectionWrapper id="results">
      <Reveal className="max-w-2xl mx-auto text-center mb-14 md:mb-16">
        <SectionLabel label="Results" className="mb-5" />
      </Reveal>

      {/* Dominant metric */}
      <Reveal delay={0.1}>
        <div className="text-center mb-14 md:mb-16">
          <div className="text-6xl md:text-8xl lg:text-[7rem] font-bold text-[var(--text-primary)] mb-3 tabular-nums tracking-tight leading-none">
            <CountUpValue to={20000} prefix="$" durationMs={1800} />
          </div>
          <p className="text-base md:text-lg text-[var(--text-secondary)]">
            {resultsPreview.featured.context}
          </p>
          <p className="text-xs text-[var(--text-muted)] uppercase tracking-[0.15em] mt-2">
            {resultsPreview.featured.client} · {resultsPreview.featured.method}
          </p>
        </div>
      </Reveal>

      {/* Supporting metrics */}
      <div className="grid gap-px md:grid-cols-3 max-w-3xl mx-auto border border-[var(--border-soft)] rounded-[var(--radius-md)] overflow-hidden mb-12">
        {resultsPreview.highlights.map((item, i) => (
          <Reveal key={i} delay={0.06 * i}>
            <div className="bg-[var(--bg-surface)] p-6 md:p-7 text-center">
              <div className="text-2xl font-bold text-[var(--text-primary)] mb-1 tabular-nums">
                {item.metric}
              </div>
              <p className="text-xs text-[var(--text-muted)]">{item.label}</p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Single CTA. no icon, restrained */}
      <Reveal className="text-center" delay={0.2}>
        <CTAButton href="/results" variant="secondary" size="md" eventName="case_card_click">
          View Case Studies
        </CTAButton>
      </Reveal>
    </SectionWrapper>
  );
}
