import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { IconArrowRight, IconChat, IconMapPin } from "@/components/icons";
import { FaqAccordion } from "@/components/faq/FaqAccordion";
import { PageSchema } from "@/components/seo/PageSchema";
import { faqNode } from "@/components/seo/schema";
import { PageHero } from "@/components/support/PageHero";
import { Button } from "@/components/ui/Button";
import { getLanguage, languages } from "@/data/languages";
import { getSiteFaqs } from "@/data/i18n";
import { getDictionary } from "@/i18n";
import { localizedHref } from "@/i18n/hrefs";
import { absoluteUrl, buildPageMetadata } from "@/i18n/seo";

type FaqPageProps = {
  params: Promise<{ lang: string }>;
};

export function generateStaticParams() {
  return languages.map((language) => ({ lang: language.code }));
}

export async function generateMetadata({
  params,
}: FaqPageProps): Promise<Metadata> {
  const { lang } = await params;
  const language = getLanguage(lang);

  if (!language) {
    return {};
  }

  const t = getDictionary(language.code);

  return buildPageMetadata({
    lang: language.code,
    path: "/faq/",
    title: t.faq.metaTitle,
    description: t.faq.metaDescription,
    availableLanguages: languages.map((item) => item.code),
  });
}

export default async function FaqPage({ params }: FaqPageProps) {
  const { lang } = await params;
  const language = getLanguage(lang);

  if (!language) {
    notFound();
  }

  const code = language.code;
  const t = getDictionary(code);
  const faqs = getSiteFaqs(code);

  return (
    <>
      <PageSchema
        lang={code}
        path="/faq/"
        name={t.faq.title}
        description={t.faq.metaDescription}
        breadcrumbs={[
          { name: t.common.home, url: absoluteUrl(code, "/") },
          { name: t.faq.breadcrumb },
        ]}
        extra={[faqNode(absoluteUrl(code, "/faq/"), faqs)]}
      />
      <PageHero
        eyebrow={t.faq.eyebrow}
        title={t.faq.title}
        description={t.faq.description}
        currentLabel={t.faq.breadcrumb}
        lang={code}
      />

      <section className="section section-surface">
        <div className="container-app grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <p className="eyebrow">{t.faq.asideEyebrow}</p>
            <h2 className="h2-section mt-3 text-navy">{t.faq.asideTitle}</h2>
            <p className="lead mt-4">{t.faq.asideLead}</p>
            <div className="mt-7 space-y-3">
              <Link
                href={localizedHref("/services", code)}
                className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-navy transition-colors hover:border-brand/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                {t.faq.browseServices}
                <IconArrowRight className="h-4 w-4 text-brand" />
              </Link>
              <Link
                href={localizedHref("/areas", code)}
                className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-navy transition-colors hover:border-brand/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                {t.faq.exploreAreas}
                <IconMapPin className="h-4 w-4 text-brand" />
              </Link>
            </div>
          </aside>

          <div className="space-y-12">
            {t.faq.groups.map((group) => {
              const groupFaqs = faqs.filter((faq) => faq.group === group.id);

              if (groupFaqs.length === 0) {
                return null;
              }

              return (
                <section key={group.id} aria-labelledby={`faq-${group.id}`}>
                  <div className="mb-6">
                    <p className="eyebrow">{group.label}</p>
                    <h2
                      id={`faq-${group.id}`}
                      className="mt-3 text-2xl font-bold tracking-tight text-navy"
                    >
                      {group.description}
                    </h2>
                  </div>
                  <FaqAccordion faqs={groupFaqs} lang={code} />
                </section>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-app">
          <div className="relative overflow-hidden rounded-3xl bg-navy px-6 py-11 text-white sm:px-10 sm:py-14 lg:px-14">
            <div
              aria-hidden="true"
              className="absolute -right-14 -top-14 h-52 w-52 rounded-full bg-brand/25"
            />
            <div className="relative max-w-2xl">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-accent">
                <IconChat className="h-5 w-5" />
              </span>
              <p className="eyebrow-light mt-6">{t.faq.ctaEyebrow}</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {t.faq.ctaTitle}
              </h2>
              <p className="mt-4 text-base leading-7 text-white/75">
                {t.faq.ctaDescription}
              </p>
              <div className="mt-7">
                <Button
                  href={localizedHref("/quote", code)}
                  variant="primary"
                  icon={<IconArrowRight className="h-4 w-4" />}
                >
                  {t.cta.getQuote}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
