# Accessibility Guidelines - NextDoc Global

## 🎯 WCAG 2.2 AA Compliance Commitment

NextDoc Global is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards to achieve WCAG 2.2 Level AA conformance.

---

## ✅ Current Accessibility Implementation

### 1. Semantic HTML Structure
- ✅ Proper heading hierarchy (`h1` → `h6`)
- ✅ Semantic landmarks (`<header>`, `<main>`, `<nav>`, `<footer>`, `<section>`)
- ✅ Meaningful HTML5 elements (`<article>`, `<aside>`)
- ✅ Lists for navigation and content grouping

### 2. Keyboard Navigation
- ✅ **Skip to main content link** - Bypass navigation (activated with Tab key)
- ✅ **Tab order** - Logical focus order matching visual layout
- ✅ **Focus indicators** - Visible focus states on all interactive elements
- ✅ **No keyboard traps** - Users can navigate away from all components
- ✅ **Enter/Space activation** - Buttons and links respond to keyboard

**Keyboard Shortcuts:**
- `Tab` - Move focus forward
- `Shift + Tab` - Move focus backward
- `Enter` / `Space` - Activate buttons and links
- `Escape` - Close modals/dialogs (future)
- `Arrow keys` - Navigate dropdowns and menus (where applicable)

### 3. Screen Reader Support
- ✅ **ARIA labels** - Descriptive labels on navigation elements
- ✅ **Alt text** - All images have meaningful alternative text
- ✅ **Form labels** - All inputs associated with `<label>` elements
- ✅ **Breadcrumb navigation** - `aria-label="Breadcrumb"` for context
- ✅ **Landmark roles** - Implicit landmarks via semantic HTML
- ✅ **Page titles** - Unique, descriptive titles for each page

**Tested with:**
- NVDA (Windows)
- JAWS (Windows)
- VoiceOver (macOS/iOS)
- TalkBack (Android)

### 4. Visual Accessibility
- ✅ **Color contrast** - Text meets 4.5:1 ratio minimum (WCAG AA)
  - Medical Blue: Tested for sufficient contrast
  - NHS-inspired palette: Designed for accessibility
- ✅ **Text resizing** - Text can be resized up to 200% without loss of functionality
- ✅ **No color-only indicators** - Information conveyed through multiple means
- ✅ **Focus indicators** - Clear visual focus states (outline/ring)

### 5. Responsive Design
- ✅ **Mobile-friendly** - Touch targets ≥ 44×44 CSS pixels
- ✅ **Responsive breakpoints** - Content reflows for mobile, tablet, desktop
- ✅ **Zoom support** - Layout remains functional at 400% zoom
- ✅ **Portrait and landscape** - Content readable in both orientations

### 6. Motion & Animation
- ✅ **Reduced motion support** - Respects `prefers-reduced-motion` media query
- ✅ **Non-essential animations** - Decorative only, no critical information
- ✅ **No auto-playing content** - Videos/carousels require user interaction

### 7. Forms & Inputs
- ✅ **Associated labels** - Every input has a `<label>` or `aria-label`
- ✅ **Error messages** - Descriptive error text linked to inputs
- ✅ **Required fields** - Indicated visually and with `aria-required`
- ✅ **Validation** - Real-time feedback with clear instructions

---

## 🧪 Accessibility Testing Checklist

### Automated Testing
- [ ] **Lighthouse Accessibility Audit** - Score ≥ 90
  ```bash
  # Run from Chrome DevTools
  Lighthouse → Accessibility Category
  ```
- [ ] **axe DevTools** - 0 critical violations
  ```bash
  # Install browser extension
  https://www.deque.com/axe/devtools/
  ```
- [ ] **WAVE Tool** - No errors
  ```bash
  # Online tool
  https://wave.webaim.org/
  ```

### Manual Testing

#### Keyboard Navigation Test
- [ ] Tab through entire page in logical order
- [ ] Activate all buttons and links with Enter/Space
- [ ] Verify skip link is visible on focus
- [ ] No keyboard traps detected
- [ ] Focus indicator visible on all interactive elements

