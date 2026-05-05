"use client";

import Image from "next/image";
import Link from "next/link";
import GradientBarsBackground from "@/components/ui/gradient-bars-background";

const STAT_CHIPS = [
  { value: "$41,085", label: "Revenue · 30 days" },
  { value: "46x", label: "ROAS" },
  { value: "$33", label: "Cost per call" },
];

export default function ServicesHero() {
  return (
    <GradientBarsBackground
      numBars={9}
      gradientFrom="rgba(212, 168, 83, 0.12)"
      gradientTo="transparent"
      animationDuration={3}
      backgroundColor="#0D0B09"
      className="min-h-[80vh] flex items-center"
    >
      <div className="w-full px-5 sm:px-6">
        <div className="max-w-[1200px] mx-auto pt-32 pb-16 md:pb-14 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column. Text */}
          <div>
            <p
              style={{
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#D4A853",
                marginBottom: 16,
                fontFamily: "var(--font-dm-sans), sans-serif",
              }}
            >
              SERVICES
            </p>

            <h1
              style={{
                fontSize: "clamp(2.0rem, 5.5vw, 4.2rem)",
                fontWeight: 700,
                lineHeight: 1.0,
                letterSpacing: "-0.03em",
                color: "#F5F0E8",
                marginBottom: 24,
              }}
            >
              One system. Every qualified call tracked.
            </h1>

            <p
              style={{
                fontSize: "clamp(15px, 1.6vw, 17px)",
                fontWeight: 400,
                lineHeight: 1.75,
                color: "#D2C9B8",
                maxWidth: 560,
                marginBottom: 16,
              }}
            >
              Conversion site. Local SEO. Google Ads with tracked cost per call. AI that qualifies leads after hours. Built as one connected system, run by one person.
            </p>

            <p
              style={{
                fontSize: "0.92rem",
                fontWeight: 500,
                lineHeight: 1.6,
                color: "#D4A853",
                fontStyle: "italic",
                maxWidth: 520,
                marginBottom: 36,
              }}
            >
              Every layer feeds the next. The longer it runs, the less each call costs.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <Link
                href="/apply"
                className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold min-h-[48px] transition-all"
                style={{
                  background: "#D4A853",
                  color: "#0D0B09",
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.filter = "brightness(1.1)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.filter = "none"; }}
              >
                Apply to be a Partner &rarr;
              </Link>
              <a
                href="#system"
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-medium min-h-[48px] transition-colors"
                style={{
                  color: "rgba(240,234,214,0.6)",
                  border: "1px solid rgba(240,234,214,0.1)",
                  fontFamily: "var(--font-dm-sans), sans-serif",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "rgba(240,234,214,0.9)";
                  e.currentTarget.style.borderColor = "rgba(240,234,214,0.25)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "rgba(240,234,214,0.6)";
                  e.currentTarget.style.borderColor = "rgba(240,234,214,0.1)";
                }}
              >
                How the system works &darr;
              </a>
            </div>

            <div className="flex flex-wrap gap-4 sm:gap-6 mt-8">
              <span
                className="text-xs flex items-center gap-2"
                style={{ color: "#A69D8D", fontFamily: "var(--font-dm-sans), sans-serif" }}
              >
                <span style={{ color: "#D4A853" }}>&#10003;</span>
                Response within 24 hours
              </span>
              <span
                className="text-xs flex items-center gap-2"
                style={{ color: "#A69D8D", fontFamily: "var(--font-dm-sans), sans-serif" }}
              >
                <span style={{ color: "#D4A853" }}>&#10003;</span>
                No retainer until I confirm fit
              </span>
              <span className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-xs" style={{ color: "rgb(110,231,183)", fontFamily: "var(--font-dm-sans), sans-serif" }}>
                  One spot currently open
                </span>
              </span>
            </div>
          </div>

          {/* Right column. Live proof visual */}
          <div className="relative hidden lg:block">
            <div
              style={{
                background: "#131009",
                border: "1px solid rgba(212,168,83,0.15)",
                borderRadius: 12,
                padding: 24,
                transform: "rotate(1deg)",
                boxShadow: "0 24px 64px rgba(0,0,0,0.4), 0 0 0 1px rgba(212,168,83,0.06)",
              }}
            >
              {/* Label */}
              <p
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#D4A853",
                  marginBottom: 14,
                  fontFamily: "var(--font-dm-sans), sans-serif",
                }}
              >
                LIVE ACCOUNT
              </p>

              {/* Dashboard screenshot */}
              <div
                style={{
                  borderRadius: 8,
                  overflow: "hidden",
                  border: "1px solid #2A2010",
                  marginBottom: 20,
                }}
              >
                <Image
                  src="/images/proof/triple-w-ads-dashboard.webp"
                  alt="Triple W Rentals Google Ads dashboard showing upward performance curve"
                  width={560}
                  height={220}
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                  }}
                  priority
                />
              </div>

              {/* Stat chips */}
              <div className="flex flex-wrap gap-3">
                {STAT_CHIPS.map((chip) => (
                  <div
                    key={chip.label}
                    style={{
                      background: "#0D0B09",
                      border: "1px solid rgba(212,168,83,0.18)",
                      borderRadius: 8,
                      padding: "10px 16px",
                      flex: "1 1 0",
                      minWidth: 100,
                    }}
                  >
                    <p
                      style={{
                        color: "#D4A853",
                        fontSize: "1.1rem",
                        fontWeight: 700,
                        margin: 0,
                        lineHeight: 1.2,
                      }}
                    >
                      {chip.value}
                    </p>
                    <p
                      style={{
                        color: "#756D63",
                        fontSize: "0.68rem",
                        margin: "3px 0 0",
                        letterSpacing: "0.02em",
                      }}
                    >
                      {chip.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </GradientBarsBackground>
  );
}
