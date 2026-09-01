import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { getLanguage } from "@/data/languages";
import { siteConfig } from "@/data/site";

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const language = getLanguage(lang);
  const canonicalUrl = `${siteConfig.url}/${language?.code ?? "en"}/`;
  const locale = lang === "ms" ? "ms_MY" : lang === "zh" ? "zh_CN" : "en_MY";

  return {
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: lang === "en",
      follow: true,
    },
    openGraph: {
      locale,
      url: canonicalUrl,
    },
    twitter: {
      card: "summary_large_image",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { lang } = await params;
  const language = getLanguage(lang);

  return (
    <>
      <Header lang={language?.code ?? "en"} />
      <main id="main">{children}</main>
      <Footer lang={language?.code ?? "en"} />
    </>
  );
}
