"use client";

import { useState, useEffect, useRef } from "react";
import { useLocale } from "@/context/LocaleContext";
import { translations } from "@/lib/translations";

function sliderStyle(value: number, min: number, max: number): React.CSSProperties {
  const pct = ((value - min) / (max - min)) * 100;
  return {
    background: `linear-gradient(to right, rgba(212,168,83,0.90) ${pct}%, rgba(255,255,255,0.08) ${pct}%)`,
  };
}

const SLIDER_CLASS = `
  w-full h-[3px] rounded-full appearance-none cursor-pointer
  [&::-webkit-slider-thumb]:appearance-none
  [&::-webkit-slider-thumb]:w-[22px]
  [&::-webkit-slider-thumb]:h-[22px]
  [&::-webkit-slider-thumb]:rounded-full
  [&::-webkit-slider-thumb]:bg-[#F0EBE0]
  [&::-webkit-slider-thumb]:shadow-[0_1px_4px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.12)]
  [&::-webkit-slider-thumb]:cursor-pointer
  [&::-webkit-slider-thumb]:transition-transform
  [&::-webkit-slider-thumb:active]:scale-110
  [&::-moz-range-thumb]:w-[22px]
  [&::-moz-range-thumb]:h-[22px]
  [&::-moz-range-thumb]:rounded-full
  [&::-moz-range-thumb]:bg-[#F0EBE0]
  [&::-moz-range-thumb]:border-0
  [&::-moz-range-thumb]:cursor-pointer
`.trim();

