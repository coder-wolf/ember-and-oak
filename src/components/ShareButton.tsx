"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Share2 } from "lucide-react";
import { track } from "@/lib/analytics";

export function ShareButton() {
  const [copied, setCopied] = useState(false);
  const timer = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current) window.clearTimeout(timer.current);
    };
  }, []);

  const share = async () => {
    const url = window.location.href;
    const payload = {
      title: "Ember & Oak — Good coffee. Better room.",
      text: "A roastery and café on SE Division in Portland.",
      url,
    };

    track("share_location");

    if (navigator.share) {
      try {
        await navigator.share(payload);
        return;
      } catch {
        // User cancelled; fall through to copying.
      }
    }

    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      if (timer.current) window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => setCopied(false), 2200);
    } catch {
      // Clipboard unavailable — no-op.
    }
  };

  return (
    <button
      type="button"
      onClick={share}
      aria-label={copied ? "Link copied" : "Share this page"}
      className="inline-flex items-center justify-center gap-2 rounded-full border border-espresso/20 px-4 py-3 text-xs font-semibold tracking-[0.04em] text-espresso/75 transition-colors hover:border-espresso/40 hover:text-espresso"
    >
      {copied ? (
        <Check className="size-4" aria-hidden="true" />
      ) : (
        <Share2 className="size-4" aria-hidden="true" />
      )}
      <span>{copied ? "Copied" : "Share"}</span>
    </button>
  );
}
