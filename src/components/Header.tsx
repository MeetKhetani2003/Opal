"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { services } from "@/lib/data";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mega, setMega] = useState<null | "services" | "industries">(null);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 border-b ${
          scrolled || mega || mobileOpen
            ? "bg-[#FDFCF8]/95 backdrop-blur-xl border-black/5 shadow-[0_8px_32px_rgba(12,50,38,0.08)]"
            : "bg-transparent border-transparent"
        }`}
        onMouseLeave={() => setMega(null)}
      >
        {/* Top bar */}
        <div className="hidden lg:flex items-center justify-between px-8 xl:px-12 py-2 text-[11px] tracking-[0.12em] uppercase font-semibold border-b border-black/5 bg-[#0C3226] text-white/90">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" /> Dubai • Riyadh • Doha • Muscat</span>
            <span className="opacity-50 hidden xl:inline">|</span>
            <span className="hidden xl:inline">Strategic Solutions. Sustainable Growth.</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="mailto:hello@opalconsulting.ae" className="hover:text-white transition">hello@opalconsulting.ae</a>
            <a href="tel:+97144012345" className="hover:text-white transition">+971 4 401 2345</a>
          </div>
        </div>

        <div className="mx-auto max-w-[1440px] px-5 lg:px-8 xl:px-12">
          <div className="flex h-[72px] lg:h-[84px] items-center justify-between gap-6">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 shrink-0 group">
              <div className="relative">
                <div className="flex items-center justify-center h-14 lg:h-16">
                  <img src="/logos/logo-primary.png" alt="Opal Management & Consulting" className="h-full w-auto object-contain mix-blend-multiply" />
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
              ].map((l) => (
                <Link key={l.label} href={l.href} className="px-3 xl:px-4 py-2 text-[13px] font-semibold tracking-[0.06em] uppercase text-[#0C3226]/80 hover:text-[#0C3226] transition">
                  {l.label}
                </Link>
              ))}
              <button
                onMouseEnter={() => setMega("services")}
                className={`px-3 xl:px-4 py-2 text-[13px] font-semibold tracking-[0.06em] uppercase flex items-center gap-1.5 transition ${mega==="services" ? "text-[#0C3226]" : "text-[#0C3226]/80 hover:text-[#0C3226]"}`}
              >
                Services <span className={`transition ${mega==="services"?"rotate-180":""}`}>⌄</span>
              </button>
              {[
                { label: "Case Studies", href: "/case-studies" },
                { label: "Insights", href: "/insights" },
                { label: "Careers", href: "/careers" },
                { label: "Contact", href: "/contact" },
              ].map((l) => (
                <Link key={l.label} href={l.href} className="px-3 xl:px-4 py-2 text-[13px] font-semibold tracking-[0.06em] uppercase text-[#0C3226]/80 hover:text-[#0C3226] transition">
                  {l.label}
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-2 lg:gap-3">
              <Link href="/contact" className="hidden lg:inline-flex items-center gap-2 bg-[#0C3226] text-white px-5 xl:px-6 py-3 rounded-full text-[13px] font-bold tracking-[0.06em] uppercase hover:bg-[#143D30] transition luxury-shadow">
                Book Consultation <span>↗</span>
              </Link>
              <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden w-10 h-10 grid place-items-center rounded-full bg-[#0C3226] text-white">
                <span className="text-lg leading-none">{mobileOpen ? "✕" : "☰"}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Mega menus */}
        <AnimatePresence>
          {mega === "services" && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onMouseLeave={() => setMega(null)}
              className="absolute inset-x-0 top-full bg-[#FDFCF8] border-t border-black/5 shadow-[0_32px_80px_rgba(0,0,0,0.12)] hidden lg:block"
            >
              <div className="mx-auto max-w-[1440px] px-8 xl:px-12 py-8">
                <div className="grid grid-cols-12 gap-8">
                  <div className="col-span-3">
                    <div className="text-[11px] tracking-[0.18em] uppercase font-bold text-[#0C3226]/40 mb-3">Our Expertise — 13 Practices</div>
                    <h3 className="font-serif text-[28px] leading-none text-[#0C3226]">Built for<br />board-level<br />outcomes.</h3>
                    <p className="mt-3 text-sm leading-6 text-[#0C3226]/60">One integrated P&L. Partner-led every day. No bait-and-switch.</p>
                    <Link href="/services" onClick={()=>setMega(null)} className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#0C3226] border-b border-[#0C3226] pb-1">View all services ↗</Link>
                  </div>
                  <div className="col-span-9 grid grid-cols-3 gap-3">
                    {services.map((s) => (
                      <Link key={s.slug} href={`/services/${s.slug}`} onClick={()=>setMega(null)} className="group relative overflow-hidden rounded-2xl bg-white border border-black/5 p-4 hover:shadow-lg hover:border-black/10 transition">
                        <div className="flex items-start justify-between gap-3">
                          <div className="w-9 h-9 rounded-full bg-[#0C3226] text-white grid place-items-center text-sm">{s.icon}</div>
                          <span className="text-[10px] tracking-[0.14em] uppercase font-bold text-[#0C3226]/30 group-hover:text-[#0C3226]/60">0{s.slug.length % 9 + 1}</span>
                        </div>
                        <div className="mt-3 font-semibold text-[13px] leading-tight text-[#0C3226] line-clamp-2">{s.title}</div>
                        <div className="mt-1 text-[11px] leading-5 text-[#0C3226]/55 line-clamp-2">{s.short}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>


        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="lg:hidden bg-[#FDFCF8] border-t border-black/5 overflow-hidden">
              <div className="px-5 py-6 space-y-1 max-h-[80vh] overflow-y-auto">
                <Link href="/" onClick={()=>setMobileOpen(false)} className="block py-3 text-lg font-bold border-b border-black/5">Home</Link>
                <Link href="/about" onClick={()=>setMobileOpen(false)} className="block py-3 text-lg font-bold border-b border-black/5">About</Link>
                <details className="group border-b border-black/5">
                  <summary className="list-none py-3 flex items-center justify-between text-lg font-bold">Services <span className="group-open:rotate-180 transition">⌄</span></summary>
                  <div className="pb-4 grid grid-cols-1 gap-2">
                    {services.map(s=>(
                      <Link key={s.slug} href={`/services/${s.slug}`} onClick={()=>setMobileOpen(false)} className="flex items-center gap-3 p-3 rounded-xl bg-white border border-black/5">
                        <span className="w-8 h-8 rounded-full bg-[#0C3226] text-white grid place-items-center text-xs">{s.icon}</span>
                        <span className="text-sm font-semibold">{s.title}</span>
                      </Link>
                    ))}
                  </div>
                </details>
                <Link href="/case-studies" onClick={()=>setMobileOpen(false)} className="block py-3 text-lg font-bold border-b border-black/5">Case Studies</Link>
                <Link href="/insights" onClick={()=>setMobileOpen(false)} className="block py-3 text-lg font-bold border-b border-black/5">Insights</Link>
                <Link href="/careers" onClick={()=>setMobileOpen(false)} className="block py-3 text-lg font-bold border-b border-black/5">Careers</Link>
                <Link href="/csr" onClick={()=>setMobileOpen(false)} className="block py-3 text-lg font-bold border-b border-black/5">CSR</Link>
                <Link href="/wellbeing" onClick={()=>setMobileOpen(false)} className="block py-3 text-lg font-bold border-b border-black/5">Employee Wellbeing</Link>
                <Link href="/contact" onClick={()=>setMobileOpen(false)} className="mt-6 flex items-center justify-center gap-2 bg-[#0C3226] text-white py-4 rounded-full font-bold">Book Consultation ↗</Link>
                <div className="grid grid-cols-2 gap-3 pt-4">
                  <Link href="/employers" onClick={()=>setMobileOpen(false)} className="py-3 rounded-full border text-center font-bold text-sm">For Employers</Link>
                  <Link href="/job-seekers" onClick={()=>setMobileOpen(false)} className="py-3 rounded-full border text-center font-bold text-sm">For Job Seekers</Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      {/* Spacer for sticky header */}
      <div className="h-[72px] lg:h-[108px]" />
    </>
  );
}
