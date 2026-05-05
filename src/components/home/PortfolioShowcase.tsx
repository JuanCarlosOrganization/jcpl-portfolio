"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";
import CTAButton from "@/components/ui/CTAButton";
import { Reveal } from "@/components/motion";
import { ctaCopy } from "@/lib/content";

type Slide = { image: string; caption: string };

type Project = {
  id: number;
  featured: boolean;
  businessName: string;
  niche: string;
  city: string;
  result: string;
  resultMetric: string;
  logo: string;
  heroScreenshot: string;
  slides: Slide[];
  liveUrl: string;
};

const websiteProjects: Project[] = [
  {
    id: 1,
    featured: true,
    businessName: "Triple W Rentals",
    niche: "RV Rentals",
    city: "Texas",
    result: "First booking after going live",
    resultMetric: "$41,085 revenue · 30 days · $900 ad spend",
    logo: "/images/portfolio/triplew-logo.webp",
    heroScreenshot: "/images/portfolio/triplew-hero.webp",
    slides: [
      { image: "/images/portfolio/triplew-desktop.webp", caption: "Built to make them call before they scroll" },
      { image: "/images/portfolio/triplew-mobile.webp", caption: "60% of buyers search on mobile. This is what they see." },
      { image: "/images/portfolio/triplew-booking.webp", caption: "The booking page that captures leads at 2am" },
    ],
    liveUrl: "https://triplewrentals.com",
  },
  {
    id: 2,
    featured: false,
    businessName: "Culture Barbershop",
    niche: "Barbershop",
    city: "Montreal, QC",
    result: "Calendar fully booked within 3 weeks",
    resultMetric: "Page 1 local SEO · Under 60 days",
    logo: "/images/portfolio/culture-logo.webp",
    heroScreenshot: "/images/portfolio/culture-hero.webp",
    slides: [
      { image: "/images/portfolio/culture-desktop.webp", caption: "Brand identity translated into a booking machine" },
      { image: "/images/portfolio/culture-mobile.webp", caption: "Clients book directly from Google. Zero friction" },
      { image: "/images/portfolio/culture-booking.webp", caption: "Integrated booking flow. No call needed to book." },
    ],
    liveUrl: "https://culturebarbershop.com",
  },
];

function hideImg(e: React.SyntheticEvent<HTMLImageElement>) {
  (e.target as HTMLImageElement).style.display = "none";
}

function hideParent(e: React.SyntheticEvent<HTMLImageElement>) {
  const parent = (e.target as HTMLImageElement).parentElement;
  if (parent) parent.style.display = "none";
}

