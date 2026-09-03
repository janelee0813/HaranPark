export type AnalyticsEvent =
  | "header_cta_click"
  | "hero_cta_click"
  | "proof_cta_click"
  | "portfolio_open"
  | "email_click"
  | "phone_click"
  | "contact_submit";

export function trackEvent(event: AnalyticsEvent) {
  if (process.env.NODE_ENV === "development") {
    console.info(`[analytics] ${event}`);
  }
}
