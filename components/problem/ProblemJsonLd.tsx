import { JsonLd } from "@/components/service/JsonLd";
import { siteConfig } from "@/data/site";
import { getProblemServiceDetails } from "@/data/problem-content";
import type { ProblemDetail } from "@/data/problem-content/types";

type ProblemJsonLdProps = {
  problem: ProblemDetail;
  lang: string;
};

export function ProblemJsonLd({ problem, lang }: ProblemJsonLdProps) {
  const canonical = `${siteConfig.url}/${lang}/problems/${problem.slug}/`;
  const { service } = getProblemServiceDetails(problem);

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
      name: "Problems",
      item: `${siteConfig.url}/${lang}/problems/`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: problem.name,
      item: canonical,
    },
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: problem.h1,
    description: problem.metaDescription,
    url: canonical,
    mainEntityOfPage: canonical,
    inLanguage: lang,
    about: service
      ? {
          "@type": "Service",
          name: service.name,
          serviceType: service.name,
        }
      : undefined,
    author: {
      "@type": "Organization",
      name: siteConfig.legalName,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.legalName,
      url: siteConfig.url,
    },
    areaServed: {
      "@type": "Place",
      name: "Kuala Lumpur, Selangor & Klang Valley",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: problem.faqs.map((faq) => ({
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
      <JsonLd data={articleSchema} />
      <JsonLd data={faqSchema} />
    </>
  );
}
