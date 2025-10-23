import PageHeader from "@/components/PageHeader";

const Security = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader breadcrumbItems={[{ label: "Legal", href: "#" }, { label: "Security & Compliance" }]} />
      <div className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">Security & Compliance Overview</h1>
          
          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
            <p className="text-xl leading-relaxed">
              NextDoc Global maintains the highest standards of data security and compliance to protect your information.
            </p>
            
            <div className="space-y-6">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-3">Data Security</h2>
                <ul className="space-y-3 text-lg list-disc pl-6">
                  <li>TLS encryption in transit</li>
                  <li>Encryption at rest for all data</li>
                  <li>Role-based access controls</li>
                  <li>Monitored audit logs</li>
                  <li>Regular automated backups</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-3">Compliance Standards</h2>
                <ul className="space-y-3 text-lg list-disc pl-6">
                  <li><strong>Privacy:</strong> UK GDPR and PECR compliant</li>
                  <li><strong>Payments:</strong> Stripe PCI-DSS L1</li>
                  <li><strong>Healthcare/NHS readiness:</strong> Designed for privacy-by-default; roadmap includes DSPT and DTAC alignment where applicable</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-3">Incident Response</h2>
                <p>We notify impacted users and the ICO as required by UK law in the event of any security incidents.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-3">Questions?</h2>
                <p>
                  For security-related inquiries, contact{' '}
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

export default Security;