import { cx } from "@/lib/utils";

export function CoffeeRing({
  className,
  weight = 1,
}: {
  className?: string;
  weight?: number;
}) {
  return (
    <svg
      viewBox="0 0 320 320"
      fill="none"
      aria-hidden="true"
      className={cx("pointer-events-none", className)}
    >
      <path
        d="M162 18c77 0 140 61 140 142 0 82-63 142-144 142C80 302 18 242 18 159 18 78 82 18 162 18Z"
        stroke="currentColor"
        strokeWidth={9 * weight}
        opacity="0.14"
      />
      <path
        d="M161 38c69 0 124 55 124 121 0 70-54 122-126 122-70 0-122-52-122-120 0-69 56-123 124-123Z"
        stroke="currentColor"
        strokeWidth={1.4 * weight}
        opacity="0.32"
      />
      <path
        d="M86 249c28 17 84 24 121 5"
        stroke="currentColor"
        strokeWidth={3 * weight}
        strokeLinecap="round"
        opacity="0.22"
      />
    </svg>
  );
}

export function Bean({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
      style={style}
    >
      <ellipse
        cx="12"
        cy="12"
        rx="5.4"
        ry="9"
        transform="rotate(32 12 12)"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M8.2 6.4c2.2 2.4 4.5 6.9 7.6 11.2"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function SteamLine({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 120"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M12 116c-6-14 6-20 0-34s6-20 0-34 6-20 0-34"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <rect
        x="3.2"
        y="3.2"
        width="17.6"
        height="17.6"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.2" cy="6.8" r="1.05" fill="currentColor" />
    </svg>
  );
}
