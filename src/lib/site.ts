export const site = {
  name: "Ember & Oak",
  legalName: "Ember & Oak Coffee Roasters",
  tagline: "Good coffee. Better room.",
  description:
    "A roastery and café built for slow mornings, long conversations, and the kind of light you want to sit in.",
  address: {
    street: "1122 SE Division St",
    city: "Portland",
    region: "OR",
    postalCode: "97202",
    neighborhood: "SE Division",
    country: "US",
    lat: 45.5048,
    lng: -122.6547,
    landmark: "Two doors down from the old movie house.",
  },
  phone: "(503) 555-0142",
  phoneHref: "tel:+15035550142",
  email: "hello@emberandoak.coffee",
  instagram: "https://instagram.com/emberandoak.coffee",
  instagramHandle: "@emberandoak.coffee",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://emberandoak.coffee",
  timeZone: "America/Los_Angeles",
} as const;

export const navLinks = [
  { label: "The Room", href: "#room" },
  { label: "Coffee", href: "#coffee" },
  { label: "People", href: "#people" },
  { label: "Visit", href: "#visit" },
] as const;

export type DayHours = {
  day: string;
  short: string;
  open: number;
  close: number;
};

/** Sunday-first, matching Date#getDay(). Times are minutes after midnight, store-local. */
export const hours: DayHours[] = [
  { day: "Sunday", short: "Sun", open: 7 * 60, close: 16 * 60 },
  { day: "Monday", short: "Mon", open: 7 * 60, close: 18 * 60 },
  { day: "Tuesday", short: "Tue", open: 7 * 60, close: 18 * 60 },
  { day: "Wednesday", short: "Wed", open: 7 * 60, close: 18 * 60 },
  { day: "Thursday", short: "Thu", open: 7 * 60, close: 18 * 60 },
  { day: "Friday", short: "Fri", open: 7 * 60, close: 18 * 60 },
  { day: "Saturday", short: "Sat", open: 7 * 60, close: 19 * 60 },
];

/** Monday-first for display. */
export const hoursByWeek = [1, 2, 3, 4, 5, 6, 0].map((i) => hours[i]);

export const hoursSummary =
  "Mon–Fri 7am–6pm · Sat 7am–7pm · Sun 7am–4pm";

export function formatTime(minutes: number) {
  const h24 = Math.floor(minutes / 60);
  const m = minutes % 60;
  const suffix = h24 >= 12 ? "pm" : "am";
  const h = h24 % 12 === 0 ? 12 : h24 % 12;
  return m === 0 ? `${h}${suffix}` : `${h}:${String(m).padStart(2, "0")}${suffix}`;
}

export type OpenState = {
  isOpen: boolean;
  label: string;
  today: DayHours;
  minutes: number;
};

/**
 * Store-local open/closed state with the next meaningful transition.
 * Computed on the client so it stays honest as the day moves.
 */
export function getOpenState(now: Date = new Date()): OpenState {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: site.timeZone,
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(now);

  const weekday = parts.find((p) => p.type === "weekday")?.value ?? "Monday";
  const hour = Number(parts.find((p) => p.type === "hour")?.value ?? "0");
  const minute = Number(parts.find((p) => p.type === "minute")?.value ?? "0");
  const minutes = hour * 60 + minute;

  const today = hours.find((d) => d.day === weekday) ?? hours[1];
  const todayIndex = hours.findIndex((d) => d.day === today.day);

  if (minutes >= today.open && minutes < today.close) {
    return {
      isOpen: true,
      label: `Open now · until ${formatTime(today.close)}`,
      today,
      minutes,
    };
  }

  if (minutes < today.open) {
    return {
      isOpen: false,
      label: `Closed · opens ${formatTime(today.open)}`,
      today,
      minutes,
    };
  }

  for (let offset = 1; offset <= 7; offset++) {
    const next = hours[(todayIndex + offset) % 7];
    if (next.open === 0) continue;
    const when = offset === 1 ? "tomorrow" : next.short;
    return {
      isOpen: false,
      label: `Closed · opens ${when} ${formatTime(next.open)}`,
      today,
      minutes,
    };
  }

  return { isOpen: false, label: "Closed", today, minutes };
}

export const getDirectionsHref = (apple = false) => {
  const destination = encodeURIComponent(
    `${site.name}, ${site.address.street}, ${site.address.city}, ${site.address.region} ${site.address.postalCode}`,
  );
  return apple
    ? `https://maps.apple.com/?daddr=${destination}`
    : `https://www.google.com/maps/dir/?api=1&destination=${destination}`;
};

export const fullAddress = `${site.address.street}, ${site.address.city}, ${site.address.region} ${site.address.postalCode}`;

export const people = [
  {
    name: "Nadia",
    role: "Head barista",
    note: "Will talk your ear off about Ethiopian naturals.",
    image: "/images/person-nadia.jpg",
    alt: "Nadia, head barista, pouring milk into a cup behind the bar.",
  },
  {
    name: "Marcus",
    role: "Roaster",
    note: "Roasts Tuesdays. Bring questions.",
    image: "/images/person-marcus.jpg",
    alt: "Marcus, roaster, standing behind the wooden pass in an apron.",
  },
  {
    name: "Jules",
    role: "Floor",
    note: "Knows your order by visit three.",
    image: "/images/person-jules.jpg",
    alt: "Jules at the grinder in warm afternoon light.",
  },
] as const;

export const coffees = [
  {
    name: "House Espresso",
    note: "Dark chocolate, orange peel, a finish that hangs around.",
    origin: "Brazil + Ethiopia",
    price: "$4",
    featured: true,
  },
  {
    name: "Single Origin",
    note: "This week: washed Kenyan. Blackcurrant, cane sugar, bright.",
    origin: "Nyeri, Kenya",
    price: "$5",
    featured: false,
  },
  {
    name: "Filter",
    note: "Clean, quiet, and gone too fast.",
    origin: "House blend",
    price: "$4",
    featured: false,
  },
] as const;

export const weeklyMenu = [
  {
    name: "Ethiopia · Guji",
    process: "Natural · heirloom",
    note: "Blueberry, jasmine, apricot",
  },
  {
    name: "Kenya · Nyeri",
    process: "Washed · SL28",
    note: "Blackcurrant, cane sugar, bright",
  },
  {
    name: "Colombia · Huila",
    process: "Washed · pink bourbon",
    note: "Red apple, panela, cocoa",
  },
  {
    name: "Decaf · Colombia",
    process: "Sugarcane process",
    note: "Plum, molasses, round",
  },
];

export const marqueeItems = [
  "Roasted in-house",
  "Open 7 days",
  "Single origin on bar",
  "Dogs welcome",
  "Walk-ins only",
  "Seats by the window",
];
