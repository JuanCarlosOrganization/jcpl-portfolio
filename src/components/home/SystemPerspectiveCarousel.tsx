"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  MotionValue,
} from "motion/react";
import { useLayout } from "@/components/motion/useViewportSize";

// ─── Helpers ───────────────────────────────────────────────────────────────
// Remove consecutive duplicates while preserving ascending order.
// useTransform requires strictly monotonic inputs.
function uniqAsc(arr: number[]): number[] {
  const out: number[] = [];
  for (const v of arr) {
    if (out.length === 0 || v > out[out.length - 1]) out.push(v);
  }
  return out;
}

// When uniqAsc collapses duplicate inputs, the corresponding outputs
// must also collapse to keep arrays the same length.
function matchOutput<T>(
  uniqInput: number[],
  originalInput: number[],
  originalOutput: T[],
): T[] {
  // For each unique input value, find the LAST original index with that value
  // and use its corresponding output (so a "fadeIn=0" wins over "enter=0").
  return uniqInput.map((v) => {
    let lastIdx = -1;
    for (let i = 0; i < originalInput.length; i++) {
      if (originalInput[i] === v) lastIdx = i;
    }
    return lastIdx === -1
      ? originalOutput[0]
      : originalOutput[lastIdx];
  });
}

type Pillar = {
  id: string;
  index: string;
  headline: string;
  body: string;
  tags: string[];
  screenshot: string;
  accent: string; // tint for the card
};

const pillars: Pillar[] = [
  {
    id: "seo",
    index: "01",
    headline: "Show up first.",
    body: "I position you on Google and AI tools like ChatGPT at the exact moment buyers in your city are ready to call. Before your competitors know this exists.",
    tags: ["Local SEO", "GEO content", "AI search"],
    screenshot: "/images/showcase-seo.webp",
    accent: "rgba(212, 168, 83, 0.16)",
  },
  {
    id: "website",
    index: "02",
    headline: "Turn visitors into calls.",
    body: "95% of website visitors leave without doing anything. I build a booking flow that captures people who are already interested in hiring you, without you lifting a finger.",
    tags: ["Conversion site", "AI lead qualifier", "Trust signals"],
    screenshot: "/images/showcase-website.webp",
    accent: "rgba(232, 201, 122, 0.16)",
  },
  {
    id: "ads",
    index: "03",
    headline: "Get in front of buyers now.",
    body: "Google Ads targeting people with purchase intent. Not browsers. Every campaign built around one goal: more calls from people ready to hire you today.",
    tags: ["Paid traffic", "Landing pages", "Cost per call"],
    screenshot: "/images/showcase-ads.webp",
    accent: "rgba(196, 154, 42, 0.18)",
  },
  {
    id: "compound",
    index: "04",
    headline: "Results compound every week.",
    body: "I look at the numbers every week and cut what isn't working. The system compounds. Your cost per lead drops every month it runs.",
    tags: ["Weekly optimization", "Monthly review", "Conversion lift"],
    screenshot: "/images/showcase-copy.webp",
    accent: "rgba(212, 168, 83, 0.20)",
  },
];

export default function SystemPerspectiveCarousel() {
  const layout = useLayout();
  const isMobile = layout === "mobile";
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Mobile: shorter sticky scroll (75vh per card) + simpler 3D
  // Desktop/tablet: full 100vh per card with deep 3D
  const cardScrollVh = isMobile ? 80 : 100;

  return (
    <section
      ref={containerRef}
      aria-label="The system. Four pillars"
      style={{
        position: "relative",
        background:
          "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(212,168,83,0.04) 0%, transparent 70%), #0A0907",
        height: `${pillars.length * cardScrollVh + 40}vh`,
      }}
    >
      {/* Sticky stage that holds everything in view */}
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: isMobile ? "flex-start" : "center",
          padding: isMobile
            ? "calc(env(safe-area-inset-top) + 88px) 16px 24px"
            : "clamp(80px, 12vh, 140px) clamp(20px, 4vw, 64px) clamp(40px, 6vh, 80px)",
        }}
      >
        {/* Section header (fades on scroll) */}
        <SectionHeader progress={scrollYProgress} isMobile={isMobile} />

        {/* 3D perspective stage */}
        <div
          style={{
            position: "relative",
            width: "100%",
            maxWidth: isMobile ? "100%" : 1180,
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            perspective: isMobile ? "900px" : "1800px",
            perspectiveOrigin: "center center",
            transformStyle: "preserve-3d",
            marginTop: isMobile ? 80 : 0,
          }}
        >
          {pillars.map((pillar, i) => (
            <PillarCard
              key={pillar.id}
              pillar={pillar}
              index={i}
              total={pillars.length}
              progress={scrollYProgress}
              isMobile={isMobile}
            />
          ))}
        </div>

        {/* Bottom progress dots */}
        <PillarDots progress={scrollYProgress} total={pillars.length} />
      </div>
    </section>
  );
}

