export type ContactIconKey = "github" | "linkedin" | "email" | "whatsapp";

export interface ContactLink {
  id: string;
  label: string;
  href: string;
  icon: ContactIconKey;
  value?: string;
  isExternal?: boolean;
  hoverClass?: string;
}

export interface ContactInfo {
  name: string;
  email: string;
  whatsapp: string;
  github: string;
  linkedin: string;
  links: ContactLink[];
}

export const contactData: ContactInfo = {
  name: "Bryan Carlie Lukito Setiawan",
  email: "blukitosetiawan@gmail.com",
  whatsapp: "6281234881603",
  github: "https://github.com/Jeruk-Kurej",
  linkedin: "https://www.linkedin.com/in/bcls",
  links: [
    {
      id: "github",
      label: "GitHub",
      href: "https://github.com/Jeruk-Kurej",
      icon: "github",
      isExternal: true,
      hoverClass: "hover:text-white",
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/bcls",
      icon: "linkedin",
      isExternal: true,
      hoverClass: "hover:text-white",
    },
    {
      id: "email",
      label: "Email",
      href: "mailto:blukitosetiawan@gmail.com",
      value: "blukitosetiawan@gmail.com",
      icon: "email",
      isExternal: false,
      hoverClass: "hover:text-white",
    },
    {
      id: "whatsapp",
      label: "WhatsApp",
      href: "https://wa.me/6281234881603",
      value: "6281234881603",
      icon: "whatsapp",
      isExternal: true,
      hoverClass: "hover:text-green-400",
    },
  ],
};
