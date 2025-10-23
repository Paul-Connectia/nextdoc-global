import PageHeader from "@/components/PageHeader";

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader breadcrumbItems={[{ label: "Legal", href: "#" }, { label: "Refund Policy" }]} />
      <div className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">Refund Policy</h1>
          
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
            <div className="space-y-6">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-3">1. Subscriptions (AI/Core/Elite)</h2>
                <p>Refundable within 7 days if unused (no significant access). After that, cancel renewals anytime; 
                access continues until period end.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-3">2. Digital Content (downloads/streams)</h2>
                <p>Under UK law, the 14-day cooling-off right does not apply once download/stream starts 
                after your explicit consent at checkout.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-3">3. MentorConnect™ Sessions</h2>
                <ul className="space-y-2 list-disc pl-6">
                  <li>Full refund if cancelled ≥48h before start</li>
                  <li>Within 48h or no-show: non-refundable</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-3">4. Bundles & Reports</h2>
                <p>(PLAB Starter, PG Success, NHS Job Pack, SponsorMatch™) - Refunds possible only if not accessed. 
                Once a report or bundle is opened, it's non-refundable.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-3">5. Outages & Technical Issues</h2>
                <p>We may offer partial credits/extensions.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-3">6. How to Request</h2>
                <p>Email <a href="mailto:info@nextdocglobal.com" className="text-primary hover:text-primary-glow">info@nextdocglobal.com</a> with order ID. 
                Refunds to original method within 10 business days.</p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;