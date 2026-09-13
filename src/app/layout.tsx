import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  axes: ["opsz"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
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
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/191065390?v=4",
        width: 460,
        height: 460,
        alt: "Bryan Carlie Lukito Setiawan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bryan Carlie Lukito Setiawan | Portfolio",
    description: "Full-Stack Application Developer specializing in iOS, Android, and Web applications.",
    images: ["https://avatars.githubusercontent.com/u/191065390?v=4"],
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
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[var(--color-mist)] text-[var(--color-ink)] selection:bg-[var(--color-foam)] selection:text-[var(--color-depth)]">{children}</body>
    </html>
  );
}
