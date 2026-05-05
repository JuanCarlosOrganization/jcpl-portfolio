/* ═══════════════════════════════════════════════════
   PRICING. Centralized Data Config
   All pricing data, comparison, add-ons, FAQs.
   ═══════════════════════════════════════════════════ */

export type BillingInterval = "monthly" | "annual";

export const billingOptions = [
  { label: "Monthly", value: "monthly" as const, multiplier: 1 },
  {
    label: "Annual",
    value: "annual" as const,
    multiplier: 0.83,
    discountLabel: "Save 17%",
  },
] as const;

export interface PlanFeature {
  label: string;
}

export interface Plan {
  name: string;
  tagline: string;
  priceMonthly: number;
  priceAnnual: number;
  features: PlanFeature[];
  ctaLabel: string;
  ctaHref: string;
  recommended?: boolean;
  helperText?: string;
  annualOnly?: boolean;
}

export const plans: Plan[] = [
  {
    name: "Foundation",
    tagline: "Get online. Get credible. Get found.",
    priceMonthly: 2500,
    priceAnnual: 2075,
    features: [
      { label: "Premium conversion website (up to 5 pages)" },
      { label: "Conversion copywriting & positioning" },
      { label: "Mobile-first, fast, secure build" },
      { label: "GA4 & event tracking baseline" },
      { label: "Launch checklist & QA" },
    ],
    ctaLabel: "Apply (2 min)",
    ctaHref: "/apply?tier=Foundation",
  },
  {
    name: "Growth",
    tagline: "Fill your calendar with qualified leads.",
    priceMonthly: 4500,
    priceAnnual: 3735,
    features: [
      { label: "Everything in Foundation" },
      { label: "Google Ads or Meta Ads funnel" },
      { label: "Funnel optimization & landing pages" },
      { label: "AI lead qualification chatbot" },
      { label: "Monthly performance reporting" },
      { label: "Conversion rate optimization" },
    ],
    ctaLabel: "Apply (2 min)",
    ctaHref: "/apply?tier=Growth",
    recommended: true,
    helperText: "Most popular for scaling teams",
  },
  {
    name: "Scale",
    tagline: "Dominate your market. Systematize growth.",
    priceMonthly: 8500,
    priceAnnual: 7055,
    features: [
      { label: "Everything in Growth" },
      { label: "Multi-channel acquisition strategy" },
      { label: "Advanced automation workflows" },
      { label: "Custom AI integrations" },
      { label: "Ongoing CRO & strategic support" },
      { label: "Dedicated growth partner" },
      { label: "Priority support & reporting" },
    ],
    ctaLabel: "Apply (2 min)",
    ctaHref: "/apply?tier=Scale",
    helperText: "Custom onboarding included",
    annualOnly: true,
  },
];

/* ─── Feature Comparison Table ─── */
export interface ComparisonSection {
  section: string;
  rows: ComparisonRow[];
}

export interface ComparisonRow {
  feature: string;
  descriptor: string;
  values: (boolean | string)[];
}

