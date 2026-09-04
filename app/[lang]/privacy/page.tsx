import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LegalPage } from "@/components/LegalPage";
import { PageSchema } from "@/components/seo/PageSchema";
import { getLanguage, languages } from "@/data/languages";
import { getDictionary } from "@/i18n";
import { absoluteUrl, buildPageMetadata } from "@/i18n/seo";

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
    <>
      <PageSchema
        lang={language.code}
        path="/privacy/"
        name={t.legalPage.privacyTitle}
        description={t.legalPage.privacyMetaDescription}
        breadcrumbs={[
          { name: t.common.home, url: absoluteUrl(language.code, "/") },
          { name: t.legal.privacy },
        ]}
      />
      <LegalPage
        title={t.legalPage.privacyTitle}
        description={t.legalPage.privacyDescription}
        sections={t.legalPage.privacySections}
        lang={language.code}
      />
    </>
  );
}
