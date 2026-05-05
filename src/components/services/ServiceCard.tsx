"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import CTAButton from "@/components/ui/CTAButton";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { trackEvent } from "@/lib/analytics";

/* ═══════════════════════════════════════════════════════════
   DREAM-OUTCOME SVG ILLUSTRATIONS
   Minimal, abstract, premium. Inspired by Linear/Stripe.
   ═══════════════════════════════════════════════════════════ */

function FoundationSVG() {
  return (
    <svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="service-card__svg">
      <defs>
        <linearGradient id="fGrad" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="var(--brand-accent)" stopOpacity="0.5" />
          <stop offset="100%" stopColor="var(--brand-accent)" stopOpacity="0.08" />
        </linearGradient>
        <linearGradient id="fBeam" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#60A5FA" stopOpacity="0" />
          <stop offset="50%" stopColor="#60A5FA" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#60A5FA" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="fGlow" cx="50%" cy="55%">
          <stop offset="0%" stopColor="var(--brand-accent)" stopOpacity="0.12" />
          <stop offset="100%" stopColor="var(--brand-accent)" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="100" cy="68" r="52" fill="url(#fGlow)" />
      <path d="M100 22 L140 38 L140 68 Q140 96 100 108 Q60 96 60 68 L60 38 Z" fill="url(#fGrad)" stroke="var(--brand-accent)" strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M86 64 L96 74 L116 54" stroke="#60A5FA" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M148 52 Q156 46 148 40" stroke="var(--brand-accent)" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      <path d="M154 56 Q166 46 154 36" stroke="var(--brand-accent)" strokeWidth="1.2" strokeLinecap="round" opacity="0.3" />
      <path d="M160 60 Q176 46 160 32" stroke="var(--brand-accent)" strokeWidth="1" strokeLinecap="round" opacity="0.18" />
      <rect x="98" y="4" width="4" height="14" rx="2" fill="url(#fBeam)" />
    </svg>
  );
}

function GrowthSVG() {
  return (
    <svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="service-card__svg">
      <defs>
        <linearGradient id="gArea" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="var(--brand-accent)" stopOpacity="0.25" />
          <stop offset="100%" stopColor="var(--brand-accent)" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="gLine" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.3" />
          <stop offset="40%" stopColor="var(--brand-accent)" />
          <stop offset="100%" stopColor="#60A5FA" />
        </linearGradient>
        <radialGradient id="gGlow" cx="65%" cy="45%">
          <stop offset="0%" stopColor="var(--brand-accent)" stopOpacity="0.14" />
          <stop offset="100%" stopColor="var(--brand-accent)" stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="130" cy="55" rx="60" ry="45" fill="url(#gGlow)" />
      <path d="M24 95 Q52 88 74 72 Q96 56 120 42 Q144 28 168 18 L168 100 L24 100 Z" fill="url(#gArea)" />
      <path d="M24 95 Q52 88 74 72 Q96 56 120 42 Q144 28 168 18" stroke="url(#gLine)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <circle cx="74" cy="72" r="4" fill="#0e1530" stroke="var(--brand-accent)" strokeWidth="1.5" />
      <circle cx="120" cy="42" r="4" fill="#0e1530" stroke="var(--brand-accent)" strokeWidth="1.5" />
      <circle cx="168" cy="18" r="5" fill="var(--brand-accent)" stroke="#60A5FA" strokeWidth="1.5" />
      <path d="M168 18 L174 14" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" />
      <path d="M168 18 L174 22" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" />
      <rect x="56" y="96" width="3" height="8" rx="1.5" fill="var(--brand-accent)" opacity="0.35" />
      <rect x="90" y="96" width="3" height="12" rx="1.5" fill="var(--brand-accent)" opacity="0.5" />
      <rect x="124" y="96" width="3" height="16" rx="1.5" fill="var(--brand-accent)" opacity="0.65" />
      <rect x="158" y="96" width="3" height="20" rx="1.5" fill="#60A5FA" opacity="0.7" />
    </svg>
  );
}

