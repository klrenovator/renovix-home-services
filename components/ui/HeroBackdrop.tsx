import Image from "next/image";

type HeroBackdropProps = {
  /**
   * `light` sits behind the white homepage hero so the photo reads as a faint
   * wash. `dark` sits behind the navy page heroes with a navy overlay so the
   * white heading stays readable.
   */
  variant?: "light" | "dark";
};

/**
 * Real on-site photograph used as a faded background on every page hero.
 * Decorative only — empty alt, hidden from assistive tech.
 */
export function HeroBackdrop({ variant = "dark" }: HeroBackdropProps) {
  const isLight = variant === "light";

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
      <Image
        src="/images/hero-backdrop.jpg"
        alt=""
        fill
        sizes="100vw"
        className={
          isLight
            ? "object-cover object-center scale-105 blur-[2px]"
            : "object-cover object-center"
        }
      />
      <div
        className={
          isLight
            ? "absolute inset-0 bg-white/80"
            : "absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/80 to-navy/70"
        }
      />
    </div>
  );
}
