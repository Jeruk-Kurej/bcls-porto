"use client";

import { useSyncExternalStore } from "react";
import { BentoGridItem } from "@/components/ui/bento-grid";
import { Server } from "lucide-react";
import { motion } from "framer-motion";
import { Marquee } from "@/components/ui/marquee";
import { GitHubCalendar } from "react-github-calendar";
import { GithubIcon } from "@/components/ui/icons";
import { staggerContainer, cardFadeInUp } from "@/lib/motion";

export const AboutSection = () => {
  return (
    <section id="capabilities" className="relative w-full bg-transparent py-20 px-4 md:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 flex flex-col items-center justify-center text-center">
          <h2 className="text-3xl font-display font-bold text-[var(--color-depth)] sm:text-4xl">Technical Profile</h2>
          <div className="mt-3 h-1 w-20 rounded-full bg-[var(--color-tide)]/40" />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid md:auto-rows-[22rem] grid-cols-1 md:grid-cols-2 gap-8"
        >
          {items.map((item, i) => (
            <motion.div
              key={i}
              className={item.className}
              variants={cardFadeInUp}
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
  light: ['#E3F2F7', '#86d0e3', '#4fb8d8', '#2AA8CC', '#16748E'],
  dark: ['#E3F2F7', '#86d0e3', '#4fb8d8', '#2AA8CC', '#16748E'],
};

const emptySubscribe = () => () => {};

const GithubCalendarComponent = () => {
  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);
  
  if (!mounted) return <div className="h-[120px] w-full animate-pulse bg-[var(--color-foam)] rounded-lg"></div>;
  
  return (
    <GitHubCalendar
      username="Jeruk-Kurej"
      theme={githubTheme}
      showColorLegend={false}
      showMonthLabels={false}
      showTotalCount={false}
      blockSize={12}
      blockMargin={4}
      colorScheme="light"
    />
  );
};

const items = [
  {
    title: "Code Activity",
    description: "My latest open-source contributions across the ecosystem.",
    header: (
      <div className="relative flex flex-1 w-full h-full min-h-[12rem] rounded-xl overflow-hidden bg-white/60 items-center justify-center p-4 border border-[var(--color-tide)]/15">
        <GithubCalendarComponent />
      </div>
    ),
    icon: <GithubIcon className="h-4 w-4 text-[var(--color-tide-deep)]" />,
    className: "md:col-span-1",
  },
  {
    title: "My Development Toolkit",
    description: "Continuously mastering modern languages and frameworks.",
    header: (
      <div className="relative flex flex-1 w-full flex-col h-full min-h-[12rem] rounded-xl overflow-hidden bg-[var(--color-mist)] items-center justify-center gap-4 border border-[var(--color-tide)]/15">
        <div className="absolute inset-y-0 left-0 w-1/5 bg-gradient-to-r from-[var(--color-mist)] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-1/5 bg-gradient-to-l from-[var(--color-mist)] to-transparent z-10 pointer-events-none"></div>
        
        <Marquee className="w-full" pauseOnHover>
          {techStack.slice(0, Math.ceil(techStack.length / 2)).map((tech, idx) => (
            <motion.a
              key={idx}
              href={tech.url}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -3, scale: 1.04 }}
              transition={{ type: "spring", stiffness: 400, damping: 12 }}
              className="inline-block z-20 px-3.5 py-1.5 bg-white/80 hover:bg-white rounded-full text-xs sm:text-sm font-medium text-[var(--color-depth)] border border-[var(--color-tide)]/30 hover:border-[var(--color-tide)] transition-all shadow-xs whitespace-nowrap cursor-pointer mx-1.5"
            >
              {tech.name}
            </motion.a>
          ))}
        </Marquee>

        <Marquee className="w-full" pauseOnHover reverse>
          {techStack.slice(Math.ceil(techStack.length / 2)).map((tech, idx) => (
            <motion.a
              key={idx}
              href={tech.url}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -3, scale: 1.04 }}
              transition={{ type: "spring", stiffness: 400, damping: 12 }}
              className="inline-block z-20 px-3.5 py-1.5 bg-white/80 hover:bg-white rounded-full text-xs sm:text-sm font-medium text-[var(--color-depth)] border border-[var(--color-tide)]/30 hover:border-[var(--color-tide)] transition-all shadow-xs whitespace-nowrap cursor-pointer mx-1.5"
            >
              {tech.name}
            </motion.a>
          ))}
        </Marquee>
      </div>
    ),
    icon: <Server className="h-4 w-4 text-[var(--color-tide-deep)]" />,
    className: "md:col-span-1",
  },
];
