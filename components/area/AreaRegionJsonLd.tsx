import { JsonLd } from "@/components/service/JsonLd";
import { siteConfig } from "@/data/site";
import type { AreaRegion } from "@/data/area-content/types";

type AreaRegionJsonLdProps = {
  region: AreaRegion;
  lang: string;
};

export function AreaRegionJsonLd({ region, lang }: AreaRegionJsonLdProps) {
  const canonical = `${siteConfig.url}/${lang}/areas/${region.id}/`;

  const breadcrumbs = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: `${siteConfig.url}/${lang}/`,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Service Areas",
      item: `${siteConfig.url}/${lang}/areas/`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: region.name,
      item: canonical,
    },
  ];

  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Renovix service areas in ${region.name}`,
    itemListElement: region.areas.map((area, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: area.name,
      url: `${siteConfig.url}/${lang}/areas/${area.region}/${area.slug}/`,
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: region.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: breadcrumbs,
        }}
      />
      <JsonLd data={itemList} />
      <JsonLd data={faqSchema} />
    </>
  );
}
