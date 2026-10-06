import { Metadata } from "next";
import { projectsData, projectSummary } from "@/data/projects";
import { PageIntro } from "@/components/ui/page-intro";
import { ProjectCard } from "@/components/ui/project-card";

export const metadata: Metadata = {
  title: "Work & Case Studies | Bryan Carlie Lukito Setiawan",
  description: "Explore shipped native iOS, Android, and full-stack web applications built with Swift, Kotlin, Next.js, and Laravel.",
};

export default function WorkPage() {
  return (
    <>
      <PageIntro title="Work">
        {projectSummary}. Each case study covers the problem, the approach, and the key features.
      </PageIntro>

      <div className="wrap pt-8 md:pt-12">
        <div className="grid gap-x-10 gap-y-16 md:grid-cols-2">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              as="h2"
              detailed
              sizes="(max-width: 768px) 100vw, 540px"
            />
          ))}
        </div>
      </div>
    </>
  );
}
