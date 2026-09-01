import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AreaPage } from "@/components/area/AreaPage";
import { AreaJsonLd } from "@/components/area/AreaJsonLd";
import { getLanguage, languages } from "@/data/languages";
import { areaRegions, getAreaDetail } from "@/data/area-content";
import { siteConfig } from "@/data/site";

type AreaDetailPageProps = {
  params: Promise<{ lang: string; region: string; slug: string }>;
};

export function generateStaticParams() {
  return languages.flatMap((language) =>
    areaRegions.flatMap((region) =>
      region.areas.map((area) => ({
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
  const area = getAreaDetail(region, slug);

  if (!language || !area) {
    return {};
  }

  const canonicalUrl = `${siteConfig.url}/${lang}/areas/${area.region}/${area.slug}/`;

  return {
    title: {
      absolute: area.title,
    },
    description: area.metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: area.title,
      description: area.metaDescription,
      url: canonicalUrl,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
    },
  };
}

export default async function AreaDetailPage({ params }: AreaDetailPageProps) {
  const { lang, region, slug } = await params;
  const language = getLanguage(lang);
  const area = getAreaDetail(region, slug);

  if (!language || !area) {
    notFound();
  }

  return (
    <>
      <AreaJsonLd area={area} lang={lang} />
      <AreaPage area={area} lang={lang} />
    </>
  );
}
