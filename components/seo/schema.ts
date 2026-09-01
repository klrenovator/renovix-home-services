import { languages } from "@/data/languages";
import { siteConfig } from "@/data/site";
import { getServiceBySlug, services } from "@/data/services";
import { getAreaRegion } from "@/data/area-content";
import type { ServiceDetail } from "@/data/service-content/types";
import type { ProblemDetail } from "@/data/problem-content/types";
import type { AreaDetail } from "@/data/area-content/types";
import { absoluteUrl } from "@/i18n/seo";

/**
 * Shared schema.org node builders for the site's structured data.
 *
 * Every node is built from the same public data the pages already use, with
 * stable `@id`s so the entity graph stays consistent site-wide:
 *
 *   Organization/LocalBusiness  (the business, once, on every page)
 *   WebSite                     (the site, once per language version)
 *   WebPage                     (every page, with breadcrumb + entity links)
 *   Service / Article / FAQPage / ItemList (page-specific content nodes)
 *
 * Honesty rules: only information the site already publishes is emitted.
 * No ratings, reviews, prices, certifications, address, geo, phone, email
 * or opening hours — those are placeholders in `data/site.ts`.
 */

/** Site-level entity ids, stable across every language version. */
export const ORGANIZATION_ID = `${siteConfig.url}/#organization`;
export const WEBSITE_ID = `${siteConfig.url}/#website`;

/** The service footprint the business publicly states. */
export const SERVICE_PLACES = [
  { "@type": "Place", name: "Kuala Lumpur" },
  { "@type": "Place", name: "Selangor" },
  { "@type": "Place", name: "Klang Valley" },
] as const;

export function getHtmlLang(lang: string): string {
  return languages.find((language) => language.code === lang)?.htmlLang ?? "en-MY";
}

/**
 * The business as one entity with two schema types. `LocalBusiness` is a
 * subtype of `Organization`, so a single node with both types keeps the
 * company, its web presence and its service area as one linked entity for
 * search engines and LLMs. Only verified facts are included:
 * name, legal name, website, the public description/tagline, the languages
 * the site serves and the areas it states it works in.
 */
export function organizationNode() {
  return {
    "@type": ["Organization", "LocalBusiness"],
    "@id": ORGANIZATION_ID,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: `${siteConfig.url}/`,
    description: siteConfig.description,
    slogan: siteConfig.tagline,
    image: `${siteConfig.url}/en/opengraph-image/`,
    knowsLanguage: languages.map((language) => language.code),
    areaServed: SERVICE_PLACES,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Renovix Home Services services",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.name,
          serviceType: service.name,
          url: absoluteUrl("en", `/services/${service.slug}/`),
        },
      })),
    },
  };
}

/** The site itself, scoped to one language version. */
export function websiteNode(lang: string) {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: siteConfig.name,
    url: absoluteUrl(lang, "/"),
    description: siteConfig.description,
    inLanguage: getHtmlLang(lang),
    publisher: { "@id": ORGANIZATION_ID },
  };
}

export type BreadcrumbEntry = {
  name: string;
  /** Omitted for the last (current) entry, per Google's breadcrumb guidance. */
  url?: string;
};

/** A BreadcrumbList. The final item deliberately carries no URL. */
export function breadcrumbNode(id: string, entries: BreadcrumbEntry[]) {
  return {
    "@type": "BreadcrumbList",
    "@id": `${id}#breadcrumb`,
    itemListElement: entries.map((entry, index) => {
      const isLast = index === entries.length - 1;

      return {
        "@type": "ListItem",
        position: index + 1,
        name: entry.name,
        ...(isLast ? {} : { item: entry.url ?? id }),
      };
    }),
  };
}

/**
 * The current page as a WebPage node, linked into the site entity graph.
 * `about` defaults to the business; service/problem pages point it at the
 * specific service instead. Pass `hasBreadcrumb` when a BreadcrumbList node
 * is emitted alongside it (the homepage has none).
 */
