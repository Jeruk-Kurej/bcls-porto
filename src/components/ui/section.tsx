import { cn } from "@/lib/utils";

interface SectionProps {
  title: string;
  /** Short supporting text or link shown under the title */
  note?: React.ReactNode;
  id?: string;
  className?: string;
  children: React.ReactNode;
}

/** Two-column section: the heading sits in a left rail, the content beside it. */
export const Section = ({ title, note, id, className, children }: SectionProps) => {
  return (
    <section id={id} className={cn("wrap py-14 md:py-20", className)}>
      <div className="grid gap-y-8 lg:grid-cols-[13rem_minmax(0,1fr)] lg:gap-x-16">
        <div>
          <h2 className="text-2xl md:text-[1.75rem]">{title}</h2>
          {note && <div className="mt-3 text-[0.9375rem] text-muted">{note}</div>}
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
};
