import { HeroSection } from "@/components/sections/hero";
import { HighlightStrip } from "@/components/sections/highlight-strip";
import { AboutSection } from "@/components/sections/about";
import { FeaturedWork } from "@/components/sections/featured-work";
import { ExperienceTeaser } from "@/components/sections/experience-teaser";
import { Particles } from "@/components/ui/particles";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Particles quantity={18} className="fixed inset-0 z-0 opacity-40 pointer-events-none" />
      <HeroSection />
      <HighlightStrip />
      <AboutSection />
      <FeaturedWork />
      <ExperienceTeaser />
    </div>
  );
}

