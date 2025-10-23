import { Card, CardContent } from "@/components/ui/card";
import cvBoosterImg from "@/assets/products/cv-booster-screenshot.jpg";
import interviewSimImg from "@/assets/products/interviewsim-screenshot.jpg";
import sponsorMatchImg from "@/assets/products/sponsormatch-screenshot.jpg";
import gapMapImg from "@/assets/products/gapmap-screenshot.jpg";

const InnovationsSection = () => {
  const innovations = [
    {
      title: "CV Booster™",
      description: "AI-powered CVs that pass NHS ATS filters.",
      microcopy: "Optimize your CV for NHS applicant tracking systems",
      icon: "📋",
      image: cvBoosterImg,
      color: "medical-blue"
    },
    {
      title: "InterviewSim™",
      description: "Practice with a smart AI interview coach.",
      microcopy: "Realistic interview scenarios with instant feedback",
      icon: "🎯",
      image: interviewSimImg,
      color: "medical-teal"
    },
    {
      title: "SponsorMatch™",
      description: "Find NHS Trusts that can sponsor your visa.",
      microcopy: "Connect with sponsorship-approved NHS employers",
      icon: "🤝",
      image: sponsorMatchImg,
      color: "medical-green"
    },
    {
      title: "GapMap™",
      description: "Track, close, and certify career gaps.",
      microcopy: "Document and validate your professional journey",
      icon: "📈",
      image: gapMapImg,
      color: "medical-blue-light"
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Technology That <span className="text-medical-blue">Works for Doctors.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {innovations.map((innovation, index) => (
            <Card key={index} className="border-0 shadow-card hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-accent/30 group overflow-hidden">
              <CardContent className="p-0">
                {/* Product Screenshot */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-accent/30 to-accent/10">
                  <img
                    src={innovation.image}
                    alt={`${innovation.title} interface screenshot`}
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                    loading="lazy"
                    decoding="async"
                    width="400"
                    height="300"
                  />
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-r from-medical-blue to-medical-teal flex items-center justify-center text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {innovation.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground text-center">
                    {innovation.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-center text-sm">
                    {innovation.description}
                  </p>
                  <p className="text-xs text-muted-foreground/80 text-center italic">
                    {innovation.microcopy}
                  </p>
                  <a
                    href="https://www.nextdocuk.com/"
                    className="inline-block w-full text-center text-sm font-medium text-medical-blue hover:text-medical-teal hover:underline transition-colors duration-200 pt-2 focus-visible:ring-2 focus-visible:ring-medical-blue focus-visible:ring-offset-2 rounded"
                    aria-label={`Learn more about ${innovation.title}`}
                  >
                    Learn more →
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InnovationsSection;
