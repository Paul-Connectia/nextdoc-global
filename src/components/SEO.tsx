import { Helmet } from "react-helmet-async";
import { SEO_CONFIG } from "@/config/seo";

/**
 * SEO Component
 * 
 * Manages meta tags, Open Graph, Twitter Cards, and structured data
 * for optimal search engine visibility and social media sharing.
 * 
 * @example
 * <SEO
 *   title="About Us"
 *   description="Learn about our mission"
 *   keywords="medical careers, IMG support"
 * />
 */

interface SEOProps {
  /** Page title (will be appended with site name) */
  title?: string;
  /** Meta description (max 160 characters recommended) */
  description?: string;
  /** Comma-separated keywords */
  keywords?: string;
  /** Open Graph image URL */
  ogImage?: string;
  /** Canonical URL (defaults to current page) */
  canonicalUrl?: string;
  /** Page type for Open Graph */
  ogType?: string;
  /** Twitter card type */
  twitterCard?: "summary" | "summary_large_image";
  /** Disable indexing for this page */
  noIndex?: boolean;
}

const SEO = ({
  title,
  description = SEO_CONFIG.defaultDescription,
  keywords = SEO_CONFIG.defaultKeywords,
  ogImage = SEO_CONFIG.defaultOgImage,
  canonicalUrl,
  ogType = SEO_CONFIG.ogType,
  twitterCard = SEO_CONFIG.twitterCard,
  noIndex = false,
}: SEOProps) => {
  // Construct full title
  const fullTitle = title 
    ? `${title} | ${SEO_CONFIG.siteName}` 
    : SEO_CONFIG.defaultTitle;

  // Determine canonical URL
  const canonical = canonicalUrl || 
    (typeof window !== "undefined" ? window.location.href : SEO_CONFIG.siteUrl);

  // Construct full image URL
  const fullOgImage = ogImage.startsWith("http") 
    ? ogImage 
    : `${SEO_CONFIG.siteUrl}${ogImage}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />
      
      {/* Robots */}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:site_name" content={SEO_CONFIG.siteName} />
      <meta property="og:locale" content={SEO_CONFIG.ogLocale} />
      
      {/* Twitter */}
      <meta property="twitter:card" content={twitterCard} />
      <meta property="twitter:url" content={canonical} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={fullOgImage} />
      <meta property="twitter:site" content={SEO_CONFIG.twitterHandle} />
      <meta property="twitter:creator" content={SEO_CONFIG.twitterHandle} />
      
      {/* Additional SEO */}
      <meta name="author" content={SEO_CONFIG.siteName} />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
    </Helmet>
  );
};

export default SEO;
