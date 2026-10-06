import { useReducedMotion } from "framer-motion";

export function useReducedMotionState() {
  const shouldReduceMotion = useReducedMotion();
  return {
    enabled: !shouldReduceMotion,
    // Common motion config - disabled when reduced motion is preferred
    motionConfig: shouldReduceMotion ? { duration: 0 } : {
      type: "spring", stiffness: 300, damping: 20
    }
  };
}