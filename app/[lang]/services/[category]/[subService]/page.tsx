import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SubServicePage } from "@/components/service/SubServicePage";
import { SubServiceJsonLd } from "@/components/service/SubServiceJsonLd";
import { getLanguage, languages } from "@/data/languages";
import {
  getAllSubServices,
  getSubService,
  getResolvedSubService,
  subServiceLanguages,
} from "@/data/sub-services";
import { buildPageMetadata } from "@/i18n/seo";

type SubServicePageProps = {
  params: Promise<{ lang: string; category: string; subService: string }>;
};

export function generateStaticParams() {
  return languages.flatMap((language) =>
    getAllSubServices()
      .filter((sub) => subServiceLanguages(sub.slug).includes(language.code))
      .map((sub) => ({
        lang: language.code,
        category: sub.serviceSlug,
        subService: sub.slug,
      })),
  );
}

export async function generateMetadata({
  params,
}: SubServicePageProps): Promise<Metadata> {
  const { lang, category, subService } = await params;
  const language = getLanguage(lang);
  const sub = getSubService(subService);

  if (!language || !sub || sub.serviceSlug !== category) {
    return {};
  }

  const resolved = getResolvedSubService(subService, lang);
  if (!resolved) {
    return {};
  }

  return buildPageMetadata({
    lang: language.code,
    path: `/services/${category}/${resolved.slug}/`,
    title: resolved.text.title,
    description: resolved.text.metaDescription,
    availableLanguages: subServiceLanguages(resolved.slug),
  });
}

export default async function SubServiceDetailPage({
  params,
}: SubServicePageProps) {
  const { lang, category, subService } = await params;
  const language = getLanguage(lang);

  if (!language) {
    notFound();
  }

  const sub = getSubService(subService);
  if (!sub || sub.serviceSlug !== category) {
    notFound();
  }

  if (!subServiceLanguages(sub.slug).includes(language.code)) {
    notFound();
  }

  const resolved = getResolvedSubService(subService, lang);
  if (!resolved) {
    notFound();
  }

  return (
    <>
      <SubServiceJsonLd detail={resolved} lang={lang} />
      <SubServicePage detail={resolved} lang={lang} />
    </>
  );
}
