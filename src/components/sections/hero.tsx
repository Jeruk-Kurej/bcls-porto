"use client";

import { Spotlight } from "@/components/ui/spotlight";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { motion } from "framer-motion";
import { ReactIcon, AppleIcon, LaravelIcon } from "@/components/ui/icons";

export const HeroSection = () => {
  const handleScroll = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-transparent antialiased">
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
          },
        }}
        className="z-10 relative flex max-w-4xl flex-col items-center justify-center gap-6 px-4 text-center"
      >
        {/* Floating Icons */}
        <motion.div
          className="absolute -left-20 top-0 hidden md:block text-blue-400 opacity-60"
          animate={{ y: [-15, 15, -15], rotate: [0, 10, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ReactIcon className="h-16 w-16" />
        </motion.div>
        <motion.div
          className="absolute -right-10 top-20 hidden md:block text-zinc-300 opacity-60"
          animate={{ y: [15, -15, 15], rotate: [0, -10, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <AppleIcon className="h-14 w-14" />
        </motion.div>
        <motion.div
          className="absolute left-10 bottom-0 hidden md:block text-red-500 opacity-60"
          animate={{ y: [-10, 10, -10], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        >
          <LaravelIcon className="h-12 w-12" />
        </motion.div>

        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
          <h1 className="bg-gradient-to-br from-white to-zinc-500 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-7xl">
            Bryan Carlie <br className="hidden sm:block" /> Lukito Setiawan
          </h1>
        </motion.div>

        <motion.p
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          className="max-w-2xl text-lg text-zinc-400 sm:text-xl relative z-10"
        >
          <span className="font-semibold text-zinc-200">Informatics Student & Full-Stack Application Developer</span>
          <br className="mt-3 block" />
          Crafting seamless web ecosystems and intuitive iOS experiences. Currently preparing for the Apple Developer Academy Cohort 2027.
        </motion.p>

        <motion.div
          variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}
          className="mt-4 relative z-20"
        >
          <MagneticButton onClick={handleScroll}>
            View My Work
          </MagneticButton>
        </motion.div>
      </motion.div>
    </section>
  );
};
