# Contributing to NextDoc Global

Thank you for your interest in contributing to NextDoc Global! This guide will help you get started.

## 📋 Table of Contents
- [Code of Conduct](#code-of-conduct)
- [Development Setup](#development-setup)
- [Adding New Pages](#adding-new-pages)
- [Modifying Design System](#modifying-design-system)
- [Component Guidelines](#component-guidelines)
- [Code Style](#code-style)
- [Pull Request Process](#pull-request-process)

---

## Code of Conduct

- Be respectful and professional
- Focus on constructive feedback
- Medical data and patient privacy are paramount

---

## Development Setup

```bash
npm install
npm run dev
```

Visit `http://localhost:8080`

---

## Adding New Pages

### Step-by-Step Process

1. **Create Page Component** (`src/pages/NewPage.tsx`)
```tsx
import SEO from "@/components/SEO";
import PageHeader from "@/components/PageHeader";

const NewPage = () => (
  <>
    <SEO title="Page Title" description="..." />
    <PageHeader breadcrumbItems={[{ label: "New Page" }]} />
    <div className="min-h-screen bg-background" id="main-content">
      {/* Content */}
    </div>
  </>
);

export default NewPage;
```

2. **Add Route** (`src/App.tsx`)
```tsx
const NewPage = lazy(() => import("./pages/NewPage"));
// ...
<Route path="/new-page" element={<NewPage />} />
```

3. **Add SEO Config** (`src/config/seo.ts`)
```tsx
newPage: {
  title: "New Page Title",
  description: "Description under 160 chars",
  keywords: "relevant, keywords, here"
}
```

4. **Update Sitemap** (`public/sitemap.xml`)

---

## Modifying Design System

### Colors
Edit `src/index.css` - all colors must be HSL:
```css
--custom-color: 200 95% 48%;
```

Then use in components:
```tsx
<div className="bg-custom-color">
```

### Typography
Modify font scales in `src/index.css` base layer.

---

## Component Guidelines

- Use TypeScript for all components
- Import types from `src/types/`
- Follow shadcn/ui patterns
- Add JSDoc comments for complex components

Example:
```tsx
/**
 * ProductCard Component
 * 
 * Displays a product with image, title, and CTA
 */
interface ProductCardProps {
  title: string;
  image: string;
}

const ProductCard = ({ title, image }: ProductCardProps) => {
  // Component logic
};
```

---

## Code Style

- **TypeScript**: Strict mode enabled
- **Formatting**: Prettier (auto-format on save)
- **Linting**: ESLint rules enforced
- **Naming**: PascalCase for components, camelCase for functions

---

## Pull Request Process

1. Create feature branch: `git checkout -b feature/new-feature`
2. Make changes and test locally
3. Run type check: `npm run type-check`
4. Commit with clear message: `git commit -m "feat: add new page"`
5. Push and create PR
6. Request review from maintainers

---

## Questions?

Contact: info@nextdocglobal.com
