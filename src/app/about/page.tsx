"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { stats } from "@/lib/data";

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

export default function AboutPage() {
  return (
    <div className="bg-[#FDFCF8]">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[#0C3226]" />
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "28px 28px" }} />
        <div className="relative mx-auto max-w-[1440px] px-5 lg:px-8 xl:px-12 py-14 lg:py-20 grid lg:grid-cols-12 gap-10 items-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="lg:col-span-7 text-white">
            <motion.div variants={fadeUp} className="text-[11px] tracking-[0.18em] uppercase font-bold text-white/50">About Opal</motion.div>
            <motion.h1 variants={fadeUp} className="mt-4 font-serif text-[42px] lg:text-[64px] leading-[0.85]">Built on<br /><span className="italic font-light text-white/80">Expertise.</span><br />Driven by Results.</motion.h1>
            <motion.p variants={fadeUp} className="mt-6 text-white/70 max-w-[560px] text-[17px] leading-7">Opal Management & Consulting was founded on a simple belief: that every business — from ambitious SMBs to established corporates — deserves access to world-class consulting expertise.</motion.p>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="lg:col-span-5">
            <div className="rounded-[28px] overflow-hidden luxury-shadow-dark bg-white hover:scale-[1.02] transition duration-500">
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&auto=format&fit=crop&q=60" alt="Opal office" className="w-full h-[420px] object-cover" />
              <div className="p-6">
                <div className="font-serif text-xl leading-tight text-[#0C3226]">“We don't just deliver reports — we roll up our sleeves and work alongside you until the job is done.”</div>
                <div className="text-xs tracking-[0.08em] uppercase font-bold text-[#0C3226]/50 mt-2">— Asjad Alam, Founder</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Story + Mission Vision Values */}
      <section className="mx-auto max-w-[1440px] px-5 lg:px-8 xl:px-12 py-14 lg:py-20 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="sticky top-32">
            <motion.div variants={fadeUp} className="text-[11px] tracking-[0.18em] uppercase font-bold text-[#0C3226]/40">Our Story</motion.div>
            <motion.h2 variants={fadeUp} className="mt-3 font-serif text-[32px] leading-none text-[#0C3226]">Boutique agility.<br />Enterprise<br />rigour.</motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-sm leading-6 text-[#0C3226]/60">Opal was born from a recognition that too many businesses were navigating complex challenges without the right strategic support. Our founders set out to build a firm that combines the rigour of a large consultancy with the agility and personal attention of a boutique practice.</motion.p>
            <motion.p variants={fadeUp} className="mt-4 text-sm leading-6 text-[#0C3226]/60">Every engagement is shaped by a commitment to understanding your unique context and delivering solutions that actually work in practice — not just on paper.</motion.p>
          </motion.div>
        </div>
        <div className="lg:col-span-8 space-y-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-2 gap-4">
            <motion.div variants={fadeUp} className="md:col-span-2 rounded-2xl bg-[#0C3226] text-white p-8 luxury-shadow hover:-translate-y-1 transition duration-300">
              <div className="text-[11px] tracking-[0.18em] uppercase font-bold text-white/50">Our Mission</div>
              <div className="mt-3 font-serif text-[22px] leading-tight font-bold">To empower organisations to achieve sustainable growth by delivering strategic, people-centred consulting solutions that create lasting impact.</div>
            </motion.div>
            {[
              { k: "Integrity", v: "We operate with transparency and honesty in everything we do — with our clients, our partners, and each other." },
              { k: "Excellence", v: "We hold ourselves to the highest professional standards and continuously invest in our expertise to deliver outstanding outcomes." },
              { k: "Partnership", v: "We work alongside our clients as true partners — invested in their success and committed for the long term." },
              { k: "Impact", v: "We measure our success by the tangible, measurable difference we make to the organisations we serve." },
            ].map((card, i) => (
              <motion.div variants={fadeUp} key={card.k} className="rounded-2xl bg-white border border-black/5 p-6 luxury-shadow hover:-translate-y-1 transition duration-300">
                <div className="flex items-center justify-between">
                  <div className="text-[11px] tracking-[0.18em] uppercase font-bold text-[#0C3226]/40">Value 0{i + 1}</div>
                  <div className="w-8 h-8 rounded-full bg-[#F6F3EE] grid place-items-center text-xs text-[#0C3226]">✦</div>
                </div>
                <div className="mt-4 font-serif text-[20px] font-bold text-[#0C3226]">{card.k}</div>
                <div className="mt-2 text-sm leading-6 text-[#0C3226]/70">{card.v}</div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="rounded-[24px] bg-[#F6F3EE] p-8 border border-black/5">
            <motion.div variants={fadeUp} className="text-[11px] tracking-[0.18em] uppercase font-bold text-[#0C3226]/40">Why Clients Choose Opal</motion.div>
            <div className="mt-6 grid sm:grid-cols-2 gap-6">
              {[
                ["Senior-led delivery", "Every engagement is led by a senior consultant. You get our best thinking from day one."],
                ["Cross-industry depth", "Our team has worked across financial services, healthcare, retail, manufacturing, and more."],
                ["Practical, not theoretical", "We design solutions that work in the real world. Our recommendations are grounded in implementation experience."],
                ["Long-term relationships", "We invest in understanding your business deeply. Many of our clients have partnered with us for years."],
              ].map(([t,d])=>(
                <motion.div variants={fadeUp} key={t} className="flex gap-3 bg-white p-4 rounded-xl shadow-sm border border-black/5 hover:shadow-md transition">
                  <span className="w-8 h-8 rounded-full bg-[#0C3226] text-white grid place-items-center text-xs shrink-0">✓</span>
                  <div>
                    <div className="font-bold text-[#0C3226] text-sm">{t}</div>
                    <div className="text-sm leading-5 text-[#0C3226]/60 mt-1">{d}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#0C3226] text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="relative mx-auto max-w-[1440px] px-5 lg:px-8 xl:px-12 py-12 lg:py-16 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map(s=>(
            <motion.div variants={fadeUp} key={s.k} className="text-center group">
              <div className="font-serif text-[36px] font-bold group-hover:scale-110 transition duration-300 inline-block">{s.k}</div>
              <div className="text-sm font-bold mt-2">{s.label}</div>
              <div className="text-xs text-white/60 mt-1">{s.sub}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Leadership detailed */}
      <section className="mx-auto max-w-[1440px] px-5 lg:px-8 xl:px-12 py-14 lg:py-20">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <motion.div variants={fadeUp}>
            <div className="text-[11px] tracking-[0.18em] uppercase font-bold text-[#0C3226]/40">Our Team</div>
            <h2 className="mt-3 font-serif text-[36px] lg:text-[48px] leading-none text-[#0C3226]">Leadership</h2>
          </motion.div>
          <motion.p variants={fadeUp} className="max-w-[520px] text-sm text-[#0C3226]/60">Senior practitioners who bring deep expertise and genuine commitment to every client engagement.</motion.p>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="mt-10 grid md:grid-cols-3 gap-5">
          {[
            { n: "Asjad Alam", r: "Founder & Managing Director", b: "Has several years of experience in business strategy and organisational transformation. He has led engagements across financial services, healthcare, and consumer goods, and is passionate about helping leaders build organisations that are both high-performing and human-centred.", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&auto=format&fit=crop&q=60" },
            { n: "Leadership Team Member", r: "Director, People & Talent", b: "A seasoned HR leader with deep expertise in talent acquisition, leadership development, and organisational design. Has built and transformed HR functions at scale across multiple sectors and brings a practical, evidence-based approach to every engagement.", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60" },
            { n: "Leadership Team Member", r: "Director, Strategy & Operations", b: "Specialises in business process improvement, digital transformation, and project delivery. With a background in management consulting and technology, helps organisations navigate complexity and execute change with confidence.", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&auto=format&fit=crop&q=60" },
          ].map(p=>(
            <motion.div variants={fadeUp} key={p.r} className="rounded-[24px] overflow-hidden bg-white border border-black/5 luxury-shadow hover:shadow-2xl transition duration-500 group">
              <div className="overflow-hidden">
                <img src={p.img} alt={p.n} className="w-full h-[300px] object-cover group-hover:scale-105 transition duration-700" />
              </div>
              <div className="p-6">
                <div className="font-bold text-[#0C3226] text-lg">{p.n}</div>
                <div className="text-xs tracking-[0.1em] uppercase font-bold text-[#0C3226]/50 mt-1">{p.r}</div>
                <div className="text-sm leading-6 text-[#0C3226]/70 mt-4 border-t border-black/5 pt-4">{p.b}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mt-16 text-center">
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#0C3226] text-white px-8 py-4 rounded-full font-bold text-sm tracking-[0.06em] uppercase hover:bg-[#143D30] transition shadow-lg hover:shadow-xl">Start a conversation ↗</Link>
        </motion.div>
      </section>
    </div>
  );
}
