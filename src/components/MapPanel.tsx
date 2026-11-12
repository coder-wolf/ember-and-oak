"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { MapSkeleton } from "./MapSkeleton";

const StoreMap = dynamic(() => import("./StoreMap"), {
  ssr: false,
  loading: () => <MapSkeleton />,
});

export function MapPanel() {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      const timer = window.setTimeout(() => setShow(true), 0);
      return () => window.clearTimeout(timer);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      },
      { rootMargin: "600px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="h-full w-full">
      {show ? <StoreMap /> : <MapSkeleton />}
    </div>
  );
}
