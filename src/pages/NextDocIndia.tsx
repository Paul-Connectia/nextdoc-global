import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

const NextDocIndia = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-background">
      <PageHeader breadcrumbItems={[{ label: "NextDoc India" }]} />
      <section className="py-24 bg-gradient-to-br from-brand-nextdoc-india/10 via-background to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center space-y-12">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold text-foreground">
                NextDoc India
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Transforming medical education and careers across India with AI-powered platforms designed specifically for Indian medical professionals.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 pt-8">
              <Card className="border-2 hover:shadow-elevated transition-all duration-300">
                <CardContent className="p-8 space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-xl bg-brand-nextdoc-pg flex items-center justify-center text-2xl shadow-lg">
                    🎓
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">NextDoc PG</h3>
                  <p className="text-muted-foreground">
                    AI-powered postgraduate medical exam preparation for Indian medical students
                  </p>
                  <Button 
                    variant="nextdoc-pg" 
                    size="lg"
                    onClick={() => navigate('/nextdoc-pg')}
                    className="w-full mt-4"
                  >
                    Coming Soon
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 hover:shadow-elevated transition-all duration-300">
                <CardContent className="p-8 space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-xl bg-brand-nextdoc-med flex items-center justify-center text-2xl shadow-lg">
                    💊
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">NextDoc Med</h3>
                  <p className="text-muted-foreground">
                    Medical education platform for MBBS students with 20+ subjects, question banks, case presentations, and case simulations
                  </p>
                  <Button 
                    variant="nextdoc-med" 
                    size="lg"
                    onClick={() => navigate('/nextdoc-med')}
                    className="w-full mt-4"
                  >
                    Coming Soon
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 hover:shadow-elevated transition-all duration-300">
                <CardContent className="p-8 space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-xl bg-brand-nextdoc-care flex items-center justify-center text-2xl shadow-lg">
                    ❤️
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">NextDoc Care</h3>
                  <p className="text-muted-foreground">
                    Healthcare management and patient care coordination platform
                  </p>
                  <Button 
                    variant="nextdoc-care" 
                    size="lg"
                    onClick={() => navigate('/nextdoc-care')}
                    className="w-full mt-4"
                  >
                    Coming Soon
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default NextDocIndia;
