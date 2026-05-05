"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const LOGOS = [
  {
    src: "/images/logos/elite.webp",
    alt: "Elite Barbershop",
    name: "Elite Barbershop",
    city: "Montreal, QC",
    service: "Barbershop",
  },
  {
    src: "/images/logos/absolute.webp",
    alt: "Absolute Painting",
    name: "Absolute Painting",
    city: "Dallas, TX",
    service: "Painting Contractor",
  },
  {
    src: "/images/logos/culture.webp",
    alt: "Culture Barbershop",
    name: "Culture Barbershop",
    city: "Montreal, QC",
    service: "Barbershop",
  },
  {
    src: "/images/logos/triplew.webp",
    alt: "Triple W Rentals",
    name: "Triple W Rentals",
    city: "Texas",
    service: "RV Rental",
  },
  {
    src: "/images/logos/dentaire.webp",
    alt: "Centre Dentaire Saint-Élzéar",
    name: "Centre Dentaire Saint-Élzéar",
    city: "Montreal, QC",
    service: "Dental Clinic",
  },
];

const LOOP_COUNT = 3;

// Depth stagger per position within a 5-card set:
// centre card is most prominent, edges recede.
const STAGGER = [
  { scale: 0.82, opacity: 0.48 }, // 0. edge
  { scale: 0.91, opacity: 0.70 }, // 1. mid
  { scale: 1.00, opacity: 1.00 }, // 2. centre
  { scale: 0.91, opacity: 0.70 }, // 3. mid
  { scale: 0.82, opacity: 0.48 }, // 4. edge
];

export default function LogoArrowLoop() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    // Measure the exact rendered width of one logo-set and store it as the
    // animation offset so the loop is always pixel-perfect regardless of
    // how many logos or what gap sizes are used.
    const setWidth = track.scrollWidth / LOOP_COUNT;
    track.style.setProperty("--lal-offset", `-${setWidth}px`);
  }, []);

  // Spread pattern. All three clone sets come from identical source data.
  // Every card is a direct child of the same lal-track parent.
  const items = [...LOGOS, ...LOGOS, ...LOGOS];

  return (
    <>
      <div className="lal-section">
        <div className="lal-runway">
          <div className="lal-track" ref={trackRef}>
            {items.map((logo, i) => {
              const j = i % LOGOS.length; // position within set (0–4)
              const { scale, opacity } = STAGGER[j];
              return (
                <div
                  key={`${logo.name}-${i}`}
                  className="lal-card"
                  style={{
                    // Tilt each card to match the direction of travel. Like
                    // polaroids physically sliding up a wire. Combined with the
                    // depth stagger this gives a sense of real physical depth.
                    transform: `rotate(-12deg) scale(${scale})`,
                    opacity,
                  }}
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={100}
                    height={32}
                    loading="lazy"
                    className="lal-img"
                  />
                  <span className="lal-name">{logo.name}</span>
                  <span className="lal-meta">
                    {logo.city}&nbsp;·&nbsp;{logo.service}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        .lal-section {
          position: relative;
          height: 300px;
          overflow: hidden;
          /* Fade the left and right edges so cards appear / disappear smoothly */
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0%,
            #000 11%,
            #000 89%,
            transparent 100%
          );
          mask-image: linear-gradient(
            to right,
            transparent 0%,
            #000 11%,
            #000 89%,
            transparent 100%
          );
        }

        /*
         * lal-runway: absolutely centred in the section, then rotated -20 deg.
         * Anchoring at 50% / 50% before rotating means the rotation pivot is
         * the visual centre of the strip, so cards enter from the bottom-right
         * and exit through the top-left (upward-arrow direction).
         */
        .lal-runway {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(-20deg);
          white-space: nowrap;
        }

        /*
         * lal-track: the animated strip.
         * --lal-offset is set by JS to -(scrollWidth / LOOP_COUNT) so the loop
         * distance always matches the exact rendered width of one logo set.
         * Fallback -33.3334% is correct when all three sets have equal width.
         */
        .lal-track {
          display: inline-flex;
          flex-wrap: nowrap;
          align-items: center;
          will-change: transform;
          animation: lal-scroll 26s linear infinite;
        }

        /*
         * lal-card: frosted-glass "first plan" treatment.
         * backdrop-filter + translucent bg lifts the card off the dark section.
         * box-shadow adds real depth.  The rotate(-12deg) tilt (applied inline
         * alongside the depth-stagger scale) makes each card lean into the
         * direction of travel. Like a polaroid physically on a moving wire.
         */
        .lal-card {
          flex-shrink: 0;
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          padding: 16px 20px;
          margin-right: 24px;
          background: rgba(255, 255, 255, 0.06);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 14px;
          box-shadow:
            0 8px 32px rgba(0, 0, 0, 0.45),
            0 2px 8px rgba(0, 0, 0, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
          min-width: 160px;
        }

        .lal-img {
          object-fit: contain;
        }

        .lal-name {
          display: block;
          font-size: 12px;
          font-weight: 700;
          color: #fff;
          white-space: nowrap;
          text-align: center;
        }

        .lal-meta {
          display: block;
          font-size: 10px;
          color: rgba(255, 255, 255, 0.45);
          white-space: nowrap;
          text-align: center;
        }

        @keyframes lal-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(var(--lal-offset, -33.3334%));
          }
        }

        /* Pause entire strip on hover */
        .lal-section:hover .lal-track {
          animation-play-state: paused;
        }

        /* Mobile: flat horizontal marquee. Remove diagonal rotation and card tilt */
        @media (max-width: 767px) {
          .lal-section {
            height: 110px;
          }
          .lal-runway {
            transform: translate(-50%, -50%);
          }
          .lal-name,
          .lal-meta {
            display: none;
          }
          .lal-card {
            min-width: 80px;
            padding: 10px 14px;
            border-radius: 10px;
            margin-right: 14px;
            /* !important overrides the inline rotate/scale on mobile */
            transform: none !important;
            opacity: 1 !important;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .lal-track {
            animation-play-state: paused !important;
          }
        }
      `}</style>
    </>
  );
}
