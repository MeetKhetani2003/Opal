import Link from "next/link";
import { insights } from "@/lib/data";
import { notFound } from "next/navigation";

export async function generateStaticParams() { return insights.map(i=>({ slug: i.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = insights.find(x=>x.slug===slug);
  return { title: p?.title || "Insight" };
}

export default async function InsightDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = insights.find(x=>x.slug===slug);
  if (!post) notFound();
  const related = insights.filter(x=>x.slug!==slug).slice(0,3);
  return (
    <div className="bg-[#FDFCF8]">
      <section className="mx-auto max-w-[960px] px-5 lg:px-8 pt-10 pb-8">
        <Link href="/insights" className="text-xs font-bold tracking-[0.14em] uppercase text-[#0C3226]/60 hover:text-[#0C3226]">← Back to Journal</Link>
        <div className="mt-6 flex items-center gap-2 text-[11px] tracking-[0.14em] uppercase font-bold text-[#0C3226]/40">
          <span className="px-3 py-1.5 rounded-full bg-[#0C3226] text-white">{post.category}</span>
          <span>{post.date}</span><span>•</span><span>{post.read}</span><span>•</span><span>By {post.author}</span>
        </div>
        <h1 className="mt-4 font-serif text-[36px] lg:text-[48px] leading-[0.9] text-[#0C3226]">{post.title}</h1>
        <p className="mt-4 text-[18px] leading-7 text-[#0C3226]/70">{post.excerpt} This piece distills field work across 40+ transformations into practical moves you can run next week.</p>
        <div className="mt-8 rounded-[24px] overflow-hidden luxury-shadow">
          <img src={post.image} alt={post.title} className="w-full h-[420px] object-cover" />
        </div>
      </section>

      <article className="mx-auto max-w-[720px] px-5 lg:px-8 pb-12">
        <div className="prose prose-neutral max-w-none prose-headings:font-serif prose-headings:font-bold prose-a:text-[#0C3226] prose-a:underline">
          <p className="lead text-[17px] leading-7 text-[#0C3226]/70">The best leaders we serve share a superpower: they turn ambiguity into momentum. Not by having all the answers, but by building systems that surface the right questions — quickly, safely, and repeatedly.</p>
          <h2>01 — The Myth of the Heroic Plan</h2>
          <p>Annual planning cycles assume stability. Our world offers the opposite. In our work with 500+ enterprises, the firms that thrive replace monolithic plans with rolling, outcome-based rhythms — quarterly bets, weekly telemetry, and monthly learning reviews.</p>
          <blockquote className="border-l-4 border-[#0C3226] pl-6 italic">Strategy is not a document. It’s the cadence of consistent choices.</blockquote>
          <h2>02 — Three Levers That Actually Move the Needle</h2>
          <ul>
            <li><strong>Talent density over headcount</strong> — skills marketplaces, internal mobility, and rigorous bars.</li>
            <li><strong>Process flow over functional silos</strong> — value streams, andons, and frontline kaizen.</li>
            <li><strong>Data as product</strong> — trusted, governed, and owned close to the decision.</li>
          </ul>
          <h2>03 — What to Do Next Monday</h2>
          <ol>
            <li>Pick one value stream. Map its friction with the people who live it.</li>
            <li>Run a 2-week AI sprint — not to automate, but to illuminate.</li>
            <li>Hold a talent council. Move one high-potential to a stretch role before they ask.</li>
          </ol>
          <p>Tangible progress beats polished decks. Start small. Instrument. Sustain.</p>
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {["Leadership","Transformation","GCC","Future of Work"].map(t=>(
            <span key={t} className="px-3 py-1.5 rounded-full bg-white border border-black/10 text-xs font-bold">#{t}</span>
          ))}
        </div>

        <div className="mt-10 rounded-[20px] bg-[#0C3226] text-white p-6 flex items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=60" alt={post.author} className="w-12 h-12 rounded-full object-cover" />
            <div>
              <div className="font-bold">{post.author}</div>
              <div className="text-xs text-white/60">Partner, Opal Management & Consulting</div>
            </div>
          </div>
          <button className="hidden sm:inline-flex px-5 py-2.5 rounded-full bg-white text-[#0C3226] font-bold text-sm">Share ↗</button>
        </div>
      </article>

      <section className="mx-auto max-w-[1440px] px-5 lg:px-8 xl:px-12 pb-14">
        <div className="flex items-center justify-between">
          <h3 className="font-serif text-2xl text-[#0C3226]">Related reading</h3>
          <Link href="/insights" className="text-sm font-bold">View all →</Link>
        </div>
        <div className="mt-6 grid md:grid-cols-3 gap-5">
          {related.map(r=>(
            <Link key={r.slug} href={`/insights/${r.slug}`} className="rounded-[20px] overflow-hidden bg-white border border-black/5 group">
              <img src={r.image} alt={r.title} className="w-full h-[160px] object-cover group-hover:scale-105 transition duration-700" />
              <div className="p-5">
                <div className="text-[11px] tracking-[0.14em] uppercase font-bold text-[#0C3226]/40">{r.category}</div>
                <div className="font-bold text-[#0C3226] leading-tight mt-1 group-hover:underline">{r.title}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
