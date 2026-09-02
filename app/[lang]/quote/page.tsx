import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  IconArrowRight,
  IconCamera,
  IconCheck,
  IconClipboard,
  IconMapPin,
} from "@/components/icons";
import { QuoteForm } from "@/components/quote/QuoteForm";
import { PageSchema } from "@/components/seo/PageSchema";
import { PageHero } from "@/components/support/PageHero";
import { Button } from "@/components/ui/Button";
import { getLanguage, languages } from "@/data/languages";
import { getQuoteServiceOptions } from "@/data/i18n";
import { serviceDetails } from "@/data/service-content";
import { getContactHref, getWhatsAppHref } from "@/data/site";
import { getDictionary } from "@/i18n";
import { localizedHref } from "@/i18n/hrefs";
import { absoluteUrl, buildPageMetadata } from "@/i18n/seo";

type QuotePageProps = {
  params: Promise<{ lang: string }>;
};

const stepIcons = [IconClipboard, IconCamera, IconCheck];

export function generateStaticParams() {
  return languages.map((language) => ({ lang: language.code }));
}

export async function generateMetadata({
  params,
}: QuotePageProps): Promise<Metadata> {
  const { lang } = await params;
  const language = getLanguage(lang);

  if (!language) {
    return {};
  }

  const t = getDictionary(language.code);

  return buildPageMetadata({
    lang: language.code,
    path: "/quote/",
    title: t.quote.metaTitle,
    description: t.quote.metaDescription,
    availableLanguages: languages.map((item) => item.code),
  });
}

export default async function QuotePage({ params }: QuotePageProps) {
  const { lang } = await params;
  const language = getLanguage(lang);

  if (!language) {
    notFound();
  }

  const code = language.code;
  const t = getDictionary(code);

  const subServicesBySlug: Record<string, string[]> = {};

  for (const detail of serviceDetails) {
    subServicesBySlug[detail.slug] = [
      ...detail.subServices.map((item) => item.name),
      ...(detail.subServiceGroups?.flatMap((group) =>
        group.items.map((item) => item.name),
      ) ?? []),
    ];
  }

  return (
    <>
      <PageSchema
        lang={code}
        path="/quote/"
        name={t.quote.title}
        description={t.quote.metaDescription}
        breadcrumbs={[
          { name: t.common.home, url: absoluteUrl(code, "/") },
          { name: t.quote.breadcrumb },
        ]}
      />
      <PageHero
        eyebrow={t.quote.eyebrow}
        title={t.quote.title}
        description={t.quote.description}
        currentLabel={t.quote.breadcrumb}
        lang={code}
        primaryHref="#quote-form"
        primaryLabel={t.quote.heroPrimary}
      />

      <section className="section section-surface">
        <div className="container-app grid gap-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(280px,0.65fr)] lg:items-start lg:gap-10">
          <QuoteForm
            serviceOptions={getQuoteServiceOptions(code, subServicesBySlug)}
            propertyTypes={t.quote.propertyTypes}
            whatsappHref={getWhatsAppHref()}
            lang={code}
            t={t.quote}
          />

          <aside className="space-y-5 lg:sticky lg:top-24">
            <div className="rounded-2xl bg-navy p-6 text-white shadow-card">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-accent">
                <IconMapPin className="h-5 w-5" />
              </span>
              <p className="eyebrow-light mt-5">{t.quote.asideEyebrow}</p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-white">
                {t.quote.asideTitle}
              </h2>
              <p className="mt-3 text-sm leading-6 text-white/75">{t.quote.asideBody}</p>
            </div>

            <div className="card p-6">
              <p className="eyebrow">{t.quote.guidanceEyebrow}</p>
              <ol className="mt-5 space-y-5">
                {t.quote.steps.map((step, index) => {
                  const Icon = stepIcons[index % stepIcons.length];

                  return (
                    <li key={step.title} className="flex gap-3">
                      <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-sm font-bold text-brand">
                        {index + 1}
                      </span>
                      <div>
                        <div className="flex items-center gap-2">
                          <Icon className="h-4 w-4 text-brand" />
                          <h3 className="text-sm font-semibold text-navy">
                            {step.title}
                          </h3>
                        </div>
                        <p className="mt-1.5 text-sm leading-6 text-secondary">
                          {step.description}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </div>

            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <h2 className="text-sm font-semibold text-navy">{t.quote.statusTitle}</h2>
              <p className="mt-2 text-sm leading-6 text-secondary">
                {t.quote.statusBody}
              </p>
              <Link
                href={getContactHref(code)}
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                {t.cta.viewContactDetails}
                <IconArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-app grid gap-8 rounded-3xl border border-slate-200 bg-surface px-6 py-9 sm:px-9 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="eyebrow">{t.quote.browseEyebrow}</p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-navy">
              {t.quote.browseTitle}
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-secondary">
              {t.quote.browseBody}
            </p>
          </div>
          <Button
            href={localizedHref("/services", code)}
            variant="outline"
            icon={<IconArrowRight className="h-4 w-4" />}
          >
            {t.cta.exploreServices}
          </Button>
        </div>
      </section>

      <section className="section section-surface">
        <div className="container-app">
          <div className="relative overflow-hidden rounded-3xl bg-navy px-6 py-10 text-white sm:px-10 sm:py-12">
            <div
              aria-hidden="true"
              className="absolute -right-16 -top-14 h-48 w-48 rounded-full bg-brand/25"
            />
            <div className="relative max-w-2xl">
              <p className="eyebrow-light">{t.quote.coverageEyebrow}</p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-white">
                {t.quote.coverageTitle}
              </h2>
              <p className="mt-3 text-sm leading-6 text-white/75">
                {t.quote.coverageBody}
              </p>
              <div className="mt-6">
                <Button
                  href={localizedHref("/areas", code)}
                  variant="primary"
                  icon={<IconArrowRight className="h-4 w-4" />}
                >
                  {t.cta.viewServiceAreas}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
