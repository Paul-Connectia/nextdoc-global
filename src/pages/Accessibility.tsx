import PageHeader from "@/components/PageHeader";

const Accessibility = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader breadcrumbItems={[{ label: "Legal", href: "#" }, { label: "Accessibility" }]} />
      <div className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">Accessibility Statement</h1>
          
          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
            <p className="text-xl leading-relaxed">
              We aim to meet WCAG 2.2 AA standards to ensure our platform is accessible to all users.
            </p>
            
            <div className="space-y-6">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-3">Accessibility Features</h2>
                <ul className="space-y-3 text-lg list-disc pl-6">
                  <li>Keyboard navigation support</li>
                  <li>Alt text for all images</li>
                  <li>Contrast-checked NHS Blue palette</li>
                  <li>Reduced-motion support</li>
                  <li>Screen reader compatibility</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-3">Need Help?</h2>
                <p>
                  If you face barriers using our platform, please email{' '}
                  <a href="mailto:info@nextdocglobal.com" className="text-primary hover:text-primary-glow">
                    info@nextdocglobal.com
                  </a>
                </p>
                <p className="mt-3">
                  We aim to respond within 5 working days and propose a fix or alternative format within 20 working days.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accessibility;