"use client";

import { motion } from "framer-motion";
import { experienceData, ExperienceCategory } from "@/data/experience";
import { Briefcase, Users, GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";

const CategoryBadge = ({ category }: { category: ExperienceCategory }) => {
  let colorClass = "";
  let Icon = Briefcase;

  switch (category) {
    case "Work":
      colorClass = "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
      Icon = Briefcase;
      break;
    case "Leadership":
      colorClass = "bg-violet-500/10 text-violet-400 border-violet-500/20";
      Icon = Users;
      break;
    case "Education":
      colorClass = "bg-amber-500/10 text-amber-400 border-amber-500/20";
      Icon = GraduationCap;
      break;
  }

  return (
    <span className={cn("inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border", colorClass)}>
      <Icon className="w-3.5 h-3.5" />
      {category}
    </span>
  );
};

export const ExperienceSection = () => {
  return (
    <section id="experience" className="relative w-full py-24 px-4 md:px-8 z-10">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 flex flex-col items-center justify-center text-center"
        >
          <h2 className="text-4xl font-bold text-white sm:text-5xl tracking-tighter">Experience & Journey</h2>
          <div className="mt-6 h-1 w-24 rounded-full bg-zinc-800" />
        </motion.div>

        <div className="relative">
          {/* Vertical Timeline Backbone */}
          <div className="absolute left-[20px] md:left-[40px] top-4 bottom-4 w-px bg-zinc-800/80"></div>

          <div className="flex flex-col gap-12">
            {experienceData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30, x: -20 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative pl-14 md:pl-24"
              >
                {/* Timeline Node */}
                <div className="absolute left-[16px] md:left-[36px] top-6 w-2.5 h-2.5 rounded-full bg-zinc-600 border-2 border-black z-10 transition-colors duration-300 group-hover:bg-white"></div>
                
                {/* Outer Glow effect wrapper for hover */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group relative"
                >
                  {/* Glowing background that fades in on hover */}
                  <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-zinc-800 to-zinc-700 opacity-0 group-hover:opacity-100 transition duration-500 blur-sm"></div>
                  
                  {/* Glassmorphism Card */}
                  <div className="relative p-6 md:p-8 bg-zinc-900/60 backdrop-blur-xl border border-white/5 rounded-2xl shadow-xl transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <CategoryBadge category={item.category} />
                          <span className="text-zinc-500 text-sm font-medium tracking-wide">{item.date}</span>
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">{item.title}</h3>
                        <p className="text-zinc-400 font-medium mt-1">{item.role}</p>
                      </div>
                    </div>

                    <ul className="space-y-3">
                      {item.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-3 text-zinc-300/90 text-sm md:text-base leading-relaxed">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-zinc-700 shrink-0"></span>
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
