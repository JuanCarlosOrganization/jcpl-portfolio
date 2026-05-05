import type { Metadata } from "next";
import dynamic from "next/dynamic";
import HeroSection from "@/components/home/HeroSection";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://clientgrowth.ca/",
  },
};

/* Dynamic imports — everything below the fold */
const MarketingShowcase = dynamic(() => import("@/components/home/MarketingShowcase"));
const ProofStrip = dynamic(() => import("@/components/home/ProofStrip"));
const ProblemGrid = dynamic(() => import("@/components/home/ProblemGrid"));
const GrowthEngineSection = dynamic(() => import("@/components/home/GrowthEngineSection"), {
  loading: () => <div style={{ minHeight: "100vh" }} aria-hidden="true" />,
});
const WhatIBuildSlider = dynamic(() => import("@/components/home/WhatIBuildSlider"));
const CaseStudyStackScroll = dynamic(() => import("@/components/home/CaseStudyStackScroll"));
const DiagnosticForm = dynamic(() => import("@/components/home/DiagnosticFormLinear"));
const FAQ = dynamic(() => import("@/components/sections/FAQ"));
const StickyMobileCTA = dynamic(() => import("@/components/home/StickyMobileCTA"));

function SectionDivider() {
  return (
    <div
      style={{
        borderTop: "1px solid rgba(212, 168, 83, 0.08)",
        width: "100%",
      }}
    />
  );
}

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <HeroSection />

      {/* 1b. Marketing Showcase — Stripe-style feature row */}
      <MarketingShowcase />

      <SectionDivider />

      {/* 2. Proof Strip — stats bar */}
      <ProofStrip />

      <SectionDivider />

      {/* 3. The Problem (id="reality") */}
      <ProblemGrid />

      <SectionDivider />

      {/* 3b. The Growth Engine — cinematic system story (id="growth-engine") */}
      <GrowthEngineSection />

      <SectionDivider />

      {/* 4. What I Build (id="services") */}
      <WhatIBuildSlider />

      <SectionDivider />

      {/* 5. Case Study Stack Scroll (id="testimonials") */}
      <CaseStudyStackScroll />

      <SectionDivider />

      {/* 6. The Diagnostic + Form (id="book-call") */}
      <DiagnosticForm />

      <SectionDivider />

      {/* 12. FAQ (id="faq") */}
      <FAQ />

      {/* Sticky mobile CTA bar */}
      <StickyMobileCTA />
    </>
  );
}
