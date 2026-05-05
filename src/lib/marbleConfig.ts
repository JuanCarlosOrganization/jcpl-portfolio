/**
 * Marble Rails Animation. Tunable constants
 * Tweak here for colors, timing, spacing, and rail dimensions.
 */

/* Rail colors (refined soft blue, violet, emerald) */
export const RAIL_COLORS = {
  blue: "#5B9BED",
  violet: "#9B8BC6",
  emerald: "#2EBD8A",
} as const;

export const RAIL_OPACITY = {
  base: 0.42,
  active: 1,
  centerLine: 0.7,
  centerLineActive: 1,
} as const;

export const RAIL_GLOW = {
  strokeWidthBase: 20,
  strokeWidthActive: 28,
  blurStdDevBase: 4,
  blurStdDevActive: 6,
} as const;

/* Timing (seconds) */
export const TIMING = {
  rollDuration: 1.5,
  pauseAfterRoll: 0.3,
  dropDuration: 0.5,
  resetDuration: 0.6,
} as const;

/* SVG viewBox and rail geometry */
export const DIMENSIONS = {
  width: 600,
  height: 280,
  railGap: 80,
  railLength: 480,
  ballRadius: 15,
  trailLength: 6,
} as const;

/* Ball appearance */
export const BALL = {
  radius: 15,
  glossHighlight: "rgba(255,255,255,0.98)",
  baseColor: "#FFFFFF",
  glowOpacity: 0.35,
  ambientGlow: true,
} as const;

/* Ball scale progression (1 at start, grows to 1.3 as journey advances) */
export const BALL_SCALE = {
  min: 1,
  max: 1.3,
} as const;

/* Trail appearance */
export const TRAIL = {
  count: 6,
  baseOpacity: 0.28,
  fadeFactor: 0.6,
} as const;

/* Scroll pin duration (vh). longer for premium storytelling feel */
export const SCROLL = {
  PIN_DURATION_DESKTOP: 600,
  PIN_DURATION_MOBILE: 220,
  SCRUB: 1.2,
  STEP_THRESHOLDS: [0.12, 0.42, 0.74] as const,
} as const;

/* Progress segment boundaries (0–1)
 * Phase: 1.Rail1 roll, 2.Dwell1, 3.Drop1, 4.Rail2 roll, 5.Dwell2, 6.Drop2, 7.Rail3 roll, 8.Dwell3, 9.Drop-off
 * Each stage has clear entry → hold → transition for deliberate pacing
 */
export const PROGRESS_SEGMENTS = {
  RAIL1_END: 0.24,
  DWELL1_END: 0.30,
  DROP1_END: 0.34,
  RAIL2_END: 0.54,
  DWELL2_END: 0.60,
  DROP2_END: 0.64,
  RAIL3_END: 0.82,
  DROP_OFF_START: 0.84,
  DROP_OFF_END: 1,
} as const;

/* Step text activation ranges. When each step is "active" (aligned with ball stages) */
export const STEP_ACTIVE_RANGES = [
  [0.02, 0.32], /* Diagnose: rail1 + dwell1 */
  [0.34, 0.62], /* Build: rail2 + dwell2 */
  [0.64, 0.84], /* Scale: rail3 + dwell3 */
] as const;

/* Final drop-off: ball falls off rail 3 (scroll distance in px within SVG) */
export const DROP_OFF = {
  distancePx: 70,
  opacityEnd: 0.65,
} as const;

/* Rail darkening: blend from base color toward resolved dark state */
export const RAIL_DARKENING = {
  targetColor: "#0d0d0d",
} as const;
