/* ═══════════════════════════════════════════════════
   Premium Pricing Section. Tier & Comparison Data
   ═══════════════════════════════════════════════════ */

export interface ProofBlock {
  label: string;
  headline: string;
  subtext: string;
}

export interface TierConfig {
  tierLabel: string;
  title: string;
  description: string;
  price: string;
  subtext: string;
  forSection: string;
  proofLine?: string;
  proofBlock?: ProofBlock;
  features: string[];
  note?: string;
  scarcityNote?: string;
  ctaLabel: string;
  ctaSubtext?: string;
  ctaHref: string;
  badge?: string;
  highlighted?: boolean;
}

export const tiers: TierConfig[] = [
  {
    tierLabel: "TIER 01",
    title: "Foundation Architecture",
    description: "Built before you run a single ad. Paid traffic without this fails.",
    price: "$2,500",
    subtext: "one-time build\n+ $1,200/month maintenance",
    forSection:
      "Most clients come from referrals. Digital presence is minimal or nonexistent.",
    proofLine:
      "A Texas RV company started here. Moved to Performance Engine the next month after their first $2,716 in 30 days.",
    features: [
      "Conversion website built to close, not just look good",
      "Local SEO so buyers in your city find you before competitors",
      "Booking flow that captures leads while you are on a job",
      "Analytics showing exactly where calls come from",
      "Infrastructure documentation. You own it.",
    ],
    note: "Most clients graduate to Performance Engine within 60 days.",
    ctaLabel: "Apply to be a Partner →",
    ctaHref: "/apply",
  },
  {
    tierLabel: "TIER 02",
    title: "Performance Engine",
    description: "Predictable booked calls. Tracked cost per call.",
    price: "$2,500",
    subtext: "per month + ad spend\nminimum $500/month",
    forSection:
      "Strong work. Still waiting on the phone. No predictable way to get new clients this week.",
    proofBlock: {
      label: "VERIFIED RESULT",
      headline: "$900 spent → $41,085 returned",
      subtext:
        "Triple W Rentals, Texas. 30 days. They now own the RV rental market in their region.",
    },
    features: [
      "Everything in Foundation Architecture",
      "Google Ads targeting buyers with purchase intent",
      "Landing pages per service and city",
      "AI voice agent that captures calls after hours",
      "Weekly optimization loop lowering cost per call",
      "Monthly report showing revenue attributed to the system",
    ],
    note: "Ad spend separate from partnership fee\nMinimum $500/month\n90-day initial term",
    ctaLabel: "Apply to be a Partner →",
    ctaSubtext: "Short application. I only book a call if I think I can help.",
    ctaHref: "/apply",
    badge: "MOST SELECTED",
    highlighted: true,
  },
  {
    tierLabel: "TIER 03",
    title: "Market Ownership",
    description: "Limit competition structurally.",
    price: "$6,000",
    subtext: "per month\n+ ad spend minimum $1,500/month",
    forSection:
      "Proven demand. Ready to own the market before a competitor does.",
    features: [
      "Everything in Performance Engine",
      "Multi-city campaign architecture",
      "Competitor gap analysis",
      "SEO buildout targeting high-intent keywords",
      "Bi-weekly strategy call",
      "Dedicated growth strategist",
      "Priority response",
      "Quarterly market report",
    ],
    scarcityNote:
      "Two slots per niche per city. If your competitor applies first, this tier closes for your market.",
    ctaLabel: "Apply to be a Partner →",
    ctaHref: "/apply",
    badge: "BY APPLICATION ONLY",
  },
];

export interface ComparisonRow {
  feature: string;
  foundation: boolean;
  growth: boolean;
  domination: boolean;
}

export const comparisonRows: ComparisonRow[] = [
  { feature: "Premium Website", foundation: true, growth: true, domination: true },
  {
    feature: "Google Ads Management",
    foundation: false,
    growth: true,
    domination: true,
  },
  {
    feature: "SEO & Location Pages",
    foundation: true,
    growth: true,
    domination: true,
  },
  {
    feature: "AI Follow-Up Automation",
    foundation: false,
    growth: true,
    domination: true,
  },
];
