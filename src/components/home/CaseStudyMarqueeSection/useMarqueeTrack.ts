"use client";

import { useCallback, useEffect, useRef } from "react";
import { useScroll, useVelocity, useSpring } from "motion/react";

type Args = {
  /** Idle speed in px/s. Sign sets direction: negative = left, positive = right. */
  baseSpeed: number;
  /** How strongly scrollY velocity nudges the track. */
  velocityMultiplier?: number;
  /** Disable the rAF loop (e.g. Reduced-motion). */
  enabled?: boolean;
};

/**
 * Two-half duplicated track marquee with scroll-velocity boost.
 *
 * Render JSX as `[group, group]` inside `trackRef`. The hook measures the
 * track's scrollWidth (= 2 × halfWidth) and wraps the translateX in
 * `[-half, 0)` so the two halves swap seamlessly as motion crosses a boundary.
 *
 * Scroll-velocity boost is signed by `baseSpeed`'s direction: scrolling forward
 * accelerates motion in its idle direction; scrolling backward resists it.
 */
export function useMarqueeTrack({
  baseSpeed,
  velocityMultiplier = 0.35,
  enabled = true,
}: Args) {
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const halfWidthRef = useRef(0);
  const offsetRef = useRef(0); // signed, kept in [-half, 0)
  const rafRef = useRef<number | null>(null);
  const lastTsRef = useRef<number | null>(null);

  const { scrollY } = useScroll();
  const rawVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(rawVelocity, {
    damping: 50,
    stiffness: 380,
    mass: 0.4,
  });

  const measure = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    halfWidthRef.current = track.scrollWidth / 2;
    const half = halfWidthRef.current;
    if (half > 0) {
      // Re-wrap into [-half, 0)
      let o = offsetRef.current % half;
      if (o >= 0) o -= half;
      offsetRef.current = o;
    }
  }, []);

  useEffect(() => {
    measure();
    const track = trackRef.current;
    if (!track) return;

    const ro = new ResizeObserver(measure);
    ro.observe(track);
    if (viewportRef.current) ro.observe(viewportRef.current);

    // Images change track width when they decode. Re-measure on load.
    const imgs = Array.from(track.querySelectorAll("img"));
    let pending = imgs.length;
    const onImg = () => {
      pending -= 1;
      if (pending <= 0) measure();
    };
    if (pending === 0) measure();
    imgs.forEach((img) => {
      if (img.complete) {
        onImg();
      } else {
        img.addEventListener("load", onImg, { once: true });
        img.addEventListener("error", onImg, { once: true });
      }
    });

    return () => {
      ro.disconnect();
      imgs.forEach((img) => {
        img.removeEventListener("load", onImg);
        img.removeEventListener("error", onImg);
      });
    };
  }, [measure]);

  useEffect(() => {
    if (!enabled) return;
    const track = trackRef.current;
    if (!track) return;

    const idleDir = baseSpeed >= 0 ? 1 : -1;

    const tick = (ts: number) => {
      if (lastTsRef.current === null) lastTsRef.current = ts;
      const dt = Math.max(0, Math.min(ts - lastTsRef.current, 100)) / 1000;
      lastTsRef.current = ts;

      const half = halfWidthRef.current;
      if (half > 0) {
        const boost = smoothVelocity.get() * velocityMultiplier * idleDir;
        const dx = (baseSpeed + boost) * dt;
        let next = offsetRef.current + dx;
        // Keep in [-half, 0): one half-width is the seamless wrap window.
        while (next >= 0) next -= half;
        while (next < -half) next += half;
        offsetRef.current = next;
        track.style.transform = `translate3d(${next}px, 0, 0)`;
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      lastTsRef.current = null;
    };
  }, [baseSpeed, velocityMultiplier, enabled, smoothVelocity]);

  return { viewportRef, trackRef };
}
