"use client";

import { useEffect, useState } from "react";
import { Clock } from "lucide-react";
import { DirectionsLink } from "./DirectionsLink";
import { cx } from "@/lib/utils";

export function StickyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const doc = document.documentElement;
      const y = window.scrollY;
      const nearEnd =
        y + window.innerHeight > doc.scrollHeight - 440;
      setVisible(y > 520 && !nearEnd);
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      className={cx(
        "fixed inset-x-0 bottom-0 z-40 border-t border-espresso/15 bg-cream/95 px-3 pb-[max(10px,env(safe-area-inset-bottom))] pt-2.5 backdrop-blur-xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden",
        visible ? "translate-y-0" : "translate-y-full",
      )}
      aria-hidden={!visible}
      inert={!visible}
    >
      <div className="flex items-center gap-2">
        <DirectionsLink
          location="sticky_bar"
          className="h-11 flex-1 py-0 text-[11px]"
        />
        <a
          href="#visit"
          className="inline-flex h-11 shrink-0 items-center gap-2 rounded-full border border-espresso/20 px-4 text-[11px] font-semibold text-espresso/75 transition-colors hover:border-espresso/40 hover:text-espresso"
        >
          <Clock className="size-4" aria-hidden="true" />
          Hours
        </a>
      </div>
    </div>
  );
}
