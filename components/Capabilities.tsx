import React from "react";

const Capabilities = () => {
  return (
    <section className="py-32 bg-surface">
      <div className="container mx-auto px-8">
        <div className="mb-20 max-w-5xl">
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-[10px] font-headline font-bold tracking-[0.2em] uppercase mb-4 rounded-full">
            Our Expertise
          </span>
          <h2 className="text-5xl md:text-7xl font-headline font-black tracking-tighter uppercase mb-6 leading-none">
            ENGINEERING <span className="text-primary italic">CAPABILITIES.</span>
          </h2>
          <p className="text-xl text-secondary leading-relaxed">
            From high-velocity web architectures to robust cross-platform mobile ecosystems, we build the systems that scale companies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[320px]">
          {/* Card 1: Branding & Web Strategy (Bento 2-wide) */}
          <div className="md:col-span-2 group relative overflow-hidden bg-surface-container-lowest p-10 rounded-3xl transition-all border border-outline-variant/10 hover:border-primary/20 hover:shadow-2xl">
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <span className="material-symbols-outlined text-5xl mb-6 text-primary group-hover:scale-110 transition-transform duration-500">
                  design_services
                </span>
                <h3 className="text-3xl font-headline font-bold mb-4 tracking-tight group-hover:text-primary transition-colors">
                  Strategic Visual Identity & Branding
                </h3>
                <p className="text-secondary leading-relaxed max-w-md">
                  High-impact web redesigns and editorial branding that bridge the gap between vision and visual reality.
                </p>
              </div>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-surface-container text-secondary text-[10px] font-bold uppercase tracking-wider rounded-md">Visual Design</span>
                <span className="px-3 py-1 bg-surface-container text-secondary text-[10px] font-bold uppercase tracking-wider rounded-md">Identity</span>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-20 -mt-20 blur-3xl group-hover:bg-primary/10 transition-all"></div>
          </div>

          {/* Card 2: Next.js & React Ecosystems */}
          <div className="group bg-surface-container-lowest p-10 rounded-3xl transition-all border border-outline-variant/10 hover:border-primary/20 hover:shadow-xl">
            <div className="flex flex-col h-full justify-between">
              <div>
                <span className="material-symbols-outlined text-5xl mb-6 text-primary transition-all group-hover:rotate-12">
                  code
                </span>
                <h3 className="text-2xl font-headline font-bold mb-4 tracking-tight">
                  High-Performance Architectures
                </h3>
                <p className="text-sm text-secondary leading-relaxed">
                  Next.js, React, and modern frontend ecosystems engineered for maximum velocity and Core Web Vital dominance.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="text-[10px] font-bold text-primary/60 uppercase">#NextJS</span>
                <span className="text-[10px] font-bold text-primary/60 uppercase">#ReactJS</span>
              </div>
            </div>
          </div>

          {/* Card 3: Omni-platform Engineering */}
          <div className="group bg-surface-container-lowest p-10 rounded-3xl transition-all border border-outline-variant/10 hover:border-primary/20 hover:shadow-xl">
            <div className="flex flex-col h-full justify-between">
              <div>
                <span className="material-symbols-outlined text-5xl mb-6 text-primary transition-all group-hover:-translate-y-2">
                  stay_current_portrait
                </span>
                <h3 className="text-2xl font-headline font-bold mb-4 tracking-tight">
                  Omni-platform Mobile Solutions
                </h3>
                <p className="text-sm text-secondary leading-relaxed">
                  Native-grade performance for Android and iOS using Flutter and React Native cross-platform excellence.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="text-[10px] font-bold text-primary/60 uppercase">#Flutter</span>
                <span className="text-[10px] font-bold text-primary/60 uppercase">#ReactNative</span>
              </div>
            </div>
          </div>

          {/* Card 4: Enterprise E-Commerce Systems (Bento 2-wide) */}
          <div className="md:col-span-1 group relative overflow-hidden bg-surface-container-lowest p-10 rounded-3xl transition-all border border-outline-variant/10 hover:border-primary/20 hover:shadow-2xl">
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <span className="material-symbols-outlined text-5xl text-primary group-hover:scale-110 transition-transform duration-500">
                    shopping_cart
                  </span>
                </div>
                <h3 className="text-3xl font-headline font-bold mb-4 tracking-tight group-hover:text-primary transition-colors">
                  Enterprise E-Commerce Systems
                </h3>
                <p className="text-secondary leading-relaxed max-w-xl">
                  Custom-coded headless frameworks, Shopify, and WordPress ecosystems optimized for conversion and massive scale.
                </p>
              </div>
              <div className="flex gap-4 items-center">
                <span className="text-xs font-bold text-secondary/50 uppercase tracking-widest">Stack:</span>
                <div className="flex gap-3">
                  <span className="px-3 py-1 bg-surface-container-high text-on-surface text-[10px] font-bold rounded-full">Shopify</span>
                  <span className="px-3 py-1 bg-surface-container-high text-on-surface text-[10px] font-bold rounded-full">WordPress</span>
                  <span className="px-3 py-1 bg-surface-container-high text-on-surface text-[10px] font-bold rounded-full">Custom</span>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full -mr-32 -mb-32 blur-3xl group-hover:bg-primary/10 transition-all"></div>
          </div>

          {/* Card 5: Backend & Data Structure */}
          <div className="group bg-surface-container-lowest p-10 rounded-3xl transition-all border border-outline-variant/10 hover:border-primary/20 hover:shadow-xl">
            <div className="flex flex-col h-full justify-between">
              <div>
                <span className="material-symbols-outlined text-5xl mb-6 text-primary group-hover:rotate-12 transition-transform">
                  database
                </span>
                <h3 className="text-2xl font-headline font-bold mb-4 tracking-tight">
                  Resilient Backend & Data
                </h3>
                <p className="text-sm text-secondary leading-relaxed">
                  Robust database constructions and scalable server-side systems built for high-concurrency environments.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="text-[10px] font-bold text-primary/60 uppercase">#Infrastructure</span>
                <span className="text-[10px] font-bold text-primary/60 uppercase">#Architecture</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
