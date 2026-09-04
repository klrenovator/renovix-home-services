import { JsonLd } from "@/components/seo/JsonLd";
import {
  ORGANIZATION_ID,
  breadcrumbNode,
  faqNode,
  getHtmlLang,
  schemaGraph,
  webPageNode,
} from "@/components/seo/schema";
import { getDictionary } from "@/i18n";
import { absoluteUrl } from "@/i18n/seo";
import { getLanguageCode } from "@/data/languages";
import { getArticleText } from "@/data/blog";
import type { ArticleDefinition } from "@/data/blog/types";
import { getServiceDetail } from "@/data/service-content";

/**
 * Structured data for a Knowledge Hub article: WebPage + BreadcrumbList +
 * Article + FAQPage.
 *
 * Author and publisher are both the business entity — the site publishes no
 * invented author personas. `datePublished` is the real authoring date, and
 * `dateModified` is only emitted when the article has actually been revised.
 */
export function ArticleJsonLd({
  article,
  lang,
}: {
  article: ArticleDefinition;
  lang: string;
}) {
  const code = getLanguageCode(lang);
  const t = getDictionary(code);
  const text = getArticleText(article, code);
  const canonical = absoluteUrl(code, `/blog/${article.slug}/`);

  const about = article.relatedServices
    .map((slug) => getServiceDetail(slug, code))
    .filter((detail) => Boolean(detail))
    .map((detail) => ({
      "@type": "Service",
      name: detail!.name,
      serviceType: detail!.name,
      url: absoluteUrl(code, `/services/${detail!.slug}/`),
    }));

  const articleNode: Record<string, unknown> = {
    "@type": "Article",
    "@id": `${canonical}#article`,
    headline: text.h1,
    description: text.metaDescription,
    url: canonical,
    mainEntityOfPage: canonical,
    inLanguage: getHtmlLang(code),
    datePublished: article.published,
    author: { "@id": ORGANIZATION_ID },
    publisher: { "@id": ORGANIZATION_ID },
    articleSection: article.category,
    ...(article.updated ? { dateModified: article.updated } : {}),
    ...(about.length > 0 ? { about } : { about: { "@id": ORGANIZATION_ID } }),
    ...(article.image
      ? {
          image: {
            "@type": "ImageObject",
            url: article.image.src,
            width: article.image.width,
            height: article.image.height,
          },
        }
      : {}),
  };

  const nodes: object[] = [
    webPageNode({
      lang: code,
      path: `/blog/${article.slug}/`,
      name: text.h1,
      description: text.metaDescription,
      about: { "@id": `${canonical}#article` },
    }),
    breadcrumbNode(canonical, [
      { name: t.common.home, url: absoluteUrl(code, "/") },
      { name: t.blogIndex.breadcrumb, url: absoluteUrl(code, "/blog/") },
      { name: text.h1 },
    ]),
    articleNode,
  ];

  if (text.faqs.length > 0) {
    nodes.push(faqNode(canonical, text.faqs));
  }

  return <JsonLd data={schemaGraph(nodes)} />;
}
