"use client";

import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import Image from "next/image";

export const ProjectsSection = () => {
  const projects = [
    {
      title: "UC Online Learning Business Directory",
      description: "Built a digital ecosystem connecting 1,000+ students and 100+ alumni. Optimized complex relational database queries (Entrepreneur vs Intrapreneur) by shifting processing load to the backend using Laravel Collections, delivering instant frontend filtering via Alpine.js.",
      tech: ["Laravel", "MySQL", "Alpine.js", "Tailwind"],
      imagePlaceholder: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=2070&auto=format&fit=crop",
      link: "https://github.com/Jeruk-Kurej/UC-Online-Learning"
    },
    {
      title: "YukDebat",
      description: "An integrated iOS platform for the British Parliamentary debate ecosystem. Engineered a robust asynchronous data pipeline utilizing Swift's async/await and Task to flawlessly sequence heavy poster uploads to Cloudinary and metadata syncing to Firestore without UI freezing.",
      tech: ["Swift", "Firebase Firestore", "Cloudinary"],
      imagePlaceholder: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      link: "https://github.com/Jeruk-Kurej/YukDebat"
    },
  ];

  return (
    <section id="projects" className="relative w-full bg-transparent py-20 px-4 md:px-8 pb-40">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 flex flex-col items-center justify-center text-center"
        >
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Featured Projects</h2>
          <div className="mt-2 h-1 w-20 rounded bg-zinc-800" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
              }}
              className="h-full"
            >
              <Tilt
                glareEnable={true}
                glareMaxOpacity={0.45}
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                className="group flex h-full flex-col relative rounded-2xl border border-zinc-800 bg-zinc-950 p-6 shadow-2xl transition-colors hover:border-zinc-700"
              >
                <div className="relative h-48 w-full overflow-hidden rounded-xl mb-6 transform-gpu" style={{ transform: "translateZ(30px)" }}>
                  <Image
                    src={project.imagePlaceholder}
                    alt={project.title}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500" />
                </div>

                <div className="flex flex-1 flex-col transform-gpu" style={{ transform: "translateZ(40px)" }}>
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-zinc-400 mb-6 flex-1 text-sm">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t, i) => (
                      <span key={i} className="rounded-full bg-zinc-900 px-3 py-1 text-xs font-medium text-zinc-300 border border-zinc-800">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 mt-auto">
                    <a href={project.link} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium text-white hover:text-blue-400 transition-colors">
                      <GithubIcon className="h-4 w-4" />
                      View Source
                    </a>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
