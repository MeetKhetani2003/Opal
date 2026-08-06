import Link from "next/link";
import { jobs } from "@/lib/data";

export const metadata = { title: "For Job Seekers" };

export default function JobSeekersPage() {
  return (
    <div className="bg-[#FDFCF8]">
      <section className="mx-auto max-w-[1440px] px-5 lg:px-8 xl:px-12 pt-10 lg:pt-16 pb-8 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6">
          <div className="inline-flex px-3 py-1.5 rounded-full bg-white border border-black/5 text-[11px] font-bold tracking-[0.14em] uppercase text-[#0C3226]/60">For Job Seekers • Career Confidential</div>
          <h1 className="mt-4 font-serif text-[42px] lg:text-[56px] leading-[0.9] text-[#0C3226]">Your next<br /><span className="italic font-light text-[#1B4D3E]">chapter,</span><br />crafted.</h1>
          <p className="mt-4 text-[#0C3226]/60 text-[16px] leading-7 max-w-[520px]">We don’t blast CVs. We build careers — with coaching, confidential search, and introductions to leaders who value craft.</p>
          <div className="mt-6 flex gap-3">
            <Link href="/careers" className="inline-flex bg-[#0C3226] text-white px-6 py-3 rounded-full font-bold text-sm">Explore Opal roles ↗</Link>
            <a href="#register" className="inline-flex bg-white border border-black/10 px-6 py-3 rounded-full font-bold text-sm">Register CV</a>
          </div>
        </div>
        <div className="lg:col-span-6">
          <div className="rounded-[28px] overflow-hidden bg-white luxury-shadow">
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&auto=format&fit=crop&q=60" alt="Candidate" className="w-full h-[380px] object-cover" />
            <div className="p-6 flex gap-4 items-center">
              <div className="w-12 h-12 rounded-full bg-[#0C3226] text-white grid place-items-center text-lg">✦</div>
              <div>
                <div className="font-bold text-[#0C3226]">Confidential • Candidate-first • Always human</div>
                <div className="text-xs text-[#0C3226]/60">No spam. No CV blasts without consent.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 lg:px-8 xl:px-12 pb-8">
        <div className="grid lg:grid-cols-3 gap-5">
          {[
            { t: "Confidential Search", d: "We represent you discreetly to hiring leaders. Your search stays private." },
            { t: "Career Coaching", d: "CV, LinkedIn, and interview coaching with former hiring managers." },
            { t: "Warm Introductions", d: "Not portals. Direct intros to decision-makers who are hiring for bar-raisers." },
          ].map(c=>(
            <div key={c.t} className="rounded-[20px] bg-white border border-black/5 p-7">
              <div className="w-10 h-10 rounded-full bg-[#F6F3EE] grid place-items-center">◈</div>
              <div className="mt-4 font-bold text-[#0C3226]">{c.t}</div>
              <div className="text-sm text-[#0C3226]/60 mt-1">{c.d}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 lg:px-8 xl:px-12 pb-12">
        <h2 className="font-serif text-2xl text-[#0C3226]">Featured opportunities</h2>
        <div className="mt-6 grid gap-3">
          {jobs.slice(0,3).map(j=>(
            <Link key={j.id} href={`/careers/${j.id}`} className="rounded-[16px] bg-white border border-black/5 p-5 flex items-center justify-between hover:shadow-md transition">
              <div>
                <div className="font-bold text-[#0C3226]">{j.title}</div>
                <div className="text-sm text-[#0C3226]/60">{j.location} • {j.type}</div>
              </div>
              <span className="px-4 py-2 rounded-full bg-[#0C3226] text-white text-sm font-bold">View →</span>
            </Link>
          ))}
        </div>

        <form id="register" action="/thank-you" className="mt-8 rounded-[24px] bg-[#0C3226] text-white p-8 lg:p-10 grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-5">
            <h3 className="font-serif text-[28px] leading-none">Register with<br />Opal Talent</h3>
            <p className="text-white/70 text-sm mt-2">Upload your CV. Tell us what great looks like. We’ll match you with intent.</p>
            <div className="mt-4 flex gap-2 text-xs">
              <span className="px-3 py-1.5 rounded-full bg-white/10 border border-white/20">Confidential</span>
              <span className="px-3 py-1.5 rounded-full bg-white/10 border border-white/20">No spam</span>
            </div>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-3">
            <input required placeholder="Full name" className="h-11 rounded-full bg-white text-[#0C3226] px-4 outline-none text-sm" />
            <input required placeholder="Email" type="email" className="h-11 rounded-full bg-white text-[#0C3226] px-4 outline-none text-sm" />
            <input placeholder="Phone" className="h-11 rounded-full bg-white text-[#0C3226] px-4 outline-none text-sm" />
            <input placeholder="Desired role" className="h-11 rounded-full bg-white text-[#0C3226] px-4 outline-none text-sm" />
            <div className="sm:col-span-2 rounded-2xl bg-white/10 border border-white/20 p-4 text-center">
              <div className="text-sm font-bold">Upload CV (PDF)</div>
              <input type="file" className="mt-2 text-xs" />
            </div>
            <button className="sm:col-span-2 h-12 rounded-full bg-white text-[#0C3226] font-bold text-sm hover:bg-white/90 transition">Register CV ↗</button>
          </div>
        </form>
      </section>
    </div>
  );
}
