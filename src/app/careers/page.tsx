import Link from "next/link";
import { jobs } from "@/lib/data";

export const metadata = { title: "Careers" };

export default function CareersPage() {
  return (
    <div className="bg-[#FDFCF8]">
      <section className="relative overflow-hidden bg-[#0C3226] text-white">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&auto=format&fit=crop&q=60" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C3226] via-[#0C3226]/90 to-transparent" />
        <div className="relative mx-auto max-w-[1440px] px-5 lg:px-8 xl:px-12 py-14 lg:py-20 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-[11px] font-bold tracking-[0.14em] uppercase">Careers • Life at Opal • Hiring Process</div>
            <h1 className="mt-4 font-serif text-[42px] lg:text-[60px] leading-[0.9]">Do the best work<br /><span className="italic font-light text-white/80">of your career.</span></h1>
            <p className="mt-4 text-white/70 max-w-[560px] text-[16px] leading-7">We hire for slope, not just y-intercept. Growth sprints, sponsorship, and profit share for all. If you love craft, candour, and accountability — you’ll love it here.</p>
            <div className="mt-6 flex gap-3">
              <a href="#open" className="inline-flex bg-white text-[#0C3226] px-6 py-3 rounded-full font-bold text-sm">View open roles ↗</a>
              <Link href="/wellbeing" className="inline-flex bg-white/10 border border-white/20 px-6 py-3 rounded-full font-bold text-sm backdrop-blur">Life at Opal</Link>
            </div>
          </div>
          <div className="lg:col-span-5 grid grid-cols-3 gap-3">
            {[
              ["94%", "Offer accept"],
              ["42", "Nationalities"],
              ["4.8★", "Glassdoor"],
            ].map(([k,l])=>(
              <div key={k} className="rounded-2xl bg-white/10 backdrop-blur border border-white/10 p-5 text-center">
                <div className="font-serif text-xl font-bold">{k}</div>
                <div className="text-[11px] tracking-[0.14em] uppercase font-bold text-white/70">{l}</div>
              </div>
            ))}
            <div className="col-span-3 rounded-2xl bg-white text-[#0C3226] p-5 flex items-center gap-4">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=60" alt="" className="w-10 h-10 rounded-full object-cover" />
              <div className="text-sm"><span className="font-bold">Hiring Process:</span> Screening → Case → Partners → Offer (2 weeks avg)</div>
            </div>
          </div>
        </div>
      </section>

      <section id="open" className="mx-auto max-w-[1440px] px-5 lg:px-8 xl:px-12 py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <h2 className="font-serif text-[32px] leading-none text-[#0C3226]">Open Positions</h2>
            <p className="text-sm text-[#0C3226]/60 mt-2">6 roles open • Hybrid & remote across GCC</p>
          </div>
          <div className="flex gap-2">
            <select className="h-10 rounded-full border border-black/10 bg-white px-4 text-sm"><option>All Departments</option></select>
            <select className="h-10 rounded-full border border-black/10 bg-white px-4 text-sm"><option>All Locations</option></select>
          </div>
        </div>

        <div className="mt-8 grid gap-4">
          {jobs.map(job=>(
            <Link key={job.id} href={`/careers/${job.id}`} className="group rounded-[20px] bg-white border border-black/5 p-6 lg:p-7 flex flex-col lg:flex-row lg:items-center justify-between gap-4 hover:shadow-lg transition">
              <div>
                <div className="flex items-center gap-2 text-[11px] tracking-[0.14em] uppercase font-bold text-[#0C3226]/40"><span className="px-2.5 py-1 rounded-full bg-[#F6F3EE] text-[#0C3226]">{job.dept}</span> {job.type} • {job.exp}</div>
                <div className="mt-2 font-serif text-[18px] font-bold text-[#0C3226] group-hover:underline">{job.title}</div>
                <div className="text-sm text-[#0C3226]/60">{job.location} — {job.desc}</div>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <span className="hidden lg:inline text-xs font-bold text-[#0C3226]/50">{job.id.toUpperCase()}</span>
                <span className="inline-flex items-center gap-1 bg-[#0C3226] text-white px-5 py-3 rounded-full font-bold text-sm">Apply ↗</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 grid lg:grid-cols-3 gap-5">
          {[
            { t: "Life at Opal", d: "Studios, rituals, and recharge. Meeting-free Fridays, flexible hybrid, and ergonomic ateliers.", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&auto=format&fit=crop&q=60" },
            { t: "Benefits", d: "Profit share for all, comprehensive cover, tuition support, and growth sprints.", img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&auto=format&fit=crop&q=60" },
            { t: "Application Tips", d: "Show craft. Share impact with metrics. Let your curiosity shine.", img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&auto=format&fit=crop&q=60" },
          ].map(card=>(
            <div key={card.t} className="rounded-[20px] overflow-hidden bg-white border border-black/5">
              <img src={card.img} alt={card.t} className="w-full h-[160px] object-cover" />
              <div className="p-6">
                <div className="font-bold text-[#0C3226]">{card.t}</div>
                <div className="text-sm leading-5 text-[#0C3226]/60 mt-1">{card.d}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 lg:px-8 xl:px-12 pb-14">
        <div className="rounded-[24px] bg-[#F6F3EE] border border-black/5 p-8 lg:p-10 grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <h3 className="font-serif text-2xl text-[#0C3226]">Don’t see your role?</h3>
            <p className="text-sm text-[#0C3226]/60 mt-2">Send your CV and a note on the impact you want to create. We read every application.</p>
          </div>
          <form action="/thank-you" className="lg:col-span-5 flex gap-3">
            <input required placeholder="Work email" type="email" className="flex-1 h-12 rounded-full bg-white border border-black/10 px-5 outline-none focus:border-[#0C3226] text-sm" />
            <button className="h-12 px-6 rounded-full bg-[#0C3226] text-white font-bold text-sm">Send CV ↗</button>
          </form>
        </div>
      </section>
    </div>
  );
}
