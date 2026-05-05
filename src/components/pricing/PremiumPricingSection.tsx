"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { trackEvent } from "@/lib/analytics";
import ServicesFAQSection from "@/components/services/ServicesFAQ";
import { tiers } from "@/lib/premiumPricingData";
import { caseStudyLogos } from "@/components/hero/LogoLoopData";
import type { TierConfig } from "@/lib/premiumPricingData";

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("w-4 h-4 shrink-0 mt-0.5", className)}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
    >
      <path
        d="M3 8l3.5 3.5L13 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Card({ tier, index }: { tier: TierConfig; index: number }) {
  const isHighlighted = tier.highlighted;
  const badgeClass = tier.badge === "MOST SELECTED" ? "badge-selected" : "badge-exclusive";

  return (
    <article
      className={cn(
        "relative flex flex-col rounded-xl p-6 md:p-6 lg:p-8 transition-all duration-300 ease-out",
        "hover:-translate-y-[4px]",
        "hover:shadow-[0_12px_48px_rgba(0,0,0,0.35)]",
        "focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-[#D4A853]",
        index === 1 && "order-first lg:order-none",
        "bg-[#1E1A14] border border-[#2A2318] border-t-2 border-t-[#D4A853] hover:shadow-[0_12px_48px_rgba(0,0,0,0.35)]",
        isHighlighted && "tier-recommended"
      )}
      style={{ minHeight: "100%" }}
    >
      {/* Badge */}
      {tier.badge && (
        <div
          className={cn(
            "absolute -top-4 left-1/2 -translate-x-1/2 z-10 whitespace-nowrap",
            badgeClass
          )}
        >
          {tier.badge}
        </div>
      )}

      {/* Tier label */}
      <p
        className="text-[10px] font-semibold tracking-[0.22em] uppercase mb-2 text-[#A69D8D]"
      >
        {tier.tierLabel}
      </p>

      {/* Plan name */}
      <h3 className="text-[24px] font-bold text-white mb-2 leading-tight">
        {tier.title}
      </h3>

      {/* Description */}
      <p className="text-[15px] text-white/80 mb-5 leading-relaxed">
        {tier.description}
      </p>

      {/* Price */}
      <div className="mb-2">
        <span className="text-[2.75rem] md:text-5xl font-bold text-white tracking-tight tabular-nums">
          {tier.price}
        </span>
      </div>
      <p className="text-[13px] text-white/60 whitespace-pre-line mb-5">
        {tier.subtext}
      </p>

      {/* For section */}
      <div
        className="rounded-lg px-4 py-3 mb-4 bg-[#221D17] border-l-[3px] border-l-[#D4A853]"
        style={{ fontStyle: "italic" }}
      >
        <p className="text-[13px] text-white/70 leading-relaxed">
          For: {tier.forSection}
        </p>
      </div>

      {/* Proof line or proof block */}
      {tier.proofLine && (
        <p className="text-xs text-white/50 mb-5 leading-relaxed italic">
          {tier.proofLine}
        </p>
      )}
      {tier.proofBlock && (
        <div
          className="rounded-xl px-5 py-4 mb-5 bg-[#221D17] border-l-[3px] border-l-[#D4A853]"
        >
          <p
            className="text-[11px] font-semibold tracking-[0.15em] uppercase mb-2 text-[#D4A853]"
          >
            {tier.proofBlock.label}
          </p>
          <p className="font-semibold text-base text-white leading-snug mb-1">
            {tier.proofBlock.headline}
          </p>
          <p className="text-sm text-white/70">{tier.proofBlock.subtext}</p>
        </div>
      )}

      {/* Features */}
      <ul className="flex flex-col gap-3 flex-1 mb-6" role="list">
        {tier.features.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <CheckIcon className="text-[#D4A853]" />
            <span className="text-[15px] text-white/80 leading-relaxed">
              {item}
            </span>
          </li>
        ))}
      </ul>

      {/* Note or scarcity note */}
      {tier.note && (
        <p className="text-xs text-white/50 mb-5 leading-relaxed whitespace-pre-line">
          {tier.note}
        </p>
      )}
      {tier.scarcityNote && (
        <div className="rounded-xl px-5 py-4 mb-6 bg-white/[0.03] border border-white/[0.08]">
          <p className="text-xs text-white/60 leading-relaxed">
            {tier.scarcityNote}
          </p>
        </div>
      )}

      {/* CTA */}
      <div className="mt-auto">
        <Link
          href={tier.ctaHref}
          onClick={() => trackEvent("section_cta_click")}
          className={cn(
            "block w-full text-center font-semibold py-3.5 rounded-xl transition-all duration-300",
            isHighlighted
              ? "cta-primary"
              : "cta-secondary"
          )}
        >
          {tier.ctaLabel}
        </Link>
        {tier.ctaSubtext && (
          <p className="text-[11px] text-white/50 text-center mt-3 leading-relaxed">
            {tier.ctaSubtext}
          </p>
        )}
      </div>
    </article>
  );
}

