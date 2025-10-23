import PageHeader from "@/components/PageHeader";

const Leadership = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader breadcrumbItems={[{ label: "Leadership" }]} />
      <div className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">Leadership</h1>
          
          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
            <p className="text-xl leading-relaxed">
              NextDoc Global is led by doctors, technologists, and mentors with first-hand experience in healthcare systems across the UK and beyond.
            </p>
            
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Our Team</h2>
              <ul className="space-y-3 text-lg">
                <li><strong>Dr. Roshan Khanderi, MBBS</strong> - Founder & Director</li>
                <li><strong>NHS consultants and mentors</strong> - providing clinical insight, CPD validation, and interview preparation</li>
                <li><strong>AI engineers and product specialists</strong> - ensuring safe, ethical, and cutting-edge technology deployment</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leadership;