# NextDoc Global - Assets Inventory

## Overview
This directory contains all static assets for the NextDoc Global website including images, logos, product screenshots, and team photos.

---

## 📁 Directory Structure

```
src/assets/
├── logo/
│   └── NGD_logo-white.jpg          # Main NextDoc Global logo (white version)
├── team/
│   ├── dr-ibn-wahab.jpg            # Dr. Ibn Benin Wahab profile photo
│   ├── dr-karthik-kumar.jpg        # Dr. Karthik Kumar profile photo
│   ├── dr-pradeep-sabapathy.jpg    # Dr. Pradeep Sabapathy profile photo
│   └── dr-roshan-khanderi.jpg      # Dr. Roshan Khanderi profile photo
├── products/
│   ├── cv-booster-screenshot.jpg   # CV Booster™ interface screenshot
│   ├── interviewsim-screenshot.jpg # InterviewSim™ interface screenshot
│   ├── sponsormatch-screenshot.jpg # SponsorMatch™ interface screenshot
│   └── gapmap-screenshot.jpg       # GapMap™ interface screenshot
├── global-map.jpg                  # Global presence background image
├── hero-medical-team.jpg           # Hero section team photo
└── medical-ai.jpg                  # Medical AI visualization
```

---

## 🖼️ Asset Guidelines

### Image Optimization
- **Format**: Use WebP for photos, SVG for logos/icons when possible
- **Compression**: All images should be compressed before commit
- **Max dimensions**: 
  - Hero images: 1920px width
  - Product screenshots: 1200px width
  - Team photos: 400x400px
  - Logos: SVG or 2x resolution PNG

### Naming Conventions
- Use kebab-case: `product-name-screenshot.jpg`
- Include descriptive keywords: `hero-medical-team.jpg`
- Avoid generic names like `image1.jpg`

### Alt Text Standards
All images MUST have descriptive alt text:
- **Team photos**: `[Name], [Title]` (e.g., "Dr. Roshan Khanderi, Founder & CEO")
- **Product screenshots**: `[Product Name] interface screenshot` (e.g., "CV Booster™ interface screenshot")
- **Decorative images**: Use empty alt (`alt=""`) or `aria-hidden="true"`

### Responsive Images
Consider providing multiple sizes for responsive images:
```tsx
<img
  src={heroImage}
  srcSet={`${heroImageSmall} 640w, ${heroImageMedium} 1024w, ${heroImageLarge} 1920w`}
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1920px"
  alt="NextDoc Global medical team"
/>
```

---

## 📋 Asset Inventory

### Logos
| Filename | Dimensions | Format | Usage | Alt Text |
|----------|-----------|---------|-------|----------|
| `NGD_logo-white.jpg` | TBD | JPG | Header, dark backgrounds | "NextDoc Global logo" |

### Team Photos
| Filename | Person | Dimensions | Alt Text |
|----------|--------|-----------|----------|
| `dr-roshan-khanderi.jpg` | Dr. Roshan Khanderi | 400x400px | "Dr. Roshan Khanderi, Founder & CEO, NextDoc Global Ltd." |
| `dr-pradeep-sabapathy.jpg` | Dr. Pradeep Sabapathy | 400x400px | "Dr. Pradeep Sabapathy, Clinical Fellow, King's College Hospital NHS Foundation Trust, London" |
| `dr-ibn-wahab.jpg` | Dr. Ibn Benin Wahab | 400x400px | "Dr. Ibn Benin Wahab, Strategic Advisor (Policy & Workforce)" |
| `dr-karthik-kumar.jpg` | Dr. Karthik Kumar | 400x400px | "Dr. Karthik Kumar, Consultant Pulmonologist, India" |

### Product Screenshots
| Filename | Product | Dimensions | Alt Text |
|----------|---------|-----------|----------|
| `cv-booster-screenshot.jpg` | CV Booster™ | 1200x900px | "CV Booster™ interface screenshot" |
| `interviewsim-screenshot.jpg` | InterviewSim™ | 1200x900px | "InterviewSim™ interface screenshot" |
| `sponsormatch-screenshot.jpg` | SponsorMatch™ | 1200x900px | "SponsorMatch™ interface screenshot" |
| `gapmap-screenshot.jpg` | GapMap™ | 1200x900px | "GapMap™ interface screenshot" |

### Hero & Background Images
| Filename | Usage | Dimensions | Alt Text |
|----------|-------|-----------|----------|
| `hero-medical-team.jpg` | Homepage hero | 1920x1080px | "NextDoc Global medical team collaboration" |
| `global-map.jpg` | Global presence section | 1920x1080px | "" (decorative) |
| `medical-ai.jpg` | Technology sections | 1200x800px | "AI-powered medical career tools visualization" |

---

## 🔄 Adding New Assets

### Checklist for New Images:
1. ✅ Optimize image size (use TinyPNG, ImageOptim, or similar)
2. ✅ Convert to WebP if possible (JPG fallback for compatibility)
3. ✅ Use descriptive filename
4. ✅ Update this README with asset details
5. ✅ Ensure alt text is implemented in component
6. ✅ Test on multiple screen sizes
7. ✅ Verify accessibility (contrast, screen reader compatibility)

### Example Import:
```tsx
import heroImage from "@/assets/hero-medical-team.jpg";

<img
  src={heroImage}
  alt="NextDoc Global medical team collaboration"
  loading="lazy"
  width="1920"
  height="1080"
/>
```

---

## 🎨 Design Assets Source

All design assets should be:
- Stored in original format (Figma, Sketch, AI, PSD)
- Exported at 2x resolution for retina displays
- Color-managed (sRGB color space)

---

## 📝 Notes

- All team photos should be updated annually
- Product screenshots should reflect latest UI
- Hero images should be rotated seasonally (optional)
- Maintain brand consistency in all visual assets

---

**Last Updated**: 2025-10-19
