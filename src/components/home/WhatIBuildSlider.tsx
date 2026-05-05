"use client";

import Image from "next/image";
import { useLocale } from "@/context/LocaleContext";
import { translations } from "@/lib/translations";

const STICKY_TOP_BASE = 96; // px below the fixed 72px navbar
const STICKY_OFFSET_STEP = 22; // px each card adds. Fanned-deck stagger

export default function WhatIBuildSlider() {
  const { locale } = useLocale();
  const t = translations[locale].homepage.whatIBuildSlider;

  const SERVICES = [
    {
      num: "01",
      title: t.svc1Title,
      description: t.svc1Desc,
      stat: t.svc1Stat,
      image:
        "https://static.wixstatic.com/media/62f926_c777df5150064641aa49c6369141af8c~mv2.png",
      alt: "Culture Barbershop website built by Client Growth",
      objectPosition: "center top",
    },
    {
      num: "02",
      title: t.svc2Title,
      description: t.svc2Desc,
      stat: t.svc2Stat,
      image:
        "https://static.wixstatic.com/media/62f926_b625e6d3a49844feb398b5af2ad8ed31~mv2.png",
      alt: "Google Ads and Meta Ads dashboard showing campaign performance",
      objectPosition: "center 50%",
    },
    {
      num: "03",
      title: t.svc3Title,
      description: t.svc3Desc,
      stat: t.svc3Stat,
      image:
        "https://static.wixstatic.com/media/62f926_89f31d5c8a8d40bf81a89126c4969979~mv2.png",
      alt: "Local SEO rankings and Google Maps positioning",
      objectPosition: "center 60%",
    },
    {
      num: "04",
      title: t.svc4Title,
      description: t.svc4Desc,
      stat: t.svc4Stat,
      image:
        "https://static.wixstatic.com/media/62f926_a22866474ed343dca8aed45202b5d05b~mv2.png",
      alt: "AI search visibility in ChatGPT and Google AI",
      objectPosition: "center 55%",
    },
    {
      num: "05",
      title: t.svc5Title,
      description: t.svc5Desc,
      stat: t.svc5Stat,
      image:
        "https://static.wixstatic.com/media/62f926_e9658dd24b3044a3aef6c5f38ea4ce9b~mv2.png",
      alt: "AI workflow tools and automation",
      objectPosition: "center 50%",
    },
    {
      num: "06",
      title: t.svc6Title,
      description: t.svc6Desc,
      stat: t.svc6Stat,
      image:
        "https://static.wixstatic.com/media/62f926_a8b917792ec049f28cbae257c67f7737~mv2.png",
      alt: "Email marketing campaigns and sequences",
      badge: t.svc6Badge,
      objectPosition: "center 55%",
    },
    {
      num: "07",
      title: t.svc7Title,
      description: t.svc7Desc,
      stat: t.svc7Stat,
      image:
        "https://static.wixstatic.com/media/62f926_d50d59a0a06543fe8baa6786a41cb2ec~mv2.png",
      alt: "Weekly optimization and performance reporting",
      objectPosition: "center 50%",
    },
  ];

  return (
    <section
      id="services"
      className="services-stack-section"
    >
      <div className="text-center mb-12 px-6">
        <p
          className="uppercase mb-4"
          style={{
            fontSize: 12,
            letterSpacing: "0.15em",
            color: "#D4A853",
            fontFamily: "var(--font-dm-sans), sans-serif",
          }}
        >
          {t.eyebrow}
        </p>
        <h2
          style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontSize: "clamp(32px, 5vw, 52px)",
            fontWeight: 300,
            color: "#F0EAD6",
            lineHeight: 1.1,
          }}
        >
          {t.heading}
        </h2>
        <p
          className="mt-4 mx-auto"
          style={{
            maxWidth: 600,
            fontSize: 16,
            color: "rgba(240, 234, 214, 0.6)",
            lineHeight: 1.6,
            fontFamily: "var(--font-dm-sans), sans-serif",
          }}
        >
          {t.subtitle}
        </p>
      </div>

      <div className="services-stack">
        {SERVICES.map((s, i) => (
          <article
            key={s.num}
            className="services-stack-card"
            style={{
              top: `${STICKY_TOP_BASE + i * STICKY_OFFSET_STEP}px`,
              zIndex: i + 1,
            }}
          >
            {s.badge && (
              <span
                style={{
                  position: "absolute",
                  top: 16,
                  right: 16,
                  zIndex: 2,
                  background: "rgba(212,168,83,0.15)",
                  color: "#D4A853",
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontSize: 10,
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  padding: "4px 10px",
                  borderRadius: 4,
                  border: "1px solid rgba(212,168,83,0.2)",
                }}
              >
                {s.badge}
              </span>
            )}

            <div className="services-stack-image">
              <Image
                src={s.image}
                alt={s.alt}
                width={760}
                height={500}
                quality={80}
                loading="lazy"
                style={{
                  objectPosition: s.objectPosition || "center top",
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>

            <div className="services-stack-text">
              <span
                style={{
                  color: "#D4A853",
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontSize: 16,
                  fontStyle: "italic",
                }}
              >
                {s.num}
              </span>
              <h3
                style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontSize: 26,
                  color: "#F0EAD6",
                  margin: "6px 0 10px",
                  fontWeight: 400,
                  lineHeight: 1.15,
                }}
              >
                {s.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontSize: 15,
                  color: "rgba(240,234,214,0.62)",
                  lineHeight: 1.55,
                  margin: 0,
                }}
              >
                {s.description}
              </p>
              <div
                style={{
                  borderTop: "1px solid rgba(212,168,83,0.12)",
                  marginTop: 18,
                  paddingTop: 14,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "#D4A853",
                  }}
                >
                  {s.stat}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="text-center" style={{ marginTop: 64, padding: "0 24px" }}>
        <p
          style={{
            fontSize: 14,
            color: "rgba(240, 234, 214, 0.4)",
            fontFamily: "var(--font-dm-sans), sans-serif",
          }}
        >
          {t.closingLine}
        </p>
        <div style={{ marginTop: 20 }}>
          <a
            href="/apply"
            className="inline-block rounded-md px-8 py-3.5 text-[13px] font-semibold uppercase tracking-[0.12em] transition-transform hover:scale-[1.02]"
            style={{
              background: "#D4A853",
              color: "#0D0B09",
              borderRadius: 6,
            }}
          >
            {t.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
