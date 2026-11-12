"use client";

import { useEffect, useRef, useState } from "react";
import "leaflet/dist/leaflet.css";
import { MapPin } from "lucide-react";
import { getDirectionsHref, site } from "@/lib/site";
import { track } from "@/lib/analytics";

export default function StoreMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState(false);
  const [interacted, setInteracted] = useState(false);

  useEffect(() => {
    let map: import("leaflet").Map | undefined;
    let cancelled = false;
    let resizeTimer: number | undefined;

    const startedAt = performance.now();

    const init = async () => {
      try {
        const L = (await import("leaflet")).default;
        if (cancelled || !containerRef.current) return;

        map = L.map(containerRef.current, {
          center: [site.address.lat, site.address.lng],
          zoom: 16,
          zoomControl: false,
          scrollWheelZoom: false,
          zoomSnap: 0.5,
          attributionControl: true,
        });

        map.attributionControl.setPrefix(false);

        const cartoKey = process.env.NEXT_PUBLIC_CARTO_KEY;

        // CARTO Positron gives us a quiet, label-light canvas to warm up with CSS.
        // Without a key we fall back to Esri's Light Gray Canvas so the map still works.
        const tiles = cartoKey
          ? {
              url: `https://basemaps.cartocdn.com/rastertiles/light_all/{z}/{x}/{y}{r}.png?key=${cartoKey}`,
              attribution:
                '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/attributions" target="_blank" rel="noopener">CARTO</a>',
              maxZoom: 20,
            }
          : {
              url: "https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}",
              attribution:
                'Tiles &copy; <a href="https://www.esri.com" target="_blank" rel="noopener">Esri</a> — Esri, DeLorme, NAVTEQ',
              maxZoom: 16,
            };

        const tileLayer = L.tileLayer(tiles.url, {
          attribution: tiles.attribution,
          maxZoom: tiles.maxZoom,
          detectRetina: true,
          className: "eo-tiles",
        }).addTo(map);

        tileLayer.once("load", () => {
          track("map_loaded", {
            load_time_ms: Math.round(performance.now() - startedAt),
          });
        });

        L.control.zoom({ position: "bottomright" }).addTo(map);

        const icon = L.divIcon({
          className: "",
          html: `
            <div class="eo-marker">
              <span class="eo-marker-ring"></span>
              <span class="eo-marker-ring"></span>
              <span class="eo-marker-dot">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M4 9.5h11v5a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-5Z"/>
                  <path d="M15 11h1.4a2.4 2.4 0 0 1 0 4.8H15"/>
                  <path d="M7 6c0-1 1-1.2 1-2M11 6c0-1 1-1.2 1-2"/>
                </svg>
              </span>
            </div>`,
          iconSize: [46, 46],
          iconAnchor: [23, 23],
          popupAnchor: [0, -21],
        });

        const marker = L.marker([site.address.lat, site.address.lng], {
          icon,
          title: "Ember & Oak",
          alt: "Ember & Oak coffee shop at 1122 SE Division Street",
          keyboard: true,
        }).addTo(map);

        marker.on("click", () => track("map_marker_click"));

        marker.bindTooltip("Ember & Oak", {
          permanent: true,
          direction: "right",
          offset: [19, 0],
          className: "eo-label",
          opacity: 1,
        });

        marker.bindPopup(
          `<div style="font-family:var(--font-sans);color:#24160f">
            <p style="margin:0 0 6px;font-size:9px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:#a2471d">Ember &amp; Oak</p>
            <p style="margin:0;font-family:var(--font-display);font-size:22px;line-height:1.05">1122 SE Division St</p>
            <p style="margin:4px 0 12px;font-size:11px;color:rgba(36,22,15,.55)">Portland, OR 97202</p>
            <a href="${getDirectionsHref()}" target="_blank" rel="noopener noreferrer" style="display:inline-flex;align-items:center;gap:6px;border-radius:999px;background:#a2471d;color:#f3e8d7;padding:8px 14px;font-size:11px;font-weight:600;text-decoration:none">Get directions →</a>
          </div>`,
          {
            closeButton: true,
            maxWidth: 260,
            autoPanPadding: [24, 24],
          },
        );

        let trackedInteraction = false;
        const markInteracted = (gesture: string) => {
          setInteracted(true);
          if (!trackedInteraction) {
            trackedInteraction = true;
            track("map_interact", { gesture });
          }
        };

        const enableScroll = () => {
          map?.scrollWheelZoom.enable();
          markInteracted("click");
        };

        map.once("click", enableScroll);
        map.on("dragstart", () => markInteracted("drag"));
        map.on("zoomstart", () => markInteracted("zoom"));
        map.getContainer().addEventListener("focus", enableScroll);

        resizeTimer = window.setTimeout(() => map?.invalidateSize(), 250);
      } catch (err) {
        console.error("Map failed to initialise", err);
        if (!cancelled) setError(true);
      }
    };

    init();

    return () => {
      cancelled = true;
      if (resizeTimer) window.clearTimeout(resizeTimer);
      map?.remove();
    };
  }, []);

  if (error) {
    return (
      <div className="grid h-full place-items-center bg-cream p-8 text-center">
        <div className="max-w-xs">
          <MapPin className="mx-auto size-7 text-ember" aria-hidden="true" />
          <p className="mt-4 font-display text-2xl">The map took a coffee break.</p>
          <p className="mt-2 text-sm leading-6 text-espresso/65">
            We&apos;re at {site.address.street}, {site.address.city}.
          </p>
          <a
            href={getDirectionsHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex rounded-full bg-ember-deep px-5 py-3 text-xs font-semibold text-cream transition-colors hover:bg-[#8f3c17]"
          >
            Open in Maps
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-full w-full">
      <div
        ref={containerRef}
        className="h-full w-full"
        role="region"
        aria-label="Map showing Ember & Oak at 1122 SE Division Street, Portland, Oregon"
      />

      <div className="pointer-events-none absolute left-3 top-3 z-[500] rounded-full border border-espresso/15 bg-milk/90 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-espresso/65 shadow-sm backdrop-blur">
        SE Division · Portland
      </div>

      {!interacted && (
        <div className="pointer-events-none absolute bottom-4 left-3 z-[500] rounded-full border border-espresso/15 bg-milk/90 px-3 py-1.5 text-[9px] font-medium tracking-[0.02em] text-espresso/65 shadow-sm backdrop-blur">
          Click to zoom · drag to explore
        </div>
      )}
    </div>
  );
}
