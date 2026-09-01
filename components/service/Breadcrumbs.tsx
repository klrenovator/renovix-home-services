import Link from "next/link";
import { localizeHref } from "@/data/navigation";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
  lang: string;
  inverse?: boolean;
};

export function Breadcrumbs({ items, lang, inverse = false }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-2 text-xs font-medium">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          if (isLast || !item.href) {
            return (
              <li
                key={item.label}
                aria-current={isLast ? "page" : undefined}
                className={
                  isLast
                    ? inverse
                      ? "text-white/90"
                      : "text-navy"
                    : inverse
                      ? "text-white/50"
                      : "text-secondary"
                }
              >
                {item.label}
              </li>
            );
          }

          return (
            <li key={item.label} className="flex items-center gap-2">
              <Link
                href={localizeHref(item.href, lang)}
                className={
                  inverse
                    ? "text-white/70 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    : "text-secondary transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                }
              >
                {item.label}
              </Link>
              <span aria-hidden="true" className={inverse ? "text-white/30" : "text-line"}>
                /
              </span>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
