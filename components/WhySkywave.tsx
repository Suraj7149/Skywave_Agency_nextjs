import React from "react";

const WhySkywave = () => {
  return (
    <section className="py-32 bg-surface overflow-hidden">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-primary-fixed opacity-30 rounded-full blur-3xl"></div>
            <img
              className="rounded-xl relative z-10 w-full shadow-2xl"
              alt="abstract architectural close-up with sharp angles and dramatic shadows symbolizing structural integrity and branding precision"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAp2gujUJ7cWnQgw1VjvAsYhbOJZcj3CY8ttqC5vC8lO9Upt0HktvIqLx0_EW_Jzoe3n9aoac4yIUv9tsl933jdROunGQOwnYK58LXzvHxmunmJmTRjKFWPeQ-fhQbWi5Ycaaxm2om9SLTxS3fUAyYTezX7XQlucSjys8gAjflBvhwpp7R3lu8HtCudJRgA0LCJYCJ90Nw2BRDQGpftsk5eM9dPGGsEQlxMreQkTEk9tN57GidgU2_a-OYR4NCRkSonEZ8FNJdP7DE"
            />
          </div>
          <div>
            <h2 className="text-5xl font-headline font-black tracking-tighter uppercase mb-8 leading-tight">Why Skywave?</h2>
            <div className="space-y-12">
              <div className="flex gap-6">
                <span className="material-symbols-outlined text-primary text-3xl shrink-0">
                  verified
                </span>
                <div>
                  <h4 className="text-xl font-headline font-bold mb-2">Cohesive Branding</h4>
                  <p className="text-secondary leading-relaxed">
                    We don&apos;t just design logos; we build living identity systems that resonate across every touchpoint.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <span className="material-symbols-outlined text-primary text-3xl shrink-0">
                  account_tree
                </span>
                <div>
                  <h4 className="text-xl font-headline font-bold mb-2">Scalable Systems</h4>
                  <p className="text-secondary leading-relaxed">
                    Our workflows are built to handle rapid growth without compromising on quality or turnaround.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <span className="material-symbols-outlined text-primary text-3xl shrink-0">
                  lock
                </span>
                <div>
                  <h4 className="text-xl font-headline font-bold mb-2">Secure Transactions</h4>
                  <p className="text-secondary leading-relaxed">
                    Enterprise-grade security is baked into every technical deployment we manage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySkywave;
