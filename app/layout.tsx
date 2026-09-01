import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { siteConfig } from "@/data/site";

const plusJakartaSans = localFont({
  src: [
    {
      path: "./fonts/plus-jakarta-sans-latin-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/plus-jakarta-sans-latin-500-normal.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/plus-jakarta-sans-latin-600-normal.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/plus-jakarta-sans-latin-700-normal.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/plus-jakarta-sans-latin-800-normal.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.tagline,
    template: "%s | Renovix Home Services",
  },
  description: siteConfig.description,
  alternates: {
    canonical: "/en/",
  },
  openGraph: {
    type: "website",
    locale: "en_MY",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.tagline,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.tagline,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B1F33",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <body className="bg-white font-sans text-ink">
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
