"use client";

import { motion } from "framer-motion";

export const FloatingAssets = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* 1. Glowing Gradient Blur Orb (Top Left) */}
      <motion.div
        className="absolute -top-[10%] -left-[10%] w-[40vw] h-[40vw] rounded-full bg-blue-900/20 blur-[120px] mix-blend-screen"
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -30, 20, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 2. Abstract Geometric Blob (Bottom Right) */}
      <motion.svg
        className="absolute -bottom-[20%] -right-[10%] w-[50vw] h-[50vw] text-purple-900/10 mix-blend-screen blur-[80px]"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        animate={{
          rotate: [0, 90, 180, 360],
          scale: [1, 1.2, 0.8, 1],
          x: [0, -40, 20, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        <path
          fill="currentColor"
          d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,81.3,-46.3C90.8,-33.5,96.8,-18,95.5,-3C94.2,12,85.6,26.5,75.2,38.8C64.8,51.1,52.6,61.2,39.2,69C25.8,76.8,11.2,82.3,-3.8,81.1C-18.8,79.9,-37.6,72,-51.9,60.8C-66.2,49.6,-76,35.1,-82.4,19.3C-88.8,3.5,-91.8,-13.6,-86.3,-28.3C-80.8,-43,-66.8,-55.3,-51.9,-62.3C-37,-69.3,-21.2,-71,-5.1,-64.5C11,-58,22,-43.3,30.6,-50.3Z"
          transform="translate(100 100)"
        />
      </motion.svg>

      {/* 3. Minimalist Wireframe Grid (Middle Right) */}
      <motion.svg
        className="absolute top-[40%] -right-[5%] w-[30vw] h-[30vw] text-zinc-800/30"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        animate={{
          y: [-20, 20, -20],
          rotate: [0, -5, 5, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      >
        <defs>
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100" height="100" fill="url(#grid)" className="blur-[1px]" />
      </motion.svg>

      {/* 4. Small glowing accent star (Middle Left) */}
      <motion.svg
        className="absolute top-[30%] left-[5%] w-12 h-12 text-cyan-500/40 blur-[4px]"
        viewBox="0 0 24 24"
        fill="currentColor"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.8, 0.3],
          rotate: [0, 90, 180],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
      </motion.svg>
    </div>
  );
};
