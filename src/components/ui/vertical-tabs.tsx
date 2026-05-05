"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

/* ── Data ── */

const SERVICES = [
  {
    id: "01",
    title: "Pull in buyers",
    description:
      "Google Ads, Local SEO, and geo-targeted AI campaigns that put your business in front of the right people at the right time.",
    subItems: [
      { name: "Google Ads", detail: "High-intent buyers, captured first" },
      { name: "Local SEO", detail: "Ranking where your market searches" },
      { name: "GEO / AI Search", detail: "Visible in ChatGPT and AI answers" },
    ],
    image: "/images/proof/triple-w-ads-dashboard.webp",
    imageWidth: 1968,
    imageHeight: 656,
    frameType: "browser" as const,
    frameUrl: "ads.google.com",
    badge: "LIVE ACCOUNT",
    label: "RV RENTAL · TEXAS",
    stat: "$41,085 revenue · 30 days · $900 ad spend",
    verification: "Live Google Ads account · Verified February 2026",
  },
  {
    id: "02",
    title: "Convert the click into a call",
    description:
      "A site built for your niche, with copy that speaks to your buyer's exact problem and one job: make them call. No generic templates. No brochure pages. Every element tested against one metric: did the phone ring.",
    subItems: [
      { name: "Conversion-first design", detail: "Built for your niche, not from a template" },
      { name: "One clear CTA", detail: "Every page engineered to produce a call" },
      { name: "Mobile-optimized", detail: "70% of your buyers are on their phone" },
    ],
    image: "/images/proof/culture-barbershop-site.webp",
    imageWidth: 3316,
    imageHeight: 1928,
    frameType: "browser" as const,
    frameUrl: "culturemtl.ca",
    badge: "BUILT BY CLIENT GROWTH",
    label: "BARBERSHOP · MONTREAL",
    stat: "Custom conversion site · Built and launched by Client Growth",
    verification: "Custom conversion site · Built and launched by Client Growth",
  },
  {
    id: "03",
    title: "Keep the pipeline full",
    description:
      "Weekly optimization. Monthly revenue reporting. Every campaign refined based on what is actually producing calls. Not impressions. Not clicks. The system gets cheaper every month it runs.",
    subItems: [
      { name: "Weekly optimization loop", detail: "Continuous performance testing" },
      { name: "Monthly revenue reports", detail: "Clear revenue and ROI tracking" },
      { name: "Cost per call drops over time", detail: "System compounds as it learns" },
    ],
    image: "/images/proof/elite-calendar.webp",
    imageWidth: 664,
    imageHeight: 1324,
    frameType: "phone" as const,
    frameUrl: "",
    badge: "ACTIVE CLIENT CALENDAR",
    label: "BARBERSHOP · MONTREAL",
    stat: "SEO campaign active · Targeting #1 · Local search",
    verification: "Full acquisition system · Calendar fully booked since launch",
  },
];

/* ── Browser Frame ── */

function BrowserFrame({
  url,
  badge,
  children,
}: {
  url: string;
  badge: string | null;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        background: "#1a1714",
        border: "1px solid rgba(212,168,83,0.1)",
        borderRadius: 12,
        overflow: "hidden",
        boxShadow:
          "0 24px 48px rgba(0,0,0,0.4), 0 0 0 1px rgba(212,168,83,0.05)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 6,
          padding: "12px 16px",
          background: "rgba(255,255,255,0.03)",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <span style={{ width: 10, height: 10, borderRadius: "50%", background: "rgba(255,255,255,0.12)" }} />
        <span style={{ width: 10, height: 10, borderRadius: "50%", background: "rgba(255,255,255,0.12)" }} />
        <span style={{ width: 10, height: 10, borderRadius: "50%", background: "rgba(255,255,255,0.12)" }} />
        <span
          style={{
            marginLeft: 12,
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontSize: 12,
            color: "rgba(240,234,214,0.3)",
          }}
        >
          {url}
        </span>
      </div>
      <div className="relative">
        {badge && (
          <span
            style={{
              position: "absolute",
              top: 12,
              left: 12,
              background: "#D4A853",
              color: "#0D0B09",
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              padding: "4px 10px",
              borderRadius: 4,
              zIndex: 2,
            }}
          >
            {badge}
          </span>
        )}
        {children}
      </div>
    </div>
  );
}

/* ── Phone Frame ── */

