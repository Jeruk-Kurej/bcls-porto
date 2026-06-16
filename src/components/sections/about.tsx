"use client";

import { BentoGridItem } from "@/components/ui/bento-grid";
import { Calendar, GraduationCap, Layout, Server, Users } from "lucide-react";
import { motion } from "framer-motion";
import { Marquee } from "@/components/ui/marquee";
import { GridPattern } from "@/components/ui/grid-pattern";

export const AboutSection = () => {
  return (
    <section id="about" className="relative w-full bg-transparent py-20 px-4 md:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 flex flex-col items-center justify-center text-center"
        >
          <h2 className="text-3xl font-bold text-white sm:text-4xl">About & Tech Stack</h2>
          <div className="mt-2 h-1 w-20 rounded bg-zinc-800" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="max-w-5xl mx-auto grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4"
        >
          {items.map((item, i) => (
            <motion.div
              key={i}
              className={item.className}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
              }}
            >
              <BentoGridItem
                title={item.title}
                description={item.description}
                header={item.header}
                icon={item.icon}
                className="h-full"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const techStack = [
  "Swift", "Kotlin", "NextJS", "Laravel", "React", "SwiftUI", 
  "Jetpack Compose", "MySQL", "PostgreSQL", "Firebase", "Cloudinary", "Prisma"
];

const items = [
  {
    title: "Education",
    description: "Informatics at Universitas Ciputra Surabaya",
    header: (
      <div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden bg-blue-900/10 items-center justify-center">
        <h1 className="absolute z-0 text-7xl md:text-9xl font-black text-white/5 -rotate-12 select-none tracking-tighter">
          3.83
        </h1>
        <motion.div
          animate={{ y: [-5, 5, -5], rotate: [-5, 5, -5] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <GraduationCap className="h-16 w-16 text-blue-400 z-10 relative drop-shadow-[0_0_15px_rgba(96,165,250,0.5)]" />
        </motion.div>
      </div>
    ),
    icon: <span className="text-xs font-bold text-blue-400">GPA: 3.83/4.00</span>,
    className: "md:col-span-1",
  },
  {
    title: "Tech Stack",
    description: "Continuously mastering modern languages and frameworks.",
    header: (
      <div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden bg-purple-900/10 items-center justify-center">
        <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none"></div>
        <Marquee className="py-4" pauseOnHover>
          {techStack.map((tech, idx) => (
            <span key={idx} className="px-4 py-2 bg-white/5 rounded-full text-sm font-medium text-white border border-white/10 whitespace-nowrap">
              {tech}
            </span>
          ))}
        </Marquee>
      </div>
    ),
    icon: <Server className="h-4 w-4 text-neutral-500" />,
    className: "md:col-span-2",
  },
  {
    title: "Leadership & Experience",
    description: "Event Division Coordinator for Intern Hustle 2026. Creative Division Coordinator at GDG on Campus. Student Assistant for Object-Oriented Programming & Computer Architecture.",
    header: (
      <div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden bg-zinc-900/20 items-center justify-center">
        <GridPattern className="text-zinc-600/20" />
        <div className="z-10 flex gap-8">
          <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 3, repeat: Infinity }}>
            <Calendar className="h-12 w-12 text-zinc-300 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]" />
          </motion.div>
          <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}>
            <Users className="h-12 w-12 text-zinc-400 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]" />
          </motion.div>
        </div>
      </div>
    ),
    icon: <Users className="h-4 w-4 text-neutral-500" />,
    className: "md:col-span-3",
  },
];
