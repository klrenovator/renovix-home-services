import Image from "next/image";
import { Button, WhatsAppButton } from "@/components/ui/Button";
import { IconMapPin, IconArrowRight } from "@/components/icons";
import { getLanguageCode } from "@/data/languages";
import { getWhatsAppHref } from "@/data/site";
import { getDictionary } from "@/i18n";
import { localizedHref } from "@/i18n/hrefs";

type HeroProps = {
  lang: string;
};

export function Hero({ lang }: HeroProps) {
  const code = getLanguageCode(lang);
  const t = getDictionary(code);
  const hero = t.home.hero;

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
            {hero.badge}
          </p>

          <h1 className="h1-page text-navy">{hero.title}</h1>

          <p className="lead mt-5 max-w-xl">{hero.lead}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              href={localizedHref("/quote", code)}
              variant="primary"
              icon={<IconArrowRight className="h-4 w-4" />}
            >
              {t.cta.getFreeQuote}
            </Button>
            <WhatsAppButton
              href={getWhatsAppHref(code)}
              variant="whatsapp"
              label={t.cta.whatsappUs}
            />
          </div>

          <ul className="mt-8 flex flex-wrap gap-2">
            {hero.highlights.map((highlight) => (
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
            alt={hero.imageAlt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 48vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/10 to-transparent" />
          <div className="absolute bottom-5 left-5 right-5 flex flex-col gap-2 sm:bottom-7 sm:left-7">
            <p className="text-sm font-semibold text-white">{hero.imageTitle}</p>
            <p className="text-xs text-white/75">{hero.imageCaption}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
