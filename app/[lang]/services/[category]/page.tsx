import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePage } from "@/components/service/ServicePage";
import { ServiceJsonLd } from "@/components/service/ServiceJsonLd";
import { getLanguage, languages } from "@/data/languages";
import { hasTranslation, languagesWithTranslation } from "@/i18n/coverage";
import { buildPageMetadata } from "@/i18n/seo";
import { services } from "@/data/services";
import { getServiceDetail, getRelatedServiceDetails } from "@/data/service-content";
import { getProblemsBySlugs } from "@/data/problem-content";

type ServicePageProps = {
  params: Promise<{ lang: string; category: string }>;
};

export function generateStaticParams() {
  return languages.flatMap((language) =>
    services
      .filter((service) => hasTranslation("service", service.slug, language.code))
      .map((service) => ({
        lang: language.code,
        category: service.slug,
      })),
  );
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { category, lang } = await params;
  const language = getLanguage(lang);
  const detail = getServiceDetail(category);

  if (!language || !detail) {
    return {};
  }

  return buildPageMetadata({
    lang: language.code,
    path: `/services/${detail.slug}/`,
    title: detail.title,
    description: detail.metaDescription,
    availableLanguages: languagesWithTranslation("service", detail.slug),
  });
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { category, lang } = await params;
  const language = getLanguage(lang);
  const detail = getServiceDetail(category);

  if (!language || !detail || !hasTranslation("service", detail.slug, language.code)) {
    notFound();
  }

  const related = getRelatedServiceDetails(detail);
  const relatedProblems = getProblemsBySlugs(detail.relatedProblems);

  return (
    <>
      <ServiceJsonLd detail={detail} lang={lang} />
      <ServicePage
        detail={detail}
        related={related}
        relatedProblems={relatedProblems}
        lang={lang}
      />
    </>
  );
}