function PhoneFrame({
  badge,
  children,
}: {
  badge: string | null;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        background: "#1a1714",
        border: "1px solid rgba(212,168,83,0.1)",
        borderRadius: 32,
        padding: 12,
        boxShadow:
          "0 24px 48px rgba(0,0,0,0.4), 0 0 0 1px rgba(212,168,83,0.05)",
        maxWidth: 300,
        margin: "0 auto",
      }}
    >
      <div style={{ width: 100, height: 4, background: "rgba(255,255,255,0.1)", borderRadius: 2, margin: "0 auto 8px" }} />
      <div className="relative" style={{ borderRadius: 20, overflow: "hidden" }}>
        {badge && (
          <span
            style={{
              position: "absolute",
              top: 10,
              left: 10,
              background: "#D4A853",
              color: "#0D0B09",
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              padding: "4px 10px",
              borderRadius: 4,
              zIndex: 2,
            }}
          >
            {badge}
          </span>
        )}
        {children}
      </div>
      <div style={{ width: 80, height: 4, background: "rgba(255,255,255,0.08)", borderRadius: 2, margin: "8px auto 0" }} />
    </div>
  );
}

/* ── Framed Image ── */

function FramedImage({
  service,
  priority = false,
}: {
  service: (typeof SERVICES)[number];
  priority?: boolean;
}) {
  const img = (
    <Image
      src={service.image}
      alt={service.title}
      width={service.imageWidth}
      height={service.imageHeight}
      quality={85}
      priority={priority}
      className="block w-full h-auto"
      sizes="(min-width: 1024px) 55vw, 100vw"
    />
  );

  if (service.frameType === "phone") {
    return <PhoneFrame badge={service.badge}>{img}</PhoneFrame>;
  }

  return <BrowserFrame url={service.frameUrl} badge={service.badge}>{img}</BrowserFrame>;
}

/* ── Main Component. Click-only tab navigation ── */

