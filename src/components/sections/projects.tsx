"use client";

import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { GithubIcon } from "@/components/ui/icons";

export const ProjectsSection = () => {
  const projects = [
    {
      title: "UC Online Learning",
      description: "A digital ecosystem connecting 1,000+ students. Optimized complex relational database queries by shifting processing load to the backend using Laravel Collections.",
      tech: ["Laravel", "Alpine.js", "MySQL"],
      link: "https://github.com/Jeruk-Kurej/UC-Online-Learning"
    },
    {
      title: "YukDebat",
      description: "iOS platform for the BP debate ecosystem. Engineered a robust async/await pipeline to sequence heavy image uploads and metadata syncing flawlessly.",
      tech: ["Swift", "Firebase", "Cloudinary"],
      link: "https://github.com/Jeruk-Kurej/YukDebat"
    },
    {
      title: "Dagify",
      description: "A native iOS business management application utilizing MVVM architecture. Features comprehensive modules for CRM, real-time cashflow tracking, inventory management, and a seamless POS interface powered by Firebase backend services.",
      tech: ["Swift", "SwiftUI", "Firebase"],
      link: "https://github.com/Jeruk-Kurej/Dagify"
    },
    {
      title: "Sum-O Point of Sale",
      description: "An end-to-end POS system. The native Android frontend is built with Kotlin and Jetpack Compose for a highly responsive UI, seamlessly integrated with a robust Node.js and Prisma backend to handle complex order processing and QRIS payments.",
      tech: ["Kotlin", "Jetpack Compose", "Node.js", "Prisma"],
      link: "https://github.com/Jeruk-Kurej/Sum-O"
    },
    {
      title: "Darmo Permai Web Portal",
      description: "A full-stack congregation management portal. Engineered a monolithic architecture using Laravel as the core backend, bridged seamlessly to a highly interactive React frontend via Inertia.js. Features dynamic bulletins, media galleries, and event scheduling.",
      tech: ["Laravel", "React", "Inertia.js", "Tailwind"],
      link: "https://github.com/Jeruk-Kurej/GKI-Darmo-Permai"
    },
    {
      title: "FixIt",
      description: "A modern appliance repair booking platform. Implemented a complex, multi-step service selection architecture with dedicated real-time dashboards for customers, technicians, and administrators.",
      tech: ["Next.js", "Prisma", "TypeScript"],
      link: "https://github.com/Jeruk-Kurej/FixIt"
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
              transition: { staggerChildren: 0.15 },
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
                glareMaxOpacity={0.15}
                tiltMaxAngleX={5}
                tiltMaxAngleY={5}
                className="group flex h-full flex-col relative rounded-2xl border border-zinc-800 bg-zinc-950 p-6 md:p-8 shadow-2xl transition-colors hover:border-zinc-700"
              >
                <div className="flex flex-1 flex-col transform-gpu" style={{ transform: "translateZ(40px)" }}>
                  <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                  <p className="text-zinc-400 mb-8 flex-1 text-sm md:text-base leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                    {project.tech.map((t, i) => (
                      <span key={i} className="rounded-full bg-zinc-900 px-3 py-1.5 text-xs font-medium text-zinc-300 border border-zinc-800 shadow-inner">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
                    <a href={project.link} target="_blank" rel="noreferrer" className="flex items-center justify-center w-full md:w-auto gap-2 px-6 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-sm font-medium text-white transition-all border border-white/5 hover:border-white/20">
                      <GithubIcon className="h-4 w-4" />
                      View Repository
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
