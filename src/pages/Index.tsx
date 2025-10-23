import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import { PAGE_SEO } from "@/config/seo";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import AboutSection from "@/components/AboutSection";
import WorkSection from "@/components/WorkSection";
import InnovationsSection from "@/components/InnovationsSection";
import LeadershipSection from "@/components/LeadershipSection";
import ResearchSection from "@/components/ResearchSection";
import GlobalPresenceSection from "@/components/GlobalPresenceSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <SEO
        title={PAGE_SEO.home.title}
        description={PAGE_SEO.home.description}
        keywords={PAGE_SEO.home.keywords}
      />
      <StructuredData
        breadcrumbs={[
          { name: "Home", url: "https://nextdocglobal.com" }
        ]}
        type="WebPage"
      />
      <div className="min-h-screen" id="main-content">
        <HeroSection />
      <TrustSection />
      <AboutSection />
      <WorkSection />
      <InnovationsSection />
      <LeadershipSection />
      <ResearchSection />
      <GlobalPresenceSection />
        <CTASection />
        <Footer />
      </div>
    </>
  );
};

export default Index;
