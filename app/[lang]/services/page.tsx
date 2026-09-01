import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceGrid } from "@/components/home/ServiceGrid";
import { PageSchema } from "@/components/seo/PageSchema";
import { itemListNode } from "@/components/seo/schema";
import { Button, WhatsAppButton } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/service/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconArrowRight } from "@/components/icons";
import { getLanguage, languages } from "@/data/languages";
import { getServiceCategories } from "@/data/i18n";
import { getWhatsAppHref } from "@/data/site";
import { getDictionary } from "@/i18n";
import { hasTranslation } from "@/i18n/coverage";
import { contentHref, localizedHref } from "@/i18n/hrefs";
import { absoluteUrl, buildPageMetadata } from "@/i18n/seo";

type ServicesPageProps = {
  params: Promise<{ lang: string }>;
};

export function generateStaticParams() {
  return languages.map((language) => ({ lang: language.code }));
}

export async function generateMetadata({
  params,
}: ServicesPageProps): Promise<Metadata> {
  const { lang } = await params;
  const language = getLanguage(lang);

  if (!language) {
    return {};
  }

  const t = getDictionary(language.code);

  return buildPageMetadata({
    lang: language.code,
    path: "/services/",
    title: t.servicesIndex.metaTitle,
    description: t.servicesIndex.metaDescription,
    ogDescription: t.servicesIndex.ogDescription,
    availableLanguages: languages.map((item) => item.code),
  });
}

export default async function ServicesPage({ params }: ServicesPageProps) {
  const { lang } = await params;
  const language = getLanguage(lang);

  if (!language) {
    notFound();
  }

  const code = language.code;
  const t = getDictionary(code);
  const categories = getServiceCategories(code);
  const highlightSlugs = categories.slice(0, 4);
  const canonical = absoluteUrl(code, "/services/");

  // The full service catalogue as an ItemList. Each item points at the detail
  // page in the current language when that translation is published, so a
  // Malay or Chinese ItemList never links a reader back into English.
  const serviceItems = categories.map((service) => ({
    name: service.name,
    ...(hasTranslation("service", service.slug, code)
      ? { url: absoluteUrl(code, `/services/${service.slug}/`) }
      : {}),
  }));

  return (
    <>
      <PageSchema
        lang={code}
        path="/services/"
        name={t.servicesIndex.title}
        description={t.servicesIndex.metaDescription}
        breadcrumbs={[
          { name: t.common.home, url: absoluteUrl(code, "/") },
          { name: t.servicesIndex.breadcrumb },
        ]}
        extra={[itemListNode(canonical, t.servicesIndex.title, serviceItems)]}
      />
      <section className="relative overflow-hidden bg-navy text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand/20"
        />
        <div className="container-app relative py-12 sm:py-16 lg:py-20">
          <Breadcrumbs
            inverse
            items={[
              { label: t.common.home, href: "/" },
              { label: t.servicesIndex.breadcrumb },
            ]}
            lang={code}
          />
          <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl">
            {t.servicesIndex.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-white/80">
            {t.servicesIndex.lead}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              href={localizedHref("/quote", code)}
              variant="primary"
              icon={<IconArrowRight className="h-4 w-4" />}
            >
              {t.cta.getFreeQuote}
            </Button>
            <WhatsAppButton
              href={getWhatsAppHref()}
              variant="secondary"
              label={t.cta.whatsappUs}
            />
          </div>
        </div>
      </section>

      <section className="section section-surface">
        <div className="container-app">
          <SectionHeading
            eyebrow={t.servicesIndex.gridEyebrow}
            title={t.servicesIndex.gridTitle}
            description={t.servicesIndex.gridDescription}
          />
          <div className="mt-10">
            <ServiceGrid lang={code} />
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-app">
          <SectionHeading
            eyebrow={t.servicesIndex.oneStopEyebrow}
            title={t.servicesIndex.oneStopTitle}
            description={t.servicesIndex.oneStopDescription}
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {highlightSlugs.map((service) => {
              const href = contentHref("service", service.slug, code);

              return (
                <article key={service.slug} className="card h-full p-6">
                  <h3 className="h3-card">{service.name}</h3>
                  <p className="mt-3 text-sm leading-6 text-secondary">
                    {service.shortDescription}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    >
                      {t.cta.viewService}
                      <IconArrowRight className="h-4 w-4" />
                    </a>
                  ) : null}
                </article>
              );
            })}
          </div>
          <p className="mt-8 text-sm text-secondary">{t.servicesIndex.oneStopNote}</p>
        </div>
      </section>
    </>
  );
}
