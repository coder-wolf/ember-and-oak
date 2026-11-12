# Product Requirements Document — Ember & Oak Landing Page

**Product:** Ember & Oak Coffee Roasters — flagship store landing page
**Version:** 1.0 (Draft)
**Owner:** Product / Brand
**Status:** Ready for design + engineering estimation
**Last updated:** November 12, 2026

---

## 1. Overview

Ember & Oak is a new specialty coffee house opening its first flagship location. It already has a small but devoted following from pop-ups and a wholesale roastery; the flagship turns that cult reputation into a physical destination. This landing page is the digital front door: a single, immersive page that makes someone who has never heard of us want to walk in — and gives them every reason and every tool to do it today.

The page is not an e-commerce store or a full site. It is one beautifully art-directed scroll that answers three questions in order:

1. **What is this place?** (identity, atmosphere, coffee)
2. **Why should I care?** (roast, craft, people, community)
3. **How do I get there, right now?** (map, hours, directions)

Success is measured in *visits*, not clicks.

---

## 2. Goals & Non-Goals

### Goals

| # | Goal | Why it matters |
|---|------|----------------|
| G1 | Convert curious visitors into first-time walk-ins | New store, zero foot-traffic history; the page must create demand |
| G2 | Communicate a distinctive, premium-but-welcoming brand in under 10 seconds | Category is crowded with sameness; we win on atmosphere |
| G3 | Make finding and visiting the store effortless on mobile | Majority of traffic and nearly all "visit now" intent is mobile |
| G4 | Build a CRM/audience asset (email + SMS) from day one | Enables opening-week events, loyalty, and repeat visits |
| G5 | Set a reusable visual and technical foundation for the brand's future site | Avoid a throwaway one-off build |

### Non-Goals (v1)

- Online ordering, menus with live pricing, or table reservations
- Multi-location store locator (one location only at launch; the map is built to extend)
- Blog, press page, or careers section
- User accounts, loyalty points dashboard, or e-commerce
- Localization beyond English

---

## 3. Target Audience

**Primary — "The Neighborhood Curious" (≈60% of traffic)**
25–40, lives or works within 2 miles, discovers via Instagram, local press, or walking past. Mobile-first, visually driven, low patience. Cares about: does it look good, is it good coffee, will I feel comfortable alone with a laptop.

**Secondary — "The Coffee Pilgrim" (≈25%)**
28–45, travels for good roasters, follows specialty coffee culture. Cares about: origin, roast profile, brewing method, who's behind the counter. Will read the story section closely.

**Tertiary — "The Remote Worker / Social Visitor" (≈15%)**
Looking for a third place: wifi, seating, noise level, whether it's good for a meeting or a first date. Cares about: hours, atmosphere, seating, "can I stay."

### Jobs to be done

- "I want a beautiful place to spend an hour this afternoon." → show atmosphere + hours + map
- "I want to know if this coffee is actually good." → show craft, sourcing, barista credibility
- "I'm nearby — where exactly is it and is it open?" → map, address, open-now status, directions

---

## 4. Positioning & Messaging

**Brand idea:** *Slow coffee, warm room.* A roastery that treats coffee like a craft and the café like a living room.

**Tone of voice:** Warm, confident, a little playful. Short sentences. Sensory, never snobby. We say "come sit" not "experience the ultimate coffee journey."

**Headline directions (to be A/B tested):**
- A: "Good coffee. Better room."
- B: "Roasted here. Poured for you."
- C: "Come for the coffee. Stay for the light."

**Supporting proof points (must appear above or near the fold):**
- Single-origin + house espresso roasted in-house weekly
- Direct-trade relationships with named farms
- Opening offer: first pour on us during opening month (email capture)
- Walk-in friendly, no reservation needed, open 7 days

**Differentiators to visually express:**
- The room itself (light, materials, plants, art) — photography is a primary asset, not decoration
- The roast (visible roaster, bags, process)
- The people (real baristas, names, faces)

---

## 5. Success Metrics

