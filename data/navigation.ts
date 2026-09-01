import type { LanguageCode } from "@/data/languages";

export type NavigationItem = {
  label: string;
  href: string;
  description?: string;
  trailing?: boolean;
};

export const primaryNavigation: NavigationItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Problems", href: "/problems" },
  { label: "Areas We Serve", href: "/areas" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerNavigation: NavigationItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Problems", href: "/problems" },
  { label: "Areas We Serve", href: "/areas" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const legalNavigation: NavigationItem[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
];

export const mobileQuickLinks: NavigationItem[] = [
  { label: "Get a Free Quote", href: "/#contact" },
  { label: "WhatsApp Us", href: "/#contact", trailing: true },
];

export function localizeHref(href: string, lang: string): string {
  if (href === "/") {
    return `/${lang}`;
  }

  if (href.startsWith("/")) {
    return `/${lang}${href}`;
  }

  return href;
}

export function localizeNavigation(
  items: NavigationItem[],
  lang: LanguageCode | string,
): NavigationItem[] {
  return items.map((item) => ({
    ...item,
    href: localizeHref(item.href, lang),
  }));
}
