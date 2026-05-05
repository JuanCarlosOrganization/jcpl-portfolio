"use client";

import Image from "next/image";
import { useLocale } from "@/context/LocaleContext";
import { translations } from "@/lib/translations";

export default function ResultsPageContent() {
  const { locale } = useLocale();
  const t = translations[locale].resultsPage;

  const CLIENTS = [
    {
      badge: t.client1Badge,
      badgeStyle: { background: "rgba(212,168,83,0.12)", color: "#D4A853" },
      label: "BARBERSHOP · MONTREAL",
      title: t.client1Title,
      description: t.client1Desc,
      testimonial: t.client1Testimonial,
      attribution: "Tobari, Culture Barbershop · Montreal, QC",
      link: "https://culturemtl.ca",
    },
    {
      badge: t.client2Badge,
      badgeStyle: { background: "rgba(76,175,80,0.1)", color: "rgba(76,175,80,0.8)" },
      label: "BARBERSHOP · MONTREAL",
      title: t.client2Title,
      description: t.client2Desc,
      testimonial: t.client2Testimonial,
      attribution: "Hadi, Elite Barbershop · Montreal, QC",
      link: "https://elitebyhadi.com",
    },
    {
      badge: t.client3Badge,
      badgeStyle: { background: "rgba(212,168,83,0.12)", color: "#D4A853" },
      label: "PAINTING CONTRACTOR · DALLAS-FORT WORTH",
      title: t.client3Title,
      description: t.client3Desc,
      testimonial: t.client3Testimonial,
      attribution: "Wesley, Absolute Painting · Dallas-Fort Worth",
      link: "https://absolutepainting.vercel.app/quote",
    },
    {
      badge: t.client4Badge,
      badgeStyle: { background: "rgba(212,168,83,0.12)", color: "#D4A853" },
      label: "DENTAL CLINIC · LAVAL",
      title: t.client4Title,
      description: t.client4Desc,
      testimonial: null,
      attribution: null,
      link: "https://as.centredentairese.com",
    },
  ];

  return (
    <div style={{ background: "#0D0B09", minHeight: "100vh" }}>
      {/* Hero */}
      <section className="pt-32 pb-12 md:pt-36 md:pb-16 text-center px-6">
        <p className="uppercase mb-4" style={{ fontSize: 12, letterSpacing: "0.15em", color: "#D4A853", fontFamily: "var(--font-dm-sans), sans-serif" }}>
          {t.eyebrow}
        </p>
        <h1 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 300, color: "#F0EAD6", lineHeight: 1.1 }}>
          {t.heading}
        </h1>
        <p className="mt-4 mx-auto" style={{ maxWidth: 600, fontSize: 16, color: "rgba(240, 234, 214, 0.6)", lineHeight: 1.6, fontFamily: "var(--font-dm-sans), sans-serif" }}>
          {t.sub}
        </p>
      </section>

      {/* Lead Result. Triple W */}
      <section className="pb-16 px-6">
        <div className="mx-auto" style={{ maxWidth: 900, background: "#141210", border: "1px solid rgba(212,168,83,0.15)", borderRadius: 16, padding: "48px 40px" }}>
          <p style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(240,234,214,0.4)" }}>
            RV RENTAL · TEXAS · GOOGLE ADS
          </p>

          <p className="mt-6" style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(56px, 10vw, 96px)", fontWeight: 300, color: "#F0EAD6", lineHeight: 1 }}>
            $41,085
          </p>
          <p className="mt-2" style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 18, color: "rgba(240,234,214,0.7)" }}>
            {t.revenueLine}
          </p>

          <p className="mt-4" style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 16, color: "#F0EAD6", fontWeight: 600 }}>
            {t.returnLine}
          </p>
          <p className="mt-2" style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 13, color: "rgba(240,234,214,0.35)" }}>
            {t.verifiedLine}
          </p>

          {/* Dashboard screenshot */}
          <div className="mt-8" style={{ borderRadius: 12, overflow: "hidden", border: "1px solid rgba(212,168,83,0.1)" }}>
            <Image
              src="https://static.wixstatic.com/media/62f926_5c7a609ac5c143e48028810fda21af82~mv2.png"
              alt="Triple W Rentals live Google Ads account dashboard"
              width={900}
              height={500}
              quality={80}
              className="w-full h-auto"
              priority
            />
          </div>

          {/* Testimonial */}
          <div className="mt-8" style={{ borderLeft: "3px solid #D4A853", paddingLeft: 20 }}>
            <p style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 15, color: "rgba(240,234,214,0.7)", fontStyle: "italic", lineHeight: 1.7 }}>
              &ldquo;{t.testimonialQuote}&rdquo;
            </p>
            <p className="mt-2" style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 13, color: "rgba(240,234,214,0.4)" }}>
              Westin Wayne Walker, Triple W Rentals · Texas
            </p>
          </div>

          {/* What was delivered */}
          <p className="mt-6" style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 12, textTransform: "uppercase", letterSpacing: "0.08em", color: "rgba(240,234,214,0.35)" }}>
            {t.whatWasBuilt}
          </p>
          <p className="mt-2" style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 13, color: "rgba(240,234,214,0.5)" }}>
            {t.deliverables}
          </p>
          <a
            href="https://triplewrentals.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 hover:underline"
            style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 14, color: "#D4A853", textDecoration: "none" }}
          >
            {t.viewLiveSite}
          </a>
        </div>
      </section>

      {/* Client Delivery Grid */}
      <section className="pb-16 px-6">
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-5" style={{ maxWidth: 900 }}>
          {CLIENTS.map((client) => (
            <div
              key={client.title}
              className="relative"
              style={{ background: "#141210", border: "1px solid rgba(212,168,83,0.1)", borderRadius: 16, padding: 32 }}
            >
              <span
                className="inline-block mb-4"
                style={{
                  ...client.badgeStyle,
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontSize: 10,
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  padding: "4px 10px",
                  borderRadius: 4,
                }}
              >
                {client.badge}
              </span>

              <p style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.08em", color: "rgba(240,234,214,0.35)" }}>
                {client.label}
              </p>

              <h3 className="mt-2 mb-2" style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: 22, color: "#F0EAD6" }}>
                {client.title}
              </h3>

              <p style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 14, color: "rgba(240,234,214,0.55)", lineHeight: 1.5 }}>
                {client.description}
              </p>

              {client.testimonial && (
                <div className="mt-4" style={{ borderLeft: "2px solid #D4A853", paddingLeft: 12 }}>
                  <p style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 13, fontStyle: "italic", color: "rgba(240,234,214,0.5)", lineHeight: 1.6 }}>
                    {client.testimonial}
                  </p>
                  <p className="mt-1" style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 12, color: "rgba(240,234,214,0.35)" }}>
                    {client.attribution}
                  </p>
                </div>
              )}

              <a
                href={client.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 hover:underline"
                style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 14, color: "#D4A853", textDecoration: "none" }}
              >
                {t.viewLiveSite}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center">
        <h2 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(24px, 4vw, 36px)", color: "#F0EAD6" }}>
          {t.ctaHeading}
        </h2>
        <p className="mt-3" style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 15, color: "rgba(240,234,214,0.5)" }}>
          {t.ctaSub}
        </p>
        <div className="mt-6">
          <a href="/apply" className="inline-block rounded-md px-8 py-3.5 text-[13px] font-semibold uppercase tracking-[0.12em] transition-transform hover:scale-[1.02]" style={{ background: "#D4A853", color: "#0D0B09", borderRadius: 6 }}>
            {t.ctaButton}
          </a>
        </div>
        <p className="mt-3" style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 13, color: "rgba(240,234,214,0.35)" }}>
          {t.ctaTrust}
        </p>
      </section>
    </div>
  );
}
