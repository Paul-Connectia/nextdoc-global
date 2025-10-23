import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import { PAGE_SEO } from "@/config/seo";
import PageHeader from "@/components/PageHeader";

const About = () => {
  return (
    <>
      <SEO
        title={PAGE_SEO.about.title}
        description={PAGE_SEO.about.description}
        keywords={PAGE_SEO.about.keywords}
      />
      <StructuredData
        breadcrumbs={[
          { name: "Home", url: "https://nextdocglobal.com" },
          { name: "About", url: "https://nextdocglobal.com/about" }
        ]}
        type="AboutPage"
      />
      <div className="min-h-screen bg-background">
      <PageHeader breadcrumbItems={[{ label: "About" }]} />
      <div className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">About NextDoc Global</h1>
          
          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
            <p className="text-xl leading-relaxed">
              NextDoc Global is an AI-powered career platform built by doctors, for doctors.
            </p>
            
            <p className="text-lg leading-relaxed">
              We support international medical graduates (IMGs), UK trainees, and NHS professionals through innovative tools, CPD-accredited modules, and mentor-led guidance.
            </p>
            
            <p className="text-lg leading-relaxed">
              From PLAB preparation to NHS job readiness, our mission is to bridge ambition with opportunity - globally.
            </p>
            
            <div className="bg-blue-50 border-l-4 border-medical-blue rounded p-4 mt-8">
              <p className="text-sm text-foreground italic">
                Career support only; not clinical decision-support. Advisors act in a personal capacity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default About;