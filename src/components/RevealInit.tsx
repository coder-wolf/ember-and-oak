"use client";

import { useEffect } from "react";

/**
 * Adds the reveal animation class to [data-reveal] elements as they enter.
 * Content remains visible without JS — the class only animates.
 */
export function RevealInit() {
  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );

    if (
      elements.length === 0 ||
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      elements.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "-32px 0px -8% 0px", threshold: 0.08 },
    );

    elements.forEach((el) => {
      // Anything already on screen animates in immediately.
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.92) {
        el.classList.add("is-visible");
      } else {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
