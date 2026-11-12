import { Mail, Phone, ArrowUpRight, ArrowUp } from "lucide-react";
import { fullAddress, getDirectionsHref, hoursSummary, site } from "@/lib/site";
import { Wordmark } from "./Logo";
import { InstagramIcon } from "./Ornaments";

export function Footer() {
  return (
    <footer className="bg-espresso text-cream">
      <div className="mx-auto max-w-[1440px] px-5 pb-28 md:px-10 lg:pb-8">
        <div className="grid gap-10 border-t border-cream/15 py-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Wordmark />
            <p className="mt-5 font-display text-3xl leading-[1.05] text-cream/90">
              Roasted here.
              <br />
              <span className="italic text-honey">Poured for you.</span>
            </p>
            <p className="mt-4 text-xs text-cream/60">
              Made slowly in Portland, Oregon.
            </p>
          </div>

          <div className="lg:col-span-2">
            <p className="eyebrow text-[9px] text-cream/55">Visit</p>
            <address className="mt-4 not-italic text-sm leading-6 text-cream/70">
              {site.address.street}
              <br />
              {site.address.city}, {site.address.region}{" "}
              {site.address.postalCode}
            </address>
            <a
              href={getDirectionsHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-cream/80 transition-colors hover:text-honey"
            >
              Get directions
              <ArrowUpRight className="size-3.5" aria-hidden="true" />
            </a>
          </div>

          <div className="lg:col-span-2">
            <p className="eyebrow text-[9px] text-cream/55">Hours</p>
            <p className="mt-4 whitespace-pre-line text-xs leading-6 text-cream/70">
              {hoursSummary.replaceAll(" · ", "\n")}
            </p>
            <p className="mt-3 text-[10px] leading-4 text-cream/55">
              Walk-ins only.
              <br />
              No reservations.
            </p>
          </div>

          <div className="lg:col-span-3">
            <p className="eyebrow text-[9px] text-cream/55">Say hello</p>
            <div className="mt-4 space-y-2.5 text-xs text-cream/70">
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors hover:text-honey"
              >
                <InstagramIcon className="size-3.5" />
                {site.instagramHandle}
              </a>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-2 transition-colors hover:text-honey"
              >
                <Mail className="size-3.5" aria-hidden="true" />
                {site.email}
              </a>
              <a
                href={site.phoneHref}
                className="flex items-center gap-2 transition-colors hover:text-honey"
              >
                <Phone className="size-3.5" aria-hidden="true" />
                {site.phone}
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-cream/10 pt-6 text-[10px] text-cream/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Ember &amp; Oak Coffee Roasters</p>
          <div className="flex items-center gap-6">
            <a href="/privacy" className="transition-colors hover:text-cream">
              Privacy
            </a>
            <a
              href="#top"
              className="inline-flex items-center gap-1 transition-colors hover:text-cream"
            >
              Back to top
              <ArrowUp className="size-3" aria-hidden="true" />
            </a>
          </div>
        </div>

        <p className="mt-3 text-[9px] text-cream/50">
          <span className="sr-only">{fullAddress}. </span>
          Photography via Pexels &amp; Unsplash · Maps via OpenStreetMap and
          CARTO · Ember &amp; Oak is a fictional demo brand.
        </p>
      </div>
    </footer>
  );
}
