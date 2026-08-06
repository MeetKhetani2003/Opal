"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { csrPillars } from "@/lib/data";

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

export default function CSRPage() {
  return (
    <div className="bg-[#FDFCF8]">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[#0C3226]" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "28px 28px" }} />
        <div className="relative mx-auto max-w-[1440px] px-5 lg:px-8 xl:px-12 py-14 lg:py-20 grid lg:grid-cols-12 gap-10 items-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="lg:col-span-7 text-white">
            <motion.div variants={fadeUp} className="inline-flex px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-[11px] font-bold tracking-[0.14em] uppercase">Corporate Social Responsibility</motion.div>
            <motion.h1 variants={fadeUp} className="mt-4 font-serif text-[42px] lg:text-[60px] leading-[0.9]">Creating Sustainable<br /><span className="italic font-light text-white/80">Value.</span></motion.h1>
            <motion.p variants={fadeUp} className="mt-4 text-white/70 max-w-[560px] text-[17px] leading-7">At Opal Management & Consulting, Corporate Social Responsibility is an integral part of our organizational philosophy. We believe that responsible businesses create lasting value not only for their clients but also for employees, communities, industries, and society at large.</motion.p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="lg:col-span-5">
            <div className="rounded-[28px] overflow-hidden luxury-shadow-dark bg-white p-2 hover:scale-[1.02] transition duration-500">
              <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&auto=format&fit=crop&q=60" alt="Community" className="w-full h-[360px] object-cover rounded-[20px]" />
              <div className="p-4">
                <div className="font-serif font-bold text-[#0C3226]">Our Vision</div>
                <div className="text-sm text-[#0C3226]/60 mt-1">To become a trusted organization that empowers businesses and develops human potential.</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 lg:px-8 xl:px-12 py-12 lg:py-20 grid lg:grid-cols-12 gap-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="lg:col-span-4">
          <div className="sticky top-32">
            <motion.div variants={fadeUp} className="text-[11px] tracking-[0.18em] uppercase font-bold text-[#0C3226]/40">Our Mission</motion.div>
            <motion.h2 variants={fadeUp} className="mt-3 font-serif text-[32px] leading-none text-[#0C3226]">Responsible<br />management &<br />consulting.</motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-sm leading-6 text-[#0C3226]/60">Our mission is to create meaningful value by helping organizations improve performance, supporting professionals in achieving their career aspirations, and promoting responsible business practices that benefit society.</motion.p>
            <motion.p variants={fadeUp} className="mt-4 text-sm leading-6 text-[#0C3226]/60">We are committed to building stronger organizations, developing capable leaders, and fostering inclusive opportunities that contribute to national development.</motion.p>
          </div>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="lg:col-span-8 space-y-8">
          <motion.div variants={fadeUp} className="text-[11px] tracking-[0.18em] uppercase font-bold text-[#0C3226]/40">Focus Areas</motion.div>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { title: "Organizational Development", desc: "Strong organizations build strong economies. We support businesses in improving their structure, efficiency, leadership, and strategic planning." },
              { title: "Employment Generation", desc: "Employment is a strong driver of economic and social development. We help job seekers find meaningful opportunities." },
              { title: "Skill Development & Employability", desc: "Modern workplaces require continuous learning. We encourage candidates to develop technical knowledge and digital skills." },
              { title: "Community Development", desc: "We seek opportunities to contribute through initiatives that promote education, entrepreneurship, and financial awareness." },
              { title: "Entrepreneurship & MSME", desc: "Small and medium enterprises are vital. We aim to support entrepreneurs through strategic consulting and business planning." },
              { title: "Ethical Governance", desc: "Integrity forms the foundation of every service. We encourage responsible corporate governance and ethical decision-making." },
              { title: "Diversity, Equity & Inclusion", desc: "We promote workplaces where individuals are respected and provided equal opportunities regardless of background." },
              { title: "Environmental Responsibility", desc: "We recognize the importance of environmental stewardship and encourage responsible practices like paperless operations." },
            ].map((focus) => (
              <motion.div variants={fadeUp} key={focus.title} className="rounded-[24px] bg-white border border-black/5 p-6 luxury-shadow hover:-translate-y-1 transition duration-300">
                <div className="w-10 h-10 rounded-full bg-[#F6F3EE] grid place-items-center text-[#0C3226] text-lg font-bold">◈</div>
                <div className="mt-4 font-serif text-[18px] font-bold text-[#0C3226]">{focus.title}</div>
                <div className="mt-2 text-sm leading-6 text-[#0C3226]/70">{focus.desc}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="bg-[#F6F3EE] py-14 lg:py-20">
        <div className="mx-auto max-w-[1440px] px-5 lg:px-8 xl:px-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="text-center max-w-[720px] mx-auto">
            <motion.div variants={fadeUp} className="text-[11px] tracking-[0.18em] uppercase font-bold text-[#0C3226]/40">Key Pillars</motion.div>
            <motion.h2 variants={fadeUp} className="mt-3 font-serif text-[36px] leading-none text-[#0C3226]">Integrated CSR,<br />not a side project.</motion.h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="mt-10 grid lg:grid-cols-3 gap-5">
            {csrPillars.map(p=>(
              <motion.div variants={fadeUp} key={p.title} className="rounded-[24px] overflow-hidden bg-white border border-black/5 luxury-shadow flex flex-col hover:shadow-2xl transition duration-500">
                <div className="overflow-hidden">
                  <img src={p.image} alt={p.title} className="w-full h-[220px] object-cover hover:scale-105 transition duration-700" />
                </div>
                <div className="p-7 flex-1">
                  <div className="w-10 h-10 rounded-full bg-[#0C3226] text-white grid place-items-center shadow-md">✦</div>
                  <h3 className="mt-4 font-serif text-xl font-bold text-[#0C3226]">{p.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#0C3226]/60">{p.desc}</p>
                  <div className="mt-4 inline-flex px-3 py-1.5 rounded-full bg-[#F6F3EE] text-[11px] font-bold text-[#0C3226]">{p.metric}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
