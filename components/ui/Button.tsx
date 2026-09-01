import type { ReactNode } from "react";
import Link from "next/link";
import { IconWhatsApp } from "@/components/icons";

export type ButtonVariant = "primary" | "secondary" | "outline" | "whatsapp" | "ghost";

type ButtonBaseProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  icon?: ReactNode;
  external?: boolean;
  href: string;
  ariaLabel?: string;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  outline: "btn-outline",
  whatsapp: "btn-whatsapp",
  ghost: "btn-ghost",
};

export function Button({
  children,
  variant = "primary",
  className = "",
  icon,
  external = false,
  href,
  ariaLabel,
}: ButtonBaseProps) {
  const classes = `btn ${variantClasses[variant]} ${className}`.trim();

  const content = (
    <>
      {icon}
      <span>{children}</span>
    </>
  );

  if (external) {
    return (
      <a className={classes} href={href} aria-label={ariaLabel} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}>
        {content}
      </a>
    );
  }

  return (
    <Link className={classes} href={href} aria-label={ariaLabel}>
      {content}
    </Link>
  );
}

/**
 * `label` is required on purpose: a hardcoded English default would silently
 * leak English onto the /ms/ and /zh/ pages.
 */
export function WhatsAppButton({
  href,
  label,
  variant = "whatsapp",
  className = "",
}: {
  href: string;
  label: string;
  variant?: ButtonVariant;
  className?: string;
}) {
  const external = href.startsWith("http");

  return (
    <Button
      href={href}
      variant={variant}
      external={external}
      className={className}
      icon={
        <IconWhatsApp className="h-4 w-4 shrink-0" aria-hidden="true" />
      }
    >
      {label}
    </Button>
  );
}
