import Link from "next/link";
import { Brand } from "@/components/Brand";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { Button } from "@/components/ui/Button";
import {
  primaryNavigation,
  localizeNavigation,
  localizeHref,
  type NavigationItem,
} from "@/data/navigation";

type HeaderProps = {
  lang: string;
};

export function Header({ lang }: HeaderProps) {
  const navigation = localizeNavigation(primaryNavigation, lang);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/95 backdrop-blur">
      <div className="container-app flex h-[70px] items-center justify-between gap-4">
        <Brand href={`/${lang}`} />

        <nav aria-label="Primary" className="hidden items-center xl:flex">
          <ul className="flex items-center gap-1">
            {navigation.map((item) => (
              <li key={item.href}>
                <LinkItem item={item} />
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <LanguageSwitcher lang={lang} />
          <Button href={localizeHref("/quote", lang)} variant="primary">
            Get a Free Quote
          </Button>
        </div>

        <div className="flex items-center gap-3 xl:hidden">
          <LanguageSwitcher lang={lang} compact />
          <MobileMenu lang={lang} />
        </div>
      </div>
    </header>
  );
}

function LinkItem({ item }: { item: NavigationItem }) {
  return (
    <Link
      href={item.href}
      className="rounded-md px-3 py-2 text-sm font-medium text-secondary transition-colors hover:bg-surface hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
    >
      {item.label}
    </Link>
  );
}
