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
  ogTitle,
  ogDescription,
  availableLanguages,
  noIndex = false,
}: {
  lang: LanguageCode | string;
  path: string;
  title: string;
  description: string;
  ogTitle?: string;
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

  const ogImage = ogImageUrl(lang);

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
      title: ogTitle ?? title,
      description: ogDescription ?? description,
      locale: getOgLocale(lang),
      siteName: getDictionary(lang).meta.siteName,
      // Explicit image (not just the file-convention route): guarantees every
      // page carries og:image + dimensions + alt, independent of segment
      // inheritance, and gives Twitter a valid large-image card.
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: getDictionary(lang).meta.siteName,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle ?? title,
      description: ogDescription ?? description,
      images: [ogImage],
    },
  };
}

/**
 * The generated Open Graph image for a language version. It is served by the
 * `app/[lang]/opengraph-image.tsx` route (1200×630 PNG) and is shared across
 * every page of that language.
 *
 * The trailing slash matters: `trailingSlash: true` means the slashless URL
 * answers with a 308 redirect, and social crawlers that do not follow
 * redirects would drop the preview image entirely.
 */
function ogImageUrl(lang: LanguageCode | string): string {
  const code = getLanguageCodeSafe(lang);
  return `${siteConfig.url}/${code}/opengraph-image/`;
}

export function absoluteUrl(lang: LanguageCode | string, path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  // The root serves as `/<lang>/` (trailing slash), so absolute URLs — and the
  // sitemaps and hreflang alternates built from them — must use the same shape.
  const suffix = normalized === "/" ? "/" : normalized;

  return `${siteConfig.url}/${lang}${suffix}`;
}

function getOgLocale(lang: LanguageCode | string): string {
  const language = languages.find((item) => item.code === lang);
  return language?.ogLocale ?? "en_MY";
}

function getLanguageCodeSafe(lang: LanguageCode | string): LanguageCode {
  return lang === "ms" || lang === "zh" ? lang : "en";
}
