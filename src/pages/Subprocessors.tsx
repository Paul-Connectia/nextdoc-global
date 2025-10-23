import PageHeader from "@/components/PageHeader";

const Subprocessors = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader breadcrumbItems={[{ label: "Legal", href: "#" }, { label: "Sub-processors" }]} />
      <div className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">Sub-processors Register</h1>
          
          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
            <p className="text-xl leading-relaxed">
              NextDoc Global works with carefully selected third-party service providers to deliver our platform services.
            </p>
            
            <div className="space-y-6">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-3">Current Sub-processors</h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-border">
                    <thead>
                      <tr className="bg-accent/50">
                        <th className="border border-border p-3 text-left font-semibold text-foreground">Service Provider</th>
                        <th className="border border-border p-3 text-left font-semibold text-foreground">Service Type</th>
                        <th className="border border-border p-3 text-left font-semibold text-foreground">Data Location</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-border p-3">Stripe</td>
                        <td className="border border-border p-3">Payment processing</td>
                        <td className="border border-border p-3">EU/US</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-3">Resend</td>
                        <td className="border border-border p-3">Email delivery</td>
                        <td className="border border-border p-3">EU/US</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-3">Google</td>
                        <td className="border border-border p-3">Meet/Calendar links, reCAPTCHA</td>
                        <td className="border border-border p-3">Global</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-3">Analytics provider</td>
                        <td className="border border-border p-3">Product analytics</td>
                        <td className="border border-border p-3">Self-hosted/EU (if applicable)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-3">Governance</h2>
                <p>Each sub-processor is governed by contracts, Standard Contractual Clauses (SCCs) where needed, 
                and appropriate technical and organisational measures.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-3">Institutional DPA</h2>
                <p>
                  For universities/NHS Trusts, we provide a Data Processing Addendum (DPA) with SCCs, 
                  UK Addendum, and security annex on request:{' '}
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

export default Subprocessors;