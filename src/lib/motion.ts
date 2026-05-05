import gsap from "gsap";

/* ═══════════════════════════════════════════════════
   CONSTANTS. tweak these to retune the hero feel
   ═══════════════════════════════════════════════════ */
const INTRO_EASE = "power3.out";

export const HERO_TIMING = {
  eyebrow: { delay: 0, duration: 0.6, y: 14 },
  headline: { delay: 0.12, duration: 0.85, y: 28 },
  sub: { delay: 0.32, duration: 0.65, y: 18 },
  ctas: { delay: 0.52, duration: 0.55, y: 16, stagger: 0.1 },
  proof: { delay: 0.68, duration: 0.5, y: 10, stagger: 0.08 },
  authority: { delay: 0.88, duration: 0.6, y: 8 },
} as const;

/* ═══════════════════════════════════════════════════
   REDUCED MOTION CHECK
   ═══════════════════════════════════════════════════ */
export const prefersReducedMotion = (): boolean => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

/* ═══════════════════════════════════════════════════
   HERO INTRO SEQUENCE
   eyebrow → headline → sub → CTAs → proof → authority
   ═══════════════════════════════════════════════════ */
export const heroIntroSequence = (
  elements: {
    eyebrow?: HTMLElement | null;
    headline?: HTMLElement | null;
    subheadline?: HTMLElement | null;
    ctas?: HTMLElement | null;
    proof?: HTMLElement | null;
    authority?: HTMLElement | null;
  },
  onComplete?: () => void
): gsap.core.Timeline | null => {
  if (prefersReducedMotion()) {
    Object.values(elements).forEach((el) => {
      if (el) gsap.set(el, { opacity: 1, y: 0, scale: 1 });
    });
    onComplete?.();
    return null;
  }

  const tl = gsap.timeline({
    defaults: { ease: INTRO_EASE },
    onComplete,
  });

  // Eyebrow
  if (elements.eyebrow) {
    tl.fromTo(
      elements.eyebrow,
      { opacity: 0, y: HERO_TIMING.eyebrow.y },
      { opacity: 1, y: 0, duration: HERO_TIMING.eyebrow.duration },
      HERO_TIMING.eyebrow.delay
    );
  }

  // Headline
  if (elements.headline) {
    tl.fromTo(
      elements.headline,
      { opacity: 0, y: HERO_TIMING.headline.y },
      { opacity: 1, y: 0, duration: HERO_TIMING.headline.duration },
      HERO_TIMING.headline.delay
    );
  }

  // Subheadline
  if (elements.subheadline) {
    tl.fromTo(
      elements.subheadline,
      { opacity: 0, y: HERO_TIMING.sub.y },
      { opacity: 1, y: 0, duration: HERO_TIMING.sub.duration },
      HERO_TIMING.sub.delay
    );
  }

  // CTAs. Staggered buttons
  if (elements.ctas) {
    const buttons = elements.ctas.querySelectorAll("a, button");
    if (buttons.length) {
      tl.fromTo(
        buttons,
        { opacity: 0, y: HERO_TIMING.ctas.y },
        {
          opacity: 1,
          y: 0,
          duration: HERO_TIMING.ctas.duration,
          stagger: HERO_TIMING.ctas.stagger,
        },
        HERO_TIMING.ctas.delay
      );
    }
  }

  // Proof line. Staggered items
  if (elements.proof) {
    const items = elements.proof.querySelectorAll("[data-proof]");
    if (items.length) {
      tl.fromTo(
        items,
        { opacity: 0, y: HERO_TIMING.proof.y },
        {
          opacity: 1,
          y: 0,
          duration: HERO_TIMING.proof.duration,
          stagger: HERO_TIMING.proof.stagger,
        },
        HERO_TIMING.proof.delay
      );
    }
  }

  // Authority micro-line. Last, subtle
  if (elements.authority) {
    tl.fromTo(
      elements.authority,
      { opacity: 0, y: HERO_TIMING.authority.y },
      { opacity: 1, y: 0, duration: HERO_TIMING.authority.duration },
      HERO_TIMING.authority.delay
    );
  }

  return tl;
};
