import Link from "next/link";
export default function NotFound(){
  return (
    <div className="bg-[#FDFCF8] min-h-[70vh] grid place-items-center px-5 py-16">
      <div className="w-full max-w-[720px] text-center">
        <div className="inline-flex px-3 py-1.5 rounded-full bg-[#0C3226] text-white text-[11px] font-bold tracking-[0.14em] uppercase">404 • Page Not Found</div>
        <h1 className="mt-6 font-serif text-[56px] lg:text-[72px] leading-[0.85] text-[#0C3226]">Lost?<br /><span className="italic font-light text-[#1B4D3E]">Let’s find</span> your way.</h1>
        <p className="mt-4 text-sm leading-6 text-[#0C3226]/60 max-w-[520px] mx-auto">The page you’re looking for doesn’t exist — or was moved. Try our most visited destinations below.</p>
        <div className="mt-8 flex flex-wrap gap-2 justify-center">
          {[
            ["Home","/"],
            ["Services","/services"],
            ["Case Studies","/case-studies"],
            ["Insights","/insights"],
            ["Contact","/contact"],
          ].map(([l,h])=>(
            <Link key={l} href={h} className="px-5 py-2.5 rounded-full bg-white border border-black/10 font-bold text-sm hover:bg-[#0C3226] hover:text-white hover:border-[#0C3226] transition">{l}</Link>
          ))}
        </div>
        <div className="mt-10 rounded-[24px] bg-white border border-black/5 p-2 max-w-[640px] mx-auto">
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&auto=format&fit=crop&q=60" alt="Office" className="w-full h-[220px] object-cover rounded-[16px]" />
        </div>
        <Link href="/" className="mt-8 inline-flex bg-[#0C3226] text-white px-8 py-4 rounded-full font-bold text-sm">Back to Home ↗</Link>
      </div>
    </div>
  );
}
