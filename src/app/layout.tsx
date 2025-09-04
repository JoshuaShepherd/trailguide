import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SkipLink, FocusManager } from '@/components/accessibility';
import { TemplateGuide } from '@/components/TemplateGuide';
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
  title: "Expert Publisher Platform Template - Complete Thought Leadership Solution",
  description: "Live template demonstrating the complete digital platform for thought leaders. See exactly how to build authority, engage audiences, and monetize expertise.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SkipLink />
        <FocusManager />
        <Header />
        <main id="main-content">
          {children}
        </main>
        <Footer />
        <TemplateGuide />
      </body>
    </html>
  );
}