export const comparisonSections: ComparisonSection[] = [
  {
    section: "Core Deliverables",
    rows: [
      {
        feature: "Conversion website",
        descriptor: "Premium pages built to convert",
        values: ["Up to 5 pages", "Up to 10 pages", "Unlimited"],
      },
      {
        feature: "Copywriting & positioning",
        descriptor: "Conversion-optimized messaging",
        values: [true, true, true],
      },
      {
        feature: "Mobile optimization",
        descriptor: "Fast, responsive on all devices",
        values: [true, true, true],
      },
      {
        feature: "Landing pages",
        descriptor: "Per-service / per-location pages",
        values: [false, true, true],
      },
    ],
  },
  {
    section: "Acquisition",
    rows: [
      {
        feature: "SEO & local optimization",
        descriptor: "Organic search visibility",
        values: ["Basic", "Advanced", "Advanced + GEO"],
      },
      {
        feature: "Google Ads funnel",
        descriptor: "Paid search campaigns",
        values: [false, true, true],
      },
      {
        feature: "Meta Ads",
        descriptor: "Facebook & Instagram campaigns",
        values: [false, "Optional", true],
      },
      {
        feature: "Multi-channel strategy",
        descriptor: "Coordinated cross-platform growth",
        values: [false, false, true],
      },
    ],
  },
  {
    section: "Automation & AI",
    rows: [
      {
        feature: "AI lead qualification",
        descriptor: "Chatbot that qualifies leads 24/7",
        values: [false, true, true],
      },
      {
        feature: "Booking automation",
        descriptor: "Frictionless appointment scheduling",
        values: ["Basic", true, true],
      },
      {
        feature: "Custom AI integrations",
        descriptor: "Tailored workflows for your business",
        values: [false, false, true],
      },
      {
        feature: "Follow-up sequences",
        descriptor: "Automated lead nurturing",
        values: [false, true, true],
      },
    ],
  },
  {
    section: "Support & Reporting",
    rows: [
      {
        feature: "GA4 & event tracking",
        descriptor: "Full-funnel analytics",
        values: [true, true, true],
      },
      {
        feature: "Performance reporting",
        descriptor: "Monthly data-driven insights",
        values: [false, "Monthly", "Weekly"],
      },
      {
        feature: "Dedicated growth partner",
        descriptor: "One owner for your pipeline",
        values: [false, false, true],
      },
      {
        feature: "Priority support",
        descriptor: "Response time guarantee",
        values: ["48h", "24h", "Same day"],
      },
    ],
  },
];

/* ─── Add-ons ─── */
export interface AddOn {
  name: string;
  descriptor: string;
  prices: string[];
}

export const addOns: AddOn[] = [
  {
    name: "White-glove onboarding",
    descriptor: "Guided setup and training sessions",
    prices: ["$499", "$299", "Included"],
  },
  {
    name: "Custom integrations",
    descriptor: "Connect your existing tools",
    prices: ["-", "$149/mo", "Included"],
  },
  {
    name: "A/B testing",
    descriptor: "Conversion experiments & optimization",
    prices: ["-", "-", "Included"],
  },
  {
    name: "Additional landing pages",
    descriptor: "Per-service or per-location pages",
    prices: ["$399/page", "$299/page", "Included"],
  },
];

/* ─── FAQ ─── */
export interface FaqItem {
  question: string;
  answer: string;
}

export const pricingFaqs: FaqItem[] = [
  {
    question: "How fast will I see results?",
    answer:
      "Foundation clients go live in 2–3 weeks. Growth clients typically see first qualified leads within 30 days. Timeline depends on your market and readiness.",
  },
  {
    question: "Can I upgrade my plan later?",
    answer:
      "Absolutely. You can upgrade at any time and I will credit your existing investment toward the new tier. Most clients start with Growth and scale from there.",
  },
  {
    question: "Is there a contract or lock-in?",
    answer:
      "No long-term contracts. Engagements are milestone-based and transparent. You stay because it works, not because you are locked in.",
  },
  {
    question: "What do you need from me to get started?",
    answer:
      "Clear goals, timely feedback, and access to existing assets (if any). I handle the heavy lifting. You stay focused on running your business.",
  },
  {
    question: "Do you offer discounts for annual billing?",
    answer:
      "Yes, annual commitments receive a 17% discount. This reflects my ability to plan longer-term and deliver compounding results.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "I accept all major credit cards (Visa, Mastercard, Amex) and bank transfers. Payments are processed securely via Stripe in CAD or USD.",
  },
  {
    question: "What if it is not a fit?",
    answer:
      "If I am not the right fit, you will get honest feedback and recommendations. No hard sell. I would rather pass than deliver subpar work.",
  },
  {
    question: "How do you measure success?",
    answer:
      "Pipeline metrics, conversion rates, and ROI. Not vanity stats. Every engagement includes tracking from day one so results are verifiable.",
  },
];
