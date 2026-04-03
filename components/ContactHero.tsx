import React from "react";

const ContactHero = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-8 mb-24">
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-8">
          <span className="font-headline font-bold uppercase tracking-[0.2em] text-primary text-sm mb-4 block">Contact Skywave</span>
          <h1 className="font-headline font-black text-6xl md:text-8xl lg:text-9xl tracking-tighter leading-[0.9] text-on-surface mb-8">
            LET&apos;S SCALE <br />YOUR <span className="text-primary-container">VISION.</span>
          </h1>
        </div>
        <div className="col-span-12 lg:col-span-4 flex items-end">
          <p className="text-xl text-secondary leading-relaxed mb-4">
            We don&apos;t just run ads. We build high-velocity growth engines for brands that refuse to be quiet.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
