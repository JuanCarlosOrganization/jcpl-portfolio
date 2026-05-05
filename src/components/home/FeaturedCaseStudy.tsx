"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/motion";
import { prefersReducedMotion } from "@/lib/motion";
import { useLocale } from "@/context/LocaleContext";
import { translations } from "@/lib/translations";

gsap.registerPlugin(ScrollTrigger);

function CountUpRevenue({ to, prefix = "" }: { to: number; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(to);

  useEffect(() => {
    if (!ref.current) return;
    if (prefersReducedMotion()) {
      setDisplay(to);
      return;
    }

    const obj = { val: 0 };
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: ref.current,
        start: "top 80%",
        onEnter: () => {
          gsap.to(obj, {
            val: to,
            duration: 1.5,
            ease: "power2.out",
            onUpdate: () => {
              const v = Math.round(obj.val);
              setDisplay(v >= 1 ? v : to);
            },
          });
        },
        once: true,
      });
    }, ref);

    return () => ctx.revert();
  }, [to, prefix]);

  return (
    <span ref={ref}>
      {prefix}
      {display.toLocaleString("en-US")}
    </span>
  );
}

// compactClients is built dynamically inside the component using translations

export default function FeaturedCaseStudy() {
  const sectionRef = useRef<HTMLElement>(null);
  const { locale } = useLocale();
  const po = translations[locale].homepage.provenOutcomes;
  const fc = translations[locale].homepage.featuredCaseStudy;

  const compactClientsMeta = [
    { badgeBg: "rgba(212,168,83,0.08)", badgeBorder: "rgba(212,168,83,0.25)", badgeColor: "#D4A853", pulse: true, name: "Hadi, Elite Barbershop" },
    { badgeBg: "rgba(166,157,141,0.08)", badgeBorder: "rgba(166,157,141,0.25)", badgeColor: "#A69D8D", pulse: false, name: "Tobari, Culture Barbershop" },
    { badgeBg: "rgba(166,157,141,0.08)", badgeBorder: "rgba(166,157,141,0.25)", badgeColor: "#A69D8D", pulse: false, name: "Wesley, Absolute Painting" },
    { badgeBg: "rgba(166,157,141,0.08)", badgeBorder: "rgba(166,157,141,0.25)", badgeColor: "#A69D8D", pulse: false, name: "Dre Benyoucef, Centre Dentaire Saint-\u00c9lz\u00e9ar" },
  ];
  const compactClients = fc.compactClients.map((c, i) => ({ ...compactClientsMeta[i], ...c }));

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.from(".proof-cards .case-study-card", {
        opacity: 0,
        y: 22,
        stagger: 0.09,
        duration: 0.55,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".proof-cards",
          start: "top 76%",
          once: true,
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <SectionWrapper ref={sectionRef} id="outcomes" style={{ background: "#131009" }}>
      {/* Section header */}
      <Reveal className="max-w-2xl mx-auto text-center mb-10 md:mb-14">
        <SectionLabel label={po.eyebrow} className="mb-5 !text-[#D4A853]" />
        <h2
          style={{ fontFamily: "'Cormorant Garamond', var(--font-cormorant), Georgia, serif", fontFeatureSettings: '"lnum"' }}
          className="text-[clamp(30px,4.5vw,46px)] font-light leading-[1.15] tracking-[-0.01em] max-w-2xl mx-auto text-[#F0EAD6]"
        >
          {po.h2}
        </h2>
        <p
          className="mt-5 max-w-lg mx-auto"
          style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontSize: "clamp(0.9rem, 1.5vw, 1rem)",
            color: "rgba(240,234,214,0.5)",
            lineHeight: 1.6,
          }}
        >
          {po.sub}
        </p>
      </Reveal>

      {/* LEAD RESULT label */}
      <Reveal delay={0.05}>
        <p
          className="text-center mb-3"
          style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontSize: "0.65rem",
            letterSpacing: "0.18em",
            color: "#D4A853",
            textTransform: "uppercase",
            fontWeight: 600,
          }}
        >
          {fc.leadResultLabel}
        </p>
      </Reveal>

      {/* HERO CARD. Triple W Rentals */}
      <Reveal delay={0.1}>
        <div className="max-w-3xl mx-auto mb-6 proof-cards">
          <div
            className="rounded-[14px] overflow-hidden case-study-card case-study-card-primary"
            style={{
              background: "rgba(212, 168, 83, 0.05)",
              border: "1px solid rgba(212, 168, 83, 0.4)",
              padding: "40px 48px",
            }}
          >
            {/* Two-column layout */}
            <div className="hero-card-columns" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, alignItems: "start" }}>
              <style>{`@media (max-width: 767px) { .hero-card-columns { grid-template-columns: 1fr !important; } }`}</style>

              {/* Left column. Stats */}
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontSize: "0.65rem",
                    letterSpacing: "0.15em",
                    color: "#756D63",
                    textTransform: "uppercase",
                    marginBottom: 16,
                  }}
                >
                  RV RENTAL · TEXAS · GOOGLE ADS
                </p>

                <div style={{ position: "relative" }}>
                  <div
                    style={{
                      fontFamily: "'Cormorant Garamond', var(--font-cormorant), Georgia, serif",
                      fontSize: "clamp(3.5rem, 8vw, 4.5rem)",
                      fontWeight: 400,
                      fontFeatureSettings: '"lnum"',
                      letterSpacing: "-0.02em",
                      lineHeight: 1,
                      color: "#F5F0E8",
                      marginBottom: 8,
                    }}
                  >
                    <CountUpRevenue to={41085} prefix="$" />
                  </div>
                </div>

                <p
                  style={{
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontSize: "1rem",
                    color: "rgba(240,234,214,0.5)",
                    marginBottom: 20,
                  }}
                >
                  {fc.revenueLine}
                </p>

                <p
                  style={{
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    color: "#F5F0E8",
                    marginBottom: 20,
                  }}
                >
                  {fc.returnLine}
                </p>

                <p
                  style={{
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontSize: "0.72rem",
                    color: "#756D63",
                    fontStyle: "italic",
                  }}
                >
                  {fc.verifiedDate}
                </p>
              </div>

              {/* Right column. Dashboard screenshot */}
              <div>
                <div
                  style={{
                    background: "#1A1510",
                    borderRadius: 8,
                    border: "1px solid rgba(255,255,255,0.08)",
                    overflow: "hidden",
                  }}
                >
                  {/* Browser chrome */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      padding: "10px 14px",
                      borderBottom: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <div style={{ display: "flex", gap: 5 }}>
                      <span style={{ width: 8, height: 8, borderRadius: "50%", background: "rgba(255,255,255,0.12)" }} />
                      <span style={{ width: 8, height: 8, borderRadius: "50%", background: "rgba(255,255,255,0.12)" }} />
                      <span style={{ width: 8, height: 8, borderRadius: "50%", background: "rgba(255,255,255,0.12)" }} />
                    </div>
                    <div
                      style={{
                        flex: 1,
                        background: "rgba(255,255,255,0.04)",
                        borderRadius: 4,
                        padding: "4px 10px",
                        fontSize: "0.65rem",
                        color: "#756D63",
                        fontFamily: "var(--font-dm-sans), sans-serif",
                      }}
                    >
                      ads.google.com
                    </div>
                  </div>

                  {/* Screenshot */}
                  <div>
                    <Image
                      src="/images/proof/triple-w-ads-dashboard.webp"
                      alt="Google Ads dashboard showing $41,085 in revenue for Triple W Rentals"
                      width={600}
                      height={400}
                      style={{ width: "100%", height: "auto", display: "block" }}
                    />
                  </div>

                  {/* Badge below image */}
                  <div style={{ padding: "8px 14px", display: "flex", alignItems: "center", gap: 8 }}>
                    <span
                      style={{
                        background: "#D4A853",
                        color: "#0D0B09",
                        fontFamily: "var(--font-dm-sans), sans-serif",
                        fontSize: "0.55rem",
                        fontWeight: 700,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        padding: "3px 8px",
                        borderRadius: 3,
                      }}
                    >
                      {fc.liveAccount}
                    </span>
                    <span style={{ fontSize: "0.6rem", color: "#756D63", fontFamily: "var(--font-dm-sans), sans-serif" }}>
                      ads.google.com
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial quote below columns */}
            <div
              style={{
                marginTop: 32,
                paddingTop: 24,
                borderTop: "1px solid rgba(212,168,83,0.15)",
                paddingLeft: 20,
                borderLeft: "3px solid #D4A853",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontSize: "0.95rem",
                  fontStyle: "italic",
                  color: "#D2C9B8",
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                &ldquo;{fc.testimonialQuote}&rdquo;
              </p>
              <p
                style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontSize: "0.75rem",
                  color: "#ffffff",
                  fontWeight: 600,
                  marginTop: 10,
                  marginBottom: 0,
                }}
              >
                {fc.testimonialAttribution}
              </p>
            </div>
          </div>
        </div>

        {/* Case study link */}
        <div className="max-w-3xl mx-auto mt-4 mb-2">
          <a
            href="/results"
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: "0.8rem",
              color: "#D4A853",
              textDecoration: "none",
              transition: "text-decoration 180ms ease",
            }}
            onMouseOver={(e) => { e.currentTarget.style.textDecoration = "underline"; }}
            onMouseOut={(e) => { e.currentTarget.style.textDecoration = "none"; }}
          >
            {fc.viewCaseStudy}
          </a>
        </div>
      </Reveal>

      {/* COMPACT GRID. 4 remaining clients */}
      <Reveal delay={0.15}>
        <div className="max-w-3xl mx-auto mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          {compactClients.map((client) => (
            <div
              key={client.name}
              className="rounded-lg case-study-card"
              style={{
                padding: 24,
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 8,
              }}
            >
              {/* Badge */}
              <div className="flex items-center gap-2 mb-3">
                <span
                  className="inline-flex items-center gap-1.5 rounded-full px-3 py-1"
                  style={{
                    background: client.badgeBg,
                    border: `1px solid ${client.badgeBorder}`,
                  }}
                >
                  {client.pulse && (
                    <span
                      className="inline-block w-2 h-2 rounded-full"
                      style={{ background: "#D4A853", animation: "pulse 2s ease-in-out infinite" }}
                    />
                  )}
                  <span style={{ fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.1em", color: client.badgeColor, textTransform: "uppercase" }}>
                    {client.badge}
                  </span>
                </span>
              </div>

              {/* Niche label */}
              <p
                style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontSize: "0.6rem",
                  letterSpacing: "0.12em",
                  color: "#756D63",
                  textTransform: "uppercase",
                  marginBottom: 8,
                }}
              >
                {client.niche}
              </p>

              {/* Stat */}
              <div
                className="text-[#F5F0E8] font-extrabold mb-1"
                style={{ fontSize: "1.5rem", lineHeight: 1.2 }}
              >
                {client.stat}
              </div>

              {/* Detail */}
              <p style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: "0.85rem", color: "#A69D8D", marginBottom: 12, lineHeight: 1.5 }}>
                {client.detail}
              </p>

              {/* Attribution */}
              <p
                style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontSize: "0.72rem",
                  color: "#756D63",
                  fontStyle: "italic",
                }}
              >
                {client.name}
              </p>
            </div>
          ))}
        </div>
      </Reveal>

      {/* Revenue summary */}
      <Reveal delay={0.2}>
        <p
          className="text-center mt-4 mb-6"
          style={{
            fontSize: "1rem",
            color: "#D4A853",
            fontWeight: 600,
            fontFamily: "var(--font-dm-sans), sans-serif",
          }}
        >
          {fc.revenueSummary}
        </p>
      </Reveal>

      {/* See all results */}
      <Reveal delay={0.25}>
        <div className="text-center mt-4">
          <a
            href="/results"
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: "0.85rem",
              color: "#D4A853",
              textDecoration: "none",
              transition: "color 180ms ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.color = "#F5F0E8";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.color = "#D4A853";
            }}
          >
            {fc.seeFullCaseStudies}
          </a>
        </div>
      </Reveal>
    </SectionWrapper>
  );
}
