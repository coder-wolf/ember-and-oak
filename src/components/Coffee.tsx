import Image from "next/image";
import { coffees } from "@/lib/site";
import { CoffeeRing, SteamLine } from "./Ornaments";
import { SectionLabel } from "./SectionLabel";
import { MenuAccordion } from "./MenuAccordion";

export function Coffee() {
  return (
    <section
      id="coffee"
      className="relative scroll-mt-24 overflow-hidden rounded-t-[2.5rem] bg-espresso py-24 text-cream md:rounded-t-[4rem] md:py-32"
      aria-labelledby="coffee-heading"
    >
      <CoffeeRing
        className="absolute -right-40 -top-24 w-[520px] text-cream"
        weight={0.5}
      />
      <CoffeeRing
        className="absolute -bottom-32 -left-40 w-[420px] text-ember"
        weight={0.7}
      />
      <SteamLine className="absolute left-8 top-24 hidden h-36 text-cream/15 md:block" />
      <SteamLine className="absolute right-14 top-40 hidden h-24 text-cream/10 lg:block" />

      <div className="relative mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-5 border-b border-cream/15 pb-6">
          <SectionLabel index="02" title="The Coffee" tone="light" />
          <p className="eyebrow text-[9px] text-cream/60">
            Roasted in the back, poured up front
          </p>
        </div>

        <div className="mt-14 grid gap-16 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <figure className="relative" data-reveal>
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-cream/5">
                <Image
                  src="/images/craft-pour.jpg"
                  alt="A barista slowly pouring water over a pour-over cone at the coffee bar."
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>

              <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-cream/20 bg-espresso/40 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-cream/80 backdrop-blur">
                <span className="size-1 rounded-full bg-honey" />
                The pour-over bar
              </div>

              <div className="absolute -bottom-10 right-0 w-40 rotate-3 bg-cream p-2 pb-8 text-espresso shadow-[0_30px_60px_-30px_rgba(0,0,0,0.7)] sm:w-48">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src="/images/craft-espresso.jpg"
                    alt="A barista working the espresso machine in the early morning."
                    fill
                    sizes="192px"
                    className="object-cover"
                  />
                </div>
                <p className="absolute bottom-2 left-0 right-0 text-center font-hand text-lg">
                  tuesdays, 6am
                </p>
              </div>
            </figure>
          </div>

          <div className="lg:col-span-7">
            <h2 id="coffee-heading" className="display-xl">
              Roasted here.
              <br />
              <em className="italic text-honey">Poured for you.</em>
            </h2>

            <p className="mt-7 max-w-lg text-[15px] leading-7 text-cream/60">
              We roast in small batches every Tuesday, just behind the bar.
              Nothing sits more than two weeks. Ask what&apos;s fresh — someone
              will happily over-explain it.
            </p>

            <div className="mt-10">
              {coffees.map((coffee, i) => (
                <article
                  key={coffee.name}
                  className={
                    coffee.featured
                      ? "rounded-xl bg-ember-deep px-6 py-6 text-cream"
                      : "border-t border-cream/15 py-6 transition-colors hover:bg-cream/[0.03]"
                  }
                >
                  <div className="flex items-baseline justify-between gap-6">
                    <div className="flex items-baseline gap-4">
                      <span
                        className={
                          coffee.featured
                            ? "font-sans text-[10px] tabular-nums tracking-[0.16em] text-cream/95"
                            : "font-sans text-[10px] tabular-nums tracking-[0.16em] text-cream/50"
                        }
                      >
                        0{i + 1}
                      </span>
                      <h3 className="font-display text-3xl leading-none md:text-[2.15rem]">
                        {coffee.name}
                      </h3>
                    </div>
                    <span
                      className={
                        coffee.featured
                          ? "rounded-full bg-espresso/20 px-3 py-1 text-xs font-semibold"
                          : "text-xs text-cream/60"
                      }
                    >
                      {coffee.price}
                    </span>
                  </div>
                  <p
                    className={
                      coffee.featured
                        ? "mt-3 max-w-md text-sm leading-6 text-cream/95"
                        : "mt-2 max-w-md text-sm leading-6 text-cream/55"
                    }
                  >
                    {coffee.note}
                  </p>
                  <p
                    className={
                      coffee.featured
                        ? "mt-4 text-[9px] font-semibold uppercase tracking-[0.18em] text-cream/95"
                        : "mt-4 text-[9px] font-semibold uppercase tracking-[0.18em] text-cream/95"
                    }
                  >
                    {coffee.origin}
                  </p>
                </article>
              ))}
            </div>

            <p className="mt-6 text-[11px] leading-5 text-cream/55">
              Oat, whole, or skim — no upcharge. Bring your own cup and we&apos;ll
              knock a dollar off.
            </p>
          </div>
        </div>

        <div className="mt-20" data-reveal>
          <MenuAccordion />
        </div>
      </div>
    </section>
  );
}
