import React from "react";
import { Bot, FileText, LayoutGrid } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Social Media Marketing",
      description: "Engineered engagement strategies that transform passive scrollers into passionate brand advocates.",
      icon: <Bot className="w-12 h-12" />,
    },
    {
      title: "Content Marketing",
      description: "Premium-grade storytelling that builds authority and drives organic growth through value-first narratives.",
      icon: <FileText className="w-12 h-12" />,
    },
    {
      title: "Web Design & Dev",
      description: "High-velocity digital experiences optimized for conversion and built on modern, scalable architectures.",
      icon: <LayoutGrid className="w-12 h-12" />,
    },
  ];

  return (
    <section id="services" className="py-48 bg-surface space-y-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-24 space-y-6">
          <span className="text-[10px] font-headline font-bold text-primary-accent tracking-[0.2em] uppercase">Core Capabilities</span>
          <h2 className="text-5xl md:text-7xl font-headline font-black tracking-tighter uppercase max-w-2xl leading-[0.9]">
            Strategic Precision. <br />
            <span className="text-secondary/20">Creative Mastery.</span>
          </h2>
          <div className="w-24 h-2 bg-primary-accent rounded-full mb-12"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white p-12 rounded-3xl transition-all duration-500 hover:bg-primary-accent hover:translate-y-[-12px] hover:shadow-2xl hover:shadow-primary-accent/20 border border-surface-high/50"
            >
              <div className="text-primary-accent group-hover:text-white transition-colors duration-300 mb-10">
                {service.icon}
              </div>
              <h3 className="text-2xl md:text-3xl font-headline font-bold mb-6 group-hover:text-white transition-colors duration-300 tracking-tighter">
                {service.title}
              </h3>
              <p className="text-secondary group-hover:text-white/80 leading-relaxed font-body transition-colors duration-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
