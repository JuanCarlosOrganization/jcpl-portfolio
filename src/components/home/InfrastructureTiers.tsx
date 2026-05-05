"use client";

import Link from "next/link";

/* ─── Campaign Metrics (for After/After strip) ─── */
const campaignMetrics = [
  { number: "46x", label: "Return on ad spend" },
  { number: "$900", label: "Total ad spend" },
  { number: "30 days", label: "Time to $41,085 revenue" },
];

/* ─── Bullets ─── */
function BulletSlate() {
  return (
    <svg className="w-3.5 h-3.5 mt-1 flex-shrink-0" viewBox="0 0 12 12" fill="none">
      <path d="M2 6L5 9L10 3" stroke="#475569" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BulletBlue() {
  return (
    <svg className="w-3.5 h-3.5 mt-1 flex-shrink-0" viewBox="0 0 12 12" fill="none">
      <path d="M2 6L5 9L10 3" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BulletAmber() {
  return (
    <svg className="w-3.5 h-3.5 mt-1 flex-shrink-0" viewBox="0 0 12 12" fill="none">
      <path d="M2 6L5 9L10 3" stroke="rgba(245,158,11,0.60)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function InfrastructureTiers() {
  return (
    <>
      {/* ── Main Tiers Section ── */}
      <section
        id="tiers"
        className="w-full py-24 px-4"
        style={{ background: "linear-gradient(180deg, #070B14 0%, #0A0F1E 100%)" }}
      >
        {/* Section Header. No "THE INFRASTRUCTURE STACK" label */}
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h2
            className="text-4xl md:text-5xl font-semibold tracking-tight mb-4"
            style={{ color: "#F1F5F9" }}
          >
            Three Systems.<br className="hidden md:block" /> Built Around Your Revenue Stage.
          </h2>
          <p
            className="text-base max-w-xl mx-auto leading-relaxed"
            style={{ color: "#475569" }}
          >
            Read the qualifier on each tier before applying. I only take on businesses where I know I can produce a return.
          </p>
        </div>

        {/* Proof Anchor Bar */}
        <div className="max-w-3xl mx-auto mb-12">
          <p
            className="text-center text-sm mb-4"
            style={{ color: "#3D6080" }}
          >
            From the most recent active client account. Not projections.
          </p>
          <div
            className="max-w-3xl mx-auto rounded-2xl py-5 px-6 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-center"
            style={{
              border: "1px solid rgba(99,179,237,0.18)",
              background: "rgba(14,30,54,0.80)",
            }}
          >
            <span style={{ color: "#E2F0FF", fontWeight: 600, fontSize: "15px" }}>
              $41,085 revenue
            </span>
            <span style={{ color: "#1E3A5F" }}>|</span>
            <span style={{ color: "#E2F0FF", fontWeight: 600, fontSize: "15px" }}>
              $33 cost per call
            </span>
          </div>
        </div>

        {/* Three Tier Cards */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">

          {/* CARD 1: Foundation Architecture */}
          <div
            className="relative flex flex-col rounded-2xl p-8 transition-all duration-200 hover:-translate-y-[2px]"
            style={{
              background: "linear-gradient(160deg, #0E1520 0%, #0A1018 100%)",
              border: "1px solid rgba(148,163,184,0.10)",
              minHeight: "100%",
              height: "100%",
            }}
          >
            <p
              className="text-[10px] font-semibold tracking-[0.22em] uppercase mb-2 opacity-[0.45]"
              style={{ color: "#475569" }}
            >
              TIER 01
            </p>
            <h3
              className="text-[24px] font-[700] mb-1.5"
              style={{ color: "#F1F5F9" }}
            >
              Foundation Architecture
            </h3>
            <p
              className="text-sm mb-5"
              style={{ color: "#64748B" }}
            >
              Built before you run a single ad. Paid traffic without this fails.
            </p>
            <span
              className="block rounded-lg px-4 py-3 mb-4 leading-relaxed"
              style={{
                color: "#94A3B8",
                background: "rgba(148,163,184,0.07)",
                border: "1px solid rgba(148,163,184,0.12)",
                fontSize: "13px",
                fontWeight: 400,
                opacity: 0.60,
                fontStyle: "italic",
              }}
            >
              For: Most clients come from referrals. Digital presence is minimal or nonexistent.
            </span>
            {/* Verified result line */}
            <p
              className="text-xs mb-5 leading-relaxed italic"
              style={{ color: "#64748B" }}
            >
              A Texas RV company started here. Moved to Performance Engine the next month after their first $2,716 in 30 days.
            </p>
            <div
              className="mb-6"
              style={{ borderTop: "1px solid rgba(148,163,184,0.07)" }}
            />
            <p
              className="text-[10px] font-semibold tracking-[0.2em] uppercase mb-4"
              style={{ color: "#263050" }}
            >
              INCLUDES
            </p>
            <ul className="flex flex-col gap-3 flex-grow">
              {[
                "Conversion website built to close, not just look good",
                "Local SEO so buyers in your city find you before competitors",
                "Booking flow that captures leads while you are on a job",
                "Analytics showing exactly where calls come from",
                "Infrastructure documentation. You own it.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <BulletSlate />
                  <span className="text-[14px] font-[400] leading-[1.6] opacity-[0.75]" style={{ color: "#94A3B8" }}>{item}</span>
                </li>
              ))}
            </ul>
            <div
              className="mt-auto pt-5"
              style={{ borderTop: "1px solid rgba(148,163,184,0.07)" }}
            >
              <p
                className="text-xs mb-5 leading-relaxed"
                style={{ color: "#263050" }}
              >
                Most clients graduate to Performance Engine within 60 days.
              </p>
              <a
                href="/apply"
                className="text-sm font-medium transition-colors hover:text-slate-200"
                style={{ color: "#64748B", textDecoration: "underline", textUnderlineOffset: "3px" }}
              >
                Apply to be a Partner →
              </a>
            </div>
          </div>

          {/* CARD 2: Performance Engine. MOST SELECTED */}
          <div
            className="order-first md:order-none relative flex flex-col rounded-2xl p-8 h-full transition-all duration-200 hover:-translate-y-[2px] md:-mt-4 md:-mb-4"
            style={{
              background: "linear-gradient(160deg, #0F1E35 0%, #0C1628 100%)",
              border: "1px solid rgba(59,130,246,0.30)",
            }}
          >
            {/* Top accent line */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: "2rem",
                right: "2rem",
                height: "1px",
                background: "linear-gradient(90deg, transparent, rgba(99,179,237,0.5), transparent)",
                borderRadius: "999px",
              }}
            />
            {/* MOST SELECTED badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap z-10">
              <span
                className="text-[11px] font-bold tracking-[0.18em] uppercase px-5 py-1.5 rounded-full"
                style={{
                  background: "linear-gradient(90deg, var(--brand-accent), #3B82F6)",
                  color: "#fff",
                  boxShadow: "0 0 20px rgba(59,130,246,0.4)",
                }}
              >
                MOST SELECTED
              </span>
            </div>
            <p
              className="text-[10px] font-semibold tracking-[0.22em] uppercase mb-2 opacity-[0.45]"
              style={{ color: "#3B82F6" }}
            >
              TIER 02
            </p>
            <h3
              className="text-[24px] font-[700] mb-1.5"
              style={{ color: "#FFFFFF" }}
            >
              Performance Engine
            </h3>
            <p
              className="text-sm mb-5"
              style={{ color: "#93C5FD" }}
            >
              Predictable booked calls. Tracked cost per call.
            </p>
            <span
              className="block rounded-lg px-4 py-3 mb-4 leading-relaxed"
              style={{
                color: "#93C5FD",
                background: "rgba(59,130,246,0.08)",
                border: "1px solid rgba(59,130,246,0.20)",
                fontSize: "13px",
                fontWeight: 400,
                opacity: 0.60,
                fontStyle: "italic",
              }}
            >
              For: Strong work. Still waiting on the phone. No predictable way to get new clients this week.
            </span>
            {/* Verified result line */}
            <div
              className="rounded-xl px-5 py-4 mb-5"
              style={{
                background: "rgba(59,130,246,0.07)",
                border: "1px solid rgba(59,130,246,0.20)",
              }}
            >
              <p
                className="text-[11px] font-semibold tracking-[0.15em] uppercase mb-2"
                style={{ color: "#3B82F6" }}
              >
                VERIFIED RESULT
              </p>
              <p
                className="font-semibold text-base leading-snug mb-1"
                style={{ color: "#FFFFFF" }}
              >
                $900 spent. $41,085 returned.
              </p>
              <p
                className="text-sm"
                style={{ color: "#7DD3FC" }}
              >
                Triple W Rentals, Texas. 30 days. They now own the RV rental market in their region.
              </p>
            </div>
            <div
              className="mb-6"
              style={{ borderTop: "1px solid rgba(59,130,246,0.15)" }}
            />
            <p
              className="text-[10px] font-semibold tracking-[0.2em] uppercase mb-4"
              style={{ color: "var(--brand-deep)" }}
            >
              INCLUDES
            </p>
            <ul className="flex flex-col gap-3 flex-grow">
              {[
                "Everything in Foundation Architecture",
                "Google Ads targeting buyers with purchase intent, not window shoppers",
                "Landing pages per service and city. Every ad leads somewhere that converts.",
                "AI voice agent that captures calls after hours. No lead goes to voicemail.",
                "Weekly optimization loop so cost per call drops over time",
                "Monthly report showing revenue attributed to the system",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <BulletBlue />
                  <span className="text-[14px] font-[400] leading-[1.6] opacity-[0.75]" style={{ color: "#CBD5E1" }}>{item}</span>
                </li>
              ))}
            </ul>
            <p
              className="text-xs mt-6 mb-5 leading-relaxed"
              style={{ color: "#263050" }}
            >
              Ad spend is separate from the partnership fee. Minimum $500/month. 90-day initial term.
            </p>
            <a
              href="/apply"
              className="block w-full text-sm font-bold py-3.5 rounded-xl tracking-wide transition-all duration-150 hover:brightness-110 text-center"
              style={{
                background: "linear-gradient(90deg, var(--brand-accent), #3B82F6)",
                color: "#FFFFFF",
                boxShadow: "0 4px 24px rgba(37,99,235,0.35)",
              }}
            >
              Apply to be a Partner →
            </a>
            <p
              className="text-[11px] text-center mt-3 leading-relaxed"
              style={{ color: "#4D7090" }}
            >
              Short application. I only book a call if I think I can help.
            </p>
          </div>

          {/* CARD 3: Market Ownership */}
          <div
            className="relative flex flex-col rounded-2xl p-8 h-full transition-all duration-200 hover:-translate-y-[2px]"
            style={{
              background: "linear-gradient(160deg, #16100A 0%, #0F0B06 100%)",
              border: "1px solid rgba(245,158,11,0.15)",
            }}
          >
            <div className="flex items-center gap-2 mb-5">
              <div
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "#F59E0B",
                  boxShadow: "0 0 8px rgba(245,158,11,0.6)",
                }}
              />
              <span
                className="text-[10px] font-semibold tracking-[0.2em] uppercase"
                style={{ color: "rgba(245,158,11,0.70)" }}
              >
                BY APPLICATION ONLY
              </span>
            </div>
            <p
              className="text-[10px] font-semibold tracking-[0.22em] uppercase mb-2 opacity-[0.45]"
              style={{ color: "rgba(245,158,11,0.50)" }}
            >
              TIER 03
            </p>
            <h3
              className="text-[24px] font-[700] mb-1.5"
              style={{ color: "#FDE68A" }}
            >
              Market Ownership
            </h3>
            <p
              className="text-sm mb-5"
              style={{ color: "rgba(245,158,11,0.60)" }}
            >
              Limit competition structurally.
            </p>
            <span
              className="block rounded-lg px-4 py-3 mb-7 leading-relaxed"
              style={{
                color: "#D97706",
                background: "rgba(245,158,11,0.05)",
                border: "1px solid rgba(245,158,11,0.12)",
                fontSize: "13px",
                fontWeight: 400,
                opacity: 0.60,
                fontStyle: "italic",
              }}
            >
              For: Proven demand. Ready to own the market before a competitor does.
            </span>
            <div
              className="mb-6"
              style={{ borderTop: "1px solid rgba(245,158,11,0.08)" }}
            />
            <p
              className="text-[10px] font-semibold tracking-[0.2em] uppercase mb-4"
              style={{ color: "rgba(245,158,11,0.35)" }}
            >
              INCLUDES
            </p>
            <ul className="flex flex-col gap-3 flex-grow">
              {[
                "Everything in Performance Engine",
                "Multi-city campaign architecture to expand without rebuilding from scratch",
                "Competitor gap analysis. Identifies exactly where they are exposed.",
                "SEO buildout targeting every high-intent keyword in your market",
                "Bi-weekly strategy call. Decisions made in real time.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <BulletAmber />
                  <span className="text-[14px] font-[400] leading-[1.6] opacity-[0.75]" style={{ color: "#CA8A04" }}>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto">
              <div
                className="rounded-xl px-5 py-4 mb-6"
                style={{
                  background: "rgba(245,158,11,0.04)",
                  border: "1px solid rgba(245,158,11,0.12)",
                }}
              >
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: "rgba(245,158,11,0.70)" }}
                >
                  Two slots per niche per city. If your competitor applies first, this tier closes for your market.
                </p>
              </div>
              <a
                href="/apply"
                className="text-sm font-medium transition-colors hover:text-amber-400"
                style={{ color: "rgba(245,158,11,0.70)", textDecoration: "underline", textUnderlineOffset: "3px" }}
              >
                Apply to be a Partner →
              </a>
            </div>
          </div>
        </div>

        {/* Trust line */}
        <div className="max-w-6xl mx-auto text-center mt-12">
          <p className="text-sm" style={{ color: "#475569" }}>
            No long-term contracts. No hidden fees. No retainers for work not done.
          </p>
        </div>
      </section>

      {/* ── Before / After + Testimonial + Campaign Metrics ── */}
      <div
        className="w-full px-4 pb-16 pt-2"
        style={{ background: "transparent" }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Block 1: Before / After */}
          <div
            className="rounded-2xl p-6"
            style={{ background: "#0F1A2E", border: "1px solid rgba(148,163,184,0.10)" }}
          >
            <p className="text-[10px] font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "#475569" }}>
              BEFORE / AFTER
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span
                  className="shrink-0 inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold"
                  style={{
                    background: "rgba(239,68,68,0.15)",
                    border: "1px solid rgba(239,68,68,0.25)",
                    color: "#F87171",
                  }}
                >
                  BEFORE
                </span>
                <p className="text-[14px] font-[400] leading-[1.6] opacity-[0.75]" style={{ color: "#94A3B8" }}>
                  Bookings inconsistent. Website looked unprofessional. Most clients came from word of mouth. Calendar had empty weeks they couldn&apos;t predict.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span
                  className="shrink-0 inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold"
                  style={{
                    background: "rgba(52,211,153,0.12)",
                    border: "1px solid rgba(52,211,153,0.25)",
                    color: "#34D399",
                  }}
                >
                  AFTER
                </span>
                <p className="text-[14px] font-[400] leading-[1.6] opacity-[0.75]" style={{ color: "#94A3B8" }}>
                  Booking calendar full. New clients find them through Google search. Clients compliment the website on arrival. No more empty weeks.
                </p>
              </div>
            </div>
            <p className="text-xs mt-5" style={{ color: "#475569" }}>Barbershop. Montreal. Local SEO + website rebuild.</p>
          </div>

          {/* Block 3: Campaign Metrics */}
          <div
            className="rounded-2xl p-6"
            style={{
              background: "rgba(12,22,46,0.95)",
              border: "1px solid rgba(59,130,246,0.22)",
            }}
          >
            <p className="text-[10px] font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "#3B82F6" }}>
              CAMPAIGN METRICS
            </p>
            {campaignMetrics.map(({ number, label }) => (
              <div
                key={number}
                className="flex justify-between items-center py-3 last:border-0"
                style={{ borderBottom: "1px solid rgba(59,130,246,0.08)" }}
              >
                <p className="text-[2.25rem] font-bold leading-none tracking-tight" style={{ color: "#FFFFFF" }}>{number}</p>
                <p className="text-xs text-right max-w-[110px]" style={{ color: "#475569" }}>{label}</p>
              </div>
            ))}
            <p className="text-xs mt-4" style={{ color: "#475569" }}>Triple W Rentals. Texas. Google Ads.</p>
            <Link
              href="/results"
              className="text-xs underline underline-offset-2 hover:text-blue-300 transition-colors block mt-1"
              style={{ color: "#3B82F6" }}
            >
              Triple W Rentals now dominates the RV rental niche across Texas. Read the full case study →
            </Link>
          </div>
        </div>

        <p className="text-center text-xs mt-6 max-w-6xl mx-auto" style={{ color: "#3D5875" }}>
          All results are from live client accounts. Updated as new data becomes available.
        </p>
      </div>
    </>
  );
}
