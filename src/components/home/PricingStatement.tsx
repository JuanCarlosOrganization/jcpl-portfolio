"use client";

import { useRef } from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import { motion, useInView } from "motion/react";
import { Sparkles } from "@/components/ui/sparkles";
import { useLocale } from "@/context/LocaleContext";
import { translations } from "@/lib/translations";

function PricingCard({
  tag,
  name,
  price,
  intro,
  features,
  proof,
  guarantee,
  conditions,
  cta,
  micro,
  popular,
  delay,
  valueStack,
}: {
  tag: string;
  name: string;
  price: string;
  intro?: string;
  features: string[];
  proof: string;
  guarantee: string;
  conditions: string;
  cta: string;
  micro: string;
  popular?: boolean;
  delay: number;
  valueStack?: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay }}
      className="relative"
    >
      <div
        className={`relative rounded-2xl p-8 flex flex-col h-full text-white border ${
          popular
            ? "border-[#D4A853]/40 shadow-[0px_-13px_200px_0px_rgba(212,168,83,0.15)]"
            : "border-[#2A2318]"
        }`}
        style={{
          background: popular
            ? "linear-gradient(160deg, #1E1A14 0%, #1A1510 50%, #1E1A14 100%)"
            : "linear-gradient(160deg, #1E1A14 0%, #151009 100%)",
        }}
      >
        {/* Tag */}
        <p
          className="uppercase mb-3"
          style={{ fontSize: "0.65rem", letterSpacing: "0.12em", color: "#D4A853" }}
        >
          {tag}
        </p>

        {/* Name */}
        <h3
          className="text-[24px] font-bold text-white mb-3"
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
        >
          {name}
        </h3>

        {/* Price removed. Application-based */}

        {/* Divider */}
        <div className="mb-5" style={{ borderTop: "1px solid #2A2318" }} />

        {/* Intro line */}
        {intro && (
          <p className="mb-4 text-[0.85rem] text-[#D2C9B8] font-medium">{intro}</p>
        )}

        {/* Features */}
        <ul className="space-y-3 mb-6 flex-1">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-2.5">
              <Check className="shrink-0 mt-0.5 w-3.5 h-3.5 text-[#D4A853]" />
              <span className="text-[0.85rem] text-[#D2C9B8] leading-[1.55]">{f}</span>
            </li>
          ))}
        </ul>

        {/* Value stack */}
        {valueStack}

        {/* Proof */}
        <div
          className="rounded-lg px-4 py-3 mb-5"
          style={{ background: "rgba(212,168,83,0.04)", borderLeft: "2px solid rgba(212,168,83,0.4)" }}
        >
          <p className="text-[0.8rem] text-[#D2C9B8] leading-[1.6] italic">{proof}</p>
        </div>

        {/* Guarantee */}
        <p className="mb-2 text-[0.8rem] text-[#A69D8D] leading-[1.6]">{guarantee}</p>
        <p className="mb-6 text-[0.68rem] leading-[1.7]" style={{ color: "rgba(210,201,184,0.45)" }}>
          {conditions}
        </p>

        {/* CTA */}
        <div className="mt-auto space-y-2">
          <Link
            href="/apply"
            className="flex items-center justify-center w-full font-semibold transition-all hover:brightness-110"
            style={{
              backgroundColor: "#D4A853",
              color: "#0D0B09",
              borderRadius: 8,
              padding: "14px 28px",
              fontSize: "0.9rem",
            }}
          >
            {cta}
          </Link>
          <p className="text-center text-[12px]" style={{ color: "rgba(240,234,214,0.5)" }}>
            {micro}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function PricingStatement() {
  const { locale } = useLocale();
  const t = translations[locale].homepage.pricingStatement;
  const GROWTH_FEATURES = t.growthFeatures;
  const SCALE_ADDITIONS = t.scaleAdditions;

  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const glowEntrance = {
    hidden: { opacity: 0, y: -20, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] as const },
    },
  };

  return (
    <section
      id="pricing"
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{
        background: "#0D0B09",
        paddingTop: "clamp(80px, 12vw, 160px)",
        paddingBottom: "clamp(80px, 12vw, 160px)",
      }}
    >
      {/* ── BACKGROUND LAYER 1: Glowing gradient ellipses ── */}
      <motion.div
        className="absolute left-0 right-0 top-[-200px] h-[2000px] flex items-start justify-center overflow-hidden pointer-events-none"
        variants={glowEntrance}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div
          className="absolute left-[-400px] right-[-400px] top-0 h-[1800px] rounded-full"
          style={{
            border: "180px solid rgba(212,168,83,0.06)",
            filter: "blur(100px)",
            WebkitFilter: "blur(100px)",
          }}
        />
        <div
          className="absolute left-[-300px] right-[-300px] top-[100px] h-[1600px] rounded-full"
          style={{
            border: "150px solid rgba(212,168,83,0.04)",
            filter: "blur(80px)",
            WebkitFilter: "blur(80px)",
          }}
        />
      </motion.div>

      {/* ── BACKGROUND LAYER 2: Sparkles + grid ── */}
      <div
        className="absolute top-0 left-0 right-0 h-[400px] overflow-hidden"
        style={{ maskImage: "radial-gradient(50% 50%, white, transparent)" }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:70px_80px]" />
        {isInView && (
          <Sparkles
            density={1200}
            direction="bottom"
            speed={0.8}
            color="#D4A853"
            className="absolute inset-x-0 bottom-0 h-full w-full"
            opacity={0.6}
          />
        )}
      </div>

      {/* ── BACKGROUND LAYER 3: Radial gold overlay ── */}
      <div
        className="absolute top-0 left-[10%] right-[10%] w-[80%] h-full z-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, rgba(212,168,83,0.08) 0%, transparent 70%)",
          mixBlendMode: "screen",
        }}
      />

      {/* ── CONTENT ── */}
      <div className="relative z-10 mx-auto max-w-[1060px] px-6">
        {/* Header with VerticalCutReveal */}
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] uppercase tracking-[0.12em] mb-4"
            style={{ color: "#D4A853" }}
          >
            {t.eyebrow}
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-bold text-white mb-4"
            style={{
              fontSize: "clamp(2.2rem, 5.2vw, 3.5rem)",
              fontFamily: "var(--font-cormorant), Georgia, serif",
            }}
          >
            {t.heading}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-[0.9375rem] max-w-md mx-auto"
            style={{ color: "#A69D8D", lineHeight: 1.65 }}
          >
            {t.subtitle}
          </motion.p>
        </div>

        {/* Two-card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          <PricingCard
            tag={t.growthTag}
            name={t.growthName}
            price=""
            features={GROWTH_FEATURES}
            proof={t.growthProof}
            guarantee={t.growthGuarantee}
            conditions={t.growthConditions}
            cta={t.growthCta}
            micro={t.growthMicro}
            popular
            delay={0.1}
          />
          <PricingCard
            tag={t.scaleTag}
            name={t.scaleName}
            price=""
            intro={t.scaleIntro}
            features={SCALE_ADDITIONS}
            proof={t.scaleProof}
            guarantee={t.scaleGuarantee}
            conditions={t.scaleConditions}
            cta={t.scaleCta}
            micro={t.scaleMicro}
            delay={0.25}
          />
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <p className="text-[14px] text-[#D2C9B8] mb-6">
            {t.trustLine}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {[t.badge1, t.badge2, t.badge3].map((badge) => (
              <span key={badge} className="text-[13px] flex items-center gap-2" style={{ color: "rgba(240, 234, 214, 0.5)" }}>
                <span style={{ color: "#D4A853" }}>&#10003;</span> {badge}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
