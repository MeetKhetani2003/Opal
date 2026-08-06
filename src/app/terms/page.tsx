export const metadata = { title: "Terms & Conditions" };
export default function TermsPage(){
  return (
    <div className="bg-[#FDFCF8]">
      <section className="mx-auto max-w-[860px] px-5 lg:px-8 pt-12 pb-12">
        <div className="inline-flex px-3 py-1.5 rounded-full bg-white border border-black/5 text-[11px] font-bold tracking-[0.14em] uppercase text-[#0C3226]/60">Terms & Conditions • Effective 1 Jan 2026</div>
        <h1 className="mt-4 font-serif text-[36px] leading-none text-[#0C3226]">Terms & Conditions</h1>
        <p className="mt-3 text-sm leading-6 text-[#0C3226]/60">By accessing opalconsulting.ae, you agree to these terms. We provide consulting services with partner-led accountability and ethical stewardship.</p>
        <div className="mt-8 prose prose-neutral max-w-none prose-headings:font-serif prose-headings:font-bold">
          <h2>1. Services</h2><p>Proposals, statements of work, and success-fee schedules govern each engagement. Estimates are non-binding until signed.</p>
          <h2>2. Intellectual Property</h2><p>Deliverables are licensed to clients for internal use; Opal retains methodology IP unless otherwise agreed.</p>
          <h2>3. Confidentiality</h2><p>Both parties safeguard confidential information with at least reasonable care and per NDA terms.</p>
          <h2>4. Liability</h2><p>Liability limited to fees paid for the relevant engagement, to the maximum extent permitted by law.</p>
          <h2>5. Acceptable Use</h2><p>No scraping, reverse engineering, or misuse of our site or materials.</p>
          <h2>6. Governing Law</h2><p>DIFC courts, with arbitration options per engagement terms.</p>
          <h2>7. Contact</h2><p>legal@opalconsulting.ae • DIFC Gate Village 10, Dubai, UAE</p>
        </div>
      </section>
    </div>
  );
}
