import Link from "next/link";
import { Breadcrumbs } from "@/components/service/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button, WhatsAppButton } from "@/components/ui/Button";
import { IconArrowRight, IconPhone } from "@/components/icons";
import { getPhoneHref, getWhatsAppHref } from "@/data/site";
import { getDictionary } from "@/i18n";
import { localizedHref } from "@/i18n/hrefs";
import { getLanguageCode } from "@/data/languages";
import {
  articleCategoryLabels,
  getArticleCategoryLabel,
  getArticleText,
  getArticles,
} from "@/data/blog";
import type { ArticleCategoryId } from "@/data/blog/types";

/**
 * The Knowledge Hub index. Articles are grouped by category so the hub is a
 * real architecture rather than a reverse-chronological feed, and every
 * published article is linked from here — the guard against orphan guides.
 */
export function BlogIndexPage({ lang }: { lang: string }) {
  const code = getLanguageCode(lang);
  const t = getDictionary(code);
  const articles = getArticles();

  const categories = (Object.keys(articleCategoryLabels) as ArticleCategoryId[])
    .map((category) => ({
      category,
      label: getArticleCategoryLabel(category, code),
      items: articles.filter((article) => article.category === category),
    }))
    .filter((group) => group.items.length > 0);

  return (
    <>
      <section className="relative overflow-hidden bg-navy text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand/20"
        />
        <div className="container-app relative py-12 sm:py-16 lg:py-20">
          <Breadcrumbs
            inverse
            items={[
              { label: t.common.home, href: "/" },
              { label: t.blogIndex.breadcrumb },
            ]}
            lang={code}
          />
          <p className="eyebrow-light mt-6">{t.blogIndex.eyebrow}</p>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl">
            {t.blogIndex.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-white/80">
            {t.blogIndex.lead}
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-app">
          <SectionHeading
            eyebrow={t.blogIndex.eyebrow}
            title={t.blogIndex.gridTitle}
            description={t.blogIndex.gridDescription}
          />

          <div className="mt-12 space-y-14">
            {categories.map((group) => (
              <div key={group.category}>
                <h2 className="h3-card">{group.label}</h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {group.items.map((article) => {
                    const text = getArticleText(article, code);
                    return (
                      <Link
                        key={article.slug}
                        href={localizedHref(`/blog/${article.slug}`, code)}
                        className="card card-hover group flex h-full flex-col p-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                      >
                        <p className="eyebrow">{group.label}</p>
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
            ))}
          </div>
        </div>
      </section>

      <section className="section section-surface">
        <div className="container-app">
          <div className="relative overflow-hidden rounded-3xl bg-navy px-6 py-12 sm:px-10 sm:py-16 lg:px-16">
            <div
              aria-hidden
              className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand/20"
            />
            <div className="relative max-w-2xl">
              <p className="eyebrow-light">{t.blogIndex.ctaEyebrow}</p>
              <h2 className="h2-section mt-3 text-white">{t.blogIndex.ctaTitle}</h2>
              <p className="mt-4 text-base leading-7 text-white/75">
                {t.blogIndex.ctaDescription}
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
