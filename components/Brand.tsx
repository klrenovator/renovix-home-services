import Link from "next/link";
import { siteConfig } from "@/data/site";

type BrandProps = {
  href: string;
  inverse?: boolean;
};

export function Brand({ href, inverse = false }: BrandProps) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
      aria-label={`${siteConfig.name} – Home`}
    >
      <span
        aria-hidden="true"
        className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-navy"
      >
        <span className="flex h-5 w-5 items-center justify-center rounded-sm bg-accent">
          <svg
            viewBox="0 0 24 24"
            className="h-3 w-3 text-navy"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.4}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12l7-6 7 6" />
            <path d="M7 10v8h10v-8" />
          </svg>
        </span>
      </span>
      <span className="flex flex-col">
        <span
          className={`text-base font-extrabold leading-5 tracking-tight ${
            inverse ? "text-white" : "text-navy"
          }`}
        >
          Renovix
        </span>
        <span
          className={`text-[10px] font-semibold uppercase tracking-[0.12em] ${
            inverse ? "text-white/70" : "text-secondary"
          }`}
        >
          Home Services
        </span>
      </span>
    </Link>
  );
}
