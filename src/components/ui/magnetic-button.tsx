"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const MagneticButton = ({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  return (
    <div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      className="relative p-4 flex items-center justify-center cursor-pointer"
      onClick={onClick}
    >
      <motion.button
        animate={{ x, y }}
        transition={{ type: "spring", stiffness: 300, damping: 20, mass: 0.5 }}
        className={cn(
          "relative rounded-full px-8 py-3 text-sm font-medium tracking-wide text-white overflow-hidden bg-zinc-900 border border-zinc-800 transition-all hover:shadow-lg group",
          className
        )}
      >
        <span className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-emerald-500/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out rounded-full"></span>
        <span className="relative z-10">{children}</span>
      </motion.button>
    </div>
  );
};
