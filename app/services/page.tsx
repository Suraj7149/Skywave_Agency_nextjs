import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | Skywave Technologies",
  description: "We architect high-velocity digital ecosystems that transform passive scrolling into brand obsession.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <main className="relative selection:bg-primary-container selection:text-on-primary-container">
      <Navbar />

      <div className="pt-24">
        {/* Hero Section */}
        <section className="relative min-h-[819px] flex items-center px-8 max-w-[1440px] mx-auto overflow-hidden">
          <div className="grid grid-cols-12 gap-8 w-full">
            <div className="col-span-12 lg:col-span-8 z-10">
              <span className="inline-block bg-primary-container text-on-primary-container px-4 py-1 rounded-full text-xs font-label font-bold tracking-widest uppercase mb-6">
                Expertise 01
              </span>
              <h1 className="text-7xl md:text-9xl font-headline font-black tracking-tighter text-on-surface leading-[0.85] mb-8">
                SOCIAL <br /> MEDIA <br /> <span className="text-primary italic">STRATEGY.</span>
              </h1>
              <p className="text-xl md:text-2xl text-on-surface-variant max-w-2xl font-body leading-relaxed mb-10">
                We don't just post content. We architect high-velocity digital ecosystems that transform passive scrolling into brand obsession.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-primary text-on-primary px-10 py-5 rounded-full font-headline font-bold uppercase tracking-widest text-sm hover:opacity-90 transition-all active:scale-95 shadow-xl shadow-primary/20">
                  Launch Project
                </button>
                <button className="bg-surface-container-highest text-on-surface px-10 py-5 rounded-full font-headline font-bold uppercase tracking-widest text-sm hover:bg-surface-container-high transition-all">
                  View Roadmap
                </button>
              </div>
            </div>
          </div>
          {/* Decorative image element */}
          <div className="absolute right-[-10%] top-[20%] w-[50%] h-[70%] hidden lg:block opacity-20">
            <img
              className="w-full h-full object-cover rounded-3xl rotate-6 grayscale hover:grayscale-0 transition-all duration-700"
              alt="Abstract 3D digital spheres and fluid orange geometric shapes floating in a clean white studio space with soft shadows"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJcDoUJ4D6Dc_QQyP6CdUKNrfQJ4MEgnPyMHNpJtytXEZO10iVa6UFGc9WFuvHmJN-nDgUZ259JvpuOjd9aAT_2l5vpH1UaOCLll6Z9AwPwM9alSW1HmTsQ5nbsAuLZxxkLfKzWiFKyrEOfUaAVGpO1SWY0yo4nHUyZKfFQE-vCSitkGSn2JZRS6oaU8WWViQfGaGASsIcl9YQXkrjstGvLzD2m4I9uO7D2muxcSGRT7R0wZFyXh_2VElzy3kGObjvbAja8EVcZqk"
            />
          </div>
        </section>

        {/* Deep Dive Section */}
        <section className="bg-surface-container-low py-32 px-8">
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-start">
              <div>
                <h2 className="text-4xl font-headline font-extrabold tracking-tight mb-8">
                  The Skywave <span className="text-primary">Methodology.</span>
                </h2>
                <div className="space-y-12">
                  <div className="group">
                    <span className="text-primary-container font-headline font-black text-5xl opacity-30 group-hover:opacity-100 transition-opacity">
                      01
                    </span>
                    <h3 className="text-2xl font-bold mt-2 mb-4">Algorithmic Auditing</h3>
                    <p className="text-on-surface-variant leading-relaxed">
                      We reverse-engineer platform behaviors to ensure your message hits the peak of organic reach before we ever spend a dollar on promotion.
                    </p>
                  </div>
                  <div className="group border-t border-outline-variant/20 pt-8">
                    <span className="text-primary-container font-headline font-black text-5xl opacity-30 group-hover:opacity-100 transition-opacity">
                      02
                    </span>
                    <h3 className="text-2xl font-bold mt-2 mb-4">Strategic Content Pillars</h3>
                    <p className="text-on-surface-variant leading-relaxed">
                      Static posts are dead. We build thematic content series that behave like premium digital magazines, keeping users engaged across weeks, not seconds.
                    </p>
                  </div>
                  <div className="group border-t border-outline-variant/20 pt-8">
                    <span className="text-primary-container font-headline font-black text-5xl opacity-30 group-hover:opacity-100 transition-opacity">
                      03
                    </span>
                    <h3 className="text-2xl font-bold mt-2 mb-4">Community Engineering</h3>
                    <p className="text-on-surface-variant leading-relaxed">
                      Beyond community management. We foster high-intent subcultures around your brand through strategic interaction and influencer synergy.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/5] bg-surface-container-lowest rounded-2xl overflow-hidden shadow-2xl relative z-10">
                  <img
                    className="w-full h-full object-cover"
                    alt="A professional creative studio setting with large monitors showing vibrant social media analytics and colorful aesthetic layouts"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmGw9VkoWZbStTidSiUqUaMxj8M6yuH2yCKKBLTyh8CzikM9S6HnZIg_C2oIC05tsNMWtHPRcI9ef1WYBhFMkt0FImGtJIWA0d92MJaOcIgMGNpN4R_1n-Y3y3fp21ZvyKP1pDX-vNTr4_ilEuvVwG12KhBx4hzk5LWax9vki0ESiY6CMclI3HCpC-ibbZoIuvZUuacARq08j09EEBFFMaLt-8H-yPJgnjxevIeHaGnlKz6KxOIRX0URTEKXeoSzXdejmkXT4sulU"
                  />
                </div>
                <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-primary-container/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 bg-primary p-8 rounded-2xl shadow-xl text-on-primary max-w-xs">
                  <p className="text-3xl font-headline font-black tracking-tighter mb-2">420%</p>
                  <p className="text-sm font-label font-bold uppercase tracking-widest opacity-80">
                    Average Increase in Core Engagement
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies - Bento Grid */}
        <section className="py-32 px-8 max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <h2 className="text-5xl font-headline font-black tracking-tighter uppercase leading-none mb-6">
                PROVEN <br /> VELOCITY.
              </h2>
              <p className="text-on-surface-variant">
                Real-world impact across competitive sectors. From luxury retail to high-growth SaaS.
              </p>
            </div>
            <Link
              className="text-primary font-headline font-bold uppercase tracking-widest text-xs border-b-2 border-primary pb-1 hover:opacity-70 transition-opacity"
              href="/portfolio"
            >
              View All Work
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-8 h-auto md:h-[800px]">
            <div className="md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-2xl bg-surface-container-high">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                alt="Minimalist modern architecture building with clean lines and sharp shadows under a bright clear sky"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVhWoJLsZ0NKyvHJrVsxDLYL86uv_Ec0oIlnl8VxLcYt_UCEm5sXOQpg0CvxxZiwHF34qnk72FX85QJEgIFoWSoVgrzIB9wciHiqGSqYcE6vpWUNPrVXpWcnawFtpKcPGHcpR51ofSApGzPKDbsC4dyJ8glU2lg3UjO4Gf60hf3ibPQB1ZcbmgG7FvxdW1aTTRjuiaw_MbZBayyBsxtHvfq_-rlccjI2o-I5DjwAAIjD-Ee_uf4BChjtWDRhOahrlTl-0mDIa3EB0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-12 flex flex-col justify-end">
                <span className="text-primary font-bold tracking-widest text-xs mb-4">LIFESTYLE / TECH</span>
                <h3 className="text-4xl font-headline font-black text-white tracking-tighter mb-6">
                  NEO-LIVING CAMPAIGN
                </h3>
                <p className="text-white/70 max-w-md">
                  24M+ Impressions and a 15% conversion rate for the largest sustainable housing rollout in the EU.
                </p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl bg-surface-container-high">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                alt="High-end white luxury watch on a minimalist background with elegant cinematic lighting"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBejNwX7O7CLkxyqY9q94kGDMCPAuqAaJq92hjUYc05y7gSgC5z2we2gobB_vEbB-_KpngF755N-XFyH4hRrXJDqiFSoKgOkr1CH6Dp7wW_nVkYvF5mHbbbNvfOcLmyitpOCMK5-DtSQ3UXqPkgaBa6YeKZbAIvemfUAtZ5crpk14n-Cl1HL_ufwBJRPIcItYPOfHcz6RsmKXkneE4Q8q5z-OxVLM-ckhO9vo8GwCfm6vQz3MjsTONIjJe1dSkKlAkUhuuAKue2bB8"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-8 flex flex-col justify-end">
                <h4 className="text-2xl font-headline font-black text-white tracking-tighter">AETHER WATCHES</h4>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl bg-surface-container-high">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                alt="Creative meeting room with glass walls and professional people collaborating on brand strategy"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxkk08-LTNbBAvcoNw0oCZrYnBGk_MQlxNDfTFDfVjS1WElnpj36rH1-3XdpI7H-lG8eiBAMwU0OCjTU3T4i0GjC_l8V7ehsg5VubGphTzhWMljckx2si8ZB89IHWF7uzTac9UWjdrXrNLx9fzgDWkXmSk-OLkNogukpTnZialonkwT274kMZuU-ec37sq31LYOjEE9V9VJOyuT0CB_YViapioyohCykvd1gPUmv0KJ-f_gdxmEt4_w687M9jekxxhDdUibc1bgZI"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-8 flex flex-col justify-end">
                <h4 className="text-2xl font-headline font-black text-white tracking-tighter">SYNTHESIS CORE</h4>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose This Service */}
        <section className="bg-primary-container text-on-primary-container py-32 px-8">
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
              <div className="lg:col-span-1">
                <h2 className="text-4xl font-headline font-black tracking-tighter uppercase leading-none">
                  THE SKYWAVE ADVANTAGE.
                </h2>
              </div>
              <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="space-y-4">
                  <span className="material-symbols-outlined text-4xl">bolt</span>
                  <h4 className="text-xl font-bold">Speed to Market</h4>
                  <p className="opacity-80">
                    Our proprietary creative pipeline allows us to pivot and produce trending content in hours, not weeks.
                  </p>
                </div>
                <div className="space-y-4">
                  <span className="material-symbols-outlined text-4xl">query_stats</span>
                  <h4 className="text-xl font-bold">Deep Attribution</h4>
                  <p className="opacity-80">
                    We map every social touchpoint to final purchase intent, providing absolute clarity on ROI.
                  </p>
                </div>
                <div className="space-y-4">
                  <span className="material-symbols-outlined text-4xl">auto_awesome</span>
                  <h4 className="text-xl font-bold">Aesthetic Superiority</h4>
                  <p className="opacity-80">
                    We treat every post like a premium shoot. Your feed will never look like a template again.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact/CTA Section */}
        <section className="py-32 px-8 max-w-[1440px] mx-auto text-center">
          <div className="bg-surface-container-lowest rounded-3xl p-16 md:p-32 relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-5xl md:text-8xl font-headline font-black tracking-tighter uppercase mb-12">
                READY TO <br /> <span className="text-primary italic">ACCELERATE?</span>
              </h2>
              <p className="text-xl text-on-surface-variant max-w-2xl mx-auto mb-16">
                Let's build a social ecosystem that works as hard as your business does. Consultations are high-impact and low-pressure.
              </p>
              <div className="max-w-md mx-auto">
                <form className="space-y-4">
                  <div className="bg-surface-container-high rounded-full p-2 flex">
                    <input
                      className="bg-transparent border-none focus:ring-0 flex-grow px-6 font-body"
                      placeholder="Your work email"
                      type="email"
                    />
                    <button
                      className="bg-primary text-on-primary px-8 py-3 rounded-full font-headline font-bold uppercase tracking-widest text-xs"
                      type="button"
                    >
                      Start Now
                    </button>
                  </div>
                </form>
                <p className="mt-8 text-xs font-label uppercase tracking-widest text-on-surface-variant/60">
                  Typically replies within 4 business hours.
                </p>
              </div>
            </div>
            {/* Abstract Background Shapes */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-container/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
