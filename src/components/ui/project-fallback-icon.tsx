import { createElement } from "react";
import { getProjectFallbackIcon } from "@/lib/project-icons";
import type { LucideProps } from "lucide-react";

interface ProjectFallbackIconProps extends LucideProps {
  projectIndex: number;
}

export function ProjectFallbackIcon({ projectIndex, ...props }: ProjectFallbackIconProps) {
  return createElement(getProjectFallbackIcon(projectIndex), props);
}
