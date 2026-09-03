import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageSchema } from "@/components/seo/PageSchema";
import { faqNode } from "@/components/seo/schema";
import { Breadcrumbs } from "@/components/service/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button, WhatsAppButton } from "@/components/ui/Button";
import { IconArrowRight, IconMapPin, IconCompass, IconBuilding, IconCheck } from "@/components/icons";
import { AreaFaqSection } from "@/components/area/AreaFaqSection";
import { AreaCtaSection } from "@/components/area/AreaCtaSection";
import { getLanguage, languages } from "@/data/languages";
import { getAreaName, getAreasIndexFaqs, getRegionName, getRegionSummary } from "@/data/i18n";
import { getWhatsAppHref } from "@/data/site";
import { areaRegions } from "@/data/area-content";
import { districtGroups, getStateCoverage } from "@/data/locations";
import { getDictionary } from "@/i18n";
import { contentHref, localizedHref } from "@/i18n/hrefs";
import { absoluteUrl, buildPageMetadata } from "@/i18n/seo";

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
  const canonical = absoluteUrl(code, "/areas/");
  const allStates = getStateCoverage();

  return (
    <>
      <PageSchema
        lang={code}
        path="/areas/"
        name={t.areasIndex.title}
        description={t.areasIndex.metaDescription}
        breadcrumbs={[
          { name: t.common.home, url: absoluteUrl(code, "/") },
          { name: t.areasIndex.breadcrumb },
        ]}
        extra={[faqNode(canonical, faqs)]}
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
              href={getWhatsAppHref()}
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

      {/* Region & Area Guides Directory */}
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

          {/* District Explorer */}
          <div className="mt-16 border-t border-slate-100 pt-12">
            <SectionHeading
              eyebrow={t.areasIndex.hierarchyEyebrow}
              title={t.areasIndex.districtExplorerTitle}
              description={t.areasIndex.districtExplorerDescription}
            />

            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {districtGroups.map((district) => (
                <div
                  key={district.id}
                  className="rounded-2xl border border-slate-200/80 bg-surface p-6 shadow-soft"
                >
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="text-base font-bold text-navy">
                      {district.name}
                    </h4>
                    <span className="text-xs font-semibold text-brand">
                      {district.regionId === "kuala-lumpur" ? t.common.kualaLumpur : t.common.selangor}
                    </span>
                  </div>

                  <p className="mt-2 text-xs leading-5 text-secondary">
                    {district.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5 border-t border-slate-200/60 pt-4">
                    {district.locationSlugs.map((slug) => {
                      const region = areaRegions.find((r) => r.id === district.regionId);
                      const areaObj = region?.areas.find((a) => a.slug === slug);
                      const href = contentHref("area", `${district.regionId}/${slug}`, code);
                      const label = areaObj?.name ?? slug;

                      return (
                        <span key={slug}>
                          {href ? (
                            <Link
                              href={href}
                              className="chip text-xs hover:border-brand hover:text-brand"
                            >
                              {label}
                            </Link>
                          ) : (
                            <span className="chip text-xs">{label}</span>
                          )}
                        </span>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Klang Valley & Malaysia Hierarchy Coverage */}
          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-200/80 bg-surface p-6 sm:p-8">
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
                  className="mt-4 text-sm leading-6 text-secondary"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="rounded-2xl border border-slate-200/80 bg-surface p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600">
                  <IconBuilding className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-bold tracking-tight text-navy">
                  {t.areasIndex.expansionRoadmapTitle}
                </h3>
              </div>
              <p className="mt-4 text-sm leading-6 text-secondary">
                {t.areasIndex.expansionRoadmapBody}
              </p>
              <div className="mt-6 space-y-2.5 border-t border-slate-200/60 pt-4">
                {allStates.map((state) => (
                  <div
                    key={state.id}
                    className="flex items-center justify-between text-xs"
                  >
                    <span className="font-medium text-navy">{state.name}</span>
                    {state.published ? (
                      <span className="inline-flex items-center gap-1 font-semibold text-emerald-600">
                        <IconCheck className="h-3.5 w-3.5" />
                        {state.totalPublishedGuides} {t.areasIndex.guidesCountSuffix}
                      </span>
                    ) : (
                      <span className="font-medium text-slate-400">
                        {code === "ms" ? "Dirancang" : code === "zh" ? "未来规划" : "Planned Roadmap"}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <AreaFaqSection
        name={t.areasIndex.breadcrumb}
        faqs={faqs}
        lang={code}
        eyebrow={t.areasIndex.faqEyebrow}
        title={t.areasIndex.faqTitle}
        description={t.areasIndex.faqDescription}
      />
      <AreaCtaSection
        name={t.common.klangValley}
        lang={code}
        eyebrow={t.areasIndex.ctaEyebrow}
        title={t.areasIndex.ctaTitle}
        description={t.areasIndex.ctaDescription}
      />
    </>
  );
}
