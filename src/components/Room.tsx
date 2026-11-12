import Image from "next/image";
import { CoffeeRing } from "./Ornaments";
import { SectionLabel } from "./SectionLabel";

const stats = [
  { value: "48", label: "seats, at the bar and by the window" },
  { value: "7", label: "days a week, no exceptions" },
  { value: "6", label: "single origins on the shelf" },
  { value: "1", label: "very good dog (Mabel)" },
];

export function Room() {
  return (
    <section
      id="room"
      className="relative scroll-mt-24 overflow-hidden bg-cream py-24 md:py-32"
      aria-labelledby="room-heading"
    >
      <CoffeeRing className="absolute -left-48 top-24 w-[560px] text-espresso" />
      <CoffeeRing className="absolute -right-56 bottom-0 w-[520px] text-ember/80" />

      <div className="relative mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-5 border-b border-espresso/15 pb-6">
          <SectionLabel index="01" title="The Room" />
          <p className="eyebrow text-[9px] text-espresso/65">
            Coffee, light, and a seat by the window
          </p>
        </div>

        <div className="mt-14 grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:sticky lg:top-28 lg:col-span-5 lg:self-start">
            <h2 id="room-heading" className="display-xl text-balance">
              A room that asks you to{" "}
              <em className="italic text-ember">stay.</em>
            </h2>

            <p className="mt-7 max-w-md text-[15px] leading-7 text-espresso/70">
              We built this room around one idea: coffee tastes better when
              you&apos;re not in a hurry. Come sit. Stay a while. The beans were
              roasted this week, the light is best at 9am, and there&apos;s
              always a seat if you look twice.
            </p>

            <p className="mt-6 -rotate-2 font-hand text-2xl text-ember-deep">
              the light is best at 9am
            </p>

            <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-7 border-t border-espresso/15 pt-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="font-display text-4xl leading-none">
                    {stat.value}
                  </dt>
                  <dd className="mt-2 text-xs leading-5 text-espresso/65">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>

            <svg
              viewBox="0 0 110 46"
              fill="none"
              aria-hidden="true"
              className="mt-10 hidden w-28 text-ember/55 lg:block"
            >
              <path
                d="M3 40c18-26 54-36 96-26"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeDasharray="3 4"
              />
              <path
                d="m90 8 11 6-9 8"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="lg:col-span-7">
            <figure className="group relative" data-reveal>
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-espresso/5">
                <Image
                  src="/images/room-counter.jpg"
                  alt="The warm counter at Ember & Oak, lined with plants, cups, and hanging bulbs."
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.025]"
                />
              </div>
              <figcaption className="absolute bottom-4 left-4 inline-flex rotate-[-2deg] items-center gap-2 rounded-full bg-cream/95 px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-espresso/70 shadow-sm backdrop-blur">
                <span className="size-1 rounded-full bg-ember" />
                The counter · 8:12am
              </figcaption>
            </figure>

            <div className="mt-8 grid grid-cols-2 gap-4 md:gap-5">
              <figure className="group" data-reveal style={{ animationDelay: "120ms" }}>
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-espresso/5">
                  <Image
                    src="/images/room-window.jpg"
                    alt="A French press and two cups on a sunlit table beside the window."
                    fill
                    sizes="(max-width: 1024px) 50vw, 29vw"
                    className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.025]"
                  />
                </div>
                <figcaption className="mt-3 text-[10px] uppercase tracking-[0.16em] text-espresso/65">
                  Window seat, north light
                </figcaption>
              </figure>

              <figure
                className="group relative sm:mt-14"
                data-reveal
                style={{ animationDelay: "220ms" }}
              >
                <div className="relative aspect-square overflow-hidden rounded-sm bg-espresso/5">
                  <Image
                    src="/images/room-night.jpg"
                    alt="The café at dusk, warm lamps on and a soft pink glow across the room."
                    fill
                    sizes="(max-width: 1024px) 50vw, 29vw"
                    className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.025]"
                  />
                </div>
                <figcaption className="absolute -bottom-6 -left-2 rotate-[-4deg] bg-milk px-4 py-2 shadow-[0_14px_40px_-18px_rgba(36,22,15,0.55)]">
                  <span className="font-hand text-xl text-espresso/80">
                    evening light, 6:40pm
                  </span>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
