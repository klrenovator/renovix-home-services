import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LegalPage } from "@/components/LegalPage";
import { PageSchema } from "@/components/seo/PageSchema";
import { getLanguage, languages } from "@/data/languages";
import { getDictionary } from "@/i18n";
import { absoluteUrl, buildPageMetadata } from "@/i18n/seo";

type TermsPageProps = {
  params: Promise<{ lang: string }>;
};

export function generateStaticParams() {
  return languages.map((language) => ({ lang: language.code }));
}

export async function generateMetadata({
  params,
}: TermsPageProps): Promise<Metadata> {
  const { lang } = await params;
  const language = getLanguage(lang);

  if (!language) {
    return {};
  }

  const t = getDictionary(language.code);

  return buildPageMetadata({
    lang: language.code,
    path: "/terms/",
    title: t.legal.terms,
    description: t.legalPage.termsMetaDescription,
    availableLanguages: languages.map((item) => item.code),
  });
}

export default async function TermsPage({ params }: TermsPageProps) {
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
        path="/terms/"
        name={t.legalPage.termsTitle}
        description={t.legalPage.termsMetaDescription}
        breadcrumbs={[
          { name: t.common.home, url: absoluteUrl(language.code, "/") },
          { name: t.legal.terms },
        ]}
      />
      <LegalPage
        title={t.legalPage.termsTitle}
        description={t.legalPage.termsDescription}
        sections={t.legalPage.termsSections}
        lang={language.code}
      />
    </>
  );
}
