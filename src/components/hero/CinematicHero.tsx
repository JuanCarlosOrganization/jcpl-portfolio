"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { hero, ctaCopy } from "@/lib/content";
import { trackEvent } from "@/lib/analytics";
import { usePrefersReducedMotionSafe } from "@/components/motion/usePrefersReducedMotionSafe";
import HeroBackground from "./HeroBackground";
import IntroBackground from "./IntroBackground";
import LogoIntro from "./LogoIntro";
import Icon from "@/components/ui/Icon";
import type { LogoIntroHandle } from "./LogoIntro";
import LightPillar from "./LightPillar";
import SignalRoutingSVG from "@/components/home/SignalRoutingSVG";
import LogoLoop from "./LogoLoop";
import { caseStudyLogos } from "./LogoLoopData";
import "./hero.css";

gsap.registerPlugin(ScrollTrigger);

/* ══════════════════════════════════════════════════════════
   SCROLL PROGRESS BREAKPOINTS (0–1)
   Adjust to retune when each layer appears / disappears.
   ══════════════════════════════════════════════════════════ */

// Layer 1: Logo stays centered, then moves to top-left
const LOGO_MOVE_START = 0.0;
const LOGO_MOVE_END = 0.22;

// Logo final transform (top-left corner)
const LOGO_FINAL_SCALE = 0.32;
const LOGO_FINAL_X = "-36vw";
const LOGO_FINAL_Y = "-40vh";

// Background transitions
const INTRO_BG_FADE_START = 0.15;
const INTRO_BG_FADE_END = 0.28;
const AURORA_FADE_START = 0.18;
const AURORA_FADE_END = 0.28;

// Scroll indicator hides
const INDICATOR_HIDE = 0.04;

// Layer 2: Hook statement
const HOOK_FADE_IN_START = 0.20;
const HOOK_FADE_IN_END = 0.32;
const HOOK_FADE_OUT_START = 0.50;
const HOOK_FADE_OUT_END = 0.58;

// Layer 3: Services universe
const SERVICES_TITLE_IN_START = 0.55;
const SERVICES_TITLE_IN_END = 0.65;
const SERVICES_CARDS_IN_START = 0.60;
const SERVICES_CARDS_IN_END = 0.75;
const SERVICES_CTA_IN_START = 0.70;
const SERVICES_CTA_IN_END = 0.80;

// Scrub damping
const SCRUB_SMOOTHING = 0.6;

/* ══════════════════════════════════════════════════════════
   SERVICE DATA
   ══════════════════════════════════════════════════════════ */


/* ══════════════════════════════════════════════════════════
   STATIC FALLBACK (reduced motion)
   ══════════════════════════════════════════════════════════ */

function StaticHero() {
  return (
    <section className="scroll-hero" style={{ height: "auto", minHeight: "100vh" }}>
      <div className="scroll-hero-viewport" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "6rem 1.5rem" }}>
        <div className="hero-bg-layer" style={{ opacity: 1, position: "absolute", inset: 0, zIndex: 0 }}>
          <HeroBackground />
          <LightPillar className="hidden lg:block" />
          <div style={{ position: "absolute", top: 0, right: 0, height: "100%", width: "44vw", display: "flex", alignItems: "center", justifyContent: "flex-end", pointerEvents: "none", zIndex: 3 }}>
            <div style={{ opacity: 0.32, width: "340px", maxWidth: "44vw" }}>
              <SignalRoutingSVG />
            </div>
          </div>
        </div>
        <div className="hero-overlay bg-[linear-gradient(180deg,rgba(6,10,8,0.28)_0%,rgba(6,10,8,0.42)_52%,rgba(6,10,8,0.58)_100%)]" />
        <div className="scroll-layer content-layer" style={{ opacity: 1, pointerEvents: "auto", position: "relative" }}>
          <ServicesLayer />
        </div>
        <div className="w-full mt-12">
          <ConfidenceRail />
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════
   LAYER 2. Hook Statement
   ══════════════════════════════════════════════════════════ */

