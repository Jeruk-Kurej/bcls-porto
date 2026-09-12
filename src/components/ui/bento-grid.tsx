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
  const { divRef, background, opacity, handlers } = useSpotlightEffect(600, "rgba(255,255,255,.1)");

  return (
    <motion.div
      ref={divRef}
      {...handlers}
      className={cn(
        "relative overflow-hidden row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-none p-4 dark:bg-zinc-950 dark:border-zinc-800 bg-white border border-transparent justify-between flex flex-col space-y-4",
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
        <div className="group-hover/bento:translate-x-2 transition duration-200 mt-4">
          {icon}
          <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
            {title}
          </div>
          <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
            {description}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
