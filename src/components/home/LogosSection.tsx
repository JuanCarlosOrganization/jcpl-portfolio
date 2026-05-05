"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/motion";

/* ─── Industries served. Honest, verifiable ─── */
const INDUSTRIES = [
  { category: "RV Rentals", detail: "Fleet-based rental operations" },
  { category: "Barbershops", detail: "Premium grooming studios" },
  { category: "Dental Practices", detail: "Patient acquisition systems" },
  { category: "Real Estate", detail: "Listing & lead generation" },
  { category: "Local Services", detail: "Trade & service businesses" },
  { category: "Multi-Location", detail: "Scalable growth frameworks" },
];

/* ─── Tech stack. What the systems are built with ─── */
const STACK = [
  "Next.js",
  "React",
  "TypeScript",
  "Google Ads",
  "Meta Ads",
  "AI Automation",
  "SEO / GEO",
  "Vercel",
];

export default function LogosSection() {
  return (
    <SectionWrapper id="credibility" variant="surface">
      {/* Industries served */}
      <Reveal className="max-w-2xl mx-auto text-center mb-14 md:mb-16">
        <SectionLabel label="Industries I Serve" className="mb-5" />
        <h2 className="heading-2 max-w-lg mx-auto">
          Built for Service Businesses
        </h2>
      </Reveal>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-px max-w-4xl mx-auto border border-[var(--border-soft)] rounded-[var(--radius-md)] overflow-hidden mb-16 md:mb-20">
        {INDUSTRIES.map((item, i) => (
          <Reveal key={item.category} delay={0.05 * i}>
            <div className="bg-[var(--bg-surface)] p-6 md:p-8 text-center h-full flex flex-col justify-center">
              <p className="text-sm font-semibold text-[var(--text-primary)] tracking-wide">
                {item.category}
              </p>
              <p className="text-xs text-[var(--text-muted)] mt-1.5">
                {item.detail}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Tech stack strip */}
      <Reveal className="max-w-4xl mx-auto" delay={0.2}>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text-muted)] text-center mb-6">
          Built With
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {STACK.map((tech) => (
            <span
              key={tech}
              className="text-xs font-medium text-[var(--text-secondary)] border border-[var(--border-soft)] rounded-[var(--radius-sm)] px-3 py-1.5"
            >
              {tech}
            </span>
          ))}
        </div>
      </Reveal>
    </SectionWrapper>
  );
}
