import Link from "next/link";
import { services } from "@/lib/data";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return services.map(s => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = services.find(x => x.slug === slug);
  return { title: s ? s.title : "Service" };
}

export default async function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = services.find(x => x.slug === slug);
  if (!s) notFound();
  const related = services.filter(x => x.slug !== slug).slice(0, 3);

  return (
    <div className="bg-[#FDFCF8]">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#0C3226]/85" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C3226] via-transparent to-transparent" />
        </div>
        <div className="relative mx-auto max-w-[1440px] px-5 lg:px-8 xl:px-12 py-14 lg:py-20 grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7 text-white">
            <Link href="/services" className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.14em] uppercase text-white/70 hover:text-white">← All services</Link>
            <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-[11px] font-bold tracking-[0.14em] uppercase">{s.icon} {s.title}</div>
            <h1 className="mt-4 font-serif text-[40px] lg:text-[56px] leading-[0.9]">{s.title}</h1>
            <p className="mt-4 text-white/80 max-w-[560px] text-[17px] leading-7">{s.description}</p>
            <div className="mt-8 flex gap-3">
              <Link href="/contact" className="inline-flex bg-white text-[#0C3226] px-7 py-4 rounded-full font-bold text-sm">Book Consultation ↗</Link>
              <a href="#process" className="inline-flex bg-white/10 border border-white/20 text-white px-7 py-4 rounded-full font-bold text-sm backdrop-blur">Our Process</a>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-[24px] bg-white p-7 luxury-shadow">
              <div className="text-[11px] tracking-[0.14em] uppercase font-bold text-[#0C3226]/40">Business Impact</div>
              <div className="mt-4 grid grid-cols-1 gap-4">
                {s.benefits.map(b=>(
                  <div key={b} className="flex gap-3 items-center rounded-xl bg-[#F6F3EE] p-4">
                    <span className="w-8 h-8 rounded-full bg-[#0C3226] text-white grid place-items-center text-xs">✓</span>
                    <span className="text-sm font-bold text-[#0C3226]">{b}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-xs text-[#0C3226]/60">Fixed + success fee models available. Partner-led every day.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview + Challenges + Solutions */}
      <section className="mx-auto max-w-[1440px] px-5 lg:px-8 xl:px-12 py-12 lg:py-16 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-8 space-y-10">
          <div>
            <h2 className="font-serif text-[28px] text-[#0C3226]">Overview</h2>
            <p className="mt-3 text-[16px] leading-7 text-[#0C3226]/70">We combine deep domain expertise with behavioral science, process mining, and change architecture — so strategy translates into durable operation. Every engagement is partner-led, integrated across practices, and measured on adoption and P&L.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-[20px] bg-white border border-black/5 p-6">
              <div className="text-[11px] tracking-[0.14em] uppercase font-bold text-[#0C3226]/40">Business Challenges We Solve</div>
              <ul className="mt-4 space-y-3">
                {s.challenges.map(c=>(
                  <li key={c} className="flex gap-3 text-sm leading-5 text-[#0C3226]/70"><span className="text-[#C8A96A]">●</span> {c}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-[20px] bg-[#0C3226] text-white p-6">
              <div className="text-[11px] tracking-[0.14em] uppercase font-bold text-white/50">Our Solutions</div>
              <ul className="mt-4 space-y-3">
                {s.challenges?.map(c=>(
                  <li key={c} className="flex gap-3 text-sm leading-5"><span className="text-white/40 font-bold">✓</span> {c}</li>
                ))}
              </ul>
            </div>
          </div>

          <div id="process">
            <h3 className="font-serif text-[24px] text-[#0C3226]">Our Process</h3>
            <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-3">
              {s.process.map((step,i)=>(
                <div key={step} className="rounded-2xl bg-white border border-black/5 p-5 text-center">
                  <div className="mx-auto w-10 h-10 rounded-full bg-[#0C3226] text-white grid place-items-center font-bold text-sm">0{i+1}</div>
                  <div className="mt-3 font-bold text-[#0C3226]">{step}</div>
                  <div className="text-xs text-[#0C3226]/60 mt-1">Sprint-based • Measurable</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[24px] overflow-hidden bg-white border border-black/5 grid md:grid-cols-2">
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=60" alt="Workshop" className="w-full h-full object-cover min-h-[260px]" />
            <div className="p-7">
              <div className="text-[11px] tracking-[0.14em] uppercase font-bold text-[#0C3226]/40">Case Snapshot</div>
              <div className="mt-2 font-serif text-xl font-bold text-[#0C3226]">Tangible outcomes in 90 days</div>
              <p className="mt-2 text-sm leading-6 text-[#0C3226]/60">We instrument every program with a control tower — weekly value, risk telemetry, and adoption metrics. You see progress, not just activity.</p>
              <Link href="/case-studies" className="mt-4 inline-flex text-sm font-bold text-[#0C3226]">View case studies →</Link>
            </div>
          </div>

          {/* Removed FAQ section */}
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4 space-y-6">
          <div className="rounded-[20px] bg-white border border-black/5 p-6 sticky top-28">
            <div className="font-serif text-lg font-bold text-[#0C3226]">Industries we serve with {s.title.toLowerCase()}</div>
            <div className="mt-4 grid grid-cols-2 gap-2">
              {["Financial Services","Healthcare","Technology","Manufacturing","Retail","Public Sector"].map(ind=>(
                <span key={ind} className="px-3 py-2 rounded-full bg-[#F6F3EE] text-xs font-bold text-center">{ind}</span>
              ))}
            </div>

            <div className="mt-6 rounded-xl bg-[#F6F3EE] p-4">
              <div className="text-sm font-bold text-[#0C3226]">Talk to a Partner</div>
              <div className="text-xs text-[#0C3226]/60">No SDR. No spam. Direct partner access.</div>
              <Link href="/contact" className="mt-3 inline-flex w-full justify-center bg-white border py-2.5 rounded-full font-bold text-sm">Book 30 min</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="bg-[#F6F3EE] border-t border-black/5">
        <div className="mx-auto max-w-[1440px] px-5 lg:px-8 xl:px-12 py-12">
          <div className="flex items-center justify-between">
            <h3 className="font-serif text-[24px] text-[#0C3226]">Related Services</h3>
            <Link href="/services" className="text-sm font-bold">View all →</Link>
          </div>
          <div className="mt-6 grid md:grid-cols-3 gap-4">
            {related.map(r=>(
              <Link key={r.slug} href={`/services/${r.slug}`} className="rounded-[20px] bg-white border border-black/5 overflow-hidden group">
                <img src={r.image} alt={r.title} className="w-full h-[160px] object-cover group-hover:scale-105 transition duration-700" />
                <div className="p-5">
                  <div className="font-bold text-[#0C3226]">{r.title}</div>
                  <div className="text-sm text-[#0C3226]/60 line-clamp-2">{r.short}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
