"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Reveal from "@/components/motion/Reveal";
import FeatureCard from "@/components/ui/FeatureCard";
import PadlockEmbed from "./marketing-mocks/PadlockEmbed";
import EarthEmbed from "./marketing-mocks/EarthEmbed";
import MapsSeoEmbed from "./marketing-mocks/MapsSeoEmbed";
import { useTranslations } from "@/context/LocaleContext";

const ROTATION_MS = 3200;

function RotatingHeadline({ phrases }: { phrases: string[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % phrases.length);
    }, ROTATION_MS);
    return () => clearInterval(id);
  }, [phrases.length]);

  return (
    <span className="relative inline-block w-full">
      {/* Invisible sizer locks height so switching phrases doesn't jump */}
      <span className="invisible block" aria-hidden="true">
        {phrases.reduce((a, b) => (b.length > a.length ? b : a), "")}
      </span>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={index}
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -16, filter: "blur(6px)" }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          {phrases[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export default function MarketingShowcase() {
  const t = useTranslations();
  const eyebrow = t<string>("homepage.marketingShowcase.eyebrow");
  const rotatingPhrases = t<string[]>("homepage.marketingShowcase.rotatingPhrases");
  const subline = t<string>("homepage.marketingShowcase.subline");
  const cards = t<Array<{ eyebrow: string; title: string }>>("homepage.marketingShowcase.cards");

  const visuals = [
    <PadlockEmbed key="m1" />,
    <EarthEmbed key="m2" />,
    <MapsSeoEmbed key="m3" />,
  ];

  return (
    <section id="marketing-showcase" className="section overflow-hidden">
      <div className="container">
        <Reveal>
          <div className="max-w-3xl mx-auto text-center">
            <div
              className="mb-4 text-[11px] font-medium tracking-[0.22em] uppercase"
              style={{ color: "var(--brand-accent)" }}
            >
              {eyebrow}
            </div>

            <h2
              className="leading-[1.05] mb-5 break-words [overflow-wrap:anywhere]"
              style={{
                fontFamily: "var(--font-serif, 'Cormorant Garamond', serif)",
                fontSize: "clamp(1.75rem, 6vw, 3.75rem)",
                color: "var(--text-primary)",
                letterSpacing: "-0.015em",
              }}
            >
              <RotatingHeadline phrases={rotatingPhrases} />
            </h2>

            <p
              className="text-[14px] md:text-base leading-relaxed mt-2"
              style={{ color: "var(--text-body, #D2C9B8)" }}
            >
              {subline}
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 mt-10 md:mt-16 w-full">
          {cards.map((card, i) => (
            <Reveal key={card.title} delay={i * 0.08} className="w-full min-w-0">
              <FeatureCard
                eyebrow={card.eyebrow}
                title={card.title}
                visual={visuals[i]}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
