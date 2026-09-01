import Link from "next/link";
import { serviceIcons } from "@/components/icons";
import { IconArrowRight } from "@/components/icons";
import { localizeHref } from "@/data/navigation";
import type { ServiceCategory } from "@/data/services";

type ServiceCardProps = {
  service: ServiceCategory;
  lang: string;
};

export function ServiceCard({ service, lang }: ServiceCardProps) {
  const Icon = serviceIcons[service.icon];

  return (
    <Link
      href={localizeHref(service.path, lang)}
      className="card card-hover group flex h-full flex-col p-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:p-6"
    >
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
        <Icon className="h-6 w-6" />
      </span>
      <h3 className="h3-card mt-4">{service.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-6 text-secondary">
        {service.shortDescription}
      </p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
        View Service
        <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
