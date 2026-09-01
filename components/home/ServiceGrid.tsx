import { services } from "@/data/services";
import { ServiceCard } from "@/components/home/ServiceCard";

type ServiceGridProps = {
  lang: string;
};

export function ServiceGrid({ lang }: ServiceGridProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => (
        <ServiceCard key={service.slug} service={service} lang={lang} />
      ))}
    </div>
  );
}
