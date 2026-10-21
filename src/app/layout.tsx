import { Suspense } from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { FavoritesProvider } from "@/components/favorites-provider";
import { Navbar } from "@/components/navbar";
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
  title: {
    default: "Wanderlust — Find your somewhere",
    template: "%s | Wanderlust",
  },
  description: "Discover small-group local experiences and unforgettable ways to explore the world.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full bg-[#faf9f6] font-sans text-stone-900">
        <Suspense fallback={<div className="min-h-screen" aria-hidden="true" />}>
          <FavoritesProvider>
            <Navbar />
            {children}
          </FavoritesProvider>
        </Suspense>
      </body>
    </html>
  );
}
