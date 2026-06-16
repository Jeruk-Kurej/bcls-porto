"use client";

import { Meteors } from "@/components/ui/meteor-background";
import { Spotlight } from "@/components/ui/spotlight";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { motion } from "framer-motion";

export const HeroSection = () => {
  const handleScroll = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-black antialiased">
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
      <div className="absolute inset-0 w-full h-full">
        <Meteors number={30} />
      </div>

      <div className="z-10 flex max-w-4xl flex-col items-center justify-center gap-6 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="bg-gradient-to-br from-white to-zinc-500 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-7xl">
            Bryan Carlie <br className="hidden sm:block" /> Lukito Setiawan
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-xl text-lg text-zinc-400 sm:text-xl"
        >
          Full Stack Application Developer
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-4"
        >
          <MagneticButton onClick={handleScroll}>
            View My Work
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
};
