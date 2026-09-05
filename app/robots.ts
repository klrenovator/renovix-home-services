import type { MetadataRoute } from "next";
import { mainSitemapUrl } from "@/lib/sitemap";

/**
 * robots.txt is generated per the Next.js metadata route convention.
 *
 * Everything is crawlable. Framework assets are deliberately not blocked:
 * search engines need CSS, JavaScript and optimized-image responses to render
 * and evaluate the same experience users receive.
 *
 * `Sitemap:` points at the site's single canonical sitemap, generated natively
 * by `app/sitemap.ts` from the content registries (all languages, with
 * hreflang alternates). Referencing that one URL here — instead of listing
 * per-language child sitemaps — means Search Console and every crawler only
 * ever need this single entry point, and pages added to the registries are
 * discovered through it automatically on the next deploy.
 *
 * No `Host:` directive: RFC 9309 (robots.txt) defines no such field. It was
 * historically read only by Yandex and is ignored by Google, so the line was
 * removed to keep this file strictly conformant (2026-09-05 audit, I-11).
 * Canonical-host preference belongs in the sitemap/canonical layer — and, for
 * `www` vs apex, in the hosting domain settings — not in robots.txt.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: mainSitemapUrl(),
  };
}