function HookLayer() {
  return (
    <div className="max-w-5xl mx-auto px-6 text-center">
      <h1
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] text-[var(--text-primary)]"
        style={{
          textShadow: "0 2px 20px rgba(0,0,0,0.3)",
          letterSpacing: "-0.02em",
        }}
      >
        {hero.headline}
      </h1>
      <p
        className="mt-6 text-[18px] font-[400] opacity-[0.75] max-w-[640px] mx-auto leading-relaxed"
        style={{ letterSpacing: "0.01em" }}
      >
        {hero.subheadline}
      </p>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   LAYER 3. Services Universe
   ══════════════════════════════════════════════════════════ */

function ProofLine() {
  return (
    <div className="cb-proof-line mt-4 mb-2 text-[15px] font-medium tracking-wide text-[rgba(220,230,240,0.82)] flex items-center gap-3 justify-center" style={{ letterSpacing: "0.01em" }}>
      <span className="inline-block text-[13px] font-semibold uppercase tracking-widest text-[rgba(80,200,120,0.38)]">Live Result</span>
      <span className="font-bold text-[18px] text-[rgba(255,255,255,0.92)]">$41,085</span>
      <span className="opacity-60 text-[13px]">Revenue, 30 days, $900 ad spend</span>
      <span className="hidden md:inline-block opacity-40 text-[13px]">· 46x ROAS · Texas RV market</span>
    </div>
  );
}

function ServicesLayer() {
  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-16 lg:gap-20">
        {/* Left column: headline + CTA + proof line */}
        <div className="lg:w-[56%] text-center lg:text-left flex flex-col items-center lg:items-start">
          <p className="services-title text-xs font-medium tracking-[0.3em] uppercase text-[rgba(255,255,255,0.32)] mb-5 lg:mb-7">
            {hero.overline}
          </p>
          <h1 className="cb-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] text-white mb-4 max-w-2xl lg:max-w-3xl" style={{ letterSpacing: "-0.01em" }}>
            {hero.headline}
          </h1>
          <ProofLine />
          <p className="text-[18px] font-[400] opacity-[0.75] leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
            {hero.subheadline}
          </p>
          <div className="cb-cta-wrap flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-2">
            <Link
              href={ctaCopy.href}
              onClick={() => trackEvent("hero_cta_click")}
              className="cb-cta cb-cta--primary group shadow-[0_2px_24px_rgba(212,168,83,0.10)] border border-[rgba(212,168,83,0.22)] px-10 py-4 text-base font-semibold text-[#18181b] hover:bg-[#e9e4d8] hover:shadow-[0_2px_32px_rgba(212,168,83,0.18)] transition-all duration-300"
              style={{ background: "#f6f1e6", color: "#18181b", borderRadius: 10, boxShadow: "0 2px 24px rgba(212,168,83,0.10)" }}
            >
              {ctaCopy.primary}
              <span className="cb-cta-arrow transition-transform duration-300 group-hover:translate-x-1">
                <Icon name="arrow-right" size={16} />
              </span>
            </Link>
            <Link
              href="/results"
              className="inline-flex items-center gap-2 text-sm font-medium text-[rgba(255,255,255,0.38)] hover:text-[rgba(255,255,255,0.7)] transition-colors duration-300"
            >
              View Results
            </Link>
          </div>
        </div>
        {/* Right column: subtle visuals */}
        <div className="lg:w-[44%] flex items-center justify-center mt-12 lg:mt-0 relative min-h-[340px]">
          <div className="absolute inset-0 flex items-center justify-end pointer-events-none z-10">
            <div className="hidden lg:block" style={{ width: "100%", maxWidth: 420, opacity: 0.38 }}>
              <SignalRoutingSVG />
            </div>
          </div>
          <div className="absolute inset-0 flex items-center justify-end pointer-events-none z-0">
            <LightPillar />
          </div>
        </div>
      </div>
    </div>
  );
}

