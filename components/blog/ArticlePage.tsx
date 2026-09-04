import Link from "next/link";
import { Breadcrumbs } from "@/components/service/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button, WhatsAppButton } from "@/components/ui/Button";
import { IconArrowRight, IconCheck, IconPhone } from "@/components/icons";
import { ArticleBody } from "@/components/blog/ArticleBody";
import { getPhoneHref, getWhatsAppHref, siteConfig } from "@/data/site";
import { getDictionary } from "@/i18n";
import { contentHref, localizedHref } from "@/i18n/hrefs";
import { getLanguageCode } from "@/data/languages";
import {
  getArticleCategoryLabel,
  getArticleText,
  getRelatedArticles,
} from "@/data/blog";
import type { ArticleDefinition } from "@/data/blog/types";
import { getServiceDetail } from "@/data/service-content";
import { getProblemsBySlugs } from "@/data/problem-content";
import { getSubService, subServiceLanguages } from "@/data/sub-services";
import { getAreaDetail } from "@/data/area-content";
import { getProjectContent, getPublishedProjects } from "@/data/project-content";

/**
 * A Knowledge Hub article.
 *
 * Structure follows the AEO/LLMO pattern the rest of the site uses: the
 * question and its concise answer come first, then key points, then the body,
 * then FAQs — followed by the outbound half of the content graph (service,
 * sub-service, problem, project, area and sibling-guide links) and the CTA.
 *
 * Every outbound link is checked for a translation in the current language
 * through `contentHref` / `subServiceLanguages`, so a `/ms/` or `/zh/` article
 * never links a page that only exists in English.
 */

type CardLink = { href: string; title: string; subtitle?: string };

