import { JsonLd } from "@/components/service/JsonLd";
import { siteConfig } from "@/data/site";

type PageBreadcrumbJsonLdProps = {
  lang: string;
  label: string;
  path: string;
};

export function PageBreadcrumbJsonLd({
  lang,
  label,
  path,
}: PageBreadcrumbJsonLdProps) {
  const canonicalUrl = `${siteConfig.url}/${lang}${path}`;

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${siteConfig.url}/${lang}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: label,
            item: canonicalUrl,
          },
        ],
      }}
    />
  );
}
