import { JsonLd } from "@/components/service/JsonLd";
import { siteConfig } from "@/data/site";
import { getAreaRegion, getAreaPath } from "@/data/area-content";
import { getServiceBySlug } from "@/data/services";
import type { AreaDetail } from "@/data/area-content/types";

type AreaJsonLdProps = {
  area: AreaDetail;
  lang: string;
};

/**
 * Schema for a location page: BreadcrumbList, a Service node whose
 * areaServed is the specific place, and FAQPage.
 * No address, geo or Google Business profile data is emitted — the
 * business has no published local presence details.
 */
export function AreaJsonLd({ area, lang }: AreaJsonLdProps) {
  const region = getAreaRegion(area.region);
  const canonical = `${siteConfig.url}/${lang}${getAreaPath(area)}/`;

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
    ...(region
      ? [
          {
            "@type": "ListItem",
            position: 3,
            name: region.name,
            item: `${siteConfig.url}/${lang}/areas/${region.id}/`,
          },
        ]
      : []),
    {
      "@type": "ListItem",
      position: region ? 4 : 3,
      name: area.name,
      item: canonical,
    },
  ];

  const place = {
    "@type": "Place",
    name: `${area.name}${region ? `, ${region.name}` : ""}`,
    ...(region
      ? {
          containedInPlace: {
            "@type": "Place",
            name: region.name,
          },
        }
      : {}),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Home renovation & repair services in ${area.name}`,
    serviceType: "Home renovation and repair services",
    description: area.metaDescription,
    url: canonical,
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.legalName,
      url: siteConfig.url,
      areaServed: {
        "@type": "Place",
        name: "Kuala Lumpur, Selangor & Klang Valley",
      },
    },
    areaServed: place,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `Renovix services available in ${area.name}`,
      itemListElement: area.servicesAvailable
        .flatMap((focus) => {
          const service = getServiceBySlug(focus.serviceSlug);
          return service ? [service] : [];
        })
        .slice(0, 10)
        .map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: `${service.name} in ${area.name}`,
            url: `${siteConfig.url}/${lang}${service.path}/`,
          },
        })),
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: area.faqs.map((faq) => ({
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
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
    </>
  );
}
