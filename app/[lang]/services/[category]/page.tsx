import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePage } from "@/components/service/ServicePage";
import { ServiceJsonLd } from "@/components/service/ServiceJsonLd";
import { getLanguage, languages } from "@/data/languages";
import { services } from "@/data/services";
import { getServiceDetail, getRelatedServiceDetails } from "@/data/service-content";
import { siteConfig } from "@/data/site";

type ServicePageProps = {
  params: Promise<{ lang: string; category: string }>;
};

export function generateStaticParams() {
  return languages.flatMap((language) =>
    services.map((service) => ({
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

  const canonicalUrl = `${siteConfig.url}/${lang}/services/${detail.slug}/`;

  return {
    title: {
      absolute: detail.title,
    },
    description: detail.metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: detail.title,
      description: detail.metaDescription,
      url: canonicalUrl,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { category, lang } = await params;
  const language = getLanguage(lang);
  const detail = getServiceDetail(category);

  if (!language || !detail) {
    notFound();
  }

  const related = getRelatedServiceDetails(detail);

  return (
    <>
      <ServiceJsonLd detail={detail} lang={lang} />
      <ServicePage detail={detail} related={related} lang={lang} />
    </>
  );
}
