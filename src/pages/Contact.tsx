import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PageHeader from "@/components/PageHeader";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader breadcrumbItems={[{ label: "Contact" }]} />
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8 text-center">Contact Us</h1>
          
          <div className="grid md:grid-cols-2 gap-8 md:gap-10">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-medical-blue">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Email</h3>
                  <p className="text-muted-foreground">
                    <a 
                      href="mailto:info@nextdocglobal.com" 
                      className="text-medical-blue hover:text-medical-blue-dark transition-colors"
                    >
                      info@nextdocglobal.com
                    </a>
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Registered Office</h3>
                  <address className="text-muted-foreground not-italic">
                    4 Queen's Road<br />
                    Wimbledon, London<br />
                    SW19 8ND<br />
                    United Kingdom
                  </address>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-medical-blue">Quick Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <Button 
                    variant="nhs-secondary" 
                    className="w-full justify-start"
                    onClick={() => window.open('https://nextdoc.co.uk', '_blank')}
                  >
                    NextDoc UK Platform
                  </Button>
                  <Button 
                    variant="nhs-secondary" 
                    className="w-full justify-start"
                    onClick={() => window.location.href = '/academy'}
                  >
                    NDG Academy
                  </Button>
                  <Button 
                    variant="nhs-secondary" 
                    className="w-full justify-start"
                    onClick={() => window.location.href = '/careers'}
                  >
                    Career Opportunities
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-12 text-center">
            <Card className="bg-accent/50">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Join Our Mission
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Whether you're a doctor looking to advance your career, or an organization 
                  seeking to collaborate with us, we'd love to hear from you.
                </p>
                <Button 
                  variant="nhs-primary" 
                  size="lg"
                  onClick={() => window.location.href = 'mailto:info@nextdocglobal.com'}
                >
                  Send Us an Email
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;