// ─── Section header ────────────────────────────────────────────────────────
function SectionHeader({
  progress,
  isMobile,
}: {
  progress: MotionValue<number>;
  isMobile: boolean;
}) {
  // fade out the header as soon as user scrolls into the cards
  const opacity = useTransform(progress, [0, 0.08, 0.12], [1, 1, 0]);
  const y = useTransform(progress, [0, 0.12], [0, -20]);

  return (
    <motion.div
      style={{
        opacity,
        y,
        position: "absolute",
        top: isMobile
          ? "calc(env(safe-area-inset-top) + 96px)"
          : "clamp(80px, 12vh, 140px)",
        left: 0,
        right: 0,
        textAlign: "center",
        pointerEvents: "none",
        padding: isMobile ? "0 16px" : "0 24px",
      }}
    >
      <h2
        style={{
          fontFamily: "var(--font-cormorant), Georgia, serif",
          fontSize: isMobile
            ? "clamp(30px, 9vw, 44px)"
            : "clamp(36px, 5vw, 64px)",
          fontWeight: 300,
          lineHeight: 1,
          color: "#F5F0E8",
          letterSpacing: "-0.025em",
          maxWidth: 880,
          margin: "0 auto",
        }}
      >
        Inside the{" "}
        <span
          style={{
            background:
              "linear-gradient(135deg, #D4A853 0%, #E8C97A 50%, #C49A2A 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontStyle: "italic",
          }}
        >
          system
        </span>
        .
      </h2>
      <p
        style={{
          fontFamily: "var(--font-dm-sans), sans-serif",
          fontSize: isMobile ? 13 : "clamp(14px, 1.1vw, 16px)",
          color: "rgba(245,240,232,0.55)",
          marginTop: isMobile ? 10 : 16,
          maxWidth: 520,
          marginInline: "auto",
          paddingInline: isMobile ? 8 : 0,
          lineHeight: 1.5,
        }}
      >
        Four moving parts. One outcome: more booked calls every week.
      </p>
    </motion.div>
  );
}

// ─── Per-card animation ────────────────────────────────────────────────────
type PillarCardProps = {
  pillar: Pillar;
  index: number;
  total: number;
  progress: MotionValue<number>;
  isMobile: boolean;
};

