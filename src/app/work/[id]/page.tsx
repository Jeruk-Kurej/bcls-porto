import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { projectsData } from "@/data/projects";
import { getFeatureIcon } from "@/lib/project-icons";
import { ProjectFallbackIcon } from "@/components/ui/project-fallback-icon";
import { GithubIcon } from "@/components/ui/icons";
import { 
  ArrowLeft, 
  ArrowRight, 
  ExternalLink, 
  CheckCircle2, 
  AlertCircle 
} from "lucide-react";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} — Case Study | Bryan Carlie Lukito Setiawan`,
    description: `${project.subtitle}: ${project.about.slice(0, 150)}...`,
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { id } = await params;
  const projectIndex = projectsData.findIndex((p) => p.id === id);

  if (projectIndex === -1) {
    notFound();
  }

  const project = projectsData[projectIndex];
  const prevProject = projectIndex > 0 ? projectsData[projectIndex - 1] : null;
  const nextProject = projectIndex < projectsData.length - 1 ? projectsData[projectIndex + 1] : null;

  const hasImages = project.images && project.images.length > 0;

  return (
    <div className="w-full pt-28 pb-24 px-4 md:px-8 max-w-5xl mx-auto">
      {/* Back Link */}
      <div className="mb-8">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[var(--color-tide-deep)] hover:underline focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[var(--color-tide-deep)] rounded-xs"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to all projects</span>
        </Link>
      </div>

      {/* Header Info */}
      <header className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-[var(--color-tide)]/30 text-xs font-semibold text-[var(--color-depth)] shadow-2xs mb-4">
          <span>Case Study</span>
        </div>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold text-[var(--color-depth)] tracking-tight mb-3">
          {project.title}
        </h1>
        <p className="text-lg sm:text-xl font-medium text-[var(--color-tide-deep)] mb-6">
          {project.subtitle}
        </p>
        <p className="text-base sm:text-lg text-[var(--color-ink)] leading-relaxed max-w-3xl">
          {project.about}
        </p>

        {/* Action Links */}
        <div className="flex flex-wrap items-center gap-4 mt-8 pt-6 border-t border-[var(--color-tide)]/20">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--color-tide-deep)] text-white text-sm font-semibold hover:opacity-95 hover:scale-102 active:scale-98 transition-all shadow-md focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[var(--color-tide-deep)]"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Visit Website</span>
            </a>
          )}
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/80 border border-[var(--color-tide)]/30 text-[var(--color-depth)] text-sm font-semibold hover:bg-white hover:border-[var(--color-tide)] hover:scale-102 active:scale-98 transition-all shadow-2xs focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[var(--color-tide-deep)]"
          >
            <GithubIcon className="w-4 h-4 text-[var(--color-tide-deep)]" />
            <span>View Repository</span>
          </a>
        </div>
      </header>

      {/* Image Gallery */}
      {hasImages ? (
        <section className="mb-16">
          <h2 className="sr-only">Project Screenshots</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.images!.map((img, i) => (
              <div
                key={i}
                className="relative h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden border border-[var(--color-tide)]/25 bg-[var(--color-foam)]/40 shadow-sm"
              >
                <Image
                  src={img}
                  alt={`${project.title} screenshot ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top hover:scale-102 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </section>
      ) : (
        <div className="mb-16 h-72 sm:h-96 rounded-2xl border border-[var(--color-tide)]/25 bg-[var(--color-foam)]/40 flex flex-col items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#2AA8CC_1px,transparent_1px)] [background-size:24px_24px] opacity-25" />
          <ProjectFallbackIcon projectIndex={projectIndex} className="w-24 h-24 text-[var(--color-tide-deep)]/50 relative z-10" />
        </div>
      )}

      {/* Problem & Solution (Untruncated) */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        <div className="p-6 sm:p-8 rounded-2xl bg-white/80 border border-rose-200 shadow-sm">
          <div className="inline-flex items-center gap-2 text-rose-700 font-semibold text-sm mb-3">
            <AlertCircle className="w-4 h-4 text-rose-500" />
            <span>The Challenge</span>
          </div>
          <h2 className="text-xl font-display font-bold text-[var(--color-depth)] mb-3">Problem Space</h2>
          <p className="text-sm sm:text-base text-[var(--color-ink)] leading-relaxed">
            {project.problem}
          </p>
        </div>

        <div className="p-6 sm:p-8 rounded-2xl bg-white/80 border border-teal-200 shadow-sm">
          <div className="inline-flex items-center gap-2 text-teal-800 font-semibold text-sm mb-3">
            <CheckCircle2 className="w-4 h-4 text-teal-600" />
            <span>The Solution</span>
          </div>
          <h2 className="text-xl font-display font-bold text-[var(--color-depth)] mb-3">Engineering Approach</h2>
          <p className="text-sm sm:text-base text-[var(--color-ink)] leading-relaxed">
            {project.solution}
          </p>
        </div>
      </section>

      {/* Key Features (Untruncated, all entries) */}
      {project.features && project.features.length > 0 && (
        <section className="mb-16">
          <div className="mb-6">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-[var(--color-depth)]">
              Core Capabilities & Features
            </h2>
            <p className="text-sm text-[var(--color-ink)]/80 mt-1">
              Engineered functionalities designed and delivered for {project.title}.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.features.map((feature, fIdx) => {
              const Icon = getFeatureIcon(feature.icon);
              return (
                <div
                  key={fIdx}
                  className="p-5 rounded-xl bg-white/70 border border-[var(--color-tide)]/25 shadow-2xs flex items-start gap-4"
                >
                  <div className="p-2.5 rounded-lg bg-[var(--color-mist)] text-[var(--color-tide-deep)] shrink-0 border border-[var(--color-tide)]/20 mt-0.5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display font-semibold text-sm sm:text-base text-[var(--color-depth)] mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[var(--color-ink)] leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Tech Stack */}
      <section className="mb-16 p-6 sm:p-8 rounded-2xl bg-[var(--color-foam)]/50 border border-[var(--color-tide)]/25">
        <h2 className="text-xl font-display font-bold text-[var(--color-depth)] mb-4">
          Technologies & Tools
        </h2>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech, i) => (
            <span
              key={i}
              className="px-3.5 py-1.5 rounded-lg bg-white/80 border border-[var(--color-tide)]/25 text-xs sm:text-sm font-semibold text-[var(--color-depth)] shadow-2xs"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Prev / Next Case Study Navigation */}
      <nav aria-label="Adjacent Case Studies" className="pt-8 border-t border-[var(--color-tide)]/20 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          {prevProject ? (
            <Link
              href={`/work/${prevProject.id}`}
              className="group flex flex-col p-4 rounded-xl bg-white/60 border border-[var(--color-tide)]/20 hover:border-[var(--color-tide)] transition-all"
            >
              <span className="text-xs text-[var(--color-ink)]/70 flex items-center gap-1 mb-1">
                <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                Previous Project
              </span>
              <span className="font-display font-bold text-sm sm:text-base text-[var(--color-depth)] group-hover:text-[var(--color-tide-deep)] transition-colors">
                {prevProject.title}
              </span>
            </Link>
          ) : (
            <div />
          )}
        </div>

        <div className="text-right">
          {nextProject && (
            <Link
              href={`/work/${nextProject.id}`}
              className="group flex flex-col items-end p-4 rounded-xl bg-white/60 border border-[var(--color-tide)]/20 hover:border-[var(--color-tide)] transition-all"
            >
              <span className="text-xs text-[var(--color-ink)]/70 flex items-center gap-1 mb-1">
                Next Project
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="font-display font-bold text-sm sm:text-base text-[var(--color-depth)] group-hover:text-[var(--color-tide-deep)] transition-colors">
                {nextProject.title}
              </span>
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
}
