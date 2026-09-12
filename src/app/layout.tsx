import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bcls.vercel.app"),
  title: "Bryan Carlie Lukito Setiawan | Portfolio",
  description: "Full-Stack Application Developer specializing in iOS, Android, and Web applications. Explore my projects, journey, and technical toolkit.",
  keywords: ["Bryan Carlie", "Portfolio", "Full-Stack Developer", "Software Engineer", "iOS Developer", "Next.js", "React", "SwiftUI"],
  authors: [{ name: "Bryan Carlie Lukito Setiawan", url: "https://github.com/Jeruk-Kurej" }],
  creator: "Bryan Carlie Lukito Setiawan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bcls.vercel.app",
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
      className={`dark ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-black text-white">{children}</body>
    </html>
  );
}
