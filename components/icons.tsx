import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function IconBase({ children, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {children}
    </svg>
  );
}

export function IconMenu(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M4 6h16" />
      <path d="M4 12h16" />
      <path d="M4 18h16" />
    </IconBase>
  );
}

export function IconClose(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M6 6l12 12" />
      <path d="M18 6L6 18" />
    </IconBase>
  );
}

export function IconArrowRight(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </IconBase>
  );
}

export function IconChevronDown(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M6 9l6 6 6-6" />
    </IconBase>
  );
}

export function IconCheck(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M5 12l4 4 10-10" />
    </IconBase>
  );
}

export function IconPhone(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M4 5c0-.6.4-1 1-1h2.2c.5 0 .9.3 1 .8l.6 2.2c.1.4-.1.9-.5 1.1L7 9.2a13.7 13.7 0 0 0 7.8 7.8l1.1-1.4c.3-.3.7-.5 1.1-.4l2.2.6c.5.1.8.5.8 1V19c0 .6-.4 1-1 1C10.6 20 4 13.4 4 5Z" />
    </IconBase>
  );
}

export function IconMail(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </IconBase>
  );
}

export function IconMapPin(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </IconBase>
  );
}

/** Official Facebook brand mark (filled “f” on the circular glyph). */
export function IconFacebook(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="#1877F2"
      {...props}
    >
      <path d="M24 12.073C24 5.446 18.627.073 12 .073S0 5.446 0 12.073C0 18.063 4.388 23.027 10.125 23.927v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.063 24 12.073Z" />
    </svg>
  );
}

/** Official Instagram glyph with the brand gradient. */
export function IconInstagram(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      aria-hidden="true"
      {...props}
    >
      <defs>
        <linearGradient id="ig-brand" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f58529" />
          <stop offset="50%" stopColor="#dd2a7b" />
          <stop offset="100%" stopColor="#8134af" />
        </linearGradient>
      </defs>
      <path
        fill="url(#ig-brand)"
        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z"
      />
    </svg>
  );
}

export function IconGoogle(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      aria-hidden="true"
      {...props}
    >
      <path
        fill="#4285F4"
        d="M23.49 12.27c0-.82-.07-1.64-.23-2.43H12v4.6h6.46a5.52 5.52 0 0 1-2.39 3.62v3h3.86c2.26-2.08 3.56-5.15 3.56-8.79Z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.96-1.07 7.95-2.91l-3.86-3c-1.07.73-2.45 1.16-4.09 1.16-3.14 0-5.8-2.12-6.76-4.96H1.26v3.09A12 12 0 0 0 12 24Z"
      />
      <path
        fill="#FBBC05"
        d="M5.24 14.29A7.2 7.2 0 0 1 4.86 12c0-.8.14-1.57.38-2.29V6.62H1.26A12 12 0 0 0 0 12c0 1.94.46 3.77 1.26 5.38l3.98-3.09Z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.69 1.26 6.62l3.98 3.09C6.2 6.87 8.86 4.75 12 4.75Z"
      />
    </svg>
  );
}

export function IconWhatsApp(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.7-1.1A9 9 0 1 0 12 3Z" />
      <path d="M8.5 9.2c-.3 1.1.2 2.2 1.1 3.4.9 1.1 2.2 2 3.7 2.2.9.2 1.8-.1 2.3-.7.3-.4.3-.8.1-1.2l-.7-1.1-1.6.5a6 6 0 0 1-2.5-2.5l.6-1.6-1.2-.7c-.4-.2-.8-.1-1.2.5Z" />
    </IconBase>
  );
}

export function IconQuote(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M4 6h7v7H7c0 2 1 3 3 3" />
      <path d="M14 6h7v7h-4c0 2 1 3 3 3" />
    </IconBase>
  );
}

export function IconCalendar(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="4" y="5" width="16" height="15" rx="2" />
      <path d="M8 3v4M16 3v4M4 10h16" />
    </IconBase>
  );
}

export function IconCamera(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M3 8a2 2 0 0 1 2-2h2l1.2-2h7.6L17 6h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" />
      <circle cx="12" cy="12.5" r="3.2" />
    </IconBase>
  );
}

export function IconShieldCheck(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M12 3l7 2.5V11c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V5.5Z" />
      <path d="M9 12l2 2 4-4" />
    </IconBase>
  );
}

export function IconSparkles(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3Z" />
      <path d="M18 16l.8 2.2L21 19l-2.2.8L18 22l-.8-2.2L15 19l2.2-.8L18 16Z" />
    </IconBase>
  );
}

export function IconLayers(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M12 3l9 5-9 5-9-5 9-5Z" />
      <path d="M3 13l9 5 9-5" />
    </IconBase>
  );
}

export function IconHome(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M3 11l9-7 9 7" />
      <path d="M5 10v10h14V10" />
      <path d="M10 20v-6h4v6" />
    </IconBase>
  );
}