function LinkCards({
  title,
  eyebrow,
  description,
  links,
  cta,
  surface = false,
}: {
  title: string;
  eyebrow: string;
  description?: string;
  links: CardLink[];
  cta: string;
  surface?: boolean;
}) {
  if (links.length === 0) {
    return null;
  }

  return (
    <section className={`section ${surface ? "section-surface" : "bg-white"}`}>
      <div className="container-app">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="card card-hover group flex h-full flex-col p-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <h3 className="text-base font-semibold tracking-tight text-navy">
                {link.title}
              </h3>
              {link.subtitle ? (
                <p className="mt-2 flex-1 text-sm leading-6 text-secondary">
                  {link.subtitle}
                </p>
              ) : null}
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                {cta}
                <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ArticlePage({
  article,
  lang,
}: {
  article: ArticleDefinition;
  lang: string;
}) {
  const code = getLanguageCode(lang);
  const t = getDictionary(code);
  const text = getArticleText(article, code);
  const categoryLabel = getArticleCategoryLabel(article.category, code);

  const serviceLinks: CardLink[] = article.relatedServices
    .map((slug): CardLink | null => {
      const detail = getServiceDetail(slug, code);
      const href = contentHref("service", slug, code);
      return detail && href
        ? { href, title: detail.name, subtitle: detail.metaDescription }
        : null;
    })
    .filter((item): item is CardLink => item !== null);

  const subServiceLinks: CardLink[] = article.relatedSubServices
    .map((slug): CardLink | null => {
      const sub = getSubService(slug);
      if (!sub || !subServiceLanguages(slug).includes(code)) {
        return null;
      }
      return {
        href: localizedHref(`/services/${sub.serviceSlug}/${sub.slug}`, code),
        title: sub[code].name,
        subtitle: sub[code].lead,
      };
    })
    .filter((item): item is CardLink => item !== null);

  const problemLinks: CardLink[] = getProblemsBySlugs(article.relatedProblems, code)
    .map((problem): CardLink | null => {
      const href = contentHref("problem", problem.slug, code);
      return href ? { href, title: problem.name, subtitle: problem.subtitle } : null;
    })
    .filter((item): item is CardLink => item !== null);

  const publishedProjectSlugs = new Set(
    getPublishedProjects().map((project) => project.slug),
  );
  const projectLinks: CardLink[] = article.relatedProjects
    .filter((slug) => publishedProjectSlugs.has(slug))
    .map((slug): CardLink | null => {
      const href = contentHref("project", slug, code);
      return href ? { href, title: getProjectContent(slug, code).title } : null;
    })
    .filter((item): item is CardLink => item !== null);

  const areaLinks: CardLink[] = article.relatedLocations
    .map((key): CardLink | null => {
      const [region, slug] = key.split("/");
      const area = getAreaDetail(region, slug, code);
      const href = contentHref("area", key, code);
      return area && href ? { href, title: area.name, subtitle: area.metaDescription } : null;
    })
    .filter((item): item is CardLink => item !== null);

  const relatedArticles: CardLink[] = getRelatedArticles(article).map((other) => ({
    href: localizedHref(`/blog/${other.slug}`, code),
    title: getArticleText(other, code).title,
    subtitle: getArticleText(other, code).excerpt,
  }));

  return (
    <>
      {/* Hero: question + answer-first block */}
      <article>
        <section className="relative overflow-hidden bg-navy text-white">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand/20"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-accent/10"
          />
          <div className="container-app relative py-12 sm:py-16 lg:py-20">
            <Breadcrumbs
              inverse
              items={[
                { label: t.common.home, href: "/" },
                { label: t.blogPage.breadcrumbBlog, href: "/blog" },
                { label: text.h1 },
              ]}
              lang={code}
            />
            <p className="eyebrow-light mt-6">{categoryLabel}</p>
            <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl">
              {text.h1}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/80">
              {text.excerpt}
            </p>
            <p className="mt-6 text-xs text-white/60">
              {t.blogPage.writtenByLabel} {siteConfig.name} · {t.blogPage.publishedLabel}{" "}
              <time dateTime={article.published}>{article.published}</time>
              {article.updated ? (
                <>
                  {" · "}
                  {t.blogPage.updatedLabel}{" "}
                  <time dateTime={article.updated}>{article.updated}</time>
                </>
              ) : null}
            </p>
          </div>
        </section>

        <section className="section bg-white">
          <div className="container-app max-w-4xl">
            {/* Answer-first block: the question, then a concise answer. */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6 sm:p-8">
              <p className="eyebrow">{t.blogPage.answerEyebrow}</p>
              <h2 className="mt-3 text-xl font-bold leading-8 text-navy sm:text-2xl">
                {text.question}
              </h2>
              <p className="mt-4 text-base leading-7 text-secondary">{text.answer}</p>
            </div>

            {text.keyPoints.length > 0 ? (
              <div className="mt-8">
                <h2 className="h3-card">{t.blogPage.keyPointsTitle}</h2>
                <ul className="mt-4 space-y-3">
                  {text.keyPoints.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 text-base leading-7 text-secondary"
                    >
                      <IconCheck className="mt-1.5 h-4 w-4 shrink-0 text-brand" aria-hidden />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            <ArticleBody sections={text.sections} lang={code} />

            <p className="mt-12 border-t border-slate-200 pt-8 text-base leading-7 text-secondary">
              {text.closing}
            </p>
          </div>
        </section>

        {/* FAQs */}
        {text.faqs.length > 0 ? (
          <section className="section section-surface">
            <div className="container-app grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
              <div>
                <SectionHeading
                  eyebrow={t.blogPage.faqsEyebrow}
                  title={t.blogPage.faqsTitle}
                />
              </div>
              <div className="space-y-3">
                {text.faqs.map((faq) => (
                  <details
                    key={faq.question}
                    className="group rounded-xl border border-slate-200 bg-white p-4 shadow-soft sm:p-5"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:text-base">
                      {faq.question}
                      <span className="text-brand">+</span>
                    </summary>
                    <p className="mt-3 text-sm leading-6 text-secondary">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        ) : null}
      </article>

      {/* The content graph: outbound links to every entity this guide supports */}
      <LinkCards
        eyebrow={t.guideLinks.eyebrow}
        title={t.blogPage.relatedServicesTitle}
        links={serviceLinks}
        cta={t.cta.viewService}
      />
      <LinkCards
        surface
        eyebrow={t.guideLinks.eyebrow}
        title={t.blogPage.relatedSubServicesTitle}
        links={subServiceLinks}
        cta={t.cta.viewService}
      />
      <LinkCards
        eyebrow={t.guideLinks.eyebrow}
        title={t.blogPage.relatedProblemsTitle}
        links={problemLinks}
        cta={t.cta.viewProblem}
      />
      <LinkCards
        surface
        eyebrow={t.guideLinks.eyebrow}
        title={t.blogPage.relatedProjectsTitle}
        links={projectLinks}
        cta={t.projects.viewProject}
      />
      <LinkCards
        eyebrow={t.guideLinks.eyebrow}
        title={t.blogPage.relatedAreasTitle}
        description={t.blogPage.relatedAreasDescription}
        links={areaLinks}
        cta={t.cta.viewAreas}
      />
      <LinkCards
        surface
        eyebrow={t.guideLinks.eyebrow}
        title={t.blogPage.relatedArticlesTitle}
        links={relatedArticles}
        cta={t.blogIndex.readGuide}
      />

      {/* CTA */}
      <section className="section bg-white">
        <div className="container-app">
          <div className="relative overflow-hidden rounded-3xl bg-navy px-6 py-12 sm:px-10 sm:py-16 lg:px-16">
            <div
              aria-hidden
              className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand/20"
            />
            <div
              aria-hidden
              className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-accent/20"
            />
            <div className="relative max-w-2xl">
              <p className="eyebrow-light">{t.common.freeQuoteEyebrow}</p>
              <h2 className="h2-section mt-3 text-white">{t.blogPage.ctaHeading}</h2>
              <p className="mt-4 text-base leading-7 text-white/75">
                {t.blogPage.ctaDescription}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button
                  href={localizedHref("/quote", code)}
                  variant="primary"
                  icon={<IconArrowRight className="h-4 w-4" />}
                >
                  {t.cta.requestQuote}
                </Button>
                <WhatsAppButton
                  href={getWhatsAppHref()}
                  variant="secondary"
                  label={t.cta.whatsappUs}
                />
                <Button
                  href={getPhoneHref()}
                  variant="outline"
                  external
                  className="border-white/40 text-white hover:bg-white/10"
                  icon={<IconPhone className="h-4 w-4" />}
                >
                  {t.cta.callNow}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
