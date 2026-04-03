import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactHero from "@/components/ContactHero";
import ContactFormAndInfo from "@/components/ContactFormAndInfo";
import ContactCTA from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "Contact Skywave Technologies | Get in touch",
  description: "Contact Skywave Technologies to scale your vision. We build high-velocity growth engines for brands.",
  alternates: {
    canonical: "/contact",
  },
};

export default function Contact() {
  return (
    <main className="relative">
      <Navbar />
      
      <div className="pt-32 pb-24">
        <ContactHero />
        <ContactFormAndInfo />
        <ContactCTA />
      </div>
      
      <Footer />
    </main>
  );
}
