# NextDoc Global - Architecture Documentation

## 🏗️ System Overview

NextDoc Global is a multi-brand corporate website built as a high-performance single-page application (SPA) with multiple routes. It serves as the central hub for the NextDoc ecosystem, connecting International Medical Graduates (IMGs) to AI-powered career development tools and platforms.

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    NextDoc Global Website                   │
│                   (React 18 + TypeScript)                   │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐    │
│  │  Marketing   │  │   Product    │  │    Legal     │    │
│  │    Pages     │  │   Showcase   │  │    Pages     │    │
│  └──────────────┘  └──────────────┘  └──────────────┘    │
│                                                             │
│  ┌──────────────────────────────────────────────────┐     │
│  │         SEO & Meta Management Layer              │     │
│  │       (react-helmet-async + Structured Data)     │     │
│  └──────────────────────────────────────────────────┘     │
│                                                             │
│  ┌──────────────────────────────────────────────────┐     │
│  │         Routing & Navigation Layer               │     │
│  │         (React Router v6 + Lazy Loading)         │     │
│  └──────────────────────────────────────────────────┘     │
│                                                             │
└─────────────────────────────────────────────────────────────┘
                            ↓
              ┌───────────────────────────┐
              │   Build & Optimization    │
              │   (Vite + TypeScript)     │
              └───────────────────────────┘
                            ↓
              ┌───────────────────────────┐
              │   Static Hosting          │
              │   (Vercel/Netlify/AWS)    │
              └───────────────────────────┘
```

---

## 🛠️ Technology Stack

### Core Framework
- **React 18.3.1** - UI component library with concurrent features
- **TypeScript 5.x** - Type-safe development
- **Vite 5.x** - Lightning-fast build tool and dev server

### Routing & Navigation
- **React Router v6.30.1** - Client-side routing with nested routes
- **Lazy loading** - Code-split routes for optimal performance

### Styling & Design
- **Tailwind CSS 3.x** - Utility-first CSS framework
- **shadcn/ui** - High-quality, accessible component primitives
- **CSS Custom Properties** - Design system tokens in `src/index.css`

### SEO & Meta Management
- **react-helmet-async 2.0.5** - Dynamic meta tag management
- **JSON-LD Structured Data** - Enhanced search engine understanding

### State Management
- **React Query (@tanstack/react-query 5.83.0)** - Server state management (future backend integration)
- **React Context** - Global UI state (themes, modals)
- **Local State** - Component-level state with `useState`/`useReducer`

### Form Handling
- **React Hook Form 7.61.1** - Performant form validation
- **Zod 3.25.76** - Schema validation

### Testing
- **Vitest 3.2.4** - Unit and integration testing
- **Testing Library** - Component testing utilities

### Development Tools
- **ESLint** - Code linting and quality enforcement
- **TypeScript Compiler** - Type checking
- **Bun/npm** - Package management

---

## 📦 Component Architecture

### Design Principles
1. **Atomic Design** - Components organized by complexity (atoms → organisms)
2. **Composition over Inheritance** - Reusable, composable components
3. **Single Responsibility** - Each component has one clear purpose
4. **Type Safety** - All components fully typed with TypeScript

### Component Hierarchy

```
src/
├── components/
│   ├── ui/                    # shadcn/ui primitives (atoms)
│   │   ├── button.tsx         # Base button component
│   │   ├── card.tsx           # Card layout primitive
│   │   └── ...                # 40+ UI primitives
│   │
│   ├── [Feature]Section.tsx   # Page sections (organisms)
│   │   ├── HeroSection.tsx    # Homepage hero
│   │   ├── AboutSection.tsx   # About content block
│   │   └── ...                # Modular page sections
│   │
│   ├── SEO.tsx                # Meta tag management
│   ├── StructuredData.tsx     # JSON-LD schemas
│   ├── PageHeader.tsx         # Page header with breadcrumbs
│   ├── Footer.tsx             # Site footer
│   ├── ErrorBoundary.tsx      # Error handling wrapper
│   ├── PageLoader.tsx         # Loading state component
│   └── ComingSoon.tsx         # Coming soon page template
│
├── pages/                     # Route-level components
│   ├── Index.tsx              # Homepage
│   ├── About.tsx              # Static content pages
│   ├── NextDoc[Brand].tsx     # Brand-specific pages
│   └── [Legal].tsx            # Legal/policy pages
│
├── hooks/                     # Custom React hooks
│   ├── use-toast.ts           # Toast notification hook
│   ├── use-mobile.tsx         # Responsive breakpoint hook
│   └── useFocusManagement.ts  # Accessibility focus hook
│
├── lib/                       # Utilities
│   └── utils.ts               # Helper functions (cn, etc.)
│
├── types/                     # TypeScript definitions
│   └── index.ts               # Shared type definitions
│
└── config/                    # Configuration
    └── seo.ts                 # SEO metadata configuration
```

### Component Patterns

#### 1. Page Components
```tsx
// Standard page structure
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import PageHeader from "@/components/PageHeader";

