import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceGrid } from "@/components/home/ServiceGrid";
import { Button, WhatsAppButton } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/service/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconArrowRight } from "@/components/icons";
import { getLanguage } from "@/data/languages";
import { getWhatsAppHref } from "@/data/site";
import { localizeHref } from "@/data/navigation";
import { serviceDetails } from "@/data/service-content";
import { siteConfig } from "@/data/site";

type ServicesPageProps = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({
  params,
}: ServicesPageProps): Promise<Metadata> {
  const { lang } = await params;
  const language = getLanguage(lang);

  if (!language) {
    return {};
  }

  const canonicalUrl = `${siteConfig.url}/${lang}/services/`;

  return {
    title: {
      absolute: "Our Services in Kuala Lumpur & Selangor | Renovix Home Services",
    },
    description:
      "Explore Renovix home services in Kuala Lumpur & Selangor: tiling, welding & metal works, electrical, painting, ceiling & partition, renovation, plumbing, waterproofing, flooring and handyman services.",
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: "Our Services in Kuala Lumpur & Selangor | Renovix Home Services",
      description:
        "Complete home renovation and improvement services across Kuala Lumpur, Selangor and the Klang Valley.",
      url: canonicalUrl,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
    },
  };
}

export default async function ServicesPage({ params }: ServicesPageProps) {
  const { lang } = await params;
  const language = getLanguage(lang);

  if (!language) {
    notFound();
  }

  return (
    <>
      <section className="relative overflow-hidden bg-navy text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand/20"
        />
        <div className="container-app relative py-12 sm:py-16 lg:py-20">
          <Breadcrumbs
            inverse
            items={[
              { label: "Home", href: "/" },
              { label: "Services" },
            ]}
            lang={lang}
          />
          <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl">
            Our Home Services in Kuala Lumpur &amp; Selangor
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-white/80">
            Ten practical service categories covering renovation, repairs, maintenance and
            home improvement across the Klang Valley. Each service page explains what we
            do, the problems we solve and how the work is carried out.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              href={localizeHref("/quote", lang)}
              variant="primary"
              icon={<IconArrowRight className="h-4 w-4" />}
            >
              Get a Free Quote
            </Button>
            <WhatsAppButton href={getWhatsAppHref(lang)} variant="secondary" />
          </div>
        </div>
      </section>

      <section className="section section-surface">
        <div className="container-app">
          <SectionHeading
            eyebrow="Explore Services"
            title="Choose a service to learn more"
            description="Every service page covers the full scope of work, sub-services, common problems, property types we serve, our process, service areas and FAQs."
          />
          <div className="mt-10">
            <ServiceGrid lang={lang} />
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-app">
          <SectionHeading
            eyebrow="One-Stop Home Services"
            title="Multiple services, one point of contact"
            description="Most renovation and repair projects combine several services. Renovix coordinates tiling, electrical, plumbing, painting and the rest through a single team — so the work is sequenced properly and you deal with one point of contact."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {serviceDetails.slice(0, 4).map((detail) => (
              <article key={detail.slug} className="card h-full p-6">
                <h3 className="h3-card">{detail.name}</h3>
                <p className="mt-3 text-sm leading-6 text-secondary">
                  {detail.highlights[0]?.description}
                </p>
              </article>
            ))}
          </div>
          <p className="mt-8 text-sm text-secondary">
            Not sure which service you need? Describe the job to us and we will point you
            to the right one.
          </p>
        </div>
      </section>
    </>
  );
}
