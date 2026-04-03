import React from "react";

const Testimonial = () => {
  return (
    <section className="py-32 bg-surface overflow-hidden">
      <div className="container mx-auto px-8">
        <div className="max-w-4xl mx-auto text-center">
          <span className="material-symbols-outlined text-primary text-6xl mb-8">
            format_quote
          </span>
          <h2 className="text-4xl md:text-5xl font-body font-bold leading-tight italic text-on-surface mb-12">
            &quot;Skywave didn&apos;t just give us a new website; they gave us a new trajectory. Our conversion rate increased by 40% within the first month of the re-launch.&quot;
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-16 rounded-full overflow-hidden">
              <img
                className="w-full h-full object-cover"
                alt="portrait of a confident business executive in professional attire looking at the camera with a friendly expression"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfDxrsg4HTuoCytvsX7Mkf7_q-M2e8Z6pHCtQ_WRKaiImmVSjPg6tvTCojDHg9OEJ7d6cNhLQVc8XiQ1eIgQ4v6R_5JZiK0dmBi2DK4g9qDVukEWJ-BjIUnQgs8a-qyJF5vbSVIx7gal6awksQxa_5LZnicLQpHd3zG9hAJFVhAUHG-ME1WRRH6tMs7tasllrV-iFHyvtXf7u1Rq0lTKGNlawZZ5gc2Ws66oKW2HquA45ng7vTBVem4A4jIgDKd9NIxst4nOc8ENo"
              />
            </div>
            <div className="text-left">
              <div className="font-headline font-bold text-lg leading-tight">Marcus Chen</div>
              <div className="text-sm font-label uppercase tracking-widest text-secondary">
                CEO, Vertex Systems
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
