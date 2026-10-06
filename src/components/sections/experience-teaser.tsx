import Link from "next/link";
import { experienceData } from "@/data/experience";
import { Section } from "@/components/ui/section";

export const ExperienceTeaser = () => {
  // Curate 3 standout entries across distinct domains:
  // 1. Current internship with the Laravel showcase project (uco-intern)
  // 2. Ongoing teaching roles across four courses (student-assistant)
  // 3. Prestigious intensive iOS foundation (apple-foundation)
  const teaserIds = ["uco-intern", "student-assistant", "apple-foundation"];
  const teaserItems = experienceData.filter((item) => teaserIds.includes(item.id));

  return (
    <Section
      title="Experience"
      note={
        <Link href="/experience" className="link">
          See full experience
        </Link>
      }
    >
      <ul className="border-t border-line">
        {teaserItems.map((item) => (
          <li
            key={item.id}
            className="grid gap-x-8 gap-y-2 border-b border-line py-6 sm:grid-cols-[14rem_minmax(0,1fr)]"
          >
            <p className="text-[0.9375rem] text-muted sm:pt-1">{item.date}</p>
            <div>
              <h3 className="text-xl">{item.role}</h3>
              <p className="mt-0.5 text-depth">{item.title}</p>
              <p className="mt-2 line-clamp-2 max-w-[64ch] text-[0.9375rem]">{item.points[0]}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
};
