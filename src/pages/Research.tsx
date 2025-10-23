import PageHeader from "@/components/PageHeader";

const Research = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader breadcrumbItems={[{ label: "Research" }]} />
      <div className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">Research</h1>
          
          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
            <p className="text-xl leading-relaxed">
              NextDoc Global partners with academics, NHS leaders, and policy experts to explore the future of AI in medical education and workforce integration.
            </p>
            
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground">Highlights</h2>
              <ul className="space-y-4 text-lg list-disc pl-6">
                <li>
                  <strong>White Paper (2025):</strong> Augmenting NHS Integration: The Role of AI in Empowering IMG Career Transitions
                </li>
                <li>
                  Pilot studies on AI interview simulation and CPD SmartCert™ validation
                </li>
                <li>
                  Planned collaborations with universities and NHS Trusts
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Research;