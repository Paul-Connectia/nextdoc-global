import PageHeader from "@/components/PageHeader";

const GDPR = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader breadcrumbItems={[{ label: "Legal", href: "#" }, { label: "GDPR Compliance" }]} />
      <div className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">GDPR Compliance</h1>
          
          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
            <p className="text-xl leading-relaxed">
              NextDoc Global Ltd is registered under the UK Information Commissioner's Office (ICO).
            </p>
            
            <div className="space-y-4">
              <ul className="space-y-3 text-lg list-disc pl-6">
                <li>Data stored in compliance with UK GDPR (2018)</li>
                <li>Users have rights of access, rectification, and erasure</li>
                <li>For GDPR-related requests, contact: <a href="mailto:info@nextdocglobal.com" className="text-primary hover:text-primary-glow">info@nextdocglobal.com</a></li>
              </ul>
            </div>
            
            <div className="bg-accent/50 p-6 rounded-xl mt-8">
              <h2 className="text-xl font-bold text-foreground mb-3">Contact Information</h2>
              <div className="space-y-2">
                <p><strong>Registered Office:</strong></p>
                <p>4 Queen's Road, Wimbledon, London, SW19 8ND, United Kingdom</p>
                <p><strong>Enquiries:</strong> <a href="mailto:info@nextdocglobal.com" className="text-primary hover:text-primary-glow">info@nextdocglobal.com</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GDPR;