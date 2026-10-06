import { Metadata } from "next";
import { ExperienceSection } from "@/components/sections/experience";
import { PageIntro } from "@/components/ui/page-intro";

export const metadata: Metadata = {
  title: "Experience & Journey | Bryan Carlie Lukito Setiawan",
  description: "Chronological professional journey covering full-stack engineering roles, Apple Foundation intensive learning, and student leadership milestones.",
};

export default function ExperiencePage() {
  return (
    <>
      <PageIntro title="Experience">
        Internship and teaching roles, student leadership, and education, with the most recent
        first in each group.
      </PageIntro>
      <ExperienceSection />
    </>
  );
}
