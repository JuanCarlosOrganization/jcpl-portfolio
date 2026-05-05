"use client";

import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedSection from "@/components/ui/AnimatedSection";
import CTAButton from "@/components/ui/CTAButton";
import FounderUnicornProfile from "@/components/ui/FounderUnicornProfile";
import { useLocale } from "@/context/LocaleContext";
import { translations } from "@/lib/translations";

function LightningIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="w-3.5 h-3.5 text-sv-primary">
      <path d="M9 1L3 9h5l-1 6 7-9H9l1-5z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" fill="none" />
    </svg>
  );
}
function LockIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="w-3.5 h-3.5 text-sv-primary">
      <rect x="3" y="7" width="10" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
      <path d="M5 7V5a3 3 0 016 0v2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      <circle cx="8" cy="11" r="1" fill="currentColor"/>
    </svg>
  );
}
function ClipboardIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="w-3.5 h-3.5 text-sv-primary">
      <rect x="3" y="3" width="10" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
      <path d="M6 3V2h4v1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      <path d="M5.5 8h5M5.5 11h3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  );
}

/**
 * AboutHero. 12-col grid: left 7 cols copy, right 5 cols portrait.
 * Two CTAs + trust row. Portrait wrapped in CSS overlay. Animation UNTOUCHED.
 */
export default function AboutHero() {
  const { locale, lp } = useLocale();
  const h = translations[locale].about.hero;

  const trustItems = [
    { Icon: LightningIcon, text: h.trust1 },
    { Icon: LockIcon, text: h.trust2 },
    { Icon: ClipboardIcon, text: h.trust3 },
  ];

  return (
    <div className="grid gap-10 lg:gap-14 items-center lg:grid-cols-12">
      {/* ── Left: Copy (7 cols) ── */}
      <div className="lg:col-span-7">
        <AnimatedSection direction="left">
          <SectionLabel label={h.sectionLabel} className="mb-5" />

          {/* H1 */}
          <h1
            className="font-bold text-white leading-tight mb-4"
            style={{
              fontSize: "clamp(2rem, 3.6vw + 0.5rem, 3rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            {h.h1}
          </h1>

          {/* Sub-head */}
          <p className="text-sv-primary font-medium text-base md:text-lg mb-4 leading-snug">
            {h.subHead}
          </p>

          {/* Mechanism lines */}
          <div className="space-y-4 mb-6 max-w-[52ch]">
            <p className="text-sv-text-sub text-[0.9rem] md:text-[0.95rem] leading-relaxed">
              {h.body1}
            </p>
            <p className="text-sv-text-sub text-[0.9rem] md:text-[0.95rem] leading-relaxed">
              {h.body2}
            </p>
          </div>

          {/* Mechanism bullets */}
          <ul className="space-y-2.5 mb-8" aria-label="What I build">
            <li className="flex items-start gap-2 text-sv-text-sub text-[0.97rem]">
              <span className="mt-1.5 h-1 w-1 rounded-full bg-sv-primary shrink-0" aria-hidden="true" />
              {h.bullet1}
            </li>
            <li className="flex items-start gap-2 text-sv-text-sub text-[0.97rem]">
              <span className="mt-1.5 h-1 w-1 rounded-full bg-sv-primary shrink-0" aria-hidden="true" />
              {h.bullet2}
            </li>
            <li className="flex items-start gap-2 text-sv-text-sub text-[0.97rem]">
              <span className="mt-1.5 h-1 w-1 rounded-full bg-sv-primary shrink-0" aria-hidden="true" />
              {h.bullet3}
            </li>
          </ul>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-7">
            <CTAButton href={lp("/apply")} size="lg" eventName="hero_primary_cta_click">
              {h.cta1}
            </CTAButton>
            <CTAButton href={lp("/results")} variant="secondary" size="md" eventName="hero_secondary_cta_click">
              {h.cta2}
            </CTAButton>
          </div>

          {/* Trust row */}
          <div className="flex flex-wrap gap-x-5 gap-y-1.5">
            {trustItems.map(({ Icon, text }) => (
              <span
                key={text}
                className="inline-flex items-center gap-1.5 text-[0.72rem] text-sv-text-sub tracking-wide"
              >
                <Icon />
                {text}
              </span>
            ))}
          </div>
        </AnimatedSection>
      </div>

      {/* ── Right: Portrait (5 cols). Unicorn Studio animated portrait ── */}
      <div className="lg:col-span-5 w-full h-[480px] sm:h-[600px] lg:h-[844px] max-w-[390px] mx-auto">
        <FounderUnicornProfile />
      </div>
    </div>
  );
}
