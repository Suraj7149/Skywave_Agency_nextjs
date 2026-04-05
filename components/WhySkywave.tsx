import React from "react";

const WhySkywave = () => {
  return (
    <section className="py-32 bg-surface overflow-hidden">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-primary-fixed opacity-30 rounded-full blur-3xl"></div>
            <video
              autoPlay
              loop
              muted
              playsInline
              className="rounded-xl relative z-10 w-full shadow-2xl object-cover"
            >
              <source src="/web_dev_video.mp4" type="video/mp4" />
            </video>
          </div>
          <div>
            <h2 className="text-5xl font-headline font-black tracking-tighter uppercase mb-8 leading-tight">
              WHY <span className="text-primary italic">SKYWAVE?</span>
            </h2>
            <div className="space-y-12">
              <div className="flex gap-6">
                <span className="material-symbols-outlined text-primary text-3xl shrink-0 transition-transform hover:rotate-12 hover:scale-110">
                  architecture
                </span>
                <div>
                  <h4 className="text-xl font-headline font-bold mb-2">High-Performance Architectures</h4>
                  <p className="text-secondary leading-relaxed">
                    We don&apos;t just build websites; we engineer blazing-fast Next.js and React ecosystems optimized for scale, conversion, and elite branding.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <span className="material-symbols-outlined text-primary text-3xl shrink-0 transition-transform hover:-translate-y-2 hover:scale-110">
                  devices
                </span>
                <div>
                  <h4 className="text-xl font-headline font-bold mb-2">Omni-Platform Dominance</h4>
                  <p className="text-secondary leading-relaxed">
                    Delivering native-grade mobile and web solutions through Flutter and React Native, ensuring seamless app experiences across Android and iOS.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <span className="material-symbols-outlined text-primary text-3xl shrink-0 transition-transform hover:scale-110">
                  dns
                </span>
                <div>
                  <h4 className="text-xl font-headline font-bold mb-2">Resilient Data & Commerce</h4>
                  <p className="text-secondary leading-relaxed">
                    From enterprise Shopify and WordPress builds to robust custom backend databases, our infrastructure is secure, scalable, and built for growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySkywave;
