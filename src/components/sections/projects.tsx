"use client";

import { TiltCard } from "@/components/ui/3d-tilt-card";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import Image from "next/image";

export const ProjectsSection = () => {
  const projects = [
    {
      title: "FixIt 2.0",
      description: "A comprehensive maintenance service platform built to streamline repair requests and technician dispatches.",
      tech: ["Next.js", "Prisma", "Tailwind CSS", "TypeScript"],
      imagePlaceholder: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Niraloka",
      description: "An AI-driven auditing system concept designed to automate compliance checks and anomaly detection.",
      tech: ["React", "Python", "OpenAI", "FastAPI"],
      imagePlaceholder: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    },
  ];

  return (
    <section id="projects" className="relative w-full bg-black py-20 px-4 md:px-8 pb-40">
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

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="h-full"
            >
              <TiltCard className="group flex h-full flex-col">
                <div className="relative h-48 w-full overflow-hidden rounded-xl mb-6">
                  {/* Real Image Placeholder, unoptimized to avoid next.config changes */}
                  <Image
                    src={project.imagePlaceholder}
                    alt={project.title}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500" />
                </div>

                <div className="flex flex-1 flex-col">
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-zinc-400 mb-6 flex-1">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t, i) => (
                      <span key={i} className="rounded-full bg-zinc-900 px-3 py-1 text-xs font-medium text-zinc-300 border border-zinc-800">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 mt-auto">
                    <button className="flex items-center gap-2 text-sm font-medium text-white hover:text-blue-400 transition-colors">
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </button>
                    <button className="flex items-center gap-2 text-sm font-medium text-white hover:text-blue-400 transition-colors">
                      <GithubIcon className="h-4 w-4" />
                      Source
                    </button>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
