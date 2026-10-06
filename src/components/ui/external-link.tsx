import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ExternalLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

/** Text link that leaves the site: opens in a new tab and says so. */
export const ExternalLink = ({ href, className, children }: ExternalLinkProps) => {
  return (
    <a href={href} target="_blank" rel="noreferrer" className={cn("link", className)}>
      {children}
      <ArrowUpRight className="ml-0.5 inline size-[0.9em] align-[-0.08em]" aria-hidden="true" />
      <span className="sr-only"> (opens in new tab)</span>
    </a>
  );
};