| Metric | Definition | Launch target (90 days) |
|--------|------------|--------------------------|
| Primary conversion | "Get directions" tap / page view | ≥ 18% on mobile |
| Secondary conversion | Email or SMS signup / page view | ≥ 6% |
| Scroll depth | % reaching map section | ≥ 55% |
| Engagement | Avg. time on page | ≥ 75 seconds |
| Bounce | Single-page session < 10s | ≤ 35% |
| Map interaction | Marker tap, zoom, or directions click | ≥ 25% of map views |
| Performance | LCP (p75, mobile) | ≤ 2.0s |
| Quality | Lighthouse mobile performance | ≥ 90 |

Instrumentation: privacy-friendly analytics (Plausible or PostHog) + Google Search Console. Events defined in §11.

---

## 6. Information Architecture

Single scrolling page, seven sections. Sticky header with a persistent **"Get directions"** CTA on mobile.

```
Header (sticky, translucent → solid on scroll)
   Logo · Story · Coffee · Visit · [Get directions]

1. Hero — full-bleed image, headline, subline, dual CTA
2. Marquee / ticker — "ROASTED IN-HOUSE · OPEN 7 DAYS · ..."
3. The Room — art-directed photo collage + short manifesto
4. The Coffee — three cards (House Espresso, Single Origin, Filter) + roast note
5. The People — barista portraits, one-line bios (community proof)
6. Visit — MAP, address, hours w/ open-now, transport, parking, accessibility
7. Signup + Footer — first-pour offer, social links, small print
```

Sticky mobile bottom bar (appears after hero): **Directions** (primary) · **Hours** · **Sign up**

---

## 7. Section Requirements

### 7.1 Header
- Transparent over hero; on scroll > 80px, transitions to warm cream background with subtle blur and shadow.
- Left: wordmark (SVG). Center/right: anchor links with smooth scroll (respect `prefers-reduced-motion`).
- CTA button: "Get directions" → scrolls to map and pulses the marker once.
- Mobile: logo + directions icon button + hamburger opening a full-screen menu with large type.
- Must remain reachable by keyboard; skip-to-content link.

### 7.2 Hero
- Full-viewport (100svh, min 640px) background: looped, muted, compressed video (≤ 3.5 MB, poster fallback) **or** a single hero photograph on slow connections / reduced data. No autoplay audio.
- Overlay: warm radial gradient at 25–40% for text legibility (must pass 4.5:1 for body, 3:1 for 24px+ headline).
- Content: eyebrow ("Now open · [Neighborhood]"), H1, one-sentence subline, primary CTA **Get directions**, secondary ghost CTA **See the room**.
- Small "Open now · until 7pm" live status chip.
- Bottom edge: subtle scroll cue + handwritten-style annotation ("we're just around the corner →") as an art element.
- Parallax/ken-burns motion is allowed but must disable under reduced motion and on low-end devices.

### 7.3 Marquee ticker
- Infinite horizontal ticker, 48–64px display type, alternating filled and outlined type, coffee-brown on cream.
- Content: rotating brand facts. Pauses on hover/focus; static under reduced motion.

### 7.4 The Room
- Editorial layout, not a grid of equal cards: asymmetric photo collage (2 large, 2 small, 1 portrait), intentional overlap, 4–8px corner radii, film-grain overlay at very low opacity.
- Short manifesto (≤ 45 words) in large serif, set beside the images.
- Optional: 3 stat chips ("48 seats", "Sun till 4", "Dogs welcome") — human, specific, not corporate.
- Photos must be real store photography, shot list specified in §9.

### 7.5 The Coffee
- Three cards, minimal: name, one-line taste note, origin/process, price band ("$4–5").
- One card featured (House Espresso) with a filled warm background.
- Micro-interaction: card lifts 2px + tint shift on hover; on mobile, press state only.
- Link: "What's on the bar this week" → inline expandable panel (no new page). Content managed via CMS.
- Optional decorative element: hand-drawn steam line or coffee-ring stain SVG that animates on scroll-in once.

