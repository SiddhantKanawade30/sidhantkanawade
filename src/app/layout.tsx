import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/navbar";
import { ViewTransitions } from 'next-view-transitions'
import { Footer } from "./components/navbar/footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

export const metadata: Metadata = {
  title: "Siddhant A Kanawade",
  description: "Freelance Portfolio",
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
