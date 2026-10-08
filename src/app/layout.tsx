import type { Metadata } from "next";
import { Fraunces, Instrument_Sans } from "next/font/google";
import { SiteHeader } from "@/components/ui/site-header";
import { FooterSection } from "@/components/sections/footer";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT"],
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bryancarlie.vercel.app"),
  title: "Bryan Carlie Lukito Setiawan | Portfolio",
  description: "Full-Stack Application Developer specializing in iOS, Android, and Web applications. Explore my projects, journey, and technical toolkit.",
  keywords: ["Bryan Carlie", "Portfolio", "Full-Stack Developer", "Software Engineer", "iOS Developer", "Next.js", "React", "SwiftUI"],
  authors: [{ name: "Bryan Carlie Lukito Setiawan", url: "https://github.com/Jeruk-Kurej" }],
  creator: "Bryan Carlie Lukito Setiawan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bryancarlie.vercel.app",
    title: "Bryan Carlie Lukito Setiawan | Portfolio",
    description: "Full-Stack Application Developer specializing in iOS, Android, and Web applications. Explore my projects, journey, and technical toolkit.",
    siteName: "Bryan Carlie Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bryan Carlie Lukito Setiawan | Portfolio",
    description: "Full-Stack Application Developer specializing in iOS, Android, and Web applications.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${instrumentSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-depth focus:px-4 focus:py-2 focus:text-sm focus:text-white"
        >
          Skip to content
        </a>
        <SiteHeader />

        <main id="main" className="flex-1">
          {children}
        </main>
        <FooterSection />
      </body>
    </html>
  );
}
