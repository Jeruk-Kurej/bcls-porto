import { Section } from "@/components/ui/section";

const toolkit = [
  { area: "Mobile", tools: ["Swift", "SwiftUI", "Kotlin", "Jetpack Compose"] },
  { area: "Web", tools: ["Next.js", "React", "Laravel"] },
  { area: "Data and services", tools: ["MySQL", "PostgreSQL", "Firebase", "Prisma", "Cloudinary"] },
];

export const AboutSection = () => {
  return (
    <Section id="about" title="About">
      <div className="max-w-[62ch] space-y-5 text-lg">
        <p>
          I like connecting solid backend systems to clean, intuitive interfaces. While studying
          Informatics, I&apos;ve built native apps in Swift and Kotlin and full-stack web
          applications with Laravel, Next.js, and React, which lets me follow a product from the
          database to the screen.
        </p>
        <p>
          I&apos;ve also coordinated events and led design teams in campus organisations. That
          taught me the best digital products come from clear communication as much as from clean
          code.
        </p>
      </div>

      <dl className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-3">
        {toolkit.map((group) => (
          <div key={group.area}>
            <dt className="font-medium text-depth">{group.area}</dt>
            <dd className="mt-2 text-[0.9375rem]">
              <ul className="space-y-1">
                {group.tools.map((tool) => (
                  <li key={tool}>{tool}</li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
};
