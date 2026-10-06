"use client";

import { useCallback, useRef, useEffect } from "react";
import { useReducedMotionState } from "@/lib";

export const SplashCursor = () => {
  const { enabled } = useReducedMotionState();
  const shouldReduceMotion = !enabled;
  const containerRef = useRef<HTMLDivElement>(null);

  // Click-triggered ripple ring
  const spawnRipple = useCallback(
    (e: PointerEvent) => {
      if (!containerRef.current || shouldReduceMotion) return;

      const ring = document.createElement("div");
      ring.className = "cursor-ripple-ring";
      ring.style.left = `${e.clientX}px`;
      ring.style.top = `${e.clientY}px`;

      containerRef.current.appendChild(ring);
      ring.addEventListener("animationend", () => ring.remove());
    },
    [shouldReduceMotion]
  );

  useEffect(() => {
    if (shouldReduceMotion) return;
    window.addEventListener("pointerdown", spawnRipple);
    return () => window.removeEventListener("pointerdown", spawnRipple);
  }, [shouldReduceMotion, spawnRipple]);

  if (shouldReduceMotion) return null;

  return (
    <div ref={containerRef} className="pointer-events-none fixed inset-0 z-[9999]" aria-hidden="true" />
  );
};
