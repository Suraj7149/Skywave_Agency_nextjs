import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-xl border-b border-zinc-100">
      <div className="flex justify-between items-center px-8 py-6 max-w-[1440px] mx-auto w-full">
        <Link href="/" className="text-2xl font-black tracking-tighter text-zinc-900 font-headline uppercase leading-none">
          Skywave <span className="text-primary">Technologies</span>
        </Link>
        <div className="hidden md:flex gap-8 items-center">
          <Link className="font-['Inter'] font-bold uppercase tracking-tighter text-zinc-600 hover:text-zinc-900 transition-colors" href="/">
            Home
          </Link>
          <Link className="font-['Inter'] font-bold uppercase tracking-tighter text-zinc-600 hover:text-zinc-900 transition-colors" href="/services">
            Services
          </Link>
          <Link className="font-['Inter'] font-bold uppercase tracking-tighter text-zinc-600 hover:text-zinc-900 transition-colors" href="/portfolio">
            Portfolio
          </Link>
          <Link className="font-['Inter'] font-bold uppercase tracking-tighter text-zinc-600 hover:text-zinc-900 transition-colors" href="/contact">
            Contact
          </Link>
        </div>
        <button className="bg-primary-container text-on-primary-container px-6 py-3 rounded-full font-headline font-bold uppercase tracking-tighter hover:opacity-80 transition-all duration-300 active:scale-95">
          Get a Quote
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
