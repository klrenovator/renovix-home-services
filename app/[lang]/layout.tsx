import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "../globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SiteSchema } from "@/components/seo/SiteSchema";
import { getLanguage, languages } from "@/data/languages";
import { siteConfig } from "@/data/site";
import { getDictionary } from "@/i18n";

const plusJakartaSans = localFont({
  src: [
    {
      path: "../fonts/plus-jakarta-sans-latin-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/plus-jakarta-sans-latin-500-normal.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/plus-jakarta-sans-latin-600-normal.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/plus-jakarta-sans-latin-700-normal.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/plus-jakarta-sans-latin-800-normal.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-plus-jakarta",
});

/** Every route lives under `/[lang]`, so this is the app's root layout. */
export function generateStaticParams() {
  return languages.map((language) => ({ lang: language.code }));
}

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.tagline,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B1F33",
};

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
};

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { lang } = await params;
  const language = getLanguage(lang);
  const code = language?.code ?? "en";
  const t = getDictionary(code);

  return (
    <html lang={language?.htmlLang ?? "en-MY"} className={plusJakartaSans.variable}>
      <body className="bg-white font-sans text-ink">
        {/* Site-level structured data (Organization/LocalBusiness + WebSite),
            emitted on every page so the business entity is consistent. */}
        <SiteSchema lang={code} />
        <a href="#main" className="skip-link">
          {t.a11y.skipToContent}
        </a>
        <Header lang={code} />
        <main id="main">{children}</main>
        <Footer lang={code} />
      </body>
    </html>
  );
}
