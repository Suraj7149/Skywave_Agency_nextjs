import React from "react";

const Metrics = () => {
  return (
    <section className="bg-surface-container-low py-24">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 border-l border-outline-variant/20">
          <div className="pl-8">
            <div className="text-5xl font-headline font-black tracking-tighter text-primary mb-2">30+</div>
            <div className="text-sm font-label uppercase tracking-widest text-secondary">Projects completed</div>
          </div>
          <div className="pl-8">
            <div className="text-5xl font-headline font-black tracking-tighter text-primary mb-2">5+</div>
            <div className="text-sm font-label uppercase tracking-widest text-secondary">Years of experience</div>
          </div>
          <div className="pl-8">
            <div className="text-5xl font-headline font-black tracking-tighter text-primary mb-2">100%</div>
            <div className="text-sm font-label uppercase tracking-widest text-secondary">Client Satisfaction</div>
          </div>
          <div className="pl-8">
            <div className="text-5xl font-headline font-black tracking-tighter text-primary mb-2">150+</div>
            <div className="text-sm font-label uppercase tracking-widest text-secondary">Happy Clients</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Metrics;
