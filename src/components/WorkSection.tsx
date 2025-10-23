import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const WorkSection = () => {
  const workAreas = [
    {
      title: "UK",
      description: "NHS-focused consulting, GMC registration support, CPD certification.",
      icon: "🇬🇧",
      gradient: "from-medical-blue to-medical-blue-light"
    },
    {
      title: "India", 
      description: "Adaptive exam prep, smart QBank, AI-driven analytics.",
      icon: "🇮🇳",
      gradient: "from-medical-teal to-medical-green"
    },
    {
      title: "Future Expansion",
      description: "US, MENA, Southeast Asia.",
      icon: "🌐",
      gradient: "from-medical-blue-light to-medical-teal"
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-accent/15 relative overflow-hidden">
      {/* Decorative stethoscope pattern */}
      <div className="absolute top-10 right-10 text-9xl opacity-5 select-none">🩺</div>
      <div className="absolute bottom-10 left-10 text-9xl opacity-5 select-none">💼</div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Where We Work. <span className="text-medical-blue">How We Impact.</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
          {workAreas.map((area, index) => (
            <Card key={index} className="border-0 shadow-card hover:shadow-elevated transition-all duration-300 hover:scale-105 bg-gradient-to-br from-white to-blue-50/50 relative overflow-hidden group">
              <CardHeader className="text-center pb-4">
                {/* Circuit pattern overlay */}
                <div className="absolute inset-0 bg-pattern-circuits opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                
                <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r ${area.gradient} flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                  {area.icon}
                </div>
                <CardTitle className="text-2xl font-bold text-foreground">{area.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center leading-relaxed">
                  {area.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;