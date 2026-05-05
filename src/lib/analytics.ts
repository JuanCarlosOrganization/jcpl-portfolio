/* ─── Analytics / Event Tracking ─── */

/* ─── Local type alias for augmented window properties ─── */
type AnalyticsWindow = typeof window & {
  gtag?: (...args: unknown[]) => void;
  clarity?: (method: string, ...args: unknown[]) => void;
  dataLayer?: Record<string, unknown>[];
};

export type EventName =
  // ── Hero ──
  | "hero_primary_cta_click"
  | "hero_secondary_cta_click"
  | "hero_cta_click"
  // ── Navigation ──
  | "nav_cta_clicked"
  // ── Section CTAs ──
  | "section_cta_click"
  | "primary_cta_clicked"
  | "services_link_clicked"
  // ── Results / Case Studies ──
  | "case_card_click"
  | "results_clicked"
  | "faq_cta_click"
  | "portfolio_cta_click"
  | "final_cta_primary_click"
  | "final_cta_secondary_click"
  // ── Form ──
  | "apply_form_start"
  | "apply_form_submit"
  | "form_started"
  | "form_step_complete"
  | "form_submitted"
  | "form_submit"
  // ── Lead qualification ──
  | "lead_qualified_true"
  | "lead_qualified_false"
  // ── Booking / Contact ──
  | "booking_complete"
  | "booking_cta_clicked"
  | "contact_cta_clicked"
  | "thank_you_view"
  // ── Services page ──
  | "services_hero_primary_cta_click"
  | "services_hero_secondary_cta_click"
  | "services_plan_select_foundation"
  | "services_plan_select_growth"
  | "services_plan_select_scale"
  | "services_plan_cta_click_foundation"
  | "services_plan_cta_click_growth"
  | "services_plan_cta_click_scale"
  | "services_plan_expand_scope"
  | "services_compare_expand"
  | "services_final_cta_primary_click"
  | "services_final_cta_secondary_click"
  | "services_faq_toggle"
  | "services_payment_methods_view"
  | "services_quiz_answer"
  | "services_quiz_result"
  | "services_quiz_cta_click_foundation"
  | "services_quiz_cta_click_growth"
  | "services_quiz_cta_click_scale"
  | "services_sticky_cta_click";

interface TrackOptions {
  /** Additional data payload */
  data?: Record<string, string | number | boolean>;
}

/**
 * Fire a custom analytics event.
 *
 * Dispatches to all active analytics destinations:
 * - GA4  → window.gtag('event', ...). direct GA4 custom event
 * - Clarity → window.clarity('event', ...). session tag for heatmap filtering
 * - dataLayer → GTM-compatible push (for future GTM use)
 *
 * Each destination is called only when its global is available, so
 * missing scripts fail silently without errors.
 */
export function trackEvent(name: EventName, options?: TrackOptions) {
  if (typeof window === "undefined") return;

  const props = options?.data;

  // DEV: log to console
  if (process.env.NODE_ENV === "development") {
    console.log(`[Analytics] ${name}`, props ?? "");
  }

  const w = window as AnalyticsWindow;

  // GA4 direct event (this is the correct call. Gtag('event', ...) not dataLayer.push)
  if (typeof w.gtag === "function") {
    w.gtag("event", name, props ?? {});
  }

  // Microsoft Clarity custom event. Enables session filtering by event name
  if (typeof w.clarity === "function") {
    w.clarity("event", name);
  }

  // dataLayer push (GTM-compatible, kept for future GTM container adoption)
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event: name, ...props });
}