interface PremiumPricingSectionProps {
  heading?: string;
  subheadline?: string;
}

export default function PremiumPricingSection({
  heading = "Choose the growth system that fits your business.",
  subheadline = "Three ways to turn your online presence into a predictable lead engine.",
}: PremiumPricingSectionProps = {}) {
  return (
    <section
      id="pricing"
      className="w-full py-20 md:py-28 relative overflow-hidden"
      style={{ background: "#131009" }}
      aria-labelledby="pricing-heading"
    >
      {/* Pricing orb. Behind middle card */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full pointer-events-none z-0 max-md:w-[270px] max-md:h-[270px]"
        style={{
          background: "radial-gradient(circle, rgba(212,168,83,0.04) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
        aria-hidden
      />
      <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        {/* Section header */}
        <header className="text-center mb-16 md:mb-20">
          <p
            id="pricing-eyebrow"
            className="section-label mb-4"
            style={{ fontSize: "14px", fontWeight: 600, letterSpacing: "0.1em", color: "#D4A853" }}
          >
            PRICING
          </p>
          <h2
            id="pricing-heading"
            className="text-[clamp(2rem,5vw,2.25rem)] font-semibold text-white tracking-tight mb-4 leading-tight"
          >
            {heading}
          </h2>
          <p className="text-base md:text-lg text-white/80 max-w-xl mx-auto leading-relaxed">
            {subheadline}
          </p>
        </header>

        {/* Card grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {tiers.map((tier, i) => (
            <Card key={tier.title} tier={tier} index={i} />
          ))}
        </div>

        {/* Proof / comparison block */}
        <div
          className="mt-16 md:mt-20 rounded-xl border border-[#2A2318] overflow-hidden"
          style={{ background: "#131009" }}
          role="region"
          aria-label="Feature comparison and social proof"
        >
          {/* Top accent line */}
          <div
            className="h-0.5 w-full"
            style={{ background: "#D4A853" }}
          />

          <div className="p-6 md:p-8 lg:p-10">
            {/* Proof block */}
            <div className="mt-12 pt-12 border-t text-center" style={{ borderColor: "#2A2318" }}>
              <p
                className="text-base md:text-lg font-medium leading-relaxed max-w-2xl mx-auto italic"
                style={{ color: "#D2C9B8" }}
              >
                Triple W Rentals went from 0 inbound calls to 14 qualified
                bookings in 30 days on $900 in ad spend.
              </p>
            </div>

            {/* Optional logo row */}
            <div className="mt-12 pt-12 border-t" style={{ borderColor: "#2A2318" }}>
              <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-25">
                {caseStudyLogos.slice(0, 5).map((logo) => (
                  <span
                    key={logo.name}
                    className="text-xs font-medium text-white/80 uppercase tracking-wider"
                  >
                    {logo.name}
                  </span>
                ))}
              </div>
            </div>

            {/* FAQ + CTA */}
            <div className="mt-12 pt-12 border-t" style={{ borderColor: "#2A2318" }}>
              <ServicesFAQSection />
              <div className="text-center mt-8">
                <Link
                  href="/apply"
                  onClick={() => trackEvent("services_final_cta_primary_click")}
                  className="cta-primary inline-flex items-center justify-center font-semibold px-8 py-3.5 rounded-xl"
                >
                  Book a Strategy Call
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
