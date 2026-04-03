import React from "react";
import Link from "next/link";

const Portfolio = () => {
  return (
    <section className="py-32 bg-surface-container-low">
      <div className="container mx-auto px-8">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-6xl font-headline font-black tracking-tighter uppercase leading-none">Built For Impact</h2>
          <Link className="text-primary font-headline font-bold uppercase tracking-widest border-b-2 border-primary pb-1" href="/portfolio">
            All Case Studies
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="group cursor-pointer">
            <div className="overflow-hidden rounded-xl mb-6 aspect-video">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt="minimalist digital dashboard display showing high-growth analytics with clean sans-serif typography and orange accent colors"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDDHNJsR8IaIBJ5erMazkEHAqzKL_FMxAJDOZskqvSgRL6tw4ANLRwZgUwVSfYab653Wax8NrRAGsx6ka2GMrSykhQVt-gkWPklE0FEYIG31Nl0Y5Fk08mYyQPLQ91i2rMcoMI8YBn2E4R-mvH_haQewSJRcQ8nu7Bg_lDTwkUlvQMpqBWVbdfRK3jjaj_fY9ImqwlbJiXXBsRZFNflZD3lQwViFktFgGbn81Ces8Br4rLmxU-cybWcg3uqQIG7afDElfDToqicsE"
              />
            </div>
            <h3 className="text-3xl font-headline font-bold tracking-tight mb-2">Novanet Rebrand</h3>
            <p className="text-sm font-headline uppercase tracking-widest text-secondary">Strategic Positioning • Web Architecture</p>
          </div>
          <div className="group cursor-pointer translate-y-12">
            <div className="overflow-hidden rounded-xl mb-6 aspect-video">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt="interior of a modern high-tech office lobby with sleek furniture and large digital displays reflecting architectural precision"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVozTljpuhtFy3MCdEfPsxPKkATHK5OZA5i6oWOD79u9kfLts7mAjFNrZPN2YKOcHQKHqI9MHHgD4BtD1ZENmJZ_vhaB-osVwYaDtsm2RCuznvse2rB1U7KiNjsvJMjAwf5NFyD24TMJUGRDD4m4QDTzkGaaU99tz7OAvN7ZpetterMlR-N18Sgm20NCZJy7s5BoLJ-Zh78Fv66j6BtqknGzcV58BI-Zb4Ss-2xnqPLCCCQq-uXzFJgukeNO8qpMR79URrXr9GFhM"
              />
            </div>
            <h3 className="text-3xl font-headline font-bold tracking-tight mb-2">Vertex Systems Launch</h3>
            <p className="text-sm font-headline uppercase tracking-widest text-secondary">Campaign Strategy • Lead Generation</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
