import type { LucideIcon } from "lucide-react";
import {
  Accessibility,
  Bike,
  Mail,
  Phone,
  TrainFront,
} from "lucide-react";
import { fullAddress, site } from "@/lib/site";
import { SectionLabel } from "./SectionLabel";
import { InstagramIcon } from "./Ornaments";
import { OpenStatus } from "./OpenStatus";
import { HoursTable } from "./HoursTable";
import { MapPanel } from "./MapPanel";
import { DirectionsLink } from "./DirectionsLink";
import { CopyAddress } from "./CopyAddress";
import { ShareButton } from "./ShareButton";

function InfoRow({
  icon: Icon,
  title,
  children,
}: {
  icon: LucideIcon;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-3">
      <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-full border border-espresso/15 text-espresso/65">
        <Icon className="size-3.5" aria-hidden="true" />
      </span>
      <div>
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-espresso/65">
          {title}
        </p>
        <p className="mt-1 text-xs leading-5 text-espresso/70">{children}</p>
      </div>
    </div>
  );
}

export function Visit() {
  return (
    <section
      id="visit"
      className="relative scroll-mt-24 overflow-hidden bg-[#eee4d3] py-24 md:py-32"
      aria-labelledby="visit-heading"
    >
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-5 border-b border-espresso/15 pb-6">
          <SectionLabel index="04" title="Visit" />
          <p className="eyebrow text-[9px] text-espresso/65">
            SE Division &amp; 11th · Portland
          </p>
        </div>

        <div className="mt-12 max-w-3xl">
          <h2 id="visit-heading" className="display-xl">
            Around the <em className="italic text-ember">corner.</em>
          </h2>
          <p className="mt-5 max-w-xl text-[15px] leading-7 text-espresso/70">
            No reservations, no fuss. Walk in, order at the bar, find the seat
            with the best light. We&apos;ll bring the coffee over.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <div className="relative h-[420px] overflow-hidden rounded-2xl border border-espresso/15 shadow-[0_40px_90px_-60px_rgba(36,22,15,0.65)] sm:h-[520px] lg:sticky lg:top-28 lg:h-[620px]">
              <MapPanel />
            </div>
            <div className="mt-4 flex flex-wrap justify-between gap-3 text-[9px] font-semibold uppercase tracking-[0.16em] text-espresso/65">
              <span>Between SE 11th &amp; 12th</span>
              <span>Bike racks out front</span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <p className="eyebrow text-[9px] text-ember-deep">Come by</p>
            <h3 className="mt-3 font-display text-[2.4rem] leading-[0.98] tracking-[-0.02em] sm:text-5xl">
              1122 SE Division
            </h3>
            <p className="mt-2 text-sm text-espresso/70">
              Portland, Oregon 97202
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
              <OpenStatus />
              <span className="text-[10px] text-espresso/65">Store local time</span>
            </div>

            <p className="mt-3 -rotate-1 font-hand text-2xl text-ember-deep">
              two doors down from the old movie house
            </p>

            <div className="mt-7 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
              <DirectionsLink
                location="visit"
                className="col-span-2 py-3.5 sm:flex-1"
              />
              <CopyAddress />
              <ShareButton />
            </div>

            <div className="mt-9 border-t border-espresso/15 pt-6">
              <div className="flex items-baseline justify-between">
                <p className="eyebrow text-[9px] text-espresso/65">Hours</p>
                <p className="text-[10px] text-espresso/65">
                  Last pour 30 min before close
                </p>
              </div>
              <HoursTable />
            </div>

            <div className="mt-8 grid gap-4 border-t border-espresso/15 pt-6">
              <InfoRow icon={TrainFront} title="Transit">
                Bus 70 stops at Division &amp; 11th — two minutes on foot. MAX
                Clinton/SE 12th is a twelve-minute walk.
              </InfoRow>
              <InfoRow icon={Bike} title="Bikes & parking">
                Racks out front. Free street parking after 6pm, and a lot
                around the corner on 11th.
              </InfoRow>
              <InfoRow icon={Accessibility} title="Accessibility">
                Step-free entry, an accessible restroom, and a wide aisle to the
                counter. Quiet mornings on request.
              </InfoRow>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-espresso/15 pt-6 text-xs text-espresso/70">
              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-2 transition-colors hover:text-ember"
              >
                <Phone className="size-3.5" aria-hidden="true" />
                {site.phone}
              </a>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2 transition-colors hover:text-ember"
              >
                <Mail className="size-3.5" aria-hidden="true" />
                {site.email}
              </a>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-ember"
              >
                <InstagramIcon className="size-3.5" />
                {site.instagramHandle}
              </a>
            </div>

            <p className="sr-only">{fullAddress}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
