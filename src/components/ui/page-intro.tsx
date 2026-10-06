interface PageIntroProps {
  title: string;
  children: React.ReactNode;
}

/** Title block shared by the top-level pages. */
export const PageIntro = ({ title, children }: PageIntroProps) => {
  return (
    <div className="wrap pt-12 pb-6 md:pt-20 md:pb-8">
      <h1 className="display-lg">{title}</h1>
      <p className="mt-6 max-w-[56ch] text-lg">{children}</p>
    </div>
  );
};
