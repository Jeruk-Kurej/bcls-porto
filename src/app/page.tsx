import { HeroSection } from "@/components/sections/hero";
import { HighlightStrip } from "@/components/sections/highlight-strip";
import { AboutSection } from "@/components/sections/about";
import { FeaturedWork } from "@/components/sections/featured-work";
import { ExperienceTeaser } from "@/components/sections/experience-teaser";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <HighlightStrip />
      <AboutSection />
      <FeaturedWork />
      <ExperienceTeaser />
    </div>
  );
}
