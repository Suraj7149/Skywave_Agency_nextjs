import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-surface">
      {/* Base Video Layer */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/ui_ux_video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Overlay Layers (Image + Gradient) */}
      <div className="absolute inset-0 z-10">
        <img
          className="w-full h-full object-cover opacity-20 grayscale"
          alt="high-energy modern office environment"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuG5E-i3ewqO7GWZ7Ahc2gcK6i25YS9E7DXTam-_1Vw4MNeJMYoMCA9p-LdJHqKOuxZmlM6XK30qnXx5mpVmKxUFGnkSzsyXg71LhSiVKGXjA44vxZ-PcTG2nQyqGsedueP2OXFkYH9TbPz0-68ypQDaFnKkWZ8Qt6W6FKLdiN8y6_cc9tQCd6mCsLjDd6fNvK7DNX_Anb93AJawUU4ObWsLOT3mV9a97bfd2uTH_v90-qYOEzk1lTF2ZCmuONBAAqGXonYz9TFLA"
        />
        {/* Modern Gradient: Opaque on the left for text readability, 70% transparent on the right to reveal video */}
        <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-surface/30"></div>
      </div>

      <div className="container mx-auto px-8 relative z-20">
        <div className="max-w-4xl">
          <span className="inline-block px-4 py-1 bg-primary-container text-on-primary-container text-xs font-headline font-bold tracking-widest uppercase mb-6 rounded-sm">
            WHERE AMBITION MEETS ALTITUDE
          </span>
          <h1 className="text-7xl md:text-9xl font-headline font-black tracking-tighter leading-[0.9] text-on-surface mb-8 uppercase max-w-[min-content] md:max-w-4xl">
            WE ENGINEER <span className="text-primary">SKYWAVE</span> SOLUTIONS.
          </h1>
          <p className="text-xl md:text-2xl text-secondary max-w-2xl mb-12 leading-relaxed">
            A full-service technology partner focused on elevating businesses through cutting-edge systems and relentless engineering excellence.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="bg-primary text-on-primary px-10 py-5 rounded-full font-headline font-bold uppercase tracking-widest hover:shadow-2xl transition-all duration-300"
            >
              Start Your Growth
            </Link>
            <Link
              href="/portfolio"
              className="bg-surface-container-highest text-on-surface px-10 py-5 rounded-full font-headline font-bold uppercase tracking-widest hover:bg-surface-variant transition-all"
            >
              View Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
