"use client";

import { useState } from "react";
import { plans } from "@/lib/pricing";
import type { BillingInterval } from "@/lib/pricing";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/motion";
import PricingToggle from "./PricingToggle";
import PlanCard from "./PlanCard";
import PricingFaqAccordion from "./FaqAccordion";
import CTAButton from "@/components/ui/CTAButton";

export default function PricingSection() {
  const [billing, setBilling] = useState<BillingInterval>("monthly");

  return (
    <>
      {/* ═══ PLAN CARDS ═══ */}
      <SectionWrapper variant="surface" id="pricing">
        {/* Header */}
        <Reveal className="text-center mb-12">
          <SectionLabel label="Pricing" className="mb-4" />
          <h2
            className="font-extrabold text-white tracking-tight"
            style={{ fontSize: "clamp(2.25rem, 5vw + 0.5rem, 3.5rem)", lineHeight: 1.1 }}
          >
            Choose Your Growth Stage
          </h2>
          <p className="mt-4 text-[var(--text-secondary)] text-lg max-w-xl mx-auto">
            Pick the plan that matches where you are. And where you want to be.
          </p>
        </Reveal>

        {/* Billing Toggle */}
        <Reveal className="flex justify-center mb-10">
          <PricingToggle value={billing} onChange={setBilling} />
        </Reveal>

        {/* Plan Cards Grid */}
        <div className="grid gap-8 lg:grid-cols-3 max-w-6xl mx-auto items-stretch">
          {plans.map((plan, i) => (
            <PlanCard
              key={plan.name}
              plan={plan}
              billing={billing}
              index={i}
            />
          ))}
        </div>

        {/* Enterprise Strip */}
        <Reveal delay={0.2}>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-[var(--border-soft)] bg-[var(--bg-elevated)]/40 px-8 py-6 shadow-[var(--shadow-soft)]">
            <div>
              <p className="text-white text-base font-medium">
                Need a custom solution or advanced onboarding?
              </p>
              <p className="text-[var(--text-muted)] text-sm mt-1">
                Enterprise plans available for multi-location teams with custom
                requirements.
              </p>
            </div>
            <CTAButton
              href="/apply?tier=Enterprise"
              variant="secondary"
              size="md"
              eventName="services_final_cta_primary_click"
              className="shrink-0"
            >
              Request Custom Plan
            </CTAButton>
          </div>
        </Reveal>
      </SectionWrapper>

      {/* ═══ FAQ ═══ */}
      <SectionWrapper>
        <PricingFaqAccordion />
      </SectionWrapper>
    </>
  );
}
