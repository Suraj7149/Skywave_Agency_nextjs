import React from "react";

const Process = () => {
  return (
    <section className="py-32 bg-primary-container text-on-primary-container">
      <div className="container mx-auto px-8">
        <h2 className="text-5xl font-headline font-black tracking-tighter uppercase mb-20 text-center leading-none">Discovery To Launch</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
          {/* Progress Line */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-[2px] bg-on-primary-container/20 z-0"></div>
          <div className="relative z-10 text-center">
            <div className="w-24 h-24 bg-on-primary-container text-primary-container rounded-full flex items-center justify-center mx-auto mb-8 font-headline font-black text-3xl">01</div>
            <h4 className="text-2xl font-headline font-bold mb-4">Discovery</h4>
            <p className="opacity-80">Deep dive into your brand DNA, market positioning, and core objectives.</p>
          </div>
          <div className="relative z-10 text-center">
            <div className="w-24 h-24 bg-on-primary-container text-primary-container rounded-full flex items-center justify-center mx-auto mb-8 font-headline font-black text-3xl">02</div>
            <h4 className="text-2xl font-headline font-bold mb-4">Design</h4>
            <p className="opacity-80">Crafting high-fidelity premium visuals and intuitive user interfaces.</p>
          </div>
          <div className="relative z-10 text-center">
            <div className="w-24 h-24 bg-on-primary-container text-primary-container rounded-full flex items-center justify-center mx-auto mb-8 font-headline font-black text-3xl">03</div>
            <h4 className="text-2xl font-headline font-bold mb-4">Develop</h4>
            <p className="opacity-80">Clean, scalable engineering built for speed and accessibility.</p>
          </div>
          <div className="relative z-10 text-center">
            <div className="w-24 h-24 bg-on-primary-container text-primary-container rounded-full flex items-center justify-center mx-auto mb-8 font-headline font-black text-3xl">04</div>
            <h4 className="text-2xl font-headline font-bold mb-4 uppercase">Optimize</h4>
            <p className="opacity-80">Continuous iteration and performance tracking for sustained growth.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