### 7.6 The People
- Horizontal scroll-snap strip on mobile, 3-up row on desktop.
- Each: portrait (4:5), first name, role, one sentence ("Nadia — head barista. Will talk your ear off about Ethiopian naturals.").
- Purpose: trust + warmth; makes the room feel inhabited.

### 7.7 Visit (the map section) — **core requirement**
- 50/50 split on desktop: left = map, right = practical info. On mobile, info first, map second (or sticky mini-map), decision to be validated in usability test.
- **Map:**
  - Custom-styled interactive map (Mapbox GL JS preferred; Google Maps JS as fallback) using a bespoke warm map style: cream land, muted olive parks, brown-grey roads, no POI clutter beyond a few tasteful labels. Style must feel like the brand, not a default map.
  - Custom pin: coffee-cup or flame-and-oak mark in brand color with a soft pulse ring; label chip "Ember & Oak" on load.
  - Interactions: pan/zoom, marker click opens a small card (name, address, "Open now", directions button). Scroll-zoom disabled by default; enabled after click/tap to avoid scroll trapping. Keyboard-accessible controls (+/-/reset) and marker focusable.
  - Buttons: **Get directions** (deep-links to Apple Maps on iOS, Google Maps elsewhere), **Copy address** (with toast confirmation), **Share location** (Web Share API w/ clipboard fallback).
  - Static image fallback with a "View larger map" link if WebGL fails or data-saver is on.
  - Dark-mode-aware: map style has a mild evening variant between 6pm–6am, or a warm-dim overlay.
- **Info block:**
  - Address, neighborhood, and cross-streets in plain language ("Two doors down from the old theater").
  - Hours table (Mon–Sun), today highlighted, live open/closed pill, next opening time when closed.
  - Transit & parking: nearest train/bus, bike racks, lot/street notes. Icon + one line each.
  - Accessibility: step-free entry, accessible restroom, seating notes.
  - Contact: phone (tel:), email (mailto:), Instagram.
  - **No reservation form.** Walk-ins only, stated explicitly.

### 7.8 Signup + Footer
- "First pour's on us." Opening-month offer: email (required) + optional phone for SMS.
- Inline validation, clear consent copy, link to privacy policy. Success state replaces form with a warm confirmation and a directions CTA.
- Footer: wordmark, address, hours summary, socials (Instagram primary), newsletter link, privacy/terms, "Made in [City]" line.
- No sitemap bloat; this is a landing page.

---

## 8. Design Direction

### 8.1 Principles
1. **Warm, not rustic.** Contemporary editorial warmth — think ceramics and linen, not burlap and chalkboards.
2. **One idea per screen.** Generous whitespace, big type, few elements.
3. **Photography leads.** The room sells the room; UI stays quiet around it.
4. **Craft in the details.** Grain, imperfect edges, hand-drawn accents used sparingly (max 2 per viewport).
5. **Motion with manners.** Everything settles; nothing bounces for attention.

### 8.2 Color

| Token | Hex | Use |
|-------|-----|-----|
| Espresso | `#2A1B14` | Primary text, dark sections |
| Crema | `#F6ECDD` | Page background |
| Milk | `#FBF7F1` | Cards / elevated surfaces |
| Ember | `#C4622D` | Primary CTA, accents |
| Honey | `#E0A458` | Highlights, hover, map pin glow |
| Olive | `#5C6652` | Secondary accent, tags |
| Ink | `#1A1310` | Overlays, footer |

Contrast: Ember on Crema must be checked (use Espresso text on Ember buttons, not white). Never rely on color alone for state.

### 8.3 Type
- **Display:** a high-contrast serif with character (e.g., Fraunces, Instrument Serif, or GT Alpina) — headlines and pull quotes.
- **Text/UI:** a warm geometric or humanist sans (e.g., Satoshi, General Sans, or Söhne) — body, buttons, labels.
- **Accent:** one handwritten/script face for annotations only (max 1 per section), self-hosted, subset.
- Fluid type scale via `clamp()`; body 16–18px; line length 60–75ch; headlines up to 120px on desktop.

