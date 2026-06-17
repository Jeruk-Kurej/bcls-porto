"use client";

import { motion, useScroll, useTransform, useMotionTemplate, useMotionValue } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { GithubIcon } from "@/components/ui/icons";
import { projectsData, Project } from "@/data/projects";
import { Laptop, Smartphone, Layers, Layout, Shield, Cloud, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

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
  progress: any; 
  range: number[]; 
  targetScale: number 
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [opacity, setOpacity] = useState(0);
  const [currentImageIdx, setCurrentImageIdx] = useState(0);

  useEffect(() => {
    if (project.images && project.images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIdx((prev) => (prev + 1) % project.images!.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [project.images]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isFocused) return;
    const div = divRef.current;
    const rect = div.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleFocus = () => { setIsFocused(true); setOpacity(1); };
  const handleBlur = () => { setIsFocused(false); setOpacity(0); };
  const handleMouseEnter = () => { setOpacity(1); };
  const handleMouseLeave = () => { setOpacity(0); };

  const background = useMotionTemplate`radial-gradient(1000px circle at ${mouseX}px ${mouseY}px, rgba(255,255,255,.05), transparent 40%)`;
  
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
        top: `calc(6rem + ${index * 1.5}rem)` // Dynamic top spacing creates a staggered deck effect
      }}
    >
      <motion.div
        style={{ scale }}
        ref={divRef}
        onMouseMove={handleMouseMove}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="group relative flex flex-col md:flex-row w-full overflow-hidden rounded-[2rem] border border-zinc-800/80 bg-zinc-950 shadow-[0_-20px_40px_rgba(0,0,0,0.8)] min-h-[450px]"
      >
        <motion.div
          className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 z-20"
          style={{ opacity, background }}
        />
        
        {/* Clean Split Media Region */}
        <div className={cn("relative w-full md:w-1/2 flex items-center justify-center overflow-hidden border-b md:border-b-0 md:border-r border-zinc-800/80 bg-black", !hasImages && `bg-gradient-to-br ${Gradient}`)}>
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
        <div className="relative z-10 w-full md:w-1/2 flex flex-col p-8 md:p-12 bg-zinc-950">
          <div className="mb-4">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight">{project.title}</h3>
            <p className="text-zinc-400 font-medium text-base md:text-lg">{project.subtitle}</p>
          </div>
          
          <p className="text-zinc-400 leading-relaxed text-sm md:text-base line-clamp-4 mb-8">
            {project.about}
          </p>
          
          <div className="mt-auto">
            <h4 className="text-zinc-500 font-semibold text-xs mb-3 uppercase tracking-wider">Technologies Used</h4>
            <div className="flex flex-wrap gap-2 mb-8">
              {project.techStack.map((tech, i) => (
                <span key={i} className="px-3 py-1.5 rounded-lg bg-zinc-900/50 border border-zinc-800/50 text-xs font-medium text-zinc-300">
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              {project.liveUrl && (
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black text-sm font-semibold hover:bg-zinc-200 hover:scale-105 active:scale-95 transition-all shadow-lg"
                >
                  <ExternalLink className="w-4 h-4" />
                  Visit Website
                </a>
              )}
              <a 
                href={project.link} 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-900 border border-zinc-800 text-white text-sm font-semibold hover:bg-zinc-800 hover:scale-105 active:scale-95 transition-all"
              >
                <GithubIcon className="h-4 w-4" />
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
      {/* 
        The container needs to be very tall to allow scrolling. 
        We use padding bottom so the last card has room to stick.
      */}
      <div ref={containerRef} className="mx-auto max-w-6xl pb-[10vh]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="mb-20 flex flex-col items-center justify-center text-center sticky top-0 py-8 z-0"
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
