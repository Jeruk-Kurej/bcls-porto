"use client";

import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "@/components/ui/icons";
import { contactData, type ContactIconKey } from "@/data/contact";
import { cn } from "@/lib/utils";

const iconMap: Record<ContactIconKey, React.ComponentType<{ className?: string }>> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  email: Mail,
  whatsapp: WhatsappIcon,
};

export const FooterSection = () => {
  return (
    <footer id="contact" className="w-full relative z-10 py-12 mt-20 border-t border-[var(--color-tide)]/25 bg-[var(--color-foam)]/60 backdrop-blur-md">
      <div className="mx-auto max-w-5xl px-4 md:px-8 flex flex-col items-center justify-center gap-6">
        <h3 className="text-xl font-display font-bold text-[var(--color-depth)]">Let&apos;s Connect</h3>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {contactData.links.map((link) => {
            const Icon = iconMap[link.icon];
            return (
              <a
                key={link.id}
                href={link.href}
                target={link.isExternal ? "_blank" : undefined}
                rel={link.isExternal ? "noreferrer" : undefined}
                className={cn("flex items-center gap-2 text-[var(--color-ink)] hover:text-[var(--color-tide-deep)] transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[var(--color-tide-deep)] rounded-sm", link.hoverClass)}
                aria-label={link.label}
              >
                <Icon className="h-5 w-5 text-[var(--color-tide-deep)]" />
                <span className="text-sm font-medium">{link.label}</span>
              </a>
            );
          })}
        </div>
        <p className="text-[var(--color-ink)]/70 text-xs mt-2">© {new Date().getFullYear()} {contactData.name}. All rights reserved.</p>
      </div>
    </footer>
  );
};
