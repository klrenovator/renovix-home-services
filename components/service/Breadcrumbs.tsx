import Link from "next/link";
import { getLanguageCode } from "@/data/languages";
import { getDictionary } from "@/i18n";
import { localizedHref } from "@/i18n/hrefs";

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
  const code = getLanguageCode(lang);
  const t = getDictionary(code);

  return (
    <nav aria-label={t.a11y.breadcrumb} className="mb-6">
      <ol className="flex flex-wrap items-center gap-2 text-xs font-medium">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          if (isLast || !item.href) {
            return (
              <li
                key={`${item.label}-${index}`}
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
            <li key={`${item.label}-${index}`} className="flex items-center gap-2">
              <Link
                href={localizedHref(item.href, code)}
                /* py-1 keeps the tap target at 24px+ (WCAG 2.5.8) on the
                   small breadcrumb text. */
                className={
                  inverse
                    ? "py-1 text-white/70 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    : "py-1 text-secondary transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
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
