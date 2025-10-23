import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-medical-team.jpg";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Diverse medical team representing NextDoc Global's mission"
          className="w-full h-full object-cover"
          width="1920"
          height="1080"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-medical-blue/95 via-medical-blue/80 to-medical-teal/85 md:from-medical-blue/90 md:via-medical-blue/70 md:to-medical-teal/80"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-12">
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.2] tracking-tight">
            <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Built by Doctors.
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-100 to-white bg-clip-text text-transparent">
              For Doctors.
            </span>
            <br />
            <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              AI-Powered.
            </span>
          </h1>

          <p className="text-lg md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Practical, governance-first AI that helps doctors plan, qualify, and progress.
          </p>

          {/* Primary CTAs with sublabels */}
          <div className="pt-12 space-y-8">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-4xl mx-auto">
              <a href="https://www.nextdocuk.com" target="_blank" rel="noopener" className="w-full sm:w-auto">
                <Button variant="nextdoc-uk" size="lg" className="w-full sm:w-auto shadow-lg hover:shadow-xl">
                  Enter NextDoc UK
                </Button>
              </a>
              <Button variant="nextdoc-india" size="lg" className="w-full sm:w-auto shadow-lg hover:shadow-xl" onClick={() => navigate('/nextdoc-india')}>
                NextDoc India
              </Button>
              <Button variant="ndg-academy" size="lg" className="w-full sm:w-auto shadow-lg hover:shadow-xl" onClick={() => navigate('/academy')}>
                NDG Academy
              </Button>
              <a href="https://www.nextdocglobal.io" target="_blank" rel="noopener" className="w-full sm:w-auto">
                <Button variant="nextdoc-labs" size="lg" className="w-full sm:w-auto shadow-lg hover:shadow-xl">
                  NextDoc Labs
                </Button>
              </a>
            </div>

            <div className="pt-8">
              <p className="text-xs uppercase tracking-wider text-blue-200/70 text-center mb-4 font-semibold">India Divisions</p>
              <div className="flex flex-wrap gap-2 justify-center max-w-3xl mx-auto">
                <Button variant="nextdoc-pg" size="sm" className="text-sm opacity-90 hover:opacity-100" onClick={() => navigate('/nextdoc-pg')}>
                  NextDoc PG
                </Button>
                <Button variant="nextdoc-med" size="sm" className="text-sm opacity-90 hover:opacity-100" onClick={() => navigate('/nextdoc-med')}>
                  NextDoc Med
                </Button>
                <Button variant="nextdoc-care" size="sm" className="text-sm opacity-90 hover:opacity-100" onClick={() => navigate('/nextdoc-care')}>
                  NextDoc Care
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  );
};

export default HeroSection;