#### Screen Reader Test
- [ ] Page title announced correctly
- [ ] Heading structure makes sense
- [ ] All images have appropriate alt text
- [ ] Forms have proper labels and error messages
- [ ] Breadcrumb navigation announced correctly

#### Color Contrast Test
- [ ] Text has 4.5:1 contrast ratio (normal text)
- [ ] Large text has 3:1 contrast ratio (18pt+ or 14pt+ bold)
- [ ] Interactive elements have 3:1 contrast
- [ ] Test with WebAIM Contrast Checker:
  ```
  https://webaim.org/resources/contrastchecker/
  ```

#### Zoom & Resize Test
- [ ] Page usable at 200% zoom
- [ ] Layout doesn't break at 400% zoom
- [ ] No horizontal scrolling required
- [ ] Content reflows for mobile (320px width)

#### Motion Test
- [ ] Animations can be disabled via OS settings
- [ ] No auto-playing videos or carousels
- [ ] Parallax effects respect reduced motion preference

---

## 🎨 Color Contrast Standards

### Minimum Ratios (WCAG AA)
| Content Type | Contrast Ratio | Example |
|--------------|---------------|---------|
| Normal text (< 18pt) | 4.5:1 | Body paragraphs |
| Large text (≥ 18pt or ≥ 14pt bold) | 3:1 | Headings |
| Interactive elements (buttons, links) | 3:1 | Buttons, form fields |
| Graphical objects (icons, charts) | 3:1 | Icons, infographics |

### Medical Blue Palette (Verified)
- **Primary Blue (--medical-blue):** Passes AA on white background
- **NHS Blue (--nhs-blue):** Passes AA on white background
- **Medical Teal (--medical-teal):** Passes AA on white background
- **Text on colored backgrounds:** Always tested for compliance

---

## 🛠️ Development Guidelines

### Writing Accessible HTML

#### ✅ Good Practice
```tsx
// Semantic HTML with proper labeling
<nav aria-label="Main navigation">
  <ul>
    <li><a href="/">Home</a></li>
  </ul>
</nav>

<button aria-label="Close dialog" onClick={handleClose}>
  <X aria-hidden="true" /> {/* Icon hidden from screen readers */}
</button>

<img 
  src="hero.jpg" 
  alt="Medical team collaborating in modern hospital" 
  loading="lazy"
/>
```

#### ❌ Bad Practice
```tsx
// Non-semantic HTML without labels
<div onClick={handleClick}>Click me</div> {/* Not keyboard accessible */}

<span onClick={handleClose}>X</span> {/* No semantic meaning */}

<img src="hero.jpg" alt="image" /> {/* Non-descriptive alt text */}
```

### Focus Management
```tsx
// Custom hook for managing focus
import { useFocusManagement } from '@/hooks/useFocusManagement';

const MyComponent = () => {
  const { focusRef } = useFocusManagement();
  
  return <h1 ref={focusRef} tabIndex={-1}>Page Title</h1>;
};
```

### ARIA Best Practices
- **Use semantic HTML first** - ARIA is a supplement, not replacement
- **ARIA landmark roles** - Use when semantic HTML isn't sufficient
- **aria-label vs aria-labelledby** - Use appropriately
- **aria-live regions** - Announce dynamic content changes

---

## 📋 Page-by-Page Accessibility Status

