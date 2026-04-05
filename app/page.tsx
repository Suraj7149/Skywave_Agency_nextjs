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

      <WhySkywave />

      <Portfolio />

      <Testimonial />

      <Process />

      <Footer />
    </main>
  );
}
