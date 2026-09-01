import type { Metadata } from "next";
import { languages, type LanguageCode } from "@/data/languages";
import { siteConfig } from "@/data/site";
import { getDictionary } from "./index";

/**
 * Builds page metadata with the multilingual SEO requirements applied:
 * unique localized title + description, a self-referencing canonical,
 * `hreflang` alternates for every language that actually publishes the page,
 * an `x-default` pointing at English, and a localized `og:locale`.
 *
 * `path` is the language-agnostic path with a trailing slash, e.g. `/quote/`.
 */
export function buildPageMetadata({
  lang,
  path,
  title,
  description,
  ogDescription,
  availableLanguages,
  noIndex = false,
}: {
  lang: LanguageCode | string;
  path: string;
  title: string;
  description: string;
  ogDescription?: string;
  availableLanguages: LanguageCode[];
  noIndex?: boolean;
}): Metadata {
  const canonical = absoluteUrl(lang, path);
  const languageSet = new Set<LanguageCode>(
    availableLanguages.length > 0 ? availableLanguages : ["en"],
  );

  const alternates: Record<string, string> = {};

  for (const language of languages) {
    if (languageSet.has(language.code)) {
      alternates[language.hreflang] = absoluteUrl(language.code, path);
    }
  }

  alternates["x-default"] = absoluteUrl("en", path);

  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical,
      languages: alternates,
    },
    robots: {
      index: !noIndex && languageSet.has(getLanguageCodeSafe(lang)),
      follow: true,
    },
    openGraph: {
      type: "website",
      url: canonical,
      title,
      description: ogDescription ?? description,
      locale: getOgLocale(lang),
      siteName: getDictionary(lang).meta.siteName,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: ogDescription ?? description,
    },
  };
}

export function absoluteUrl(lang: LanguageCode | string, path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  const suffix = normalized === "/" ? "" : normalized;

  return `${siteConfig.url}/${lang}${suffix}`;
}

function getOgLocale(lang: LanguageCode | string): string {
  const language = languages.find((item) => item.code === lang);
  return language?.ogLocale ?? "en_MY";
}

function getLanguageCodeSafe(lang: LanguageCode | string): LanguageCode {
  return lang === "ms" || lang === "zh" ? lang : "en";
}
