import PageHeader from "@/components/PageHeader";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader breadcrumbItems={[{ label: "Legal", href: "#" }, { label: "Terms & Conditions" }]} />
      <div className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">Terms & Conditions</h1>
          
          {/* Product-Specific Policy Notice */}
          <div className="bg-blue-50 border-l-4 border-primary rounded-lg p-6 mb-8">
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <p className="text-sm font-semibold text-foreground mb-1">Product-Specific Policies</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Each NextDoc service (NextDoc UK, NextDoc India, NextDoc PG, NextDoc Med, NextDoc Care, 
                  NextDoc Labs, NDG Academy) operates under separate legal policies specific to its jurisdiction 
                  and service offerings. Please consult the respective product website for applicable terms, 
                  privacy, refund, and cookie policies.
                </p>
              </div>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
            <p className="text-sm text-muted-foreground mb-6">
              <strong>Who we are.</strong> NextDoc Global Ltd ("NextDoc Global", "we", "us", "our"), registered in England & Wales. 
              Registered office: 4 Queen's Road, Wimbledon, London, SW19 8ND. Company No: 16504223 
              Contact: <a href="mailto:info@nextdocglobal.com" className="text-primary hover:text-primary-glow">info@nextdocglobal.com</a>.
            </p>
            
            <p>
              <strong>Scope.</strong> These Terms govern your use of our sites (nextdocglobal.com / .co.uk / .io) and services, 
              including CVPro™, InterviewSim+™, GapMap™, SponsorMatch™, PLAB QBank, CPD SmartCert™, and MentorConnect™. 
              By using our services you accept these Terms.
            </p>

            <div className="space-y-6 mt-8">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-3">1. Purpose & No Professional Advice</h2>
                <p>Our services support education and careers. We do not provide medical advice, legal/immigration advice, 
                or guarantees of employment or sponsorship. Always exercise professional judgment.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-3">2. Eligibility</h2>
                <p>Users must be 18+ and comply with professional standards (e.g., GMC Good Medical Practice).</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-3">3. Accounts & Acceptable Use</h2>
                <p>Keep credentials secure; don't share accounts or scrape/copy content. No unlawful, harassing, 
                discriminatory, or infringing use. We may suspend accounts for violations.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-3">4. AI Transparency</h2>
                <p>Features may use AI to generate feedback/explanations. Outputs can be inaccurate; users must verify. 
                We apply quality controls and bias-reduction, but you remain responsible for use of outputs.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-3">11. Privacy & Data Protection</h2>
                <p>We process personal data per our Privacy Policy (linked), in line with UK GDPR.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-3">15. Governing Law</h2>
                <p>England & Wales law governs; exclusive jurisdiction of the courts of England & Wales.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-3">16. Contact</h2>
                <p>
                  <a href="mailto:info@nextdocglobal.com" className="text-primary hover:text-primary-glow">
                    info@nextdocglobal.com
                  </a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;