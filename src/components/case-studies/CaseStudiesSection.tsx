"use client";

import Link from "next/link";
import { caseStudies } from "@/content/caseStudies";
import ResultsFlagshipCaseStudy from "@/components/results/ResultsFlagshipCaseStudy";
import ResultsSecondaryCase from "@/components/results/ResultsSecondaryCase";
import ResultsPortfolioSection from "@/components/results/ResultsPortfolioSection";
import ResultsCTA from "@/components/results/ResultsCTA";

const TRIPLE_W_ID = "triple-w-rentals";
const ELITE_ID = "elite-barbershop";
const BUILDING_IDS = ["absolute-painting", "centre-dentaire-saint-elzear"];

/* ── Section 2: Case study summary cards with anchor links ── */
function CaseStudyCardGrid() {
  const cards = [
    {
      label: "LEAD PARTNERSHIP",
      niche: "RV RENTAL, TEXAS",
      client: "Triple W Rentals",
      stat: "$41,085",
      subStats: "46x ROAS · $900 ad spend · 30 days",
      slug: "triple-w-rentals",
      anchor: "#triple-w",
      siteUrl: null as string | null,
      badge: "VERIFIED \u2014 REVENUE",
      badgeColor: "#D4A853",
      testimonial: { quote: "Since Juan came on, we have been getting way more quality leads. Business is doing extremely well in the city now.", name: "Westin Wayne Walker", location: "Texas" },
    },
    {
      label: "SEO CAMPAIGN ACTIVE",
      niche: "PREMIUM BARBERSHOP, MONTREAL",
      client: "Elite Barbershop",
      stat: "Targeting #1",
      subStats: "SEO campaign active · Local search · In progress",
      slug: "elite-barbershop",
      anchor: "#elite",
      siteUrl: "https://elitebyhadi.com/fr/",
      badge: "IN PROGRESS \u2014 LOCAL SEO",
      badgeColor: "#B8963E",
      testimonial: { quote: "I love it. Very nice and professional.", name: "Hadi", location: "Montreal" },
    },
    {
      label: "WEBSITE DELIVERED",
      niche: "BARBERSHOP, MONTREAL",
      client: "Culture Barbershop",
      stat: "Full custom website",
      subStats: "Conversion website built from scratch",
      slug: "culture-barbershop",
      anchor: "#culture",
      siteUrl: "https://culturemtl.ca",
      badge: "DELIVERED \u2014 WEBSITE",
      badgeColor: "#A69D8D",
      testimonial: { quote: "Juan built the website exactly how I wanted it. Highly recommend.", name: "Tobari", location: "Montreal" },
    },
    {
      label: "WEBSITE DELIVERED",
      niche: "PAINTING CONTRACTOR, DALLAS-FORT WORTH",
      client: "Absolute Painting",
      stat: "Full custom website",
      subStats: "Fully custom coded website built from scratch",
      slug: "absolute-painting",
      anchor: "#absolute",
      siteUrl: "https://absolutepainting.vercel.app/quote",
      badge: "DELIVERED \u2014 WEBSITE",
      badgeColor: "#A69D8D",
      ownerPhoto: "/images/owners/wesley-absolute-painting.webp",
      ownerName: "Wesley, Absolute Painting",
      testimonial: { quote: "Professional website that represents the brand. Built exactly what was needed.", name: "Wesley", location: "Dallas-Fort Worth" },
    },
    {
      label: "WEBSITE DELIVERED",
      niche: "DENTAL CLINIC, QUEBEC",
      client: "Centre Dentaire Saint-\u00C9lz\u00E9ar",
      stat: "Full custom website",
      subStats: "Fully custom coded dental clinic website",
      slug: "centre-dentaire-saint-elzear",
      anchor: "#dentaire",
      siteUrl: "https://as.centredentairese.com",
      badge: "DELIVERED \u2014 WEBSITE",
      badgeColor: "#A69D8D",
      ownerPhoto: "/images/owners/dre-benyoucef-centre-dentaire.webp",
      ownerName: "Dre Benyoucef, Centre Dentaire Saint-\u00C9lz\u00E9ar",
      testimonial: null,
    },
  ];

  return (
    <section className="py-16 md:py-24" style={{ background: "#0D0B09" }}>
      <div className="max-w-[1120px] mx-auto px-6">
        <p className="text-[11px] uppercase tracking-[0.16em] mb-3" style={{ color: "#D4A853" }}>
          CASE STUDIES
        </p>
        <h2 className="text-[clamp(26px,3.5vw,38px)] font-extrabold text-white leading-[1.1] mb-12 tracking-[-0.02em]">
          Real Results. Real Businesses.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <a
              key={card.slug}
              href={card.anchor}
              className="rounded-xl overflow-hidden cursor-pointer transition-all duration-200 block"
              style={{
                background: "#131009",
                border: "1px solid rgba(212,168,83,0.12)",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(212,168,83,0.3)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(212,168,83,0.12)"; }}
            >
              <div className="p-6">
                {/* Proof type badge */}
                <p className="text-[9px] font-bold tracking-[0.16em] uppercase mb-3" style={{ color: card.badgeColor }}>
                  {card.badge}
                </p>
                <p className="text-[10px] font-bold tracking-[0.18em] uppercase mb-3" style={{ color: "#D4A853" }}>
                  {card.label}
                </p>
                <p className="text-[11px] uppercase tracking-[0.1em] mb-2" style={{ color: "rgba(255,255,255,0.3)" }}>
                  {card.niche}
                </p>
                <h3 className="text-lg font-bold text-white mb-4">{card.client}</h3>
                <p className="text-[40px] font-extrabold text-white tracking-[-0.03em] leading-none mb-2">
                  {card.stat}
                </p>
                <p className="text-[13px] mb-5" style={{ color: "rgba(255,255,255,0.4)" }}>
                  {card.subStats}
                </p>

                {/* Testimonial quote */}
                {card.testimonial && (
                <div
                  className="rounded-lg p-3 mb-5"
                  style={{
                    background: "rgba(212,168,83,0.04)",
                    borderLeft: "2px solid rgba(212,168,83,0.4)",
                  }}
                >
                  <p className="text-[12px] italic leading-[1.6]" style={{ color: "#D2C9B8" }}>
                    &ldquo;{card.testimonial.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-2 mt-1.5">
                    {card.ownerPhoto && (
                      <img loading="lazy" decoding="async"
                        src={card.ownerPhoto}
                        alt={card.ownerName || card.testimonial.name}
                        className="w-6 h-6 rounded-full object-cover"
                        style={{ filter: "grayscale(100%)" }}
                      />
                    )}
                    <p className="text-[11px]" style={{ color: "#756D63" }}>
                      {card.ownerName || `${card.testimonial.name}, ${card.testimonial.location}`}
                    </p>
                  </div>
                </div>
                )}

                <div className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 border border-[rgba(212,168,83,0.25)] bg-[rgba(212,168,83,0.06)]">
                  <span className="text-[11px] font-semibold" style={{ color: "#D4A853" }}>
                    &#10003; Verified
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Legend */}
        <p className="text-[12px] text-center mt-8" style={{ color: "rgba(255,255,255,0.3)" }}>
          VERIFIED = tracked from live ad account. IN PROGRESS = campaign active, results pending. DELIVERED = fully custom website built and handed over.
        </p>
      </div>
    </section>
  );
}

/* ── Culture Barbershop. Layout C: compact full-width card ── */
function CultureCaseStudy() {
  return (
    <section
      id="culture"
      className="py-14 md:py-20"
      style={{ background: "#0D0B09", borderTop: "1px solid rgba(212,168,83,0.07)" }}
    >
      <div className="max-w-[1120px] mx-auto px-6">
        <div
          className="rounded-xl p-8 md:p-10"
          style={{
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(212,168,83,0.12)",
          }}
        >
          {/* Header */}
          <p className="text-[10px] font-bold tracking-[0.18em] uppercase mb-2" style={{ color: "rgba(255,255,255,0.3)" }}>
            RECENTLY DELIVERED
          </p>
          <p className="text-[11px] uppercase tracking-[0.14em] mb-3" style={{ color: "#D4A853" }}>
            BARBERSHOP, MONTREAL
          </p>
          <h2 className="text-[clamp(26px,3.5vw,38px)] font-extrabold text-white leading-[1.1] mb-3 tracking-[-0.02em]">
            Culture Barbershop
          </h2>
          <p className="text-[16px] text-[#D2C9B8] leading-[1.6] mb-6">
            Conversion website built from scratch. Designed and coded to convert visitors into booked appointments.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {["Custom Website", "Conversion Design", "Booking Flow", "Montreal Market"].map((tag) => (
              <span
                key={tag}
                className="text-[11px] px-3 py-1 rounded-full"
                style={{ border: "1px solid rgba(212,168,83,0.2)", color: "rgba(255,255,255,0.5)" }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Condensed narrative */}
          <p className="text-[15px] text-[#D2C9B8] leading-[1.75] mb-8 max-w-[640px]">
            Culture Barbershop needed a digital presence that matched their identity and reputation in the Montreal market. I built a custom website with strong brand positioning, copy engineered to convert first-time visitors into booked appointments, and a mobile-optimized booking flow. The site was designed and coded from scratch to serve as the foundation for all future growth.
          </p>

          {/* Infrastructure + Outcome row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <p className="text-[11px] uppercase tracking-[0.12em] text-[rgba(255,255,255,0.3)] mb-4">
                INFRASTRUCTURE BUILT
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-1.5">
                {[
                  "Custom website",
                  "Brand positioning",
                  "Booking flow",
                  "Local SEO",
                  "Performance tracking",
                ].map((d) => (
                  <span key={d} className="text-[13px] text-[rgba(255,255,255,0.55)] flex items-center gap-2">
                    <span className="text-[#D4A853]">,</span> {d}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.12em] text-[rgba(255,255,255,0.3)] mb-4">
                OUTCOME
              </p>
              <p className="text-[15px] text-white font-semibold">
                Full custom website · Conversion-engineered · Montreal market
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="flex flex-wrap items-center gap-4 pt-6" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
            <div className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 border border-[rgba(212,168,83,0.25)] bg-[rgba(212,168,83,0.06)]">
              <span className="text-[11px] font-semibold" style={{ color: "#D4A853" }}>
                &#10003; Verified
              </span>
            </div>
            <Link
              href="/results/culture-barbershop"
              className="text-[14px] font-semibold text-[rgba(255,255,255,0.55)] hover:text-[#D4A853] transition-colors"
            >
              View full case study &rarr;
            </Link>
            <a
              href="https://culturemtl.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] text-[rgba(255,255,255,0.35)] hover:text-[#D4A853] transition-colors"
            >
              Live site &#8599;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function CaseStudiesSection() {
  const flagship = caseStudies.find((c) => c.id === TRIPLE_W_ID);
  const secondary = caseStudies.find((c) => c.id === ELITE_ID);
  const building = caseStudies.filter((c) => BUILDING_IDS.includes(c.id));

  return (
    <>
      {/* Section 2: Summary card grid with anchor links */}
      <CaseStudyCardGrid />

      {/* Section 3: Triple W. Layout A (narrative left, stats right) */}
      <div id="triple-w">
        {flagship && <ResultsFlagshipCaseStudy cs={flagship} />}
      </div>

      {/* Mid-page CTA. one only, after Triple W */}
      <section className="py-6" style={{ background: "#0D0B09" }}>
        <div className="max-w-[1120px] mx-auto px-6">
          <div
            className="rounded-lg px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4"
            style={{
              background: "rgba(212,168,83,0.03)",
              border: "1px solid rgba(212,168,83,0.2)",
            }}
          >
            <p className="text-[15px] text-[#F5F0E8] text-center sm:text-left">
              This is the same system. One spot is currently open.
            </p>
            <div className="flex flex-col items-center sm:items-end gap-1.5 flex-shrink-0">
              <Link
                href="/apply"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold tracking-wide"
                style={{
                  background: "#D4A853",
                  color: "#0D0B09",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                Apply to be a Partner &rarr;
              </Link>
              <p className="text-[11px]" style={{ color: "#756D63" }}>
                No retainer until I confirm fit. Response within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Elite. Layout B (full-width headline, no calendar) */}
      <div id="elite">
        {secondary && <ResultsSecondaryCase cs={secondary} />}
      </div>

      {/* Section 6: Culture. Layout C (compact card) */}
      <CultureCaseStudy />

      {/* Section 7: In The Field */}
      <ResultsPortfolioSection recent={[]} building={building} />

      {/* Section 8: Final CTA */}
      <ResultsCTA />

      {/* Disclaimer */}
      <div
        className="py-10"
        style={{ background: "#1A1510", borderTop: "1px solid rgba(255,255,255,0.04)" }}
      >
        <p className="text-center text-[12px] text-[rgba(255,255,255,0.2)] max-w-[480px] mx-auto px-6 leading-[1.7]">
          Revenue figures verified against live Google Ads account data and GA4 conversion tracking. All results from live accounts. No projections.
        </p>
      </div>
    </>
  );
}
