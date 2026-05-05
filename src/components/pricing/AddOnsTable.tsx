"use client";

import { addOns, plans } from "@/lib/pricing";
import { Reveal } from "@/components/motion";
import SectionLabel from "@/components/ui/SectionLabel";
import CTAButton from "@/components/ui/CTAButton";

export default function AddOnsTable() {
  return (
    <div className="mt-16">
      <Reveal>
        <div className="mb-6">
          <SectionLabel label="Extras" className="mb-3" />
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Add-ons
          </h2>
          <p className="mt-2 text-sm text-sv-text-sub max-w-lg">
            From custom integrations to white-glove onboarding, power up your
            growth system with add-ons.
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div
          className="overflow-x-auto rounded-2xl border border-[rgba(255,255,255,0.06)] bg-sv-surface"
          role="region"
          aria-label="Add-ons pricing table"
          tabIndex={0}
        >
          <table className="w-full min-w-[600px] text-sm">
            <thead>
              <tr className="border-b border-[rgba(255,255,255,0.06)]">
                <th className="sticky left-0 z-10 bg-sv-surface text-left px-6 py-4 text-sv-text-sub font-semibold w-[240px] min-w-[200px]">
                  Add-on
                </th>
                {plans.map((plan) => (
                  <th
                    key={plan.name}
                    className="px-6 py-4 text-center text-sv-text-sub font-semibold min-w-[140px]"
                  >
                    {plan.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {addOns.map((row) => (
                <tr
                  key={row.name}
                  className="border-b border-[rgba(255,255,255,0.04)] transition-colors hover:bg-white/[0.02]"
                >
                  <td className="sticky left-0 z-10 bg-sv-surface px-6 py-4 min-w-[200px]">
                    <div className="font-medium text-white text-[13px]">
                      {row.name}
                    </div>
                    <div className="text-[11px] text-sv-text-sub mt-0.5">
                      {row.descriptor}
                    </div>
                  </td>
                  {row.prices.map((price, i) => (
                    <td
                      key={i}
                      className="px-6 py-4 text-center text-[13px]"
                    >
                      {price === "," ? (
                        <span className="text-sv-text-sub/60">−</span>
                      ) : price === "Included" ? (
                        <span className="text-sv-primary font-medium">
                          Included
                        </span>
                      ) : (
                        <span className="text-sv-text-sub">
                          {price}
                        </span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>

          {/* Bottom CTA row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 border-t border-[rgba(255,255,255,0.06)] px-6 py-5">
            {plans.map((plan) => (
              <CTAButton
                key={plan.name}
                href={plan.ctaHref}
                variant={plan.recommended ? "primary" : "secondary"}
                size="sm"
                eventName={
                  `services_plan_cta_click_${plan.name.toLowerCase()}` as
                    | "services_plan_cta_click_foundation"
                    | "services_plan_cta_click_growth"
                    | "services_plan_cta_click_scale"
                }
              >
                Start with {plan.name}
              </CTAButton>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Billing note */}
      <Reveal delay={0.15}>
        <p className="mt-4 text-center text-[11px] text-sv-text-sub">
          All prices are monthly and billed according to the billing cycle
          selected at checkout. Any applicable sales tax will be added at
          checkout based on your location.
        </p>
      </Reveal>
    </div>
  );
}
