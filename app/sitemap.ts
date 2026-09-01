import type { MetadataRoute } from "next";
import { languages, type LanguageCode } from "@/data/languages";
import { hasTranslation, ALL_AREAS, ALL_AREA_REGIONS, ALL_PROBLEMS, ALL_SERVICES } from "@/i18n/coverage";
import { absoluteUrl } from "@/i18n/seo";
import { assertCoverageInSync } from "@/i18n/verify";

// The sitemap is the only place a stale slug would silently produce a URL that
// 404s (and a wrong hreflang set). Sitemaps run at build time for every
// locale, so this fails the build the moment the coverage lists drift from the
// content registries.
assertCoverageInSync();

/**
 * One sitemap per language: `/sitemap/en.xml`, `/sitemap/ms.xml`,
 * `/sitemap/zh.xml`. A language's sitemap only lists the pages that language
 * actually publishes, so a translated page is never submitted for a locale that
 * would serve it in the wrong language.
 */
export function generateSitemaps() {
  return languages.map((language) => ({ id: language.code }));
}

const LAST_MODIFIED = "2026-09-01";

type SitemapEntry = {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
};

function pathsForLanguage(lang: LanguageCode): SitemapEntry[] {
  const entries: SitemapEntry[] = [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    { path: "/services/", priority: 0.9, changeFrequency: "monthly" },
    { path: "/problems/", priority: 0.9, changeFrequency: "monthly" },
    { path: "/areas/", priority: 0.9, changeFrequency: "monthly" },
    { path: "/quote/", priority: 0.9, changeFrequency: "monthly" },
    { path: "/contact/", priority: 0.8, changeFrequency: "monthly" },
    { path: "/about/", priority: 0.7, changeFrequency: "yearly" },
    { path: "/projects/", priority: 0.6, changeFrequency: "monthly" },
    { path: "/faq/", priority: 0.6, changeFrequency: "monthly" },
    { path: "/privacy/", priority: 0.2, changeFrequency: "yearly" },
    { path: "/terms/", priority: 0.2, changeFrequency: "yearly" },
  ];

  for (const service of ALL_SERVICES) {
    if (hasTranslation("service", service, lang)) {
      entries.push({
        path: `/services/${service}/`,
        priority: 0.8,
        changeFrequency: "monthly",
      });
    }
  }

  for (const problem of ALL_PROBLEMS) {
    if (hasTranslation("problem", problem, lang)) {
      entries.push({
        path: `/problems/${problem}/`,
        priority: 0.7,
        changeFrequency: "monthly",
      });
    }
  }

  for (const region of ALL_AREA_REGIONS) {
    if (hasTranslation("areaRegion", region, lang)) {
      entries.push({
        path: `/areas/${region}/`,
        priority: 0.8,
        changeFrequency: "monthly",
      });
    }
  }

  for (const area of ALL_AREAS) {
    if (hasTranslation("area", area, lang)) {
      entries.push({
        path: `/areas/${area}/`,
        priority: 0.7,
        changeFrequency: "monthly",
      });
    }
  }

  return entries;
}

export default async function sitemap(props: {
  id: Promise<string>;
}): Promise<MetadataRoute.Sitemap> {
  const id = await props.id;
  const lang = (languages.find((language) => language.code === id)?.code ??
    "en") as LanguageCode;

  return pathsForLanguage(lang).map((entry) => {
    // `absoluteUrl` keeps the sitemap in the exact trailing-slash shape the
    // site serves, so every `<loc>` points at a URL that returns 200 — no
    // redirect hop for crawlers, and alternates match the real canonicals.
    const url = absoluteUrl(lang, entry.path);

    const alternates: Record<string, string> = {};

    for (const language of languages) {
      const publishes =
        entry.path === "/" ||
        entry.path === "/services/" ||
        entry.path === "/problems/" ||
        entry.path === "/areas/" ||
        entry.path === "/quote/" ||
        entry.path === "/contact/" ||
        entry.path === "/about/" ||
        entry.path === "/projects/" ||
        entry.path === "/faq/" ||
        entry.path === "/privacy/" ||
        entry.path === "/terms/"
          ? true
          : entry.path.startsWith("/services/")
            ? hasTranslation("service", slugOf(entry.path, 1), language.code)
            : entry.path.startsWith("/problems/")
              ? hasTranslation("problem", slugOf(entry.path, 1), language.code)
              : entry.path.split("/").filter(Boolean).length === 2
                ? hasTranslation(
                    "areaRegion",
                    slugOf(entry.path, 1),
                    language.code,
                  )
                : hasTranslation("area", areaKeyOf(entry.path), language.code);

      if (publishes) {
        alternates[language.hreflang] = absoluteUrl(language.code, entry.path);
      }
    }

    // `x-default` points at the English version, the site's default locale.
    alternates["x-default"] = absoluteUrl("en", entry.path);

    return {
      url,
      lastModified: LAST_MODIFIED,
      changeFrequency: entry.changeFrequency,
      priority: entry.priority,
      alternates: { languages: alternates },
    };
  });
}

/**
 * Nth path segment, 0-indexed against the language-less path: segment 0 of
 * `/services/tiling/` is `services` and segment 1 is `tiling`.
 */
function slugOf(path: string, segment: number): string {
  return path.split("/").filter(Boolean)[segment] ?? "";
}

function areaKeyOf(path: string): string {
  const parts = path.split("/").filter(Boolean);
  return `${parts[1] ?? ""}/${parts[2] ?? ""}`;
}
