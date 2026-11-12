"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, site, hoursSummary } from "@/lib/site";
import { cx } from "@/lib/utils";
import { Wordmark } from "./Logo";
import { DirectionsLink } from "./DirectionsLink";
import { SectionLabel } from "./SectionLabel";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    const returnFocusTo = menuButtonRef.current;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        return;
      }

      if (event.key !== "Tab" || !overlayRef.current) return;

      const focusable = Array.from(
        overlayRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((el) => el.offsetParent !== null);

      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      returnFocusTo?.focus();
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header
        className={cx(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,padding] duration-500",
          scrolled
            ? "border-b border-espresso/10 bg-cream/90 py-3 text-espresso shadow-[0_12px_40px_-30px_rgba(36,22,15,0.5)] backdrop-blur-xl"
            : "bg-transparent py-5 text-cream",
        )}
      >
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-6 px-5 md:px-10">
          <a
            href="#top"
            aria-label="Ember & Oak — back to top"
            className="shrink-0"
          >
            <Wordmark />
          </a>

          <nav
            className="hidden items-center gap-9 lg:flex"
            aria-label="Primary"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link eyebrow text-[10px] font-semibold opacity-90 transition-opacity hover:opacity-100"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-6 lg:flex">
            <span className="eyebrow text-[9px] opacity-70">
              Open 7 days
            </span>
            <DirectionsLink
              location="header"
              className="px-5 py-2.5 text-[11px]"
            />
          </div>

          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setOpen(true)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="inline-flex items-center gap-2 rounded-full border border-current/25 px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.16em] transition-colors hover:bg-white/10 lg:hidden"
          >
            <Menu className="size-4" aria-hidden="true" />
            Menu
          </button>
        </div>
      </header>

      {open && (
        <div
          id="mobile-menu"
          ref={overlayRef}
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="fixed inset-0 z-[80] flex flex-col bg-cream text-espresso lg:hidden"
          style={{ animation: "rise .45s var(--ease-out-expo) both" }}
        >
          <div className="flex items-center justify-between border-b border-espresso/10 px-5 py-4">
            <a href="#top" onClick={close} aria-label="Ember & Oak — home">
              <Wordmark />
            </a>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={close}
              aria-label="Close menu"
              className="grid size-11 place-items-center rounded-full border border-espresso/15 transition-colors hover:bg-espresso hover:text-cream"
            >
              <X className="size-5" aria-hidden="true" />
            </button>
          </div>

          <div className="flex flex-1 flex-col justify-between overflow-y-auto px-5 pb-8 pt-8">
            <nav aria-label="Mobile primary">
              {navLinks.map((link, i) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={close}
                  className="group flex items-baseline justify-between border-b border-espresso/12 py-5 first:pt-0"
                >
                  <span className="font-display text-5xl leading-none tracking-[-0.02em] transition-colors group-hover:text-ember">
                    {link.label}
                  </span>
                  <span className="eyebrow text-[10px] text-ember">
                    0{i + 1}
                  </span>
                </a>
              ))}
            </nav>

            <div className="mt-10">
              <DirectionsLink
                location="mobile_menu"
                className="w-full py-3.5 text-xs"
                onClick={close}
              />
              <div className="mt-8 border-t border-espresso/12 pt-6">
                <SectionLabel index="—" title="Find us" />
                <p className="mt-3 font-display text-2xl">
                  {site.address.street}
                </p>
                <p className="mt-1 text-sm text-espresso/70">
                  {site.address.city}, {site.address.region}{" "}
                  {site.address.postalCode}
                </p>
                <p className="mt-3 text-xs text-espresso/65">{hoursSummary}</p>
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-xs font-semibold uppercase tracking-[0.15em] text-ember"
                >
                  {site.instagramHandle}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
