import Link from "next/link";
export const metadata = { title: "Thank You" };
export default function ThankYou(){
  return (
    <div className="bg-[#FDFCF8] min-h-[60vh] grid place-items-center px-5 py-16">
      <div className="w-full max-w-[560px] rounded-[32px] bg-white border border-black/5 luxury-shadow p-8 lg:p-10 text-center">
        <div className="mx-auto w-16 h-16 rounded-full bg-[#0C3226] text-white grid place-items-center text-2xl">✓</div>
        <h1 className="mt-6 font-serif text-[32px] leading-none text-[#0C3226]">Thank you.<br />We’ve got it.</h1>
        <p className="mt-3 text-sm leading-6 text-[#0C3226]/60">A Partner will be in touch within 3 hours (Sun–Thu, 9am–6pm GST). If urgent, email hello@opalconsulting.ae or call +971 4 401 2345.</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="inline-flex justify-center bg-[#0C3226] text-white px-6 py-3 rounded-full font-bold text-sm">Back to Home ↗</Link>
          <Link href="/insights" className="inline-flex justify-center bg-white border border-black/10 px-6 py-3 rounded-full font-bold text-sm">Visit Journal</Link>
        </div>
        <div className="mt-8 text-xs text-[#0C3226]/40">Reference ID: OPAL-7842 • Encrypted & confidential</div>
      </div>
    </div>
  );
}
