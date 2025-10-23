import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import { PAGE_SEO } from "@/config/seo";
import PageHeader from "@/components/PageHeader";

const Academy = () => {
  return (
    <>
      <SEO
        title={PAGE_SEO.academy.title}
        description={PAGE_SEO.academy.description}
        keywords={PAGE_SEO.academy.keywords}
      />
      <StructuredData
        breadcrumbs={[
          { name: "Home", url: "https://nextdocglobal.com" },
          { name: "NDG Academy", url: "https://nextdocglobal.com/academy" }
        ]}
        type="WebPage"
      />
      <div className="min-h-screen bg-background">
      <PageHeader breadcrumbItems={[{ label: "NDG Academy" }]} />
      {/* Header */}
      <header className="py-16 bg-gradient-to-r from-medical-blue via-medical-teal to-medical-blue">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            NDG Academy
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Empowering medical professionals worldwide with CPD certification and online medical courses.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Coming Soon
            </h2>
            
            <div className="prose prose-lg mx-auto text-muted-foreground leading-relaxed space-y-6">
              <p className="text-xl">
                NDG Academy is being designed to provide CPD-accredited courses and online 
                medical education for healthcare professionals across the world.
              </p>
              
              <p className="text-lg">
                Our platform will offer Continuing Professional Development (CPD) certification, 
                specialised medical courses, and evidence-based learning resources to support 
                lifelong learning in medicine.
              </p>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
                <p className="text-lg font-medium text-blue-800 mb-2">
                  🌍 Global CPD platform launching soon.
                </p>
                <p className="text-blue-700">
                  We're developing a comprehensive CPD and online medical education platform 
                  for healthcare professionals worldwide. Stay tuned!
                </p>
              </div>
            </div>

            <div className="pt-8">
              <a href="/" className="inline-flex">
                <Button variant="nhs-primary" size="lg" aria-label="Back to Home">
                  Back to Home
                </Button>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
    </>
  );
};

export default Academy;