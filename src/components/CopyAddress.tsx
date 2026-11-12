"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Copy } from "lucide-react";
import { fullAddress } from "@/lib/site";
import { track } from "@/lib/analytics";
import { cx } from "@/lib/utils";

export function CopyAddress() {
  const [copied, setCopied] = useState(false);
  const timer = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current) window.clearTimeout(timer.current);
    };
  }, []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(fullAddress);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = fullAddress;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      textarea.remove();
    }

    setCopied(true);
    track("copy_address");
    if (timer.current) window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setCopied(false), 2200);
  };

  return (
    <button
      type="button"
      onClick={copy}
      className={cx(
        "inline-flex items-center justify-center gap-2 rounded-full border border-espresso/20 px-4 py-3 text-xs font-semibold tracking-[0.04em] text-espresso/75 transition-colors hover:border-espresso/40 hover:text-espresso",
        copied && "border-olive/40 text-olive",
      )}
    >
      {copied ? (
        <Check className="size-4" aria-hidden="true" />
      ) : (
        <Copy className="size-4" aria-hidden="true" />
      )}
      <span aria-live="polite">{copied ? "Copied" : "Copy"}</span>
    </button>
  );
}
