import { JsonLd } from "@/components/service/JsonLd";
import { getLanguageCode } from "@/data/languages";
import { siteConfig } from "@/data/site";
import { getDictionary } from "@/i18n";

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
  const code = getLanguageCode(lang);
  const t = getDictionary(code);
  const canonicalUrl = `${siteConfig.url}/${code}${path}`;

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: t.common.home,
            item: `${siteConfig.url}/${code}/`,
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
