import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { FileText, Users, Target, BookOpen } from "lucide-react";

const NextDocLabs = () => {
  const researchAreas = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "AI in Medical Education",
      description: "Exploring how artificial intelligence transforms medical training and career development"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "IMG Integration",
      description: "Research on optimizing international medical graduate career transitions"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Workforce Analytics",
      description: "Data-driven insights into global healthcare workforce trends and needs"
    }
  ];

  const publications = [
    {
      title: "Augmenting NHS Integration: The Role of AI in Empowering IMG Career Transitions",
      type: "White Paper",
      year: "2025",
      status: "Featured"
    },
    {
      title: "AI Interview Simulation: Validation Study",
      type: "Pilot Study",
      year: "2024",
      status: "In Progress"
    },
    {
      title: "CPD SmartCert™ Validation Framework",
      type: "Research Paper",
      year: "2024",
      status: "Published"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <PageHeader breadcrumbItems={[{ label: "NextDoc Labs" }]} />
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-brand-nextdoc-labs/20 via-background to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-nextdoc-labs/20 border border-brand-nextdoc-labs/30">
              <span className="text-sm font-semibold text-foreground">NextDoc Labs</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground">
              Shaping Policy. <span className="text-brand-nextdoc-labs">Sharing Knowledge.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Academic research and thought leadership exploring the future of AI in medical education and workforce integration.
            </p>
          </div>
        </div>
      </section>

      {/* Featured White Paper */}
      <section className="py-16 md:py-24 bg-accent/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 shadow-elevated">
              <CardContent className="p-8 md:p-12 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-brand-nextdoc-labs to-brand-nextdoc-labs-hover flex items-center justify-center shadow-lg">
                    <FileText className="w-8 h-8 text-gray-900" />
                  </div>
                  <div className="flex-1">
                    <div className="inline-flex px-3 py-1 rounded-full bg-brand-nextdoc-labs/20 border border-brand-nextdoc-labs/30 text-sm font-semibold mb-2">
                      Featured White Paper
                    </div>
                  </div>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Augmenting NHS Integration: The Role of AI in Empowering IMG Career Transitions
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A comprehensive analysis of how artificial intelligence can support International Medical Graduates in their journey to successful NHS careers. This white paper explores policy implications, practical applications, and future directions.
                </p>
                <div className="flex gap-3 pt-4">
                  <Button variant="nextdoc-labs" size="lg">
                    Download Paper
                  </Button>
                  <Button variant="outline" size="lg">
                    View Abstract
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Research Focus Areas */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">Research Focus Areas</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our research spans multiple domains of medical education and workforce development
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {researchAreas.map((area, index) => (
                <Card key={index} className="border-2 hover:shadow-elevated transition-all duration-300">
                  <CardContent className="p-8 space-y-4">
                    <div className="w-14 h-14 rounded-lg bg-brand-nextdoc-labs/20 flex items-center justify-center text-brand-nextdoc-labs">
                      {area.icon}
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{area.title}</h3>
                    <p className="text-muted-foreground">{area.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="py-16 md:py-24 bg-accent/30">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">Recent Publications</h2>
              <p className="text-xl text-muted-foreground">
                Research papers, white papers, and pilot studies
              </p>
            </div>
            
            <div className="space-y-4">
              {publications.map((pub, index) => (
                <Card key={index} className="border hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 flex items-center justify-between gap-4">
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-semibold px-3 py-1 rounded-full bg-brand-nextdoc-labs/20 border border-brand-nextdoc-labs/30">
                          {pub.type}
                        </span>
                        <span className="text-sm text-muted-foreground">{pub.year}</span>
                        <span className="text-sm font-medium text-brand-nextdoc-labs">{pub.status}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">{pub.title}</h3>
                    </div>
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-brand-nextdoc-labs/20 via-brand-nextdoc-labs/10 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Collaborate with NextDoc Labs
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We partner with academics, NHS leaders, and policy experts. Interested in contributing research or exploring partnerships?
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
              <Button variant="nextdoc-labs" size="lg" onClick={() => window.location.href = '/contact'}>
                Partner With Us
              </Button>
              <Button variant="outline" size="lg">
                Author Guidelines
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NextDocLabs;
