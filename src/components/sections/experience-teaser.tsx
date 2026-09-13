import Link from "next/link";
import { experienceData, ExperienceCategory } from "@/data/experience";
import { Briefcase, Users, GraduationCap, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const CategoryBadge = ({ category }: { category: ExperienceCategory }) => {
  let colorClass = "";
  let Icon = Briefcase;

  switch (category) {
    case "Work":
      colorClass = "bg-teal-500/10 text-[var(--color-tide-deep)] border-teal-500/30";
      Icon = Briefcase;
      break;
    case "Leadership":
      colorClass = "bg-sky-500/10 text-[var(--color-depth)] border-sky-500/30";
      Icon = Users;
      break;
    case "Education":
      colorClass = "bg-amber-500/10 text-amber-800 border-amber-500/30";
      Icon = GraduationCap;
      break;
  }

  return (
    <span className={cn("inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border shadow-2xs", colorClass)}>
      <Icon className="w-3.5 h-3.5" />
      {category}
    </span>
  );
};

export const ExperienceTeaser = () => {
  // Curate 3 standout entries across distinct domains:
  // 1. Current Full-Stack role (uco-intern)
  // 2. High-visibility Leadership (gdg-coord)
  // 3. Prestigious intensive iOS foundation (apple-foundation)
  const teaserIds = ["uco-intern", "gdg-coord", "apple-foundation"];
  const teaserItems = experienceData.filter((item) => teaserIds.includes(item.id));

  return (
    <section className="w-full py-20 px-4 md:px-8 bg-transparent relative z-10">
      <div className="mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-[var(--color-tide)]/30 text-xs font-semibold text-[var(--color-depth)] shadow-2xs mb-3">
              <span>Trajectory</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-[var(--color-depth)] tracking-tight">
              Experience Highlights
            </h2>
          </div>

          <Link
            href="/experience"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-tide-deep)] hover:underline group focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[var(--color-tide-deep)] rounded-xs"
          >
            <span>See full journey ({experienceData.length} milestones)</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 3 Compact Milestone Cards */}
        <div className="flex flex-col gap-6">
          {teaserItems.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-7 rounded-2xl bg-[var(--color-foam)]/70 backdrop-blur-md border border-[var(--color-tide)]/25 shadow-xs hover:shadow-md transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <CategoryBadge category={item.category} />
                    <span className="text-xs sm:text-sm font-medium text-[var(--color-ink)]/75">
                      {item.date}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-[var(--color-depth)] tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base font-semibold text-[var(--color-tide-deep)] mt-0.5">
                    {item.role}
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-[var(--color-ink)] leading-relaxed line-clamp-2">
                {item.points[0]}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="mt-8 text-center">
          <Link
            href="/experience"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/80 border border-[var(--color-tide)]/30 text-[var(--color-depth)] text-sm font-semibold hover:bg-white hover:border-[var(--color-tide)] hover:scale-102 active:scale-98 transition-all shadow-2xs focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[var(--color-tide-deep)]"
          >
            <span>Explore full timeline with all achievements</span>
            <ArrowRight className="w-4 h-4 text-[var(--color-tide-deep)]" />
          </Link>
        </div>
      </div>
    </section>
  );
};
