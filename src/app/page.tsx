"use client";
import { useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { services, industries, caseStudies, insights, stats } from "@/lib/data";

const fadeUp: any = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function HomePage() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const scroll = (dir: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = window.innerWidth < 768 ? 320 : 420;
      carouselRef.current.scrollBy({ left: dir === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#FDFCF8]">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#F6F3EE] via-[#FDFCF8] to-[#FDFCF8]" />
        <div className="absolute -top-32 -right-32 w-[720px] h-[720px] rounded-full bg-[#0C3226]/[0.06] blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-[560px] h-[560px] rounded-full bg-[#C8A96A]/[0.08] blur-3xl" />

        <div className="relative mx-auto max-w-[1440px] px-5 lg:px-8 xl:px-12 pt-10 lg:pt-16 pb-12 lg:pb-20">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-6 items-center">
            {/* Copy */}
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="lg:col-span-6 xl:col-span-5">
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full bg-white border border-black/5 px-3 py-1.5 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                <span className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#0C3226]/70">Award-Winning Boutique • GCC</span>
              </motion.div>

              <motion.h1 variants={fadeUp} className="mt-6 font-serif text-[42px] sm:text-[52px] lg:text-[64px] xl:text-[72px] font-bold leading-[0.9] tracking-[-0.03em] text-[#0C3226]">
                Comprehensive<br />
                <span className="font-light italic font-serif text-[#1B4D3E]">Solutions</span><br />
                For Every <span className="relative inline-block">Stage<span className="absolute -bottom-2 left-0 right-0 h-[8px] bg-[#C8A96A]/30 -rotate-1" /></span>.
              </motion.h1>

              <motion.p variants={fadeUp} className="mt-6 text-[17px] leading-7 text-[#0C3226]/65 max-w-[520px] text-balance">
                From strategy to execution, we bring deep expertise across 13 specializations — tailored to the unique needs of corporates and growing SMBs.
              </motion.p>

              <motion.div variants={fadeUp} className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-[#0C3226] text-white px-7 py-4 rounded-full font-bold text-sm tracking-[0.06em] uppercase hover:bg-[#143D30] transition luxury-shadow">
                  Talk to an Advisor ↗
                </Link>
                <Link href="/services" className="inline-flex items-center justify-center gap-2 bg-white border border-black/10 px-7 py-4 rounded-full font-bold text-sm tracking-[0.06em] uppercase hover:bg-black/5 transition">
                  Our Services
                </Link>
              </motion.div>

              <motion.div variants={fadeUp} className="mt-10 grid grid-cols-3 gap-6 border-t border-black/5 pt-8 max-w-[520px]">
                {stats.slice(0,3).map(s => (
                  <div key={s.k}>
                    <div className="font-serif text-[28px] font-bold leading-none text-[#0C3226]">{s.k}</div>
                    <div className="text-[11px] tracking-[0.14em] uppercase font-bold text-[#0C3226]/40 mt-1">{s.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Visual collage */}
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="lg:col-span-6 xl:col-span-7 relative">
              <div className="relative mx-auto max-w-[640px] lg:ml-auto lg:mr-0 aspect-[1.08/1] lg:aspect-[1.22/1]">
                <div className="absolute inset-0 rounded-[32px] overflow-hidden luxury-shadow bg-white">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&auto=format&fit=crop&q=60" alt="Executive boardroom" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C3226]/20 via-transparent to-transparent" />
                </div>
                
                {/* Floating elements with subtle animation */}
                <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }} className="absolute -left-3 sm:-left-6 top-[14%] bg-white rounded-2xl p-4 shadow-[0_20px_48px_rgba(0,0,0,0.14)] border border-black/5 max-w-[210px] hidden sm:block">
                  <div className="flex items-center gap-2 text-[11px] font-bold tracking-[0.14em] uppercase text-emerald-700"><span className="w-2 h-2 rounded-full bg-emerald-500" /> Transform</div>
                  <div className="mt-2 text-sm font-bold leading-tight text-[#0C3226]">13 Specializations</div>
                  <div className="text-xs text-[#0C3226]/60">One integrated partner</div>
                </motion.div>

                <div className="absolute -z-10 inset-0 -m-6 bg-gradient-to-br from-white via-[#F6F3EE] to-white rounded-[40px] border border-black/5" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="mx-auto max-w-[1440px] px-5 lg:px-8 xl:px-12 py-12 lg:py-24">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <motion.div variants={fadeUp} className="lg:col-span-5">
            <div className="text-[11px] tracking-[0.18em] uppercase font-bold text-[#0C3226]/40">About Opal</div>
            <h2 className="mt-3 font-serif text-[36px] lg:text-[48px] leading-[0.9] text-[#0C3226]">
              Built on Expertise.<br /><span className="italic font-light text-[#1B4D3E]">Driven by Results.</span>
            </h2>
            <p className="mt-5 text-[16px] leading-7 text-[#0C3226]/70">
              Opal Management & Consulting was founded on a simple belief: that every business — from ambitious SMBs to established corporates — deserves access to world-class consulting expertise.
            </p>

            <Link href="/about" className="mt-8 inline-flex items-center gap-2 bg-[#0C3226] text-white px-6 py-3 rounded-full font-bold text-sm">Our Story ↗</Link>
          </motion.div>

          <motion.div variants={fadeUp} className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="rounded-[24px] overflow-hidden luxury-shadow bg-white hover:-translate-y-2 transition duration-500">
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=60" alt="Team" className="w-full h-[280px] object-cover" />
                <div className="p-5">
                  <div className="text-sm font-bold text-[#0C3226]">Senior-led delivery</div>
                  <div className="text-sm leading-5 text-[#0C3226]/60 mt-1">Every engagement is led by a senior consultant. You get our best thinking from day one.</div>
                </div>
              </div>
            </div>
            <div className="rounded-[24px] overflow-hidden luxury-shadow bg-[#0C3226] text-white flex flex-col hover:-translate-y-2 transition duration-500">
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop&q=60" alt="Office" className="w-full h-[360px] object-cover opacity-80 mix-blend-overlay" />
              <div className="p-5 flex-1 relative z-10">
                <div className="text-[11px] tracking-[0.14em] uppercase font-bold text-white/50">Mission</div>
                <div className="mt-2 font-serif text-lg leading-tight text-white">To empower organisations to achieve sustainable growth by delivering strategic, people-centred consulting solutions that create lasting impact.</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* SERVICES CAROUSEL */}
      <section className="bg-[#0C3226] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "28px 28px" }} />
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-white/5 blur-3xl" />
        <div className="relative pt-14 lg:pt-20 pb-14 lg:pb-24">
          <div className="mx-auto max-w-[1440px] px-5 lg:px-8 xl:px-12">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <motion.div variants={fadeUp}>
                <div className="text-[11px] tracking-[0.18em] uppercase font-bold text-white/50">Our Services</div>
                <h2 className="mt-3 font-serif text-[36px] lg:text-[52px] leading-[0.9]">Comprehensive<br />Solutions.</h2>
              </motion.div>
              <motion.div variants={fadeUp} className="lg:text-right flex flex-col lg:items-end">
                <p className="text-white/70 max-w-[420px] text-sm leading-6">We bring deep expertise across 13 specializations — tailored to the unique needs of corporates and growing SMBs.</p>
                <div className="mt-6 flex items-center gap-4">
                  <div className="text-xs font-bold tracking-[0.1em] uppercase text-white/40 hidden lg:block">Explore services</div>
                  <div className="flex gap-2 hidden lg:flex mr-2">
                    <button onClick={() => scroll("left")} className="w-10 h-10 rounded-full border border-white/20 grid place-items-center hover:bg-white/10 transition">←</button>
                    <button onClick={() => scroll("right")} className="w-10 h-10 rounded-full border border-white/20 grid place-items-center hover:bg-white/10 transition">→</button>
                  </div>
                  <Link href="/services" className="inline-flex items-center gap-2 bg-white text-[#0C3226] px-6 py-2.5 rounded-full font-bold text-sm hover:bg-gray-100 transition shadow-lg">View all ↗</Link>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Carousel Container */}
          <motion.div ref={carouselRef} initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="mt-12 flex overflow-x-auto snap-x snap-mandatory no-scrollbar pl-5 lg:pl-8 xl:pl-12 pr-5 lg:pr-8 xl:pr-12 gap-5 pb-10">
            {services.map((s, i) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="group relative shrink-0 snap-start w-[300px] sm:w-[340px] lg:w-[400px] h-[460px] rounded-[32px] overflow-hidden flex flex-col justify-end luxury-shadow border border-white/10 hover:border-white/30 transition duration-500">
                {/* Background Image */}
                <img src={s.image} alt={s.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                {/* Gradient Overlays for better visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#08231A] via-[#08231A]/60 to-transparent opacity-90" />
                
                {/* Top Icon */}
                <div className="absolute top-6 left-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md grid place-items-center text-white border border-white/20 shadow-lg">
                  {s.icon}
                </div>
                {/* Arrow */}
                <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/0 grid place-items-center text-white border border-white/0 group-hover:bg-white group-hover:text-[#0C3226] group-hover:border-white transition duration-300">
                  ↗
                </div>

                {/* Content */}
                <div className="relative p-8 z-10">
                  <div className="text-[10px] tracking-[0.18em] uppercase font-bold text-emerald-400 mb-3">0{i + 1}</div>
                  <h3 className="font-serif text-[26px] leading-tight font-bold text-white group-hover:text-emerald-100 transition">{s.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/70 line-clamp-3">{s.short}</p>
                  
                  <div className="mt-6 flex flex-wrap gap-2">
                    {s.challenges?.slice(0,2).map(c => (
                      <span key={c} className="px-3 py-1.5 rounded-full bg-white/10 backdrop-blur text-[11px] font-bold text-white/80 border border-white/10">{c}</span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE OPAL */}
      <section className="bg-[#F6F3EE] border-y border-black/5">
        <div className="mx-auto max-w-[1440px] px-5 lg:px-8 xl:px-12 py-14 lg:py-20">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid lg:grid-cols-12 gap-10 items-start">
            <motion.div variants={fadeUp} className="lg:col-span-5">
              <div className="text-[11px] tracking-[0.18em] uppercase font-bold text-[#0C3226]/40">Why Opal</div>
              <h2 className="mt-3 font-serif text-[36px] lg:text-[44px] leading-none text-[#0C3226]">Why Clients<br />Choose Us.</h2>
              <p className="mt-4 text-sm leading-6 text-[#0C3226]/60">We invest in understanding your business deeply. Many of our clients have partnered with us for years, returning for new challenges as they grow.</p>
            </motion.div>
            <motion.div variants={fadeUp} className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
              {[
                { t: "Senior-led delivery", d: "Every engagement is led by a senior consultant. You get our best thinking from day one.", i: "◈" },
                { t: "Cross-industry depth", d: "We have worked across financial services, healthcare, retail, manufacturing, and more.", i: "⬢" },
                { t: "Practical, not theoretical", d: "We design solutions that work in the real world. Grounded in implementation experience.", i: "⟡" },
                { t: "Long-term relationships", d: "We invest in understanding your business deeply for the long term.", i: "⌖" },
              ].map((f) => (
                <motion.div whileHover={{ y: -5 }} key={f.t} className="rounded-[20px] bg-white border border-black/5 p-6 hover:shadow-xl transition duration-300">
                  <div className="w-10 h-10 rounded-full bg-[#0C3226] text-white grid place-items-center shadow-md">{f.i}</div>
                  <div className="mt-4 font-bold text-[#0C3226]">{f.t}</div>
                  <div className="mt-1 text-sm leading-5 text-[#0C3226]/60">{f.d}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* INSIGHTS */}
      <section className="mx-auto max-w-[1440px] px-5 lg:px-8 xl:px-12 py-14 lg:py-20">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <motion.div variants={fadeUp}>
            <div className="text-[11px] tracking-[0.18em] uppercase font-bold text-[#0C3226]/40">Insights & Case Studies</div>
            <h2 className="mt-3 font-serif text-[36px] lg:text-[48px] leading-none text-[#0C3226]">Thinking That<br />Drives Results.</h2>
          </motion.div>
          <motion.div variants={fadeUp}>
            <Link href="/insights" className="inline-flex self-start lg:self-auto items-center gap-2 bg-[#0C3226] text-white px-6 py-3 rounded-full font-bold text-sm hover:shadow-lg transition">View all insights ↗</Link>
          </motion.div>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="mt-10 grid lg:grid-cols-3 gap-5">
          {caseStudies.slice(0,3).map((c) => (
            <motion.div variants={fadeUp} key={c.slug} className="group rounded-[24px] overflow-hidden bg-white text-[#0C3226] flex flex-col border border-black/5 shadow-sm hover:shadow-2xl transition duration-500">
              <Link href="/insights" className="absolute inset-0 z-20" />
              <div className="relative h-[220px] overflow-hidden">
                <img src={c.image} alt={c.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                <div className="absolute left-4 top-4 px-3 py-1.5 rounded-full bg-white text-[11px] font-bold tracking-[0.14em] uppercase shadow-md">{c.industry}</div>
              </div>
              <div className="p-6 flex-1 flex flex-col relative z-10">
                <div className="text-[11px] tracking-[0.14em] uppercase font-bold text-[#0C3226]/40">{c.client}</div>
                <div className="mt-1 font-serif text-[18px] leading-tight font-bold">{c.title}</div>
                <div className="mt-2 text-sm leading-5 text-[#0C3226]/60 line-clamp-2">{c.challenge}</div>
                <div className="mt-6 flex items-center gap-2 text-sm font-bold">Read story <span className="group-hover:translate-x-1 transition">→</span></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#0C3226] text-white border-t border-black/5">
        <div className="mx-auto max-w-[1440px] px-5 lg:px-8 xl:px-12 py-14 lg:py-20">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="rounded-[32px] bg-white border border-black/5 luxury-shadow p-8 lg:p-12 grid lg:grid-cols-12 gap-8 items-center text-[#0C3226]">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0C3226] text-white text-[11px] font-bold tracking-[0.14em] uppercase shadow-md">Partner with us</div>
              <h2 className="mt-4 font-serif text-[36px] lg:text-[44px] leading-none text-[#0C3226]">Let’s talk about<br />your next chapter.</h2>
              <p className="mt-4 text-sm leading-6 text-[#0C3226]/60 max-w-[560px]">Whether you have a specific challenge or just want to explore how we can help, we'd love to start a conversation.</p>
              <div className="mt-6 flex items-center gap-4">
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&auto=format&fit=crop&q=60" alt="" className="w-12 h-12 rounded-full object-cover shadow-sm" />
                <div>
                  <div className="text-sm font-bold text-[#0C3226]">You’ll meet a Partner, not a salesperson.</div>
                  <div className="text-xs text-[#0C3226]/60">Avg. response 3 hours • NDA-friendly</div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5">
              <form action="/thank-you" className="rounded-2xl bg-[#F6F3EE] p-6 space-y-3 shadow-inner">
                <div className="grid sm:grid-cols-2 gap-3">
                  <input required placeholder="Full name" className="h-11 rounded-full bg-white border border-black/10 px-4 outline-none focus:border-[#0C3226] focus:ring-2 focus:ring-[#0C3226]/20 transition text-sm shadow-sm" />
                  <input required placeholder="Work email" type="email" className="h-11 rounded-full bg-white border border-black/10 px-4 outline-none focus:border-[#0C3226] focus:ring-2 focus:ring-[#0C3226]/20 transition text-sm shadow-sm" />
                </div>
                <input placeholder="Company" className="w-full h-11 rounded-full bg-white border border-black/10 px-4 outline-none focus:border-[#0C3226] focus:ring-2 focus:ring-[#0C3226]/20 transition text-sm shadow-sm" />
                <textarea placeholder="What are you trying to achieve?" rows={3} className="w-full rounded-2xl bg-white border border-black/10 p-4 outline-none focus:border-[#0C3226] focus:ring-2 focus:ring-[#0C3226]/20 transition text-sm shadow-sm" />
                <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit" className="w-full h-12 rounded-full bg-[#0C3226] text-white font-bold text-sm tracking-[0.06em] uppercase hover:bg-[#143D30] transition shadow-md">Request Consultation ↗</motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
