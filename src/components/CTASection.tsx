import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const CTASection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 md:py-28 bg-gradient-to-r from-medical-blue via-medical-teal to-medical-blue">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center text-white space-y-12">
          <h2 className="text-4xl md:text-6xl font-bold">
            Your Career. <span className="text-blue-100">Powered by NextDoc.</span>
          </h2>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-8">
            <a
              href="https://www.nextdocuk.com"
              target="_blank"
              rel="noopener"
              className="inline-flex"
            >
              <Button variant="nextdoc-uk" size="lg" className="hover:scale-105 transition-transform duration-200" aria-label="Explore NextDoc UK">
                NextDoc UK
              </Button>
            </a>
            <Button variant="nextdoc-india" size="lg" className="hover:scale-105 transition-transform duration-200" aria-label="Explore NextDoc India" onClick={() => navigate('/nextdoc-india')}>
              NextDoc India
            </Button>
            <Button variant="ndg-academy" size="lg" className="hover:scale-105 transition-transform duration-200" aria-label="Explore NDG Academy" onClick={() => navigate('/academy')}>
              NDG Academy
            </Button>
            <a
              href="http://www.nextdocglobal.io"
              target="_blank"
              rel="noopener"
              className="inline-flex"
            >
              <Button variant="nextdoc-labs" size="lg" className="hover:scale-105 transition-transform duration-200" aria-label="Explore NextDoc Labs">
                NextDoc Labs
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;