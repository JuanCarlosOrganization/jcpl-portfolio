import type { Scene } from "./types";

export const TOTAL_SCENES = 7;

const STEP = 1 / TOTAL_SCENES;

function range(i: number) {
  return {
    start: i * STEP,
    end: (i + 1) * STEP,
  };
}

export const SCENES: Scene[] = [
  {
    id: "hero",
    index: 0,
    headline: "GROWTH. ENGINEERED.",
    subheadline: "An acquisition system built to attract, convert, and compound.",
    visualType: "engine-core",
    accent: "gold",
    ...range(0),
  },
  {
    id: "demand",
    index: 1,
    headline: "FIRST, WE FIND THE DEMAND.",
    subheadline: "We map where your buyers search, compare, click, and decide.",
    visualType: "market-grid",
    accent: "cyan",
    ...range(1),
  },
  {
    id: "ads",
    index: 2,
    headline: "ADS CAPTURE INTENT.",
    subheadline: "High-intent searches become qualified opportunities. Before competitors get a chance.",
    visualType: "ads-flow",
    accent: "cyan",
    ...range(2),
  },
  {
    id: "website",
    index: 3,
    headline: "YOUR WEBSITE CONVERTS.",
    subheadline: "A premium digital storefront engineered to turn attention into action.",
    visualType: "website-wireframe",
    accent: "gold",
    ...range(3),
  },
  {
    id: "automation",
    index: 4,
    headline: "AI FOLLOWS UP INSTANTLY.",
    subheadline: "Every lead captured, qualified, routed, and answered. Without delay.",
    visualType: "automation-pipeline",
    accent: "cyan",
    ...range(4),
  },
  {
    id: "authority",
    index: 5,
    headline: "AUTHORITY COMPOUNDS.",
    subheadline: "Search visibility grows while your acquisition system keeps improving.",
    visualType: "authority-compound",
    accent: "gold",
    ...range(5),
  },
  {
    id: "system",
    index: 6,
    headline: "ONE SYSTEM. PREDICTABLE GROWTH.",
    subheadline: "Built for businesses ready to dominate their market.",
    visualType: "system-diagram",
    accent: "duo",
    ...range(6),
    cta: { label: "Apply to be a Partner", href: "/apply" },
  },
];

export const SCROLL_DURATION_VH = 7;
export const SCENE_FADE = 0.035;
