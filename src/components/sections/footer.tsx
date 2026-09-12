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
    <footer id="contact" className="w-full relative z-10 py-12 mt-20 border-t border-zinc-900/50 bg-black/50 backdrop-blur-md">
      <div className="mx-auto max-w-5xl px-4 md:px-8 flex flex-col items-center justify-center gap-6">
        <h3 className="text-xl font-semibold text-white">Let&apos;s Connect</h3>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {contactData.links.map((link) => {
            const Icon = iconMap[link.icon];
            return (
              <a
                key={link.id}
                href={link.href}
                target={link.isExternal ? "_blank" : undefined}
                rel={link.isExternal ? "noreferrer" : undefined}
                className={cn("flex items-center gap-2 text-zinc-400 transition-colors", link.hoverClass || "hover:text-white")}
                aria-label={link.label}
              >
                <Icon className="h-6 w-6" />
                <span className="text-sm font-medium">{link.label}</span>
              </a>
            );
          })}
        </div>
        <p className="text-zinc-500 text-xs mt-4">© {new Date().getFullYear()} {contactData.name}. All rights reserved.</p>
      </div>
    </footer>
  );
};
