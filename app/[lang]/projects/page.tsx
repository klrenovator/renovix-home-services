import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PagePlaceholder } from "@/components/PagePlaceholder";
import { getLanguage } from "@/data/languages";

type ProjectsPageProps = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Projects",
    description:
      "Browse Renovix Home Services project content for renovation and improvement work across Kuala Lumpur and Selangor.",
  };
}

export default async function ProjectsPage({ params }: ProjectsPageProps) {
  const { lang } = await params;

  if (!getLanguage(lang)) {
    notFound();
  }

  return (
    <PagePlaceholder
      eyebrow="Projects"
      title="Home Improvement Projects"
      description="A structured project portfolio is planned for a later phase. Actual project details and photos will be added when available."
      lang={lang}
    />
  );
}
