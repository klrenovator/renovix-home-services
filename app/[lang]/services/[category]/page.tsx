import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PagePlaceholder } from "@/components/PagePlaceholder";
import { getLanguage } from "@/data/languages";
import { getServiceBySlug } from "@/data/services";
import { siteConfig } from "@/data/site";

type ServicePageProps = {
  params: Promise<{ lang: string; category: string }>;
};

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { category, lang } = await params;
  const language = getLanguage(lang);
  const service = getServiceBySlug(category);

  if (!language || !service) {
    return {};
  }

  const canonicalUrl = `${siteConfig.url}/${lang}/services/${service.slug}/`;

  return {
    title: service.name,
    description: service.shortDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${service.name} | Renovix Home Services`,
      description: service.shortDescription,
      url: canonicalUrl,
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { category, lang } = await params;
  const language = getLanguage(lang);
  const service = getServiceBySlug(category);

  if (!language || !service) {
    notFound();
  }

  return (
    <PagePlaceholder
      eyebrow="Our Services"
      title={service.name}
      description={`${service.shortDescription} Detailed service information will be added in a later phase.`}
      lang={lang}
    />
  );
}