export default function ROICalculator() {
  const { locale } = useLocale();
  const c = translations[locale].homepage.calculator;

  const [jobValue, setJobValue] = useState(1500);
  const [callsNeeded, setCallsNeeded] = useState(10);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check, { passive: true });
    return () => window.removeEventListener("resize", check);
  }, []);

  const costPerCall = 33;
  const monthlyCost = callsNeeded * costPerCall;
  const monthlyRevenue = callsNeeded * jobValue;
  const roi = monthlyRevenue / monthlyCost;

  // Micro-feedback: briefly brighten the revenue number on slider change
  const [revenueHighlight, setRevenueHighlight] = useState(false);
  const prevRevenue = useRef(monthlyRevenue);
  useEffect(() => {
    if (prevRevenue.current !== monthlyRevenue) {
      prevRevenue.current = monthlyRevenue;
      setRevenueHighlight(true);
      const t = setTimeout(() => setRevenueHighlight(false), 220);
      return () => clearTimeout(t);
    }
  }, [monthlyRevenue]);

  return (
    <section
      className="relative px-6 md:px-12 lg:px-20 py-24 md:py-28"
      style={{ background: "#0D0B09", borderBottom: "1px solid #2A2318" }}
    >
      {/* Mobile accordion trigger. Visible only below 768px */}
      {isMobile && !mobileOpen && (
        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          className="w-full flex items-center justify-between"
          style={{
            background: "transparent",
            border: "1px solid rgba(212,168,83,0.22)",
            borderRadius: 10,
            padding: "18px 20px",
            color: "#EDE5D5",
            fontSize: "15px",
            fontWeight: 500,
            cursor: "pointer",
            marginBottom: 0,
          }}
          aria-expanded={false}
          aria-controls="roi-content"
        >
          <span>Run the math</span>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            <path d="M4 7l5 5 5-5" stroke="#D4A853" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      )}

      {/* Content. Always visible on desktop, toggled on mobile */}
      <div
        id="roi-content"
        style={{ display: isMobile && !mobileOpen ? "none" : undefined }}
      >
      <div className="max-w-[1200px] mx-auto">

        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-5">
          <div className="h-px w-8" style={{ background: "rgba(212,168,83,0.55)" }} />
          <span
            className="uppercase font-semibold"
            style={{ fontSize: "10px", letterSpacing: "0.22em", color: "#8A7E74" }}
          >
            {c.eyebrow}
          </span>
        </div>

        {/* Headline */}
        <h2
          className="font-[700] text-[#F5F0E8] tracking-tight max-w-[640px]"
          style={{
            fontSize: "clamp(1.75rem, 3.2vw, 2.75rem)",
            lineHeight: 1.1,
            letterSpacing: "-0.028em",
          }}
        >
          {c.h2}
        </h2>
        <p
          className="mt-3 max-w-[500px]"
          style={{
            fontSize: "clamp(0.9375rem, 1.4vw, 1.0625rem)",
            lineHeight: 1.65,
            color: "#8A7E74",
          }}
        >
          {c.sub}
        </p>

        {/* Two-column grid */}
        <div className="mt-12 md:mt-14 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* ── Inputs ── */}
          <div className="space-y-12">

            {/* Slider 1. Job Value */}
            <div>
              <div className="flex justify-between items-baseline mb-4">
                <label
                  htmlFor="roi-job-value"
                  style={{ fontSize: "0.8125rem", color: "#8A7E74", lineHeight: 1.4 }}
                >
                  {c.avgJobValue}
                </label>
                <span
                  className="tabular-nums font-semibold text-[#F5F0E8]"
                  style={{ fontSize: "1.5rem", letterSpacing: "-0.024em" }}
                >
                  ${jobValue.toLocaleString()}
                </span>
              </div>
              <input
                id="roi-job-value"
                type="range"
                min={200}
                max={10000}
                step={100}
                value={jobValue}
                onChange={(e) => setJobValue(Number(e.target.value))}
                style={sliderStyle(jobValue, 200, 10000)}
                className={SLIDER_CLASS}
              />
              <div
                className="flex justify-between mt-2.5"
                style={{ fontSize: "0.75rem", color: "#7A7068" }}
              >
                <span>$200</span>
                <span>$10,000</span>
              </div>
            </div>

            {/* Slider 2. Calls per month */}
            <div>
              <div className="flex justify-between items-baseline mb-4">
                <label
                  htmlFor="roi-calls-needed"
                  className="max-w-[200px] leading-snug"
                  style={{ fontSize: "0.8125rem", color: "#8A7E74" }}
                >
                  {c.qualifiedCalls}
                </label>
                <span
                  className="tabular-nums font-semibold text-[#F5F0E8]"
                  style={{ fontSize: "1.5rem", letterSpacing: "-0.024em" }}
                >
                  {callsNeeded}
                </span>
              </div>
              <input
                id="roi-calls-needed"
                type="range"
                min={3}
                max={30}
                step={1}
                value={callsNeeded}
                onChange={(e) => setCallsNeeded(Number(e.target.value))}
                style={sliderStyle(callsNeeded, 3, 30)}
                className={SLIDER_CLASS}
              />
              <div
                className="flex justify-between mt-2.5"
                style={{ fontSize: "0.75rem", color: "#7A7068" }}
              >
                <span>3 {c.calls}</span>
                <span>30 {c.calls}</span>
              </div>
            </div>

            {/* Disclaimer moved to results card */}
          </div>

          {/* ── Results Card ── */}
          <div
            className="rounded-[16px] p-8 md:p-9 flex flex-col"
            style={{
              background: "#1A1610",
              border: "1px solid #2A2318",
              borderLeft: "3px solid rgba(212,168,83,0.45)",
              boxShadow: "0 4px 40px rgba(0,0,0,0.30), 0 0 60px rgba(212,168,83,0.04)",
            }}
          >

            {/* Monthly Investment */}
            <div className="pb-6">
              <p
                className="mb-1 uppercase tracking-[0.14em]"
                style={{ fontSize: "0.6875rem", color: "#5A5248", fontWeight: 600 }}
              >
                {c.monthlyInvestment}
              </p>
              <p
                className="tabular-nums font-semibold text-[#F5F0E8]"
                style={{ fontSize: "1.375rem", letterSpacing: "-0.02em" }}
              >
                ${monthlyCost.toLocaleString()}
              </p>
              <p style={{ fontSize: "0.75rem", color: "#4A4440", marginTop: "0.2rem" }}>
                {callsNeeded} {c.calls} × $33 {c.calls === "calls" ? "per call" : "par appel"}
              </p>
            </div>

            <div style={{ height: 1, background: "#2A2318", marginBottom: "1.625rem" }} />

            {/* Projected Revenue */}
            <div className="pb-6">
              <p
                className="mb-2 uppercase tracking-[0.14em]"
                style={{ fontSize: "0.6875rem", color: "#8A7E74", fontWeight: 600 }}
              >
                {c.projectedRevenue}
              </p>
              <p
                className="tabular-nums font-[800]"
                style={{
                  fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
                  letterSpacing: "-0.032em",
                  lineHeight: 1,
                  color: revenueHighlight ? "#E8C06A" : "#D4A853",
                  transition: "color 220ms ease",
                }}
              >
                ${monthlyRevenue.toLocaleString()}
              </p>
              <p style={{ fontSize: "0.75rem", color: "#4A4440", marginTop: "0.5rem" }}>
                {callsNeeded} {c.calls} × ${jobValue.toLocaleString()}
              </p>
            </div>

            <div style={{ height: 1, background: "#2A2318", marginBottom: "1.625rem" }} />

            {/* Return Multiple */}
            <div className="pb-7">
              <p
                className="mb-1.5 uppercase tracking-[0.14em]"
                style={{ fontSize: "0.6875rem", color: "#5A5248", fontWeight: 600 }}
              >
                {c.returnOnLeadCost}
              </p>
              <p
                className="tabular-nums font-[700] text-[#F5F0E8]"
                style={{ fontSize: "1.75rem", letterSpacing: "-0.026em" }}
              >
                {roi.toFixed(0)}
                <span
                  style={{
                    fontSize: "1rem",
                    fontWeight: 400,
                    color: "#8A7E74",
                    marginLeft: "0.25rem",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {c.returnSuffix}
                </span>
              </p>
            </div>

            {/* Disclaimer */}
            <p
              className="leading-relaxed mb-5"
              style={{ fontSize: "0.72rem", color: "#4A4440" }}
            >
              {c.disclaimer}
            </p>

            {/* Text link. CTA consolidated to diagnostic form */}
            <div
              style={{
                borderTop: "1px solid rgba(212,168,83,0.18)",
                paddingTop: "1.625rem",
                textAlign: "center",
              }}
            >
              <a
                href="/results"
                style={{
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "#D4A853",
                  textDecoration: "none",
                  opacity: 1,
                  transition: "color 180ms ease",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#F5F0E8"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#D4A853"; }}
              >
                See verified results →
              </a>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
