import { marqueeItems } from "@/lib/site";
import { Bean } from "./Ornaments";

function MarqueeRow({ hidden = false }: { hidden?: boolean }) {
  return (
    <div className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {marqueeItems.map((item, i) => (
        <span key={item} className="flex items-center">
          <span
            className={
              i % 2 === 0
                ? "whitespace-nowrap px-6 font-display text-[2.6rem] leading-none tracking-[-0.02em] md:text-6xl"
                : "text-outline whitespace-nowrap px-6 font-display text-[2.6rem] leading-none tracking-[-0.02em] md:text-6xl"
            }
          >
            {item}
          </span>
          <Bean className="size-4 shrink-0 text-ember/70 md:size-5" />
        </span>
      ))}
    </div>
  );
}

export function Marquee() {
  return (
    <div className="marquee border-y border-espresso/15 bg-cream py-5 md:py-7">
      <div className="marquee-track">
        <MarqueeRow />
        <div className="marquee-dup flex shrink-0" aria-hidden="true">
          <MarqueeRow hidden />
        </div>
      </div>
    </div>
  );
}
