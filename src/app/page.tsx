import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { ProjectsSection } from "@/components/sections/projects";
import { FooterSection } from "@/components/sections/footer";
import { Particles } from "@/components/ui/particles";
import { SplashCursor } from "@/components/ui/cursor";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col bg-black selection:bg-zinc-800 selection:text-white">
      <SplashCursor />
      <Particles className="fixed inset-0 z-0 opacity-40 pointer-events-none" />
      <div className="z-10 relative flex flex-col">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <FooterSection />
      </div>
    </main>
  );
}