### 8.4 Layout & motion
- 12-column desktop grid, 24px gutters, max content 1280px; 4-column mobile, 20px margins.
- Breakpoints: 480 / 768 / 1024 / 1440.
- Section rhythm: 96–160px vertical padding desktop, 64–88px mobile.
- Easing: `cubic-bezier(0.22, 1, 0.36, 1)`, 300–600ms. Reveal-on-scroll: 16px rise + fade, 60ms stagger, once only.
- Full `prefers-reduced-motion` path (no parallax, no marquee motion, no autoplay video).
- Texture: 3–5% film grain overlay; subtle paper texture on cream sections. Do not sacrifice text contrast for texture.

### 8.5 Component states
Every interactive element needs default / hover / focus-visible / active / disabled. Focus ring: 2px Ember offset 3px. Buttons: 44px min touch target, 999px pill radius for primary, 4px for secondary editorial links with hand-drawn underline.

---

## 9. Content & Assets

**Photography shot list (must be shot before build complete):**
1. Hero: wide interior, morning light, one person at the bar (or empty room if stronger)
2. Roaster in action, hands and beans (macro)
3. Pour-over being poured, steam visible
4. Espresso machine steam wand
5. Two guests talking, candid, mid-laughter
6. Barista portraits ×3, consistent light and background
7. Exterior at dusk with sign glowing (for social/OG)
8. Detail: ceramics, menu card, plants, window light

**Video:** 10–15s seamless loop, 1920×1080, H.264 + WebM, ≤ 3.5 MB, no audio, plus poster frame.

**Copy:** All copy supplied by brand, final approval before build. Placeholders must be clearly marked in CMS and blocked from production publish.

**Alt text:** Required for every image; written by content, not engineering. Decorative art marked `aria-hidden`.

---

## 10. Technical Requirements

- **Stack:** Next.js (App Router) or Astro, TypeScript, Tailwind + CSS custom properties for tokens. Static generation; no server state required. Deploy on Vercel.
- **CMS:** Headless (Sanity recommended) for hours, menu cards, people, and offer copy — so the shop can update hours without a deploy.
- **Map:** Leaflet + CARTO Positron raster tiles, CSS-graded to the brand palette; API key supplied via `NEXT_PUBLIC_CARTO_KEY` and restricted by referrer. Esri Light Gray Canvas is the no-key fallback. Lazy-loaded on intersection; the map bundle must not load until the Visit section is within 600px of the viewport.
- **Images:** AVIF/WebP with responsive `srcset`, explicit width/height, LQIP blur placeholders. Hero image preloaded; everything else lazy.
- **Fonts:** self-hosted, subset to Latin, `font-display: swap`, preload the display face only.
- **Forms:** serverless endpoint, honeypot + rate limit, double opt-in for email, TCPA-compliant SMS consent checkbox (unchecked by default).
- **Analytics:** Plausible/PostHog, cookie-banner only if required by jurisdiction; no third-party ad pixels.
- **SEO:** title/description, canonical, Open Graph + Twitter cards, `LocalBusiness` (CafeOrCoffeeShop) JSON-LD with address, geo, openingHoursSpecification, priceRange, sameAs, and `hasMenu` when available. Sitemap + robots.
- **Performance budget:** JS ≤ 180 KB gzipped initial, LCP ≤ 2.0s p75 mobile, CLS ≤ 0.05, INP ≤ 200ms, total page weight ≤ 1.5 MB initial viewport.
- **Accessibility:** WCAG 2.2 AA. Keyboard-operable map controls and marker, visible focus, semantic landmarks, form labels, error announcements via `aria-live`, reduced-motion support, 200% zoom without loss.
- **Browser support:** last 2 versions of Chrome, Safari, Firefox, Edge; iOS Safari 16+; graceful degradation for no-WebGL.
- **Security/privacy:** HTTPS, no secrets client-side beyond restricted map token, privacy policy linked at every form.

---

## 11. Analytics Events

