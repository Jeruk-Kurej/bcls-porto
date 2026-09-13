"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useSpotlightEffect } from "@/hooks/use-spotlight-effect";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  const { divRef, background, opacity, handlers } = useSpotlightEffect(600, "rgba(42, 168, 204, 0.12)");

  return (
    <motion.div
      ref={divRef}
      {...handlers}
      className={cn(
        "relative overflow-hidden row-span-1 rounded-2xl group/bento hover:shadow-lg transition duration-200 p-5 bg-[var(--color-foam)]/70 border border-[var(--color-tide)]/25 justify-between flex flex-col space-y-4",
        className
      )}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background,
        }}
      />
      <div className="relative z-10 flex flex-col h-full justify-between">
        {header}
        <div className="group-hover/bento:translate-x-1.5 transition duration-200 mt-4">
          {icon}
          <div className="font-display font-bold text-[var(--color-depth)] mb-1.5 mt-2 text-lg">
            {title}
          </div>
          <div className="font-sans font-normal text-[var(--color-ink)] text-xs sm:text-sm leading-relaxed">
            {description}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
