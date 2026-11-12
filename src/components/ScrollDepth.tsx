"use client";

import { useEffect } from "react";
import { track } from "@/lib/analytics";

export function ScrollDepth() {
  useEffect(() => {
    const marks = [25, 50, 75, 100];
    const seen = new Set<number>();

    const onScroll = () => {
      const doc = document.documentElement;
      const percent = Math.min(
        100,
        Math.round(((window.scrollY + window.innerHeight) / doc.scrollHeight) * 100),
      );

      for (const mark of marks) {
        if (percent >= mark && !seen.has(mark)) {
          seen.add(mark);
          track("scroll_depth", { percent: mark });
        }
      }

      if (seen.size === marks.length) {
        window.removeEventListener("scroll", onScroll);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