export function VerticalTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = SERVICES[activeIndex];

  return (
    <section
      id="system"
      className="w-full border-t"
      style={{
        background: "#0D0B09",
        borderColor: "#2A2318",
        paddingTop: "clamp(64px, 8vw, 120px)",
        paddingBottom: "clamp(64px, 8vw, 120px)",
      }}
    >
      <div className="w-full px-4 md:px-8 lg:px-12 xl:px-20 max-w-[1400px] mx-auto">
        {/* Section header */}
        <div className="mb-12">
          <span
            className="block"
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: "11px",
              fontWeight: 400,
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              color: "#D4A853",
              marginBottom: 16,
            }}
          >
            THE ACQUISITION SYSTEM
          </span>
          <h2
            className="tracking-tight text-balance"
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              fontWeight: 300,
              lineHeight: 1.1,
              color: "#F0EAD6",
              letterSpacing: "-0.01em",
            }}
          >
            The system that fills your calendar.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-start">
          {/* ── Left Column: Tab buttons + content ── */}
          <div className="lg:col-span-5 flex flex-col order-2 lg:order-1">
            {/* Tab buttons */}
            <div className="flex flex-col space-y-0">
              {SERVICES.map((service, index) => {
                const isActive = activeIndex === index;
                return (
                  <div key={service.id}>
                    <button
                      onClick={() => setActiveIndex(index)}
                      className={cn(
                        "group relative flex items-start gap-4 text-left w-full border-t first:border-0 cursor-pointer"
                      )}
                      style={{
                        borderColor: "rgba(212,168,83,0.12)",
                        paddingTop: "clamp(24px, 3vw, 32px)",
                        paddingBottom: "clamp(24px, 3vw, 32px)",
                      }}
                    >
                      {/* Gold left border. Active indicator */}
                      <div
                        className="absolute left-[-16px] md:left-[-24px] top-0 bottom-0 w-[3px]"
                        style={{
                          background: isActive ? "#D4A853" : "transparent",
                          transition: "background 0.3s ease",
                        }}
                      />

                      {/* Entry number */}
                      <span
                        className="tabular-nums flex-shrink-0"
                        style={{
                          fontFamily: "var(--font-dm-sans), sans-serif",
                          fontSize: 9,
                          fontWeight: 500,
                          marginTop: 6,
                          color: isActive ? "#D4A853" : "rgba(212,168,83,0.3)",
                          transition: "color 0.3s ease",
                        }}
                      >
                        /{service.id}
                      </span>

                      <div className="flex flex-col gap-2 flex-1">
                        {/* Title */}
                        <span
                          style={{
                            fontFamily: "var(--font-cormorant), Georgia, serif",
                            fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                            fontWeight: 300,
                            fontStyle: "italic",
                            letterSpacing: "-0.01em",
                            color: isActive ? "#F0EAD6" : "rgba(240,234,214,0.4)",
                            opacity: isActive ? 1 : 0.4,
                            transition: "color 0.3s ease, opacity 0.3s ease",
                          }}
                        >
                          {service.title}
                        </span>

                        {/* Expandable content. Only shown for active tab */}
                        <AnimatePresence mode="wait">
                          {isActive && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                              className="overflow-hidden"
                            >
                              <p
                                className="max-w-sm pb-2"
                                style={{
                                  fontFamily: "var(--font-dm-sans), sans-serif",
                                  fontSize: 14,
                                  lineHeight: 1.65,
                                  color: "rgba(240,234,214,0.55)",
                                }}
                              >
                                {service.description}
                              </p>

                              <div className="flex flex-col gap-1.5 mt-1">
                                {service.subItems.map((item) => (
                                  <p
                                    key={item.name}
                                    style={{
                                      fontFamily: "var(--font-dm-sans), sans-serif",
                                      fontSize: 12,
                                      lineHeight: 1.5,
                                    }}
                                  >
                                    <span style={{ color: "#D4A853" }}>·</span>{" "}
                                    <span style={{ color: "rgba(240,234,214,0.6)" }}>
                                      {item.name}
                                    </span>{" "}
                                    <span style={{ color: "rgba(240,234,214,0.3)" }}>
                                      · {item.detail}
                                    </span>
                                  </p>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </button>

                    {/* ── Mobile: inline framed image below active tab ── */}
                    <div className="lg:hidden">
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mb-6"
                          >
                            <div className="mb-3">
                              <p
                                style={{
                                  fontFamily: "var(--font-dm-sans), sans-serif",
                                  fontSize: 11,
                                  fontWeight: 600,
                                  letterSpacing: "0.12em",
                                  textTransform: "uppercase",
                                  color: "#D4A853",
                                }}
                              >
                                {service.label}
                              </p>
                              <p
                                style={{
                                  fontFamily: "var(--font-dm-sans), sans-serif",
                                  fontSize: 13,
                                  color: "rgba(240,234,214,0.85)",
                                  fontWeight: 500,
                                  marginTop: 3,
                                }}
                              >
                                {service.stat}
                              </p>
                              <p
                                style={{
                                  fontFamily: "var(--font-dm-sans), sans-serif",
                                  fontSize: 11,
                                  color: "rgba(240,234,214,0.35)",
                                  fontStyle: "italic",
                                  marginTop: 2,
                                }}
                              >
                                {service.verification}
                              </p>
                            </div>
                            <FramedImage service={service} />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── Right Column: Framed gallery (desktop only) ── */}
          <div className="lg:col-span-7 hidden lg:flex flex-col h-full order-1 lg:order-2">
            <div className="sticky" style={{ top: "15vh" }}>
              {/* Stats card */}
              <div className="mb-4" style={{ minHeight: 60 }}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <p
                      style={{
                        fontFamily: "var(--font-dm-sans), sans-serif",
                        fontSize: 11,
                        fontWeight: 600,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: "#D4A853",
                        marginBottom: 4,
                      }}
                    >
                      {active.label}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-dm-sans), sans-serif",
                        fontSize: 15,
                        fontWeight: 500,
                        color: "rgba(240,234,214,0.9)",
                        marginBottom: 2,
                      }}
                    >
                      {active.stat}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-dm-sans), sans-serif",
                        fontSize: 12,
                        color: "rgba(240,234,214,0.4)",
                        fontStyle: "italic",
                      }}
                    >
                      {active.verification}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Framed image with crossfade */}
              <div className="relative" style={{ minHeight: 300 }}>
                {SERVICES.map((service, index) => (
                  <div
                    key={service.id}
                    style={{
                      position: index === 0 ? "relative" : "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      opacity: activeIndex === index ? 1 : 0,
                      transition: "opacity 300ms ease-in-out",
                      pointerEvents: activeIndex === index ? "auto" : "none",
                      zIndex: activeIndex === index ? 1 : 0,
                    }}
                  >
                    <FramedImage service={service} priority={index === 0} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mid-section CTA */}
      <div className="text-center mt-16">
        <a
          href="/apply"
          className="inline-block rounded-md px-10 py-4 text-[13px] font-medium uppercase tracking-[0.15em] transition-transform hover:scale-[1.02]"
          style={{ background: "#D4A853", color: "#0D0B09" }}
        >
          Apply to be a Partner →
        </a>
      </div>
    </section>
  );
}

export default VerticalTabs;
