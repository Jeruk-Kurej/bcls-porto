"use client";

import { motion, useReducedMotion } from "framer-motion";
import { 
  FolderGit2, 
  Award, 
  Layers, 
  Users 
} from "lucide-react";

interface HighlightItem {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  detail: string;
}

const highlights: HighlightItem[] = [
  {
    icon: FolderGit2,
    label: "6 Shipped Projects",
    detail: "3 Web, 2 iOS, 1 Android",
  },
  {
    icon: Award,
    label: "Apple Foundation Alum",
    detail: "iOS Challenge Based Learning",
  },
  {
    icon: Layers,
    label: "Native & Web Platforms",
    detail: "SwiftUI, Compose, Next.js",
  },
  {
    icon: Users,
    label: "GDG & Student Leadership",
    detail: "Creative Coordinator & Hackfest",
  },
];

export const HighlightStrip = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="w-full py-6 px-4 md:px-8 border-y border-[var(--color-tide)]/20 bg-[var(--color-foam)]/45 backdrop-blur-xs relative z-10">
      <div className="mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {highlights.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={idx}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.4, delay: idx * 0.08 }}
              className="flex items-center gap-3.5 p-3 sm:p-4 rounded-xl bg-white/70 border border-[var(--color-tide)]/20 shadow-2xs hover:shadow-xs transition-shadow"
            >
              <div className="p-2.5 rounded-lg bg-[var(--color-mist)] text-[var(--color-tide-deep)] shrink-0 border border-[var(--color-tide)]/20">
                <Icon className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <p className="font-display font-semibold text-sm text-[var(--color-depth)] truncate">
                  {item.label}
                </p>
                <p className="text-xs text-[var(--color-ink)]/80 truncate">
                  {item.detail}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
