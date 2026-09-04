import { siteConfig, getWhatsAppHref, getPhoneHref } from "@/data/site";
import { serviceDetails } from "@/data/service-content";
import { problemDetails } from "@/data/problem-content";
import { areaRegions } from "@/data/area-content";
import { getActiveStateCoverage, getLocationBySlug } from "@/data/locations";
import { getProjectContent, getPublishedProjects } from "@/data/project-content";
import { getArticleText, getArticles } from "@/data/blog";
import {
  getServicePricingHeadline,
  LAST_REVIEWED as PRICING_LAST_REVIEWED,
  PRICING_DISCLAIMER_EN,
} from "@/data/pricing";
import { languages } from "@/data/languages";
import { absoluteUrl } from "@/i18n/seo";

/**
 * Centralized AI-readable business knowledge for Renovix Home Services.
 *
 * Phase 16 (search + AI authority): answer engines and LLM assistants
 * increasingly read plain JSON / llms.txt documents instead of parsing HTML.
 * This module is the single source of truth behind every machine-readable
 * document the site serves (`/ai/business.json`, `/ai/pricing.json`,
 * `/llms.txt`), and every fact here is derived from the same registries the
 * visible pages render — so the feeds can never drift from the site.
 *
 * Rules (see CONTENT_GOVERNANCE.md):
 * - Only verified business facts. No invented reviews, ratings, coordinates,
 *   licences, awards, project locations or team claims.
 * - Prices are indicative *starting* prices from `data/pricing/pricing.ts`,
 *   always paired with their unit, disclaimer and review date.
 * - English is the canonical source; the site also publishes Malay and
 *   Simplified Chinese.
 */

export function getAiKnowledge() {
  const areas = areaRegions.flatMap((region) => region.areas);
  const projects = getPublishedProjects();

  return {
    business: {
      name: siteConfig.name,
      legalName: siteConfig.legalName,
      tagline: siteConfig.tagline,
      description: siteConfig.description,
      url: siteConfig.url,
      market: siteConfig.market,
      region: siteConfig.region,
    },
    contact: {
      phone: siteConfig.phone,
      phoneHref: getPhoneHref(),
      whatsappHref: getWhatsAppHref(),
      email: siteConfig.email,
      address: siteConfig.address.full,
      businessHours: siteConfig.businessHours.display,
    },
    languages: languages.map((language) => ({
      code: language.code,
      label: language.label,
      homepage: absoluteUrl(language.code, "/"),
    })),
    serviceArea: {
      summary:
        "Kuala Lumpur, Selangor and the wider Klang Valley, Malaysia. No other states are served.",
      places: ["Kuala Lumpur", "Selangor", "Klang Valley"],
      // The coverage tree is derived from the single location registry
      // (data/locations), so the machine-readable feed can never disagree
      // with the published area guides about where the business works.
      regions: getActiveStateCoverage().map((state) => ({
        id: state.id,
        name: state.name,
        publishedGuides: state.totalPublishedGuides,
        url: absoluteUrl("en", `/areas/${state.id}/`),
        districts: state.districts.map((district) => ({
          name: district.name,
          locations: district.locationSlugs
            .map((slug) => getLocationBySlug(slug, state.id))
            .filter((location): location is NonNullable<typeof location> =>
              Boolean(location),
            )
            .map((location) => ({
              name: location.name,
              level: location.level,
              url: absoluteUrl("en", `/areas/${location.regionId}/${location.slug}/`),
            })),
        })),
      })),
      areaGuides: areas.map((area) => ({
        name: area.name,
        url: absoluteUrl("en", `/areas/${area.region}/${area.slug}/`),
      })),
      areasIndex: absoluteUrl("en", "/areas/"),
    },
    services: serviceDetails.map((service) => ({
      name: service.name,
      slug: service.slug,
      url: absoluteUrl("en", `/services/${service.slug}/`),
      summary: service.overviewIntro,
      // This is generated from the marked headline row in the central
      // catalogue, never from page copy or a cross-unit minimum.
      priceNote:
        getServicePricingHeadline(service.slug, "en") ??
        "Quoted per job after assessment.",
      pricingDisclaimer: PRICING_DISCLAIMER_EN,
      pricingLastReviewed: PRICING_LAST_REVIEWED,
    })),
    problems: {
      index: absoluteUrl("en", "/problems/"),
      guides: problemDetails.map((problem) => ({
        title: problem.h1,
        url: absoluteUrl("en", `/problems/${problem.slug}/`),
      })),
    },
    projects: {
      index: absoluteUrl("en", "/projects/"),
      published: projects.map((project) => ({
        title: getProjectContent(project.slug, "en").title,
        url: absoluteUrl("en", `/projects/${project.slug}/`),
      })),
    },
    knowledgeHub: {
      index: absoluteUrl("en", "/blog/"),
      description:
        "Educational guides on cost, materials, troubleshooting, planning and maintenance for Malaysian homes. Published in English, Malay and Chinese.",
      articles: getArticles().map((article) => ({
        title: getArticleText(article, "en").h1,
        category: article.category,
        url: absoluteUrl("en", `/blog/${article.slug}/`),
      })),
    },
    pricing: {
      feed: `${siteConfig.url}/ai/pricing.json`,
      lastReviewed: PRICING_LAST_REVIEWED,
      disclaimer: PRICING_DISCLAIMER_EN,
    },
    process: [
      "Share photos and a short description on WhatsApp or the quote form.",
      "On-site assessment and written quotation.",
      "Scheduled work with updates.",
      "Handover and inspection on completion.",
    ],
    limitations: [
      "All published prices are indicative starting prices, never final quotes.",
      "Final quotation is confirmed only after assessing the actual site condition.",
      "Service area is Kuala Lumpur, Selangor and the Klang Valley only.",
      `Business hours are ${siteConfig.businessHours.display}; the business has not stated which days it opens.`,
      "No ranking, review-count, licence, certification, award or outcome claims are made.",
    ],
    keyPages: {
      home: absoluteUrl("en", "/"),
      services: absoluteUrl("en", "/services/"),
      problems: absoluteUrl("en", "/problems/"),
      areas: absoluteUrl("en", "/areas/"),
      projects: absoluteUrl("en", "/projects/"),
      knowledgeHub: absoluteUrl("en", "/blog/"),
      faq: absoluteUrl("en", "/faq/"),
      about: absoluteUrl("en", "/about/"),
      contact: absoluteUrl("en", "/contact/"),
      quote: absoluteUrl("en", "/quote/"),
      sitemap: `${siteConfig.url}/sitemap.xml`,
    },
  };
}
