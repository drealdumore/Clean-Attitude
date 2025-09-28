import type { Metadata } from "next";
import { Lato } from "next/font/google";

import "./globals.css";
import { _siteDetails } from "@/lib/config";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const myFont = Lato({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: _siteDetails.name,
  description: _siteDetails.desc,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${myFont.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
