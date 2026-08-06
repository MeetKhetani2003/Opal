import Link from "next/link";

export const metadata = { title: "For Employers" };

export default function EmployersPage() {
  return (
    <div className="bg-[#FDFCF8]">
      <section className="mx-auto max-w-[1440px] px-5 lg:px-8 xl:px-12 pt-10 lg:pt-16 pb-8 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6">
          <div className="inline-flex px-3 py-1.5 rounded-full bg-[#0C3226] text-white text-[11px] font-bold tracking-[0.14em] uppercase">For Employers • Hire with Precision</div>
          <h1 className="mt-4 font-serif text-[42px] lg:text-[56px] leading-[0.9] text-[#0C3226]">Hire leaders<br /><span className="italic font-light text-[#1B4D3E]">who raise</span><br />the bar.</h1>
          <p className="mt-4 text-[#0C3226]/60 text-[16px] leading-7 max-w-[520px]">Executive search, RPO, and embedded talent — headhunting craft + data science. 92% 12-month retention. 180-day guarantee.</p>
          <div className="mt-6 flex gap-3">
            <Link href="/contact" className="inline-flex bg-[#0C3226] text-white px-6 py-3 rounded-full font-bold text-sm">Book hiring strategy call ↗</Link>
            <Link href="/services/recruitment-talent-acquisition" className="inline-flex bg-white border border-black/10 px-6 py-3 rounded-full font-bold text-sm">Our approach</Link>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-4 max-w-[520px]">
            {[
              ["62% faster", "Shortlist"],
              ["92%", "Retention"],
              ["48h", "First CVs"],
            ].map(([k,l])=>(
              <div key={k} className="rounded-xl bg-[#F6F3EE] p-4 text-center">
                <div className="font-serif font-bold text-[#0C3226]">{k}</div>
                <div className="text-[11px] tracking-[0.14em] uppercase font-bold text-[#0C3226]/40">{l}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-6">
          <div className="rounded-[28px] overflow-hidden luxury-shadow bg-white">
            <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=900&auto=format&fit=crop&q=60" alt="Hiring" className="w-full h-[420px] object-cover" />
            <div className="p-6 flex items-center justify-between">
              <div>
                <div className="font-bold text-[#0C3226]">Assessment • Psychometrics • Structured Interviews</div>
                <div className="text-xs text-[#0C3226]/60">Bias-reduced, evidence-based selection.</div>
              </div>
              <span className="w-10 h-10 rounded-full bg-[#0C3226] text-white grid place-items-center">✓</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 lg:px-8 xl:px-12 pb-12">
        <div className="grid lg:grid-cols-3 gap-5">
          {[
            { t: "Executive Search", d: "Board & C-suite. Deep mapping, discreet outreach, rigorous assessment.", p: "CEO, CFO, COO, CHRO, CTO" },
            { t: "RPO & Embedded", d: "A team inside your team. SLA-driven, scalable, culture-aligned.", p: "From 5 to 500 hires" },
            { t: "Assessment Science", d: "Psychometrics, work samples, and structured interviews that predict performance.", p: "Validated • Fair • Auditable" },
          ].map(c=>(
            <div key={c.t} className="rounded-[20px] bg-white border border-black/5 p-7">
              <div className="w-10 h-10 rounded-full bg-[#0C3226] text-white grid place-items-center">⬡</div>
              <div className="mt-4 font-bold text-[#0C3226]">{c.t}</div>
              <div className="text-sm text-[#0C3226]/60 mt-1">{c.d}</div>
              <div className="mt-3 inline-flex px-3 py-1.5 rounded-full bg-[#F6F3EE] text-xs font-bold">{c.p}</div>
            </div>
          ))}
        </div>

        <form action="/thank-you" className="mt-8 rounded-[24px] bg-[#0C3226] text-white p-8 lg:p-10 grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-5">
            <h3 className="font-serif text-[28px] leading-none">Tell us who<br />you need to hire.</h3>
            <p className="text-white/70 text-sm mt-2">We’ll respond in 3 hours with a shortlist plan and pricing.</p>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-3">
            <input required placeholder="Full name" className="h-11 rounded-full bg-white text-[#0C3226] px-4 outline-none text-sm" />
            <input required placeholder="Work email" type="email" className="h-11 rounded-full bg-white text-[#0C3226] px-4 outline-none text-sm" />
            <input placeholder="Company" className="h-11 rounded-full bg-white text-[#0C3226] px-4 outline-none text-sm" />
            <input placeholder="Role to fill (e.g., CFO)" className="h-11 rounded-full bg-white text-[#0C3226] px-4 outline-none text-sm" />
            <textarea placeholder="Context" rows={2} className="sm:col-span-2 rounded-2xl bg-white text-[#0C3226] p-4 outline-none text-sm" />
            <button className="sm:col-span-2 h-12 rounded-full bg-white text-[#0C3226] font-bold text-sm border-2 border-white hover:bg-transparent hover:text-white transition">Request proposal ↗</button>
          </div>
        </form>
      </section>
    </div>
  );
}
