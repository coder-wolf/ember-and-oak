"use client";

import { useEffect, useState } from "react";
import { getOpenState, type OpenState } from "@/lib/site";
import { cx } from "@/lib/utils";

export function OpenStatus({
  className,
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light";
}) {
  const [state, setState] = useState<OpenState | null>(null);

  useEffect(() => {
    const update = () => setState(getOpenState());
    update();
    const id = window.setInterval(update, 60_000);
    return () => window.clearInterval(id);
  }, []);

  const base = cx(
    "inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.04em]",
    tone === "light" ? "text-cream/75" : "text-espresso/70",
    className,
  );

  // Deterministic first paint; the real store-local state arrives on mount.
  if (!state) {
    return (
      <span className={base}>
        <span className="size-1.5 rounded-full bg-olive/60" aria-hidden="true" />
        Open seven days a week
      </span>
    );
  }

  return (
    <span className={base} aria-live="polite">
      <span
        className={cx(
          "live-dot relative size-1.5 rounded-full",
          state.isOpen
            ? "bg-olive text-olive"
            : "bg-ember text-ember",
        )}
        aria-hidden="true"
      />
      {state.label}
    </span>
  );
}