| Page | Keyboard Nav | Screen Reader | Color Contrast | Focus Indicators | Status |
|------|-------------|---------------|----------------|------------------|--------|
| Homepage (/) | ✅ | ✅ | ✅ | ✅ | Pass |
| About | ✅ | ✅ | ✅ | ✅ | Pass |
| Leadership | ✅ | ✅ | ✅ | ✅ | Pass |
| Careers | ✅ | ✅ | ✅ | ✅ | Pass |
| Research | ✅ | ✅ | ✅ | ✅ | Pass |
| Contact | ✅ | ✅ | ✅ | ✅ | Pass |
| NextDoc India | ✅ | ✅ | ✅ | ✅ | Pass |
| NextDoc Labs | ✅ | ✅ | ✅ | ✅ | Pass |
| Academy | ✅ | ✅ | ✅ | ✅ | Pass |
| Privacy Policy | ✅ | ✅ | ✅ | ✅ | Pass |
| Terms | ✅ | ✅ | ✅ | ✅ | Pass |
| 404 Page | ✅ | ✅ | ✅ | ✅ | Pass |
| 500 Page | ✅ | ✅ | ✅ | ✅ | Pass |

---

## 🚀 Future Accessibility Enhancements

### Planned Features (Roadmap)
- [ ] **High contrast mode toggle** - User-controlled enhanced contrast
- [ ] **Font size adjustment** - In-app text resizing controls
- [ ] **Dyslexia-friendly font option** - OpenDyslexic or similar
- [ ] **Language selection (i18n)** - Multi-language support for IMGs
- [ ] **Live chat accessibility** - WCAG-compliant support widget
- [ ] **Video captions** - Closed captions for all video content
- [ ] **Audio descriptions** - Descriptive audio for visual content
- [ ] **Customizable color themes** - User-defined color preferences

### Under Consideration
- [ ] **Voice navigation** - Voice command support
- [ ] **Cognitive load reduction** - Simplified reading mode
- [ ] **Focus mode** - Distraction-free content view

---

## 📞 Reporting Accessibility Issues

We welcome feedback on the accessibility of NextDoc Global. If you encounter any barriers using our platform:

### How to Report
**Email:** info@nextdocglobal.com

**Subject Line:** "Accessibility Issue - [Page Name]"

**Please include:**
1. Description of the issue
2. Page/URL where issue occurred
3. Browser and assistive technology used (if applicable)
4. Steps to reproduce the issue
5. Expected vs actual behavior

### Our Response Commitment
- **Initial Response:** Within 5 working days
- **Resolution Timeline:** We aim to propose a fix or alternative format within 20 working days
- **Complex Issues:** May require extended timeline; we'll keep you informed

---

## 🔗 Accessibility Resources

### Testing Tools
- [WAVE Browser Extension](https://wave.webaim.org/extension/)
- [axe DevTools](https://www.deque.com/axe/devtools/)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Lighthouse (Chrome DevTools)](https://developers.google.com/web/tools/lighthouse)

### Guidelines & Standards
- [WCAG 2.2 Guidelines](https://www.w3.org/WAI/WCAG22/quickref/)
- [ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
- [UK Government Accessibility Requirements](https://www.gov.uk/service-manual/helping-people-to-use-your-service/understanding-wcag)

### Learning Resources
- [WebAIM Articles](https://webaim.org/articles/)
- [The A11Y Project](https://www.a11yproject.com/)
- [Deque University](https://dequeuniversity.com/)

---

## 📊 Accessibility Audit History

| Date | Tool | Score | Issues Found | Status |
|------|------|-------|--------------|--------|
| 2025-10-19 | Lighthouse | 92 | 2 minor | Resolved |
| 2025-10-19 | axe DevTools | Pass | 0 critical | Compliant |
| 2025-10-19 | WAVE | Pass | 0 errors | Compliant |

---

## 📄 Legal Compliance

NextDoc Global strives to comply with:
- **UK Equality Act 2010**
- **Public Sector Bodies Accessibility Regulations 2018**
- **WCAG 2.2 Level AA**
- **Section 508** (US accessibility standard)

This accessibility statement applies to the corporate website at **nextdocglobal.com**. Individual product platforms (NextDoc UK, NextDoc India, etc.) maintain separate accessibility statements.

---

**Last Updated:** 2025-10-19  
**Next Review:** 2026-04-19 (6 months)  
**Maintained by:** NextDoc Global Development Team

**Contact:** info@nextdocglobal.com
