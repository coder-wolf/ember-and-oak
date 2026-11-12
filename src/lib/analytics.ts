type EventProps = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    plausible?: (event: string, options?: { props?: EventProps }) => void;
  }
}

/**
 * Lightweight, privacy-friendly event helper.
 * Pushes to GTM's dataLayer and Plausible when either is present.
 * Swap in the chosen analytics provider at launch — event names match the PRD.
 */
export function track(event: string, props: EventProps = {}) {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...props });
  window.plausible?.(event, { props });

  if (process.env.NODE_ENV !== "production") {
    console.debug(`[analytics] ${event}`, props);
  }
}
