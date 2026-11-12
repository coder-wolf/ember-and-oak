import type { Metadata, Viewport } from "next";
import { Caveat, Instrument_Serif, Manrope } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Ember & Oak — Good coffee. Better room.",
    template: "%s — Ember & Oak",
  },
  description:
    "A roastery and café on SE Division in Portland. Slow coffee, warm room, open seven days. Come sit.",
  keywords: [
    "coffee",
    "café",
    "Portland coffee",
    "SE Division",
    "coffee roastery",
    "specialty coffee",
    "Ember & Oak",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Ember & Oak Coffee Roasters",
    title: "Ember & Oak — Good coffee. Better room.",
    description:
      "A roastery and café on SE Division in Portland. Slow coffee, warm room, open seven days.",
    images: [
      {
        url: "/images/og.jpg",
        width: 1200,
        height: 630,
        alt: "Ember & Oak — Good coffee. Better room.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ember & Oak — Good coffee. Better room.",
    description:
      "A roastery and café on SE Division in Portland. Slow coffee, warm room, open seven days.",
    images: ["/images/og.jpg"],
  },
  alternates: { canonical: "/" },
  applicationName: "Ember & Oak",
  category: "food and drink",
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#f3e8d7",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${instrument.variable} ${manrope.variable} ${caveat.variable}`}
    >
      <body className="min-h-screen bg-cream font-sans text-espresso antialiased">
        {children}
        <div className="grain-overlay" aria-hidden="true" />
      </body>
    </html>
  );
}
