"use client";

import { BentoGridItem } from "@/components/ui/bento-grid";
import { Apple, Calendar, Layout, Server } from "lucide-react";
import { motion } from "framer-motion";

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

const Skeleton = ({ gradient }: { gradient: string }) => (
  <div className={`flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br ${gradient}`}></div>
);

const items = [
  {
    title: "Next.js & React Ecosystem",
    description: "Building blazingly fast, SEO-friendly web apps with modern React, Next.js App Router, and Tailwind CSS.",
    header: <Skeleton gradient="from-blue-900/40 to-cyan-900/40" />,
    icon: <Layout className="h-4 w-4 text-neutral-500" />,
    className: "md:col-span-2",
  },
  {
    title: "Laravel & Backend",
    description: "Crafting robust APIs and scalable server-side architectures.",
    header: <Skeleton gradient="from-red-900/40 to-orange-900/40" />,
    icon: <Server className="h-4 w-4 text-neutral-500" />,
    className: "md:col-span-1",
  },
  {
    title: "Apple Developer Academy",
    description: "Honing my skills in SwiftUI and the Apple ecosystem, preparing for the next wave of native mobile experiences.",
    header: <Skeleton gradient="from-zinc-800/40 to-zinc-900/40" />,
    icon: <Apple className="h-4 w-4 text-neutral-500" />,
    className: "md:col-span-1",
  },
  {
    title: "Event Organization",
    description: "Core organizer for Intern Hustle 2026, empowering developers through community and collaboration.",
    header: <Skeleton gradient="from-purple-900/40 to-violet-900/40" />,
    icon: <Calendar className="h-4 w-4 text-neutral-500" />,
    className: "md:col-span-2",
  },
];
