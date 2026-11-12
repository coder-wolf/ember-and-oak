import { Check } from "lucide-react";
import { CoffeeRing } from "./Ornaments";
import { SectionLabel } from "./SectionLabel";
import { SignupForm } from "./SignupForm";

const perks = [
  "One free coffee during opening month",
  "First dibs on new roasts and late-night events",
  "One or two notes a month. Never more.",
];

export function Signup() {
  return (
    <section
      id="list"
      className="relative scroll-mt-24 overflow-hidden rounded-t-[2.5rem] bg-espresso py-24 text-cream md:rounded-t-[4rem] md:py-32"
      aria-labelledby="signup-heading"
    >
      <CoffeeRing
        className="absolute -left-44 top-10 w-[480px] text-cream"
        weight={0.55}
      />
      <CoffeeRing
        className="absolute -bottom-40 -right-32 w-[520px] text-ember"
        weight={0.7}
      />

      <div className="relative mx-auto grid max-w-[1440px] gap-12 px-5 md:px-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <SectionLabel index="05" title="The List" tone="light" />

          <h2 id="signup-heading" className="display-xl mt-8">
            First pour&apos;s
            <br />
            <em className="italic text-honey">on us.</em>
          </h2>

          <p className="mt-6 max-w-lg text-[15px] leading-7 text-cream/60">
            Join the list and your first coffee is free during opening month.
            We&apos;ll send the occasional note about new roasts, late nights,
            and the playlist nobody asked for.
          </p>

          <ul className="mt-8 space-y-3">
            {perks.map((perk) => (
              <li
                key={perk}
                className="flex items-center gap-3 text-sm text-cream/65"
              >
                <span className="grid size-5 shrink-0 place-items-center rounded-full border border-cream/25 text-honey">
                  <Check className="size-3" aria-hidden="true" />
                </span>
                {perk}
              </li>
            ))}
          </ul>

          <p className="mt-8 max-w-sm border-t border-cream/15 pt-5 text-[11px] leading-5 text-cream/55">
            Offer valid through December 31, 2026. One per person, any drink on
            the bar. No purchase necessary.
          </p>
        </div>

        <div className="lg:col-span-5">
          <SignupForm />
        </div>
      </div>
    </section>
  );
}
