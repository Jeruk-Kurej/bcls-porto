"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { GithubIcon } from "@/components/ui/icons";
import { projectsData, Project } from "@/data/projects";
import { 
  ShoppingCart, Package, Users, BarChart, Shield,
  Bot, Swords, FileText, Trophy, ShieldCheck,
  BrainCircuit, Database, Cloud, Lock,
  Calendar, BookOpen, Key, UsersRound,
  ClipboardList, MessageSquare, BellRing, LayoutDashboard,
  ChevronDown, Code2, Wrench
} from "lucide-react";

const IconMap: Record<string, React.ElementType> = {
  ShoppingCart, Package, Users, BarChart, Shield,
  Bot, Swords, FileText, Trophy, ShieldCheck,
  BrainCircuit, Database, Cloud, Lock,
  Calendar, BookOpen, Key, UsersRound,
  ClipboardList, MessageSquare, BellRing, LayoutDashboard,
};

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
      }}
      className="group relative flex flex-col rounded-2xl border border-zinc-800/50 bg-zinc-950/50 p-6 md:p-8 shadow-2xl transition-colors hover:border-zinc-700/50 backdrop-blur-sm"
    >
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{project.title}</h3>
          <p className="text-zinc-400 font-medium text-sm md:text-base">{project.subtitle}</p>
        </div>
        <a 
          href={project.link} 
          target="_blank" 
          rel="noreferrer" 
          className="shrink-0 flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-sm font-medium text-white transition-all border border-white/5 hover:border-white/20"
        >
          <GithubIcon className="h-4 w-4" />
          Repository
        </a>
      </div>

      <p className="text-zinc-300 leading-relaxed text-sm md:text-base mb-8">
        {project.about}
      </p>

      {/* Accordion Toggle */}
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center justify-between w-full p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/50 hover:bg-zinc-800/50 transition-colors mb-8"
      >
        <span className="font-semibold text-white">The Problem & The Solution</span>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <ChevronDown className="h-5 w-5 text-zinc-400" />
        </motion.div>
      </button>

      {/* Accordion Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="flex flex-col gap-6 pb-8 border-b border-zinc-800/50 mb-8">
              <div>
                <h4 className="text-red-400 font-semibold mb-2 text-sm uppercase tracking-wider">The Problem</h4>
                <p className="text-zinc-400 leading-relaxed text-sm">{project.problem}</p>
              </div>
              <div>
                <h4 className="text-emerald-400 font-semibold mb-2 text-sm uppercase tracking-wider">The Solution</h4>
                <p className="text-zinc-400 leading-relaxed text-sm">{project.solution}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-auto">
        {/* Features Column */}
        <div className="lg:col-span-2">
          <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
            <span className="h-6 w-1 rounded-full bg-blue-500"></span>
            Core Features
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.features.map((feature, i) => {
              const IconComponent = feature.icon ? IconMap[feature.icon] : null;
              return (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                  {IconComponent && (
                    <div className="mt-0.5 p-1.5 rounded-md bg-white/10 text-zinc-300">
                      <IconComponent className="h-4 w-4" />
                    </div>
                  )}
                  <div>
                    <h5 className="text-white text-sm font-medium mb-1">{feature.title}</h5>
                    <p className="text-zinc-500 text-xs leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tech Stack & Tools Column */}
        <div className="flex flex-col gap-6">
          <div>
            <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
              <Code2 className="h-4 w-4 text-zinc-400" />
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, i) => (
                <span key={i} className="px-2.5 py-1 rounded-md bg-zinc-800/50 border border-zinc-700/50 text-xs font-medium text-zinc-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
              <Wrench className="h-4 w-4 text-zinc-400" />
              Tools & Environment
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool, i) => (
                <span key={i} className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-xs font-medium text-zinc-400">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const ProjectsSection = () => {
  return (
    <section id="projects" className="relative w-full bg-transparent py-20 px-4 md:px-8 pb-40">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 flex flex-col items-center justify-center text-center"
        >
          <h2 className="text-3xl font-bold text-white sm:text-4xl">My Projects</h2>
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
          className="flex flex-col gap-10"
        >
          {projectsData.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
