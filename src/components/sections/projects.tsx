"use client";

import { motion, useScroll, useTransform, useReducedMotion, type MotionValue } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { GithubIcon } from "@/components/ui/icons";
import { projectsData, Project } from "@/data/projects";
import { useSpotlightEffect } from "@/hooks/use-spotlight-effect";
import { 
  Laptop, 
  Smartphone, 
  Layers, 
  Layout, 
  Shield, 
  Cloud, 
  ExternalLink,
  BrainCircuit,
  Database,
  Lock,
  Calendar,
  BookOpen,
  Key,
  UsersRound,
  Bot,
  Swords,
  FileText,
  Trophy,
  ShieldCheck,
  Users,
  BarChart,
  ShoppingCart,
  Package,
  ClipboardList,
  MessageSquare,
  BellRing,
  LayoutDashboard,
  ChevronDown,
  ChevronUp,
  Sparkles,
  type LucideIcon
} from "lucide-react";
import { cn } from "@/lib/utils";

const featureIconMap: Record<string, LucideIcon> = {
  BrainCircuit,
  Database,
  Cloud,
  Lock,
  Calendar,
  BookOpen,
  Key,
  UsersRound,
  Bot,
  Swords,
  FileText,
  Trophy,
  ShieldCheck,
  Users,
  BarChart,
  ShoppingCart,
  Package,
  Shield,
  ClipboardList,
  MessageSquare,
  BellRing,
  LayoutDashboard,
};

const mockIcons = [
  <Laptop key="1" className="w-20 h-20 text-[var(--color-tide-deep)]/70" />,
  <Layers key="2" className="w-20 h-20 text-[var(--color-tide-deep)]/70" />,
  <Layout key="3" className="w-20 h-20 text-[var(--color-tide-deep)]/70" />,
  <Smartphone key="4" className="w-20 h-20 text-[var(--color-tide-deep)]/70" />,
  <Smartphone key="5" className="w-20 h-20 text-[var(--color-tide-deep)]/70" />,
  <Shield key="6" className="w-20 h-20 text-[var(--color-tide-deep)]/70" />,
];

const mockGradients = [
  "from-[var(--color-foam)] via-[var(--color-mist)] to-white",
  "from-[var(--color-foam)] via-[var(--color-mist)] to-white",
  "from-[var(--color-foam)] via-[var(--color-mist)] to-white",
  "from-[var(--color-foam)] via-[var(--color-mist)] to-white",
  "from-[var(--color-foam)] via-[var(--color-mist)] to-white",
  "from-[var(--color-foam)] via-[var(--color-mist)] to-white",
];

