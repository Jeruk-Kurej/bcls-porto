"use client";

import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";

export const FooterSection = () => {
  return (
    <footer className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-6 rounded-full border border-zinc-800 bg-black/50 px-6 py-3 backdrop-blur-md shadow-2xl">
        <a href="https://github.com/Jeruk-Kurej" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white transition-colors" aria-label="GitHub">
          <GithubIcon className="h-5 w-5" />
        </a>
        <a href="https://www.linkedin.com/in/bcls" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white transition-colors" aria-label="LinkedIn">
          <LinkedinIcon className="h-5 w-5" />
        </a>
        <a href="mailto:blukitosetiawan@gmail.com" className="text-zinc-400 hover:text-white transition-colors" aria-label="Email">
          <Mail className="h-5 w-5" />
        </a>
      </div>
    </footer>
  );
};
