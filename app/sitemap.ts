import type { MetadataRoute } from "next";
import { languages, type LanguageCode } from "@/data/languages";
import {
  hasTranslation,
  ALL_AREAS,
  ALL_AREA_REGIONS,
  ALL_PROBLEMS,
  ALL_PROJECTS,
  ALL_SERVICES,
} from "@/i18n/coverage";
import { absoluteUrl } from "@/i18n/seo";
import { CONTENT_LAST_MODIFIED } from "@/lib/sitemap";
import { assertCoverageInSync } from "@/i18n/verify";
import { getAllSubServices, subServiceLanguages } from "@/data/sub-services";

/** True when `lang` publishes a given sub-service (route path). */
function isSubServicePublished(serviceSlug: string, slug: string, lang: LanguageCode): boolean {
  const sub = getAllSubServices().find((item) => item.slug === slug && item.serviceSlug === serviceSlug);
  return Boolean(sub && subServiceLanguages(sub.slug).includes(lang));
}

// The sitemap is the only place a stale slug would silently produce a URL that
// 404s (and a wrong hreflang set). The sitemap is generated at build time, so
// this fails the build the moment the coverage lists drift from the content
// registries.
assertCoverageInSync();

/**
 * Serves `https://renovixhomeservices.my/sitemap.xml` — the site's single,
 * canonical sitemap, referenced from robots.txt and the only sitemap URL that
 * ever needs to be submitted to Google Search Console.
 *
 * Every entry is derived from the content registries that also generate the
 * pages themselves (services, problems, areas, projects and their
 * translations), so adding a page to the data automatically adds it here on
 * the next deploy. A language's URLs are only listed when that language
 * actually publishes them, so a URL is never submitted for a locale that
 * would serve it in the wrong language — the same rule the pages' own
 * hreflang sets follow.
 *
 * Scale: one file comfortably holds the whole site today (Google's limit is
 * 50,000 URLs / 50 MB uncompressed per sitemap). If the URL count ever
 * approaches that limit, split into per-language child sitemaps with
 * `generateSitemaps()` (served at `/sitemap/{lang}.xml`) plus a sitemap-index
 * route for `/sitemap.xml`. Note Next.js registers `app/sitemap.ts` at
 * `/sitemap.xml` itself, so that split requires replacing this file with
 * custom route handlers rather than adding `app/sitemap.xml/route.ts`
 * alongside it (the build fails with a route/metadata conflict).
 */

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

  for (const sub of getAllSubServices()) {
    if (subServiceLanguages(sub.slug).includes(lang)) {
      entries.push({
        path: `/services/${sub.serviceSlug}/${sub.slug}/`,
        priority: 0.75,
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

  // Only published projects reach `ALL_PROJECTS` (asserted at build time by
  // `i18n/verify.ts`), so a draft never appears in the sitemap.
  for (const project of ALL_PROJECTS) {
    if (hasTranslation("project", project, lang)) {
      entries.push({
        path: `/projects/${project}/`,
        priority: 0.5,
        changeFrequency: "monthly",
      });
    }
  }

  return entries;
}

/** Paths that every language publishes, so no translation lookup is needed. */
const ALWAYS_PUBLISHED = new Set([
  "/",
  "/services/",
  "/problems/",
  "/areas/",
  "/quote/",
  "/contact/",
  "/about/",
  "/projects/",
  "/faq/",
  "/privacy/",
  "/terms/",
]);

/**
 * Whether `lang` publishes `path`, i.e. whether it belongs in that language's
 * hreflang set. The segment count is only consulted for the two-level area
 * routes, so `/projects/` and `/problems/` are matched by prefix first.
 */
function isPublished(path: string, lang: LanguageCode): boolean {
  if (ALWAYS_PUBLISHED.has(path)) {
    return true;
  }

  if (path.startsWith("/services/")) {
    const segments = path.split("/").filter(Boolean).length;
    // Two-level service routes: /services/{category}/{sub-service}/
    if (segments >= 3) {
      return isSubServicePublished(slugOf(path, 1), slugOf(path, 2), lang);
    }
    return hasTranslation("service", slugOf(path, 1), lang);
  }

  if (path.startsWith("/problems/")) {
    return hasTranslation("problem", slugOf(path, 1), lang);
  }

  if (path.startsWith("/projects/")) {
    return hasTranslation("project", slugOf(path, 1), lang);
  }

  if (path.startsWith("/areas/")) {
    return path.split("/").filter(Boolean).length === 2
      ? hasTranslation("areaRegion", slugOf(path, 1), lang)
      : hasTranslation("area", areaKeyOf(path), lang);
  }

  return false;
}

export default function sitemap(): MetadataRoute.Sitemap {
  // Keyed by URL so the same page can never be emitted twice, regardless of
  // how the registries grow.
  const byUrl = new Map<string, MetadataRoute.Sitemap[number]>();

  for (const language of languages) {
    for (const entry of pathsForLanguage(language.code)) {
      // `absoluteUrl` keeps the sitemap in the exact trailing-slash shape the
      // site serves, so every `<loc>` points at a URL that returns 200 — no
      // redirect hop for crawlers, and alternates match the real canonicals.
      const url = absoluteUrl(language.code, entry.path);

      const alternates: Record<string, string> = {};

      for (const other of languages) {
        if (isPublished(entry.path, other.code)) {
          alternates[other.hreflang] = absoluteUrl(other.code, entry.path);
        }
      }

      // `x-default` points at the English version, the site's default locale.
      alternates["x-default"] = absoluteUrl("en", entry.path);

      byUrl.set(url, {
        url,
        // Every entry shares the site-wide reviewed content date — see
        // `lib/sitemap.ts` for why a per-request or build-date stamp is not
        // used.
        lastModified: CONTENT_LAST_MODIFIED,
        changeFrequency: entry.changeFrequency,
        priority: entry.priority,
        alternates: { languages: alternates },
      });
    }
  }

  return [...byUrl.values()];
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
