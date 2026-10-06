import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  mb?: number; // margin bottom in rem units (default 4 for mb-16)
  dividerWidth?: number; // width in rem units (default 4 for w-16)
  dividerHeight?: number; // height in rem units (default 0.25 for h-1)
}

export const SectionHeader = ({
  title,
  className = "",
  size = "md",
  mb = 4,
  dividerWidth = 4,
  dividerHeight = 0.25,
}: SectionHeaderProps) => {
  // Responsive text sizes
  const textSizeMap: Record<string, string> = {
    sm: "text-3xl sm:text-4xl",
    md: "text-4xl sm:text-5xl",
    lg: "text-5xl sm:text-6xl",
  };

  // Margin bottom
  const mbClass = `mb-${mb * 4}`; // Convert rem to Tailwind spacing (1rem = 4 units)

  // Divider size
  const dividerWidthClass = `w-${dividerWidth * 4}`; // Convert rem to Tailwind spacing
  const dividerHeightClass = `h-[${dividerHeight}rem]`; // Custom height

  return (
    <div className={cn("flex flex-col items-center justify-center text-center", mbClass, className)}>
      <h2 className={cn(
        "font-display font-bold text-[var(--color-depth)] tracking-tight",
        textSizeMap[size]
      )}>
        {title}
      </h2>
      <div className={cn(
        "mt-3 rounded-full bg-[var(--color-tide)]/40",
        dividerWidthClass,
        dividerHeightClass
      )} />
    </div>
  );
};