export function webPageNode({
  lang,
  path,
  name,
  description,
  about,
  hasBreadcrumb = true,
}: {
  lang: string;
  path: string;
  name: string;
  description: string;
  about?: Record<string, unknown>;
  hasBreadcrumb?: boolean;
}) {
  const canonical = absoluteUrl(lang, path);

  return {
    "@type": "WebPage",
    "@id": canonical,
    name,
    url: canonical,
    description,
    inLanguage: getHtmlLang(lang),
    isPartOf: { "@id": WEBSITE_ID },
    about: about ?? { "@id": ORGANIZATION_ID },
    ...(hasBreadcrumb ? { breadcrumb: { "@id": `${canonical}#breadcrumb` } } : {}),
  };
}

/** FAQPage from the same Q&A data the visible FAQ section renders. */
export function faqNode(
  id: string,
  faqs: { question: string; answer: string }[],
) {
  return {
    "@type": "FAQPage",
    "@id": `${id}#faq`,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/** A generic ItemList (e.g. the full service or problem catalogue). */
export function itemListNode(
  id: string,
  name: string,
  items: { name: string; url?: string }[],
) {
  return {
    "@type": "ItemList",
    "@id": `${id}#itemlist`,
    name,
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.url ? { url: item.url } : {}),
    })),
  };
}

/** The full service detail node (Service + OfferCatalog of sub-services). */
export function serviceNode(detail: ServiceDetail, lang: string) {
  const canonical = absoluteUrl(lang, `/services/${detail.slug}/`);
  const catalogItems = detail.subServiceGroups?.length
    ? detail.subServiceGroups.flatMap((group) => group.items)
    : detail.subServices;

  return {
    "@type": "Service",
    "@id": `${canonical}#service`,
    name: detail.name,
    serviceType: detail.name,
    description: detail.metaDescription,
    url: canonical,
    provider: { "@id": ORGANIZATION_ID },
    areaServed: SERVICE_PLACES,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${detail.name} services`,
      itemListElement: catalogItems.slice(0, 20).map((subService) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: subService.name,
          description: subService.description,
        },
      })),
    },
  };
}

/**
 * A problem guide as an Article, about the service that handles it.
 * `service` is resolved by the caller from the problem's relatedService slug.
 */
export function problemArticleNode(
  problem: ProblemDetail,
  lang: string,
  service?: ServiceDetail,
) {
  const canonical = absoluteUrl(lang, `/problems/${problem.slug}/`);

  return {
    "@type": "Article",
    "@id": `${canonical}#article`,
    headline: problem.h1,
    description: problem.metaDescription,
    url: canonical,
    mainEntityOfPage: canonical,
    inLanguage: getHtmlLang(lang),
    about: service
      ? {
          "@type": "Service",
          name: service.name,
          serviceType: service.name,
          url: absoluteUrl("en", `/services/${service.slug}/`),
        }
      : { "@id": ORGANIZATION_ID },
    author: { "@id": ORGANIZATION_ID },
    publisher: { "@id": ORGANIZATION_ID },
  };
}

/**
 * A location page as a Service scoped to that place — the schema-level
 * expression of the Service + Location relationship.
 */
export function areaServiceNode(area: AreaDetail, lang: string) {
  const canonical = absoluteUrl(lang, `/areas/${area.region}/${area.slug}/`);
  const region = getAreaRegion(area.region);

  const place = {
    "@type": "Place",
    name: `${area.name}${region ? `, ${region.name}` : ""}`,
    ...(region
      ? { containedInPlace: { "@type": "Place", name: region.name } }
      : {}),
  };

  const offers = area.servicesAvailable
    .map((focus) => getServiceBySlug(focus.serviceSlug))
    .filter((service): service is NonNullable<typeof service> => Boolean(service))
    .slice(0, 10)
    .map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: `${service.name} in ${area.name}`,
        url: absoluteUrl("en", `/services/${service.slug}/`),
      },
    }));

  return {
    "@type": "Service",
    "@id": `${canonical}#service`,
    name: `Home renovation & repair services in ${area.name}`,
    serviceType: "Home renovation and repair services",
    description: area.metaDescription,
    url: canonical,
    provider: { "@id": ORGANIZATION_ID },
    areaServed: place,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `Renovix services available in ${area.name}`,
      itemListElement: offers,
    },
  };
}

/** Wraps one or more nodes in a `@graph`, or emits a lone node directly. */
export function schemaGraph(nodes: object[]): object {
  if (nodes.length === 1) {
    return { "@context": "https://schema.org", ...nodes[0] };
  }

  return { "@context": "https://schema.org", "@graph": nodes };
}