export function IconChat(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M4 5h16v11H8l-4 3V5Z" />
      <path d="M8 9h8M8 12h5" />
    </IconBase>
  );
}

export function IconClipboard(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="5" y="4" width="14" height="17" rx="2" />
      <path d="M9 4V2h6v2" />
      <path d="M9 10h6M9 14h6M9 18h4" />
    </IconBase>
  );
}

export function IconCompass(props: IconProps) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M16 8l-2.2 5.8L8 16l2.2-5.8L16 8Z" />
    </IconBase>
  );
}

/**
 * Globe, used for the compact header language control.
 *
 * The path is written with decimal coordinates on purpose: `npm run
 * audit:business` flags any 9–15 digit run in the source as an unverified
 * phone number, and an all-integer SVG arc command reads as one.
 */
export function IconGlobe(props: IconProps) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3.2 12h17.6" />
      <path d="M12 3.2c2.6 0 4.6 3.9 4.6 8.8s-2 8.8-4.6 8.8-4.6-3.9-4.6-8.8S9.4 3.2 12 3.2Z" />
    </IconBase>
  );
}

export function IconWrench(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M14 7a4 4 0 0 0 5.1 3.8l-2.4 2.4 2.1 2.1 2.4-2.4A4 4 0 0 0 16.9 5.6" transform="rotate(45 12 12)" />
      <path d="M4 20l8-8" />
      <path d="M12 6l3 3-2 2-3-3 2-2Z" />
    </IconBase>
  );
}

export function IconTile(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18M3 14h18M9 4v16M15 4v16" />
    </IconBase>
  );
}

export function IconWelding(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M7 7l4 4" />
      <path d="M13 5l-2 2 2 2 3-3-3-1Z" />
      <path d="M17 11L9 19" />
      <path d="M6 15l-2 2M8 13l-2 2M10 15l-2 2" />
    </IconBase>
  );
}

export function IconElectrical(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M13 3L6 13h5l-1 8 7-10h-5l1-8Z" />
    </IconBase>
  );
}

export function IconPainting(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M4 6h10v5H4z" />
      <path d="M14 8h5v4h-5" />
      <path d="M12 6v2" />
      <path d="M9 11v7h2v-3" />
    </IconBase>
  );
}

export function IconCeiling(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M3 6h18v8H3z" />
      <path d="M3 10h18" />
      <path d="M7 6v8M12 6v8M17 6v8" />
      <path d="M6 18h12" />
    </IconBase>
  );
}

export function IconRenovation(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M3 12l9-7 9 7" />
      <path d="M5 11v9h14v-9" />
      <path d="M10 20v-5h4v5" />
      <path d="M18 5l2.5 2.5" />
    </IconBase>
  );
}

export function IconPlumbing(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M5 4h6v5H5z" />
      <path d="M8 4v3" />
      <path d="M11 7h4c1.7 0 3 1.3 3 3v7" />
      <path d="M18 19v-6M16 17a2 2 0 1 0 4 0M16 17a2 2 0 1 1 4 0" />
    </IconBase>
  );
}

export function IconWaterproofing(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M12 3l7 2.5V11c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V5.5Z" />
      <path d="M9 12l2 2 4-4" />
    </IconBase>
  );
}

export function IconFlooring(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18M3 15h18M9 3v18M15 3v18" />
    </IconBase>
  );
}

export function IconHandyman(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M9 5l4 4-5.5 5.5a1.5 1.5 0 0 1-2.1 0L4 13" transform="rotate(45 8 10)" />
      <path d="M18 8l3-3-1.5-1.5" />
      <path d="M18 12l-6 6" />
      <path d="M18 8l3 3" />
    </IconBase>
  );
}

export function IconAlertTriangle(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M10.3 3.9 2.6 17.5A2 2 0 0 0 4.3 20.5h15.4a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </IconBase>
  );
}

export function IconBuilding(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="4" y="3" width="16" height="18" rx="1.5" />
      <path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2" />
      <path d="M8 21v-2h8v2" />
    </IconBase>
  );
}

export function IconTools(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M14.5 6.5a4 4 0 0 0 5 5L14 17l-3-3 5.5-5.5a4 4 0 0 0-2-2z" />
      <path d="M3 21l6-6" />
      <path d="M6 3a4 4 0 0 0-2 6l4-1-2-2 1-3Z" />
    </IconBase>
  );
}

export const serviceIcons = {
  tile: IconTile,
  welding: IconWelding,
  electrical: IconElectrical,
  painting: IconPainting,
  ceiling: IconCeiling,
  renovation: IconRenovation,
  plumbing: IconPlumbing,
  waterproofing: IconWaterproofing,
  flooring: IconFlooring,
  handyman: IconHandyman,
} as const;

export type ServiceIcon = keyof typeof serviceIcons;

/** Search / magnifier icon — used by the Smart Service Finder. */
export function IconSearch(props: IconProps) {
  return (
    <IconBase {...props}>
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3-4.3" />
    </IconBase>
  );
}