const PageName = () => (
  <>
    <SEO title="..." description="..." />
    <StructuredData breadcrumbs={[...]} />
    <PageHeader breadcrumbItems={[...]} />
    <main>{/* Page content */}</main>
  </>
);
```

#### 2. Section Components
```tsx
// Reusable content sections
const FeatureSection = () => (
  <section className="py-16 bg-background">
    <div className="container mx-auto">
      {/* Section content */}
    </div>
  </section>
);
```

#### 3. UI Primitives (shadcn/ui)
```tsx
// Customizable, accessible primitives
import { Button } from "@/components/ui/button";

<Button variant="nhs-primary" size="lg">
  Click Me
</Button>
```

---

## 🗺️ Routing Strategy

### Route Configuration

**File:** `src/App.tsx`

#### Primary Routes
- `/` - Homepage (Index.tsx)
- `/about` - About page
- `/leadership` - Leadership team
- `/careers` - Career opportunities
- `/research` - Research initiatives
- `/contact` - Contact information

#### Brand Routes
- `/nextdoc-india` - NextDoc India platform
- `/nextdoc-labs` - NextDoc Labs tools
- `/academy` - NDG Academy
- `/nextdoc-pg` - NextDoc PG (Coming Soon)
- `/nextdoc-med` - NextDoc Med (Coming Soon)
- `/nextdoc-care` - NextDoc Care (Coming Soon)

#### Legal Routes
- `/privacy` - Privacy Policy
- `/terms` - Terms & Conditions
- `/gdpr` - GDPR Compliance
- `/cookies` - Cookie Policy
- `/security` - Security & Compliance
- `/refund-policy` - Refund Policy
- `/subprocessors` - Sub-processors Register
- `/accessibility` - Accessibility Statement

#### Error Routes
- `/404` - Not Found (NotFound.tsx)
- `/500` - Server Error (ServerError.tsx)

### Route Protection (Future)
```tsx
// Authentication wrapper (future backend integration)
<Route 
  path="/dashboard" 
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  } 
/>
```

### Lazy Loading Implementation
```tsx
// Code-split routes for performance
const Academy = lazy(() => import('./pages/Academy'));
const About = lazy(() => import('./pages/About'));

<Suspense fallback={<PageLoader />}>
  <Routes>
    <Route path="/academy" element={<Academy />} />
    <Route path="/about" element={<About />} />
  </Routes>
</Suspense>
```

---

## ⚡ Performance Strategy

### 1. Code Splitting
- **Route-based splitting** - Each page is a separate chunk
- **Component-level splitting** - Heavy components load on-demand
- **Lazy loading** - Deferred loading for below-the-fold content

### 2. Image Optimization
- **WebP format** - 40-60% smaller than JPEG/PNG
- **Lazy loading** - Images load as they enter viewport
- **Explicit dimensions** - Prevent layout shift (CLS)
- **Responsive images** - Multiple sizes with `srcset`

### 3. Bundle Optimization
- **Tree shaking** - Remove unused code
- **Minification** - Compress JS/CSS
- **Chunk splitting** - Separate vendor and app code
- **Compression** - Gzip/Brotli on server

### 4. Caching Strategy
```
Cache-Control headers (production):
- HTML: no-cache (always revalidate)
- JS/CSS: immutable, max-age=31536000 (1 year)
- Images: max-age=2592000 (30 days)
```

### Build Configuration (vite.config.ts)
```typescript
build: {
  rollupOptions: {
    output: {
      manualChunks: {
        'react-vendor': ['react', 'react-dom', 'react-router-dom'],
        'ui-vendor': ['@radix-ui/*'],
      }
    }
  }
}
```

---

## 🔍 SEO Strategy

### Meta Tag Management
- **Dynamic titles** - Unique per page, under 60 characters
- **Meta descriptions** - Compelling copy, under 160 characters
- **Keywords** - Relevant medical career keywords
- **Open Graph** - Social media previews (LinkedIn, Twitter)
- **Canonical URLs** - Prevent duplicate content

### Structured Data (JSON-LD)
```typescript
// Organization Schema
{
  "@type": "MedicalOrganization",
  "name": "NextDoc Global",
  "url": "https://nextdocglobal.com",
  // ... complete org data
}

// BreadcrumbList Schema
{
  "@type": "BreadcrumbList",
  "itemListElement": [...]
}
```

### Sitemap & Robots
- **sitemap.xml** - All routes with priority and update frequency
- **robots.txt** - Crawl directives for search engines

### Implementation
**File:** `src/components/SEO.tsx`
- Helmet provider wraps entire app
- Each page sets unique meta tags
- Centralized SEO config in `src/config/seo.ts`

---

## 🗄️ State Management Approach

### Server State (Future)
```tsx
// React Query for backend data
const { data, isLoading } = useQuery({
  queryKey: ['products'],
  queryFn: fetchProducts
});
```

### UI State
```tsx
// Context for global UI state
const ThemeContext = createContext();

