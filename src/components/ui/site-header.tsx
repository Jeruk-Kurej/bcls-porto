"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Work", href: "/work" },
  { name: "Experience", href: "/experience" },
] as const;

const navLinkClass =
  "py-2 text-muted underline-offset-[0.5em] decoration-tide decoration-2 transition-colors hover:text-depth";

export const SiteHeader = () => {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-mist/85 backdrop-blur-md">
      <div className="wrap flex h-16 items-center justify-between gap-4">
        <Link href="/" className="font-display text-lg font-medium tracking-tight whitespace-nowrap text-depth">
          Bryan Carlie
        </Link>

        <nav aria-label="Main Navigation" className="flex items-center gap-4 text-sm sm:gap-8 sm:text-[0.9375rem]">
          {navItems.map((item) => {
            const active = pathname.startsWith(item.href);
            return (
              <Link
                key={item.name}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(navLinkClass, active && "text-depth underline")}
              >
                {item.name}
              </Link>
            );
          })}
          <a href="#contact" className={navLinkClass}>
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};
