/**
 * SEO Configuration
 * 
 * Centralized SEO settings for NextDoc Global website.
 * All meta tags, Open Graph, and Twitter Card defaults.
 */

export const SEO_CONFIG = {
  // Site Information
  siteName: "NextDoc Global",
  siteUrl: "https://nextdocglobal.com",
  
  // Default Meta Tags
  defaultTitle: "NextDoc Global | Empowering IMG Careers Worldwide",
  defaultDescription: "Doctor-led platform transforming international medical graduate (IMG) careers through AI, mentorship, and measurable outcomes. From exam preparation to UK career pathways.",
  defaultKeywords: "IMG careers, international medical graduates, UK medical jobs, PLAB preparation, medical career development, NextDoc, NHS jobs, medical mentorship, AI medical tools",
  
  // Social Media
  twitterHandle: "@nextdocglobal",
  twitterCard: "summary_large_image" as const,
  
  // Open Graph
  ogType: "website",
  ogLocale: "en_GB",
  defaultOgImage: "/og-image.jpg",
  
  // Organization Schema
  organization: {
    name: "NextDoc Global Ltd.",
    legalName: "NextDoc Global Ltd.",
    url: "https://nextdocglobal.com",
    logo: "https://nextdocglobal.com/logo.png",
    foundingDate: "2024",
    founders: [
      {
        "@type": "Person",
        name: "Dr. Roshan Khanderi"
      }
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "GB"
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      email: "info@nextdocglobal.com"
    },
    sameAs: [
      "https://www.linkedin.com/company/nextdoc-global",
      "https://twitter.com/nextdocglobal"
    ]
  }
};

// Page-specific SEO configurations
export const PAGE_SEO = {
  home: {
    title: "NextDoc Global | IMG Career Platform",
    description: "Transform your medical career with NextDoc Global. AI-powered tools, expert mentorship, and clear pathways for international medical graduates in the UK and India.",
    keywords: "NextDoc Global, IMG careers, medical career platform, UK medical jobs, international doctors"
  },
  
  about: {
    title: "About NextDoc Global | Doctor-Led Career Platform",
    description: "Learn about NextDoc Global's mission to empower international medical graduates through technology, mentorship, and structured career pathways.",
    keywords: "about NextDoc, medical career support, IMG platform, doctor-led organization"
  },
  
  leadership: {
    title: "Leadership Team | NextDoc Global",
    description: "Meet the doctors and advisors leading NextDoc Global. Frontline clinicians, academic mentors, and policy experts building the future of IMG careers.",
    keywords: "NextDoc leadership, medical advisors, IMG mentors, healthcare experts"
  },
  
  careers: {
    title: "Careers at NextDoc Global | Join Our Team",
    description: "Join NextDoc Global in transforming medical careers worldwide. Explore opportunities in healthcare innovation, AI, and career development.",
    keywords: "NextDoc careers, medical tech jobs, healthcare innovation careers, IMG support jobs"
  },
  
  research: {
    title: "Research & Innovation | NextDoc Global",
    description: "Explore NextDoc Global's research initiatives in AI-powered career development, IMG integration, and healthcare workforce optimization.",
    keywords: "medical career research, IMG studies, healthcare AI research, workforce innovation"
  },
  
  contact: {
    title: "Contact NextDoc Global | Get in Touch",
    description: "Contact NextDoc Global for inquiries about our IMG career platform, partnership opportunities, or support questions.",
    keywords: "contact NextDoc, IMG support, medical career help, NextDoc inquiries"
  },
  
  nextdocIndia: {
    title: "NextDoc India | Medical Career Development Platform",
    description: "Comprehensive medical career support for doctors in India. From MBBS to postgraduate pathways, NextDoc India provides guidance and tools.",
    keywords: "NextDoc India, Indian medical careers, MBBS support, postgraduate medical education India"
  },
  
  academy: {
    title: "NDG Academy | Medical Education & Training",
    description: "Professional development courses and certifications for international medical graduates. Enhance your clinical and career skills with NDG Academy.",
    keywords: "NDG Academy, medical education, IMG training, clinical courses, professional development"
  },
  
  labs: {
    title: "NextDoc Labs | AI-Powered Career Tools",
    description: "Innovative AI tools for medical careers: CV Booster™, InterviewSim™, SponsorMatch™, and GapMap™. Technology that works for doctors.",
    keywords: "NextDoc Labs, medical AI tools, CV optimization, interview preparation, NHS sponsorship"
  }
};
