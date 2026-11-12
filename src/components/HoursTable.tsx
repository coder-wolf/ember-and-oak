"use client";

import { useSyncExternalStore } from "react";
import { formatTime, hoursByWeek, site } from "@/lib/site";
import { cx } from "@/lib/utils";

const subscribe = () => () => {};

function getToday() {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: site.timeZone,
    weekday: "long",
  }).formatToParts(new Date());
  return parts.find((part) => part.type === "weekday")?.value ?? null;
}

export function HoursTable() {
  // Server snapshot is null, so the first paint stays deterministic per timezone.
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);
  const today = mounted ? getToday() : null;

  return (
    <table className="mt-4 w-full text-xs">
      <caption className="sr-only">Opening hours at Ember &amp; Oak</caption>
      <tbody>
        {hoursByWeek.map((day) => {
          const isToday = today === day.day;
          return (
            <tr
              key={day.day}
              className={cx(
                "border-b border-espresso/10 last:border-0",
                isToday ? "text-espresso" : "text-espresso/70",
              )}
            >
              <th
                scope="row"
                className={cx(
                  "py-[7px] text-left font-normal",
                  isToday && "font-semibold",
                )}
              >
                {day.day}
              </th>
              <td
                className={cx(
                  "py-[7px] text-right tabular-nums",
                  isToday && "font-semibold",
                )}
              >
                {formatTime(day.open)} – {formatTime(day.close)}
              </td>
              <td className="w-14 py-[7px] text-right">
                {isToday && (
                  <span className="inline-flex items-center gap-1.5 text-[9px] font-semibold uppercase tracking-[0.12em] text-ember-deep">
                    <span className="size-1 rounded-full bg-ember" />
                    today
                  </span>
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
