"use client";

import { useId, useState } from "react";
import { Plus } from "lucide-react";
import { weeklyMenu } from "@/lib/site";
import { track } from "@/lib/analytics";
import { cx } from "@/lib/utils";

export function MenuAccordion() {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  const toggle = () => {
    setOpen((value) => {
      if (!value) track("menu_expand");
      return !value;
    });
  };

  return (
    <div className="border-y border-cream/15">
      <button
        type="button"
        onClick={toggle}
        aria-expanded={open}
        aria-controls={panelId}
        className="group flex w-full items-center justify-between gap-6 py-7 text-left"
      >
        <span className="flex flex-col gap-1">
          <span className="eyebrow text-[9px] text-cream/60">This week</span>
          <span className="font-display text-3xl leading-none transition-colors group-hover:text-honey md:text-4xl">
            On the bar
          </span>
        </span>
        <span className="flex items-center gap-4">
          <span className="eyebrow hidden text-[9px] text-cream/60 sm:block">
            04 coffees
          </span>
          <span className="grid size-10 place-items-center rounded-full border border-cream/25 transition-colors group-hover:border-honey group-hover:text-honey">
            <Plus
              className={cx(
                "size-4 transition-transform duration-500",
                open && "rotate-45",
              )}
              aria-hidden="true"
            />
          </span>
        </span>
      </button>

      <div
        id={panelId}
        className={cx(
          "grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <div className="grid gap-x-12 gap-y-1 pb-4 sm:grid-cols-2">
            {weeklyMenu.map((coffee, i) => (
              <div
                key={coffee.name}
                className="group/row border-t border-cream/10 py-4 transition-colors hover:border-cream/25"
              >
                <div className="flex items-baseline gap-3">
                  <span className="font-sans text-[10px] tabular-nums tracking-[0.14em] text-cream/50">
                    0{i + 1}
                  </span>
                  <p className="font-display text-xl text-cream/90">
                    {coffee.name}
                  </p>
                </div>
                <p className="mt-0.5 pl-6 text-xs text-cream/60">
                  {coffee.process} — {coffee.note}
                </p>
              </div>
            ))}
          </div>
          <p className="pb-7 pt-3 font-hand text-xl text-honey/80">
            Roasted Tuesdays. While it lasts.
          </p>
        </div>
      </div>
    </div>
  );
}
