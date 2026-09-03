import { siteConfig, getWhatsAppHref, getPhoneHref } from "@/data/site";
import { serviceDetails } from "@/data/service-content";
import { problemDetails } from "@/data/problem-content";
import { areaRegions } from "@/data/area-content";
import { getProjectContent, getPublishedProjects } from "@/data/project-content";
import {
  getPricingForService,
  getPricingUnitsLabel,
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
      areaGuides: areas.map((area) => ({
        name: area.name,
        url: absoluteUrl("en", `/areas/${area.region}/${area.slug}/`),
      })),
      areasIndex: absoluteUrl("en", "/areas/"),
    },
    services: serviceDetails.map((service) => {
      // The headline MUST name the job the price belongs to. Taking the
      // minimum across rows mixes units (tiling's cheapest row is tile
      // *hacking* at RM2 per sqft, not a tiling job) — the same defect
      // Phase 14 fixed on the service pages. Each service's own
      // `startingFromNote` states the headline with its job, and the
      // pricing audit verifies that figure appears in the service's table.
      const rows = getPricingForService(service.slug);
      const cheapest =
        rows.length === 0
          ? undefined
          : rows.reduce((low, entry) =>
              entry.startingPrice < low.startingPrice ? entry : low,
            );

      return {
        name: service.name,
        slug: service.slug,
        url: absoluteUrl("en", `/services/${service.slug}/`),
        summary: service.overviewIntro,
        priceNote:
          service.pricing?.startingFromNote ??
          (cheapest === undefined
            ? "Quoted per job after assessment."
            : `Starting from RM${cheapest.startingPrice} ${getPricingUnitsLabel(cheapest.unit, "en")}`),
        pricingDisclaimer: PRICING_DISCLAIMER_EN,
        pricingLastReviewed: PRICING_LAST_REVIEWED,
      };
    }),
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
      faq: absoluteUrl("en", "/faq/"),
      about: absoluteUrl("en", "/about/"),
      contact: absoluteUrl("en", "/contact/"),
      quote: absoluteUrl("en", "/quote/"),
      sitemap: `${siteConfig.url}/sitemap.xml`,
    },
  };
}
