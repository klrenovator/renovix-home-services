import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PagePlaceholder } from "@/components/PagePlaceholder";
import { getLanguage, languages } from "@/data/languages";
import { getDictionary } from "@/i18n";
import { buildPageMetadata } from "@/i18n/seo";

type PrivacyPageProps = {
  params: Promise<{ lang: string }>;
};

export function generateStaticParams() {
  return languages.map((language) => ({ lang: language.code }));
}

export async function generateMetadata({
  params,
}: PrivacyPageProps): Promise<Metadata> {
  const { lang } = await params;
  const language = getLanguage(lang);

  if (!language) {
    return {};
  }

  const t = getDictionary(language.code);

  return buildPageMetadata({
    lang: language.code,
    path: "/privacy/",
    title: t.legal.privacy,
    description: t.legalPage.privacyMetaDescription,
    availableLanguages: languages.map((item) => item.code),
  });
}

export default async function PrivacyPage({ params }: PrivacyPageProps) {
  const { lang } = await params;
  const language = getLanguage(lang);

  if (!language) {
    notFound();
  }

  const t = getDictionary(language.code);

  return (
    <PagePlaceholder
      eyebrow={t.legalPage.eyebrow}
      title={t.legalPage.privacyTitle}
      description={t.legalPage.privacyDescription}
      lang={language.code}
    />
  );
}
