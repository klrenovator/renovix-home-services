import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceGrid } from "@/components/home/ServiceGrid";

type ServicesSectionProps = {
  lang: string;
};

export function ServicesSection({ lang }: ServicesSectionProps) {
  return (
    <section id="services" className="section section-surface scroll-mt-24">
      <div className="container-app">
        <SectionHeading
          eyebrow="Our Home Services"
          title="Complete home improvement under one roof"
          description="From small repairs to larger renovation jobs, Renovix provides a practical range of home services across Kuala Lumpur and Selangor."
        />
        <div className="mt-10 sm:mt-12">
          <ServiceGrid lang={lang} />
        </div>
      </div>
    </section>
  );
}
