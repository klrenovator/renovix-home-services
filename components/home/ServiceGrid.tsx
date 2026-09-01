import { ServiceCard } from "@/components/home/ServiceCard";
import { getLanguageCode } from "@/data/languages";
import { getServiceCategories } from "@/data/i18n";

type ServiceGridProps = {
  lang: string;
};

export function ServiceGrid({ lang }: ServiceGridProps) {
  const code = getLanguageCode(lang);
  const services = getServiceCategories(code);

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => (
        <ServiceCard key={service.slug} service={service} lang={code} />
      ))}
    </div>
  );
}
