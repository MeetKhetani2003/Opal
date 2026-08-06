"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { services } from "@/lib/data";

const fadeUp: any = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] } }
};

const staggerContainer: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
};

export default function ServicesPage() {
  return (
    <div className="bg-[#08231A] text-[#FDFCF8] min-h-screen">
      {/* Hero Section */}
      <section className="relative mx-auto max-w-[1440px] px-5 lg:px-8 xl:px-12 pt-20 lg:pt-32 pb-16 lg:pb-24 overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        {/* Soft glowing orb */}
        <div className="absolute -top-40 right-10 w-[500px] h-[500px] rounded-full bg-emerald-500/10 blur-[120px] -z-10 pointer-events-none" />
        <div className="absolute top-40 -left-20 w-[400px] h-[400px] rounded-full bg-blue-500/10 blur-[100px] -z-10 pointer-events-none" />

        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-end">
          <div>
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[11px] font-bold tracking-[0.2em] uppercase text-emerald-400 backdrop-blur-md shadow-2xl">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> 13 Practices • One Integrated Approach
            </motion.div>
            <motion.h1 variants={fadeUp} className="mt-8 font-serif text-[52px] lg:text-[84px] leading-[0.95] tracking-tight">
              Services<br /><span className="italic font-light text-white/40">designed for</span> impact.
            </motion.h1>
          </div>
          <motion.div variants={fadeUp} className="lg:pb-4">
            <p className="max-w-[540px] text-[16px] lg:text-[18px] leading-relaxed text-white/60 font-light">
              Comprehensive solutions for every stage of your business. From strategy to execution, we bring deep expertise tailored to the unique needs of corporates and growing SMBs.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Bento/Masonry */}
      <section className="mx-auto max-w-[1440px] px-5 lg:px-8 xl:px-12 pb-24 lg:pb-32 relative z-10">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="grid md:grid-cols-12 gap-5 lg:gap-6 auto-rows-fr">
          {services.map((s, i) => (
            <motion.div variants={fadeUp} key={s.slug} className={`group relative overflow-hidden rounded-[32px] bg-white/5 border border-white/10 flex flex-col hover:border-white/30 transition duration-700
              ${i % 7 === 0 ? "md:col-span-12 lg:col-span-7" : 
                i % 7 === 1 ? "md:col-span-6 lg:col-span-5" : 
                i % 7 === 2 ? "md:col-span-6 lg:col-span-4" : 
                i % 7 === 3 ? "md:col-span-6 lg:col-span-4" : 
                i % 7 === 4 ? "md:col-span-6 lg:col-span-4" : 
                i % 7 === 5 ? "md:col-span-12 lg:col-span-5" : 
                "md:col-span-12 lg:col-span-7"} 
              min-h-[400px] lg:min-h-[480px]`}>
              
              <Link href={`/services/${s.slug}`} className="absolute inset-0 z-30" />
              
              {/* Image Background */}
              <img src={s.image} alt={s.title} className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition duration-1000 ease-out" />
              
              {/* Gradients */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#08231A] via-[#08231A]/80 to-transparent opacity-90" />
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-700" />
              
              {/* Icon & Arrow */}
              <div className="absolute left-6 top-6 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md grid place-items-center text-white border border-white/20 shadow-2xl z-20">
                {s.icon}
              </div>
              <div className="absolute right-6 top-6 w-12 h-12 rounded-full bg-white/5 backdrop-blur grid place-items-center text-white/50 border border-white/10 group-hover:bg-white group-hover:text-[#08231A] group-hover:border-white transition duration-500 z-20">
                ↗
              </div>

              {/* Content */}
              <div className="relative p-8 flex-1 flex flex-col justify-end z-20">
                <div className="text-[10px] tracking-[0.2em] uppercase font-bold text-emerald-400 mb-3">0{i + 1} // Service</div>
                <h3 className="font-serif text-[28px] lg:text-[34px] leading-tight font-bold text-white group-hover:text-emerald-100 transition duration-500">{s.title}</h3>
                
                {/* Expandable description container */}
                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100 mt-2">
                  <div className="overflow-hidden">
                    <p className="text-sm lg:text-base leading-relaxed text-white/70 line-clamp-3 pb-2">{s.short}</p>
                  </div>
                </div>

                {/* Challenges/Tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {s.challenges?.slice(0,3).map(x => (
                    <span key={x} className="px-3 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-[11px] font-bold text-white/70 group-hover:border-white/20 transition duration-500">
                      {x}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* The Opal Difference Comparison */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="mt-20 lg:mt-32 rounded-[32px] bg-white text-[#08231A] p-8 lg:p-14 grid lg:grid-cols-[1fr_auto_1fr] gap-10 lg:gap-16 items-center relative overflow-hidden luxury-shadow">
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #08231A 1px, transparent 0)", backgroundSize: "32px 32px" }} />
          
          {/* Typical */}
          <div className="relative z-10 bg-[#F6F3EE] p-8 rounded-[24px]">
            <div className="text-[11px] tracking-[0.18em] uppercase font-bold text-[#08231A]/40 mb-3">Industry Standard</div>
            <h3 className="font-serif text-3xl leading-tight">Typical consultancy</h3>
            <ul className="mt-6 space-y-4 text-sm font-medium text-[#08231A]/60">
              <li className="flex gap-3"><span className="text-red-500 font-bold">×</span> Junior-heavy teams</li>
              <li className="flex gap-3"><span className="text-red-500 font-bold">×</span> Deck & depart methodology</li>
              <li className="flex gap-3"><span className="text-red-500 font-bold">×</span> Siloed practice areas</li>
              <li className="flex gap-3"><span className="text-red-500 font-bold">×</span> Time & materials billing only</li>
            </ul>
          </div>
          
          {/* VS Divider */}
          <div className="lg:text-center flex flex-col justify-center items-center relative z-10 py-6 lg:py-0">
            <div className="w-[1px] h-12 bg-black/10 hidden lg:block mb-4" />
            <div className="w-14 h-14 rounded-full bg-[#08231A] text-white grid place-items-center font-bold shadow-2xl text-lg">vs</div>
            <div className="w-[1px] h-12 bg-black/10 hidden lg:block mt-4" />
          </div>
          
          {/* Opal */}
          <div className="relative z-10 p-8">
            <div className="text-[11px] tracking-[0.18em] uppercase font-bold text-emerald-600 mb-3">Our Approach</div>
            <h3 className="font-serif text-3xl leading-tight text-[#08231A]">The Opal Difference</h3>
            <ul className="mt-6 space-y-4 text-sm font-bold text-[#08231A]">
              {[
                "Partner on the work, every day",
                "We embed until full adoption",
                "One integrated P&L for seamless delivery",
                "Fixed + success fee models available"
              ].map(x => (
                <li key={x} className="flex gap-3 items-center">
                  <span className="w-6 h-6 rounded-full bg-[#08231A] text-white flex items-center justify-center text-[10px] shrink-0 shadow-md">✓</span> 
                  {x}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
