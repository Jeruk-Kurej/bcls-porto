import { Metadata } from "next";
import { ExperienceSection } from "@/components/sections/experience";

export const metadata: Metadata = {
  title: "Experience & Journey | Bryan Carlie Lukito Setiawan",
  description: "Chronological professional journey covering full-stack engineering roles, Apple Foundation intensive learning, and student leadership milestones.",
};

export default function ExperiencePage() {
  return (
    <div className="w-full pt-20 pb-16">
      <ExperienceSection />
    </div>
  );
}
