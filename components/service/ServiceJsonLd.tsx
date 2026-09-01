import { JsonLd } from "@/components/service/JsonLd";
import { siteConfig } from "@/data/site";
import type { ServiceDetail } from "@/data/service-content/types";

type ServiceJsonLdProps = {
  detail: ServiceDetail;
  lang: string;
};

export function ServiceJsonLd({ detail, lang }: ServiceJsonLdProps) {
  const canonical = `${siteConfig.url}/${lang}/services/${detail.slug}/`;
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
      name: "Services",
      item: `${siteConfig.url}/${lang}/services/`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: detail.name,
      item: canonical,
    },
  ];

  const catalogItems = detail.subServiceGroups?.length
    ? detail.subServiceGroups.flatMap((group) => group.items)
    : detail.subServices;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: detail.name,
    serviceType: detail.name,
    description: detail.metaDescription,
    url: canonical,
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.legalName,
      url: siteConfig.url,
      areaServed: {
        "@type": "Place",
        name: "Kuala Lumpur & Selangor",
      },
    },
    areaServed: {
      "@type": "Place",
      name: "Kuala Lumpur, Selangor & Klang Valley",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${detail.name} Services`,
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

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: detail.faqs.map((faq) => ({
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
      <JsonLd data={{ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: breadcrumbs }} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
    </>
  );
}
