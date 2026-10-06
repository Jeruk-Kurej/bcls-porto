import { experienceData, ExperienceCategory } from "@/data/experience";
import { Section } from "@/components/ui/section";

const categories: ExperienceCategory[] = ["Work", "Leadership", "Education"];

export const ExperienceSection = () => {
  return (
    <>
      {categories.map((category) => {
        const items = experienceData.filter((item) => item.category === category);

        return (
          <Section key={category} title={category} className="py-10 md:py-14">
            <div className="divide-y divide-line">
              {items.map((item) => (
                <article
                  key={item.id}
                  className="grid gap-x-8 gap-y-2 py-8 first:pt-0 last:pb-0 sm:grid-cols-[14rem_minmax(0,1fr)]"
                >
                  <p className="text-[0.9375rem] text-muted sm:pt-1.5">{item.date}</p>
                  <div>
                    <h3 className="text-xl md:text-2xl">{item.role}</h3>
                    <p className="mt-1 text-depth">{item.title}</p>
                    <ul className="mt-4 max-w-[64ch] list-disc space-y-2 pl-5 marker:text-tide">
                      {item.points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </Section>
        );
      })}
    </>
  );
};
