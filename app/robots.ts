import type { MetadataRoute } from "next";
import { languages } from "@/data/languages";
import { siteConfig } from "@/data/site";

/**
 * robots.txt is generated per the Next.js metadata route convention.
 *
 * Everything indexable is allowed: the only disallow is `/_next/` (framework
 * assets, never content). No page of the site is blocked.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/_next/"],
    },
    sitemap: languages.map(
      (language) => `${siteConfig.url}/sitemap/${language.code}.xml`,
    ),
    host: siteConfig.url,
  };
}
