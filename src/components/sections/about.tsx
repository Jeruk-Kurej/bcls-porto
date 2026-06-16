"use client";

import { useEffect, useState } from "react";
import { BentoGridItem } from "@/components/ui/bento-grid";
import { Server } from "lucide-react";
import { motion } from "framer-motion";
import { Marquee } from "@/components/ui/marquee";
import { GitHubCalendar } from "react-github-calendar";
import { GithubIcon } from "@/components/ui/icons";

export const AboutSection = () => {
  return (
    <section id="about" className="relative w-full bg-transparent py-20 px-4 md:px-8">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 flex flex-col items-center justify-center text-center"
        >
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Technical Profile</h2>
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
          className="grid md:auto-rows-[22rem] grid-cols-1 md:grid-cols-2 gap-8"
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
  { name: "Swift", url: "https://developer.apple.com/swift/" },
  { name: "Kotlin", url: "https://kotlinlang.org/" },
  { name: "NextJS", url: "https://nextjs.org/" },
  { name: "Laravel", url: "https://laravel.com/" },
  { name: "React", url: "https://react.dev/" },
  { name: "SwiftUI", url: "https://developer.apple.com/xcode/swiftui/" },
  { name: "Jetpack Compose", url: "https://developer.android.com/compose" },
  { name: "MySQL", url: "https://www.mysql.com/" },
  { name: "PostgreSQL", url: "https://www.postgresql.org/" },
  { name: "Firebase", url: "https://firebase.google.com/" },
  { name: "Cloudinary", url: "https://cloudinary.com/" },
  { name: "Prisma", url: "https://www.prisma.io/" }
];

const githubTheme = {
  light: ['#18181b', '#064e3b', '#047857', '#10b981', '#34d399'],
  dark: ['#18181b', '#064e3b', '#047857', '#10b981', '#34d399'],
};

const GithubCalendarComponent = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  
  if (!mounted) return <div className="h-[120px] w-full animate-pulse bg-zinc-800/20 rounded-lg"></div>;
  
  return (
    <GitHubCalendar
      username="Jeruk-Kurej"
      theme={githubTheme}
      showColorLegend={false}
      showMonthLabels={false}
      showTotalCount={false}
      blockSize={12}
      blockMargin={4}
      colorScheme="dark"
    />
  );
};

const items = [
  {
    title: "Code Activity",
    description: "My latest open-source contributions across the ecosystem.",
    header: (
      <div className="relative flex flex-1 w-full h-full min-h-[12rem] rounded-xl overflow-hidden bg-zinc-900/20 items-center justify-center p-4">
        <GithubCalendarComponent />
      </div>
    ),
    icon: <GithubIcon className="h-4 w-4 text-neutral-500" />,
    className: "md:col-span-1",
  },
  {
    title: "My Development Toolkit",
    description: "Continuously mastering modern languages and frameworks.",
    header: (
      <div className="relative flex flex-1 w-full h-full min-h-[12rem] rounded-xl overflow-hidden bg-purple-900/10 items-center justify-center">
        <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none"></div>
        <Marquee className="py-4" pauseOnHover>
          {techStack.map((tech, idx) => (
            <a
              key={idx}
              href={tech.url}
              target="_blank"
              rel="noreferrer"
              className="z-20 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-full text-sm font-medium text-white border border-white/10 hover:border-white/20 transition-colors whitespace-nowrap"
            >
              {tech.name}
            </a>
          ))}
        </Marquee>
      </div>
    ),
    icon: <Server className="h-4 w-4 text-neutral-500" />,
    className: "md:col-span-1",
  },
];
