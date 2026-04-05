"use client";

import React, { useState } from "react";
import Link from "next/link";

const CATEGORIES = [
  "All Projects",
  "Branding",
  "Social Media",
  "Web Design",
  "Strategy",
  "Motion Design"
];

export default function PortfolioGallery() {
  const [activeFilter, setActiveFilter] = useState("All Projects");

  const show = (category: string) => activeFilter === "All Projects" || activeFilter === category;

  return (
    <>
      {/* Category Filters */}
      <section className="max-w-[1440px] mx-auto px-8 mb-16">
        <div className="flex flex-wrap gap-4 items-center">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-8 py-2 rounded-full text-sm font-headline font-bold uppercase tracking-tighter transition-colors ${
                activeFilter === cat
                  ? "bg-primary text-on-primary"
                  : "bg-surface-container-high text-secondary hover:bg-surface-container-highest"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Portfolio Grid (Asymmetric Bento Style) */}
      <section className="max-w-[1440px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Large Feature Card - Branding */}
          {show("Branding") && (
            <div className={`group relative overflow-hidden bg-surface-container-lowest rounded-xl ${activeFilter === "All Projects" ? "md:col-span-8" : "md:col-span-12"}`}>
              <div className="aspect-[16/9] w-full overflow-hidden">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  alt="Minimalist luxury fashion brand photoshoot with high contrast lighting and sharp architectural shadows on a concrete background"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYmIJFf3km-b-_VJfVdKXNhqizmDmD3y4lz__7gs8uUlpnnAHZ2Aqr-EFvBQxc1HsS7FtkiQF-q1QQlvr5zrH196gIv-ShVy4pzh4OwTjRzSV3yAtx5pYhuigzskm4biTMMfmLFPiQp5AJfhu7rAJry-uk5RMwK6i5mWIRQNPIaM-OUOIVXnPrU4P2TlAtvXTPhm209tgc9pGtS0RAMS8L8Yf9qJ8g7p_6Ba1NBjhHiAd5O5GPF7hBzvLMdsVSXx6b3ctuJlpqh0g"
                />
              </div>
              <div className="p-8 md:p-12">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-primary font-headline font-bold text-xs uppercase tracking-widest">
                      Branding • Identity
                    </span>
                    <h3 className="text-4xl font-headline font-black mt-2 uppercase tracking-tighter">
                      Vanguard Couture
                    </h3>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-3xl font-headline font-black text-on-surface">140%</span>
                    <span className="text-[10px] font-headline font-bold uppercase text-secondary tracking-widest">
                      Revenue Growth
                    </span>
                  </div>
                </div>
                <p className="text-secondary max-w-xl mb-8">
                  Redefining the digital presence of an artisanal fashion house through motion-led storytelling and a headless e-commerce architecture.
                </p>
                <Link
                  className="inline-flex items-center gap-2 group/link font-headline font-bold uppercase text-sm tracking-widest text-on-surface"
                  href="#"
                >
                  View Case Study
                  <span className="material-symbols-outlined text-primary group-hover/link:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>
          )}

          {/* Tall Card - Web Design */}
          {show("Web Design") && (
            <div className={`group relative overflow-hidden bg-surface-container-lowest rounded-xl flex flex-col ${activeFilter === "All Projects" ? "md:col-span-4" : "md:col-span-6 md:col-start-4"}`}>
              <div className={`flex-grow overflow-hidden ${activeFilter === "All Projects" ? "aspect-[3/4]" : "aspect-[16/9]"}`}>
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  alt="Dynamic close up of a high-end smartphone displaying a sleek colorful app interface with vibrant glassmorphism elements"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWkc9r-5HypifIEKthFCJtb3B9mrgiKC6LPd5hUioAjjd9ej003DP_-GkTC-vvKdJNUIvis-qqyrsHp0brInzANhWZvD02jCyE0_4CZ-XH-EMNzjMA7MPUsOGbRZDVChdKMs1GytlK0TCsscGZ_jk56b-2qBpieGf18lhK-_uzknqlUlwFSQ2AeRpagecGXuq_SXSRr319e4X4ZQ1H1wHCAejC73ZSGQw4JNz9lrfnQxdn1V0NeaQX_cmK6DyAjNjM_2LH04DPwfY"
                />
              </div>
              <div className="p-8">
                <span className="text-primary font-headline font-bold text-xs uppercase tracking-widest">
                  Web Design • UX
                </span>
                <h3 className="text-2xl font-headline font-black mt-2 uppercase tracking-tighter">
                  Nexus Fintech
                </h3>
                <div className="mt-4 pt-4 border-t border-surface-container-high flex justify-between">
                  <span className="text-xs font-headline font-bold uppercase text-secondary tracking-widest">Retention</span>
                  <span className="text-xs font-headline font-black text-on-surface">+45%</span>
                </div>
              </div>
            </div>
          )}

          {/* Standard Card 1 - Social Media */}
          {show("Social Media") && (
            <div className={`group relative overflow-hidden bg-surface-container-lowest rounded-xl ${activeFilter === "All Projects" ? "md:col-span-4" : "md:col-span-6 md:col-start-4"}`}>
              <div className="aspect-square overflow-hidden">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  alt="Stylized flat-lay of organic skincare products with soft morning light and botanical shadows"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfci3culyN9q_1nVjvQLil7HAeQALs48KXdgOoZVLu_475RsFwSqwfDitbZVgIUg2UenCnLuvk7fSoqRgmrnCFAlKT99-abwgcNL1_5B8_xAIWFmxUS2zQW_nqDyrKF1y6YuBTH1JwVug6oFeeDs-Z5T4pF1YBz_OEADKbxmd2ew-FaZupgQJ9IxL18ewb9AazfhTvFgLmVVpYlbD8_UbJv8SL0mLTaAryfevW9f9OkAGZCSgP7fzfVLQtQgOAJrBTNSvNFLP0f6E"
                />
              </div>
              <div className="p-8">
                <span className="text-primary font-headline font-bold text-xs uppercase tracking-widest">
                  Social Media
                </span>
                <h3 className="text-2xl font-headline font-black mt-2 uppercase tracking-tighter">
                  Purely Organic
                </h3>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="bg-surface-container-low p-3 rounded-lg">
                    <p className="text-[10px] font-headline font-bold text-secondary uppercase tracking-widest">ROAS</p>
                    <p className="text-lg font-headline font-black">2x</p>
                  </div>
                  <div className="bg-surface-container-low p-3 rounded-lg">
                    <p className="text-[10px] font-headline font-bold text-secondary uppercase tracking-widest">Reach</p>
                    <p className="text-lg font-headline font-black">200k</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Standard Card 2 - Motion Design */}
          {show("Motion Design") && (
            <div className={`group relative overflow-hidden bg-surface-container-lowest rounded-xl ${activeFilter === "All Projects" ? "md:col-span-4" : "md:col-span-6 md:col-start-4"}`}>
              <div className="aspect-square overflow-hidden">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  alt="Abstract 3D rendered shapes in orange and chrome silver floating in a minimalist white space"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGoGlo8KbkZCW1zFb2HhD2hzxEJ_X7LMdN0AfqHHykOK9mwrfOlJqG6GkQU71wb04epUCX_XwKpN_4Mgnj5HwVv0w_OO7dayWJyuyr2LzeDLpCzOKdWzjCFStn__sp5SpDlUxQnz9KhLo1eALYUffoYBYCTVu2j_5ATgHoZTzqQ0tncwWlPupuSWrV0PUL4Lll8HtR3pqAgdbUgKq2f1-Fmm_4vgmBD677lEDmzde0IMGSrtg8bqChh1pFfNyFM-uc6Ecz-8djlZ0"
                />
              </div>
              <div className="p-8">
                <span className="text-primary font-headline font-bold text-xs uppercase tracking-widest">
                  Motion Design
                </span>
                <h3 className="text-2xl font-headline font-black mt-2 uppercase tracking-tighter">
                  Aero Dynamics
                </h3>
                <p className="text-sm text-secondary mt-4 mb-6">
                  Dynamic identity for a next-gen aerospace consultancy.
                </p>
                <Link className="text-xs font-headline font-black uppercase text-on-surface border-b border-primary pb-1 inline-block" href="#">
                  Explore Motion
                </Link>
              </div>
            </div>
          )}

          {/* Offset Card - Strategy */}
          {show("Strategy") && (
            <div className={`group relative overflow-hidden bg-primary-container rounded-xl flex flex-col justify-end p-8 min-h-[400px] ${activeFilter === "All Projects" ? "md:col-span-4" : "md:col-span-6 md:col-start-4"}`}>
              <div className="absolute inset-0 opacity-20">
                <img
                  className="w-full h-full object-cover"
                  alt="Close-up texture of liquid metal moving with high energy and reflections"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCD3APXL90BIcryD49DVV2w9Q2DLGDu_kfWOr8sF08-6XIx7b6Cm0dr6QgYha7XdJXVEx9HN7Wfzk4v3N5tbT21kvZSq8G-R2gEI9eH7V8lhtSCbYLf4QiAMV1pue3cBNyS6rUZfuNt0BI9Oxjw2u6p1IRAAMa-2ghTdV1fl2IDg8gf5zLkte-zoW6gcQT0HZi7fd8BtAkW_8b3ijNV3P2pKgA7qFn0H8S05AhefU1y_-6SFzmxHwGDPDmRtFIi7FnXjqsFTpcdUQY"
                />
              </div>
              <div className="relative z-10">
                <span className="text-on-primary-container font-headline font-bold text-xs uppercase tracking-widest">
                  Strategy
                </span>
                <h3 className="text-4xl font-headline font-black mt-2 uppercase tracking-tighter text-on-primary-container">
                  Growth Engine
                </h3>
                <p className="text-on-primary-container/80 mt-4 font-medium">
                  Bespoke performance marketing for enterprise SaaS scaling from $10M to $100M ARR.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
