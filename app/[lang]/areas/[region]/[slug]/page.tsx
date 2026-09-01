import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AreaPage } from "@/components/area/AreaPage";
import { AreaJsonLd } from "@/components/area/AreaJsonLd";
import { getLanguage, languages } from "@/data/languages";
import { areaRegions, getAreaDetail } from "@/data/area-content";
import { hasTranslation, languagesWithTranslation } from "@/i18n/coverage";
import { buildPageMetadata } from "@/i18n/seo";

type AreaDetailPageProps = {
  params: Promise<{ lang: string; region: string; slug: string }>;
};

export function generateStaticParams() {
  return languages.flatMap((language) =>
    areaRegions.flatMap((region) =>
      region.areas
        .filter((area) =>
          hasTranslation("area", `${region.id}/${area.slug}`, language.code),
        )
        .map((area) => ({
          lang: language.code,
          region: region.id,
          slug: area.slug,
        })),
    ),
  );
}

export async function generateMetadata({
  params,
}: AreaDetailPageProps): Promise<Metadata> {
  const { lang, region, slug } = await params;
  const language = getLanguage(lang);
  const area = getAreaDetail(region, slug, lang);

  if (!language || !area) {
    return {};
  }

  return buildPageMetadata({
    lang: language.code,
    path: `/areas/${area.region}/${area.slug}/`,
    title: area.title,
    description: area.metaDescription,
    availableLanguages: languagesWithTranslation(
      "area",
      `${area.region}/${area.slug}`,
    ),
  });
}

export default async function AreaDetailPage({ params }: AreaDetailPageProps) {
  const { lang, region, slug } = await params;
  const language = getLanguage(lang);
  const area = getAreaDetail(region, slug, lang);

  if (
    !language ||
    !area ||
    !hasTranslation("area", `${area.region}/${area.slug}`, language.code)
  ) {
    notFound();
  }

  return (
    <>
      <AreaJsonLd area={area} lang={lang} />
      <AreaPage area={area} lang={lang} />
    </>
  );
}
