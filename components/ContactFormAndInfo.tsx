"use client";

import React from "react";

const ContactFormAndInfo = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Contact Form Card */}
        <div className="lg:col-span-7 bg-surface-container-lowest p-8 md:p-12 rounded-xl shadow-none">
          <h2 className="font-headline font-bold text-3xl mb-12 tracking-tight">Project Inquiry</h2>
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="font-headline font-bold text-xs uppercase tracking-widest text-secondary">Full Name</label>
                <input className="w-full bg-surface-container-low border-none rounded-lg p-4 focus:ring-2 focus:ring-primary/40 focus:bg-surface-container-lowest transition-all" placeholder="John Doe" type="text" />
              </div>
              <div className="space-y-2">
                <label className="font-headline font-bold text-xs uppercase tracking-widest text-secondary">Email Address</label>
                <input className="w-full bg-surface-container-low border-none rounded-lg p-4 focus:ring-2 focus:ring-primary/40 focus:bg-surface-container-lowest transition-all" placeholder="john@company.com" type="email" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="font-headline font-bold text-xs uppercase tracking-widest text-secondary">Service Interest</label>
              <select className="w-full bg-surface-container-low border-none rounded-lg p-4 focus:ring-2 focus:ring-primary/40 focus:bg-surface-container-lowest transition-all appearance-none">
                <option>Growth Strategy</option>
                <option>Paid Acquisition</option>
                <option>Content Production</option>
                <option>Brand Identity</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="font-headline font-bold text-xs uppercase tracking-widest text-secondary">Project Details</label>
              <textarea className="w-full bg-surface-container-low border-none rounded-lg p-4 focus:ring-2 focus:ring-primary/40 focus:bg-surface-container-lowest transition-all" placeholder="Tell us about your goals..." rows={5}></textarea>
            </div>
            <button className="w-full text-on-primary py-5 rounded-full font-headline font-black uppercase tracking-tighter text-lg hover:shadow-xl hover:shadow-primary/20 transition-all active:scale-[0.98]" style={{ background: "linear-gradient(135deg, #a73a00 0%, #ff5c00 100%)" }} type="submit">
              Submit Proposal
            </button>
            <p className="text-center text-xs text-secondary font-medium">Average response time: 4 business hours.</p>
          </form>
        </div>

        {/* Contact Info & Map Column */}
        <div className="lg:col-span-5 space-y-6">
          {/* Contact Details Card */}
          <div className="bg-primary-container p-8 rounded-xl text-on-primary-container">
            <h3 className="font-headline font-bold text-2xl mb-8 tracking-tight">Direct Access</h3>
            <div className="space-y-8">
              {/* <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-3xl">location_on</span>
                <div>
                  <p className="font-headline font-bold uppercase tracking-wider text-xs opacity-70 mb-1">HQ Location</p>
                  <p className="text-lg font-bold leading-tight">404 Velocity Drive<br />Creative District, NY 10013</p>
                </div>
              </div> */}
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-3xl">alternate_email</span>
                <div>
                  <p className="font-headline font-bold uppercase tracking-wider text-xs opacity-70 mb-1">Email Us</p>
                  <p className="text-lg font-bold">hello@skywave.agency</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-3xl">call</span>
                <div>
                  <p className="font-headline font-bold uppercase tracking-wider text-xs opacity-70 mb-1">Call HQ</p>
                  <p className="text-lg font-bold">+1 (555) 092-4000</p>
                </div>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-on-primary-container/10 flex gap-6">
              <a className="hover:opacity-60 transition-opacity" href="#"><span className="material-symbols-outlined">brand_awareness</span></a>
              <a className="hover:opacity-60 transition-opacity" href="#"><span className="material-symbols-outlined">public</span></a>
              <a className="hover:opacity-60 transition-opacity" href="#"><span className="material-symbols-outlined">groups</span></a>
            </div>
          </div>

          {/* Map Card */}
          <div className="relative h-[400px] rounded-xl overflow-hidden bg-surface-container-high group">
            <div className="absolute inset-0 bg-zinc-900/10 z-10 pointer-events-none group-hover:bg-transparent transition-colors duration-500"></div>
            <img
              className="w-full h-full object-cover grayscale brightness-90"
              alt="Stylized monochromatic map of New York City streets with minimalist orange accents for location markers"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBv78LjexyV_8U06DWBiGWtERm5MDjtXP1g5urECRDLWLBg-Thym7wegwPc3MoqobB42Ctua7mvcEiK9QtB1vWeFNFYpK0HpGFCgsD925ytHDuSyJyiw0aaKlEbR3HLwIj6WiBwTZNH3Brs2Z8-wypOz7LopCZz3MWA8T12fOTItKBLsWqB1RTWxbMDxQ3XvWpqm1aOeO9wlK7bEaCJoIe8T8gCGY45Y4ySnAz9UOU3eXa-lAKdnf4f2ufiqH25e4FnENJLsKi8ST4"
            />
            <div className="absolute bottom-6 left-6 z-20 bg-white p-4 rounded-lg shadow-xl">
              <p className="font-headline font-bold text-sm text-zinc-900">Skywave Technologies</p>
              <p className="text-xs text-zinc-500">Click to expand map view</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormAndInfo;
