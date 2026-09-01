import { JsonLd } from "@/components/seo/JsonLd";
import {
  breadcrumbNode,
  faqNode,
  schemaGraph,
  webPageNode,
} from "@/components/seo/schema";
import { areaServiceNode } from "@/components/seo/schema";
import { getDictionary } from "@/i18n";
import { absoluteUrl } from "@/i18n/seo";
import { getAreaRegion } from "@/data/area-content";
import type { AreaDetail } from "@/data/area-content/types";

type AreaJsonLdProps = {
  area: AreaDetail;
  lang: string;
};

/**
 * Structured data for a location guide: WebPage + BreadcrumbList + a Service
 * node scoped to that place (the Service + Location relationship) + the
 * page's FAQPage. No address, geo or local-presence details are emitted —
 * the business has none published.
 */
export function AreaJsonLd({ area, lang }: AreaJsonLdProps) {
  const t = getDictionary(lang);
  const region = getAreaRegion(area.region, lang);
  const canonical = absoluteUrl(lang, `/areas/${area.region}/${area.slug}/`);

  const nodes = [
    webPageNode({
      lang,
      path: `/areas/${area.region}/${area.slug}/`,
      name: area.name,
      description: area.metaDescription,
      about: { "@id": `${canonical}#service` },
    }),
    breadcrumbNode(canonical, [
      { name: t.common.home, url: absoluteUrl(lang, "/") },
      { name: t.areasIndex.breadcrumb, url: absoluteUrl(lang, "/areas/") },
      ...(region
        ? [
            {
              name: region.name,
              url: absoluteUrl(lang, `/areas/${region.id}/`),
            },
          ]
        : []),
      { name: area.name },
    ]),
    areaServiceNode(area, lang),
    faqNode(canonical, area.faqs),
  ];

  return <JsonLd data={schemaGraph(nodes)} />;
}
