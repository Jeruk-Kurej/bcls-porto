import { HeroSection } from "@/components/sections/hero";
import { HighlightStrip } from "@/components/sections/highlight-strip";
import { AboutSection } from "@/components/sections/about";
import { ExperienceSection } from "@/components/sections/experience";
import { ProjectsSection } from "@/components/sections/projects";
import { FooterSection } from "@/components/sections/footer";
import { Particles } from "@/components/ui/particles";
import { SplashCursor } from "@/components/ui/cursor";

import { FloatingNav } from "@/components/ui/floating-nav";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col bg-[var(--color-mist)] text-[var(--color-ink)] selection:bg-[var(--color-foam)] selection:text-[var(--color-depth)]">
      <SplashCursor />
      <FloatingNav />
      <Particles quantity={45} className="fixed inset-0 z-0 opacity-40 pointer-events-none" />
      <div className="z-10 relative flex flex-col">
        <HeroSection />
        <HighlightStrip />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <FooterSection />
      </div>
    </main>
  );
}
