import Link from "next/link";
import { services } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-[#08231A] text-white relative overflow-hidden">
      {/* Decorative top line */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />

      <div className="relative mx-auto max-w-[1440px] px-5 lg:px-8 xl:px-12">
        {/* Newsletter */}
        <div className="py-10 lg:py-14 grid lg:grid-cols-12 gap-8 items-center border-b border-white/10">
          <div className="lg:col-span-5">
            <div className="text-[11px] tracking-[0.18em] uppercase font-bold text-white/50">The Opal Letter</div>
            <h3 className="mt-2 font-serif text-[28px] lg:text-[32px] leading-none">Board-level insight,<br />monthly.</h3>
          </div>
          <div className="lg:col-span-7 flex flex-col sm:flex-row gap-3">
            <input placeholder="Work email" className="flex-1 h-[52px] rounded-full bg-white/10 border border-white/10 px-6 placeholder:text-white/40 outline-none focus:border-white/30 focus:bg-white/15 transition backdrop-blur" />
            <button className="h-[52px] px-8 rounded-full bg-white text-[#08231A] font-bold text-sm tracking-[0.06em] uppercase hover:bg-white/90 transition">Subscribe ↗</button>
          </div>
          <div className="lg:col-span-12 text-[11px] text-white/40 -mt-4">No spam. Unsubscribe anytime. Privacy-first.</div>
        </div>

        {/* Main grid */}
        <div className="py-12 lg:py-16 grid grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          <div className="col-span-2 lg:col-span-4">
            <div className="flex items-center h-16 lg:h-24">
              <img src="/logos/logo-secondary.png" alt="Opal Management & Consulting" className="h-full w-auto object-contain" />
            </div>
            <p className="mt-5 text-sm leading-6 text-white/70 max-w-sm">Boutique craft. Enterprise rigor. We partner with ambitious leaders to design strategy, build capability, and deliver sustainable growth across the GCC and beyond.</p>
            <div className="mt-6 flex gap-3">
              {["in", "𝕏", "IG", "YT"].map(s=>(
                <a key={s} href="#" className="w-9 h-9 rounded-full bg-white/10 grid place-items-center text-xs font-bold hover:bg-white hover:text-[#08231A] transition">{s}</a>
              ))}
            </div>
            <div className="mt-8 text-xs leading-5 text-white/50">
              Dubai • DIFC Gate Village 10<br />Riyadh • King Abdullah Financial District<br />Doha • West Bay • Muscat • Qurum
            </div>
          </div>

          <div className="col-span-1 lg:col-span-2">
            <div className="text-[11px] tracking-[0.18em] uppercase font-bold text-white/50 mb-4">Company</div>
            <ul className="space-y-3 text-sm text-white/80">
              {[
                ["About Us", "/about"],
                ["Case Studies", "/case-studies"],
                ["Insights", "/insights"],
                ["CSR", "/csr"],
                ["Employee Wellbeing", "/wellbeing"],
                ["Careers", "/careers"],
              ].map(([l,h])=>(
                <li key={l}><Link href={h} className="hover:text-white transition">{l}</Link></li>
              ))}
            </ul>
          </div>

          <div className="col-span-1 lg:col-span-3">
            <div className="text-[11px] tracking-[0.18em] uppercase font-bold text-white/50 mb-4">Services</div>
            <ul className="space-y-2.5 text-sm text-white/80 columns-1">
              {services.slice(0,8).map(s=>(
                <li key={s.slug}><Link href={`/services/${s.slug}`} className="hover:text-white transition leading-tight block">{s.title}</Link></li>
              ))}
              <li><Link href="/services" className="text-white font-bold underline underline-offset-4">View all 13 →</Link></li>
            </ul>
          </div>

          <div className="col-span-2 lg:col-span-3">
            <div className="text-[11px] tracking-[0.18em] uppercase font-bold text-white/50 mb-4">Get in touch</div>
            <div className="rounded-2xl bg-white/5 border border-white/10 p-5 backdrop-blur">
              <div className="text-sm font-semibold">Book a consultation</div>
              <p className="text-sm leading-5 text-white/60 mt-1">30-minute discovery with a Partner. No pitch, just clarity.</p>
              <Link href="/contact" className="mt-4 inline-flex w-full justify-center bg-white text-[#08231A] py-3 rounded-full font-bold text-sm">Start conversation ↗</Link>
              <div className="mt-4 text-xs text-white/50 space-y-1">
                <div>hello@opalconsulting.ae</div>
                <div>+971 4 401 2345</div>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-2 text-[11px]">
              <Link href="/employers" className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/15 transition">For Employers</Link>
              <Link href="/job-seekers" className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/15 transition">For Job Seekers</Link>
            </div>
          </div>
        </div>

        <div className="py-6 border-t border-white/10 flex flex-col lg:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div>© {new Date().getFullYear()} Opal Management & Consulting. All rights reserved. Strategic Solutions. Sustainable Growth.</div>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition">Terms & Conditions</Link>
            <a href="#" className="hover:text-white transition">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
