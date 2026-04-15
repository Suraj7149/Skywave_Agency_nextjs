import React from "react";

const testimonials = [
  {
    company: "Shree Hari Industries",
    quote:
      "Skywave didn't just give us a new website; they gave us a new trajectory. Our conversion rate increased by 40% within the first month of the re-launch.",
  },
  {
    company: "Dilli Restaurant",
    quote:
      "Working with Skywave was a game-changer for our brand. Our online reservations doubled and the feedback from customers on the new experience has been phenomenal.",
  },
  {
    company: "MNC Corp",
    quote:
      "The team at Skywave understood our vision from day one. They delivered a polished, high-performing digital presence that our entire organization is proud of.",
  },
];

const Testimonial = () => {
  return (
    <section className="py-32 bg-surface overflow-hidden">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {testimonials.map(({ company, quote }) => (
            <div
              key={company}
              className="flex flex-col items-center text-center"
            >
              <span className="material-symbols-outlined text-primary text-6xl mb-8">
                format_quote
              </span>
              <h2 className="text-xl md:text-2xl font-body font-bold leading-tight italic text-on-surface mb-8 flex-1">
                &quot;{quote}&quot;
              </h2>
              <div className="font-label uppercase tracking-widest text-secondary text-sm">
                {company}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
