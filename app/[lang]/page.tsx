import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HomePage } from "@/components/home/HomePage";
import { PageSchema } from "@/components/seo/PageSchema";
import { getLanguage, languages } from "@/data/languages";
import { getDictionary } from "@/i18n";
import { buildPageMetadata } from "@/i18n/seo";

type HomePageProps = {
  params: Promise<{ lang: string }>;
};

export function generateStaticParams() {
  return languages.map((language) => ({ lang: language.code }));
}

export async function generateMetadata({
  params,
}: HomePageProps): Promise<Metadata> {
  const { lang } = await params;
  const language = getLanguage(lang);

  if (!language) {
    return {};
  }

  const t = getDictionary(language.code);

  return buildPageMetadata({
    lang: language.code,
    path: "/",
    title: t.meta.homeTitle,
    description: t.meta.homeDescription,
    availableLanguages: languages.map((item) => item.code),
  });
}

export default async function Home({ params }: HomePageProps) {
  const { lang } = await params;
  const language = getLanguage(lang);

  if (!language) {
    notFound();
  }

  const code = language.code;
  const t = getDictionary(code);

  return (
    <>
      <PageSchema
        lang={code}
        path="/"
        name={t.home.hero.title}
        description={t.meta.homeDescription}
      />
      <HomePage lang={code} />
    </>
  );
}
