"use client";

import AboutSection from "@/components/home/AboutSection";
import { useLocale } from "@/context/LocaleContext";
import { translations } from "@/lib/translations";

export default function AboutPage() {
  const { locale } = useLocale();
  const t = translations[locale].aboutPage;

  const cards = [
    { title: t.card1Title, body: t.card1Body },
    { title: t.card2Title, body: t.card2Body },
    { title: t.card3Title, body: t.card3Body },
  ];

  return (
    <div style={{ background: "#0D0B09", minHeight: "100vh" }}>
      {/* Spacer for fixed nav */}
      <div className="pt-24 md:pt-28" />

      {/* Who I Am. Moved from homepage */}
      <AboutSection />

      {/* How I operate */}
      <section className="pb-20 px-6">
        <div className="mx-auto" style={{ maxWidth: 1000 }}>
          <h2
            className="text-center mb-12"
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "clamp(28px, 4vw, 40px)",
              fontWeight: 300,
              color: "#F0EAD6",
            }}
          >
            {t.operatorHeading}
          </h2>

          <div
            className="about-cards-grid grid grid-cols-1 md:grid-cols-3 gap-5"
          >
            {cards.map((card) => (
              <div
                key={card.title}
                style={{
                  background: "#141210",
                  border: "1px solid rgba(212,168,83,0.1)",
                  borderRadius: 16,
                  padding: 32,
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-cormorant), Georgia, serif",
                    fontSize: 22,
                    color: "#F0EAD6",
                    marginBottom: 12,
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontSize: 14,
                    color: "rgba(240,234,214,0.55)",
                    lineHeight: 1.6,
                  }}
                >
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center">
        <h2
          style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontSize: "clamp(24px, 4vw, 36px)",
            color: "#F0EAD6",
          }}
        >
          {t.ctaHeading}
        </h2>
        <p
          className="mt-3"
          style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontSize: 15,
            color: "rgba(240,234,214,0.5)",
          }}
        >
          {t.ctaSub}
        </p>
        <div className="mt-6">
          <a
            href="/apply"
            className="inline-block rounded-md px-8 py-3.5 text-[13px] font-semibold uppercase tracking-[0.12em] transition-transform hover:scale-[1.02]"
            style={{ background: "#D4A853", color: "#0D0B09", borderRadius: 6 }}
          >
            {t.ctaButton}
          </a>
        </div>
        <p
          className="mt-3"
          style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontSize: 13,
            color: "rgba(240,234,214,0.35)",
          }}
        >
          {t.ctaTrust}
        </p>
      </section>
    </div>
  );
}
