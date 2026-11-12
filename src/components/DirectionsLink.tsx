"use client";

import type { MouseEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import { getDirectionsHref } from "@/lib/site";
import { track } from "@/lib/analytics";
import { cx } from "@/lib/utils";

export function DirectionsLink({
  className,
  children,
  location = "unknown",
  ariaLabel,
  onClick,
}: {
  className?: string;
  children?: React.ReactNode;
  location?: string;
  ariaLabel?: string;
  onClick?: () => void;
}) {
  const href = getDirectionsHref(false);

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    const isIOS =
      /iPad|iPhone|iPod/.test(navigator.userAgent) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

    if (isIOS) {
      event.preventDefault();
      window.open(getDirectionsHref(true), "_blank", "noopener,noreferrer");
    }

    track("cta_directions_click", { location });
    onClick?.();
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      onClick={handleClick}
      className={cx(
        "group inline-flex items-center justify-center gap-2 rounded-full bg-ember-deep px-5 py-3 text-xs font-semibold tracking-[0.04em] text-cream transition-colors duration-300 hover:bg-[#8f3c17]",
        className,
      )}
    >
      {children ?? (
        <>
          Get directions
          <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </>
      )}
    </a>
  );
}
