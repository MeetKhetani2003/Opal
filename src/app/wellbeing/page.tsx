"use client";
import { wellbeingPillars } from "@/lib/data";
import Link from "next/link";
import { motion } from "framer-motion";

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

export default function WellbeingPage() {
  return (
    <div className="bg-[#FDFCF8]">
      <section className="relative overflow-hidden bg-[#F6F3EE] border-b border-black/5">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, black 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        <div className="relative mx-auto max-w-[1440px] px-5 lg:px-8 xl:px-12 py-14 lg:py-20 grid lg:grid-cols-12 gap-10 items-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="lg:col-span-6">
            <motion.div variants={fadeUp} className="inline-flex px-3 py-1.5 rounded-full bg-white border border-black/5 text-[11px] font-bold tracking-[0.14em] uppercase text-[#0C3226]/60 shadow-sm">Employee Well-Being</motion.div>
            <motion.h1 variants={fadeUp} className="mt-4 font-serif text-[42px] lg:text-[60px] leading-[0.9] text-[#0C3226]">The foundation of<br /><span className="italic font-light text-[#1B4D3E]">our success.</span></motion.h1>
            <motion.p variants={fadeUp} className="mt-4 text-[#0C3226]/70 max-w-[560px] text-[17px] leading-7">At Opal Management & Consulting, we recognize that our employees are the foundation of our success. We believe that a motivated, healthy, and engaged workforce drives innovation, strengthens client relationships, and delivers sustainable business excellence.</motion.p>
            <motion.div variants={fadeUp} className="mt-6 flex gap-3">
              <Link href="/careers" className="inline-flex bg-[#0C3226] text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-[#143D30] transition shadow-md hover:shadow-lg">Join Opal ↗</Link>
            </motion.div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="lg:col-span-6 grid grid-cols-2 gap-4 relative">
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&auto=format&fit=crop&q=60" alt="Wellbeing" className="w-full h-[320px] object-cover rounded-[24px] luxury-shadow hover:scale-105 transition duration-500" />
            <div className="space-y-4">
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&auto=format&fit=crop&q=60" alt="Team" className="w-full h-[150px] object-cover rounded-[24px] hover:scale-105 transition duration-500 luxury-shadow" />
              <div className="rounded-[24px] bg-[#0C3226] text-white p-6 luxury-shadow-dark">
                <div className="font-serif text-xl leading-tight">Empowered.<br />Respected.</div>
                <div className="text-xs text-white/70 mt-2">Every employee feels valued and supported.</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 lg:px-8 xl:px-12 py-12 lg:py-16">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="text-center max-w-[720px] mx-auto">
          <motion.div variants={fadeUp} className="text-[11px] tracking-[0.18em] uppercase font-bold text-[#0C3226]/40">Our Priorities</motion.div>
          <motion.h2 variants={fadeUp} className="mt-3 font-serif text-[36px] leading-none text-[#0C3226]">Cultivating a<br />positive culture.</motion.h2>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {wellbeingPillars.map(p=>(
            <motion.div variants={fadeUp} key={p.title} className="rounded-[20px] bg-white border border-black/5 p-6 hover:shadow-xl hover:-translate-y-1 transition duration-300">
              <div className="w-10 h-10 rounded-full bg-[#0C3226] text-white grid place-items-center shadow-md">{p.icon}</div>
              <div className="mt-4 font-bold text-[#0C3226]">{p.title}</div>
              <div className="mt-1 text-sm leading-5 text-[#0C3226]/60">{p.desc}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 lg:px-8 xl:px-12 pb-14">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="rounded-[28px] overflow-hidden bg-white border border-black/5 grid lg:grid-cols-2 shadow-sm hover:shadow-lg transition duration-500">
          <motion.div variants={fadeUp} className="p-8 lg:p-10 flex flex-col justify-center">
            <h3 className="font-serif text-[28px] leading-none text-[#0C3226]">Building Future Leaders</h3>
            <p className="mt-3 text-sm leading-6 text-[#0C3226]/60">At Opal Management & Consultancy, we believe leadership is developed through continuous learning, responsibility, and experience. We encourage employees to take initiative, embrace innovation, solve complex challenges, and contribute to organizational growth.</p>
            <div className="mt-6">
              <Link href="/careers" className="inline-flex items-center gap-2 bg-[#0C3226] text-white px-6 py-3 rounded-full font-bold text-sm tracking-[0.06em] uppercase hover:bg-[#143D30] transition shadow-md">Grow with us ↗</Link>
            </div>
          </motion.div>
          <div className="overflow-hidden">
            <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=60" alt="Academy" className="w-full h-full object-cover min-h-[320px] hover:scale-105 transition duration-700" />
          </div>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mt-6 rounded-[24px] bg-[#0C3226] text-white p-8 lg:p-10 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />
          <div className="relative z-10">
            <h4 className="font-serif text-2xl">Ethical Workplace Practices</h4>
            <p className="text-white/70 text-sm mt-1 max-w-[600px]">We are committed to maintaining a workplace governed by fairness, transparency, accountability, and ethical conduct. Every employee is expected to uphold the highest standards of professionalism.</p>
          </div>
          <Link href="/contact" className="relative z-10 inline-flex bg-white text-[#0C3226] px-6 py-3 rounded-full font-bold text-sm shrink-0 hover:bg-gray-100 transition shadow-lg">Talk to our Team ↗</Link>
        </motion.div>
      </section>
    </div>
  );
}
