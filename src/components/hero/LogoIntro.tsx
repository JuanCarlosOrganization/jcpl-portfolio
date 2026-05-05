"use client";

import { forwardRef, useRef, useImperativeHandle, useEffect } from "react";
import gsap from "gsap";

/* ── Tweakable constants ── */
export const INTRO_DURATION = 1.2; // logo fade-in duration (s)
export const SHIMMER_DELAY = 1.4; // delay before light sweep starts (s)
export const SHIMMER_DURATION = 1.8; // light sweep duration (s)
export const SHIMMER_INTENSITY = 0.18; // sweep peak opacity (0–1)
export const GLOW_INTENSITY = 0.08; // halo peak opacity (0–1)

export interface LogoIntroHandle {
  /** Outer container. GSAP transforms for scale + translate to top-left */
  containerEl: HTMLDivElement | null;
  /** Image element. For additional GSAP control if needed */
  imgEl: HTMLImageElement | null;
}

/**
 * LogoIntro. Premium logo entrance with starlight shimmer.
 *
 * 1. Logo fades in from opacity 0, scale 0.97 → 1.0 (ease-out, ~1.2s)
 * 2. Soft white radial glow fades in behind logo
 * 3. One-shot light sweep passes across the logo (left → right)
 * 4. Everything settles. Logo stays visible, glow remains subtly
 *
 * Scroll animations (scale/translate to top-left) are controlled
 * externally by CinematicHero via the exposed refs.
 */
const LogoIntro = forwardRef<LogoIntroHandle>((_, ref) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const sweepRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => ({
    containerEl: containerRef.current,
    imgEl: imgRef.current,
  }));

  useEffect(() => {
    const img = imgRef.current;
    const glow = glowRef.current;
    const sweep = sweepRef.current;
    if (!img || !glow || !sweep) return;

    const ctx = gsap.context(() => {
      /* 1) Logo fade-in with micro scale */
      gsap.fromTo(
        img,
        { opacity: 0, scale: 0.97 },
        {
          opacity: 1,
          scale: 1,
          duration: INTRO_DURATION,
          delay: 0.3,
          ease: "power2.out",
        }
      );

      /* 2) Glow halo fades in */
      gsap.fromTo(
        glow,
        { opacity: 0 },
        {
          opacity: GLOW_INTENSITY,
          duration: INTRO_DURATION * 1.2,
          delay: 0.6,
          ease: "power1.out",
        }
      );

      /* 3) One-shot light sweep */
      gsap.fromTo(
        sweep,
        { opacity: 0, x: "-120%" },
        {
          opacity: SHIMMER_INTENSITY,
          x: "120%",
          duration: SHIMMER_DURATION,
          delay: SHIMMER_DELAY,
          ease: "power1.inOut",
          onComplete: () => {
            // Clean up after sweep
            gsap.set(sweep, { opacity: 0 });
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="logo-intro-container">
      <div className="logo-intro-inner">
        {/* Glow halo behind logo */}
        <div ref={glowRef} className="logo-glow" aria-hidden="true" />

        {/* Logo image - use img for GSAP ref compatibility */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img loading="lazy" decoding="async"
          ref={imgRef}
          src="/jcpl-signature.svg"
          alt=""
          aria-hidden="true"
          className="logo-intro-img"
          draggable={false}
        />

        {/* Light sweep overlay */}
        <div ref={sweepRef} className="logo-sweep" aria-hidden="true" />
      </div>
    </div>
  );
});

LogoIntro.displayName = "LogoIntro";
export default LogoIntro;
