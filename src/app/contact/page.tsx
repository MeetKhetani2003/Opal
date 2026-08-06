import { industries } from "@/lib/data";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <div className="bg-[#FDFCF8]">
      <section className="relative overflow-hidden bg-[#0C3226] text-white">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&auto=format&fit=crop&q=60" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C3226] via-[#0C3226]/90 to-[#0C3226]/40" />
        <div className="relative mx-auto max-w-[1440px] px-5 lg:px-8 xl:px-12 py-14 lg:py-20 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-6">
            <div className="inline-flex px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-[11px] font-bold tracking-[0.14em] uppercase">Contact • Book Consultation</div>
            <h1 className="mt-4 font-serif text-[42px] lg:text-[56px] leading-[0.9]">Let’s talk<br /><span className="italic font-light text-white/80">about your</span><br />next chapter.</h1>
            <p className="mt-4 text-white/70 max-w-[520px] text-[16px] leading-7">A 30-minute discovery with a Partner. No pitch. Bring your thorniest problem — leave with clarity and next steps. Avg. response 3 hours.</p>
            <div className="mt-8 grid sm:grid-cols-2 gap-4 max-w-[520px]">
              <div className="rounded-2xl bg-white/10 backdrop-blur border border-white/10 p-5">
                <div className="text-xs tracking-[0.14em] uppercase font-bold text-white/60">Email</div>
                <div className="font-bold mt-1">hello@opalconsulting.ae</div>
                <div className="text-xs text-white/60">We read every email.</div>
              </div>
              <div className="rounded-2xl bg-white/10 backdrop-blur border border-white/10 p-5">
                <div className="text-xs tracking-[0.14em] uppercase font-bold text-white/60">Phone</div>
                <div className="font-bold mt-1">+971 4 401 2345</div>
                <div className="text-xs text-white/60">Sun–Thu, 9am–6pm GST</div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6">
            <form action="/thank-you" className="rounded-[24px] bg-white text-[#0C3226] p-7 lg:p-8 space-y-4 luxury-shadow">
              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold tracking-[0.08em] uppercase text-[#0C3226]/60">Full name *</label>
                  <input required placeholder="Jane Doe" className="mt-1 w-full h-11 rounded-full border border-black/10 px-4 outline-none focus:border-[#0C3226] text-sm" />
                </div>
                <div>
                  <label className="text-xs font-bold tracking-[0.08em] uppercase text-[#0C3226]/60">Work email *</label>
                  <input required type="email" placeholder="jane@company.com" className="mt-1 w-full h-11 rounded-full border border-black/10 px-4 outline-none focus:border-[#0C3226] text-sm" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold tracking-[0.08em] uppercase text-[#0C3226]/60">Company</label>
                  <input placeholder="Acme Holdings" className="mt-1 w-full h-11 rounded-full border border-black/10 px-4 outline-none focus:border-[#0C3226] text-sm" />
                </div>
                <div>
                  <label className="text-xs font-bold tracking-[0.08em] uppercase text-[#0C3226]/60">Role</label>
                  <input placeholder="CEO, CHRO..." className="mt-1 w-full h-11 rounded-full border border-black/10 px-4 outline-none focus:border-[#0C3226] text-sm" />
                </div>
              </div>
              <div>
                <label className="text-xs font-bold tracking-[0.08em] uppercase text-[#0C3226]/60">How can we help?</label>
                <select className="mt-1 w-full h-11 rounded-full border border-black/10 px-4 outline-none focus:border-[#0C3226] text-sm bg-white">
                  <option>Select topic</option>
                  <option>HR & Talent</option>
                  <option>Strategy & Advisory</option>
                  <option>Digital & AI</option>
                  <option>Operations</option>
                  <option>Governance & Risk</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-bold tracking-[0.08em] uppercase text-[#0C3226]/60">Message</label>
                <textarea rows={4} placeholder="Tell us about your ambition and constraints..." className="mt-1 w-full rounded-2xl border border-black/10 p-4 outline-none focus:border-[#0C3226] text-sm" />
              </div>
              <button type="submit" className="w-full h-12 rounded-full bg-[#0C3226] text-white font-bold text-sm tracking-[0.06em] uppercase hover:bg-[#143D30] transition">Send message ↗</button>
              <div className="text-[11px] text-center text-[#0C3226]/50">By submitting, you agree to our Privacy Policy. We’ll be in touch within 3 hours.</div>
            </form>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 lg:px-8 xl:px-12 py-12 grid lg:grid-cols-3 gap-5">
        {[
          { city: "Dubai", addr: "DIFC, Gate Village 10, Level 3\nDubai, UAE", img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&auto=format&fit=crop&q=60" },
          { city: "Riyadh", addr: "King Abdullah Financial District\nRiyadh, KSA", img: "https://images.unsplash.com/photo-1578894389772-059632ca2104?w=600&auto=format&fit=crop&q=60" },
          { city: "Doha & Muscat", addr: "West Bay, Doha • Qurum, Muscat", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&auto=format&fit=crop&q=60" },
        ].map(o=>(
          <div key={o.city} className="rounded-[20px] overflow-hidden bg-white border border-black/5">
            <img src={o.img} alt={o.city} className="w-full h-[180px] object-cover" />
            <div className="p-6">
              <div className="font-serif text-lg font-bold text-[#0C3226]">{o.city}</div>
              <div className="text-sm text-[#0C3226]/60 whitespace-pre-line">{o.addr}</div>
              <div className="mt-3 text-xs font-bold text-[#0C3226]">Get directions →</div>
            </div>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-[1440px] px-5 lg:px-8 xl:px-12 pb-12">
        <div className="rounded-[24px] overflow-hidden bg-[#F6F3EE] border border-black/5 grid lg:grid-cols-2">
          <div className="p-8 lg:p-10">
            <h3 className="font-serif text-[24px] text-[#0C3226]">Frequently Asked</h3>
            <div className="mt-6 space-y-3">
              {[
                ["How quickly can we start?", "Discovery this week, sprint next week. Typical kickoff in 7–10 days."],
                ["Do you work on success fees?", "Yes — fixed + success for growth, search, and turnaround engagements."],
                ["Will we get a partner?", "Always. Partner on the work, every day. No bait-and-switch."],
              ].map(([q,a])=>(
                <details key={q} className="group rounded-xl bg-white border border-black/5 p-4 open:shadow">
                  <summary className="list-none flex justify-between font-semibold text-sm cursor-pointer">{q}<span className="group-open:rotate-45 transition">+</span></summary>
                  <div className="text-sm text-[#0C3226]/60 mt-2">{a}</div>
                </details>
              ))}
            </div>
          </div>
          <div className="relative min-h-[320px] bg-[#0C3226]">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=60" alt="Map" className="absolute inset-0 w-full h-full object-cover opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0C3226]/80 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white p-5">
              <div className="font-bold text-[#0C3226]">Visit our studios</div>
              <div className="text-sm text-[#0C3226]/60">Book a studio tour — see how we work, from control tower to academy.</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
