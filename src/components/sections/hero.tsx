"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

export const HeroSection = () => {
  const shouldReduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 500], [0, 80]);
  const opacityParallax = useTransform(scrollY, [0, 700], [1, 0]);

  const handleScrollContact = () => {
    document.getElementById("contact")?.scrollIntoView({ 
      behavior: shouldReduceMotion ? "auto" : "smooth" 
    });
  };

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center w-full overflow-hidden bg-transparent pt-28 pb-16 px-4 md:px-8">
      {/* Background ambient water glow */}
      <div 
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-0 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle_at_center,var(--color-tide)/18,transparent_70%)] blur-3xl"
      />
      <div 
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle_at_center,var(--color-arcane)/22,transparent_70%)] blur-3xl"
      />

      <div className="mx-auto max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Column: Asymmetric Editorial Content */}
        <motion.div
          style={{ 
            y: shouldReduceMotion ? 0 : yParallax, 
            opacity: shouldReduceMotion ? 1 : opacityParallax 
          }}
          className="lg:col-span-7 flex flex-col items-start text-left"
        >
          {/* Status pill */}
          <motion.div 
            initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-[var(--color-tide)]/30 text-xs font-semibold text-[var(--color-depth)] shadow-2xs mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[var(--color-tide)] animate-pulse" />
            <span>Available for Full-Stack & Native Roles</span>
          </motion.div>

          {/* Display Name */}
          <motion.h1 
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[var(--color-depth)] leading-[1.08] mb-5"
          >
            Bryan Carlie <br />
            <span className="italic font-normal text-[var(--color-tide-deep)]">Lukito Setiawan</span>
          </motion.h1>

          {/* Positioning Statement (Option A: Platform breadth & craft) */}
          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-[var(--color-ink)] leading-relaxed max-w-xl mb-8"
          >
            Full-stack application developer building native iOS, Android, and web systems. 
            From campus-scale web portals at Universitas Ciputra to Apple Foundation SwiftUI 
            prototypes, I turn complex workflows into tactile, dependable software.
          </motion.p>

          {/* Two Action CTAs */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Link
              href="/work"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--color-tide-deep)] text-white text-sm font-semibold hover:opacity-95 hover:scale-102 active:scale-98 transition-all shadow-md cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[var(--color-tide-deep)] focus-visible:ring-offset-2"
            >
              <span>View my work</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <button
              type="button"
              onClick={handleScrollContact}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/80 border border-[var(--color-tide)]/30 text-[var(--color-depth)] text-sm font-semibold hover:bg-white hover:border-[var(--color-tide)] hover:scale-102 active:scale-98 transition-all shadow-2xs cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[var(--color-tide-deep)] focus-visible:ring-offset-2"
            >
              <Mail className="w-4 h-4 text-[var(--color-tide-deep)]" />
              <span>Get in touch</span>
            </button>
          </motion.div>
        </motion.div>

        {/* Right Column: Organic Floating Graphic & Avatar */}
        <div className="lg:col-span-5 flex items-center justify-center relative">
          {/* Ambient Arcane / Tide decorative glow (decoration only - no text/icons) */}
          <div 
            aria-hidden="true"
            className="absolute -inset-4 rounded-full bg-gradient-to-tr from-[var(--color-tide)]/25 via-[var(--color-arcane)]/30 to-transparent blur-2xl pointer-events-none"
          />

          {/* Organic Water Ripple SVG */}
          <svg 
            className="w-72 h-72 sm:w-88 sm:h-88 text-[var(--color-tide)]/25 absolute pointer-events-none"
            viewBox="0 0 400 400" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path 
              d="M312 120C350 170 380 240 350 290C320 340 240 370 170 360C100 350 40 300 25 240C10 180 40 110 90 70C140 30 210 20 260 50C310 80 274 70 312 120Z" 
              fill="currentColor"
              className="opacity-40"
            />
            <circle cx="200" cy="200" r="160" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 6" className="opacity-60" />
            <circle cx="200" cy="200" r="185" stroke="currentColor" strokeWidth="1" className="opacity-30" />
          </svg>

          {/* Central Portrait Card */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative z-10 p-3 sm:p-4 rounded-3xl bg-white/70 backdrop-blur-md border border-[var(--color-tide)]/30 shadow-xl"
          >
            <div className="relative w-44 h-44 sm:w-56 sm:h-56 rounded-2xl overflow-hidden bg-[var(--color-foam)]">
              <Image
                src="https://avatars.githubusercontent.com/u/191065390?v=4"
                alt="Bryan Carlie Lukito Setiawan"
                fill
                sizes="(max-width: 640px) 176px, 224px"
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
