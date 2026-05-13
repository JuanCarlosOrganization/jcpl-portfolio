"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import Link from "next/link";
import { prefersReducedMotion } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger);

const CARD_FROM = [
  { x: -28, y: 0 },
  { x: 0, y: 28 },
  { x: 28, y: 0 },
] as const;

const STEPS = [
  {
    num: "01",
    title: "I audit your pipeline.",
    body: "Your market, your competitors, your current traffic sources. I look at what is working and what is leaking.",
  },
  {
    num: "02",
    title: "I show you where you are losing calls.",
    body: "Most service businesses are invisible for the exact searches their customers are making right now. I show you the gap.",
  },
  {
    num: "03",
    title: "I tell you if I can help.",
    body: "If I cannot produce a return for your business, I will say so directly. You leave the call knowing exactly where you stand.",
  },
];

export default function DiagnosticSteps() {
  const sectionRef = useRef<HTMLElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    const cards = stepRefs.current.filter(Boolean) as HTMLDivElement[];
    if (!cards.length) return;

    if (prefersReducedMotion()) {
      gsap.set(cards, { opacity: 1, x: 0, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      const isMobile = window.matchMedia("(max-width: 767px)").matches;

      // Mobile. Simple fade with stagger
      if (isMobile) {
        gsap.set(cards, { opacity: 0 });
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
          onEnter: () =>
            gsap.to(cards, {
              opacity: 1,
              duration: 0.5,
              stagger: 0.15,
              ease: "power2.out",
            }),
        });
        return;
      }

      // Desktop. Single timeline drives all three cards
      cards.forEach((card, i) => {
        gsap.set(card, { opacity: 0, x: CARD_FROM[i]?.x ?? 0, y: CARD_FROM[i]?.y ?? 0 });
      });

      const tl = gsap.timeline({
        scrollTrigger: { trigger: ".diagnostic-section", start: "top 78%", once: true },
        defaults: { duration: 0.6, ease: "power2.out" },
      });
      tl.to(cards, { opacity: 1, x: 0, y: 0, stagger: 0.12 });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <SectionWrapper
      ref={sectionRef}
      id="diagnostic"
      className="py-16 md:py-24"
      style={{ background: "#0D0B09" }}
    >
      <div className="max-w-4xl mx-auto text-center mb-12">
        <SectionLabel label="THE DIAGNOSTIC" className="mb-4 !text-[var(--brand-accent,#D4A853)]" />
        <h2
          className="text-[clamp(28px,4vw,40px)] font-bold text-white leading-tight mb-6"
          style={{ maxWidth: 640, margin: "0 auto 24px" }}
        >
          Here is exactly what happens on the call.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-14 diagnostic-section">
        {STEPS.map((step, i) => (
          <div
            key={step.num}
            ref={(el) => { stepRefs.current[i] = el; }}
            className={`rounded-xl lift-card diagnostic-card diagnostic-card-${i + 1}`}
            style={{
              padding: "28px 28px 32px 28px",
              background: "#1E1A14",
              border: "1px solid #2A2318",
              borderTop: "3px solid var(--brand-accent, #D4A853)",
              willChange: "transform, opacity",
            }}
          >
            <div
              className="step-number mb-4"
              style={{ fontSize: "2rem", color: "var(--brand-accent, #D4A853)", fontWeight: 800 }}
            >
              {step.num}
            </div>
            <h3
              className="card-title mb-3"
              style={{ fontSize: "1.25rem", color: "#F5F0E8", fontWeight: 700 }}
            >
              {step.title}
            </h3>
            <p
              className="card-body"
              style={{
                fontSize: "0.9rem",
                color: "#D2C9B8",
                lineHeight: 1.6,
              }}
            >
              {step.body}
            </p>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center">
        <Link
          href="/apply"
          className="inline-flex items-center justify-center gap-2 font-semibold text-[#0A0E1A] rounded-lg cta-primary cta-button"
          style={{ background: "var(--brand-accent, #D4A853)", padding: "16px 32px" }}
          onMouseOver={(e) => { e.currentTarget.style.backgroundColor = "#C49A2A"; }}
          onMouseOut={(e) => { e.currentTarget.style.backgroundColor = "var(--brand-accent, #D4A853)"; }}
        >
          Apply to be a Partner
          <span aria-hidden="true">→</span>
        </Link>
        <p
          className="mt-2 text-center"
          style={{ fontSize: "0.875rem", color: "#D2C9B8", fontStyle: "italic" }}
        >
          If I cannot produce a return, I will tell you on the call. Before you pay anything.
        </p>
      </div>
    </SectionWrapper>
  );
}
