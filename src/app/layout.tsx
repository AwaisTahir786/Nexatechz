import type { Metadata } from "next";
import { Inter  } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter ({ subsets: ["latin"],
weight:"400" });

export const metadata: Metadata = {
  title: "Nexatexhz",
  description: "Marketing Agency Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}</body>
    </html>
  );
}
