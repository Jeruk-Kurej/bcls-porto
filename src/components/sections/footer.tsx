"use client";

import { Mail, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "@/components/ui/icons";

export const FooterSection = () => {
  return (
    <footer id="contact" className="w-full relative z-10 py-12 mt-20 border-t border-zinc-900/50 bg-black/50 backdrop-blur-md">
      <div className="mx-auto max-w-5xl px-4 md:px-8 flex flex-col items-center justify-center gap-6">
        <h3 className="text-xl font-semibold text-white">Let's Connect</h3>
        <div className="flex flex-wrap justify-center items-center gap-8">
          <a href="https://github.com/Jeruk-Kurej" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors" aria-label="GitHub">
            <GithubIcon className="h-6 w-6" />
            <span className="text-sm font-medium">GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/bcls" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors" aria-label="LinkedIn">
            <LinkedinIcon className="h-6 w-6" />
            <span className="text-sm font-medium">LinkedIn</span>
          </a>
          <a href="mailto:blukitosetiawan@gmail.com" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors" aria-label="Email">
            <Mail className="h-6 w-6" />
            <span className="text-sm font-medium">Email</span>
          </a>
          <a href="https://wa.me/6281234881603" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-zinc-400 hover:text-green-400 transition-colors" aria-label="WhatsApp">
            <WhatsappIcon className="h-6 w-6" />
            <span className="text-sm font-medium">WhatsApp</span>
          </a>
        </div>
        <p className="text-zinc-500 text-xs mt-4">© {new Date().getFullYear()} Bryan Carlie Lukito Setiawan. All rights reserved.</p>
      </div>
    </footer>
  );
};
