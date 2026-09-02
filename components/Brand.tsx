import Image from "next/image";
import Link from "next/link";

type BrandProps = {
  href: string;
  /** Use the white-on-dark logo variant (footer). */
  inverse?: boolean;
  /** Localized accessible name. */
  label: string;
};

/**
 * The brand lockup already contains the words "Renovix Home Services", so the
 * artwork carries the wordmark and the link gets the localized name through
 * `aria-label` — no duplicate visible text next to it, and nothing to overflow
 * a 360px header.
 *
 * The source artwork is a raster logo (no vector master was supplied), so it is
 * shipped at 160px tall — roughly 4x the 40px header render — and served as
 * WebP/AVIF through `next/image`. A pre-inverted white variant is used on the
 * navy footer because the navy wordmark disappears against that background.
 */
export function Brand({ href, inverse = false, label }: BrandProps) {
  return (
    <Link
      href={href}
      className="inline-flex shrink-0 items-center rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
      aria-label={label}
    >
      <Image
        src={
          inverse
            ? "/images/logo/renovix-home-services-logo-white.png"
            : "/images/logo/renovix-home-services-logo.png"
        }
        alt=""
        aria-hidden="true"
        width={339}
        height={160}
        priority
        className="h-[35px] w-auto sm:h-10"
      />
    </Link>
  );
}
