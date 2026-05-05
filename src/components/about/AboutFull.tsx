"use client";

import dynamic from "next/dynamic";

const UnicornScene = dynamic(() => import("unicornstudio-react/next"), {
  ssr: false,
});

export default function AboutFull() {
  return (
    <section style={{ background: "#0D0B09" }}>
      <div
        className="aboutfull-grid"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "80px 24px 60px",
          display: "grid",
          gridTemplateColumns: "50% 50%",
          gap: 48,
          alignItems: "center",
        }}
      >
        {/* Left. Unicorn Studio portrait */}
        <div
          className="aboutfull-animation"
          style={{
            maxWidth: 480,
            borderRadius: 12,
            overflow: "hidden",
            aspectRatio: "3 / 4",
            minHeight: 480,
          }}
        >
          <UnicornScene
            projectId="bi8sQ4960W9R0aV2JSta"
            sdkUrl="/unicornStudio.umd.js"
            width="100%"
            height="100%"
            dpi={1.5}
            scale={1}
          />
        </div>

        {/* Right. Full text */}
        <div>
          <p
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#D4A853",
              marginBottom: 20,
            }}
          >
            WHO I AM
          </p>

          <h1
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "clamp(32px, 4.5vw, 48px)",
              fontWeight: 300,
              color: "#F0EAD6",
              lineHeight: 1.15,
              marginBottom: 36,
            }}
          >
            I watched good businesses lose to worse ones. The difference was never the work.
          </h1>

          <p
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: 15,
              color: "rgba(240,234,214,0.85)",
              lineHeight: 1.7,
              marginBottom: 20,
            }}
          >
            I build acquisition systems for local service businesses across Canada and the United States. Every engagement is tracked to one metric: qualified calls on the calendar. I only take on clients I am confident I can move the needle for.
          </p>
          <p
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: 15,
              color: "rgba(240,234,214,0.85)",
              lineHeight: 1.7,
              marginBottom: 20,
            }}
          >
            I started building these systems at 16. I am 18 now. By the time most people finish their first internship, I will have run more live ad accounts than most agency employees touch in a career.
          </p>
          <p
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: 15,
              color: "rgba(240,234,214,0.85)",
              lineHeight: 1.7,
              marginBottom: 32,
            }}
          >
            The work was never the problem. The infrastructure was. That is the gap I built Client Growth to close.
          </p>

          {/* Stat bar */}
          <p
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: 13,
              color: "#D4A853",
              letterSpacing: "0.08em",
              marginBottom: 40,
            }}
          >
            $41,085 tracked  ·  5 systems live  ·  Canada + United States
          </p>

          {/* CTA */}
          <a
            href="/apply"
            className="inline-block rounded-md px-8 py-3.5 text-[13px] font-semibold uppercase tracking-[0.12em] transition-transform hover:scale-[1.02]"
            style={{ background: "#D4A853", color: "#0D0B09", borderRadius: 6 }}
          >
            Apply to be a Partner →
          </a>
          <p
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: 12,
              color: "#756D63",
              marginTop: 12,
            }}
          >
            Response within 24 hours.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .aboutfull-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
            padding-top: 40px !important;
          }
          .aboutfull-animation {
            width: 100% !important;
            max-width: 100% !important;
            min-height: unset !important;
            aspect-ratio: 3 / 4 !important;
          }
        }
      `}</style>
    </section>
  );
}
