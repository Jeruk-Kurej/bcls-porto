import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { ProjectsSection } from "@/components/sections/projects";
import { FooterSection } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black selection:bg-zinc-800 selection:text-white">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <FooterSection />
    </main>
  );
}
