"use client";

import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "Capabilities", href: "#capabilities" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const FloatingNav = () => {
  const shouldReduceMotion = useReducedMotion();
  const [activeSection, setActiveSection] = useState("#hero");

  useEffect(() => {
    const sectionElements = navItems
      .map((item) => document.querySelector(item.href))
      .filter((el): el is Element => el !== null);

    if (sectionElements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      {
        rootMargin: "-25% 0px -45% 0px",
        threshold: 0,
      }
    );

    sectionElements.forEach((el) => observer.observe(el));

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollBottom = window.innerHeight + scrollPosition;
      const docHeight = document.documentElement.scrollHeight;

      if (scrollBottom >= docHeight - 60) {
        setActiveSection("#contact");
      } else if (scrollPosition < 100) {
        setActiveSection("#hero");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setActiveSection(href);
    const target = document.querySelector(href);
    if (target) {
      const prefersReduced = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReduced) {
        target.scrollIntoView({ behavior: "auto" });
        return;
      }

      const targetPosition = target.getBoundingClientRect().top + window.scrollY;
      const startPosition = window.scrollY;
      const distance = targetPosition - startPosition;
      const duration = 250; 
      let start: number | null = null;

      const easeInOutQuart = (t: number) => {
        return t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;
      };

      const animation = (currentTime: number) => {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const progress = Math.min(timeElapsed / duration, 1);
        const ease = easeInOutQuart(progress);

        window.scrollTo(0, startPosition + distance * ease);

        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      };

      requestAnimationFrame(animation);
    }
  };

  return (
    <motion.div 
      initial={shouldReduceMotion ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.6, type: "spring", stiffness: 100, damping: 20 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-[999]"
    >
      <nav
        className="flex items-center gap-1 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)]"
      >
        {navItems.map((item) => {
          const isActive = activeSection === item.href;
          return (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className={cn(
                "relative px-3 py-1.5 text-xs sm:text-sm font-medium transition-colors duration-200 rounded-full",
                isActive
                  ? "text-white font-semibold"
                  : "text-white/60 hover:text-white"
              )}
            >
              {isActive && (
                <motion.span
                  layoutId="active-nav-indicator"
                  transition={shouldReduceMotion ? { duration: 0 } : { type: "spring", stiffness: 380, damping: 30 }}
                  className="absolute inset-0 rounded-full bg-white/15 border border-white/20 shadow-[0_0_12px_rgba(255,255,255,0.15)] -z-10"
                />
              )}
              {item.name}
            </a>
          );
        })}
      </nav>
    </motion.div>
  );
};
