import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "./components/navbar";
import { ViewTransitions } from 'next-view-transitions'
import { Footer } from "./components/navbar/footer";

const inter = localFont({
  src: [
    {
      path: "../../public/fonts/inter/Inter-VariableFont_opsz,wght.ttf",
      style: "normal",
    },
    {
      path: "../../public/fonts/inter/Inter-Italic-VariableFont_opsz,wght.ttf",
      style: "italic",
    },
  ],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://siddhantkanawade.vercel.app"),
  alternates: {
    canonical: "https://siddhantkanawade.vercel.app",
  },
  title: "Siddhant A Kanawade | Full-Stack Developer & Freelancer",
  description:
    "Professional portfolio of Siddhant A Kanawade — Full-Stack MERN developer, freelance software engineer, and creator of real-time encrypted chat apps, MERN projects, and UI/UX experiences.",
  keywords: [
    "Siddhant A Kanawade",
    "Full Stack Developer",
    "MERN",
    "React Developer",
    "Freelance Web Developer",
    "Portfolio",
    "Next.js",
    "Kanawade Siddhant",
    "Projects"
  ],
  authors: [{ name: "Siddhant A Kanawade" }],
  openGraph: {
    title: "Siddhant A Kanawade — MERN Stack Developer & Freelancer",
    description:
      "Explore my work, projects and professional portfolio built using Next.js, MERN stack, and modern UI. I have hands on experience in MERN stack, Prisma as ORM , Next.js, Tailwind css, shadcn, typescript",
    url: "https://siddhantkanawade.vercel.app",
    siteName: "Siddhant Portfolio",
    images: "/profile.png",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Siddhant A Kanawade | Developer Portfolio",
    description:
      "Freelance MERN stack developer building production-grade systems.",
    images: "/profile.png",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        
        <body
          className={`${inter.className} antialiased bg-neutral-100 overflow-x-auto`}
        >
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </ViewTransitions>
  );
}
