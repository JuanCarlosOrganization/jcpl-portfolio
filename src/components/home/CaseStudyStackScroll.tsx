"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, MotionValue } from "motion/react";
import { useLayout } from "@/components/motion/useViewportSize";

type CaseStudyData = {
  id: string;
  industry: string;
  ownerName: string;
  company: string;
  city: string;
  image: string;
  metric: { value: string; label: string };
  quote: string;
  tags: string[];
  href: string;
};

const cases: CaseStudyData[] = [
  {
    id: "triple-w",
    industry: "RV Rental",
    ownerName: "Westin Wayne Walker",
    company: "Triple W Rentals",
    city: "Texas",
    image: "/images/testimonials/tyler-w.webp",
    metric: { value: "$41,085", label: "revenue in 30 days" },
    quote: "Juan rebuilt everything from the ground up. Went from $900 a month doing nothing to $41K booked in 30 days. We're buying more units right now to keep up.",
    tags: [
      "Premium custom website",
      "Google Ads funnel",
      "AI voice agent",
      "AI email marketing",
    ],
    href: "/#testimonials",
  },
  {
    id: "elite-barbershop",
    industry: "Premium Barbershop",
    ownerName: "Hadi",
    company: "Elite Barbershop",
    city: "Laval, QC",
    image: "/images/testimonials/alex-m.webp",
    metric: { value: "Live", label: "premium custom website delivered" },
    quote: "Juan rebuilt our site and honestly it's beautiful. Same prices, but the right kind of clients walk in now.",
    tags: ["Premium custom website", "Brand identity"],
    href: "/#testimonials",
  },
  {
    id: "culture-barbershop",
    industry: "Premium Barbershop",
    ownerName: "Tobari",
    company: "Culture Barbershop",
    city: "Laval, QC",
    image: "/images/testimonials/mike-s.webp",
    metric: { value: "Live", label: "premium custom website delivered" },
    quote: "Juan built exactly what I wanted. Bookings come in while I'm working and I don't touch anything.",
    tags: ["Premium custom website", "Brand identity"],
    href: "/#testimonials",
  },
  {
    id: "absolute-painting",
    industry: "Residential Painting",
    ownerName: "Wesley",
    company: "Absolute Painting",
    city: "DFW, Texas",
    image: "/images/owners/wesley-absolute-painting.webp",
    metric: { value: "In Progress", label: "premium website launching soon" },
    quote: "Last agency took my money and ghosted. Juan actually shows up every week with progress. Site's not even done and I can already tell it's different.",
    tags: ["Premium custom website"],
    href: "/#testimonials",
  },
  {
    id: "centre-dentaire",
    industry: "Dental Clinic",
    ownerName: "Dre Benyoucef",
    company: "Centre Dentaire Saint-Élzéar",
    city: "Laval, QC",
    image: "/images/owners/dre-benyoucef-centre-dentaire.webp",
    metric: { value: "Live", label: "premium custom website delivered" },
    quote: "Juan rebuilt our site and it finally looks professional. New patients are booking more steadily each month.",
    tags: ["Premium custom website"],
    href: "/#testimonials",
  },
];

export default function CaseStudyStackScroll() {
  const layout = useLayout();
  const isMobile = layout !== "desktop";
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      id="testimonials"
      ref={containerRef}
      aria-label="Case studies"
      style={{
        position: "relative",
        background: "#0D0B09",
      }}
    >
      {/* Section header. Stripe-style: bold direct headline, no eyebrow */}
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          paddingTop: isMobile
            ? "calc(env(safe-area-inset-top) + 72px)"
            : "clamp(72px, 12vh, 144px)",
          paddingBottom: isMobile ? 20 : "clamp(32px, 5vh, 64px)",
          paddingLeft: isMobile ? 18 : "clamp(24px, 5vw, 64px)",
          paddingRight: isMobile ? 18 : "clamp(24px, 5vw, 64px)",
          pointerEvents: "none",
        }}
      >
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: isMobile
                ? "clamp(28px, 8.5vw, 40px)"
                : "clamp(40px, 6vw, 80px)",
              fontWeight: 300,
              lineHeight: isMobile ? 1.05 : 1,
              color: "#F5F0E8",
              letterSpacing: "-0.03em",
              maxWidth: 900,
              margin: 0,
            }}
          >
            Real owners.{" "}
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
              Real revenue.
            </span>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: isMobile ? 13 : "clamp(15px, 1.2vw, 18px)",
              lineHeight: 1.55,
              color: "rgba(245,240,232,0.6)",
              maxWidth: 520,
              margin: isMobile ? "12px 0 0" : "20px 0 0",
            }}
          >
            Five founders. Five industries. One system shipping every week.
          </p>
        </div>
      </div>

      {/* Stack of cards */}
      {cases.map((caseItem, i) => {
        const targetScale = 1 - (cases.length - i) * 0.04;
        return (
          <CaseCard
            key={caseItem.id}
            caseItem={caseItem}
            progress={scrollYProgress}
            range={[i * (1 / cases.length), 1]}
            targetScale={targetScale}
            index={i}
            total={cases.length}
            isMobile={isMobile}
          />
        );
      })}

      {/* Spacer below the last card so the final card has scroll room to settle */}
      <div style={{ height: isMobile ? "20vh" : "30vh" }} />
    </section>
  );
}

