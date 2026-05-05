"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import { Reveal, CountUpValue } from "@/components/motion";

/* ─── Diagnostic Cards. Direct, outcome-driven, verifiable ─── */
const DIAGNOSTICS = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M16 4C9.373 4 4 9.373 4 16s5.373 12 12 12 12-5.373 12-12S22.627 4 16 4z" stroke="rgba(51,204,255,0.5)" strokeWidth="1.5" fill="none" />
        <path d="M16 10v6l4 2" stroke="rgba(51,204,255,0.9)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    metric: 10,
    suffix: "s",
    label: "Average time before a visitor leaves",
    detail:
      "If your site doesn\u2019t communicate trust and value instantly, you lose the client before they even see your offer.",
    accent: "cyan" as const,
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M6 26V12l10-8 10 8v14a2 2 0 01-2 2H8a2 2 0 01-2-2z" stroke="rgba(37,99,235,0.5)" strokeWidth="1.5" fill="none" />
        <path d="M12 28V18h8v10" stroke="rgba(37,99,235,0.9)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    metric: 97,
    suffix: "%",
    label: "Search online before choosing a local business",
    detail:
      "Your competitors are one Google search away. If your presence is weak, you\u2019re invisible to the clients who are ready to buy.",
    accent: "violet" as const,
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M4 24l7-7 5 5 12-12" stroke="rgba(51,204,255,0.9)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 10h8v8" stroke="rgba(51,204,255,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    metric: 0,
    prefix: "$",
    label: "Revenue from visitors who can\u2019t book",
    detail:
      "No booking system, no trust signals, no follow-up. Every gap in your pipeline is revenue walking out the door.",
    accent: "cyan" as const,
  },
];

export default function ProblemSection() {
  return (
    <SectionWrapper id="problem">
      <Reveal className="max-w-2xl mx-auto text-center mb-14 md:mb-20">
        <SectionLabel label="Diagnosis" className="mb-5" />
        <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-white leading-[1.15] tracking-tight max-w-xl mx-auto">
          Every Day Without a System,{" "}
          <span className="bg-gradient-to-r from-[var(--brand-accent)] to-[var(--brand-deep)] bg-clip-text text-transparent">
            You Lose Revenue
          </span>
        </h2>
        <p className="mt-5 text-[var(--text-secondary)] max-w-lg mx-auto leading-relaxed text-[0.95rem]">
          Most service businesses don&apos;t have a lead generation problem.
          they have a trust, visibility, and conversion problem.
        </p>
      </Reveal>

      {/* Diagnostic Cards */}
      <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
        {DIAGNOSTICS.map((card, i) => {
          const isViolet = card.accent === "violet";
          const glowColor = isViolet ? "37,99,235" : "51,204,255";
          const borderColor = isViolet
            ? "rgba(37,99,235,0.15)"
            : "rgba(51,204,255,0.15)";
          const bgGlow = isViolet
            ? "rgba(37,99,235,0.04)"
            : "rgba(51,204,255,0.04)";

          return (
            <Reveal key={i} delay={0.1 * i}>
              <div
                className="group relative rounded-2xl p-[1px] transition-all duration-500 h-full"
                style={{
                  background: `linear-gradient(135deg, ${borderColor}, transparent 60%)`,
                }}
              >
                <div className="relative rounded-2xl bg-[var(--bg-surface)] p-8 md:p-9 h-full flex flex-col overflow-hidden transition-all duration-500 group-hover:bg-[var(--bg-elevated)]">
                  {/* Hover glow */}
                  <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-24 pointer-events-none blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{
                      background: `radial-gradient(ellipse at center, rgba(${glowColor}, 0.12) 0%, transparent 70%)`,
                    }}
                    aria-hidden="true"
                  />

                  {/* Icon */}
                  <div
                    className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl transition-colors duration-300"
                    style={{
                      background: bgGlow,
                      border: `1px solid ${borderColor}`,
                    }}
                  >
                    {card.icon}
                  </div>

                  {/* Metric */}
                  <div className="mb-3">
                    <span className="text-4xl md:text-5xl font-bold text-white tabular-nums tracking-tight leading-none">
                      <CountUpValue
                        to={card.metric}
                        prefix={card.prefix || ""}
                        suffix={card.suffix}
                        durationMs={1600}
                      />
                    </span>
                  </div>

                  {/* Label */}
                  <p className="text-sm font-semibold text-white mb-3 leading-snug">
                    {card.label}
                  </p>

                  {/* Detail */}
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed mt-auto">
                    {card.detail}
                  </p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      {/* Urgency line */}
      <Reveal delay={0.35}>
        <p className="mt-10 md:mt-14 text-center text-sm text-[var(--text-muted)] max-w-lg mx-auto leading-relaxed">
          Every week you wait, qualified clients choose someone who showed up
          first.{" "}
          <span className="text-[var(--text-secondary)] font-medium">
            The compounding cost of inaction is real.
          </span>
        </p>
      </Reveal>
    </SectionWrapper>
  );
}
