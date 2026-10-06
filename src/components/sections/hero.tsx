"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { useReducedMotionState } from "@/lib";

export const HeroSection = () => {
  const { enabled } = useReducedMotionState();
  const shouldReduceMotion = !enabled;
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
      {/* ── Background: sparse contour wave lines instead of blurred orbs ── */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 w-full h-full"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 1200 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Thin contour/wave lines — quiet background texture */}
        <path
          d="M-50 520 Q200 440 400 480 T800 460 T1250 500"
          stroke="var(--color-tide)"
          strokeWidth="1"
          strokeOpacity="0.12"
          fill="none"
        />
        <path
          d="M-50 570 Q250 510 500 540 T900 520 T1250 560"
          stroke="var(--color-tide)"
          strokeWidth="0.75"
          strokeOpacity="0.08"
          fill="none"
        />
        <path
          d="M-50 620 Q300 580 600 600 T1000 590 T1250 630"
          stroke="var(--color-tide)"
          strokeWidth="0.5"
          strokeOpacity="0.06"
          fill="none"
        />
        {/* Fading dot grid — denser near center-right, fading outward */}
        {[
          { cx: 800, cy: 200, r: 1.2, o: 0.08 },
          { cx: 850, cy: 260, r: 1, o: 0.06 },
          { cx: 900, cy: 180, r: 0.8, o: 0.05 },
          { cx: 760, cy: 280, r: 1, o: 0.07 },
          { cx: 920, cy: 240, r: 0.9, o: 0.04 },
          { cx: 700, cy: 350, r: 1.1, o: 0.06 },
          { cx: 950, cy: 310, r: 0.7, o: 0.04 },
          { cx: 1000, cy: 200, r: 0.8, o: 0.03 },
          { cx: 820, cy: 340, r: 1, o: 0.05 },
        ].map((dot, i) => (
          <circle
            key={i}
            cx={dot.cx}
            cy={dot.cy}
            r={dot.r}
            fill="var(--color-tide)"
            fillOpacity={dot.o}
          />
        ))}
      </svg>

      <div className="mx-auto max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Column: Asymmetric Editorial Content */}
        <motion.div
          style={{ 
            y: shouldReduceMotion ? 0 : yParallax, 
            opacity: shouldReduceMotion ? 1 : opacityParallax 
          }}
          className="lg:col-span-7 flex flex-col items-start text-left"
        >
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

          {/* Positioning Statement — availability info folded in naturally */}
          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-[var(--color-ink)] leading-relaxed max-w-xl mb-8"
          >
            Full-stack application developer building native iOS, Android, and web systems — 
            currently open to full-stack and native roles. 
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

        {/* Right Column: Portrait with distinct water-ring treatment */}
        <div className="lg:col-span-5 flex items-center justify-center relative">
          {/* Concentric ripple rings — decorative frame distinct from the rounded-2xl cards */}
          <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full border border-[var(--color-tide)]/15" />
          </div>
          <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-72 h-72 sm:w-[22rem] sm:h-[22rem] rounded-full border border-[var(--color-tide)]/8" />
          </div>

          {/* Portrait — circular mask, no frosted-glass card wrapper */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative z-10"
          >
            <div className="relative w-48 h-48 sm:w-60 sm:h-60 rounded-full overflow-hidden ring-2 ring-[var(--color-tide)]/25 ring-offset-4 ring-offset-[var(--color-mist)] shadow-lg">
              <Image
                src="https://avatars.githubusercontent.com/u/191065390?v=4"
                alt="Bryan Carlie Lukito Setiawan"
                fill
                sizes="(max-width: 640px) 192px, 240px"
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
