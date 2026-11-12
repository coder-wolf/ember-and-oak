import { FlameMark } from "./Logo";

export function Seal() {
  return (
    <div
      className="relative grid size-36 place-items-center rounded-full border border-cream/25 bg-espresso/20 backdrop-blur-[2px]"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 100 100"
        className="seal-spin absolute inset-0 size-full p-2 text-cream/80"
      >
        <defs>
          <path
            id="seal-path"
            d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0"
          />
        </defs>
        <text
          fill="currentColor"
          fontSize="7.4"
          letterSpacing="2.05"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          <textPath href="#seal-path" startOffset="0">
            ROASTED IN-HOUSE · OPEN 7 DAYS ·&nbsp;
          </textPath>
        </text>
      </svg>
      <div className="text-center text-cream">
        <FlameMark className="mx-auto size-5 text-honey" />
        <p className="mt-1.5 text-[8px] font-semibold uppercase tracking-[0.28em] text-cream/70">
          Est. 2026
        </p>
      </div>
    </div>
  );
}
