import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/service/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button, WhatsAppButton } from "@/components/ui/Button";
import { IconArrowRight, IconMapPin, IconCompass } from "@/components/icons";
import { JsonLd } from "@/components/service/JsonLd";
import { AreaFaqSection } from "@/components/area/AreaFaqSection";
import { AreaCtaSection } from "@/components/area/AreaCtaSection";
import { getLanguage, languages } from "@/data/languages";
import { localizeHref } from "@/data/navigation";
import { getWhatsAppHref, siteConfig } from "@/data/site";
import { areaRegions, areasIndexFaqs } from "@/data/area-content";

type AreasPageProps = {
  params: Promise<{ lang: string }>;
};

export function generateStaticParams() {
  return languages.map((language) => ({ lang: language.code }));
}

export async function generateMetadata({
  params,
}: AreasPageProps): Promise<Metadata> {
  const { lang } = await params;
  const language = getLanguage(lang);

  if (!language) {
    return {};
  }

  const canonicalUrl = `${siteConfig.url}/${lang}/areas/`;

  return {
    title: {
      absolute:
        "Service Areas in Kuala Lumpur, Selangor & Klang Valley | Renovix",
    },
    description:
      "Renovix serves Kuala Lumpur, Selangor and the Klang Valley with home renovation and repair services. Explore our local area guides for KL neighbourhoods and Selangor towns.",
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: "Service Areas in Kuala Lumpur, Selangor & Klang Valley | Renovix",
      description:
        "Local area guides covering housing stock, common problems and available services across KL neighbourhoods and Selangor towns.",
      url: canonicalUrl,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
    },
  };
}

export default async function AreasPage({ params }: AreasPageProps) {
  const { lang } = await params;
  const language = getLanguage(lang);

  if (!language) {
    notFound();
  }

  const canonicalUrl = `${siteConfig.url}/${lang}/areas/`;

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: `${siteConfig.url}/${lang}/`,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Service Areas",
              item: canonicalUrl,
            },
          ],
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: areasIndexFaqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }}
      />

      <section className="relative overflow-hidden bg-navy text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand/20"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-accent/10"
        />

        <div className="container-app relative py-12 sm:py-16 lg:py-20">
          <Breadcrumbs
            inverse
            lang={lang}
            items={[{ label: "Home", href: "/" }, { label: "Service Areas" }]}
          />

          <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl">
            Service Areas — Kuala Lumpur, Selangor &amp; the Klang Valley
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/80">
            Renovix provides home renovation and repair services across the Klang
            Valley — the metropolitan region made up of Kuala Lumpur and the
            surrounding Selangor towns. Every area guide below covers the local
            housing stock, the problems we most often attend to there, and the
            services local households request.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              href={localizeHref("/#contact", lang)}
              variant="primary"
              icon={<IconArrowRight className="h-4 w-4" />}
            >
              Get a Free Quote
            </Button>
            <WhatsAppButton href={getWhatsAppHref(lang)} variant="secondary" />
          </div>

          <ul className="mt-8 flex flex-wrap gap-2">
            <li className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-medium text-white/90">
              <IconMapPin className="h-3.5 w-3.5 text-accent" />
              {areaRegions.reduce((total, region) => total + region.areas.length, 0)}{" "}
              area guides
            </li>
            <li className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-medium text-white/90">
              Kuala Lumpur
            </li>
            <li className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-medium text-white/90">
              Selangor
            </li>
          </ul>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-app">
          <SectionHeading
            eyebrow="Where We Work"
            title="Choose a region to explore"
            description="Kuala Lumpur holds the city's neighbourhoods; Selangor wraps around it with the Klang Valley's biggest townships. Together they form our service area."
          />

          <div className="mt-10 space-y-12">
            {areaRegions.map((region) => (
              <div key={region.id}>
                <div className="flex flex-wrap items-end justify-between gap-4">
                  <div className="max-w-2xl">
                    <h3 className="text-2xl font-bold tracking-tight text-navy">
                      {region.name}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-secondary">
                      {region.summary}
                    </p>
                  </div>
                  <Link
                    href={localizeHref(`/areas/${region.id}`, lang)}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-colors hover:text-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    All {region.name} areas
                    <IconArrowRight className="h-4 w-4" />
                  </Link>
                </div>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {region.areas.map((area) => (
                    <li key={area.slug}>
                      <Link
                        href={localizeHref(`/areas/${area.region}/${area.slug}`, lang)}
                        className="chip transition-colors hover:border-brand hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                      >
                        {area.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-slate-200/80 bg-surface p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
                <IconCompass className="h-5 w-5" />
              </span>
              <h3 className="text-lg font-bold tracking-tight text-navy">
                What the Klang Valley means
              </h3>
            </div>
            <p className="mt-4 max-w-3xl text-sm leading-6 text-secondary">
              The Klang Valley is the conurbation centred on Kuala Lumpur and the
              Klang River basin, taking in the federal capital and the surrounding
              Selangor districts — Petaling, Klang, Shah Alam, Subang Jaya, Hulu
              Langat, Gombak, Sepang and Kuala Langat&apos;s edges. Practically, it
              means one connected labour and housing market: our teams move across
              it daily, from KL city condominiums to Selangor townships.
            </p>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-secondary">
              We publish honest area information only — no invented local offices
              or service radii. Coverage is confirmed when you enquire, and every
              guide below reflects the housing stock and renovation patterns we
              actually encounter there.
            </p>
          </div>
        </div>
      </section>

      <AreaFaqSection name="Service Areas" faqs={areasIndexFaqs} />
      <AreaCtaSection name="the Klang Valley" lang={lang} />
    </>
  );
}
