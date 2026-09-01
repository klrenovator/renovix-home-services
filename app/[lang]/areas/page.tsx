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
import { getAreaName, getAreasIndexFaqs, getRegionName, getRegionSummary } from "@/data/i18n";
import { getWhatsAppHref, siteConfig } from "@/data/site";
import { areaRegions } from "@/data/area-content";
import { getDictionary } from "@/i18n";
import { contentHref, localizedHref } from "@/i18n/hrefs";
import { buildPageMetadata } from "@/i18n/seo";

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

  const t = getDictionary(language.code);

  return buildPageMetadata({
    lang: language.code,
    path: "/areas/",
    title: t.areasIndex.metaTitle,
    description: t.areasIndex.metaDescription,
    ogDescription: t.areasIndex.ogDescription,
    availableLanguages: languages.map((item) => item.code),
  });
}

export default async function AreasPage({ params }: AreasPageProps) {
  const { lang } = await params;
  const language = getLanguage(lang);

  if (!language) {
    notFound();
  }

  const code = language.code;
  const t = getDictionary(code);
  const faqs = getAreasIndexFaqs(code);
  const guideCount = areaRegions.reduce((total, region) => total + region.areas.length, 0);

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
              name: t.common.home,
              item: `${siteConfig.url}/${code}/`,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: t.areasIndex.breadcrumb,
              item: `${siteConfig.url}/${code}/areas/`,
            },
          ],
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
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
            lang={code}
            items={[
              { label: t.common.home, href: "/" },
              { label: t.areasIndex.breadcrumb },
            ]}
          />

          <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl">
            {t.areasIndex.title}
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/80">
            {t.areasIndex.lead}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              href={localizedHref("/quote", code)}
              variant="primary"
              icon={<IconArrowRight className="h-4 w-4" />}
            >
              {t.cta.getFreeQuote}
            </Button>
            <WhatsAppButton
              href={getWhatsAppHref(code)}
              variant="secondary"
              label={t.cta.whatsappUs}
            />
          </div>

          <ul className="mt-8 flex flex-wrap gap-2">
            <li className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-medium text-white/90">
              <IconMapPin className="h-3.5 w-3.5 text-accent" />
              {guideCount} {t.areasIndex.guidesCountSuffix}
            </li>
            {areaRegions.map((region) => (
              <li
                key={region.id}
                className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-medium text-white/90"
              >
                {getRegionName(region.id, code)}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-app">
          <SectionHeading
            eyebrow={t.areasIndex.guidesEyebrow}
            title={t.areasIndex.guidesTitle}
            description={t.areasIndex.guidesDescription}
          />

          <div className="mt-10 space-y-12">
            {areaRegions.map((region) => {
              const regionHref = contentHref("areaRegion", region.id, code);

              return (
                <div key={region.id}>
                  <div className="flex flex-wrap items-end justify-between gap-4">
                    <div className="max-w-2xl">
                      <h3 className="text-2xl font-bold tracking-tight text-navy">
                        {getRegionName(region.id, code)}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-secondary">
                        {getRegionSummary(region.id, code, region.summary)}
                      </p>
                    </div>
                    {regionHref ? (
                      <Link
                        href={regionHref}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-colors hover:text-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                      >
                        {t.areasIndex.viewRegion}
                        <IconArrowRight className="h-4 w-4" />
                      </Link>
                    ) : null}
                  </div>

                  <ul className="mt-6 flex flex-wrap gap-2">
                    {region.areas.map((area) => {
                      const href = contentHref(
                        "area",
                        `${area.region}/${area.slug}`,
                        code,
                      );
                      const label = getAreaName(area, code);

                      return (
                        <li key={area.slug}>
                          {href ? (
                            <Link
                              href={href}
                              className="chip transition-colors hover:border-brand hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                            >
                              {label}
                            </Link>
                          ) : (
                            <span className="chip">{label}</span>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>

          <div className="mt-12 rounded-2xl border border-slate-200/80 bg-surface p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
                <IconCompass className="h-5 w-5" />
              </span>
              <h3 className="text-lg font-bold tracking-tight text-navy">
                {t.areasIndex.klangValleyTitle}
              </h3>
            </div>
            {t.areasIndex.klangValleyParagraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="mt-4 max-w-3xl text-sm leading-6 text-secondary"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <AreaFaqSection
        name={t.areasIndex.breadcrumb}
        faqs={faqs}
        eyebrow={t.areasIndex.faqEyebrow}
        title={t.areasIndex.faqTitle}
      />
      <AreaCtaSection
        name={t.common.klangValley}
        lang={code}
        eyebrow={t.areasIndex.ctaEyebrow}
        title={t.areasIndex.ctaTitle}
        description={t.areasIndex.ctaDescription}
        primaryLabel={t.cta.requestQuote}
        whatsappLabel={t.cta.whatsappUs}
        note={t.home.ctaSection.note}
      />
    </>
  );
}
