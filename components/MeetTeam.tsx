import React from "react";

const team = [
  {
    name: "Vrushti Shah",
    role: "CEO & Founder",
    initials: "VS",
    bio: "Visionary leader driving Skywave's mission to engineer high-impact digital experiences for ambitious brands.",
    accent: "from-primary to-primary-container",
    delay: "0ms",
  },
  {
    name: "Suraj Gupta",
    role: "Chief Technology Officer",
    initials: "SG",
    bio: "Architect of scalable systems and high-performance web ecosystems. Turns complex engineering challenges into elegant solutions.",
    accent: "from-primary-container to-primary",
    delay: "80ms",
  },
  {
    name: "Kavita Shah",
    role: "Chief Marketing Officer",
    initials: "KS",
    bio: "Brand strategist and growth architect who transforms creative vision into measurable market momentum.",
    accent: "from-primary to-primary-container",
    delay: "160ms",
  },
  {
    name: "Hardik Trivedi",
    role: "Consultant Head",
    initials: "HT",
    bio: "Strategic advisor bridging client ambition and technical execution with precision and deep industry insight.",
    accent: "from-primary-container to-primary",
    delay: "240ms",
  },
];

const MeetTeam = () => {
  return (
    <section className="py-32 bg-surface-container-low overflow-hidden">
      <div className="container mx-auto px-8">

        {/* Section Header — Asymmetric editorial layout */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-[10px] font-headline font-bold tracking-[0.2em] uppercase mb-4 rounded-full">
              The People Behind The Work
            </span>
            <h2 className="text-5xl md:text-7xl font-headline font-black tracking-tighter uppercase leading-none">
              MEET THE <span className="text-primary italic">TEAM.</span>
            </h2>
          </div>
          <p className="text-secondary font-body leading-relaxed max-w-sm lg:mb-2 text-base">
            A small, elite crew of strategists, engineers, and creatives united by one obsession — building things that actually move the needle.
          </p>
        </div>

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <div
              key={member.name}
              className={`group relative bg-surface-container-lowest rounded-3xl p-8 flex flex-col gap-6 transition-all duration-500 hover:shadow-[0px_24px_48px_rgba(0,0,0,0.06)] ${
                /* Stagger vertical offset on desktop for kinetic feel */
                i % 2 !== 0 ? "lg:translate-y-8" : ""
              }`}
            >
              {/* Monogram Avatar */}
              <div className="relative w-fit">
                {/* Ambient glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${member.accent} blur-xl opacity-30 rounded-full scale-150 group-hover:opacity-50 transition-opacity duration-500`}
                />
                <div
                  className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${member.accent} flex items-center justify-center group-hover:scale-105 transition-transform duration-500`}
                >
                  <span className="text-2xl font-headline font-black text-on-primary tracking-tight">
                    {member.initials}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="flex flex-col gap-2 flex-1">
                <h3 className="text-xl font-headline font-black tracking-tight text-on-surface leading-tight">
                  {member.name}
                </h3>
                <span className="text-[10px] font-label font-bold uppercase tracking-[0.18em] text-primary">
                  {member.role}
                </span>
              </div>

              {/* Bio — revealed subtly */}
              <p className="text-secondary font-body text-sm leading-relaxed">
                {member.bio}
              </p>

              {/* Bottom decorative accent line — uses primary tint, not a border */}
              <div
                className={`h-0.5 w-8 bg-gradient-to-r ${member.accent} rounded-full group-hover:w-16 transition-all duration-500`}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MeetTeam;
