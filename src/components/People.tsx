import Image from "next/image";
import { people } from "@/lib/site";
import { SectionLabel } from "./SectionLabel";

export function People() {
  return (
    <section
      id="people"
      className="relative scroll-mt-24 overflow-hidden bg-cream py-24 md:py-32"
      aria-labelledby="people-heading"
    >
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-5 border-b border-espresso/15 pb-6">
          <SectionLabel index="03" title="The People" />
          <p className="eyebrow text-[9px] text-espresso/65">
            Say hello. They&apos;re nice.
          </p>
        </div>

        <div className="mt-12 grid items-end gap-8 lg:grid-cols-12">
          <h2
            id="people-heading"
            className="display-xl text-balance lg:col-span-7"
          >
            A room is only as good as the{" "}
            <em className="italic text-ember">people</em> in it.
          </h2>
          <p className="max-w-md text-[15px] leading-7 text-espresso/65 lg:col-span-5">
            You&apos;ll meet Nadia, Marcus, and Jules. They&apos;ll remember your
            order, argue about brew ratios, and point you toward the good
            pastry.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-3 sm:gap-5 lg:gap-8">
          {people.map((person, i) => (
            <figure
              key={person.name}
              className={i === 1 ? "sm:mt-14" : i === 2 ? "sm:mt-6" : ""}
              data-reveal
              style={{ animationDelay: `${i * 110}ms` }}
            >
              <div className="group relative aspect-[4/5] overflow-hidden rounded-sm bg-espresso/10">
                <Image
                  src={person.image}
                  alt={person.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 30vw"
                  className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.035]"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-espresso/55 via-transparent to-transparent opacity-80"
                  aria-hidden="true"
                />
                <figcaption className="absolute inset-x-4 bottom-3 flex items-center justify-between text-[9px] font-semibold uppercase tracking-[0.18em] text-cream/85">
                  <span>{person.role}</span>
                  <span className="tabular-nums text-cream/50">
                    0{i + 1}
                  </span>
                </figcaption>
              </div>
              <h3 className="mt-4 font-display text-3xl leading-none">
                {person.name}
              </h3>
              <p className="mt-2 max-w-[26ch] text-sm leading-6 text-espresso/70">
                {person.note}
              </p>
            </figure>
          ))}
        </div>

        <div className="mt-20 border-t border-espresso/15 pt-12 md:mt-24">
          <div className="grid items-end gap-8 lg:grid-cols-12">
            <blockquote className="lg:col-span-8">
              <p className="font-display text-3xl leading-[1.15] tracking-[-0.015em] text-espresso md:text-5xl">
                <span className="text-ember">&ldquo;</span>I came for a flat
                white and stayed for three hours.
                <span className="text-ember">&rdquo;</span>
              </p>
            </blockquote>
            <div className="lg:col-span-4 lg:justify-self-end lg:text-right">
              <p className="eyebrow text-[10px] text-espresso/65">
                Mara — a regular since opening week
              </p>
              <p className="mt-2 -rotate-2 font-hand text-2xl text-ember-deep">
                we took that as a compliment
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
