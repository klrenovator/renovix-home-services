import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { WhatsAppButton } from "@/components/ui/Button";
import { IconMapPin, IconArrowRight } from "@/components/icons";
import { getWhatsAppHref } from "@/data/site";
import { localizeHref } from "@/data/navigation";

type HeroProps = {
  lang: string;
};

const heroHighlights = [
  "One-stop home services",
  "KL & Selangor coverage",
  "Easy quotation process",
];

export function Hero({ lang }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-surface"
      />
      <div className="container-app relative grid items-center gap-10 py-14 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:py-24">
        <div>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-surface px-3 py-1.5 text-xs font-semibold text-navy">
            <IconMapPin className="h-3.5 w-3.5 text-brand" />
            Kuala Lumpur &amp; Selangor · Klang Valley
          </p>

          <h1 className="h1-page text-navy">
            Professional Home Renovation &amp; Improvement Services in Kuala Lumpur &amp;
            Selangor
          </h1>

          <p className="lead mt-5 max-w-xl">
            Tiling, welding, electrical, painting, ceiling, partition, plumbing,
            waterproofing, flooring, renovation and handyman services across Klang Valley.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              href={localizeHref("/#contact", lang)}
              variant="primary"
              icon={<IconArrowRight className="h-4 w-4" />}
            >
              Get a Free Quote
            </Button>
            <WhatsAppButton href={getWhatsAppHref(lang)} variant="whatsapp" />
          </div>

          <ul className="mt-8 flex flex-wrap gap-2">
            {heroHighlights.map((highlight) => (
              <li key={highlight} className="chip">
                <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-accent" />
                {highlight}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-navy shadow-card sm:aspect-[5/4]">
          <Image
            src="/images/hero-renovation.jpg"
            alt="Modern home renovation work in a Malaysian home"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 48vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/10 to-transparent" />
          <div className="absolute bottom-5 left-5 right-5 flex flex-col gap-2 sm:bottom-7 sm:left-7">
            <p className="text-sm font-semibold text-white">Professional workmanship</p>
            <p className="text-xs text-white/75">
              Practical solutions for home renovation, repairs and improvements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