| Event | Trigger | Properties |
|-------|---------|------------|
| `page_view` | Load | referrer, device, utm_* |
| `cta_directions_click` | Any directions CTA | location (`hero`, `header`, `map`, `footer`) |
| `map_loaded` | Map init | load_time_ms |
| `map_marker_click` | Marker tap | — |
| `map_interact` | Pan/zoom | gesture type |
| `copy_address` | Copy button | — |
| `hours_view` | Hours block in viewport 1s | open_state |
| `signup_submit` | Form submit | channel (`email`/`sms`), success |
| `scroll_depth` | 25/50/75/100% | percent |
| `menu_expand` | Weekly menu panel | — |

---

## 12. Acceptance Criteria

- [ ] All seven sections present and match approved design at 375, 768, 1280, 1440 widths.
- [ ] Map renders with custom style, custom marker, and all three actions (directions, copy, share) work on iOS Safari, Android Chrome, desktop Chrome/Safari.
- [ ] Directions deep-link opens the correct native/Google Maps app with the exact address.
- [ ] Open/closed status is correct against store hours in the visitor's local timezone and updates without reload.
- [ ] Static map fallback verified with WebGL disabled.
- [ ] Email + SMS signup validates, stores consent timestamp, and shows success state.
- [ ] Lighthouse mobile: Performance ≥ 90, Accessibility ≥ 95, SEO ≥ 95, Best Practices ≥ 95.
- [ ] Full keyboard pass: skip link → nav → CTAs → map controls → form, with visible focus.
- [ ] `prefers-reduced-motion` disables hero video motion, parallax, and marquee.
- [ ] All copy final, all images have alt text, no lorem ipsum or placeholder links in production.
- [ ] Structured data validates in Rich Results Test; OG preview renders correctly in Slack, iMessage, Instagram DM.
- [ ] 404 and form-error states exist and are on-brand.

---

## 13. Timeline (indicative)

| Week | Work |
|------|------|
| 1 | PRD sign-off, content inventory, photo/video shoot scheduled |
| 2 | Art direction, wireframes, map style exploration |
| 3 | High-fidelity design (desktop + mobile), motion spec |
| 4 | Build: layout, CMS, hero, sections |
| 5 | Build: map, form, analytics, SEO; asset integration |
| 6 | QA, accessibility audit, performance pass, copy edit |
| 7 | Soft launch + analytics verification; iterate on hero + CTA |
| 8 | Public launch, opening-week campaign live |

---

## 14. Risks & Mitigations

| Risk | Impact | Mitigation |
|------|--------|------------|
| Photography not shot in time | Page falls flat; photography is the product | Book shoot in week 1; design with a photography-first fallback plan and a temporary art-directed placeholder set |
| Hero video hurts mobile performance | Bounce, poor LCP | Poster-first, load video only on ≥ 4G + non-reduced-motion; hard 3.5 MB cap |
| Map bundle bloats page | Slow LCP | Lazy-load on intersection; static fallback; monitor budget in CI |
| Hours drift out of date | Erodes trust, wasted trips | CMS-managed hours + open-now logic + weekly ops reminder; holiday override field |
| Offer attracts freebie-seekers, not regulars | Low repeat rate | Capture email at signup, follow-up sequence, staff capture at counter |
| Over-designed motion alienates | Accessibility + usability | Reduced-motion path treated as a first-class design, not an afterthought |

---

## 15. Open Questions

1. Final brand name and wordmark — is "Ember & Oak" locked?
2. Exact opening date and opening-month offer terms (free drip? any drink? one per person?)
3. Do we have rights to use guest/barista likenesses in marketing? Consent forms needed.
4. Is a seasonal menu needed at launch, or is the three-card structure sufficient?
5. Preferred map provider — Mapbox (best custom styling) vs. Google (best familiarity/analytics)? Cost approval required.
6. SMS program: which provider, and is it in scope for launch or phase 2?
7. Do we need a secondary language for the immediate neighborhood?
8. Any landlord/neighborhood restrictions on exterior photography or signage in assets?

---

