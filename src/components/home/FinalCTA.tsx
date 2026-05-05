"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import CTAButton from "@/components/ui/CTAButton";
import { ctaCopy } from "@/lib/content";
import { Reveal } from "@/components/motion";

export default function FinalCTA() {
  return (
    <section id="cta" className="relative overflow-hidden">
      {/* Background treatment. Distinct from other sections */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(212,168,83,0.04) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, var(--bg-base) 0%, rgba(13,11,9,0.6) 50%, var(--bg-base) 100%)",
        }}
        aria-hidden="true"
      />

      <SectionWrapper className="relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          {/* Headline */}
          <Reveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.12] tracking-tight mb-5">
              Your Pipeline Will Not Build Itself.
            </h2>
            <p className="text-[var(--text-secondary)] leading-[1.75] mb-10 max-w-lg mx-auto text-[18px]">
              Every week without a system is revenue you will not
              recover. Apply now. If there&apos;s a fit, you&apos;ll hear
              from me within 24 hours.
            </p>
          </Reveal>

          {/* CTAs */}
          <Reveal delay={0.1}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <CTAButton
                href={ctaCopy.href}
                size="lg"
                eventName="final_cta_primary_click"
              >
                {ctaCopy.primary}
              </CTAButton>
              <CTAButton
                href="/results"
                variant="secondary"
                size="md"
                eventName="final_cta_secondary_click"
              >
                {ctaCopy.secondary}
              </CTAButton>
            </div>
          </Reveal>

          {/* Micro-proof strip */}
          <Reveal delay={0.2}>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {[
                { icon: "\u26A1", text: "Reply within 24 hours" },
                { icon: "\uD83D\uDD13", text: "No long-term contracts" },
                { icon: "\uD83D\uDD39", text: "Selective partnerships" },
              ].map((item) => (
                <span
                  key={item.text}
                  className="inline-flex items-center gap-1.5 text-[14px] text-[var(--text-muted)]"
                >
                  <span aria-hidden="true" className="text-[0.7rem]">
                    {item.icon}
                  </span>
                  {item.text}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Spacer before footer */}
        <div className="h-10 md:h-16" aria-hidden="true" />
      </SectionWrapper>
    </section>
  );
}
