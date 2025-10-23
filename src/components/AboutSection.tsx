const AboutSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Subtle globe wireframe pattern */}
      <div className="absolute inset-0 bg-pattern-globe opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Global Vision. <span className="text-medical-blue">Local Impact.</span>
          </h2>
          
          <div className="prose prose-lg mx-auto text-muted-foreground leading-relaxed space-y-6">
            <p className="text-xl">
              NextDoc Global is a doctor-led platform transforming how international medical graduates (IMGs) build their careers.
            </p>
            
            <p className="text-lg">
              NextDoc Global bridges medical ambition with real-world opportunity through AI, mentorship, and measurable outcomes.
            </p>
            
            <p className="text-lg">
              <span className="font-semibold text-medical-blue">Our mission:</span> to empower every doctor, from exam preparation in India and the UK to career pathways across borders, with clarity, confidence, and results.
            </p>
            
            <p className="text-sm text-muted-foreground italic border-l-4 border-medical-blue pl-4 mt-8">
              Career support only; not clinical decision-support. Advisors act in a personal capacity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;