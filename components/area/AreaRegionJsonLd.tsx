import { JsonLd } from "@/components/seo/JsonLd";
import {
  breadcrumbNode,
  faqNode,
  itemListNode,
  schemaGraph,
  webPageNode,
} from "@/components/seo/schema";
import { format, getDictionary } from "@/i18n";
import { absoluteUrl } from "@/i18n/seo";
import type { AreaRegion } from "@/data/area-content/types";

type AreaRegionJsonLdProps = {
  region: AreaRegion;
  lang: string;
};

/**
 * Structured data for a region hub: WebPage + BreadcrumbList + an ItemList of
 * the area guides in the region + the page's FAQPage.
 */
export function AreaRegionJsonLd({ region, lang }: AreaRegionJsonLdProps) {
  const t = getDictionary(lang);
  const canonical = absoluteUrl(lang, `/areas/${region.id}/`);

  const nodes = [
    webPageNode({
      lang,
      path: `/areas/${region.id}/`,
      name: region.name,
      description: region.metaDescription,
    }),
    breadcrumbNode(canonical, [
      { name: t.common.home, url: absoluteUrl(lang, "/") },
      { name: t.areasIndex.breadcrumb, url: absoluteUrl(lang, "/areas/") },
      { name: region.name },
    ]),
    itemListNode(
      canonical,
      format(t.areaRegion.areasTitle, { name: region.name }),
      region.areas.map((area) => ({
        name: area.name,
        url: absoluteUrl(lang, `/areas/${area.region}/${area.slug}/`),
      })),
    ),
    faqNode(canonical, region.faqs),
  ];

  return <JsonLd data={schemaGraph(nodes)} />;
}
