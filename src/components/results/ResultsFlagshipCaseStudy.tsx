"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { CaseStudy } from "@/content/caseStudies";
import { useLocale } from "@/context/LocaleContext";
import { translations } from "@/lib/translations";

export default function ResultsFlagshipCaseStudy({ cs }: { cs: CaseStudy }) {
  const { locale } = useLocale();
  const rf = translations[locale].results.flagship;
  const narrative = cs.narrative ?? cs.situation;
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = sectionRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(32px)";
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
        observer.disconnect();
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Split metrics: primary (revenue) gets dominant display, rest are supporting
  const primaryMetric = cs.metrics[0];
  const supportingMetrics = cs.metrics.slice(1);

  const verifyLines = [rf.verifyLine1, rf.verifyLine2, rf.verifyLine3];

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24"
      style={{ background: "#131009" }}
    >
      <div className="max-w-[1120px] mx-auto px-6">
        {/* Section marker */}
        <div className="flex items-center gap-3 mb-10">
          <span className="text-[11px] uppercase tracking-[0.14em] text-[rgba(255,255,255,0.3)]">
            {rf.sectionMarker}
          </span>
          <span
            className="flex-1 h-px"
            style={{ background: "rgba(212,168,83,0.1)" }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Narrative */}
          <div>
            <span className="text-[11px] uppercase tracking-[0.14em] text-[#D4A853] block mb-4">
              {cs.industry}
            </span>
            <h2 className="text-[clamp(28px,3.5vw,40px)] font-extrabold text-white leading-[1.1] mb-5 tracking-[-0.02em]">
              {cs.title}
            </h2>
            <div className="mb-8 max-w-[480px]">
              {narrative.split("\n\n").map((para, i) => (
                <p key={i} className="text-[17px] text-[#D2C9B8] leading-[1.75] mb-4 last:mb-0">
                  {para}
                </p>
              ))}
            </div>

            {/* VERIFIED badge */}
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-8 border border-[rgba(212,168,83,0.3)] bg-[rgba(212,168,83,0.06)]">
              <svg
                className="w-3.5 h-3.5 text-[#D4A853]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-[12px] font-semibold text-[#D4A853]">
                {rf.verified}
              </span>
            </div>

            {/* CTA links. Clear hierarchy */}
            <div className="flex flex-wrap gap-3">
              <Link
                href={`/results/${cs.caseStudySlug}`}
                className="inline-flex items-center gap-2 bg-[#D4A853] text-[#0D0B09] px-5 py-2.5 rounded-lg text-[14px] font-bold hover:bg-[#C9983E] transition-colors"
              >
                {rf.viewCaseStudy}
              </Link>
              {cs.metricsImageUrl && (
                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById("metrics-preview");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="border border-[rgba(212,168,83,0.3)] text-[rgba(255,255,255,0.6)] px-5 py-2.5 rounded-lg text-[14px] font-medium hover:border-[rgba(212,168,83,0.5)] hover:text-white transition-colors"
                >
                  {rf.scrollToProof}
                </button>
              )}
            </div>
          </div>

          {/* Right: Metric panel + preview */}
          <div id="metrics-preview">
            <div
              className="rounded-2xl overflow-hidden border"
              style={{
                borderColor: "rgba(212,168,83,0.15)",
                background: "#0D0B09",
              }}
            >
              {/* Metric panel. Primary dominant */}
              <div
                className="border-b p-6"
                style={{ borderColor: "rgba(212,168,83,0.1)" }}
              >
                {/* Primary metric */}
                {primaryMetric && (
                  <div
                    className="pb-4 mb-4 border-b"
                    style={{ borderColor: "rgba(255,255,255,0.06)" }}
                  >
                    <div className="text-[11px] uppercase tracking-[0.12em] text-[rgba(255,255,255,0.35)] mb-1.5">
                      {primaryMetric.label}
                    </div>
                    <div className="text-[36px] font-extrabold text-white tracking-[-0.03em] leading-none">
                      {primaryMetric.value}
                    </div>
                  </div>
                )}

                {/* Supporting metrics */}
                <div className="grid grid-cols-3 gap-3">
                  {supportingMetrics.map((m) => (
                    <div key={m.label}>
                      <div className="text-[11px] text-[rgba(255,255,255,0.35)] uppercase tracking-wider mb-1">
                        {m.label}
                      </div>
                      <div className="text-[18px] font-bold text-white">
                        {m.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verification context. Authored evidence, not a browser mock */}
              <div className="p-6 pt-5">
                <p className="text-[10px] uppercase tracking-[0.12em] text-[rgba(255,255,255,0.25)] mb-4">
                  {rf.verificationContext}
                </p>
                <div className="space-y-3 mb-5">
                  {verifyLines.map((line) => (
                    <div key={line} className="flex items-start gap-3">
                      <span
                        className="flex-shrink-0 mt-[7px] w-3 h-px"
                        style={{ background: "rgba(212,168,83,0.4)" }}
                      />
                      <span className="text-[13px] text-[rgba(255,255,255,0.45)] leading-[1.55]">
                        {line}
                      </span>
                    </div>
                  ))}
                </div>
                {cs.metricsImageUrl && (
                  <a
                    href={cs.metricsImageUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[12px] text-[rgba(212,168,83,0.55)] hover:text-[#D4A853] transition-colors"
                  >
                    {rf.viewMetrics}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
