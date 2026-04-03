import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-zinc-50 w-full pt-24 pb-12 border-t border-zinc-200/20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-8 max-w-[1440px] mx-auto w-full">
        <div className="col-span-1 md:col-span-1">
          <div className="text-xl font-black tracking-tighter text-zinc-900 font-headline mb-6 uppercase leading-none">Skywave Technologies</div>
          <p className="text-zinc-500 font-['Plus_Jakarta_Sans'] text-sm leading-relaxed mb-6">
            Elevating brands through strategic precision and high-impact digital storytelling.
          </p>
        </div>
        <div>
          <h5 className="font-headline font-bold text-sm uppercase tracking-widest mb-6">Menu</h5>
          <ul className="space-y-4">
            <li><Link className="text-zinc-500 dark:text-zinc-400 font-['Plus_Jakarta_Sans'] text-sm hover:text-orange-500 transition-colors" href="/services">Services</Link></li>
            <li><Link className="text-zinc-500 dark:text-zinc-400 font-['Plus_Jakarta_Sans'] text-sm hover:text-orange-500 transition-colors" href="/portfolio">Portfolio</Link></li>
            <li><Link className="text-zinc-500 dark:text-zinc-400 font-['Plus_Jakarta_Sans'] text-sm hover:text-orange-500 transition-colors" href="#">Case Studies</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="font-headline font-bold text-sm uppercase tracking-widest mb-6">Connect</h5>
          <ul className="space-y-4">
            <li><Link className="text-zinc-500 dark:text-zinc-400 font-['Plus_Jakarta_Sans'] text-sm hover:text-orange-500 transition-colors" href="#">LinkedIn</Link></li>
            <li><Link className="text-zinc-500 dark:text-zinc-400 font-['Plus_Jakarta_Sans'] text-sm hover:text-orange-500 transition-colors" href="#">Twitter</Link></li>
            <li><Link className="text-zinc-500 dark:text-zinc-400 font-['Plus_Jakarta_Sans'] text-sm hover:text-orange-500 transition-colors" href="#">Instagram</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="font-headline font-bold text-sm uppercase tracking-widest mb-6">Legal</h5>
          <ul className="space-y-4">
            <li><Link className="text-zinc-500 dark:text-zinc-400 font-['Plus_Jakarta_Sans'] text-sm hover:text-orange-500 transition-colors" href="#">Privacy Policy</Link></li>
            <li><Link className="text-zinc-500 dark:text-zinc-400 font-['Plus_Jakarta_Sans'] text-sm hover:text-orange-500 transition-colors" href="#">Terms of Service</Link></li>
          </ul>
        </div>
      </div>
      <div className="px-8 max-w-[1440px] mx-auto w-full mt-24 border-t border-zinc-200/20 pt-8">
        <p className="text-zinc-500 dark:text-zinc-400 font-['Plus_Jakarta_Sans'] text-sm leading-relaxed">
          © {new Date().getFullYear()} Skywave Technologies. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
