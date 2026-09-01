import type { MetadataRoute } from "next";
import { languages } from "@/data/languages";
import { siteConfig } from "@/data/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: languages.map(
      (language) => `${siteConfig.url}/sitemap/${language.code}.xml`,
    ),
    host: siteConfig.url,
  };
}
