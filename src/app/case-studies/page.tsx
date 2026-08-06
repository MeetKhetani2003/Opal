import Link from "next/link";
import { caseStudies } from "@/lib/data";

export const metadata = { title: "Case Studies" };

export default function CaseStudiesPage() {
  return (
    <div className="bg-[#FDFCF8]">
      <section className="mx-auto max-w-[1440px] px-5 lg:px-8 xl:px-12 pt-10 lg:pt-16 pb-8">
        <div className="inline-flex px-3 py-1.5 rounded-full bg-[#0C3226] text-white text-[11px] font-bold tracking-[0.14em] uppercase">Proof, Not Promises • 6 Stories</div>
        <h1 className="mt-4 font-serif text-[42px] lg:text-[64px] leading-[0.9] text-[#0C3226]">Impact you can<br /><span className="italic font-light text-[#1B4D3E]">feel</span> on the P&L.</h1>
        <p className="mt-4 max-w-[640px] text-[16px] leading-7 text-[#0C3226]/60">Challenge → Strategy → Execution → Results. Every story is partner-led, measurable, and sustained.</p>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 lg:px-8 xl:px-12 pb-14 lg:pb-20 space-y-6">
        {caseStudies.map((c, i)=>(
          <div key={c.slug} className={`rounded-[32px] overflow-hidden bg-white border border-black/5 luxury-shadow grid lg:grid-cols-12 ${i%2===1?"lg:[&>div:first-child]:order-2":""}`}>
            <div className="lg:col-span-5 relative h-[320px] lg:h-auto">
              <img src={c.image} alt={c.title} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-white text-[11px] font-bold tracking-[0.14em] uppercase">{c.industry}</div>
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-[#0C3226] text-white p-4">
                <div className="text-xs font-bold tracking-[0.14em] uppercase text-white/60">Client</div>
                <div className="font-bold">{c.client}</div>
                <div className="text-xs text-white/70">— {c.person}</div>
              </div>
            </div>
            <div className="lg:col-span-7 p-7 lg:p-10">
              <h2 className="font-serif text-[24px] lg:text-[28px] leading-tight text-[#0C3226]">{c.title}</h2>

              <div className="mt-6 grid sm:grid-cols-3 gap-4">
                {[
                  ["Challenge", c.challenge],
                  ["Strategy", c.strategy],
                  ["Execution", c.execution],
                ].map(([k,v])=>(
                  <div key={k} className="rounded-2xl bg-[#F6F3EE] p-4">
                    <div className="text-[11px] tracking-[0.14em] uppercase font-bold text-[#0C3226]/40">{k}</div>
                    <div className="mt-1 text-sm leading-5 text-[#0C3226]/80">{v}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <div className="text-[11px] tracking-[0.14em] uppercase font-bold text-[#0C3226]/40">Results & Impact</div>
                <div className="mt-3 grid sm:grid-cols-3 gap-3">
                  {c.results.map(r=>(
                    <div key={r} className="rounded-xl border border-black/5 bg-white p-4 text-center">
                      <div className="font-serif text-[16px] font-bold text-[#0C3226]">{r.split(" ")[0]}</div>
                      <div className="text-xs text-[#0C3226]/60">{r}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 rounded-2xl bg-[#0C3226] text-white p-5 flex gap-4 items-start">
                <span className="text-2xl">“</span>
                <div>
                  <div className="font-serif text-[16px] leading-6">“{c.quote}”</div>
                  <div className="text-xs text-white/60 mt-1">— {c.person}</div>
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <Link href="/contact" className="inline-flex bg-[#0C3226] text-white px-6 py-3 rounded-full font-bold text-sm">Discuss similar challenge ↗</Link>
                <span className="inline-flex items-center px-4 py-3 rounded-full border text-sm font-bold">Before / After metrics available</span>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
