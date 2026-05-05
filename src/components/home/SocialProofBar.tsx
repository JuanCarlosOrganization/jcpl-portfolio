"use client";

import { FadeIn } from "@/components/motion/FadeIn";

const clients = [
  {
    name: "Triple W Rentals",
    industry: "RV Rental · Texas",
    result: "$41K revenue in 30 days",
    logo: "/images/logos/triplew.webp",
  },
  {
    name: "Elite Barbershop",
    industry: "Premium Barbershop · Montreal",
    result: "SEO campaign active",
    logo: "/images/logos/elite.webp",
  },
  {
    name: "Culture Barbershop",
    industry: "Barbershop · Montreal",
    result: "Page 1 SEO in 60 days",
    logo: "/images/logos/culture.webp",
  },
];

export default function SocialProofBar() {
  return (
    <section
      style={{
        background: "#0D0B09",
        borderTop: "1px solid rgba(255,255,255,0.065)",
      }}
    >
      <div
        className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16 xl:px-20"
        style={{ paddingTop: "2.75rem", paddingBottom: "3.75rem" }}
      >

        {/* Section label row. Mirrors confidence rail label style */}
        <div className="flex items-center gap-4" style={{ marginBottom: "1.75rem" }}>
          <span
            style={{
              fontSize: "0.62rem",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#8A7E74",
              flexShrink: 0,
            }}
          >
            Active Systems
          </span>
          <div
            style={{
              flex: 1,
              height: 1,
              background: "rgba(255,255,255,0.055)",
            }}
          />
          <span
            style={{
              fontSize: "0.62rem",
              fontWeight: 500,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#706660",
              flexShrink: 0,
            }}
          >
            +2 in build
          </span>
        </div>

        {/* Client cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
          {clients.map((client, i) => (
            <FadeIn key={i} delay={i * 90}>
              <div
                style={{
                  background: "#181410",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "0.75rem",
                  padding: "1.375rem 1.5rem",
                  height: "100%",
                }}
              >
                {/* Logo mark */}
                <div
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: "0.5rem",
                    background: "#0D0B09",
                    border: "1px solid rgba(255,255,255,0.065)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "0.9rem",
                  }}
                >
                  <img loading="lazy" decoding="async"
                    src={client.logo}
                    alt={client.name}
                    style={{ width: 20, height: 20, objectFit: "contain", opacity: 0.65 }}
                  />
                </div>

                {/* Name */}
                <p
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    color: "#F5F0E8",
                    letterSpacing: "-0.01em",
                    marginBottom: "0.2rem",
                  }}
                >
                  {client.name}
                </p>

                {/* Meta */}
                <p
                  style={{
                    fontSize: "0.7rem",
                    color: "#8A7E74",
                    letterSpacing: "0.01em",
                    marginBottom: "0.9rem",
                  }}
                >
                  {client.industry}
                </p>

                {/* Result pill. Gold instead of emerald */}
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.375rem",
                    padding: "0.28rem 0.6rem",
                    borderRadius: "0.375rem",
                    background: "rgba(212,168,83,0.08)",
                    border: "1px solid rgba(212,168,83,0.16)",
                  }}
                >
                  <div
                    style={{
                      width: 5,
                      height: 5,
                      borderRadius: "50%",
                      background: "#D4A853",
                      opacity: 0.9,
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      fontSize: "0.7rem",
                      color: "#C4A05A",
                      letterSpacing: "0.015em",
                      fontWeight: 500,
                    }}
                  >
                    {client.result}
                  </span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