// Local state for component-specific data
const [isOpen, setIsOpen] = useState(false);
```

### Form State
```tsx
// React Hook Form + Zod
const form = useForm({
  resolver: zodResolver(contactSchema)
});
```

---

## 🎨 Design System

### Color Palette
Defined in `src/index.css` as CSS custom properties:
- **Medical Blue** - Primary brand color (NHS-inspired)
- **Trust Green** - Accent for trust signals
- **Brand Colors** - Unique color per NextDoc sub-brand
- **Semantic Tokens** - `--primary`, `--secondary`, `--accent`, etc.

### Typography Scale
- **Headings** - `text-4xl` to `text-6xl` (Responsive)
- **Body** - `text-base` to `text-lg`
- **Microcopy** - `text-sm` to `text-xs`

### Spacing System
Tailwind's default spacing scale (4px base unit)

### Component Variants
shadcn/ui components customized with variants:
```tsx
<Button variant="nhs-primary" size="lg" />
<Button variant="nhs-secondary" size="default" />
```

---

## 🚀 Future Considerations

### Backend Integration
- **Authentication** - User login/registration (Supabase Auth)
- **Database** - User profiles, CPD records (PostgreSQL)
- **API Routes** - Edge functions for server-side logic
- **File Storage** - Document uploads (Supabase Storage)

### CMS Integration
- **Content Management** - Sanity.io or Contentful
- **Blog** - News and research articles
- **Dynamic Products** - Editable product showcases

### Analytics & Monitoring
- **Google Analytics 4** - User behavior tracking
- **Plausible** - Privacy-friendly alternative
- **Error Tracking** - Sentry integration
- **Performance Monitoring** - Lighthouse CI

### Internationalization (i18n)
- **Multi-language Support** - English, Hindi, etc.
- **react-i18next** - Translation framework
- **Regional Content** - Localized pricing, contact info

### A/B Testing
- **Feature Flags** - Gradual rollouts
- **Split Testing** - Optimize conversion rates

---

## 📊 Build Process

### Development Mode
```bash
npm run dev
# Vite dev server with HMR at http://localhost:8080
```

### Production Build
```bash
npm run build
# 1. TypeScript compilation (tsc)
# 2. Vite build (bundling, minification)
# 3. Output to dist/ directory
```

### Preview Build
```bash
npm run preview
# Test production build locally
```

### Type Checking
```bash
npm run type-check
# Validate TypeScript without building
```

---

## 🔒 Security Considerations

### Content Security Policy (CSP)
```html
<!-- Future implementation -->
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; script-src 'self' 'unsafe-inline'">
```

### Environment Variables
- **Public variables** - Prefixed with `VITE_` (exposed to client)
- **Secrets** - Never committed to Git (use `.env.local`)

### Error Handling
- **ErrorBoundary** - Catches React errors gracefully
- **404/500 Pages** - User-friendly error messages
- **Console Warnings** - Errors logged (dev only)

---

## 📚 Documentation Standards

### Component Documentation
- **JSDoc comments** - Describe purpose, props, usage
- **TypeScript types** - Props interface with descriptions
- **Usage examples** - Code snippets in comments

### File Headers
```typescript
/**
 * Component Name
 * 
 * Brief description of component purpose and functionality.
 * 
 * @component
 * @example
 * <ComponentName prop="value" />
 */
```

---

## 🧪 Testing Strategy (Foundation)

### Unit Tests
- **Vitest** - Fast, Vite-native test runner
- **Testing Library** - Component testing utilities
- **Coverage** - Target 80%+ (future goal)

### E2E Tests (Future)
- **Playwright** - Cross-browser testing
- **Critical User Flows** - Homepage → Contact, etc.

### Accessibility Tests
- **axe-core** - Automated WCAG scanning
- **Manual Testing** - Keyboard navigation, screen readers

---

## 📈 Metrics & KPIs

### Performance Targets
- **Lighthouse Score** - 90+ (all categories)
- **First Contentful Paint (FCP)** - < 1.5s
- **Largest Contentful Paint (LCP)** - < 2.5s
- **Cumulative Layout Shift (CLS)** - < 0.1
- **Time to Interactive (TTI)** - < 3.5s

### Bundle Size Targets
- **Initial Bundle** - < 200 KB (gzipped)
- **Per-Route Chunk** - < 50 KB (gzipped)

### SEO Targets
- **Indexed Pages** - 100% of routes
- **Meta Tag Coverage** - 100%
- **Structured Data** - All pages

---

## 🔄 Version Control & Deployment

### Git Workflow
```
main → production (auto-deploy)
develop → staging (manual)
feature/* → PR to develop
```

### CI/CD Pipeline
```yaml
# .github/workflows/ci.yml (future)
- Lint check (ESLint)
- Type check (tsc)
- Run tests (Vitest)
- Build (Vite)
- Deploy to Vercel/Netlify
```

---

## 📞 Contact & Support

For architecture questions or contributions:
- **Email:** info@nextdocglobal.com
- **Documentation:** See `CONTRIBUTING.md`, `README.md`

---

**Last Updated:** 2025-10-19  
**Version:** 1.0.0  
**Maintained by:** NextDoc Global Development Team
