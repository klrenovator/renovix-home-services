import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  IconArrowRight,
  IconChat,
  IconCheck,
  IconCompass,
  IconLayers,
  IconMapPin,
  IconShieldCheck,
  serviceIcons,
} from "@/components/icons";
import { PageHero } from "@/components/support/PageHero";
import { PageBreadcrumbJsonLd } from "@/components/support/PageBreadcrumbJsonLd";
import { Button } from "@/components/ui/Button";
import { getLanguage, languages } from "@/data/languages";
import { localizeHref } from "@/data/navigation";
import { services } from "@/data/services";
import { getQuoteHref, siteConfig } from "@/data/site";

type AboutPageProps = {
  params: Promise<{ lang: string }>;
};

const servicePrinciples = [
  {
    title: "Professional workmanship",
    description:
      "Careful preparation, attention to detail and a clean finish are central to how home work should be planned and carried out.",
    icon: IconShieldCheck,
  },
  {
    title: "Reliable service",
    description:
      "A dependable experience starts with a clear scope, sensible expectations and a practical plan for the work ahead.",
    icon: IconCheck,
  },
  {
    title: "Clear communication",
    description:
      "The job, next steps and useful site details should be easy to understand before work is arranged.",
    icon: IconChat,
  },
  {
    title: "Practical solutions",
    description:
      "Recommendations should suit the condition of the home, the intended use of the space and the work that is actually needed.",
    icon: IconCompass,
  },
  {
    title: "Customer-focused service",
    description:
      "Every enquiry begins with the homeowner’s priorities, questions, location and property context rather than a one-size-fits-all answer.",
    icon: IconLayers,
  },
];

export function generateStaticParams() {
  return languages.map((language) => ({ lang: language.code }));
}

export async function generateMetadata({
  params,
}: AboutPageProps): Promise<Metadata> {
  const { lang } = await params;
  const language = getLanguage(lang);

  if (!language) {
    return {};
  }

  const canonicalUrl = `${siteConfig.url}/${lang}/about/`;
  const title = "About Renovix Home Services | KL & Selangor";
  const description =
    "Learn about Renovix Home Services’ practical approach to home renovation, repairs and improvement work across Kuala Lumpur, Selangor and the Klang Valley.";

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: "website",
    },
    twitter: { card: "summary_large_image" },
  };
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { lang } = await params;

  if (!getLanguage(lang)) {
    notFound();
  }

  return (
    <>
      <PageBreadcrumbJsonLd lang={lang} label="About" path="/about/" />
      <PageHero
        eyebrow="About Renovix"
        title="Practical home services, clearly planned"
        description="Renovix Home Services brings renovation, repair and improvement needs into one practical starting point for homes across Kuala Lumpur, Selangor and the Klang Valley."
        currentLabel="About"
        lang={lang}
      />

      <section className="section bg-white">
        <div className="container-app grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-16">
          <div>
            <p className="eyebrow">How we approach home work</p>
            <h2 className="h2-section mt-3 text-navy">
              A clear route from the first question to the right next step
            </h2>
          </div>
          <div className="space-y-5 text-base leading-7 text-secondary">
            <p>
              Home improvement work is easier to manage when the scope is clear and
              the right trades are considered together. Renovix is focused on helping
              homeowners describe the work, understand the available service options
              and move forward with a practical plan.
            </p>
            <p>
              Whether the need is a smaller repair, a room upgrade or a wider
              renovation scope, the starting point is the same: listen to the details,
              consider the property context and communicate the next step plainly.
              Where several services are involved, planning their order early helps
              keep the work focused.
            </p>
            <Link
              href={localizeHref("/quote", lang)}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-colors hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              Tell us about the work you have in mind
              <IconArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-surface">
        <div className="container-app">
          <div className="max-w-2xl">
            <p className="eyebrow">What guides the service</p>
            <h2 className="h2-section mt-3 text-navy">
              Straightforward standards for every enquiry
            </h2>
            <p className="lead mt-4">
              The aim is simple: make it easier to get the right work considered for
              your home, without unnecessary assumptions or confusing hand-offs.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {servicePrinciples.map((principle) => {
              const Icon = principle.icon;

              return (
                <article key={principle.title} className="card h-full p-6">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="h3-card mt-4">{principle.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-secondary">
                    {principle.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-app grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            <p className="eyebrow">One practical starting point</p>
            <h2 className="h2-section mt-3 text-navy">
              Multiple home services, connected where it makes sense
            </h2>
            <p className="lead mt-4 max-w-2xl">
              Renovix covers a range of home improvement needs. You can explore a
              service on its own or describe a broader scope when several trades may
              be relevant.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {services.map((service) => {
                const Icon = serviceIcons[service.icon];

                return (
                  <Link
                    key={service.slug}
                    href={localizeHref(service.path, lang)}
                    className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-surface p-3.5 transition-colors hover:border-brand/30 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-brand shadow-soft">
                      <Icon className="h-4.5 w-4.5" />
                    </span>
                    <span className="flex-1 text-sm font-semibold text-navy">
                      {service.name}
                    </span>
                    <IconArrowRight className="h-4 w-4 text-brand transition-transform group-hover:translate-x-1" />
                  </Link>
                );
              })}
            </div>
          </div>

          <aside className="rounded-2xl bg-navy p-6 text-white shadow-card sm:p-8">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-accent">
              <IconMapPin className="h-5 w-5" />
            </span>
            <p className="eyebrow-light mt-6">Where we work</p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-white">
              Kuala Lumpur, Selangor &amp; the Klang Valley
            </h2>
            <p className="mt-4 text-sm leading-6 text-white/75">
              Renovix&apos;s stated service coverage includes Kuala Lumpur, Selangor and
              the wider Klang Valley. Share your location with the job details so the
              right next step can be considered.
            </p>
            <div className="mt-6 space-y-3">
              <Link
                href={localizeHref("/areas/kuala-lumpur", lang)}
                className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                Kuala Lumpur service areas
                <IconArrowRight className="h-4 w-4 text-accent" />
              </Link>
              <Link
                href={localizeHref("/areas/selangor", lang)}
                className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                Selangor service areas
                <IconArrowRight className="h-4 w-4 text-accent" />
              </Link>
              <Link
                href={localizeHref("/areas", lang)}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                View all service areas
                <IconArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="section section-surface">
        <div className="container-app">
          <div className="relative overflow-hidden rounded-3xl bg-navy px-6 py-11 text-white sm:px-10 sm:py-14 lg:px-14">
            <div
              aria-hidden="true"
              className="absolute -right-14 -top-14 h-52 w-52 rounded-full bg-brand/25"
            />
            <div className="relative max-w-2xl">
              <p className="eyebrow-light">Start with the details</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Have a repair, upgrade or renovation in mind?
              </h2>
              <p className="mt-4 text-base leading-7 text-white/75">
                Share the property, location and work you need. Photos can help with
                the initial assessment, and a quotation is prepared after the details
                are reviewed.
              </p>
              <div className="mt-7">
                <Button
                  href={getQuoteHref(lang)}
                  variant="primary"
                  icon={<IconArrowRight className="h-4 w-4" />}
                >
                  Get a Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
