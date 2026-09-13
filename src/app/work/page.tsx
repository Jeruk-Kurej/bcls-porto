import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { projectsData } from "@/data/projects";
import { getProjectFallbackIcon } from "@/lib/project-icons";
import { ArrowRight, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Work & Case Studies | Bryan Carlie Lukito Setiawan",
  description: "Explore shipped native iOS, Android, and full-stack web applications built with Swift, Kotlin, Next.js, and Laravel.",
};

export default function WorkPage() {
  return (
    <div className="w-full pt-32 pb-24 px-4 md:px-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-14 text-left max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-[var(--color-tide)]/30 text-xs font-semibold text-[var(--color-depth)] shadow-2xs mb-4">
          <span>Portfolio Index</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-[var(--color-depth)] tracking-tight mb-4">
          Selected Work
        </h1>
        <p className="text-base sm:text-lg text-[var(--color-ink)] leading-relaxed">
          A collection of native mobile applications and full-stack web systems. Each project includes
          a complete breakdown of the engineering problem, solution architecture, and key feature implementations.
        </p>
      </div>

      {/* 2-column grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectsData.map((project, idx) => {
          const FallbackIcon = getProjectFallbackIcon(idx);
          const hasImage = project.images && project.images.length > 0;

          return (
            <article
              key={project.id}
              className="group flex flex-col rounded-2xl border border-[var(--color-tide)]/25 bg-white overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* Card Media Preview */}
              <Link 
                href={`/work/${project.id}`}
                className="relative w-full h-56 sm:h-64 overflow-hidden bg-[var(--color-foam)]/60 flex items-center justify-center border-b border-[var(--color-tide)]/20 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[var(--color-tide-deep)]"
                tabIndex={-1}
                aria-hidden="true"
              >
                {hasImage ? (
                  <Image
                    src={project.images![0]}
                    alt={`${project.title} preview`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-103"
                  />
                ) : (
                  <div className="relative flex flex-col items-center justify-center w-full h-full">
                    <div className="absolute inset-0 bg-[radial-gradient(#2AA8CC_1px,transparent_1px)] [background-size:24px_24px] opacity-25" />
                    <FallbackIcon className="w-16 h-16 text-[var(--color-tide-deep)]/60 transition-transform duration-500 group-hover:scale-110" />
                  </div>
                )}
              </Link>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h2 className="text-xl sm:text-2xl font-display font-bold text-[var(--color-depth)] tracking-tight group-hover:text-[var(--color-tide-deep)] transition-colors">
                      <Link href={`/work/${project.id}`} className="focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[var(--color-tide-deep)] rounded-xs">
                        {project.title}
                      </Link>
                    </h2>
                  </div>

                  <p className="text-xs sm:text-sm font-semibold text-[var(--color-tide-deep)] mb-3">
                    {project.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-[var(--color-ink)] leading-relaxed line-clamp-2 mb-5">
                    {project.about}
                  </p>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.techStack.slice(0, 4).map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md bg-[var(--color-foam)]/80 border border-[var(--color-tide)]/25 text-[11px] font-medium text-[var(--color-depth)]"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="px-2 py-1 text-[11px] font-medium text-[var(--color-ink)]/70">
                        +{project.techStack.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Footer action links */}
                <div className="pt-4 border-t border-[var(--color-tide)]/15 flex items-center justify-between">
                  <Link
                    href={`/work/${project.id}`}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[var(--color-tide-deep)] group-hover:underline focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[var(--color-tide-deep)] rounded-xs"
                  >
                    <span>View case study</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <div className="flex items-center gap-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 text-[var(--color-ink)]/75 hover:text-[var(--color-depth)] transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[var(--color-tide-deep)] rounded-sm"
                        aria-label={`Visit ${project.title} live website`}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 text-[var(--color-ink)]/75 hover:text-[var(--color-depth)] transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[var(--color-tide-deep)] rounded-sm"
                      aria-label={`View ${project.title} repository`}
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
