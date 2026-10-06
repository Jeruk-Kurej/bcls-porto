import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { projectsData } from "@/data/projects";
import { getFeatureIcon } from "@/lib/project-icons";
import { Section } from "@/components/ui/section";
import { ExternalLink } from "@/components/ui/external-link";

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

const adjacentLinkClass =
  "mt-1 block font-display text-xl font-medium text-depth decoration-tide decoration-1 underline-offset-4 group-hover:underline";

export default async function ProjectDetailPage({ params }: PageProps) {
  const { id } = await params;
  const projectIndex = projectsData.findIndex((p) => p.id === id);

  if (projectIndex === -1) {
    notFound();
  }

  const project = projectsData[projectIndex];
  const prevProject = projectIndex > 0 ? projectsData[projectIndex - 1] : null;
  const nextProject = projectIndex < projectsData.length - 1 ? projectsData[projectIndex + 1] : null;

  const [leadImage, ...moreImages] = project.images ?? [];

  return (
    <article>
      <div className="wrap pt-10 pb-6 md:pt-14">
        <Link href="/work" className="link text-[0.9375rem]">
          <ArrowLeft className="mr-1 inline size-[0.9em] align-[-0.08em]" aria-hidden="true" />
          All work
        </Link>

        <h1 className="display-lg mt-8">{project.title}</h1>
        <p className="mt-4 text-xl text-depth md:text-2xl">{project.subtitle}</p>

        <div className="mt-10 grid gap-y-10 lg:grid-cols-[minmax(0,1fr)_17rem] lg:gap-x-16">
          <p className="max-w-[62ch] text-lg">{project.about}</p>

          <dl className="space-y-5 text-[0.9375rem] leading-snug">
            <div>
              <dt className="text-muted">Platform</dt>
              <dd className="mt-1 text-depth">{project.platform}</dd>
            </div>
            <div>
              <dt className="text-muted">Built with</dt>
              <dd className="mt-1 text-depth">{project.techStack.join(", ")}</dd>
            </div>
            <div>
              <dt className="text-muted">Links</dt>
              <dd className="mt-1 flex flex-col items-start gap-1.5">
                {project.liveUrl && <ExternalLink href={project.liveUrl}>Live site</ExternalLink>}
                <ExternalLink href={project.link}>Source code</ExternalLink>
              </dd>
            </div>
          </dl>
        </div>
      </div>

      {leadImage && (
        <section className="wrap py-8">
          <h2 className="sr-only">Screenshots</h2>
          <div className="relative aspect-[16/9] overflow-hidden rounded-[0.875rem] bg-white ring-1 ring-line">
            <Image
              src={leadImage}
              alt={`${project.title} screenshot 1`}
              fill
              sizes="(max-width: 1152px) 100vw, 1088px"
              className="object-cover object-top"
              priority
            />
          </div>

          {moreImages.length > 0 && (
            <div
              className="mt-6 grid gap-6 sm:grid-cols-[repeat(var(--shots),minmax(0,1fr))]"
              style={{ "--shots": moreImages.length } as React.CSSProperties}
            >
              {moreImages.map((img, i) => (
                <div
                  key={img}
                  className="relative aspect-[4/3] overflow-hidden rounded-[0.875rem] bg-white ring-1 ring-line"
                >
                  <Image
                    src={img}
                    alt={`${project.title} screenshot ${i + 2}`}
                    fill
                    sizes="(max-width: 640px) 100vw, 540px"
                    className="object-cover object-top"
                  />
                </div>
              ))}
            </div>
          )}
        </section>
      )}

      <Section title="The problem" className="py-8 md:py-10">
        <p className="max-w-[62ch] text-lg">{project.problem}</p>
      </Section>

      <Section title="The approach" className="py-8 md:py-10">
        <p className="max-w-[62ch] text-lg">{project.solution}</p>
      </Section>

      {project.features.length > 0 && (
        <Section title="Key features" className="py-8 md:py-10">
          <ul className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {project.features.map((feature) => {
              const Icon = getFeatureIcon(feature.icon);
              return (
                <li key={feature.title} className="flex gap-4">
                  <Icon className="mt-1 size-5 shrink-0 text-tide-deep" aria-hidden="true" />
                  <div>
                    <p className="font-medium text-depth">{feature.title}</p>
                    <p className="mt-1 text-[0.9375rem]">{feature.description}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </Section>
      )}

      <nav aria-label="More case studies" className="wrap mt-10">
        <div className="grid gap-6 border-t border-line pt-8 sm:grid-cols-2">
          {prevProject ? (
            <Link href={`/work/${prevProject.id}`} className="group block">
              <span className="text-sm text-muted">Previous</span>
              <span className={adjacentLinkClass}>{prevProject.title}</span>
            </Link>
          ) : (
            <span />
          )}

          {nextProject && (
            <Link href={`/work/${nextProject.id}`} className="group block sm:text-right">
              <span className="text-sm text-muted">Next</span>
              <span className={adjacentLinkClass}>{nextProject.title}</span>
            </Link>
          )}
        </div>
      </nav>
    </article>
  );
}
