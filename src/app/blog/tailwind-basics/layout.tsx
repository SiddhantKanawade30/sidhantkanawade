import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../globals.css";
import { Container } from "@/app/components/Container";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

export const metadata: Metadata = {
  title: "Tailwind CSS Guide - Siddhant's Blog",
  description: "A complete beginner's guide to Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Container className="px-4 md:px-10 pt-10 md:pt-20 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <article className={`blog-content ${inter.className}`}>
          {children}
        </article>
      </div>
    </Container>
  );
}
