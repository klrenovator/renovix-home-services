import { IconFacebook, IconInstagram } from "@/components/icons";
import { siteConfig } from "@/data/site";

type SocialLinksProps = {
  facebookLabel: string;
  instagramLabel: string;
  className?: string;
};

const linkClass =
  "inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent";

export function SocialLinks({
  facebookLabel,
  instagramLabel,
  className = "",
}: SocialLinksProps) {
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
    </div>
  );
}