function ConfidenceRail() {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-2 px-2">
      <div className="flex flex-row items-center justify-center gap-4 md:gap-7 lg:gap-10">
        <LogoLoop logos={caseStudyLogos} logoHeight={38} gap={36} fadeEdges scaleOnHover speed={38} />
        <span className="ml-2 text-[13px] font-medium text-[rgba(220,230,240,0.62)] px-3 py-1 rounded-full bg-[rgba(24,24,32,0.38)] border border-[rgba(220,230,240,0.10)] shadow-sm">
          +2 active builds
        </span>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   INTRO ANIMATION. FIXED
   ══════════════════════════════════════════════════════════ */
const INTRO_ANIMATION = {
  opacity: 0,
  scale: 0.985,
  filter: "blur(2px)",
};
const INTRO_ANIMATION_FINAL = {
  opacity: 1,
  scale: 1,
  filter: "blur(0px)",
  duration: 0.8,
  ease: "power3.out",
};

const STARLIGHT_EFFECT = {
  particleDensity: 0.02,
  radialGlow: true,
};

const LIGHT_SWEEP = {
  duration: 1.2,
  gradient: "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0))",
};

/* ══════════════════════════════════════════════════════════
   CONSTANTS FOR CONFIGURATION
   ══════════════════════════════════════════════════════════ */
const SCROLL_LENGTH = 300; // Total scroll length in vh
const PIN_DURATION = 200; // Pinned duration in vh
const LOGO_CORNER_SCALE = 0.32; // Scale of logo in top-left corner
const SCENE_FADE_RANGE = [0.3, 0.7]; // Range for scene crossfade
const SWEEP_INTENSITY = 0.12; // Intensity of light sweep

/* ══════════════════════════════════════════════════════════
   MAIN SCROLL-DRIVEN COMPONENT
   ══════════════════════════════════════════════════════════ */

export default function CinematicHero() {
  const reduced = usePrefersReducedMotionSafe();

  const sectionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<LogoIntroHandle>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const auroraBgRef = useRef<HTMLDivElement>(null);
  const hookRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduced) return;

    const section = sectionRef.current;
    const viewport = viewportRef.current;
    const containerEl = logoRef.current?.containerEl;

    if (!section || !viewport || !containerEl) return;

    // GSAP ScrollTrigger timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: `+=${PIN_DURATION}vh`,
        pin: viewport,
        scrub: true,
      },
    });

    // Scene 1: Logo center with starlight shimmer
    tl.fromTo(
      containerEl,
      { opacity: 0, scale: 0.985 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
        onComplete: () => {
          // Add starlight shimmer
          gsap.to(containerEl, {
            background: `radial-gradient(circle, rgba(255,255,255,${SWEEP_INTENSITY}) 0%, transparent 100%)`,
            duration: 1.5,
          });

          // Add light sweep
          gsap.to(containerEl, {
            backgroundImage: "linear-gradient(135deg, rgba(255,255,255,0.1), transparent)",
            duration: 1.2,
            onComplete: () => {
              gsap.set(containerEl, { backgroundImage: "none" });
            },
          });
        },
      }
    );

    // Scene 2: Hook statement
    if (hookRef.current) {
      tl.fromTo(
        hookRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, ease: "power2.out" },
        SCENE_FADE_RANGE[0]
      );
      tl.to(
        hookRef.current,
        { opacity: 0, y: -20, ease: "power2.in" },
        SCENE_FADE_RANGE[1]
      );
    }

    // Scene 3: Modules
    if (contentRef.current) {
      const modules = contentRef.current.querySelectorAll(".module");
      modules.forEach((module, i) => {
        const stagger = i * 0.1;
        tl.fromTo(
          module,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, ease: "power2.out" },
          SCENE_FADE_RANGE[1] + stagger
        );
      });
    }

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [reduced]);

  if (reduced) return <StaticHero />;

  return (
    <>
      <section ref={sectionRef} className="scroll-hero">
        <div ref={viewportRef} className="scroll-hero-viewport">
          {/* Layer 0: Backgrounds */}
          <IntroBackground ref={introRef} />
          <div ref={auroraBgRef} className="hero-bg-layer">
            <HeroBackground />
          </div>
          <div className="hero-overlay bg-[linear-gradient(180deg,rgba(6,10,8,0.28)_0%,rgba(6,10,8,0.42)_52%,rgba(6,10,8,0.58)_100%)]" />

          {/* Persistent logo. Starts centered, scrolls to top-left */}
          <LogoIntro ref={logoRef} />

          {/* Scroll indicator */}
          <div ref={scrollIndicatorRef} className="scroll-indicator">
            <span className="scroll-indicator-text">Scroll</span>
            <div className="scroll-indicator-line" />
            <div className="scroll-indicator-chevron" />
          </div>

          {/* Layer 2: Hook statement */}
          <div
            ref={hookRef}
            className="scroll-layer hook-layer"
            style={{ opacity: 0 }}
          >
            <HookLayer />
          </div>

          {/* Layer 3: Services universe */}
          <div
            ref={contentRef}
            className="scroll-layer content-layer"
            style={{ opacity: 0 }}
          >
            <ServicesLayer />
          </div>

          {/* Bottom vignette */}
          <div className="hero-bottom-fade bg-[linear-gradient(180deg,rgba(8,14,12,0)_0%,rgba(8,14,12,0.26)_60%,rgba(8,14,12,0.40)_100%)]" />
        </div>
      </section>
      <ActiveSystemsSection />
    </>
  );
}

