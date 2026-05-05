"use client";

import { strategicGap } from "@/lib/content";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/motion";

export default function StrategicGap() {
  const truths = strategicGap.truths;

  return (
    <SectionWrapper id="insight">
      <Reveal className="max-w-2xl mx-auto text-center mb-14 md:mb-16">
        <SectionLabel label={strategicGap.label} className="mb-5" />
  <h2 className="text-[clamp(34px,4.5vw,52px)] font-[800] text-white leading-[1.15] tracking-[-0.025em] max-w-xl mx-auto">
          {strategicGap.headline}
        </h2>
      </Reveal>

      <div className="max-w-4xl mx-auto">
        {/* Top featured card */}
        <Reveal>
          <div className="bg-sv-surface border border-[rgba(255,255,255,0.08)] rounded-[14px] px-8 sm:px-10 py-8 sm:py-9 mb-5">
            <span className="text-[12px] uppercase tracking-[0.14em] text-sv-muted font-bold mb-4 block">
              01
            </span>
            <div className="border-l-[3px] border-sv-primary pl-5">
              <h3 className="text-[22px] font-bold text-white mb-3">
                {truths[0].heading}
              </h3>
              <p className="text-[16px] text-sv-text-sub leading-[1.75] max-w-[640px]">
                {truths[0].body}
              </p>
            </div>
          </div>
        </Reveal>

        {/* Bottom row. Two half-width cards */}
        <div className="flex flex-col sm:flex-row gap-5">
          {truths.slice(1).map((truth, i) => (
            <Reveal key={i} delay={0.1 * (i + 1)}>
              <div className="flex-1 bg-sv-surface border border-[rgba(255,255,255,0.07)] rounded-[14px] px-7 py-7 transition-all duration-300 hover:border-[rgba(37,99,235,0.4)] hover:-translate-y-[2px]">
                <span className="text-[12px] uppercase tracking-[0.14em] text-sv-muted font-bold mb-3 block">
                  {`0${i + 2}`}
                </span>
                <h3 className="text-[18px] font-bold text-white mb-2">
                  {truth.heading}
                </h3>
                <p className="text-[16px] text-sv-text-sub leading-[1.75]">
                  {truth.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
