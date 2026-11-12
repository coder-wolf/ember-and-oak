"use client";

import { useEffect, useId, useRef, useState } from "react";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { track } from "@/lib/analytics";
import { DirectionsLink } from "./DirectionsLink";
import { cx } from "@/lib/utils";

type Status = "idle" | "submitting" | "success";

export function SignupForm() {
  const emailId = useId();
  const phoneId = useId();
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [wantsSms, setWantsSms] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const timer = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current) window.clearTimeout(timer.current);
    };
  }, []);

  const reset = () => {
    setStatus("idle");
    setEmail("");
    setPhone("");
    setWantsSms(false);
    setError("");
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    // Bots fill the hidden field; humans never see it.
    if (honeypot) {
      setStatus("success");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim())) {
      setError("That email doesn't look quite right. One more try?");
      return;
    }

    if (wantsSms && phone.replace(/\D/g, "").length < 10) {
      setError("Add a 10-digit mobile number for texts.");
      return;
    }

    setStatus("submitting");
    timer.current = window.setTimeout(() => {
      setStatus("success");
      track("signup_submit", {
        channel: wantsSms ? "email+sms" : "email",
        success: true,
      });
    }, 700);
  };

  if (status === "success") {
    return (
      <div
        role="status"
        className="flex min-h-[340px] flex-col justify-center rounded-2xl bg-milk p-7 text-center text-espresso shadow-[0_40px_90px_-50px_rgba(0,0,0,0.7)] md:p-9"
      >
        <span className="mx-auto grid size-14 place-items-center rounded-full bg-olive text-cream">
          <Check className="size-6" aria-hidden="true" />
        </span>
        <h3 className="mt-5 font-display text-3xl tracking-[-0.02em]">
          You&apos;re on the list.
        </h3>
        <p className="mx-auto mt-2 max-w-xs text-sm leading-6 text-espresso/65">
          Your first pour is on us. Show this screen at the bar during opening
          month — and say hello.
        </p>
        <DirectionsLink
          location="signup_success"
          className="mx-auto mt-6 px-6 py-3.5"
        />
        <button
          type="button"
          onClick={reset}
          className="mt-4 text-[11px] text-espresso/65 underline underline-offset-4 transition-colors hover:text-espresso"
        >
          Use a different email
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-milk p-6 text-espresso shadow-[0_40px_90px_-50px_rgba(0,0,0,0.7)] md:p-8">
      <p className="eyebrow text-[9px] text-ember-deep">Opening month</p>
      <h3 className="mt-2 font-display text-3xl leading-none tracking-[-0.02em]">
        Get on the list
      </h3>
      <p className="mt-2 text-sm leading-6 text-espresso/65">
        One free pour, and one or two good notes a month.
      </p>

      <form onSubmit={onSubmit} noValidate className="mt-6">
        <div className="hidden" aria-hidden="true">
          <label htmlFor="company">Company</label>
          <input
            id="company"
            name="company"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={honeypot}
            onChange={(event) => setHoneypot(event.target.value)}
          />
        </div>

        <label
          htmlFor={emailId}
          className="text-[10px] font-semibold uppercase tracking-[0.14em] text-espresso/65"
        >
          Email address
        </label>
        <div className="mt-1.5 flex flex-col gap-2 sm:flex-row">
          <input
            id={emailId}
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="you@example.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            aria-invalid={Boolean(error)}
            className="h-12 min-w-0 flex-1 rounded-full border border-espresso/15 bg-cream/60 px-4 text-sm text-espresso outline-none transition-colors placeholder:text-espresso/45 focus:border-ember"
          />
          <button
            type="submit"
            disabled={status === "submitting"}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-espresso px-5 text-xs font-semibold tracking-[0.04em] text-cream transition-colors hover:bg-ink disabled:cursor-wait disabled:opacity-70"
          >
            {status === "submitting" ? (
              <>
                <Loader2 className="size-4 animate-spin" aria-hidden="true" />
                Joining
              </>
            ) : (
              <>
                Claim my pour
                <ArrowRight className="size-4" aria-hidden="true" />
              </>
            )}
          </button>
        </div>

        <label className="mt-4 flex cursor-pointer items-start gap-2.5 text-[11px] leading-5 text-espresso/65">
          <input
            type="checkbox"
            checked={wantsSms}
            onChange={(event) => setWantsSms(event.target.checked)}
            className="mt-0.5 size-4 shrink-0 accent-[#bf5b2b]"
          />
          <span>
            Text me about new roasts and late nights.{" "}
            <span className="text-espresso/65">(optional)</span>
          </span>
        </label>

        <div
          className={cx(
            "grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
            wantsSms ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
          )}
        >
          <div className="overflow-hidden" aria-hidden={!wantsSms} inert={!wantsSms}>
            <div className="pt-3">
              <label
                htmlFor={phoneId}
                className="text-[10px] font-semibold uppercase tracking-[0.14em] text-espresso/65"
              >
                Mobile number
              </label>
              <input
                id={phoneId}
                name="phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                placeholder="(503) 555-0123"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                className="mt-1.5 h-11 w-full rounded-full border border-espresso/15 bg-cream/60 px-4 text-sm outline-none transition-colors placeholder:text-espresso/45 focus:border-ember"
              />
              <p className="mt-2 text-[10px] leading-4 text-espresso/65">
                Message frequency varies. Reply STOP to opt out. Consent is not
                a condition of entry.
              </p>
            </div>
          </div>
        </div>

        {error && (
          <p role="alert" className="mt-3 text-xs font-medium text-ember-deep">
            {error}
          </p>
        )}

        <p className="mt-4 text-[10px] leading-4 text-espresso/65">
          By joining you agree to our{" "}
          <a
            href="/privacy"
            className="underline underline-offset-2 hover:text-espresso"
          >
            privacy policy
          </a>
          . One email a month, max. Unsubscribe anytime.
        </p>
      </form>
    </div>
  );
}
