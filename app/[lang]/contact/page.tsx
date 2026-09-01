import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PagePlaceholder } from "@/components/PagePlaceholder";
import { getLanguage } from "@/data/languages";

type ContactPageProps = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Contact",
    description:
      "Contact Renovix Home Services for home renovation, repair and improvement support across Kuala Lumpur, Selangor and the Klang Valley.",
  };
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { lang } = await params;

  if (!getLanguage(lang)) {
    notFound();
  }

  return (
    <PagePlaceholder
      eyebrow="Contact"
      title="Contact Renovix Home Services"
      description="Tell us what you need and our team can assess the work and guide you on the next step."
      lang={lang}
    />
  );
}
