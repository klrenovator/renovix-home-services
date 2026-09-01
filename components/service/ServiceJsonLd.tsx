import { JsonLd } from "@/components/seo/JsonLd";
import {
  breadcrumbNode,
  faqNode,
  schemaGraph,
  serviceNode,
  webPageNode,
} from "@/components/seo/schema";
import { getDictionary } from "@/i18n";
import { absoluteUrl } from "@/i18n/seo";
import type { ServiceDetail } from "@/data/service-content/types";

type ServiceJsonLdProps = {
  detail: ServiceDetail;
  lang: string;
};

/**
 * Structured data for a service page: WebPage + BreadcrumbList + the Service
 * itself (with its OfferCatalog) + the page's FAQPage. All nodes share the
 * same `@id` graph as the rest of the site, so the service links back to the
 * business entity and the site entity.
 */
export function ServiceJsonLd({ detail, lang }: ServiceJsonLdProps) {
  const t = getDictionary(lang);
  const canonical = absoluteUrl(lang, `/services/${detail.slug}/`);

  const nodes = [
    webPageNode({
      lang,
      path: `/services/${detail.slug}/`,
      name: detail.name,
      description: detail.metaDescription,
      about: { "@id": `${canonical}#service` },
    }),
    breadcrumbNode(canonical, [
      { name: t.common.home, url: absoluteUrl(lang, "/") },
      { name: t.servicePage.breadcrumbServices, url: absoluteUrl(lang, "/services/") },
      { name: detail.name },
    ]),
    serviceNode(detail, lang),
    faqNode(canonical, detail.faqs),
  ];

  return <JsonLd data={schemaGraph(nodes)} />;
}
