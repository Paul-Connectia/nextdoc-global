import PageHeader from "@/components/PageHeader";

const Cookies = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader breadcrumbItems={[{ label: "Legal", href: "#" }, { label: "Cookies & PECR" }]} />
      <div className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">Cookies & PECR Policy</h1>
          
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
            <p className="text-xl leading-relaxed">
              We use cookies and similar technologies to enhance your experience on our platform.
            </p>
            
            <div className="space-y-6">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-3">Types of Cookies We Use</h2>
                <ul className="space-y-3 text-lg list-disc pl-6">
                  <li><strong>Strictly necessary:</strong> Authentication/session, security</li>
                  <li><strong>Preferences:</strong> Remember settings</li>
                  <li><strong>Analytics:</strong> Aggregate usage data</li>
                  <li><strong>Marketing:</strong> Only with consent; minimal on .com</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-3">Consent</h2>
                <p>On first visit we show a banner (Accept / Reject / Manage). You can change choices anytime by clearing your browser cookies or using browser privacy settings.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-3">Control</h2>
                <p>Browser settings let you block cookies; essential cookies are required for login.</p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cookies;