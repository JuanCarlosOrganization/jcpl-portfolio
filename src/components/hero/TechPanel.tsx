"use client";

import { useRef, useEffect, useState } from "react";
import LogoLoop from "./LogoLoop";
import StarBorder from "@/components/ui/StarBorder";
import "./tech-panel.css";

/* ─── Technology logos (text placeholders) ─── */
const TECH_LOGOS = [
  { node: "Next.js" },
  { node: "React" },
  { node: "TypeScript" },
  { node: "Three.js" },
  { node: "Vercel" },
  { node: "Figma" },
  { node: "Tailwind" },
  { node: "Node.js" },
  { node: "PostgreSQL" },
  { node: "Stripe" },
];

interface TechPanelProps {
  /** True once the laser beam has finished its intro animation */
  laserLanded?: boolean;
}

export default function TechPanel({ laserLanded = false }: TechPanelProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  const isRevealed = inView && laserLanded;

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={wrapperRef}
      className={`tp-wrapper ${isRevealed ? "tp-visible" : ""}`}
      aria-hidden="true"
    >
      {/* Ambient haze behind panel */}
      <div className="tp-haze" />

      {/* Junction bridge. Smooths laser→panel seam */}
      {isRevealed && <div className="tp-junction" />}

      {/* The panel rectangle. Now wrapped in StarBorder for animated effect */}
      <StarBorder color="#fff" speed="6s" thickness={2}>
        <div className={`tp-panel ${isRevealed ? "tp-panel--landed" : ""}`}>
          {/* Impact glow. Radial bloom at beam strike point */}
          <div className={`tp-impact ${isRevealed ? "tp-impact--active" : ""}`} />

          {/* Energy spread. Horizontal propagation center→edges */}
          {isRevealed && (
            <div className="tp-energy">
              <div className="tp-energy-pulse" />
              <div className="tp-energy-echo" />
            </div>
          )}

          {/* Light sweep across top */}
          <div className="tp-sweep" />

          {/* Permanent edge glow lines */}
          <div className="tp-edge tp-edge-left" />
          <div className="tp-edge tp-edge-right" />

          {/* Surface sheen */}
          <div className="tp-surface" />

          {/* Frosted noise overlay */}
          <div className="tp-frost" />

          {/* Logo content */}
          <div className={`tp-logo-content ${isRevealed ? "tp-logo-content--revealed" : ""}`}>
            <p className="tp-label">Built With</p>
            <LogoLoop
              logos={TECH_LOGOS}
              direction="horizontal"
              speed={35}
              gap={56}
              logoHeight={28}
              pauseOnHover
              fadeEdges
              fadeColor="#0a1020"
              scaleOnHover
            />
          </div>
        </div>
      </StarBorder>
    </div>
  );
}
