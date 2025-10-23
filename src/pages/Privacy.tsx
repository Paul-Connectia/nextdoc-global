import PageHeader from "@/components/PageHeader";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader breadcrumbItems={[{ label: "Legal", href: "#" }, { label: "Privacy Policy" }]} />
      <div className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">Privacy Policy</h1>
          
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
            <p className="text-lg font-medium text-foreground">Controller: NextDoc Global Ltd</p>
            
            <div className="space-y-6 mt-8">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-3">1. What we collect</h2>
                <ul className="space-y-2 list-disc pl-6">
                  <li><strong>Identity & contact:</strong> name, email, country</li>
                  <li><strong>Account & usage:</strong> enrolments, tool interactions, logs, device/browser</li>
                  <li><strong>Content you supply:</strong> CVs, notes, messages (avoid sensitive categories)</li>
                  <li><strong>Payments:</strong> handled by Stripe; we don't store card numbers</li>
                  <li><strong>Mentorship metadata:</strong> bookings, Meet links, attendance (no recordings unless explicitly agreed)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-3">2. Purposes & Lawful Bases</h2>
                <ul className="space-y-2 list-disc pl-6">
                  <li>Provide services (contract)</li>
                  <li>Account/admin, billing, support (contract & legitimate interests)</li>
                  <li>Analytics & improvement (legitimate interests, with opt-out where feasible)</li>
                  <li>Marketing emails (consent; unsubscribe anytime)</li>
                  <li>Fraud/security (legitimate interests/legal obligations)</li>
                  <li>CPD certificates/records (contract/legal obligation)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-3">3. AI Processing & Automated Decisions</h2>
                <p>We use AI to generate explanations/feedback. No decisions with legal/similar significant effect 
                are made solely by automated means. You may request human review of important outcomes.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-3">7. Your Rights</h2>
                <p>Access, rectification, erasure, portability, restriction, objection. To exercise rights, 
                email <a href="mailto:info@nextdocglobal.com" className="text-primary hover:text-primary-glow">info@nextdocglobal.com</a>. 
                You can complain to the ICO (ico.org.uk).</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-3">10. Contact</h2>
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

export default Privacy;