export default function PortfolioShowcase() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const currentProject = websiteProjects[activeProject];

  const openLightbox = useCallback((index: number) => {
    setActiveProject(index);
    setActiveSlide(0);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    document.body.style.overflow = "";
  }, []);

  const nextSlide = useCallback(() => {
    setActiveSlide((prev) =>
      prev < currentProject.slides.length - 1 ? prev + 1 : prev
    );
  }, [currentProject.slides.length]);

  const prevSlide = useCallback(() => {
    setActiveSlide((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  useEffect(() => {
    if (!lightboxOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      else if (e.key === "ArrowRight") nextSlide();
      else if (e.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, [lightboxOpen, closeLightbox, nextSlide, prevSlide]);

  useEffect(() => {
    return () => { document.body.style.overflow = ""; };
  }, []);

  const GREEN = "var(--color-accent-green, #4ade80)";
  const BLUE = "var(--brand-accent, #2B5A8C)";

  return (
    <SectionWrapper id="portfolio" variant="default">
      {/* Header */}
      <Reveal className="text-center mb-16">
        <p style={{
          fontSize: "11px", fontWeight: 600, letterSpacing: "0.14em",
          textTransform: "uppercase", opacity: 0.45, marginBottom: "20px",
          color: "white",
        }}>
          CUSTOM BUILD
        </p>
        <h2 style={{
          fontSize: "clamp(44px, 5.5vw, 68px)", fontWeight: 800,
          letterSpacing: "-0.03em", lineHeight: 1.0,
          color: "white", margin: "0 auto 20px",
        }}>
          Your Competitors Have Templates.<br />
          Your Business Gets Its Own.
        </h2>
        <p style={{
          fontSize: "18px", fontWeight: 400, lineHeight: 1.65, opacity: 0.68,
          maxWidth: "520px", margin: "0 auto", color: "white",
        }}>
          Every website I build is fully custom coded. Designed around your
          brand, your market, and one outcome: qualified calls on your calendar.
        </p>
      </Reveal>

      {/* Card grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "1.65fr 1fr",
        gap: "20px",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
        className="portfolio-grid"
      >
        {/* Featured card */}
        {(() => {
          const p = websiteProjects[0];
          return (
            <Reveal>
              <div
                role="button"
                tabIndex={0}
                onClick={() => openLightbox(0)}
                onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openLightbox(0); } }}
                className="portfolio-card"
                style={{
                  borderRadius: "12px",
                  border: "1px solid rgba(255,255,255,0.09)",
                  overflow: "hidden",
                  cursor: "pointer",
                  background: "rgba(255,255,255,0.025)",
                  transition: "border-color 220ms ease, box-shadow 220ms ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.22)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 0 0 1px rgba(255,255,255,0.08)";
                  const img = (e.currentTarget as HTMLDivElement).querySelector<HTMLImageElement>(".card-img");
                  const overlay = (e.currentTarget as HTMLDivElement).querySelector<HTMLDivElement>(".card-overlay");
                  const label = (e.currentTarget as HTMLDivElement).querySelector<HTMLSpanElement>(".card-label");
                  if (img) img.style.transform = "scale(1.04)";
                  if (overlay) overlay.style.background = "rgba(0,0,0,0.50)";
                  if (label) label.style.opacity = "1";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.09)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                  const img = (e.currentTarget as HTMLDivElement).querySelector<HTMLImageElement>(".card-img");
                  const overlay = (e.currentTarget as HTMLDivElement).querySelector<HTMLDivElement>(".card-overlay");
                  const label = (e.currentTarget as HTMLDivElement).querySelector<HTMLSpanElement>(".card-label");
                  if (img) img.style.transform = "scale(1)";
                  if (overlay) overlay.style.background = "rgba(0,0,0,0)";
                  if (label) label.style.opacity = "0";
                }}
              >
                {/* Screenshot area */}
                <div style={{ width: "100%", aspectRatio: "16/9", overflow: "hidden", position: "relative", background: "rgba(255,255,255,0.04)" }}>
                  <Image
                    src={p.heroScreenshot}
                    alt={`${p.businessName} website`}
                    width={800}
                    height={450}
                    quality={80}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="card-img"
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", transition: "transform 500ms ease", display: "block" }}
                    onError={hideImg}
                  />
                  <div className="card-overlay" style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0)", display: "flex", alignItems: "center", justifyContent: "center", transition: "background 250ms ease" }}>
                    <span className="card-label" style={{ color: "white", fontSize: "14px", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", opacity: 0, transition: "opacity 250ms ease", border: "1px solid rgba(255,255,255,0.40)", padding: "10px 24px", borderRadius: "4px" }}>
                      View Build →
                    </span>
                  </div>
                </div>
                {/* Footer. Row layout */}
                <div style={{ padding: "20px 24px 22px", display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "16px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <Image src={p.logo} alt={p.businessName} width={120} height={30} quality={75} sizes="30px" style={{ height: "30px", width: "auto", objectFit: "contain", opacity: 0.88 }} onError={hideImg} />
                    <div>
                      <p style={{ fontSize: "14px", fontWeight: 700, margin: 0, color: "white" }}>{p.businessName}</p>
                      <p style={{ fontSize: "11px", fontWeight: 500, opacity: 0.42, letterSpacing: "0.09em", textTransform: "uppercase", margin: "2px 0 0", color: "white" }}>{p.niche} · {p.city}</p>
                    </div>
                  </div>
                  <div style={{ textAlign: "right", flexShrink: 0 }}>
                    <p style={{ fontSize: "13px", fontWeight: 600, margin: 0, color: GREEN }}>{p.result}</p>
                    <p style={{ fontSize: "11px", fontWeight: 400, opacity: 0.40, margin: "3px 0 0", color: "white" }}>{p.resultMetric}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })()}

        {/* Secondary card */}
        {(() => {
          const p = websiteProjects[1];
          return (
            <Reveal delay={0.08}>
              <div
                role="button"
                tabIndex={0}
                onClick={() => openLightbox(1)}
                onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openLightbox(1); } }}
                className="portfolio-card"
                style={{
                  borderRadius: "12px",
                  border: "1px solid rgba(255,255,255,0.09)",
                  overflow: "hidden",
                  cursor: "pointer",
                  background: "rgba(255,255,255,0.025)",
                  transition: "border-color 220ms ease, box-shadow 220ms ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.22)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 0 0 1px rgba(255,255,255,0.08)";
                  const img = (e.currentTarget as HTMLDivElement).querySelector<HTMLImageElement>(".card-img");
                  const overlay = (e.currentTarget as HTMLDivElement).querySelector<HTMLDivElement>(".card-overlay");
                  const label = (e.currentTarget as HTMLDivElement).querySelector<HTMLSpanElement>(".card-label");
                  if (img) img.style.transform = "scale(1.04)";
                  if (overlay) overlay.style.background = "rgba(0,0,0,0.50)";
                  if (label) label.style.opacity = "1";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.09)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                  const img = (e.currentTarget as HTMLDivElement).querySelector<HTMLImageElement>(".card-img");
                  const overlay = (e.currentTarget as HTMLDivElement).querySelector<HTMLDivElement>(".card-overlay");
                  const label = (e.currentTarget as HTMLDivElement).querySelector<HTMLSpanElement>(".card-label");
                  if (img) img.style.transform = "scale(1)";
                  if (overlay) overlay.style.background = "rgba(0,0,0,0)";
                  if (label) label.style.opacity = "0";
                }}
              >
                {/* Screenshot area */}
                <div style={{ width: "100%", aspectRatio: "4/3", overflow: "hidden", position: "relative", background: "rgba(255,255,255,0.04)" }}>
                  <Image
                    src={p.heroScreenshot}
                    alt={`${p.businessName} website`}
                    width={600}
                    height={450}
                    quality={80}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="card-img"
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", transition: "transform 500ms ease", display: "block" }}
                    onError={hideImg}
                  />
                  <div className="card-overlay" style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0)", display: "flex", alignItems: "center", justifyContent: "center", transition: "background 250ms ease" }}>
                    <span className="card-label" style={{ color: "white", fontSize: "14px", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", opacity: 0, transition: "opacity 250ms ease", border: "1px solid rgba(255,255,255,0.40)", padding: "10px 24px", borderRadius: "4px" }}>
                      View Build →
                    </span>
                  </div>
                </div>
                {/* Footer. Stacked layout */}
                <div style={{ padding: "20px 24px 22px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                    <Image src={p.logo} alt={p.businessName} width={120} height={28} quality={75} sizes="28px" style={{ height: "28px", width: "auto", objectFit: "contain", opacity: 0.88 }} onError={hideImg} />
                    <div>
                      <p style={{ fontSize: "14px", fontWeight: 700, margin: 0, color: "white" }}>{p.businessName}</p>
                      <p style={{ fontSize: "11px", fontWeight: 500, opacity: 0.42, letterSpacing: "0.09em", textTransform: "uppercase", margin: "2px 0 0", color: "white" }}>{p.niche} · {p.city}</p>
                    </div>
                  </div>
                  <p style={{ fontSize: "12px", fontWeight: 600, margin: 0, color: GREEN }}>{p.result}</p>
                  <p style={{ fontSize: "11px", fontWeight: 400, opacity: 0.40, margin: "3px 0 0", color: "white" }}>{p.resultMetric}</p>
                  <p style={{ fontSize: "13px", fontWeight: 700, marginTop: "12px", color: BLUE }}>View Build →</p>
                </div>
              </div>
            </Reveal>
          );
        })()}
      </div>

      {/* Closing strip */}
      <Reveal delay={0.15}>
        <div
          className="portfolio-strip"
          style={{
            marginTop: "40px",
            padding: "26px 32px",
            borderRadius: "10px",
            border: "1px solid rgba(255,255,255,0.07)",
            background: "rgba(255,255,255,0.02)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
            maxWidth: "1100px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <div>
            <p style={{ fontSize: "16px", fontWeight: 600, margin: 0, color: "white" }}>
              Want something built exactly for your business?
            </p>
            <p style={{ fontSize: "13px", fontWeight: 400, opacity: 0.50, margin: "4px 0 0", color: "white" }}>
              Every build starts with your market. Not your logo preferences.
            </p>
          </div>
          <CTAButton
            href={ctaCopy.href}
            variant="primary"
            size="md"
            eventName="portfolio_cta_click"
          >
            Apply for a Custom Build
          </CTAButton>
        </div>
      </Reveal>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          style={{
            position: "fixed", inset: 0, zIndex: 9999,
            background: "rgba(0,0,0,0.93)",
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: "20px",
            animation: "lightboxFadeIn 220ms ease forwards",
          }}
          onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX; }}
          onTouchEnd={(e) => {
            if (touchStartX.current === null) return;
            const delta = e.changedTouches[0].clientX - touchStartX.current;
            touchStartX.current = null;
            if (delta > 50) prevSlide();
            else if (delta < -50) nextSlide();
          }}
        >
          {/* Click-outside */}
          <div onClick={closeLightbox} style={{ position: "absolute", inset: 0, zIndex: 0 }} />

          {/* Content */}
          <div style={{
            position: "relative", zIndex: 1,
            width: "100%", maxWidth: "1080px",
            animation: "lightboxScaleIn 220ms ease forwards",
          }}>
            {/* Top bar */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <Image
                  src={currentProject.logo}
                  alt={currentProject.businessName}
                  width={120}
                  height={26}
                  quality={75}
                  sizes="26px"
                  style={{ height: "26px", opacity: 0.82 }}
                  onError={hideImg}
                />
                <span style={{ fontSize: "14px", fontWeight: 700, opacity: 0.92, color: "white" }}>
                  {currentProject.businessName}
                </span>
                <span style={{ fontSize: "11px", fontWeight: 500, opacity: 0.38, letterSpacing: "0.09em", textTransform: "uppercase", color: "white" }}>
                  {currentProject.niche} · {currentProject.city}
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                <span style={{ fontSize: "12px", fontWeight: 400, opacity: 0.36, color: "white" }}>
                  {activeSlide + 1} / {currentProject.slides.length}
                </span>
                <button
                  onClick={closeLightbox}
                  style={{ background: "none", border: "none", color: "white", fontSize: "26px", fontWeight: 200, cursor: "pointer", opacity: 0.60, padding: "4px 8px", lineHeight: 1 }}
                  aria-label="Close"
                >×</button>
              </div>
            </div>

            {/* Main image */}
            <div style={{ width: "100%", borderRadius: "8px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.07)", aspectRatio: "16/9", background: "rgba(255,255,255,0.03)" }}>
              <Image
                key={`${activeProject}-${activeSlide}`}
                src={currentProject.slides[activeSlide].image}
                alt={currentProject.slides[activeSlide].caption}
                width={1080}
                height={608}
                quality={85}
                sizes="100vw"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block", animation: "slideFadeIn 180ms ease forwards" }}
                onError={(e) => { (e.target as HTMLImageElement).style.opacity = "0"; }}
              />
            </div>

            {/* Bottom bar */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "14px", gap: "16px" }}>
              <button
                onClick={prevSlide}
                disabled={activeSlide === 0}
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.10)", borderRadius: "6px", color: "white", padding: "8px 18px", cursor: "pointer", fontSize: "16px", flexShrink: 0, opacity: activeSlide === 0 ? 0.20 : 0.75, transition: "opacity 150ms" }}
                aria-label="Previous slide"
              >←</button>

              <div style={{ textAlign: "center", flex: 1 }}>
                <p style={{ fontSize: "14px", fontWeight: 400, opacity: 0.60, margin: 0, color: "white" }}>
                  {currentProject.slides[activeSlide].caption}
                </p>
                <p style={{ fontSize: "12px", fontWeight: 600, color: GREEN, margin: "5px 0 0" }}>
                  {currentProject.result}
                </p>
              </div>

              <button
                onClick={nextSlide}
                disabled={activeSlide === currentProject.slides.length - 1}
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.10)", borderRadius: "6px", color: "white", padding: "8px 18px", cursor: "pointer", fontSize: "16px", flexShrink: 0, opacity: activeSlide === currentProject.slides.length - 1 ? 0.20 : 0.75, transition: "opacity 150ms" }}
                aria-label="Next slide"
              >→</button>
            </div>

            {/* Live site link */}
            <div style={{ textAlign: "center", marginTop: "18px" }}>
              <a
                href={currentProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                style={{ fontSize: "12px", fontWeight: 600, color: "rgba(255,255,255,0.45)", textDecoration: "none", letterSpacing: "0.06em", textTransform: "uppercase", borderBottom: "1px solid rgba(255,255,255,0.18)", paddingBottom: "2px" }}
              >
                View live site →
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Mobile responsive styles */}
      <style>{`
        @media (max-width: 1024px) and (min-width: 768px) {
          .portfolio-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 767px) {
          .portfolio-grid { grid-template-columns: 1fr !important; gap: 16px !important; }
          .portfolio-strip { flex-direction: column !important; align-items: flex-start !important; }
          .portfolio-strip a { width: 100% !important; text-align: center; }
        }
      `}</style>
    </SectionWrapper>
  );
}
