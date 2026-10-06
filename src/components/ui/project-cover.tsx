import Image from "next/image";
import type { Project } from "@/data/projects";
import { getFeatureIcon } from "@/lib/project-icons";
import { cn } from "@/lib/utils";

interface ProjectCoverProps {
  project: Project;
  sizes: string;
  className?: string;
}

const MAX_FEATURES = 4;

export const ProjectCover = ({ project, sizes, className }: ProjectCoverProps) => {
  const image = project.images?.[0];

  if (image) {
    return (
      <div className={cn("relative aspect-[16/10] overflow-hidden rounded-[0.875rem] bg-white ring-1 ring-line", className)}>
        <Image
          src={image}
          alt={`${project.title} screenshot`}
          fill
          sizes={sizes}
          className="object-cover object-top"
        />
      </div>
    );
  }

  // No screenshots yet: show what the app does instead of an empty placeholder
  return (
    <div className={cn("@container flex flex-col justify-between gap-6 rounded-[0.875rem] bg-foam p-6 sm:aspect-[16/10]", className)}>
      <p className="text-sm font-medium text-tide-deep">{project.platform} app</p>
      {/* Type scales with the cover's own width, so the list fills small and large cards alike */}
      <ul className="space-y-[0.4em] font-display font-medium leading-tight text-depth [font-size:clamp(1.0625rem,4.6cqw,1.5rem)]">
        {project.features.slice(0, MAX_FEATURES).map((feature) => {
          const Icon = getFeatureIcon(feature.icon);
          return (
            <li key={feature.title} className="flex items-center gap-[0.6em]">
              <Icon className="size-[0.8em] shrink-0 text-tide-deep" aria-hidden="true" />
              {feature.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
