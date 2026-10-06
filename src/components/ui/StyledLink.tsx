import Link, { LinkProps } from "next/link";
import { cn } from "@/lib/utils";

interface StyledLinkProps extends LinkProps {
  /** Additional className for styling */
  className?: string;
  /** Whether to apply default styling (default: true) */
  applyDefaultStyles?: boolean;
  /** Whether to open in new tab (forces target="_blank" and rel="noreferrer") */
  external?: boolean;
}

export const StyledLink = ({
  className = "",
  applyDefaultStyles = true,
  external = false,
  href,
  ...props
}: StyledLinkProps) => {
  const baseStyles = "flex items-center gap-2 text-[var(--color-ink)] hover:text-[var(--color-tide-deep)] transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[var(--color-tide-deep)] rounded-sm";

  const linkProps = {
    ...props,
    // Handle external links
    ...(external ? {
      target: "_blank",
      rel: "noreferrer"
    } : {}),
    className: cn(
      applyDefaultStyles ? baseStyles : "",
      className
    )
  };

  return <Link href={href} {...linkProps} />;
};