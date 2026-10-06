import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { FeaturedWork } from "@/components/sections/featured-work";
import { ExperienceTeaser } from "@/components/sections/experience-teaser";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedWork />
      <AboutSection />
      <ExperienceTeaser />
    </>
  );
}
