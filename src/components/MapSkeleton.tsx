"use client";

import { MapPin } from "lucide-react";

export function MapSkeleton() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#e9ddc9]">
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(36,22,15,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(36,22,15,0.07) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
        aria-hidden="true"
      />
      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-3 text-espresso/50">
        <span className="grid size-11 place-items-center rounded-full border border-espresso/20 bg-milk/80">
          <MapPin className="size-5" aria-hidden="true" />
        </span>
        <p className="eyebrow text-[9px]">Finding the corner…</p>
      </div>
      <div className="absolute left-4 top-4 h-8 w-28 rounded-full bg-milk/60" />
    </div>
  );
}

