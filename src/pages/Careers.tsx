import PageHeader from "@/components/PageHeader";

const Careers = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader breadcrumbItems={[{ label: "Careers" }]} />
      <div className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">Careers</h1>
          
          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
            <p className="text-xl leading-relaxed">
              Join us in shaping the future of AI-powered medical education and career development.
            </p>
            
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">We are looking for:</h2>
              <ul className="space-y-3 text-lg list-disc pl-6">
                <li>NHS doctors and consultants (mentors, CPD reviewers, interview trainers)</li>
                <li>Content and research associates (PLAB/PG exams, CPD content, NHS portfolio guidance)</li>
              </ul>
            </div>
            
            <div className="bg-accent/50 p-6 rounded-xl mt-8">
              <p className="text-lg text-foreground font-medium mb-2">Ready to join our mission?</p>
              <p className="text-muted-foreground">
                📩 Email your CV and area of interest to{' '}
                <a 
                  href="mailto:info@nextdocglobal.com" 
                  className="text-primary hover:text-primary-glow transition-colors"
                >
                  info@nextdocglobal.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;