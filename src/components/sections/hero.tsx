"use client";


import { Spotlight } from "@/components/ui/spotlight";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export const HeroSection = () => {
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 500], [0, 150]);
  const opacityParallax = useTransform(scrollY, [0, 300], [1, 0]);

  const handleScroll = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-transparent antialiased">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-black to-black opacity-80 pointer-events-none"></div>

      <motion.div
        initial="hidden"
        animate="visible"
        style={{ y: yParallax, opacity: opacityParallax }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
          },
        }}
        className="z-10 relative flex max-w-4xl flex-col items-center justify-center gap-6 px-4 text-center"
      >
        <motion.div 
          variants={{ hidden: { opacity: 0, scale: 0.5, filter: "blur(10px)" }, visible: { opacity: 1, scale: 1, filter: "blur(0px)", transition: { type: "spring", stiffness: 100, damping: 20 } } }}
          className="relative mb-2"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/20 to-zinc-500/20 blur-xl"></div>
          <Image
            src="https://avatars.githubusercontent.com/u/191065390?v=4"
            alt="Bryan Carlie Lukito Setiawan"
            width={128}
            height={128}
            className="relative z-10 rounded-full border border-white/10 shadow-[0_0_40px_rgba(255,255,255,0.1)] object-cover h-32 w-32 bg-zinc-900"
            priority
          />
        </motion.div>

        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
          <h1 className="bg-gradient-to-r from-zinc-300 via-blue-400 to-zinc-300 bg-[length:200%_auto] animate-text-gradient bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-7xl">
            Bryan Carlie <br className="hidden sm:block" /> Lukito Setiawan
          </h1>
        </motion.div>

        <motion.p
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          className="max-w-2xl text-lg text-zinc-400 sm:text-xl relative z-10"
        >
          <span className="font-semibold text-zinc-200">Informatics Student & Full-Stack Application Developer</span>
        </motion.p>

        <motion.div
          variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}
          className="mt-4 relative z-20"
        >
          <MagneticButton 
            onClick={handleScroll}
            className="border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] hover:bg-white/10 hover:border-white/40 transition-all duration-300"
          >
            View My Work
          </MagneticButton>
        </motion.div>
      </motion.div>
    </section>
  );
};
