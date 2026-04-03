import React from "react";

const ContactCTA = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-8 mt-24">
      <div className="bg-surface-container-low rounded-xl p-12 text-center">
        <h3 className="font-headline font-black text-4xl mb-6 tracking-tighter">PREFER A QUICK CHAT?</h3>
        <p className="text-secondary max-w-lg mx-auto mb-8 font-medium">
          Book a 15-minute strategy audit with our lead consultant to see if we&apos;re the right fit for your growth trajectory.
        </p>
        <button className="bg-on-surface text-surface px-10 py-4 rounded-full font-headline font-bold uppercase tracking-tighter hover:bg-primary transition-colors">
          Book Discovery Call
        </button>
      </div>
    </section>
  );
};

export default ContactCTA;