## 16. Appendix — Copy starter

**Hero eyebrow:** Now open · Eastside
**H1:** Good coffee. Better room.
**Sub:** A roastery and café built for slow mornings, long conversations, and the kind of light you want to sit in.
**CTAs:** Get directions · See the room
**Marquee:** ROASTED IN-HOUSE · OPEN 7 DAYS · DOGS WELCOME · SINGLE ORIGIN ON BAR · NO WIFI PASSWORDS, JUST ASK
**Room manifesto:** We built this room around one idea: coffee tastes better when you're not in a hurry. Come sit. Stay a while. The beans were roasted this week, the light is best at 9am, and there's always a seat if you look twice.
**Coffee cards:**
- House Espresso — "Dark chocolate, orange peel, a finish that hangs around." · Brazil + Ethiopia · $4
- Single Origin — "This week: washed Kenyan. Blackcurrant, cane sugar, bright." · rotating · $5
- Filter — "Clean, quiet, and gone too fast." · house blend · $4
**People:** Nadia, Head Barista — "Will talk your ear off about Ethiopian naturals." · Marcus, Roaster — "Roasts Tuesdays. Bring questions." · Jules, Floor — "Knows your order by visit three."
**Visit intro:** We're two doors down from the old theater, on the sunny side of the street. Walk in — no reservations, no fuss.
**Signup:** First pour's on us. Join the list and your first coffee is free during opening month.
**Footer line:** Ember & Oak Coffee Roasters · Roasted here. Poured for you.

---

*End of document.*


---

## 17. Implementation Notes (v1, built November 2026)

This section records how the build has interpreted the PRD so the doc and the code stay in step.

**Delivered**

- Next.js 16 App Router + React 19 + TypeScript + Tailwind CSS v4, statically prerendered.
- All seven page areas plus a sticky mobile directions bar and a minimal `/privacy` page.
- Leaflet + CARTO Positron map with a CSS-warmed custom skin, branded pin, permanent label, popup, keyboard controls, opt-in scroll zoom, lazy loading and an Esri fallback. The CARTO key is public, env-based and should be referrer-restricted.
- Store-local open/closed logic (`America/Los_Angeles`), live hours table, Apple/Google Maps deep links, copy-address and Web Share.
- Weekly menu accordion, email/SMS signup with validation, honeypot and success state, custom OG image, JSON-LD, sitemap, robots.
- Analytics event helper with the PRD event names, dispatched to `dataLayer`/Plausible if present.
- Accessibility pass: axe-core scan returns 0 violations on desktop and mobile; skip link, focus trap, reduced-motion support, AA-tuned text contrast.

**Deviations / deliberately deferred**

- **Hero:** still photography instead of a video loop, to protect mobile LCP and avoid a 3.5 MB asset on first paint. A video can be added behind the same poster/feature-flag treatment later.
- **CMS:** content lives in `src/lib/site.ts` rather than Sanity for v1. Hours and menu are typed and isolated so a CMS can replace the data layer without touching layout.
- **Signup:** front-end only — validates and shows success, but has no CRM endpoint yet. Double opt-in and TCPA review remain launch blockers.
- **Analytics:** adapter is in place but no provider key or consent banner is configured.
- **Photography and brand details:** stock placeholders and a fictional address/team. The page states this in the footer.
- **Map provider:** CARTO/Leaflet chosen over Mapbox because the visual style is bespoke via CSS and no WebGL bundle is required. Production traffic must stay within CARTO's plan or move to a licensed vector style.

**QA snapshot**

- Production build passes (`npm run build`), no console errors.
- Tested at 320, 390, 768, 1024, 1280 and 1440 widths; no horizontal overflow.
- Map load, marker popup, directions href, copy, accordion, form validation/success, mobile menu focus/Escape and sticky-bar visibility verified with Playwright.
- Throttled mobile profile (4× CPU, 1.6 Mbps, 150 ms RTT): LCP ≈ 2.1s, FCP ≈ 1.3s, CLS 0, ~578 KB initial transfer.
