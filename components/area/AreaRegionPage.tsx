import Link from "next/link";
import { Breadcrumbs } from "@/components/service/Breadcrumbs";
import { InlineLinks } from "@/components/service/InlineLinks";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button, WhatsAppButton } from "@/components/ui/Button";
import { IconArrowRight, IconMapPin, IconBuilding, serviceIcons, IconWrench } from "@/components/icons";
import { getWhatsAppHref } from "@/data/site";
import { localizeHref } from "@/data/navigation";
import { getServiceBySlug } from "@/data/services";
import { getOtherRegion } from "@/data/area-content";
import type { AreaRegion } from "@/data/area-content/types";

type AreaRegionPageProps = {
  region: AreaRegion;
  lang: string;
};

export function AreaRegionPage({ region, lang }: AreaRegionPageProps) {
  const other = getOtherRegion(region);

  return (
    <>
      <section className="relative overflow-hidden bg-navy text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand/20"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-accent/10"
        />

        <div className="container-app relative py-12 sm:py-16 lg:py-20">
          <Breadcrumbs
            inverse
            lang={lang}
            items={[
              { label: "Home", href: "/" },
              { label: "Service Areas", href: "/areas" },
              { label: region.name },
            ]}
          />

          <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl">
            {region.h1}
          </h1>

          <div className="mt-6 max-w-3xl space-y-4 text-base leading-7 text-white/80">
            {region.intro.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>
                <InlineLinks text={paragraph} lang={lang} />
              </p>
            ))}
          </div>

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

          <ul className="mt-8 flex flex-wrap gap-2">
            <li className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-medium text-white/90">
              <IconMapPin className="h-3.5 w-3.5 text-accent" />
              {region.areas.length} area guides
            </li>
            <li className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-medium text-white/90">
              Klang Valley
            </li>
            <li className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-medium text-white/90">
              Free Quotation
            </li>
          </ul>
        </div>
      </section>

      <section id="areas" className="section bg-white scroll-mt-24">
        <div className="container-app">
          <SectionHeading
            eyebrow="Area Guides"
            title={`Areas We Serve in ${region.name}`}
            description={`Each guide covers the local housing stock, the problems we see there, the services most requested and practical notes about working in the area.`}
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {region.areas.map((area) => (
              <Link
                key={area.slug}
                href={localizeHref(`/areas/${area.region}/${area.slug}`, lang)}
                className="card card-hover group flex h-full flex-col p-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                  <IconMapPin className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-base font-semibold tracking-tight text-navy">
                  {area.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-secondary">{area.summary}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                  View Area Guide
                  <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-surface">
        <div className="container-app">
          <SectionHeading
            eyebrow="Housing Landscape"
            title={`Understanding ${region.name}'s Housing`}
            description={region.landscapeIntro}
          />

          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {region.landscape.map((item) => (
              <li key={item.title} className="card h-full p-6">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand">
                    <IconBuilding className="h-5 w-5" />
                  </span>
                  <h3 className="h3-card">{item.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-6 text-secondary">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-app">
          <SectionHeading
            eyebrow="Popular Services"
            title={`Services Most Requested in ${region.name}`}
            description={region.servicesIntro}
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {region.servicesAvailable.map((focus) => {
              const service = getServiceBySlug(focus.serviceSlug);

              if (!service) {
                return null;
              }

              const Icon = serviceIcons[service.icon] ?? IconWrench;

              return (
                <Link
                  key={focus.serviceSlug}
                  href={localizeHref(service.path, lang)}
                  className="card card-hover group flex h-full flex-col p-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-base font-semibold tracking-tight text-navy">
                    {service.name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-6 text-secondary">{focus.note}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                    View Service
                    <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {other ? (
        <section className="section section-surface">
          <div className="container-app">
            <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-soft sm:p-8">
              <h2 className="text-xl font-bold tracking-tight text-navy">
                We also serve {other.name}
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-secondary">
                {other.summary} Browse our {other.name} area guides for local housing
                details, common problems and services.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <Link
                  href={localizeHref(`/areas/${other.id}`, lang)}
                  className="btn btn-primary"
                >
                  Explore {other.name}
                </Link>
                <Link
                  href={localizeHref("/areas", lang)}
                  className="btn btn-outline"
                >
                  All Service Areas
                </Link>
              </div>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
