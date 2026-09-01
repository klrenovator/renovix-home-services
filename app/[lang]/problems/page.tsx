import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button, WhatsAppButton } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/service/Breadcrumbs";
import { IconArrowRight, IconAlertTriangle } from "@/components/icons";
import { getLanguage } from "@/data/languages";
import { getWhatsAppHref } from "@/data/site";
import { localizeHref } from "@/data/navigation";
import { problemCategories, getProblemsByCategory } from "@/data/problem-content";
import { getServiceBySlug } from "@/data/services";
import { siteConfig } from "@/data/site";

type ProblemsPageProps = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({
  params,
}: ProblemsPageProps): Promise<Metadata> {
  const { lang } = await params;
  const language = getLanguage(lang);

  if (!language) {
    return {};
  }

  const canonicalUrl = `${siteConfig.url}/${lang}/problems/`;

  return {
    title: {
      absolute: "Home Problems We Solve in Kuala Lumpur & Selangor | Renovix",
    },
    description:
      "Explore common home problems we help with across Kuala Lumpur & Selangor — tiling, electrical, painting, ceiling, plumbing, waterproofing and handyman issues explained with causes and solutions.",
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: "Home Problems We Solve in Kuala Lumpur & Selangor | Renovix",
      description:
        "Clear answers to common home problems across the Klang Valley, each linked to the right Renovix service.",
      url: canonicalUrl,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
    },
  };
}

export default async function ProblemsPage({ params }: ProblemsPageProps) {
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
              { label: "Problems" },
            ]}
            lang={lang}
          />
          <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl">
            Home Problems We Solve in Kuala Lumpur &amp; Selangor
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-white/80">
            Most people search for a home service by describing their problem rather than the
            service name. These pages explain each common problem, what causes it, the warning
            signs and how Renovix fixes it — each linked to the service that handles it.
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
          {problemCategories.map((category) => {
            const problems = getProblemsByCategory(category.id);
            const service = getServiceBySlug(category.serviceSlug);

            return (
              <div key={category.id} className="mb-16 last:mb-0">
                <div className="mb-6 max-w-2xl">
                  <p className="eyebrow">{category.label}</p>
                  <h2 className="h2-section mt-2 text-navy">
                    {service?.name ?? category.label}
                  </h2>
                  <p className="lead mt-3">{category.intro}</p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {problems.map((problem) => (
                    <Link
                      key={problem.slug}
                      href={localizeHref(`/problems/${problem.slug}`, lang)}
                      className="card card-hover group flex h-full flex-col p-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    >
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-navy transition-colors group-hover:bg-navy group-hover:text-white">
                        <IconAlertTriangle className="h-5 w-5" />
                      </span>
                      <h3 className="mt-4 text-base font-semibold tracking-tight text-navy">
                        {problem.name}
                      </h3>
                      <p className="mt-2 flex-1 text-sm leading-6 text-secondary">
                        {problem.subtitle}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                        View problem
                        <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
