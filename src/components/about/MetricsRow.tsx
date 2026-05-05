"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import { useLocale } from "@/context/LocaleContext";
import { translations } from "@/lib/translations";

/**
 * MetricsRow. Inline stat tiles with vertical dividers.
 * Engineered baseline look. Compact, no dead space.
 */
export default function MetricsRow() {
  const { locale } = useLocale();
  const m = translations[locale].about.metrics;

  return (
    <AnimatedSection className="max-w-2xl mx-auto">
      {/* Thin top baseline */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[rgba(212,168,83,0.15)] to-transparent mb-1" aria-hidden="true" />

      <div className="grid grid-cols-3 divide-x divide-[rgba(212,168,83,0.15)] rounded-xl bg-sv-surface border border-[rgba(212,168,83,0.15)]">
        <div className="flex flex-col items-center justify-center py-5 px-4 text-center">
          <span className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold tabular-nums text-[var(--brand-accent)] leading-none mb-1.5">
            90
          </span>
          <span className="text-[0.8rem] text-sv-text-sub leading-snug">
            {m.label1}
          </span>
          <span className="text-[0.68rem] text-sv-text-sub opacity-60 mt-0.5 leading-snug">
            {m.note1}
          </span>
        </div>
        <div className="flex flex-col items-center justify-center py-5 px-4 text-center">
          <span className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold tabular-nums text-[var(--brand-accent)] leading-none mb-1.5">
            46x
          </span>
          <span className="text-[0.8rem] text-sv-text-sub leading-snug">
            {m.label2}
          </span>
        </div>
        <div className="flex flex-col items-center justify-center py-5 px-4 text-center">
          <span className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold tabular-nums text-[var(--brand-accent)] leading-none mb-1.5">
            1-2 wks
          </span>
          <span className="text-[0.8rem] text-sv-text-sub leading-snug">
            {m.label3}
          </span>
        </div>
      </div>

      {/* Thin bottom baseline */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[rgba(212,168,83,0.15)] to-transparent mt-1" aria-hidden="true" />

      <p className="text-center text-[0.7rem] text-sv-text-sub mt-3 tracking-wider uppercase">
        {m.updated}
      </p>
    </AnimatedSection>
  );
}
