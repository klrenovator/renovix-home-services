import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  IconArrowRight,
  IconCamera,
  IconCheck,
  IconClipboard,
  IconMapPin,
  IconWhatsApp,
} from "@/components/icons";
import { QuoteForm } from "@/components/quote/QuoteForm";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import { PageSchema } from "@/components/seo/PageSchema";
import { PageHero } from "@/components/support/PageHero";
import { Button } from "@/components/ui/Button";
import { getLanguage, languages } from "@/data/languages";
import { getQuoteServiceOptions } from "@/data/i18n";
import { getContactHref, getWhatsAppHref } from "@/data/site";
import { getDictionary } from "@/i18n";
import { localizedHref } from "@/i18n/hrefs";
import { absoluteUrl, buildPageMetadata } from "@/i18n/seo";
import { faqNode } from "@/components/seo/schema";

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
  const whatsappHref = getWhatsAppHref();
  const whatsappQuickHref = `${whatsappHref}?text=${encodeURIComponent(
    t.quote.whatsappQuickMessage,
  )}`;

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
        extra={[faqNode(absoluteUrl(code, "/quote/"), t.quote.faqs)]}
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
          <div className="space-y-5">
            {/*
              WhatsApp quick path: customers who prefer chat never have to open
              the form. Uses the same site WhatsApp configuration as every
              other CTA — there is no second contact system.
            */}
            <div className="flex flex-col gap-3 rounded-2xl border border-[#25D366]/40 bg-[#25D366]/5 p-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-3">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#25D366]/15 text-[#128C4A]">
                  <IconWhatsApp className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-bold text-navy">{t.quote.whatsappQuickTitle}</p>
                  <p className="mt-0.5 text-sm leading-6 text-secondary">
                    {t.quote.whatsappQuickBody}
                  </p>
                </div>
              </div>
              <TrackedLink
                href={whatsappQuickHref}
                event="whatsapp_click"
                context={{ surface: "quote_quick_path", lang: code }}
                className="btn btn-whatsapp shrink-0"
              >
                <IconWhatsApp className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>{t.quote.whatsappQuickCta}</span>
              </TrackedLink>
            </div>

            <QuoteForm
              serviceOptions={getQuoteServiceOptions(code)}
              propertyTypes={t.quote.propertyTypes}
              whatsappHref={whatsappHref}
              lang={code}
              t={t.quote}
            />
          </div>

          <aside className="space-y-5 lg:sticky lg:top-24">
            <div className="rounded-2xl bg-navy p-6 text-white shadow-card">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-accent">
                <IconMapPin className="h-5 w-5" aria-hidden="true" />
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
                          <Icon className="h-4 w-4 text-brand" aria-hidden="true" />
                          <h3 className="text-sm font-semibold text-navy">{step.title}</h3>
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
              <p className="mt-2 text-sm leading-6 text-secondary">{t.quote.statusBody}</p>
              <Link
                href={getContactHref(code)}
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                {t.cta.viewContactDetails}
                <IconArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-app">
          <p className="eyebrow">{t.quote.faqEyebrow}</p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-navy">
            {t.quote.faqTitle}
          </h2>
          <div className="mt-6 grid gap-3 lg:grid-cols-2">
            {t.quote.faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-xl border border-slate-200 bg-surface px-5 py-4 shadow-soft"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-sm font-semibold text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:text-base">
                  {faq.question}
                  <IconArrowRight
                    className="h-4 w-4 shrink-0 text-brand transition-transform group-open:rotate-90"
                    aria-hidden="true"
                  />
                </summary>
                <p className="mt-3 text-sm leading-6 text-secondary">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-surface">
        <div className="container-app grid gap-8 rounded-3xl border border-slate-200 bg-white px-6 py-9 sm:px-9 lg:grid-cols-[1fr_auto] lg:items-center">
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
            icon={<IconArrowRight className="h-4 w-4" aria-hidden="true" />}
          >
            {t.cta.exploreServices}
          </Button>
        </div>
      </section>

      <section className="section bg-white">
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
              <p className="mt-3 text-sm leading-6 text-white/75">{t.quote.coverageBody}</p>
              <div className="mt-6">
                <Button
                  href={localizedHref("/areas", code)}
                  variant="primary"
                  icon={<IconArrowRight className="h-4 w-4" aria-hidden="true" />}
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
