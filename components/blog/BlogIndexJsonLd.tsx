import { JsonLd } from "@/components/seo/JsonLd";
import {
  breadcrumbNode,
  itemListNode,
  schemaGraph,
  webPageNode,
} from "@/components/seo/schema";
import { getDictionary } from "@/i18n";
import { absoluteUrl } from "@/i18n/seo";
import { getLanguageCode } from "@/data/languages";
import { getArticleText, getArticles } from "@/data/blog";

/**
 * Structured data for the Knowledge Hub index: WebPage + BreadcrumbList +
 * an ItemList of every published article, so the hub reads as an architecture
 * rather than a loose set of pages.
 */
export function BlogIndexJsonLd({ lang }: { lang: string }) {
  const code = getLanguageCode(lang);
  const t = getDictionary(code);
  const canonical = absoluteUrl(code, "/blog/");

  const items = getArticles().map((article) => ({
    name: getArticleText(article, code).h1,
    url: absoluteUrl(code, `/blog/${article.slug}/`),
  }));

  return (
    <JsonLd
      data={schemaGraph([
        webPageNode({
          lang: code,
          path: "/blog/",
          name: t.blogIndex.title,
          description: t.blogIndex.metaDescription,
          about: { "@id": `${canonical}#itemlist` },
        }),
        breadcrumbNode(canonical, [
          { name: t.common.home, url: absoluteUrl(code, "/") },
          { name: t.blogIndex.breadcrumb },
        ]),
        itemListNode(canonical, t.blogIndex.title, items),
      ])}
    />
  );
}
