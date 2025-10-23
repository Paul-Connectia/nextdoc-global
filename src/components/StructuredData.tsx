import { Helmet } from "react-helmet-async";
import { SEO_CONFIG } from "@/config/seo";

/**
 * Structured Data Component
 * 
 * Injects JSON-LD structured data for enhanced search engine understanding.
 * Includes Organization, WebSite, and BreadcrumbList schemas.
 */

interface StructuredDataProps {
  /** Breadcrumb path for BreadcrumbList schema */
  breadcrumbs?: Array<{ name: string; url: string }>;
  /** Page-specific schema type */
  type?: "WebPage" | "AboutPage" | "ContactPage" | "FAQPage";
}

const StructuredData = ({ breadcrumbs, type = "WebPage" }: StructuredDataProps) => {
  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    ...SEO_CONFIG.organization,
  };

  // WebSite Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SEO_CONFIG.siteName,
    url: SEO_CONFIG.siteUrl,
    description: SEO_CONFIG.defaultDescription,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SEO_CONFIG.siteUrl}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  // Page Schema
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": type,
    name: typeof document !== "undefined" ? document.title : SEO_CONFIG.defaultTitle,
    url: typeof window !== "undefined" ? window.location.href : SEO_CONFIG.siteUrl,
    description: SEO_CONFIG.defaultDescription,
    isPartOf: {
      "@type": "WebSite",
      "@id": `${SEO_CONFIG.siteUrl}/#website`,
    },
  };

  // BreadcrumbList Schema
  const breadcrumbSchema = breadcrumbs
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((crumb, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: crumb.name,
          item: crumb.url,
        })),
      }
    : null;

  return (
    <Helmet>
      {/* Organization Schema */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>

      {/* WebSite Schema */}
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>

      {/* Page Schema */}
      <script type="application/ld+json">
        {JSON.stringify(pageSchema)}
      </script>

      {/* BreadcrumbList Schema */}
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
    </Helmet>
  );
};

export default StructuredData;
