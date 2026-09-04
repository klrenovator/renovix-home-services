import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconArrowRight } from "@/components/icons";
import { format, getDictionary } from "@/i18n";
import { localizedHref } from "@/i18n/hrefs";
import { getLanguageCode } from "@/data/languages";
import { getArticleCategoryLabel, getArticleText } from "@/data/blog";
import type { ArticleDefinition } from "@/data/blog/types";

type GuideScope = "service" | "subService" | "problem" | "area";

/**
 * The inbound half of the Knowledge Hub link graph.
 *
 * Service, sub-service, problem and area pages render this when the registry
 * has guides that genuinely cover the entity in question — the articles are
 * matched by their declared relationships, never by keyword. When nothing
 * relevant exists the section renders nothing rather than padding the page
 * with loosely-related reading.
 */
export function GuideLinksSection({
  articles,
  scope,
  name,
  lang,
  surface = false,
}: {
  articles: ArticleDefinition[];
  scope: GuideScope;
  name: string;
  lang: string;
  surface?: boolean;
}) {
  if (articles.length === 0) {
    return null;
  }

  const code = getLanguageCode(lang);
  const t = getDictionary(code);
  const titles = {
    service: t.guideLinks.serviceTitle,
    subService: t.guideLinks.subServiceTitle,
    problem: t.guideLinks.problemTitle,
    area: t.guideLinks.areaTitle,
  } as const;

  return (
    <section className={`section ${surface ? "section-surface" : "bg-white"}`}>
      <div className="container-app">
        <SectionHeading
          eyebrow={t.guideLinks.eyebrow}
          title={format(titles[scope], { name })}
          description={t.guideLinks.description}
        />

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => {
            const text = getArticleText(article, code);
            return (
              <Link
                key={article.slug}
                href={localizedHref(`/blog/${article.slug}`, code)}
                className="card card-hover group flex h-full flex-col p-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <p className="eyebrow">
                  {getArticleCategoryLabel(article.category, code)}
                </p>
                <h3 className="mt-3 text-base font-semibold tracking-tight text-navy">
                  {text.h1}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-secondary">
                  {text.excerpt}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                  {t.blogIndex.readGuide}
                  <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
