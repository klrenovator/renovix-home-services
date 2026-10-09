import { IconFacebook, IconGoogle, IconInstagram } from "@/components/icons";
import { siteConfig } from "@/data/site";

type SocialLinksProps = {
  facebookLabel: string;
  instagramLabel: string;
  googleLabel: string;
  className?: string;
};

const linkClass =
  "inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent";

export function SocialLinks({
  facebookLabel,
  instagramLabel,
  googleLabel,
  className = "",
}: SocialLinksProps) {
  /**
   * Lead-generation Task 3.1 — the Google Business Profile icon renders only
   * while the owner-supplied profile link exists (data/site.ts); no empty or
   * guessed href is ever published. The homepage reviews block is independent
   * of this icon and keeps its owner-approved review cards unchanged.
   */
  const googleProfileUrl = siteConfig.googleBusinessProfileUrl.trim();

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <a
        href={siteConfig.facebookUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={facebookLabel}
        className={linkClass}
      >
        <IconFacebook className="h-5 w-5" />
      </a>
      <a
        href={siteConfig.instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={instagramLabel}
        className={linkClass}
      >
        <IconInstagram className="h-5 w-5" />
      </a>
      {googleProfileUrl ? (
        <a
          href={googleProfileUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={googleLabel}
          className={linkClass}
        >
          <IconGoogle className="h-5 w-5" />
        </a>
      ) : null}
    </div>
  );
}
