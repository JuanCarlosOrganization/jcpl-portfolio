"use client";

import { servicesIncluded } from "@/lib/content";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/motion";

const icons = [
  /* Tracking */
  <svg key="tracking" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M3 14l4-4 3 3 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>,
  /* Performance */
  <svg key="perf" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M10 3v4M3 10h4M17 10h-4M10 17v-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><circle cx="10" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" /></svg>,
  /* QA */
  <svg key="qa" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"><rect x="3" y="3" width="14" height="14" rx="3" stroke="currentColor" strokeWidth="1.5" /><path d="M7 10l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>,
  /* Ownership */
  <svg key="own" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M10 2L3 7v6c0 4.5 3 8.5 7 10 4-1.5 7-5.5 7-10V7l-7-5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /></svg>,
  /* Reporting */
  <svg key="report" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"><rect x="3" y="8" width="3" height="9" rx="1" stroke="currentColor" strokeWidth="1.2" /><rect x="8.5" y="5" width="3" height="12" rx="1" stroke="currentColor" strokeWidth="1.2" /><rect x="14" y="3" width="3" height="14" rx="1" stroke="currentColor" strokeWidth="1.2" /></svg>,
  /* Communication */
  <svg key="comms" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M4 5h12a1 1 0 011 1v8a1 1 0 01-1 1H7l-3 3V6a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /></svg>,
];

export default function IncludedGrid() {
  return (
    <SectionWrapper id="included" variant="surface">
      <Reveal className="text-center mb-10">
        <SectionLabel label="Every Plan Includes" className="mb-4" />
        <p className="text-sv-text-sub max-w-lg mx-auto text-[0.95rem] leading-relaxed">
          Every engagement ships with measurable infrastructure. Not just pages.
        </p>
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
        {servicesIncluded.map((item, i) => (
          <Reveal key={item.title} delay={0.05 * i}>
            <div className="group flex items-start gap-4 p-5 rounded-xl border border-[rgba(255,255,255,0.06)] bg-sv-surface transition-all duration-300 hover:border-[rgba(37,99,235,0.2)] hover:bg-[#0D1A2D] h-full">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[rgba(37,99,235,0.08)] border border-[rgba(37,99,235,0.12)] text-sv-primary shrink-0 transition-colors duration-300 group-hover:bg-[rgba(37,99,235,0.12)]">
                {icons[i]}
              </div>
              <div>
                <p className="text-sm font-semibold text-white mb-1">{item.title}</p>
                <p className="text-xs text-sv-text-sub leading-relaxed">{item.description}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