function ActiveSystemsSection() {
  return (
    <section className="active-systems-section max-w-6xl mx-auto px-6 mt-16 mb-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white tracking-tight">Active Systems</h2>
      <div className="flex items-center gap-4 mb-8">
        <span className="text-[13px] font-medium text-[rgba(220,230,240,0.62)] px-3 py-1 rounded-full bg-[rgba(24,24,32,0.38)] border border-[rgba(220,230,240,0.10)] shadow-sm">+2 in build</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Triple W Rentals */}
        <div className="bg-[rgba(20,24,32,0.82)] rounded-xl p-6 flex flex-col items-start shadow-lg">
          <div className="flex items-center gap-2 mb-2">
            <img loading="lazy" decoding="async" src="/images/logos/triplew.webp" alt="Triple W Rentals" className="h-8 w-auto" />
            <span className="font-semibold text-white text-lg">Triple W Rentals</span>
          </div>
          <div className="text-[13px] text-[rgba(220,230,240,0.62)] mb-2">RV Rental · Texas</div>
          <div className="text-[15px] font-bold text-[rgba(80,200,120,0.82)] mb-1">$41K revenue in 30 days</div>
        </div>
        {/* Elite Barbershop */}
        <div className="bg-[rgba(20,24,32,0.82)] rounded-xl p-6 flex flex-col items-start shadow-lg">
          <div className="flex items-center gap-2 mb-2">
            <img loading="lazy" decoding="async" src="/images/logos/elite.webp" alt="Elite Barbershop" className="h-8 w-auto" />
            <span className="font-semibold text-white text-lg">Elite Barbershop</span>
          </div>
          <div className="text-[13px] text-[rgba(220,230,240,0.62)] mb-2">Premium Barbershop · Montreal</div>
          <div className="text-[15px] font-bold text-[rgba(80,200,120,0.82)] mb-1">SEO campaign active</div>
        </div>
        {/* Culture Barbershop */}
        <div className="bg-[rgba(20,24,32,0.82)] rounded-xl p-6 flex flex-col items-start shadow-lg">
          <div className="flex items-center gap-2 mb-2">
            <img loading="lazy" decoding="async" src="/images/logos/culture.webp" alt="Culture Barbershop" className="h-8 w-auto" />
            <span className="font-semibold text-white text-lg">Culture Barbershop</span>
          </div>
          <div className="text-[13px] text-[rgba(220,230,240,0.62)] mb-2">Barbershop · Montreal</div>
          <div className="text-[15px] font-bold text-[rgba(80,200,120,0.82)] mb-1">Page 1 SEO in 60 days</div>
        </div>
      </div>
    </section>
  );
}
