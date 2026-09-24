import Link from "next/link";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceGrid } from "@/components/home/ServiceGrid";
import { getLanguageCode } from "@/data/languages";
import { localizedHref } from "@/i18n/hrefs";
import { getDictionary } from "@/i18n";

type ServicesSectionProps = {
  lang: string;
};

export function ServicesSection({ lang }: ServicesSectionProps) {
  const code = getLanguageCode(lang);
  const t = getDictionary(code);

  return (
    <section id="services" className="section section-surface scroll-mt-24">
      <div className="container-app">
        <SectionHeading
          eyebrow={t.home.services.eyebrow}
          title={t.home.services.title}
          description={t.home.services.description}
        />
        <div className="mt-10 sm:mt-12">
          <ServiceGrid lang={lang} />
        </div>
        <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-6 text-muted-foreground">
          {t.home.services.guidesPrefix}{" "}
          <Link href={localizedHref("/blog/", code)} className="font-medium text-primary underline underline-offset-4 hover:text-primary/80">
            {t.home.services.guidesLink}
          </Link>
          {t.home.services.guidesMiddle}{" "}
          <Link href={localizedHref("/projects/", code)} className="font-medium text-primary underline underline-offset-4 hover:text-primary/80">
            {t.home.services.projectsLink}
          </Link>
          {t.home.services.guidesSuffix}
        </p>
      </div>
    </section>
  );
}