function PillarCard({
  pillar,
  index,
  total,
  progress,
  isMobile,
}: PillarCardProps) {
  // Each card occupies a slice of [0..1] progress.
  const slice = 1 / total;
  const start = index * slice;
  const end = (index + 1) * slice;
  const peak = (index + 0.5) * slice;

  // useTransform inputs must be monotonically non-decreasing AND clamped
  // to [0, 1] (the range of scrollYProgress). Outside this range Framer
  // calls the underlying WAAPI animate() which rejects negative offsets.
  const clamp01 = (n: number) => Math.max(0, Math.min(1, n));

  // Mobile: gentler 3D (less rotation, less Z-depth) for perf + readability
  const rotateAmount = isMobile ? 18 : 40;
  const zDepth = isMobile ? -220 : -500;
  const xShift = isMobile ? "10%" : "18%";

  // Build sorted, deduped, clamped input arrays for each motion value.
  const enterEdge = clamp01(start - slice * 0.4);
  const exitEdge = clamp01(end + slice * 0.4);
  const peakClamped = clamp01(peak);

  const cardInput = uniqAsc([enterEdge, peakClamped, exitEdge]);
  const rotateY = useTransform(
    progress,
    cardInput,
    matchOutput(cardInput, [enterEdge, peakClamped, exitEdge], [
      rotateAmount,
      0,
      -rotateAmount,
    ]),
  );
  const translateZ = useTransform(
    progress,
    cardInput,
    matchOutput(cardInput, [enterEdge, peakClamped, exitEdge], [
      zDepth,
      0,
      zDepth,
    ]),
  );
  const translateX = useTransform(
    progress,
    cardInput,
    matchOutput(cardInput, [enterEdge, peakClamped, exitEdge], [
      xShift,
      "0%",
      `-${xShift}`,
    ]),
  );

  const fadeIn = clamp01(start - slice * 0.15);
  const fadeOut = clamp01(end + slice * 0.15);
  const enterOpacity = clamp01(start - slice * 0.45);
  const exitOpacity = clamp01(end + slice * 0.45);
  const opacityInput = uniqAsc([
    enterOpacity,
    fadeIn,
    peakClamped,
    fadeOut,
    exitOpacity,
  ]);
  const opacity = useTransform(
    progress,
    opacityInput,
    matchOutput(
      opacityInput,
      [enterOpacity, fadeIn, peakClamped, fadeOut, exitOpacity],
      [0, 1, 1, 1, 0],
    ),
  );

  return (
    <motion.article
      initial={false}
      transition={{ duration: 0 }}
      style={{
        position: "absolute",
        width: isMobile ? "92%" : "min(94%, 1080px)",
        height: isMobile ? "min(64vh, 540px)" : "min(70vh, 580px)",
        maxHeight: isMobile ? 560 : undefined,
        rotateY,
        z: translateZ,
        x: translateX,
        opacity,
        transformStyle: "preserve-3d",
        transformOrigin: "center center",
        borderRadius: isMobile ? 18 : 24,
        overflow: "hidden",
        border: "1px solid rgba(212,168,83,0.18)",
        background: `linear-gradient(135deg, ${pillar.accent} 0%, transparent 60%), #110D08`,
        boxShadow: isMobile
          ? "0 24px 60px -20px rgba(0,0,0,0.55), 0 0 0 1px rgba(0,0,0,0.4)"
          : "0 40px 100px -30px rgba(0,0,0,0.7), 0 0 0 1px rgba(0,0,0,0.4), inset 0 1px 0 rgba(245,240,232,0.04)",
      }}
    >
      {/* Layout: stacks vertically on mobile (image on top, copy below), two-column on desktop */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile
            ? "1fr"
            : "minmax(0, 1fr) minmax(0, 1.15fr)",
          gridTemplateRows: isMobile ? "44% 56%" : undefined,
          height: "100%",
          gap: 0,
        }}
      >
        {/* Visual block. First on mobile, right on desktop */}
        <div
          style={{
            order: isMobile ? 0 : 1,
            position: "relative",
            overflow: "hidden",
            background:
              "linear-gradient(135deg, rgba(13,11,9,0.4) 0%, rgba(13,11,9,0.85) 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: isMobile ? "16px" : "clamp(20px, 3vw, 40px)",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: `radial-gradient(ellipse 60% 50% at center, ${pillar.accent} 0%, transparent 65%)`,
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
              borderRadius: isMobile ? 8 : 12,
              overflow: "hidden",
              border: "1px solid rgba(245,240,232,0.08)",
              boxShadow: "0 30px 60px -15px rgba(0,0,0,0.6)",
            }}
          >
            <Image
              src={pillar.screenshot}
              alt={pillar.headline}
              fill
              sizes={isMobile ? "92vw" : "(max-width: 1024px) 100vw, 600px"}
              style={{
                objectFit: "cover",
                objectPosition: "top left",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: "auto 0 0 0",
                height: "30%",
                background:
                  "linear-gradient(to bottom, transparent, rgba(13,11,9,0.65))",
                pointerEvents: "none",
              }}
            />
          </div>
        </div>

        {/* Copy block. Second on mobile, left on desktop */}
        <div
          style={{
            order: isMobile ? 1 : 0,
            padding: isMobile
              ? "20px 22px 22px"
              : "clamp(32px, 5vh, 56px) clamp(24px, 3vw, 48px)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: isMobile ? 14 : 0,
            minHeight: 0,
          }}
        >
          {/* Index marker */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "baseline",
              gap: isMobile ? 10 : 14,
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: isMobile
                  ? 44
                  : "clamp(56px, 7vw, 96px)",
                fontWeight: 300,
                fontStyle: "italic",
                lineHeight: 0.85,
                background:
                  "linear-gradient(180deg, #D4A853 0%, rgba(212,168,83,0.4) 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                letterSpacing: "-0.02em",
              }}
            >
              {pillar.index}
            </span>
            <span
              style={{
                width: isMobile ? 20 : 28,
                height: 1,
                background: "rgba(212,168,83,0.5)",
                marginBottom: isMobile ? 6 : 8,
              }}
            />
          </div>

          {/* Headline + body */}
          <div style={{ marginTop: isMobile ? 0 : 28, minHeight: 0 }}>
            <h3
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: isMobile ? 22 : "clamp(28px, 3.4vw, 46px)",
                fontWeight: 300,
                lineHeight: isMobile ? 1.15 : 1.05,
                color: "#F5F0E8",
                letterSpacing: "-0.02em",
                margin: 0,
              }}
            >
              {pillar.headline}
            </h3>
            <p
              style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: isMobile ? 13 : "clamp(14px, 1.05vw, 16px)",
                lineHeight: isMobile ? 1.55 : 1.65,
                color: "rgba(245,240,232,0.65)",
                margin: isMobile ? "10px 0 0" : "20px 0 0",
                maxWidth: 440,
                display: isMobile ? "-webkit-box" : "block",
                WebkitLineClamp: isMobile ? 3 : undefined,
                WebkitBoxOrient: isMobile ? ("vertical" as const) : undefined,
                overflow: isMobile ? "hidden" : "visible",
              }}
            >
              {pillar.body}
            </p>
          </div>

          {/* Tags */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: isMobile ? 6 : 8,
              marginTop: isMobile ? 0 : 28,
            }}
          >
            {pillar.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontSize: isMobile ? 10 : 11,
                  fontWeight: 500,
                  color: "rgba(212,168,83,0.85)",
                  padding: isMobile ? "4px 9px" : "6px 12px",
                  background: "rgba(212,168,83,0.06)",
                  border: "1px solid rgba(212,168,83,0.18)",
                  borderRadius: 999,
                  letterSpacing: "0.02em",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

// ─── Bottom progress dots ──────────────────────────────────────────────────
function PillarDots({
  progress,
  total,
}: {
  progress: MotionValue<number>;
  total: number;
}) {
  const slice = 1 / total;
  return (
    <div
      style={{
        display: "flex",
        gap: 8,
        marginTop: 16,
        marginBottom: "max(env(safe-area-inset-bottom), 8px)",
        zIndex: 5,
      }}
    >
      {Array.from({ length: total }).map((_, i) => {
        const peak = (i + 0.5) * slice;
        const left = Math.max(0, peak - slice * 0.5);
        const right = Math.min(1, peak + slice * 0.5);
        return (
          <Dot
            key={i}
            progress={progress}
            inputRange={uniqAsc([left, peak, right])}
            originalInput={[left, peak, right]}
          />
        );
      })}
    </div>
  );
}

function Dot({
  progress,
  inputRange,
  originalInput,
}: {
  progress: MotionValue<number>;
  inputRange: number[];
  originalInput: number[];
}) {
  const width = useTransform(
    progress,
    inputRange,
    matchOutput(inputRange, originalInput, [8, 36, 8]),
  );
  const bg = useTransform(
    progress,
    inputRange,
    matchOutput(inputRange, originalInput, [
      "rgba(245,240,232,0.18)",
      "#D4A853",
      "rgba(245,240,232,0.18)",
    ]),
  );

  return (
    <motion.span
      style={{
        height: 8,
        width,
        background: bg,
        borderRadius: 999,
      }}
    />
  );
}
