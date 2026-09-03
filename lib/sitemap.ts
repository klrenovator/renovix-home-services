import { siteConfig } from "@/data/site";

/**
 * Single source of truth for the public sitemap URL and the shared
 * `lastModified` policy. Used by `app/sitemap.ts` and `app/robots.ts` so the
 * generated sitemap and the `Sitemap:` line in robots.txt can never drift.
 *
 * `/sitemap.xml` is generated natively by `app/sitemap.ts` from the in-repo
 * content registries, so a page added to the data (a new service, problem,
 * area, project or translation) appears in the sitemap on the next deploy —
 * there is no manual URL list to maintain.
 */

/**
 * The date the site's content inventory was last meaningfully updated.
 *
 * The content registries carry no per-page `updatedAt` metadata (the site is
 * fully static, with no CMS), so the same reviewed date is emitted for every
 * sitemap entry rather than an invented one. Rules this date must follow:
 *
 * - It is a *content* date, bumped when page content materially changes — it
 *   is NOT refreshed per request or per build. Stamping every URL with the
 *   build date would misrepresent unchanged pages.
 * - It must never be set to "now" programmatically.
 * - If the data model ever gains real per-page timestamps, use those instead
 *   and delete this constant.
 */
export const CONTENT_LAST_MODIFIED = "2026-09-01";

/** The sitemap URL referenced from robots.txt and submitted to Google Search Console. */
export function mainSitemapUrl(): string {
  return `${siteConfig.url}/sitemap.xml`;
}
