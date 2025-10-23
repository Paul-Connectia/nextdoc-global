import { Shield, FileCheck, Lock, Award } from "lucide-react";

const TrustSection = () => {
  const trustElements = [
    {
      icon: Shield,
      title: "ICO Registered",
      description: "Data protection compliance"
    },
    {
      icon: FileCheck,
      title: "Company No. 16504223",
      description: "Registered in England & Wales"
    },
    {
      icon: Lock,
      title: "GDPR Compliant",
      description: "Your data is secure"
    },
    {
      icon: Award,
      title: "NHS-Aligned Mentorship",
      description: "Clinical excellence standards"
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-accent/5 relative overflow-hidden">
      {/* Subtle circuit pattern background */}
      <div className="absolute inset-0 bg-pattern-circuits opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16">
          Building Trust Through Transparency
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {trustElements.map((element, index) => {
            const Icon = element.icon;
            return (
              <div 
                key={index}
                className="flex flex-col items-center text-center space-y-4 p-8 rounded-lg bg-background/80 hover:bg-background hover:shadow-medical transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-medical-blue to-medical-teal flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {element.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {element.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
