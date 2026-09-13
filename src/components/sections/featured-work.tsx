import Link from "next/link";
import Image from "next/image";
import { projectsData } from "@/data/projects";
import { getProjectFallbackIcon } from "@/lib/project-icons";
import { ArrowRight, Sparkles } from "lucide-react";

export const FeaturedWork = () => {
  // Curate 2 strongest, most complete projects with rich media:
  // 1. uc-online-learning (Production web platform for Universitas Ciputra, 4 images, AI moderation)
  // 2. yukdebat (Native iOS community hub, Gemini AI motion generator, SwiftUI + Firebase)
  const featuredIds = ["uc-online-learning", "yukdebat"];
  const featuredProjects = projectsData.filter((p) => featuredIds.includes(p.id));

  return (
    <section className="w-full py-20 px-4 md:px-8 bg-transparent relative z-10">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-[var(--color-tide)]/30 text-xs font-semibold text-[var(--color-depth)] shadow-2xs mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[var(--color-tide-deep)]" />
              <span>Selected Highlights</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-[var(--color-depth)] tracking-tight">
              Featured Work
            </h2>
          </div>

          <Link
            href="/work"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-tide-deep)] hover:underline group focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[var(--color-tide-deep)] rounded-xs"
          >
            <span>Explore all 6 projects</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 2 Rich Preview Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredProjects.map((project, idx) => {
            const FallbackIcon = getProjectFallbackIcon(idx);
            const hasImage = project.images && project.images.length > 0;

            return (
              <article
                key={project.id}
                className="group flex flex-col rounded-3xl border border-[var(--color-tide)]/25 bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Media Container */}
                <Link
                  href={`/work/${project.id}`}
                  className="relative w-full h-64 sm:h-72 overflow-hidden bg-[var(--color-foam)]/60 flex items-center justify-center border-b border-[var(--color-tide)]/20 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[var(--color-tide-deep)]"
                  tabIndex={-1}
                  aria-hidden="true"
                >
                  {hasImage ? (
                    <Image
                      src={project.images![0]}
                      alt={`${project.title} preview`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-104"
                    />
                  ) : (
                    <div className="relative flex items-center justify-center w-full h-full">
                      <div className="absolute inset-0 bg-[radial-gradient(#2AA8CC_1px,transparent_1px)] [background-size:24px_24px] opacity-25" />
                      <FallbackIcon className="w-20 h-20 text-[var(--color-tide-deep)]/60 transition-transform duration-500 group-hover:scale-110" />
                    </div>
                  )}
                </Link>

                {/* Content */}
                <div className="p-7 sm:p-8 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-display font-bold text-[var(--color-depth)] tracking-tight mb-2 group-hover:text-[var(--color-tide-deep)] transition-colors">
                      <Link href={`/work/${project.id}`} className="focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[var(--color-tide-deep)] rounded-xs">
                        {project.title}
                      </Link>
                    </h3>

                    <p className="text-sm font-semibold text-[var(--color-tide-deep)] mb-4">
                      {project.subtitle}
                    </p>

                    <p className="text-sm text-[var(--color-ink)] leading-relaxed line-clamp-2 mb-6">
                      {project.about}
                    </p>

                    {/* Tech pills */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.techStack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-md bg-[var(--color-foam)]/80 border border-[var(--color-tide)]/25 text-xs font-medium text-[var(--color-depth)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-5 border-t border-[var(--color-tide)]/15 flex items-center justify-between">
                    <Link
                      href={`/work/${project.id}`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-tide-deep)] group-hover:underline focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[var(--color-tide-deep)] rounded-xs"
                    >
                      <span>Read case study</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
