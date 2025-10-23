/**
 * Shared TypeScript type definitions for NextDoc Global
 * 
 * This file contains all shared types used across the application
 * to ensure type safety and consistency.
 */

// ============= Navigation Types =============

/**
 * Represents a single breadcrumb navigation item
 */
export interface BreadcrumbItem {
  /** Display label for the breadcrumb */
  label: string;
  /** Optional URL for the breadcrumb link */
  href?: string;
}

// ============= Brand Types =============

/**
 * Information about a NextDoc brand
 */
export interface BrandInfo {
  /** Official brand name */
  name: string;
  /** Brand color in HSL format */
  color: string;
  /** Brand description */
  description: string;
  /** Expected launch timeline (optional) */
  launchTimeline?: string;
}

// ============= Team & Leadership Types =============

/**
 * Team member or leadership profile
 */
export interface TeamMember {
  /** Full name including title (e.g., "Dr. John Smith") */
  name: string;
  /** Job title or position */
  title: string;
  /** Professional credentials or specialization */
  credentials?: string;
  /** Professional background summary */
  background?: string;
  /** Personal quote or statement */
  quote?: string;
  /** Profile photo URL */
  image?: string;
  /** LinkedIn profile URL */
  linkedin?: string;
}

// ============= Product & Innovation Types =============

/**
 * Product or innovation showcase item
 */
export interface Product {
  /** Unique product identifier */
  id?: string;
  /** Product name (e.g., "CV Booster™") */
  title: string;
  /** Main product description */
  description: string;
  /** Short additional context */
  microcopy?: string;
  /** Product icon (emoji or component) */
  icon?: string;
  /** Product screenshot or image URL */
  image?: string;
  /** Brand color identifier */
  color?: string;
  /** List of key features */
  features?: string[];
  /** Product page or external link */
  link?: string;
}

// ============= Geographic Work Areas =============

/**
 * Geographic region or work area
 */
export interface WorkArea {
  /** Region name (e.g., "UK", "India") */
  title: string;
  /** Region description */
  description: string;
  /** Representative icon */
  icon: string;
  /** Associated brand color */
  color?: string;
}

// ============= SEO & Meta Types =============

/**
 * SEO metadata for pages
 */
export interface SEOMetadata {
  /** Page title (max 60 characters) */
  title: string;
  /** Meta description (max 160 characters) */
  description: string;
  /** Comma-separated keywords */
  keywords?: string;
  /** Open Graph image URL */
  ogImage?: string;
  /** Canonical URL */
  canonicalUrl?: string;
  /** Twitter card type */
  twitterCard?: 'summary' | 'summary_large_image';
}

// ============= Form & Contact Types =============

/**
 * Contact form submission data
 */
export interface ContactFormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

// ============= Route Configuration Types =============

/**
 * Application route definition
 */
export interface RouteConfig {
  path: string;
  label: string;
  component?: string;
  protected?: boolean;
  showInNav?: boolean;
}
