import React from "react";
import Link from "next/link";

const Portfolio = () => {
  return (
    <section className="py-32 bg-surface-container-low">
      <div className="container mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-8 mb-12 md:mb-16">
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-headline font-black tracking-tighter uppercase leading-[0.9] max-w-full">
            Built For Impact
          </h2>
          <Link className="text-primary font-headline font-bold uppercase tracking-widest border-b-2 border-primary pb-1 shrink-0 text-sm md:text-base mt-2 md:mt-0" href="/portfolio">
            All Case Studies
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="group cursor-pointer">
            <div className="overflow-hidden rounded-xl mb-6 aspect-video">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 object-top"
                alt="Shree Hari project showcasing lead generation capabilities"
                src="/shree_hari_industrial_project.png"
              />
            </div>
            <h3 className="text-3xl font-headline font-bold tracking-tight mb-2">Shree Hari</h3>
            <p className="text-sm font-headline uppercase tracking-widest text-secondary">Lead Generation</p>
          </div>
          <div className="group cursor-pointer translate-y-12">
            <div className="overflow-hidden rounded-xl mb-6 aspect-video">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 object-top"
                alt="Dilli Restaurant modern web application interface"
                src="/Dilli_restaurant_project.png"
              />
            </div>
            <h3 className="text-3xl font-headline font-bold tracking-tight mb-2">Dilli Restaurant</h3>
            <p className="text-sm font-headline uppercase tracking-widest text-secondary">Web Application</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
