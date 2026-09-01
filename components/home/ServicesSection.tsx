import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceGrid } from "@/components/home/ServiceGrid";
import { getLanguageCode } from "@/data/languages";
import { getDictionary } from "@/i18n";

type ServicesSectionProps = {
  lang: string;
};

export function ServicesSection({ lang }: ServicesSectionProps) {
  const t = getDictionary(getLanguageCode(lang));

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
      </div>
    </section>
  );
}
