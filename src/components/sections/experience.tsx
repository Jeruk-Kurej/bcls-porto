"use client";

import { motion, useReducedMotion } from "framer-motion";
import { experienceData, ExperienceCategory } from "@/data/experience";
import { Briefcase, Users, GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";

const CategoryBadge = ({ category }: { category: ExperienceCategory }) => {
  let colorClass = "";
  let Icon = Briefcase;

  switch (category) {
    case "Work":
      colorClass = "bg-teal-500/10 text-[var(--color-tide-deep)] border-teal-500/30";
      Icon = Briefcase;
      break;
    case "Leadership":
      colorClass = "bg-sky-500/10 text-[var(--color-depth)] border-sky-500/30";
      Icon = Users;
      break;
    case "Education":
      colorClass = "bg-amber-500/10 text-amber-800 border-amber-500/30";
      Icon = GraduationCap;
      break;
  }

  return (
    <span className={cn("inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border shadow-2xs", colorClass)}>
      <Icon className="w-3.5 h-3.5" />
      {category}
    </span>
  );
};

export const ExperienceSection = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="experience" className="relative w-full py-24 px-4 md:px-8 z-10">
      <div className="mx-auto max-w-4xl">
        <div className="mb-16 flex flex-col items-center justify-center text-center">
          <h2 className="text-4xl font-display font-bold text-[var(--color-depth)] sm:text-5xl tracking-tight">Experience & Journey</h2>
          <div className="mt-4 h-1 w-24 rounded-full bg-[var(--color-tide)]/40" />
        </div>

        <div className="relative">
          {/* Vertical Timeline Backbone */}
          <div className="absolute left-[20px] md:left-[40px] top-4 bottom-4 w-px bg-[var(--color-tide)]/30"></div>

          <div className="flex flex-col gap-12">
            {experienceData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={shouldReduceMotion ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y: 30, x: -20 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.6, delay: index * 0.1 }}
                className="relative pl-14 md:pl-24"
              >
                {/* Timeline Node */}
                <div className="absolute left-[16px] md:left-[36px] top-6 w-2.5 h-2.5 rounded-full bg-[var(--color-tide)] border-2 border-[var(--color-mist)] z-10 shadow-xs"></div>
                
                {/* Outer Glow effect wrapper for hover */}
                <motion.div
                  whileHover={shouldReduceMotion ? undefined : { scale: 1.015 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group relative"
                >
                  {/* Subtle water glow on hover */}
                  <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-[var(--color-tide)]/20 to-[var(--color-foam)] opacity-0 group-hover:opacity-100 transition duration-500 blur-sm"></div>
                  
                  {/* Glassmorphism Card */}
                  <div className="relative p-6 md:p-8 bg-[var(--color-foam)]/70 backdrop-blur-md border border-[var(--color-tide)]/25 rounded-2xl shadow-sm group-hover:shadow-md transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-5">
                      <div>
                        <div className="flex items-center gap-3 mb-2.5">
                          <CategoryBadge category={item.category} />
                          <span className="text-[var(--color-ink)]/80 text-xs sm:text-sm font-medium">{item.date}</span>
                        </div>
                        <h3 className="text-xl md:text-2xl font-display font-bold text-[var(--color-depth)] tracking-tight">{item.title}</h3>
                        <p className="text-[var(--color-tide-deep)] font-semibold text-sm sm:text-base mt-1">{item.role}</p>
                      </div>
                    </div>

                    <ul className="space-y-3">
                      {item.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-3 text-[var(--color-ink)] text-sm md:text-base leading-relaxed">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-tide)] shrink-0"></span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
