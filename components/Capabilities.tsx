import React from "react";

const Capabilities = () => {
  return (
    <section className="py-32 bg-surface">
      <div className="container mx-auto px-8">
        <div className="mb-20">
          <h2 className="text-5xl font-headline font-black tracking-tighter uppercase mb-4">Core Capabilities</h2>
          <div className="w-24 h-2 bg-primary"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="group bg-surface-container-lowest p-10 rounded-xl transition-all hover:bg-primary-container hover:translate-y-[-8px]">
            <span className="material-symbols-outlined text-4xl mb-6 text-primary group-hover:text-on-primary-container">
              hub
            </span>
            <h3 className="text-2xl font-headline font-bold mb-4 group-hover:text-on-primary-container">Social Media Marketing</h3>
            <p className="text-secondary group-hover:text-on-primary-container/80 leading-relaxed">
              Engineered engagement strategies that transform passive scrollers into passionate brand advocates.
            </p>
          </div>
          {/* Service 2 */}
          <div className="group bg-surface-container-lowest p-10 rounded-xl transition-all hover:bg-primary-container hover:translate-y-[-8px]">
            <span className="material-symbols-outlined text-4xl mb-6 text-primary group-hover:text-on-primary-container">
              article
            </span>
            <h3 className="text-2xl font-headline font-bold mb-4 group-hover:text-on-primary-container">Content Marketing</h3>
            <p className="text-secondary group-hover:text-on-primary-container/80 leading-relaxed">
              Premium-grade storytelling that builds authority and drives organic growth through value-first narratives.
            </p>
          </div>
          {/* Service 3 */}
          <div className="group bg-surface-container-lowest p-10 rounded-xl transition-all hover:bg-primary-container hover:translate-y-[-8px]">
            <span className="material-symbols-outlined text-4xl mb-6 text-primary group-hover:text-on-primary-container">
              web
            </span>
            <h3 className="text-2xl font-headline font-bold mb-4 group-hover:text-on-primary-container">Web Design &amp; Dev</h3>
            <p className="text-secondary group-hover:text-on-primary-container/80 leading-relaxed">
              High-velocity digital experiences optimized for conversion and built on modern, scalable architectures.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
