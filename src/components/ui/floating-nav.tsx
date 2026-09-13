"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  href: string;
  isAnchor?: boolean;
}

const navItems: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "Work", href: "/work" },
  { name: "Experience", href: "/experience" },
  { name: "Contact", href: "#contact", isAnchor: true },
];

export const FloatingNav = () => {
  const shouldReduceMotion = useReducedMotion();
  const pathname = usePathname();

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById("contact");
    if (target) {
      if (shouldReduceMotion) {
        target.scrollIntoView({ behavior: "auto" });
      } else {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const isItemActive = (item: NavItem) => {
    if (item.isAnchor) return false;
    if (item.href === "/") return pathname === "/";
    return pathname.startsWith(item.href);
  };

  return (
    <motion.div 
      initial={shouldReduceMotion ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.6, type: "spring", stiffness: 100, damping: 20 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-[999]"
    >
      <nav
        aria-label="Main Navigation"
        className="flex items-center gap-1 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[var(--color-foam)]/85 backdrop-blur-xl border border-[var(--color-tide)]/25 shadow-[0_8px_32px_rgba(18,57,82,0.08)]"
      >
        {navItems.map((item) => {
          const active = isItemActive(item);

          if (item.isAnchor) {
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={handleContactClick}
                className="relative px-3 py-1.5 text-xs sm:text-sm font-medium transition-colors duration-200 rounded-full text-[var(--color-ink)]/75 hover:text-[var(--color-depth)] cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[var(--color-tide-deep)]"
              >
                {item.name}
              </a>
            );
          }

          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "relative px-3 py-1.5 text-xs sm:text-sm font-medium transition-colors duration-200 rounded-full focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[var(--color-tide-deep)]",
                active
                  ? "text-[var(--color-depth)] font-semibold"
                  : "text-[var(--color-ink)]/75 hover:text-[var(--color-depth)]"
              )}
            >
              {active && (
                <motion.span
                  layoutId="active-nav-indicator"
                  transition={shouldReduceMotion ? { duration: 0 } : { type: "spring", stiffness: 380, damping: 30 }}
                  className="absolute inset-0 rounded-full bg-[var(--color-mist)] border border-[var(--color-tide)]/30 shadow-[0_2px_8px_rgba(18,57,82,0.08)] -z-10"
                />
              )}
              {item.name}
            </Link>
          );
        })}
      </nav>
    </motion.div>
  );
};
