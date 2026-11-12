import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { OpenStatus } from "./OpenStatus";
import { Seal } from "./Seal";
import { DirectionsLink } from "./DirectionsLink";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden bg-espresso"
      aria-labelledby="hero-heading"
    >
      <Image
        src="/images/hero-room.jpg"
        alt="Morning light falling across the window seats at Ember & Oak."
        fill
        priority
        quality={85}
        sizes="100vw"
        className="object-cover object-[44%_50%] md:object-center"
      />

      {/* Cinematic scrims for legibility and mood */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/55 to-ink/10"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/15 to-ink/35"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-ember/10 mix-blend-multiply"
        aria-hidden="true"
      />

      <div className="absolute right-10 top-28 hidden md:block">
        <Seal />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-1 flex-col justify-end px-5 pb-16 pt-32 md:px-10 md:pb-20">
        <div className="max-w-[58rem]">
          <div className="hero-rise flex items-center gap-3 text-cream/75">
            <span className="relative flex size-2 items-center justify-center">
              <span className="absolute inset-0 rounded-full bg-honey/40" />
              <span className="size-1.5 rounded-full bg-honey" />
            </span>
            <p className="eyebrow text-[10px] text-cream/80">
              Now pouring · SE Division, Portland
            </p>
          </div>

          <h1 id="hero-heading" className="display-hero mt-6 text-cream">
            <span className="hero-rise block" style={{ animationDelay: "80ms" }}>
              Good coffee.
            </span>
            <span
              className="hero-rise mt-1 block italic text-honey md:pl-[13%]"
              style={{ animationDelay: "180ms" }}
            >
              Better room.
            </span>
          </h1>

          <p
            className="hero-rise mt-7 max-w-[46ch] text-[15px] leading-7 text-cream/75 md:text-base md:leading-8"
            style={{ animationDelay: "280ms" }}
          >
            A roastery and café built for slow mornings, long conversations,
            and the kind of light you want to sit in.
          </p>

          <div
            className="hero-rise mt-9 flex flex-wrap items-center gap-3"
            style={{ animationDelay: "380ms" }}
          >
            <DirectionsLink
              location="hero"
              className="px-6 py-3.5 text-[12px]"
            />
            <a
              href="#room"
              className="group inline-flex items-center gap-2 rounded-full border border-cream/30 px-6 py-3.5 text-xs font-semibold tracking-[0.04em] text-cream transition-colors duration-300 hover:bg-cream/10"
            >
              See the room
              <ArrowDown className="size-4 transition-transform duration-300 group-hover:translate-y-0.5" />
            </a>
          </div>

          <p
            className="hero-rise mt-6 text-[10px] uppercase tracking-[0.18em] text-cream/60"
            style={{ animationDelay: "460ms" }}
          >
            Walk-ins welcome · No reservations · Dogs, always
          </p>
        </div>
      </div>

      <div
        className="hero-rise absolute bottom-20 right-5 z-10 hidden w-[280px] rounded-2xl border border-cream/20 bg-ink/75 p-5 backdrop-blur-md lg:block xl:right-10"
        style={{ animationDelay: "520ms" }}
      >
        <OpenStatus tone="light" />
        <p className="mt-3 font-display text-2xl leading-tight text-cream">
          1122 SE Division
        </p>
        <p className="mt-1 text-xs text-cream/70">
          Portland, OR · two doors from the old movie house
        </p>
        <a
          href="#visit"
          className="mt-4 flex items-center justify-between border-t border-cream/15 pt-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-cream/80 transition-colors hover:text-honey"
        >
          Find us
          <ArrowUpRight className="size-3.5" aria-hidden="true" />
        </a>
      </div>

      <div className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex">
        <span className="text-[8px] uppercase tracking-[0.3em] text-cream/45">
          Scroll
        </span>
        <span className="h-8 w-px bg-gradient-to-b from-cream/45 to-transparent" />
      </div>
    </section>
  );
}
