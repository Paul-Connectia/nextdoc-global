# NextDoc Global - Corporate Website

**Doctor-led platform transforming international medical graduate (IMG) careers through AI, mentorship, and measurable outcomes.**

[![TypeScript](https://img.shields.io/badge/TypeScript-4.9+-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.3+-61DAFB.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0+-646CFF.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4+-38B2AC.svg)](https://tailwindcss.com/)

---

## 🏥 Project Overview

NextDoc Global is a multi-brand medical career development ecosystem serving international medical graduates (IMGs) across the UK and India. This repository contains the corporate marketing website - a single-page application showcasing our brand portfolio, leadership, and AI-powered career tools.

### Brand Architecture

- **NextDoc Global** (Parent Brand) - Corporate hub & ecosystem navigator
- **NextDoc UK** - UK career pathway platform for IMGs
- **NextDoc India** - Comprehensive medical career support in India
- **NextDoc Labs** - AI-powered career tools (CV Booster™, InterviewSim™, etc.)
- **NextDoc PG/Med/Care** - Specialized platforms (Launching Q1-Q3 2026)
- **NDG Academy** - Medical education & professional development

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm
- Git

### Installation

```bash
# Clone the repository
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:8080` to view the application.

### Build for Production

```bash
# Type check and build
npm run build

# Preview production build
npm run preview
```

---

## 📁 Project Structure

```
nextdoc-global/
├── src/
│   ├── assets/              # Images, logos, screenshots
│   ├── components/          # React components
│   │   ├── ui/             # shadcn/ui components
│   │   ├── SEO.tsx         # SEO meta tags component
│   │   ├── ErrorBoundary.tsx
│   │   ├── PageHeader.tsx  # Navigation breadcrumbs
│   │   └── ...
│   ├── config/             # Configuration files
│   │   └── seo.ts          # SEO settings
│   ├── hooks/              # Custom React hooks
│   ├── pages/              # Page components
│   ├── types/              # TypeScript type definitions
│   ├── utils/              # Utility functions
│   ├── index.css           # Design system & Tailwind config
│   └── App.tsx             # Main application component
├── public/                 # Static assets
│   ├── robots.txt
│   └── sitemap.xml
├── .env.example            # Environment variables template
└── README.md
```

---

## 🎨 Design System

### Color Palette

Our medical-grade color system uses HSL values for accessibility:

- **Primary (Medical Blue)**: `hsl(200, 95%, 48%)` - Trust, professionalism
- **Medical Teal**: `hsl(180, 95%, 45%)` - Innovation, technology
- **Medical Green**: `hsl(142, 95%, 45%)` - Growth, success
- **NHS Blue**: `hsl(225, 100%, 26%)` - UK healthcare association

All colors defined in `src/index.css` as CSS custom properties.

### Typography

- **Headings**: System font stack with fallbacks
- **Body**: Optimized for readability, 16px base
- **Accessibility**: WCAG 2.2 AA contrast ratios

### Components

Built on [shadcn/ui](https://ui.shadcn.com/) - customizable, accessible React components. Modify in `src/components/ui/`.

---

## 🧩 Key Features

- ✅ **SEO Optimized** - Meta tags, Open Graph, structured data
- ✅ **Performance** - Lazy loading, code splitting, optimized images
- ✅ **Accessibility** - WCAG 2.2 AA compliant, keyboard navigation
- ✅ **Error Handling** - Error boundaries, 404/500 pages
- ✅ **Type Safe** - Full TypeScript coverage
- ✅ **Responsive** - Mobile-first design
- ✅ **Testing Ready** - Vitest + Testing Library setup

---

## 📝 Adding New Pages

1. Create page component in `src/pages/NewPage.tsx`
2. Add route in `src/App.tsx`
3. Add SEO config in `src/config/seo.ts`
4. Update `public/sitemap.xml`
5. Add breadcrumb navigation with `<PageHeader />`

Example:
```tsx
import SEO from "@/components/SEO";
import PageHeader from "@/components/PageHeader";
import { PAGE_SEO } from "@/config/seo";

const NewPage = () => (
  <>
    <SEO {...PAGE_SEO.newPage} />
    <PageHeader breadcrumbItems={[{ label: "New Page" }]} />
    {/* Your content */}
  </>
);
```

---

## 🧪 Testing

```bash
# Run unit tests
npm run test

# Run tests with coverage
npm run test:coverage

# Type checking
npm run type-check
```

---

## 🌐 Deployment

Built for deployment on:
- Vercel (recommended)
- Netlify
- AWS Amplify
- Any static hosting

```bash
npm run build
# Upload 'dist' folder to hosting provider
```

---

## 📄 Documentation

- [CONTRIBUTING.md](./CONTRIBUTING.md) - Contribution guidelines
- [ARCHITECTURE.md](./ARCHITECTURE.md) - System architecture
- [ACCESSIBILITY.md](./ACCESSIBILITY.md) - Accessibility standards
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Deployment guide
- [TESTING.md](./TESTING.md) - Testing guidelines

---

## 🔒 Environment Variables

Copy `.env.example` to `.env.development`:

```bash
VITE_SITE_URL=https://nextdocglobal.com
VITE_CONTACT_EMAIL=info@nextdocglobal.com
```

---

## 📞 Support

- **Email**: info@nextdocglobal.com
- **Website**: https://nextdocglobal.com
- **LinkedIn**: [NextDoc Global](https://www.linkedin.com/company/nextdoc-global)

---

## 📜 License

Copyright © 2024-2025 NextDoc Global Ltd. All rights reserved.

---

**Built with ❤️ for international medical graduates worldwide**
