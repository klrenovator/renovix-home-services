import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AreaRegionPage } from "@/components/area/AreaRegionPage";
import { AreaRegionJsonLd } from "@/components/area/AreaRegionJsonLd";
import { AreaFaqSection } from "@/components/area/AreaFaqSection";
import { AreaCtaSection } from "@/components/area/AreaCtaSection";
import { getLanguage, languages } from "@/data/languages";
import { getAreaRegion, isAreaRegionId } from "@/data/area-content";
import { areaRegions } from "@/data/area-content";
import { hasTranslation, languagesWithTranslation } from "@/i18n/coverage";
import { buildPageMetadata } from "@/i18n/seo";

type RegionPageProps = {
  params: Promise<{ lang: string; region: string }>;
};

export function generateStaticParams() {
  return languages.flatMap((language) =>
    areaRegions
      .filter((region) => hasTranslation("areaRegion", region.id, language.code))
      .map((region) => ({
        lang: language.code,
        region: region.id,
      })),
  );
}

export async function generateMetadata({
  params,
}: RegionPageProps): Promise<Metadata> {
  const { lang, region: regionId } = await params;
  const language = getLanguage(lang);
  const region = getAreaRegion(regionId);

  if (!language || !region) {
    return {};
  }

  return buildPageMetadata({
    lang: language.code,
    path: `/areas/${region.id}/`,
    title: region.title,
    description: region.metaDescription,
    availableLanguages: languagesWithTranslation("areaRegion", region.id),
  });
}

export default async function RegionPage({ params }: RegionPageProps) {
  const { lang, region: regionId } = await params;
  const language = getLanguage(lang);
  const region = isAreaRegionId(regionId) ? getAreaRegion(regionId) : undefined;

  if (!language || !region || !hasTranslation("areaRegion", region.id, language.code)) {
    notFound();
  }

  return (
    <>
      <AreaRegionJsonLd region={region} lang={lang} />
      <AreaRegionPage region={region} lang={lang} />
      <AreaFaqSection name={region.name} faqs={region.faqs} />
      <AreaCtaSection name={region.name} lang={lang} />
    </>
  );
}