const ProjectCard = ({ 
  project, 
  index, 
  progress, 
  range, 
  targetScale 
}: { 
  project: Project; 
  index: number; 
  progress: MotionValue<number>; 
  range: number[]; 
  targetScale: number 
}) => {
  const shouldReduceMotion = useReducedMotion();
  const { divRef, background, opacity, handlers } = useSpotlightEffect(1000, "rgba(255,255,255,.05)");
  const [currentImageIdx, setCurrentImageIdx] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (project.images && project.images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIdx((prev) => (prev + 1) % project.images!.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [project.images]);

  // Scale down the card as the user scrolls past it
  const scale = useTransform(progress, range, [1, targetScale]);

  const Icon = mockIcons[index] || mockIcons[0];
  const Gradient = mockGradients[index] || mockGradients[0];
  
  const hasImages = project.images && project.images.length > 0;

  return (
    <div 
      className="sticky flex items-center justify-center pb-8" 
      style={{ 
        zIndex: index,
        top: `calc(7rem + ${index * 1.5}rem)` // Base offset 7rem, 1.5rem stagger creates a clear, beautiful stack
      }}
    >
      <motion.div
        style={{ scale: shouldReduceMotion ? 1 : scale }}
        ref={divRef}
        {...handlers}
        className="group relative flex flex-col md:flex-row w-full overflow-hidden rounded-[2rem] border border-[var(--color-tide)]/25 bg-white shadow-xl min-h-[450px]"
      >
        <motion.div
          className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 z-20"
          style={{ opacity, background }}
        />
        
        {/* Clean Split Media Region */}
        <div className={cn("relative w-full md:w-1/2 flex items-center justify-center overflow-hidden border-b md:border-b-0 md:border-r border-[var(--color-tide)]/20 bg-[var(--color-foam)]/40 min-h-[280px] md:min-h-[450px]", !hasImages && `bg-gradient-to-br ${Gradient}`)}>
          {hasImages ? (
            <div className="absolute inset-0 w-full h-full z-0">
              {project.images!.map((img, i) => (
                <div 
                  key={i}
                  className={cn(
                    "absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out",
                    i === currentImageIdx ? "opacity-100 z-10" : "opacity-0 z-0"
                  )}
                >
                  <Image 
                    src={img} 
                    alt={`${project.title} screenshot ${i + 1}`} 
                    fill
                    className="object-cover object-top opacity-95 group-hover:opacity-100 transition-opacity duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              ))}
            </div>
          ) : (
            <>
               <div className="absolute inset-0 bg-[var(--color-foam)]/50 z-0"></div>
               <div className="absolute inset-0 z-0 opacity-40" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #2AA8CC 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
               <div className="relative z-10 transition-transform duration-700 ease-out group-hover:scale-110 drop-shadow-md">
                 {Icon}
               </div>
            </>
          )}
        </div>

        {/* Content Region */}
        <div className="relative z-10 w-full md:w-1/2 flex flex-col p-6 sm:p-8 md:p-10 bg-white justify-between">
          <div>
            <div className="mb-3">
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-[var(--color-depth)] mb-1 tracking-tight">{project.title}</h3>
              <p className="text-[var(--color-tide-deep)] font-medium text-sm sm:text-base">{project.subtitle}</p>
            </div>
            
            <p className={cn("text-[var(--color-ink)] leading-relaxed text-xs sm:text-sm mb-4", !isExpanded && "line-clamp-2 sm:line-clamp-3")}>
              {project.about}
            </p>

            {/* Problem & Solution Block */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-4 p-3.5 rounded-xl bg-[var(--color-foam)]/50 border border-[var(--color-tide)]/20 text-xs">
              <div className="space-y-1">
                <span className="font-semibold text-rose-700 flex items-center gap-1.5 text-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0" />
                  Problem
                </span>
                <p className={cn("text-[var(--color-ink)] text-[11px] sm:text-xs leading-relaxed", !isExpanded && "line-clamp-2 sm:line-clamp-3")}>
                  {project.problem}
                </p>
              </div>
              <div className="space-y-1">
                <span className="font-semibold text-teal-800 flex items-center gap-1.5 text-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-600 shrink-0" />
                  Solution
                </span>
                <p className={cn("text-[var(--color-ink)] text-[11px] sm:text-xs leading-relaxed", !isExpanded && "line-clamp-2 sm:line-clamp-3")}>
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Key Features List */}
            {project.features && project.features.length > 0 && (
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-[var(--color-depth)] font-semibold text-xs">Key Features</h4>
                  {project.features.length > 2 && (
                    <button
                      type="button"
                      onClick={() => setIsExpanded(!isExpanded)}
                      className="inline-flex items-center gap-1 text-xs font-medium text-[var(--color-tide-deep)] hover:underline transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-[var(--color-tide-deep)] rounded-xs"
                      aria-expanded={isExpanded}
                    >
                      {isExpanded ? (
                        <>
                          Show less <ChevronUp className="w-3.5 h-3.5" />
                        </>
                      ) : (
                        <>
                          +{project.features.length - 2} more <ChevronDown className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  )}
                </div>
                <div className="grid grid-cols-1 gap-2">
                  {(isExpanded ? project.features : project.features.slice(0, 2)).map((feature, fIdx) => {
                    const FeatureIcon = (feature.icon && featureIconMap[feature.icon]) || Sparkles;
                    return (
                      <div key={fIdx} className="flex items-start gap-2.5 p-2 rounded-lg bg-[var(--color-foam)]/40 border border-[var(--color-tide)]/15">
                        <div className="p-1 rounded-md bg-white text-[var(--color-tide-deep)] shrink-0 mt-0.5 border border-[var(--color-tide)]/20">
                          <FeatureIcon className="w-3.5 h-3.5" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h5 className="text-xs font-medium text-[var(--color-depth)] truncate">{feature.title}</h5>
                          <p className="text-[11px] text-[var(--color-ink)] line-clamp-1 sm:line-clamp-2 leading-relaxed">{feature.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
          
          <div className="pt-2">
            <h4 className="text-[var(--color-depth)] font-semibold text-xs mb-2">Technologies Used</h4>
            <div className="flex flex-wrap gap-1.5 mb-6">
              {project.techStack.map((tech, i) => (
                <span key={i} className="px-2.5 py-1 rounded-md bg-[var(--color-foam)]/80 border border-[var(--color-tide)]/25 text-[11px] font-medium text-[var(--color-depth)]">
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {project.liveUrl && (
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--color-tide-deep)] text-white text-xs sm:text-sm font-semibold hover:opacity-90 hover:scale-103 active:scale-95 transition-all shadow-sm focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[var(--color-tide-deep)]"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Visit Website
                </a>
              )}
              <a 
                href={project.link} 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--color-foam)]/80 border border-[var(--color-tide)]/30 text-[var(--color-depth)] text-xs sm:text-sm font-semibold hover:bg-[var(--color-foam)] hover:scale-103 active:scale-95 transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[var(--color-tide-deep)]"
              >
                <GithubIcon className="h-3.5 w-3.5" />
                Repository
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const ProjectsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress through the entire section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section id="projects" className="relative w-full bg-transparent py-24 px-4 md:px-8">
      <div ref={containerRef} className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col items-center justify-center text-center py-8 z-0">
          <h2 className="text-4xl font-display font-bold text-[var(--color-depth)] sm:text-6xl tracking-tight">My Projects</h2>
          <div className="mt-4 h-1 w-24 rounded-full bg-[var(--color-tide)]/40" />
        </div>

        {/* 
          Cards Container: 
          Uses flex-col with gap-[16vh] for comfortable pacing without excessive scroll voids.
        */}
        <div className="relative flex flex-col mt-10 gap-[16vh]">
          {projectsData.map((project, idx) => {
            const targetScale = 1 - ((projectsData.length - idx) * 0.03);
            const range = [idx * (1 / projectsData.length), 1];

            return (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={idx} 
                progress={scrollYProgress}
                range={range}
                targetScale={targetScale}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
