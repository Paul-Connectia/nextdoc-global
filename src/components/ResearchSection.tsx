import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ResearchSection = () => {
  return (
    <section id="white-paper-section" className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Circuit pattern background */}
      <div className="absolute inset-0 bg-pattern-circuits opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Driving Innovation. <span className="text-medical-blue">Influencing Policy. Advancing Global Medical Careers.</span>
          </h2>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            Our white papers and thought leadership explore the future of AI in medical education and career transitions.
          </p>
          
          <Card className="border-0 shadow-elevated bg-gradient-to-br from-accent/50 to-background p-8 relative overflow-hidden group hover:shadow-medical transition-all duration-300">
            {/* Circuit pattern border effect */}
            <div className="absolute inset-0 border-2 border-medical-blue/0 group-hover:border-medical-blue/20 transition-colors duration-300 rounded-lg"></div>
            <CardContent className="space-y-6 relative">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-medical-blue to-medical-teal flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                📄
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                Executive Summary
              </h3>
              <div className="text-base text-muted-foreground leading-relaxed text-left max-w-3xl mx-auto">
              <p>
                The NHS is projected to face a significant workforce gap by 2037. With international medical graduates (IMGs) forming a substantial share of the medical workforce, consistent, high-quality onboarding is essential. NextDoc Global is a governance-first, AI-enabled platform that supports four critical steps in the IMG journey: CV shortlisting, interview preparation, sponsorship support, and role alignment. The approach follows published guidance (e.g., Topol Review, NHS Long Term Workforce Plan, GMC pathways) and is designed to augment, not replace, human decision-making. Early simulations, while limited, suggest potential improvements in time-to-onboard and candidate experience. A phased rollout from Q4-2025 will begin with pilots, predefined metrics (e.g., time-to-shortlist, candidate feedback), and transparent reporting. Our aim is practical: help NHS teams and candidates navigate processes more clearly, more fairly, and with measurable outcomes.
              </p>
              </div>
              
              {/* Dual Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-4">
                <Button variant="nhs-primary" size="lg" className="w-full sm:w-auto focus-visible:ring-4 focus-visible:ring-medical-blue focus-visible:ring-offset-2">
                  Read Online
                </Button>
              <Button variant="nhs-secondary" size="lg" className="w-full sm:w-auto focus-visible:ring-4 focus-visible:ring-medical-blue focus-visible:ring-offset-2">
                Download PDF
              </Button>
              </div>
              
              {/* Disclaimer Note */}
              <p className="text-xs text-muted-foreground italic pt-2">
                Simulations acknowledge limitations; pilot data will be published.
              </p>
            </CardContent>
          </Card>

          {/* Tone & Balance Note */}
          <p className="text-sm text-muted-foreground text-center max-w-2xl mx-auto pt-8 leading-relaxed">
            We support equitable workforce planning with transparent methods, local oversight, and balanced stakeholder input.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;