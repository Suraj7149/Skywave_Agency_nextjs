"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-xl border-b border-zinc-100">
        <div className="flex justify-between items-center px-8 py-6 max-w-[1640px] mx-auto w-full">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-black tracking-tighter text-zinc-900 font-headline uppercase leading-none"
          >
            Skywave <span className="text-primary">Technologies</span>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-['Inter'] font-bold uppercase tracking-tighter transition-colors ${
                  pathname === link.href
                    ? "text-primary"
                    : "text-zinc-600 hover:text-zinc-900"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA (kept for desktop, hidden on mobile) */}
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center bg-primary-container text-on-primary-container px-6 py-3 rounded-full font-headline font-bold uppercase tracking-tighter hover:opacity-80 transition-all duration-300 active:scale-95"
          >
            Get a Quote
          </Link>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[6px] group"
          >
            <span
              className={`block h-[2px] bg-zinc-900 transition-all duration-300 origin-center ${
                menuOpen ? "w-6 translate-y-[8px] rotate-45" : "w-6"
              }`}
            />
            <span
              className={`block h-[2px] bg-zinc-900 transition-all duration-300 ${
                menuOpen ? "w-0 opacity-0" : "w-4"
              }`}
            />
            <span
              className={`block h-[2px] bg-zinc-900 transition-all duration-300 origin-center ${
                menuOpen ? "w-6 -translate-y-[8px] -rotate-45" : "w-6"
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile full-screen menu overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ease-in-out ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-zinc-900/40 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />

        {/* Slide-in panel */}
        <div
          className={`absolute top-0 right-0 h-full w-[80vw] max-w-[340px] bg-surface-container-lowest shadow-2xl flex flex-col transition-transform duration-500 ease-in-out ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Panel header */}
          <div className="flex items-center justify-between px-7 py-6 border-b border-zinc-100">
            <span className="text-sm font-headline font-black uppercase tracking-widest text-zinc-400">
              Navigation
            </span>
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-zinc-100 hover:bg-primary-container hover:text-on-primary-container transition-colors duration-200"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M2 2L14 14M14 2L2 14"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          {/* Nav items */}
          <nav className="flex flex-col px-7 py-10 gap-2 flex-1">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                style={{ transitionDelay: menuOpen ? `${i * 60 + 80}ms` : "0ms" }}
                className={`group flex items-center justify-between py-4 border-b border-zinc-100 font-headline font-black uppercase tracking-tighter text-2xl transition-all duration-300 ${
                  menuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"
                } ${
                  pathname === link.href
                    ? "text-primary"
                    : "text-zinc-900 hover:text-primary"
                }`}
              >
                {link.label}
                <svg
                  className={`w-5 h-5 transition-transform duration-200 group-hover:translate-x-1 ${
                    pathname === link.href ? "text-primary" : "text-zinc-300 group-hover:text-primary"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </nav>

          {/* CTA at bottom */}
          <div className="px-7 pb-10">
            <Link
              href="/contact"
              className="block w-full text-center bg-primary-container text-on-primary-container px-6 py-4 rounded-full font-headline font-black uppercase tracking-tighter text-base hover:opacity-90 active:scale-95 transition-all duration-300"
            >
              Get a Quote
            </Link>
            <p className="text-center text-xs text-zinc-400 font-body mt-4 tracking-wide">
              Skywave Technologies © {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
