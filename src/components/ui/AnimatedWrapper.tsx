import { motion, type MotionProps } from "framer-motion";
import { useReducedMotionState } from "@/lib/reduced-motion";
import { cn } from "@/lib/utils";

interface AnimatedWrapperProps extends MotionProps {
  /** Children to animate */
  children: React.ReactNode;
  /** Additional className */
  className?: string;
  /** Whether to animate children (default: true) */
  animateChildren?: boolean;
}

export const AnimatedWrapper = ({
  children,
  className = "",
  animateChildren = true,
  ...motionProps
}: AnimatedWrapperProps) => {
  const { enabled } = useReducedMotionState();

  // If reduced motion is preferred, disable animations by setting duration to 0
  const motionPropsReduced = enabled
    ? motionProps
    : {
        ...motionProps,
        // Override transition properties to disable animations
        transition: {
          ...motionProps.transition,
          duration: 0,
          delay: 0,
        },
        // Override initial/animate properties if they contain motion values
        ...(!animateChildren ? {} : {
          // For simplicity, we'll rely on transition duration = 0 to disable animations
          // More sophisticated implementations could map motion values to static values
        })
      };

  return (
    <motion.div
      className={cn("", className)}
      {...motionPropsReduced}
    >
      {children}
    </motion.div>
  );
};