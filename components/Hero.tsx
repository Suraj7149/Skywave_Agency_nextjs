import React from "react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-surface">
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover opacity-20 grayscale"
          alt="high-energy modern office environment with blurred professional movement and vibrant orange light leaks creating a sense of dynamic speed"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuG5E-i3ewqO7GWZ7Ahc2gcK6i25YS9E7DXTam-_1Vw4MNeJMYoMCA9p-LdJHqKOuxZmlM6XK30qnXx5mpVmKxUFGnkSzsyXg71LhSiVKGXjA44vxZ-PcTG2nQyqGsedueP2OXFkYH9TbPz0-68ypQDaFnKkWZ8Qt6W6FKLdiN8y6_cc9tQCd6mCsLjDd6fNvK7DNX_Anb93AJawUU4ObWsLOT3mV9a97bfd2uTH_v90-qYOEzk1lTF2ZCmuONBAAqGXonYz9TFLA"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-transparent"></div>
      </div>
      <div className="container mx-auto px-8 relative z-10">
        <div className="max-w-4xl">
          <span className="inline-block px-4 py-1 bg-primary-container text-on-primary-container text-xs font-headline font-bold tracking-widest uppercase mb-6 rounded-sm">
            Velocity Meets Vision
          </span>
          <h1 className="text-7xl md:text-9xl font-headline font-black tracking-tighter leading-[0.9] text-on-surface mb-8 uppercase max-w-[min-content] md:max-w-2xl">
            WE BUILD <span className="text-primary">SKYWAVE</span> MOMENTUM.
          </h1>
          <p className="text-xl md:text-2xl text-secondary max-w-2xl mb-12 leading-relaxed">
            A full-service digital marketing agency focused on scaling brands through high-impact strategy and unyielding creative execution.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-primary text-on-primary px-10 py-5 rounded-full font-headline font-bold uppercase tracking-widest hover:shadow-2xl transition-all duration-300">
              Start Your Growth
            </button>
            <button className="bg-surface-container-highest text-on-surface px-10 py-5 rounded-full font-headline font-bold uppercase tracking-widest hover:bg-surface-variant transition-all">
              View Work
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
