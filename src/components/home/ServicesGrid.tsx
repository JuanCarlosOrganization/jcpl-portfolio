"use client";

import Link from "next/link";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { Reveal } from "@/components/motion";
import { useLocale } from "@/context/LocaleContext";

const servicesEn = {
  label: "WHAT I BUILD",
  headline: "Six layers. One connected system.",
  sub: "Not a menu. Everything below is included in every engagement, built and run as one unit.",
  cards: [
    {
      num: "01",
      name: "Conversion Website",
      body: "Custom coded. Loads in under a second. Built around one outcome: the visitor calls or books. Not a template. Not WordPress. Built for your niche, your market, your offer.",
      outcome: "Visitors become calls.",
    },
    {
      num: "02",
      name: "Google Ads",
      body: "Purchase-intent targeting only. I find the buyers in your city who are ready to hire today and place your business in front of them first. Every dollar tracked to a call.",
      outcome: "$33 average cost per qualified call across active accounts.",
    },
    {
      num: "03",
      name: "Local SEO",
      body: "Google Maps and organic rankings for your service area. Compounds from day one. Every month it runs, your position gets stronger and your cost per call goes down.",
      outcome: "Page 1 positioning in your city.",
    },
    {
      num: "04",
      name: "GEO. AI Search",
      body: "When someone asks ChatGPT, Perplexity, or Google AI 'best [service] near me,' your business needs to be the answer. This is the new SEO. Most competitors do not have it yet.",
      outcome: "Visible before your competitors know this exists.",
    },
    {
      num: "05",
      name: "Booking Flow",
      body: "Calls and form submissions captured around the clock. Missed-call follow-up built in. No lead slips through while you are on a job or after hours.",
      outcome: "Zero leads lost to missed calls.",
    },
    {
      num: "06",
      name: "Weekly Optimization",
      body: "Every week I review the data and cut what is not working. Every month I send a revenue report with real numbers. The longer the system runs, the cheaper each call gets.",
      outcome: "Cost per call drops every month.",
    },
  ],
  cta: "Apply to be a Partner →",
  ctaMicro: "Every service above is included. Nothing sold separately.",
};

const servicesFr = {
  label: "CE QUE JE CONSTRUIS",
  headline: "Six couches. Un système connecté.",
  sub: "Pas un menu. Tout ce qui suit est inclus dans chaque engagement, construit et géré comme une seule unité.",
  cards: [
    {
      num: "01",
      name: "Site de conversion",
      body: "Codé sur mesure. Chargement en moins d'une seconde. Construit autour d'un seul résultat : le visiteur appelle ou prend rendez-vous. Pas un modèle. Pas WordPress. Construit pour votre niche, votre marché, votre offre.",
      outcome: "Les visiteurs deviennent des appels.",
    },
    {
      num: "02",
      name: "Google Ads",
      body: "Ciblage d'intention d'achat seulement. Je trouve les acheteurs dans votre ville prêts à embaucher aujourd'hui et place votre entreprise devant eux en premier. Chaque dollar tracé jusqu'à un appel.",
      outcome: "33$ de coût moyen par appel qualifié.",
    },
    {
      num: "03",
      name: "Référencement local",
      body: "Google Maps et classements organiques pour votre zone. Se cumule dès le premier jour. Chaque mois, votre position se renforce et le coût par appel diminue.",
      outcome: "Première page dans votre ville.",
    },
    {
      num: "04",
      name: "GEO. Visibilité IA",
      body: "Quand quelqu'un demande à ChatGPT 'meilleur [service] près de moi,' votre entreprise doit être la réponse. C'est le nouveau référencement. La plupart des concurrents ne l'ont pas encore.",
      outcome: "Visible avant que vos concurrents le sachent.",
    },
    {
      num: "05",
      name: "Tunnel de réservation",
      body: "Appels et formulaires captés 24h/24. Suivi automatique des appels manqués. Aucun prospect perdu pendant que vous êtes sur un chantier.",
      outcome: "Zéro prospect perdu.",
    },
    {
      num: "06",
      name: "Optimisation hebdomadaire",
      body: "Chaque semaine je coupe ce qui ne fonctionne pas. Chaque mois un rapport avec de vrais chiffres. Plus le système tourne, moins chaque appel coûte.",
      outcome: "Le coût par appel baisse chaque mois.",
    },
  ],
  cta: "Devenir partenaire →",
  ctaMicro: "Chaque service ci-dessus est inclus. Rien n'est vendu séparément.",
};

const servicesI18n = { en: servicesEn, fr: servicesFr };

export default function ServicesGrid() {
  const { locale } = useLocale();
  const t = servicesI18n[locale];

  return (
    <section id="services" style={{ background: "#0D0B09" }} className="py-16 md:py-24">
      <SectionWrapper>
        {/* Header */}
        <Reveal className="max-w-2xl mx-auto text-center mb-12 md:mb-16">
          <p
            className="uppercase mb-4"
            style={{
              fontSize: "0.7rem",
              letterSpacing: "0.15em",
              color: "#D4A853",
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontWeight: 600,
            }}
          >
            {t.label}
          </p>
          <h2
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 300,
              lineHeight: 1.15,
              color: "#F0EAD6",
            }}
          >
            {t.headline}
          </h2>
          <p
            className="mt-4 max-w-xl mx-auto"
            style={{
              fontSize: "1rem",
              color: "rgba(240,234,214,0.6)",
              lineHeight: 1.6,
              fontFamily: "var(--font-dm-sans), sans-serif",
            }}
          >
            {t.sub}
          </p>
        </Reveal>

        {/* 6 cards. 2 column grid */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          {t.cards.map((s, i) => (
            <Reveal key={s.num} delay={i * 0.06}>
              <div
                className="h-full"
                style={{
                  background: "rgba(255,255,255,0.025)",
                  border: "1px solid rgba(212,168,83,0.12)",
                  borderRadius: 8,
                  padding: 28,
                }}
              >
                {/* Number */}
                <p
                  style={{
                    fontFamily: "var(--font-cormorant), Georgia, serif",
                    fontSize: 36,
                    color: "#D4A853",
                    lineHeight: 1,
                    marginBottom: 12,
                  }}
                >
                  {s.num}
                </p>

                {/* Name */}
                <p
                  style={{
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontSize: 16,
                    fontWeight: 600,
                    color: "#FFFFFF",
                    marginBottom: 10,
                  }}
                >
                  {s.name}
                </p>

                {/* Body */}
                <p
                  style={{
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontSize: 14,
                    color: "rgba(240,234,214,0.8)",
                    lineHeight: 1.6,
                    marginBottom: 16,
                  }}
                >
                  {s.body}
                </p>

                {/* Outcome */}
                <p
                  style={{
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "#D4A853",
                  }}
                >
                  {s.outcome}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal delay={0.3}>
          <div className="text-center">
            <Link
              href="/apply"
              className="inline-block rounded-md px-10 py-4 text-[13px] font-medium uppercase tracking-[0.15em] transition-transform hover:scale-[1.02]"
              style={{
                background: "#D4A853",
                color: "#0D0B09",
              }}
            >
              {t.cta}
            </Link>
            <p
              className="mt-3 text-[13px]"
              style={{ color: "#756D63" }}
            >
              {t.ctaMicro}
            </p>
          </div>
        </Reveal>
      </SectionWrapper>
    </section>
  );
}