function ScaleSVG() {
  return (
    <svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="service-card__svg">
      <defs>
        <linearGradient id="sCrown" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.7" />
          <stop offset="100%" stopColor="var(--brand-accent)" stopOpacity="0.9" />
        </linearGradient>
        <radialGradient id="sGlow" cx="50%" cy="50%">
          <stop offset="0%" stopColor="var(--brand-accent)" stopOpacity="0.16" />
          <stop offset="100%" stopColor="var(--brand-accent)" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="sOrbit" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" stopColor="var(--brand-accent)" stopOpacity="0" />
          <stop offset="50%" stopColor="var(--brand-accent)" stopOpacity="0.3" />
          <stop offset="100%" stopColor="var(--brand-accent)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <circle cx="100" cy="62" r="50" fill="url(#sGlow)" />
      <ellipse cx="100" cy="66" rx="68" ry="22" stroke="url(#sOrbit)" strokeWidth="1" fill="none" />
      <ellipse cx="100" cy="66" rx="52" ry="16" stroke="var(--brand-accent)" strokeWidth="0.6" opacity="0.15" fill="none" />
      <ellipse cx="100" cy="66" rx="84" ry="28" stroke="var(--brand-accent)" strokeWidth="0.5" opacity="0.08" fill="none" />
      <path d="M72 56 L80 34 L92 48 L100 26 L108 48 L120 34 L128 56 Z" fill="url(#sCrown)" stroke="#60A5FA" strokeWidth="1" strokeLinejoin="round" />
      <rect x="72" y="56" width="56" height="6" rx="2" fill="var(--brand-accent)" opacity="0.45" />
      <circle cx="32" cy="66" r="5" fill="#0e1530" stroke="#60A5FA" strokeWidth="1.2" />
      <circle cx="168" cy="66" r="5" fill="#0e1530" stroke="#60A5FA" strokeWidth="1.2" />
      <circle cx="100" cy="94" r="4" fill="#0e1530" stroke="var(--brand-accent)" strokeWidth="1.2" />
      <circle cx="54" cy="46" r="3.5" fill="#0e1530" stroke="var(--brand-accent)" strokeWidth="1" opacity="0.6" />
      <circle cx="146" cy="46" r="3.5" fill="#0e1530" stroke="var(--brand-accent)" strokeWidth="1" opacity="0.6" />
      <rect x="95" y="61" width="10" height="10" rx="2" transform="rotate(45 100 66)" fill="var(--brand-accent)" opacity="0.6" />
    </svg>
  );
}

const svgMap: Record<string, () => React.JSX.Element> = {
  foundation: FoundationSVG,
  growth: GrowthSVG,
  scale: ScaleSVG,
};

/* ─── Types ─── */

interface ServiceTier {
  name: string;
  icon: "foundation" | "growth" | "scale";
  tagline: string;
  bestFor: string;
  revenueStage?: string;
  coreOutcome: string;
  deliverables: string[];
  extraDeliverables: string[];
  timeline: string;
  firstWin: string;
  impact: string;
  notIdealIf?: string;
  planCTA: string;
  featured?: boolean;
}

interface Props {
  tier: ServiceTier;
  index: number;
}

/* ─── Plan-specific CTA event map ─── */
const ctaEventMap = {
  Foundation: "services_plan_cta_click_foundation",
  Growth: "services_plan_cta_click_growth",
  Scale: "services_plan_cta_click_scale",
} as const;

/* ─── Component ─── */

export default function ServiceCard({ tier, index }: Props) {
  const [expanded, setExpanded] = useState(false);
  const Illustration = svgMap[tier.icon];
  const eventName = ctaEventMap[tier.name as keyof typeof ctaEventMap] ?? "services_plan_cta_click_foundation";

  return (
    <AnimatedSection delay={0.08 * index}>
      <article
        className={`service-card border border-transparent transition-all duration-200 hover:border-l-2 hover:border-[#D4A853] hover:shadow-lg hover:shadow-[rgba(212,168,83,0.15)] ${tier.featured ? "service-card--featured" : ""}`}
        aria-labelledby={`service-${tier.name.toLowerCase()}-title`}
      >
        {/* Featured badge */}
        {tier.featured && (
          <span className="service-badge" aria-label="Most popular tier">
            Most Popular
          </span>
        )}

        {/* Dream-outcome illustration */}
        <div className="service-card__illustration">
          <Illustration />
        </div>

        {/* Header */}
        <div className="service-card__header">
          <h3
            id={`service-${tier.name.toLowerCase()}-title`}
            className="text-2xl font-bold text-white"
          >
            {tier.name}
          </h3>
          <p className="mt-1 text-sm text-sv-primary font-medium tracking-wide">
            {tier.tagline}
          </p>
        </div>

        {/* Best for line */}
        <p className="text-xs text-sv-text-sub mb-3 flex items-center gap-1.5">
          <span className="text-sv-primary">●</span>
          Best for: {tier.bestFor}
        </p>

        {/* Core outcome */}
        <p className="text-sm text-sv-text-sub leading-relaxed mb-4">
          {tier.coreOutcome}
        </p>

        {/* Deliverables. Max 5 visible */}
        <div className="service-card__deliverables">
          <ul className="space-y-1.5" role="list" aria-label={`${tier.name} deliverables`}>
            {tier.deliverables.map((d, j) => (
              <li key={j} className="service-card__deliverable">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="service-card__check" aria-hidden="true">
                  <circle cx="7" cy="7" r="6.5" stroke="rgba(37,99,235,0.35)" strokeWidth="0.8" />
                  <path d="M4.5 7 L6.2 8.7 L9.5 5.3" stroke="var(--brand-accent)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
                <span className="text-sm text-sv-text-sub">{d}</span>
              </li>
            ))}
          </ul>

          {/* "See full scope" expandable */}
          <AnimatePresence initial={false}>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                className="overflow-hidden"
              >
                <ul className="space-y-1.5 mt-2 pt-2 border-t border-[rgba(255,255,255,0.06)]" role="list">
                  {tier.extraDeliverables.map((d, j) => (
                    <li key={j} className="service-card__deliverable">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="service-card__check" aria-hidden="true">
                        <circle cx="7" cy="7" r="6.5" stroke="rgba(37,99,235,0.2)" strokeWidth="0.8" />
                        <path d="M4.5 7 L6.2 8.7 L9.5 5.3" stroke="var(--brand-accent)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                      </svg>
                      <span className="text-sm text-sv-text-sub">{d}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>

          <button
            type="button"
            onClick={() => {
              setExpanded(!expanded);
              if (!expanded) {
                trackEvent("services_plan_expand_scope", { data: { plan: tier.name } });
              }
            }}
            className="mt-2 text-xs text-sv-primary hover:text-white transition-colors cursor-pointer flex items-center gap-1"
            aria-expanded={expanded}
          >
            {expanded ? "Hide details" : "See full scope"}
            <svg
              width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"
              className={`transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
            >
              <path d="M3 5 L6 8 L9 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Timeline + First Win. Compact row */}
        <div className="service-card__meta">
          <div className="service-card__meta-item">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <circle cx="7" cy="7" r="6" stroke="#8899BB" strokeWidth="0.8" fill="none" />
              <path d="M7 4 V7 L9.5 8.5" stroke="#8899BB" strokeWidth="0.9" strokeLinecap="round" fill="none" />
            </svg>
            <span className="text-xs text-sv-text-sub">{tier.timeline}</span>
          </div>
          <div className="service-card__meta-divider" aria-hidden="true" />
          <p className="text-xs text-sv-text-sub italic flex-1">
            First win: {tier.firstWin}
          </p>
        </div>

        {/* CTA. plan-specific */}
        <CTAButton
          href={`/apply?tier=${encodeURIComponent(tier.name)}`}
          variant={tier.featured ? "primary" : "secondary"}
          size="lg"
          className="w-full text-center"
          eventName={eventName}
        >
          {tier.planCTA}
        </CTAButton>
      </article>
    </AnimatedSection>
  );
}
