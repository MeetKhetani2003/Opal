"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { insights } from "@/lib/data";

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

export default function InsightsPage() {
  const featured = insights.filter(i=>i.featured);
  const rest = insights.filter(i=>!i.featured);
  
  return (
    <div className="bg-[#FDFCF8]">
      <section className="relative mx-auto max-w-[1440px] px-5 lg:px-8 xl:px-12 pt-10 lg:pt-16 pb-8 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, black 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <motion.div variants={fadeUp}>
            <div className="inline-flex px-3 py-1.5 rounded-full bg-white border border-black/5 text-[11px] font-bold tracking-[0.14em] uppercase text-[#0C3226]/60 shadow-sm">The Opal Journal • Editorial • Monthly</div>
            <h1 className="mt-4 font-serif text-[42px] lg:text-[64px] leading-[0.9] text-[#0C3226]">Ideas with<br />utility.</h1>
            <p className="mt-4 max-w-[560px] text-[16px] leading-7 text-[#0C3226]/60">Research, field notes, and playbooks from the front line — written for leaders, not algorithms.</p>
          </motion.div>
          <motion.div variants={fadeUp} className="flex items-center gap-3">
            <input placeholder="Search insights..." className="h-11 rounded-full border border-black/10 bg-white px-5 w-[240px] outline-none focus:border-[#0C3226] text-sm shadow-sm" />
            <button className="h-11 w-11 rounded-full bg-[#0C3226] text-white grid place-items-center hover:bg-[#143D30] transition shadow-md">⌕</button>
          </motion.div>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="relative z-10 mt-6 flex flex-wrap gap-2">
          {["All","Leadership","AI & Digital","HR & Talent","Operations","Governance","Project Management"].map(cat=>(
            <span key={cat} className={`px-4 py-2 rounded-full text-xs font-bold border cursor-pointer hover:shadow-sm transition ${cat==="All"?"bg-[#0C3226] text-white border-[#0C3226]":"bg-white border-black/10 text-[#0C3226]/70 hover:border-black/20"}`}>{cat}</span>
          ))}
        </motion.div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 lg:px-8 xl:px-12 pb-14 lg:pb-20">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid lg:grid-cols-12 gap-5">
          {featured.map(post=>(
            <motion.div variants={fadeUp} key={post.slug} className="lg:col-span-6">
              <Link href={`/insights/${post.slug}`} className="group rounded-[28px] overflow-hidden bg-white border border-black/5 luxury-shadow flex flex-col hover:shadow-2xl hover:-translate-y-1 transition duration-500 h-full">
                <div className="h-[320px] overflow-hidden relative">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <div className="absolute left-4 top-4 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur text-[11px] font-bold tracking-[0.14em] uppercase text-[#0C3226] shadow-sm">{post.category}</div>
                </div>
                <div className="p-7 flex flex-col flex-1">
                  <div className="text-[11px] tracking-[0.14em] uppercase font-bold text-[#0C3226]/40">{post.date} • {post.read} • By {post.author}</div>
                  <div className="mt-3 font-serif text-[24px] leading-tight font-bold text-[#0C3226] group-hover:text-emerald-800 transition">{post.title}</div>
                  <div className="mt-3 text-sm leading-6 text-[#0C3226]/60 flex-1">{post.excerpt}</div>
                  <div className="mt-4 text-xs font-bold tracking-[0.1em] uppercase text-[#0C3226] flex items-center gap-1 group-hover:text-emerald-700 transition">Read Article <span className="group-hover:translate-x-1 transition">→</span></div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {rest.map(post=>(
            <motion.div variants={fadeUp} key={post.slug}>
              <Link href={`/insights/${post.slug}`} className="group rounded-[24px] overflow-hidden bg-white border border-black/5 hover:shadow-xl hover:-translate-y-1 transition duration-500 flex flex-col h-full">
                <div className="overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-[200px] object-cover group-hover:scale-105 transition duration-700" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="text-[11px] tracking-[0.14em] uppercase font-bold text-[#0C3226]/40">{post.category} • {post.read}</div>
                  <div className="mt-2 font-bold leading-tight text-[#0C3226] text-lg group-hover:text-emerald-800 transition">{post.title}</div>
                  <div className="mt-2 text-sm leading-5 text-[#0C3226]/60 line-clamp-2 flex-1">{post.excerpt}</div>
                  <div className="mt-4 pt-4 border-t border-black/5 text-xs font-bold text-[#0C3226]/60 flex justify-between items-center">
                    <span>{post.date}</span>
                    <span>{post.author}</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mt-12 rounded-[24px] bg-[#0C3226] text-white p-8 lg:p-10 flex flex-col lg:flex-row items-center justify-between gap-6 luxury-shadow-dark relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />
          <div className="relative z-10">
            <h3 className="font-serif text-[28px] leading-tight">Subscribe to The Opal Letter</h3>
            <p className="text-white/70 text-sm mt-2 max-w-[400px]">Monthly board-level insight. No spam. Unsubscribe anytime.</p>
          </div>
          <form action="/thank-you" className="flex gap-3 w-full lg:w-auto relative z-10">
            <input required placeholder="Work email" type="email" className="flex-1 lg:w-[280px] h-12 rounded-full bg-white/10 border border-white/20 px-6 placeholder:text-white/50 outline-none focus:bg-white/15 focus:border-white/40 transition text-sm" />
            <button className="h-12 px-7 rounded-full bg-white text-[#0C3226] font-bold text-sm tracking-[0.06em] uppercase hover:bg-gray-100 transition shadow-md">Subscribe ↗</button>
          </form>
        </motion.div>
      </section>
    </div>
  );
}
