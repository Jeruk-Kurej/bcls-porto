import Link from "next/link";
import type { Project } from "@/data/projects";
import { ProjectCover } from "@/components/ui/project-cover";
import { ExternalLink } from "@/components/ui/external-link";

interface ProjectCardProps {
  project: Project;
  /** Heading level for the title: h2 on the work index, h3 inside a home section */
  as?: "h2" | "h3";
  /** Show the description and outbound links */
  detailed?: boolean;
  sizes: string;
}

export const ProjectCard = ({ project, as: Heading = "h3", detailed = false, sizes }: ProjectCardProps) => {
  const href = `/work/${project.id}`;

  return (
    <article className="group">
      <Link href={href} tabIndex={-1} aria-hidden="true" className="block">
        <ProjectCover project={project} sizes={sizes} />
      </Link>

      <Heading className="mt-5 text-2xl">
        <Link href={href} className="decoration-tide decoration-1 underline-offset-4 hover:underline group-hover:underline">
          {project.title}
        </Link>
      </Heading>
      <p className="mt-1 text-depth">{project.subtitle}</p>

      {detailed && <p className="mt-3 line-clamp-3 text-[0.9375rem]">{project.about}</p>}

      <p className="mt-3 text-sm text-muted">{project.techStack.join(", ")}</p>

      {detailed && (
        <p className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-[0.9375rem]">
          <Link href={href} className="link">
            Read case study
          </Link>
          {project.liveUrl && <ExternalLink href={project.liveUrl}>Live site</ExternalLink>}
          <ExternalLink href={project.link}>Source code</ExternalLink>
        </p>
      )}
    </article>
  );
};
