import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HomePage } from "@/components/home/HomePage";
import { getLanguage, languages } from "@/data/languages";
import { getSiteMetadata } from "@/data/site";

export function generateStaticParams() {
  return languages.map((language) => ({
    lang: language.code,
  }));
}

type HomePageProps = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata(): Promise<Metadata> {
  const metadata = getSiteMetadata();

  return {
    title: {
      absolute: metadata.title,
    },
    description: metadata.description,
  };
}

export default async function Home({ params }: HomePageProps) {
  const { lang } = await params;

  if (!getLanguage(lang)) {
    notFound();
  }

  return <HomePage lang={lang} />;
}
