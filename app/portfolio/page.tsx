import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

import PortfolioGallery from "./PortfolioGallery";

export const metadata: Metadata = {
  title: "Portfolio | Skywave Technologies",
  description: "Explore our portfolio of high-growth case studies where strategic precision meets digital dominance.",
  alternates: {
    canonical: "/portfolio",
  },
};

export default function PortfolioPage() {
  return (
    <main className="relative selection:bg-primary-container selection:text-on-primary-container">
      <Navbar />

      <div className="pt-24 sm:pt-32 pb-12 sm:pb-24">
        {/* Hero Section */}
        <section className="max-w-[1440px] mx-auto px-5 sm:px-8 mb-12 sm:mb-24">
          <div className="grid grid-cols-12 gap-4 sm:gap-8">
            <div className="col-span-12 lg:col-span-8">
              <span className="inline-block px-4 py-1 bg-primary-container text-on-primary-container text-[10px] sm:text-xs font-headline font-black uppercase tracking-widest mb-4 sm:mb-6 rounded-sm">
                Work Archives
              </span>
              <h1 className="text-5xl sm:text-7xl md:text-9xl font-headline font-black tracking-tighter leading-[0.85] text-on-surface mb-4 sm:mb-8 uppercase">
                Skywave<br />
                <span className="text-primary">Impact.</span>
              </h1>
            </div>
            <div className="col-span-12 lg:col-span-4 lg:self-end">
              <p className="text-base sm:text-xl text-secondary leading-relaxed mb-4 sm:mb-8">
                We don't just create content; we engineer velocity. Explore our portfolio of high-growth case studies where strategic precision meets digital dominance.
              </p>
            </div>
          </div>
        </section>

        <PortfolioGallery />

        {/* CTA Section */}
        <section className="mt-16 sm:mt-32 bg-surface-container-low py-16 sm:py-32 overflow-hidden relative">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl sm:text-5xl md:text-8xl font-headline font-black uppercase tracking-tighter leading-tight mb-6 sm:mb-8">
                Ready for your <span className="text-primary">Next Phase?</span>
              </h2>
              <p className="text-base sm:text-xl text-secondary mb-8 sm:mb-12">
                Stop playing small. Let's build the growth engine your brand deserves.
              </p>
              <Link href="/contact" className="inline-block bg-primary text-on-primary px-8 py-4 sm:px-12 sm:py-5 rounded-full font-headline font-bold uppercase tracking-widest text-sm sm:text-lg hover:shadow-2xl hover:scale-105 transition-all">
                Start a Project
              </Link>
            </div>
          </div>
          <div className="absolute -bottom-16 -right-24 text-7xl sm:text-[12rem] font-black text-surface-container-highest/50 select-none font-headline tracking-tighter leading-none pointer-events-none uppercase">
            SKYWAVE
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
