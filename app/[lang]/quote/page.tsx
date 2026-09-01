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
import { PageBreadcrumbJsonLd } from "@/components/support/PageBreadcrumbJsonLd";
import { PageHero } from "@/components/support/PageHero";
import { Button } from "@/components/ui/Button";
import { getLanguage, languages } from "@/data/languages";
import { localizeHref } from "@/data/navigation";
import { propertyTypeOptions, quoteServiceOptions } from "@/data/quote";
import { getContactHref, siteConfig } from "@/data/site";

type QuotePageProps = {
  params: Promise<{ lang: string }>;
};

const quoteSteps = [
  {
    title: "Share the essentials",
    description:
      "Choose the service, tell us where the work is needed and add a clear description of the issue or project.",
    icon: IconClipboard,
  },
  {
    title: "Add helpful context",
    description:
      "Photos, measurements, property details and building access notes can help with the initial assessment.",
    icon: IconCamera,
  },
  {
    title: "Review before quotation",
    description:
      "The details are considered first. Depending on the work, more information or an assessment may be needed before a quotation is prepared.",
    icon: IconCheck,
  },
];

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

  const canonicalUrl = `${siteConfig.url}/${lang}/quote/`;
  const title = "Get a Quote for Home Services in KL & Selangor | Renovix";
  const description =
    "Request a home renovation, repair or improvement quote from Renovix for Kuala Lumpur, Selangor and the Klang Valley. Share service, property, location and photos to help with assessment.";

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: "website",
    },
    twitter: { card: "summary_large_image" },
  };
}

export default async function QuotePage({ params }: QuotePageProps) {
  const { lang } = await params;

  if (!getLanguage(lang)) {
    notFound();
  }

  return (
    <>
      <PageBreadcrumbJsonLd lang={lang} label="Get a Quote" path="/quote/" />
      <PageHero
        eyebrow="Quote Request"
        title="Get a quote for your home service needs"
        description="Share the service, property type, location and work you need. Useful details and photos can help with the assessment; a quotation is not generated instantly."
        currentLabel="Get a Quote"
        lang={lang}
        primaryHref="#quote-form"
        primaryLabel="Start Quote Request"
      />

      <section className="section section-surface">
        <div className="container-app grid gap-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(280px,0.65fr)] lg:items-start lg:gap-10">
          <QuoteForm
            serviceOptions={quoteServiceOptions}
            propertyTypes={propertyTypeOptions}
            contactHref={getContactHref(lang)}
          />

          <aside className="space-y-5 lg:sticky lg:top-24">
            <div className="rounded-2xl bg-navy p-6 text-white shadow-card">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-accent">
                <IconMapPin className="h-5 w-5" />
              </span>
              <p className="eyebrow-light mt-5">What happens next</p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-white">
                A considered assessment, not an instant promise
              </h2>
              <p className="mt-3 text-sm leading-6 text-white/75">
                A useful quote depends on the scope and condition of the work. The
                information you share helps identify whether more details or an
                assessment may be needed.
              </p>
            </div>

            <div className="card p-6">
              <p className="eyebrow">How to make the request useful</p>
              <ol className="mt-5 space-y-5">
                {quoteSteps.map((step, index) => {
                  const Icon = step.icon;

                  return (
                    <li key={step.title} className="flex gap-3">
                      <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-sm font-bold text-brand">
                        {index + 1}
                      </span>
                      <div>
                        <div className="flex items-center gap-2">
                          <Icon className="h-4 w-4 text-brand" />
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
              <h2 className="text-sm font-semibold text-navy">Form delivery status</h2>
              <p className="mt-2 text-sm leading-6 text-secondary">
                This Phase 5 form is a front-end architecture only. A secure backend,
                notification destination and photo-storage connection have not been
                configured, so no information is transmitted from this page yet.
              </p>
              <Link
                href={getContactHref(lang)}
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                View contact details
                <IconArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-app grid gap-8 rounded-3xl border border-slate-200 bg-surface px-6 py-9 sm:px-9 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="eyebrow">Not sure where to start?</p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-navy">
              Browse the service scope before you request a quote
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-secondary">
              The service pages explain the available work, common problems and
              related services. This can make it easier to choose the right option in
              the form.
            </p>
          </div>
          <Button
            href={localizeHref("/services", lang)}
            variant="outline"
            icon={<IconArrowRight className="h-4 w-4" />}
          >
            Explore Services
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
              <p className="eyebrow-light">Coverage</p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-white">
                Work across Kuala Lumpur, Selangor &amp; the Klang Valley
              </h2>
              <p className="mt-3 text-sm leading-6 text-white/75">
                Include your neighbourhood or city in the quote request. You can also
                use the service area guides to understand the local coverage context.
              </p>
              <div className="mt-6">
                <Button
                  href={localizeHref("/areas", lang)}
                  variant="primary"
                  icon={<IconArrowRight className="h-4 w-4" />}
                >
                  View Service Areas
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