type CaseCardProps = {
  caseItem: CaseStudyData;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
  index: number;
  total: number;
  isMobile: boolean;
};

function CaseCard({
  caseItem,
  progress,
  range,
  targetScale,
  index,
  total,
  isMobile,
}: CaseCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  // Each card's sticky offset stacks slightly so the previous card peeks
  const stickyTop = isMobile
    ? `calc(${index * 14}px + 9vh)`
    : `calc(${index * 24}px + 12vh)`;

  return (
    <div
      ref={cardRef}
      style={{
        position: "sticky",
        top: 0,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: isMobile ? "0 12px" : "0 clamp(16px, 4vw, 48px)",
      }}
    >
      <motion.article
        style={{
          scale,
          top: stickyTop,
          position: "relative",
          width: "100%",
          maxWidth: 1180,
          height: isMobile ? "min(78vh, 600px)" : "min(74vh, 640px)",
          borderRadius: isMobile ? 14 : 20,
          overflow: "hidden",
          border: "1px solid rgba(212,168,83,0.18)",
          boxShadow: isMobile
            ? "0 18px 50px -18px rgba(0,0,0,0.55), 0 0 0 1px rgba(0,0,0,0.4)"
            : "0 30px 80px -20px rgba(0,0,0,0.6), 0 0 0 1px rgba(0,0,0,0.4)",
          background: "#13100B",
        }}
      >
        {/* Background image */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
          }}
        >
          <Image
            src={caseItem.image}
            alt={`${caseItem.ownerName}. ${caseItem.company}`}
            fill
            sizes="(max-width: 768px) 96vw, (max-width: 1024px) 100vw, 1180px"
            quality={isMobile ? 80 : 90}
            priority={index < 2}
            style={{
              objectFit: "cover",
              objectPosition: "center 30%",
            }}
          />
          {/* Warm dark gradient overlay. Heavier on mobile so text reads better */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: isMobile
                ? "linear-gradient(180deg, rgba(13,11,9,0.45) 0%, rgba(13,11,9,0.65) 35%, rgba(13,11,9,0.96) 100%)"
                : "linear-gradient(180deg, rgba(13,11,9,0.35) 0%, rgba(13,11,9,0.55) 45%, rgba(13,11,9,0.92) 100%)",
            }}
          />
          {/* Subtle gold edge glow */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(ellipse at bottom right, rgba(212,168,83,0.18) 0%, transparent 55%)",
              mixBlendMode: "screen",
            }}
          />
        </div>

        {/* Top-left identity strip */}
        <div
          style={{
            position: "absolute",
            top: isMobile ? 18 : "clamp(24px, 4vh, 40px)",
            left: isMobile ? 18 : "clamp(24px, 4vw, 48px)",
            right: isMobile ? 18 : "auto",
            zIndex: 2,
            display: "inline-flex",
            alignItems: "center",
            gap: isMobile ? 10 : 14,
            fontFamily: "var(--font-dm-sans), sans-serif",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: isMobile ? 24 : 32,
              fontWeight: 300,
              color: "#D4A853",
              fontStyle: "italic",
              lineHeight: 1,
            }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <span
            style={{
              fontSize: isMobile ? 11 : 14,
              color: "rgba(245,240,232,0.7)",
              fontWeight: 400,
              letterSpacing: isMobile ? "0.02em" : 0,
              textTransform: isMobile ? ("uppercase" as const) : "none",
            }}
          >
            {caseItem.industry}
            <span style={{ opacity: 0.4, margin: "0 6px" }}>·</span>
            {caseItem.city}
          </span>
        </div>

        {/* Bottom content cluster. Single column on mobile, 2-col on desktop */}
        <div
          style={{
            position: "absolute",
            inset: "auto 0 0 0",
            zIndex: 2,
            padding: isMobile
              ? "20px 20px 22px"
              : "clamp(28px, 5vh, 56px) clamp(24px, 4vw, 56px)",
            display: "grid",
            gridTemplateColumns: isMobile
              ? "1fr"
              : "minmax(0, 1.3fr) minmax(0, 1fr)",
            gap: isMobile ? 16 : "clamp(24px, 4vw, 48px)",
            alignItems: "end",
          }}
        >
          {/* On mobile: metric appears FIRST (top of cluster) for impact */}
          {isMobile && (
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: 10,
                flexWrap: "wrap",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontSize: 44,
                  fontWeight: 300,
                  lineHeight: 0.95,
                  letterSpacing: "-0.03em",
                  background:
                    "linear-gradient(135deg, #F5F0E8 0%, #D4A853 50%, #C49A2A 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {caseItem.metric.value}
              </div>
              <p
                style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontSize: 11,
                  color: "rgba(245,240,232,0.55)",
                  margin: 0,
                  letterSpacing: "0.02em",
                  flex: "1 1 100%",
                  marginTop: -4,
                }}
              >
                {caseItem.metric.label}
              </p>
            </div>
          )}

          {/* Owner + quote */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: isMobile ? 17 : "clamp(22px, 2.4vw, 32px)",
                fontWeight: 300,
                lineHeight: isMobile ? 1.4 : 1.25,
                color: "#F5F0E8",
                margin: 0,
                marginBottom: isMobile ? 14 : 20,
                fontStyle: "italic",
                letterSpacing: "-0.01em",
              }}
            >
              &ldquo;{caseItem.quote}&rdquo;
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: isMobile ? 10 : 14,
              }}
            >
              <div
                style={{
                  width: isMobile ? 24 : 38,
                  height: 1,
                  background: "rgba(212,168,83,0.5)",
                  flexShrink: 0,
                }}
              />
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontSize: isMobile ? 13 : 14,
                    fontWeight: 600,
                    color: "#F5F0E8",
                    margin: 0,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {caseItem.ownerName}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontSize: 11,
                    color: "rgba(245,240,232,0.55)",
                    margin: 0,
                    marginTop: 2,
                  }}
                >
                  Owner · {caseItem.company}
                </p>
              </div>
            </div>
          </div>

          {/* Desktop right column. Hidden on mobile (metric handled above) */}
          {!isMobile && (
            <div
              style={{
                textAlign: "right",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                gap: 18,
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-cormorant), Georgia, serif",
                    fontSize: "clamp(40px, 6vw, 72px)",
                    fontWeight: 300,
                    lineHeight: 0.95,
                    letterSpacing: "-0.03em",
                    background:
                      "linear-gradient(135deg, #F5F0E8 0%, #D4A853 50%, #C49A2A 100%)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {caseItem.metric.value}
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontSize: 12,
                    color: "rgba(245,240,232,0.6)",
                    margin: 0,
                    marginTop: 6,
                    letterSpacing: "0.02em",
                  }}
                >
                  {caseItem.metric.label}
                </p>
              </div>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "flex-end",
                  gap: 6,
                }}
              >
                {caseItem.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontFamily: "var(--font-dm-sans), sans-serif",
                      fontSize: 11,
                      fontWeight: 500,
                      color: "rgba(212,168,83,0.85)",
                      padding: "5px 10px",
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

              <Link
                href={caseItem.href}
                prefetch={false}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontSize: 13,
                  fontWeight: 600,
                  color: "#F5F0E8",
                  textDecoration: "none",
                  padding: "10px 18px",
                  background: "rgba(245,240,232,0.06)",
                  border: "1px solid rgba(245,240,232,0.18)",
                  borderRadius: 999,
                  backdropFilter: "blur(8px)",
                  transition:
                    "background 200ms ease, border-color 200ms ease, transform 200ms ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(212,168,83,0.12)";
                  e.currentTarget.style.borderColor = "rgba(212,168,83,0.45)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(245,240,232,0.06)";
                  e.currentTarget.style.borderColor = "rgba(245,240,232,0.18)";
                }}
              >
                Read the case
                <span aria-hidden style={{ fontSize: 14, lineHeight: 1 }}>
                  →
                </span>
              </Link>
            </div>
          )}

          {/* Mobile: tags row + CTA */}
          {isMobile && (
            <>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 5,
                }}
              >
                {caseItem.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontFamily: "var(--font-dm-sans), sans-serif",
                      fontSize: 10,
                      fontWeight: 500,
                      color: "rgba(212,168,83,0.85)",
                      padding: "4px 9px",
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
              <Link
                href={caseItem.href}
                prefetch={false}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontSize: 13,
                  fontWeight: 600,
                  color: "#F5F0E8",
                  textDecoration: "none",
                  padding: "11px 16px",
                  background: "rgba(245,240,232,0.06)",
                  border: "1px solid rgba(245,240,232,0.18)",
                  borderRadius: 12,
                  backdropFilter: "blur(8px)",
                  width: "100%",
                  marginTop: 4,
                }}
              >
                Read the case
                <span aria-hidden style={{ fontSize: 14, lineHeight: 1 }}>
                  →
                </span>
              </Link>
            </>
          )}
        </div>

        {/* Card index pip on right edge. Hidden on mobile (saves space, identity strip already wraps) */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            right: 24,
            transform: "translateY(-50%)",
            zIndex: 2,
            display: isMobile ? "none" : "flex",
            flexDirection: "column",
            gap: 8,
          }}
        >
          {Array.from({ length: total }).map((_, n) => (
            <span
              key={n}
              style={{
                width: 4,
                height: n === index ? 24 : 4,
                borderRadius: 999,
                background:
                  n === index
                    ? "#D4A853"
                    : "rgba(245,240,232,0.18)",
                transition: "all 240ms ease",
              }}
            />
          ))}
        </div>
      </motion.article>
    </div>
  );
}
