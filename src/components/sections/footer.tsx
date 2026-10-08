import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "@/components/ui/icons";
import { Waterline } from "@/components/ui/waterline";
import { contactData, type ContactIconKey } from "@/data/contact";

const iconMap: Record<ContactIconKey, React.ComponentType<{ className?: string }>> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  email: Mail,
  whatsapp: WhatsappIcon,
};

export const FooterSection = () => {
  // Email gets its own large link, so the row below lists the other channels
  const otherLinks = contactData.links.filter((link) => link.icon !== "email");

  return (
    <footer id="contact" className="relative mt-24 bg-depth text-foam md:mt-32">
      <Waterline />

      <div className="wrap pt-16 pb-10 md:pt-24">
        <h2 className="display-lg text-white">Let&apos;s connect</h2>
        <p className="mt-6 max-w-[44ch] text-lg text-foam/90">
          I&apos;m happy to hear about mobile and web projects or opportunities. Email is the fastest way to reach me.
        </p>

        <p className="mt-8">
          <a
            href={`mailto:${contactData.email}`}
            className="font-display text-2xl break-words text-white underline decoration-tide decoration-1 underline-offset-[0.3em] transition-colors hover:decoration-white sm:text-4xl"
          >
            {contactData.email}
          </a>
        </p>

        <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-4 text-[0.9375rem]">
          {otherLinks.map((link) => {
            const Icon = iconMap[link.icon];
            return (
              <li key={link.id}>
                <a
                  href={link.href}
                  target={link.isExternal ? "_blank" : undefined}
                  rel={link.isExternal ? "noreferrer" : undefined}
                  className="inline-flex items-center gap-2 transition-colors hover:text-white"
                >
                  <Icon className="size-[1.125rem]" />
                  {link.label}
                  {link.isExternal && <span className="sr-only"> (opens in new tab)</span>}
                </a>
              </li>
            );
          })}
        </ul>

        <p className="mt-16 text-sm text-foam/65">
          © {new Date().getFullYear()} {contactData.name}
        </p>
      </div>
    </footer>
  );
};
