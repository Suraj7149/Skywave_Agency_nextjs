import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Metrics from "@/components/Metrics";
import Capabilities from "@/components/Capabilities";
import WhySkywave from "@/components/WhySkywave";
import Portfolio from "@/components/Portfolio";
import Testimonial from "@/components/Testimonial";
import Process from "@/components/Process";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Skywave Technologies | High-Impact Digital Marketing Agency",
  description: "Skywave Technologies is a full-service digital marketing agency focused on scaling brands through high-impact strategy and creative execution.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main className="relative">
      <Navbar />

      <Hero />

      <Metrics />

      <Capabilities />

      {/* Partner Logos (Scrolling) */}
      {/* <section className="py-16 bg-surface-container-high overflow-hidden">
        <div className="flex whitespace-nowrap gap-20 items-center animate-scroll opacity-50 grayscale hover:grayscale-0 transition-all">
          <div className="text-2xl font-headline font-bold uppercase tracking-widest text-on-surface mx-12">Lumina</div>
          <div className="text-2xl font-headline font-bold uppercase tracking-widest text-on-surface mx-12">Vertex Systems</div>
          <div className="text-2xl font-headline font-bold uppercase tracking-widest text-on-surface mx-12">Apex Media</div>
          <div className="text-2xl font-headline font-bold uppercase tracking-widest text-on-surface mx-12">Novanet</div>
          <div className="text-2xl font-headline font-bold uppercase tracking-widest text-on-surface mx-12">Echoic</div>
          <div className="text-2xl font-headline font-bold uppercase tracking-widest text-on-surface mx-12">Foundry</div>
          <div className="text-2xl font-headline font-bold uppercase tracking-widest text-on-surface mx-12">Lumina</div>
          <div className="text-2xl font-headline font-bold uppercase tracking-widest text-on-surface mx-12">Vertex Systems</div>
          <div className="text-2xl font-headline font-bold uppercase tracking-widest text-on-surface mx-12">Lumina</div>
          <div className="text-2xl font-headline font-bold uppercase tracking-widest text-on-surface mx-12">Vertex Systems</div>
          <div className="text-2xl font-headline font-bold uppercase tracking-widest text-on-surface mx-12">Apex Media</div>
          <div className="text-2xl font-headline font-bold uppercase tracking-widest text-on-surface mx-12">Novanet</div>
        </div>
      </section> */}

      <WhySkywave />

      <Portfolio />

      <Testimonial />

      <Process />

      <Footer />
    </main>
  );
}
