"use client";

import { motion, useScroll, useTransform, useReducedMotion, type MotionValue } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { GithubIcon } from "@/components/ui/icons";
import { projectsData, Project } from "@/data/projects";
import { useSpotlightEffect } from "@/hooks/use-spotlight-effect";
import { fadeInUp, reducedFadeInUp } from "@/lib/motion";
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
  <Laptop key="1" className="w-20 h-20 text-white/50" />,
  <Layers key="2" className="w-20 h-20 text-white/50" />,
  <Layout key="3" className="w-20 h-20 text-white/50" />,
  <Smartphone key="4" className="w-20 h-20 text-white/50" />,
  <Smartphone key="5" className="w-20 h-20 text-white/50" />,
  <Shield key="6" className="w-20 h-20 text-white/50" />,
];

const mockGradients = [
  "from-blue-500/20 via-cyan-500/10 to-transparent",
  "from-emerald-500/20 via-teal-500/10 to-transparent",
  "from-purple-500/20 via-pink-500/10 to-transparent",
  "from-orange-500/20 via-amber-500/10 to-transparent",
  "from-rose-500/20 via-red-500/10 to-transparent",
  "from-indigo-500/20 via-blue-500/10 to-transparent",
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
        top: `calc(8rem + ${index * 1.5}rem)` // Base offset 8rem, 1.5rem stagger creates a clear, beautiful stack
      }}
    >
      <motion.div
        style={{ scale: shouldReduceMotion ? 1 : scale }}
        ref={divRef}
        {...handlers}
        className="group relative flex flex-col md:flex-row w-full overflow-hidden rounded-[2rem] border border-zinc-800/80 bg-zinc-950 shadow-[0_-20px_40px_rgba(0,0,0,0.8)] min-h-[450px]"
      >
        <motion.div
          className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 z-20"
          style={{ opacity, background }}
        />
        
        {/* Clean Split Media Region */}
        <div className={cn("relative w-full md:w-1/2 flex items-center justify-center overflow-hidden border-b md:border-b-0 md:border-r border-zinc-800/80 bg-black min-h-[280px] md:min-h-[450px]", !hasImages && `bg-gradient-to-br ${Gradient}`)}>
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
                    className="object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              ))}
            </div>
          ) : (
            <>
               <div className="absolute inset-0 bg-black/60 z-0"></div>
               <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
               <div className="relative z-10 transition-transform duration-700 ease-out group-hover:scale-110 drop-shadow-2xl">
                 {Icon}
               </div>
            </>
          )}
        </div>

        {/* Content Region */}
        <div className="relative z-10 w-full md:w-1/2 flex flex-col p-6 sm:p-8 md:p-10 bg-zinc-950 justify-between">
          <div>
            <div className="mb-3">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-1.5 tracking-tight">{project.title}</h3>
              <p className="text-zinc-400 font-medium text-sm sm:text-base">{project.subtitle}</p>
            </div>
            
            <p className={cn("text-zinc-400 leading-relaxed text-xs sm:text-sm mb-4", !isExpanded && "line-clamp-2 sm:line-clamp-3")}>
              {project.about}
            </p>

            {/* Problem & Solution Block */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-4 p-3 rounded-xl bg-zinc-900/40 border border-zinc-800/60 text-xs">
              <div className="space-y-1">
                <span className="font-semibold text-rose-400/90 flex items-center gap-1.5 uppercase tracking-wider text-[10px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0" />
                  Problem
                </span>
                <p className={cn("text-zinc-400 text-[11px] sm:text-xs leading-relaxed", !isExpanded && "line-clamp-2 sm:line-clamp-3")}>
                  {project.problem}
                </p>
              </div>
              <div className="space-y-1">
                <span className="font-semibold text-emerald-400/90 flex items-center gap-1.5 uppercase tracking-wider text-[10px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                  Solution
                </span>
                <p className={cn("text-zinc-400 text-[11px] sm:text-xs leading-relaxed", !isExpanded && "line-clamp-2 sm:line-clamp-3")}>
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Key Features List */}
            {project.features && project.features.length > 0 && (
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-zinc-500 font-semibold text-[11px] uppercase tracking-wider">Key Features</h4>
                  {project.features.length > 2 && (
                    <button
                      type="button"
                      onClick={() => setIsExpanded(!isExpanded)}
                      className="inline-flex items-center gap-1 text-[11px] font-medium text-zinc-400 hover:text-white transition-colors cursor-pointer"
                      aria-expanded={isExpanded}
                    >
                      {isExpanded ? (
                        <>
                          Show less <ChevronUp className="w-3 h-3" />
                        </>
                      ) : (
                        <>
                          +{project.features.length - 2} more <ChevronDown className="w-3 h-3" />
                        </>
                      )}
                    </button>
                  )}
                </div>
                <div className="grid grid-cols-1 gap-2">
                  {(isExpanded ? project.features : project.features.slice(0, 2)).map((feature, fIdx) => {
                    const FeatureIcon = (feature.icon && featureIconMap[feature.icon]) || Sparkles;
                    return (
                      <div key={fIdx} className="flex items-start gap-2.5 p-2 rounded-lg bg-zinc-900/30 border border-zinc-800/40">
                        <div className="p-1 rounded-md bg-zinc-800/80 text-blue-400 shrink-0 mt-0.5">
                          <FeatureIcon className="w-3.5 h-3.5" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h5 className="text-xs font-medium text-zinc-200 truncate">{feature.title}</h5>
                          <p className="text-[11px] text-zinc-400 line-clamp-1 sm:line-clamp-2 leading-relaxed">{feature.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
          
          <div className="pt-2">
            <h4 className="text-zinc-500 font-semibold text-[11px] mb-2 uppercase tracking-wider">Technologies Used</h4>
            <div className="flex flex-wrap gap-1.5 mb-6">
              {project.techStack.map((tech, i) => (
                <span key={i} className="px-2.5 py-1 rounded-md bg-zinc-900/60 border border-zinc-800/60 text-[11px] font-medium text-zinc-300">
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
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-xs sm:text-sm font-semibold hover:bg-zinc-200 hover:scale-105 active:scale-95 transition-all shadow-lg"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Visit Website
                </a>
              )}
              <a 
                href={project.link} 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-900 border border-zinc-800 text-white text-xs sm:text-sm font-semibold hover:bg-zinc-800 hover:scale-105 active:scale-95 transition-all"
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
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress through the entire section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section id="projects" className="relative w-full bg-transparent py-24 px-4 md:px-8">
      {/* 
        The container needs to be very tall to allow scrolling. 
        We use padding bottom so the last card has room to stick.
      */}
      <div ref={containerRef} className="mx-auto max-w-6xl">
        <motion.div
          variants={shouldReduceMotion ? reducedFadeInUp : fadeInUp}
          initial={shouldReduceMotion ? "visible" : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mb-10 flex flex-col items-center justify-center text-center py-8 z-0"
        >
          <h2 className="text-4xl font-bold text-white sm:text-6xl tracking-tighter">My Projects</h2>
          <div className="mt-6 h-1 w-24 rounded-full bg-zinc-800" />
        </motion.div>

        {/* 
          Cards Container: 
          Uses flex-col. As we scroll, cards stick to the top. 
          We add gap-[50vh] so there's a huge scroll distance before the next card arrives, 
          giving the user plenty of time to read the current card without it being covered.
        */}
        <div className="relative flex flex-col mt-10 gap-[50vh]">
          {projectsData.map((project, idx) => {
            // Target scale decreases by 4% per card that stacks on top
            const targetScale = 1 - ((projectsData.length - idx) * 0.04);
            
            // The range during which this specific card scales down.
            // It starts scaling when it reaches the top, which roughly correlates to its index.
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
