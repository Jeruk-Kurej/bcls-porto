import Link from "next/link";
import { projectsData, projectSummary } from "@/data/projects";
import { Section } from "@/components/ui/section";
import { ProjectCard } from "@/components/ui/project-card";

export const FeaturedWork = () => {
  // Curated pair shown large: a production web platform and a native iOS app.
  // Every other project follows as a compact row.
  const featuredIds = ["uc-online-learning", "yukdebat"];
  const featured = projectsData.filter((project) => featuredIds.includes(project.id));
  const others = projectsData.filter((project) => !featuredIds.includes(project.id));

  return (
    <Section
      title="Selected work"
      note={
        <>
          <p>{projectSummary}.</p>
          <p className="mt-2">
            <Link href="/work" className="link">
              See all work
            </Link>
          </p>
        </>
      }
    >
      <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2">
        {featured.map((project) => (
          <ProjectCard key={project.id} project={project} sizes="(max-width: 640px) 100vw, 400px" />
        ))}
      </div>

      <ul className="mt-14 border-t border-line">
        {others.map((project) => (
          <li key={project.id} className="border-b border-line">
            <Link
              href={`/work/${project.id}`}
              className="group grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-x-6 gap-y-1 py-4 sm:grid-cols-[13rem_minmax(0,1fr)_auto]"
            >
              <span className="font-display text-xl font-medium text-depth decoration-tide decoration-1 underline-offset-4 group-hover:underline">
                {project.title}
              </span>
              <span className="order-last col-span-2 sm:order-none sm:col-span-1">{project.subtitle}</span>
              <span className="text-sm text-muted">{project.platform}</span>
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
};
