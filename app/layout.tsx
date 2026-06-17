import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "../components/Nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://advancedcleaningandrestorationtechs.com"),
  title: {
    default:
      "Advanced Cleaning Tech | Water Damage Restoration & Cleaning Experts",
    template: "%s | Advanced Cleaning Tech",
  },
  description:
    "Advanced Cleaning Tech provides water damage restoration, carpet cleaning, air duct cleaning, upholstery cleaning, and mold remediation in Aiken, Augusta, Columbia, and the CSRA.",
  applicationName: "Advanced Cleaning Tech",
  keywords: [
    "water damage restoration Aiken SC",
    "water damage restoration Augusta GA",
    "water restoration Columbia SC",
    "carpet cleaning Aiken SC",
    "carpet cleaning Augusta GA",
    "air duct cleaning Augusta GA",
    "upholstery cleaning Aiken",
    "mold remediation CSRA",
    "Advanced Cleaning Tech",
  ],
  authors: [{ name: "Advanced Cleaning Tech" }],
  creator: "Advanced Cleaning Tech",
  publisher: "Advanced Cleaning Tech",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Advanced Cleaning Tech",
    title: "Advanced Cleaning Tech | Water Damage Restoration & Cleaning Experts",
    description:
      "Carpet cleaning, air duct cleaning, upholstery cleaning, water damage restoration, and mold remediation for Aiken, Augusta, Columbia, and the CSRA.",
    images: [
      {
        url: "/images/luxury-clean-home-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Sunlit clean living room restored by Advanced Cleaning Tech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Advanced Cleaning Tech | Water Damage & Cleaning Experts",
    description:
      "Water damage restoration, carpet cleaning, air duct cleaning, and upholstery cleaning in Aiken, Augusta, and Columbia.",
    images: ["/images/luxury-clean-home-hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "home services",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
