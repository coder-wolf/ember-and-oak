import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Room } from "@/components/Room";
import { Coffee } from "@/components/Coffee";
import { People } from "@/components/People";
import { Visit } from "@/components/Visit";
import { Signup } from "@/components/Signup";
import { Footer } from "@/components/Footer";
import { StickyBar } from "@/components/StickyBar";
import { RevealInit } from "@/components/RevealInit";
import { ScrollDepth } from "@/components/ScrollDepth";
import { site, hoursByWeek, fullAddress } from "@/lib/site";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    name: site.legalName,
    url: site.url,
    image: `${site.url}/images/room-counter.jpg`,
    logo: `${site.url}/icon.svg`,
    description: site.description,
    telephone: "+1-503-555-0142",
    priceRange: "$$",
    servesCuisine: ["Coffee", "Pastries"],
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.address.lat,
      longitude: site.address.lng,
    },
    hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      fullAddress,
    )}`,
    sameAs: [site.instagram],
    acceptsReservations: false,
    openingHoursSpecification: hoursByWeek.map((day) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: day.day,
      opens: `${String(Math.floor(day.open / 60)).padStart(2, "0")}:00`,
      closes: `${String(Math.floor(day.close / 60)).padStart(2, "0")}:00`,
    })),
  };

  return (
    <>
      <a
        href="#main"
        className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-full bg-espresso px-5 py-3 text-xs font-semibold text-cream transition-transform focus:translate-y-0"
      >
        Skip to content
      </a>

      <Header />

      <main id="main">
        <Hero />
        <Marquee />
        <Room />
        <Coffee />
        <People />
        <Visit />
        <Signup />
      </main>

      <Footer />
      <StickyBar />
      <RevealInit />
      <ScrollDepth />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
