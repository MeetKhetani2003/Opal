export const metadata = { title: "Privacy Policy" };
export default function PrivacyPage(){
  return (
    <div className="bg-[#FDFCF8]">
      <section className="mx-auto max-w-[860px] px-5 lg:px-8 pt-12 pb-12">
        <div className="inline-flex px-3 py-1.5 rounded-full bg-white border border-black/5 text-[11px] font-bold tracking-[0.14em] uppercase text-[#0C3226]/60">Privacy Policy • Effective 1 Jan 2026</div>
        <h1 className="mt-4 font-serif text-[36px] leading-none text-[#0C3226]">Privacy Policy</h1>
        <p className="mt-3 text-sm leading-6 text-[#0C3226]/60">We respect your privacy. This policy describes how Opal Management & Consulting handles personal data in line with UAE PDPL, KSA PDPL, and GDPR where applicable.</p>
        <div className="mt-8 prose prose-neutral max-w-none prose-headings:font-serif prose-headings:font-bold prose-a:text-[#0C3226]">
          <h2>1. Data We Collect</h2><p>Contact details, CVs, usage analytics, and communications you share with us via forms, email, or meetings.</p>
          <h2>2. How We Use Data</h2><p>To respond to enquiries, deliver services, consider applications, improve our site, and send The Opal Letter if you subscribe. No selling of data.</p>
          <h2>3. Legal Basis</h2><p>Consent, contract, legitimate interest, and legal obligation — as appropriate.</p>
          <h2>4. Retention</h2><p>Candidate data retained for 24 months unless you request deletion; client data per contract and law.</p>
          <h2>5. Your Rights</h2><p>Access, correction, deletion, portability, and objection. Contact hello@opalconsulting.ae to exercise rights.</p>
          <h2>6. Security</h2><p>Encryption, access controls, and ISO 27001-aligned practices. Report concerns to security@opalconsulting.ae.</p>
          <h2>7. Contact</h2><p>Opal Management & Consulting, DIFC Gate Village 10, Dubai, UAE • DPO: dpo@opalconsulting.ae</p>
        </div>
      </section>
    </div>
  );
}
