import { jobs } from "@/lib/data";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams(){ return jobs.map(j=>({ id: j.id })); }
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const j = jobs.find(x=>x.id===id);
  return { title: j?.title || "Job" };
}

export default async function JobDetail({ params }: { params: Promise<{ id:string }> }) {
  const { id } = await params;
  const job = jobs.find(j=>j.id===id);
  if (!job) notFound();
  return (
    <div className="bg-[#FDFCF8]">
      <section className="mx-auto max-w-[960px] px-5 lg:px-8 pt-10 pb-8">
        <Link href="/careers" className="text-xs font-bold tracking-[0.14em] uppercase text-[#0C3226]/60 hover:text-[#0C3226]">← All positions</Link>
        <div className="mt-6 flex flex-wrap items-center gap-2 text-[11px] tracking-[0.14em] uppercase font-bold text-[#0C3226]/40">
          <span className="px-3 py-1.5 rounded-full bg-[#0C3226] text-white">{job.dept}</span>
          <span>{job.type}</span><span>•</span><span>{job.exp}</span><span>•</span><span>{job.location}</span>
        </div>
        <h1 className="mt-4 font-serif text-[32px] lg:text-[44px] leading-[0.9] text-[#0C3226]">{job.title}</h1>
        <p className="mt-3 text-[#0C3226]/60 max-w-[720px]">{job.desc} You’ll partner directly with senior leaders, own outcomes, and be sponsored for growth.</p>
        <div className="mt-6 flex gap-3">
          <a href="#apply" className="inline-flex bg-[#0C3226] text-white px-7 py-4 rounded-full font-bold text-sm">Apply now ↗</a>
          <button className="inline-flex bg-white border border-black/10 px-7 py-4 rounded-full font-bold text-sm">Share</button>
        </div>
      </section>

      <section className="mx-auto max-w-[960px] px-5 lg:px-8 pb-12 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-8 space-y-8">
          <div className="rounded-[20px] bg-white border border-black/5 p-7">
            <h2 className="font-serif text-xl font-bold text-[#0C3226]">The role</h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-[#0C3226]/70 list-disc list-inside">
              <li>Partner with C-suite to diagnose, design, and deliver transformation.</li>
              <li>Lead sprints, control towers, and change — instrumenting value weekly.</li>
              <li>Coach client leaders; embed capability; ensure adoption sustains.</li>
              <li>Contribute to Opal thought leadership and academy.</li>
            </ul>
          </div>
          <div className="rounded-[20px] bg-white border border-black/5 p-7">
            <h2 className="font-serif text-xl font-bold text-[#0C3226]">What we look for</h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-[#0C3226]/70 list-disc list-inside">
              <li>5–10 years in consulting, operator, or scale-up roles.</li>
              <li>Evidence of impact with metrics (not just responsibilities).</li>
              <li>Craft, candour, and accountability — the Opal Way.</li>
              <li>GCC experience valued; curiosity required.</li>
            </ul>
          </div>
          <div className="rounded-[20px] bg-[#F6F3EE] p-7">
            <h2 className="font-serif text-xl font-bold text-[#0C3226]">Hiring Process</h2>
            <div className="mt-4 grid grid-cols-4 gap-2 text-center">
              {["Screen","Case","Partners","Offer"].map((s,i)=>(
                <div key={s} className="rounded-xl bg-white p-4 border border-black/5">
                  <div className="w-8 h-8 rounded-full bg-[#0C3226] text-white grid place-items-center mx-auto text-xs font-bold">{i+1}</div>
                  <div className="text-xs font-bold mt-2">{s}</div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-[#0C3226]/60">Average 2 weeks end-to-end. Transparent feedback at each stage.</p>
          </div>
        </div>

        <div className="lg:col-span-4">
          <form id="apply" action="/thank-you" className="rounded-[20px] bg-white border border-black/5 p-6 sticky top-28 space-y-3">
            <h3 className="font-serif text-lg font-bold text-[#0C3226]">Apply for this role</h3>
            <input required placeholder="Full name" className="w-full h-11 rounded-full border border-black/10 px-4 outline-none focus:border-[#0C3226] text-sm" />
            <input required placeholder="Work email" type="email" className="w-full h-11 rounded-full border border-black/10 px-4 outline-none focus:border-[#0C3226] text-sm" />
            <input placeholder="Phone" className="w-full h-11 rounded-full border border-black/10 px-4 outline-none focus:border-[#0C3226] text-sm" />
            <input placeholder="LinkedIn URL" className="w-full h-11 rounded-full border border-black/10 px-4 outline-none focus:border-[#0C3226] text-sm" />
            <div className="rounded-xl border border-dashed border-black/20 p-6 text-center bg-[#F6F3EE]">
              <div className="text-sm font-bold">Upload CV</div>
              <div className="text-xs text-[#0C3226]/60">PDF, max 5MB</div>
              <input type="file" className="mt-3 text-xs" />
            </div>
            <textarea placeholder="Why Opal? Why this role? (150 words)" rows={4} className="w-full rounded-2xl border border-black/10 p-4 outline-none focus:border-[#0C3226] text-sm" />
            <button type="submit" className="w-full h-12 rounded-full bg-[#0C3226] text-white font-bold text-sm">Submit application ↗</button>
            <div className="text-[11px] text-center text-[#0C3226]/50">We reply within 5 business days.</div>
          </form>
        </div>
      </section>
    </div>
  );
}
