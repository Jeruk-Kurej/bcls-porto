"use client";

import { useRef, useState } from "react";
import { useMotionValue, useMotionTemplate, type MotionValue } from "framer-motion";

export interface SpotlightHandlers {
  onMouseMove: (e: React.MouseEvent<HTMLDivElement>) => void;
  onFocus: () => void;
  onBlur: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export interface UseSpotlightEffectReturn {
  divRef: React.RefObject<HTMLDivElement | null>;
  background: MotionValue<string>;
  opacity: number;
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
  handleMouseMove: (e: React.MouseEvent<HTMLDivElement>) => void;
  handleFocus: () => void;
  handleBlur: () => void;
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
  handlers: SpotlightHandlers;
}

export function useSpotlightEffect(
  radius: number = 600,
  color: string = "rgba(42, 168, 204, 0.12)"
): UseSpotlightEffectReturn {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [opacity, setOpacity] = useState(0);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isFocused) return;
    const div = divRef.current;
    const rect = div.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  const background = useMotionTemplate`radial-gradient(${radius}px circle at ${mouseX}px ${mouseY}px, ${color}, transparent 40%)`;

  const handlers: SpotlightHandlers = {
    onMouseMove: handleMouseMove,
    onFocus: handleFocus,
    onBlur: handleBlur,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
  };

  return {
    divRef,
    background,
    opacity,
    mouseX,
    mouseY,
    handleMouseMove,
    handleFocus,
    handleBlur,
    handleMouseEnter,
    handleMouseLeave,
    handlers,
  };
}
