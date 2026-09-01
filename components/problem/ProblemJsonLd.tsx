import { JsonLd } from "@/components/seo/JsonLd";
import {
  breadcrumbNode,
  faqNode,
  problemArticleNode,
  schemaGraph,
  webPageNode,
} from "@/components/seo/schema";
import { getDictionary } from "@/i18n";
import { absoluteUrl } from "@/i18n/seo";
import { hasTranslation } from "@/i18n/coverage";
import { getProblemServiceDetails } from "@/data/problem-content";
import type { ProblemDetail } from "@/data/problem-content/types";

type ProblemJsonLdProps = {
  problem: ProblemDetail;
  lang: string;
};

/**
 * Structured data for a problem guide: WebPage + BreadcrumbList + the guide
 * as an Article (about the service that handles it) + the page's FAQPage.
 */
export function ProblemJsonLd({ problem, lang }: ProblemJsonLdProps) {
  const t = getDictionary(lang);
  const canonical = absoluteUrl(lang, `/problems/${problem.slug}/`);
  const { service } = getProblemServiceDetails(problem);

  const nodes = [
    webPageNode({
      lang,
      path: `/problems/${problem.slug}/`,
      name: problem.name,
      description: problem.metaDescription,
      about: service
        ? {
            "@type": "Service",
            name: service.name,
            serviceType: service.name,
            url: absoluteUrl(
              hasTranslation("service", service.slug, lang) ? lang : "en",
              `/services/${service.slug}/`,
            ),
          }
        : undefined,
    }),
    breadcrumbNode(canonical, [
      { name: t.common.home, url: absoluteUrl(lang, "/") },
      { name: t.problemPage.breadcrumbProblems, url: absoluteUrl(lang, "/problems/") },
      { name: problem.name },
    ]),
    problemArticleNode(problem, lang, service),
    faqNode(canonical, problem.faqs),
  ];

  return <JsonLd data={schemaGraph(nodes)} />;
}
