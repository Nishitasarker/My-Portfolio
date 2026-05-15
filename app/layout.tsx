import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import { Providers } from "./providers";
import { Inter, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Reeni - Jane Cooper | Content Writer Portfolio",
  description: "A premium animated portfolio showcasing modern web development and data science expertise.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth"  suppressHydrationWarning>
      <head>
          </head>
      <body className={`${inter.variable} ${hanken.variable} antialiased`}>
       <Providers>
        <Navbar />
        {children}
        </Providers>
      </body>
    </html>
  );
}
