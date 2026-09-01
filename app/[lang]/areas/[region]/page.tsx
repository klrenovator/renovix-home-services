import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AreaRegionPage } from "@/components/area/AreaRegionPage";
import { AreaRegionJsonLd } from "@/components/area/AreaRegionJsonLd";
import { AreaFaqSection } from "@/components/area/AreaFaqSection";
import { AreaCtaSection } from "@/components/area/AreaCtaSection";
import { getLanguage, languages } from "@/data/languages";
import { getAreaRegion, isAreaRegionId } from "@/data/area-content";
import { areaRegions } from "@/data/area-content";
import { siteConfig } from "@/data/site";

type RegionPageProps = {
  params: Promise<{ lang: string; region: string }>;
};

export function generateStaticParams() {
  return languages.flatMap((language) =>
    areaRegions.map((region) => ({
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

  const canonicalUrl = `${siteConfig.url}/${lang}/areas/${region.id}/`;

  return {
    title: {
      absolute: region.title,
    },
    description: region.metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: region.title,
      description: region.metaDescription,
      url: canonicalUrl,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
    },
  };
}

export default async function RegionPage({ params }: RegionPageProps) {
  const { lang, region: regionId } = await params;
  const language = getLanguage(lang);
  const region = isAreaRegionId(regionId) ? getAreaRegion(regionId) : undefined;

  if (!language || !region) {
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
