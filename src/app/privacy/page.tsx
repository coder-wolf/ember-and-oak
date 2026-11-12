import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Wordmark } from "@/components/Logo";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How Ember & Oak handles the little bit of information you share.",
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-cream">
      <header className="border-b border-espresso/12">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-5 py-5 md:px-8">
          <Link href="/" aria-label="Ember & Oak — home">
            <Wordmark />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-espresso/65 transition-colors hover:text-ember"
          >
            <ArrowLeft className="size-3.5" aria-hidden="true" />
            Back
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-5 py-20 md:px-8 md:py-28">
        <p className="eyebrow text-[9px] text-ember-deep">The small print</p>
        <h1 className="display-xl mt-4">Privacy</h1>
        <p className="mt-5 max-w-xl text-[15px] leading-7 text-espresso/65">
          We collect very little, and we don&apos;t sell any of it. Here&apos;s
          the whole story.
        </p>

        <div className="mt-12 space-y-10 border-t border-espresso/15 pt-10 text-sm leading-7 text-espresso/70">
          <section>
            <h2 className="font-display text-2xl text-espresso">What we collect</h2>
            <p className="mt-3">
              If you join the list, we store the email address you give us and,
              if you opt in, your mobile number. We keep a timestamp of your
              consent. That&apos;s it.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-espresso">How we use it</h2>
            <p className="mt-3">
              To send the occasional note about opening hours, new roasts, and
              events — roughly once or twice a month. You can unsubscribe from
              any email, or reply STOP to any text, at any time.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-espresso">Cookies &amp; maps</h2>
            <p className="mt-3">
              This site uses privacy-friendly, aggregate analytics — no ad
              trackers and no profiles. The map on our visit section loads tiles
              from CARTO and OpenStreetMap, which may receive your IP address as
              part of serving the map. We don&apos;t control those providers.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-espresso">Your choices</h2>
            <p className="mt-3">
              Ask us to show, correct, or delete what we have. Email{" "}
              <a
                href={`mailto:${site.email}`}
                className="text-ember-deep underline underline-offset-2"
              >
                {site.email}
              </a>{" "}
              and we&apos;ll sort it out.
            </p>
          </section>

          <p className="border-t border-espresso/15 pt-6 text-[11px] leading-5 text-espresso/40">
            Last updated November 2026. Ember &amp; Oak Coffee Roasters,{" "}
            {site.address.street}, {site.address.city}, {site.address.region}{" "}
            {site.address.postalCode}.
          </p>
        </div>
      </main>
    </div>
  );
}
