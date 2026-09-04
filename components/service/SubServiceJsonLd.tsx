import { JsonLd } from "@/components/seo/JsonLd";
import {
  breadcrumbNode,
  faqNode,
  schemaGraph,
  webPageNode,
} from "@/components/seo/schema";
import { getDictionary } from "@/i18n";
import { absoluteUrl } from "@/i18n/seo";
import type { ResolvedSubService } from "@/data/sub-services";

/**
 * Structured data for a standalone sub-service page: WebPage + BreadcrumbList +
 * a Service node for the sub-service carrying an Offer with a PriceSpecification
 * (numbers pulled straight from the central pricing registry) + FAQPage.
 */
export function SubServiceJsonLd({
  detail,
  lang,
}: {
  detail: ResolvedSubService;
  lang: string;
}) {
  const t = getDictionary(lang);
  const { slug, text, service, pricing } = detail;
  const canonical = absoluteUrl(lang, `/services/${detail.serviceSlug}/${slug}/`);
  const places = ["Kuala Lumpur", "Selangor", "Klang Valley"].map((name) => ({
    "@type": "Place",
    name,
  }));

  const subServiceNode: Record<string, unknown> = {
    "@type": "Service",
    "@id": `${canonical}#service`,
    name: text.name,
    serviceType: text.name,
    description: text.metaDescription,
    url: canonical,
    areaServed: places,
  };

  // Every price shown here comes from the central registry — never re-authored.
  if (pricing) {
    subServiceNode.hasOfferCatalog = {
      "@type": "OfferCatalog",
      name: text.name,
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: text.name,
            description: text.metaDescription,
          },
          priceSpecification: {
            "@type": "PriceSpecification",
            price: pricing.startingPrice,
            priceCurrency: pricing.currency,
            ...(pricing.priceRange
              ? {
                  minPrice: pricing.priceRange.min,
                  maxPrice: pricing.priceRange.max,
                }
              : {}),
          },
        },
      ],
    };
  }

  const nodes: object[] = [
    webPageNode({
      lang,
      path: `/services/${detail.serviceSlug}/${slug}/`,
      name: text.name,
      description: text.metaDescription,
      about: { "@id": `${canonical}#service` },
    }),
    breadcrumbNode(canonical, [
      { name: t.common.home, url: absoluteUrl(lang, "/") },
      { name: t.servicePage.breadcrumbServices, url: absoluteUrl(lang, "/services/") },
      {
        name: service?.name ?? detail.serviceSlug,
        url: absoluteUrl(lang, `/services/${detail.serviceSlug}/`),
      },
      { name: text.name },
    ]),
    subServiceNode,
    faqNode(canonical, text.faqs),
  ];

  return <JsonLd data={schemaGraph(nodes)} />;
}
