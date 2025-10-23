# Deployment Guide - NextDoc Global

## 🚀 Quick Deploy

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Preview build locally
npm run preview
```

The production-ready build will be in the `dist/` directory.

---

## 📋 Prerequisites

### Required Software
- **Node.js** - Version 18.x or higher
- **Package Manager** - npm (v9+) or bun (v1+)
- **Git** - For version control
- **Terminal** - Command line access

### Development Setup
```bash
# Verify Node.js version
node --version  # Should be 18.x or higher

# Verify npm version
npm --version   # Should be 9.x or higher

# Clone repository (if not already)
git clone <repository-url>
cd nextdoc-global

# Install dependencies
npm install

# Start development server
npm run dev
```

---

## 🔐 Environment Variables

### Configuration File: `.env`

Create a `.env` file in the project root (see `.env.example` for template):

```env
# ============================================
# NextDoc Global - Environment Configuration
# ============================================

# Site Configuration
VITE_SITE_URL=https://nextdocglobal.com
VITE_CONTACT_EMAIL=info@nextdocglobal.com

# Future: Analytics
# VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
# VITE_GTM_ID=GTM-XXXXXXX

# Future: Authentication (Supabase)
# VITE_SUPABASE_URL=https://your-project.supabase.co
# VITE_SUPABASE_ANON_KEY=your-anon-key

# Future: API Integration
# VITE_API_BASE_URL=https://api.nextdocglobal.com
```

**Important:**
- ✅ Variables prefixed with `VITE_` are exposed to the client
- ❌ Never commit `.env` files with secrets to Git
- ✅ Use `.env.example` as a template for team members
- ✅ Set environment variables in hosting platform (Vercel/Netlify)

---

## 🛠️ Build Process

### Development Mode
```bash
npm run dev

# Output:
# VITE v5.x.x ready in XXX ms
# ➜ Local: http://localhost:8080/
# ➜ Network: use --host to expose
```

**Features:**
- Hot Module Replacement (HMR)
- Fast refresh for React components
- Source maps for debugging
- TypeScript type checking

### Production Build
```bash
npm run build

# Process:
# 1. TypeScript compilation (tsc)
# 2. Vite bundling and minification
# 3. Asset optimization
# 4. Output to dist/ directory

# Output:
# dist/
# ├── index.html
# ├── assets/
# │   ├── index-[hash].js
# │   ├── index-[hash].css
# │   └── [image-hash].webp
# ├── sitemap.xml
# └── robots.txt
```

**Build Optimizations:**
- ✅ Code minification
- ✅ Tree shaking (remove unused code)
- ✅ Asset compression
- ✅ Chunk splitting (vendor vs app code)
- ✅ CSS purging (unused styles removed)
- ✅ Image optimization

### Preview Production Build
```bash
npm run preview

# Starts local server with production build
# ➜ Local: http://localhost:4173/
```

### Type Checking (Without Building)
```bash
npm run type-check

# Validates TypeScript without compilation
# Useful for CI/CD pipelines
```

---

## ☁️ Deployment Platforms

### Option 1: Vercel (Recommended ⭐)

**Why Vercel?**
- Zero-configuration deployment
- Automatic HTTPS and CDN
- Preview deployments for PRs
- Excellent React/Vite support
- Free tier generous for most projects

#### Step-by-Step Deployment

1. **Connect Repository**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import Git repository (GitHub/GitLab/Bitbucket)

2. **Configure Build Settings**
   ```
   Framework Preset: Vite
   Build Command: npm run build
   Output Directory: dist
   Install Command: npm install
   ```

3. **Add Environment Variables**
   - Go to Project Settings → Environment Variables
   - Add each variable from `.env.example`
   - Set environment: Production / Preview / Development

4. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes for build
   - Your site is live! 🎉

#### Custom Domain Setup
1. Go to Project Settings → Domains
2. Add your domain (e.g., `nextdocglobal.com`)
3. Configure DNS records (Vercel provides instructions)
4. Wait for SSL certificate (automatic)

#### Continuous Deployment
- **main branch** → Production deployment (auto)
- **develop branch** → Preview deployment (auto)
- **Pull requests** → PR preview deployments (auto)

---

### Option 2: Netlify

**Why Netlify?**
- Similar to Vercel (zero-config)
- Excellent for static sites
- Built-in form handling
- Serverless functions support

#### Deployment Steps

1. **Connect Repository**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect Git repository

2. **Configure Build Settings**
   ```
   Build command: npm run build
   Publish directory: dist
   ```

3. **Add netlify.toml Configuration**
   Create `netlify.toml` in project root:
   ```toml
   [build]
     command = "npm run build"
     publish = "dist"

   # Redirect all routes to index.html (SPA support)
   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200

   # Custom headers
   [[headers]]
     for = "/*"
     [headers.values]
       X-Frame-Options = "DENY"
       X-Content-Type-Options = "nosniff"
       Referrer-Policy = "strict-origin-when-cross-origin"
   ```

4. **Add Environment Variables**
   - Site Settings → Environment Variables
   - Add variables from `.env.example`

5. **Deploy**
   - Click "Deploy site"
   - Your site is live! 🎉

---

### Option 3: AWS Amplify

**Why AWS Amplify?**
- AWS ecosystem integration
- Global CDN (CloudFront)
- Custom caching rules
- Enterprise-grade infrastructure

#### Deployment Steps

1. **Connect Repository**
   - Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
   - Click "New app" → "Host web app"
   - Connect GitHub/GitLab/Bitbucket

2. **Configure Build Settings**
   Create `amplify.yml` in project root:
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm install
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: dist
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```

3. **Add Environment Variables**
   - App Settings → Environment Variables
   - Add variables from `.env.example`

4. **Deploy**
   - Click "Save and deploy"
   - Wait for build (~5 minutes)
   - Your site is live! 🎉

---

### Option 4: Custom Server (nginx)

**For self-hosted deployments:**

#### 1. Build Locally
```bash
npm run build
# Outputs to dist/
```

#### 2. Upload to Server
```bash
# Using SCP
scp -r dist/* user@server:/var/www/nextdocglobal.com/

# Or using rsync
rsync -avz dist/ user@server:/var/www/nextdocglobal.com/
```

#### 3. Configure nginx
```nginx
server {
    listen 80;
    server_name nextdocglobal.com www.nextdocglobal.com;
    
    # Redirect HTTP to HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name nextdocglobal.com www.nextdocglobal.com;
    
    # SSL Certificate
    ssl_certificate /etc/letsencrypt/live/nextdocglobal.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/nextdocglobal.com/privkey.pem;
    
    # Root directory
    root /var/www/nextdocglobal.com;
    index index.html;
    
    # SPA routing (redirect all routes to index.html)
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|webp|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    # Security headers
    add_header X-Frame-Options "DENY" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;
    
    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
}
```

#### 4. SSL Certificate (Let's Encrypt)
```bash
# Install Certbot
sudo apt-get install certbot python3-certbot-nginx

# Generate certificate
sudo certbot --nginx -d nextdocglobal.com -d www.nextdocglobal.com

# Auto-renewal
sudo certbot renew --dry-run
```

---

## ✅ Post-Deployment Checklist

### Functional Testing
- [ ] All routes load correctly (test 5-10 key pages)
- [ ] 404 page displays for invalid routes
- [ ] Images load properly (check WebP format support)
- [ ] Navigation works (header, footer, breadcrumbs)
- [ ] External links open in new tabs
- [ ] Contact email links work (`mailto:`)
- [ ] Skip link functional (press Tab on homepage)

### SEO Verification
- [ ] Meta tags present on all pages (View Page Source)
- [ ] Open Graph preview works (test on LinkedIn/Twitter)
- [ ] `sitemap.xml` accessible at `/sitemap.xml`
- [ ] `robots.txt` accessible at `/robots.txt`
- [ ] Canonical URLs set correctly
- [ ] Structured data validated (Google Rich Results Test)

### Performance Testing
- [ ] Run Lighthouse audit (target 90+ all categories)
  ```bash
  # Chrome DevTools → Lighthouse
  - Performance: 90+
  - Accessibility: 95+
  - Best Practices: 95+
  - SEO: 100
  ```
- [ ] Test page load speed (< 3 seconds on 3G)
- [ ] Check Core Web Vitals
  - LCP (Largest Contentful Paint): < 2.5s
  - FID (First Input Delay): < 100ms
  - CLS (Cumulative Layout Shift): < 0.1

### Mobile Testing
- [ ] Test on mobile device (iOS Safari, Android Chrome)
- [ ] Responsive breakpoints work (320px, 768px, 1024px, 1440px)
- [ ] Touch targets ≥ 44×44px
- [ ] No horizontal scrolling

### Accessibility Testing
- [ ] Keyboard navigation works (Tab through entire site)
- [ ] Skip link visible on focus
- [ ] Focus indicators visible
- [ ] Color contrast passes (WebAIM Contrast Checker)
- [ ] Screen reader test (VoiceOver/NVDA)

### Security Testing
- [ ] HTTPS enabled (SSL certificate valid)
- [ ] Security headers present (X-Frame-Options, etc.)
- [ ] No console errors in production
- [ ] Environment variables not exposed in client code

### Analytics Setup (Future)
- [ ] Google Analytics tracking code installed
- [ ] Conversion goals configured
- [ ] Real User Monitoring (RUM) active

---

## 🔄 Continuous Deployment (CI/CD)

### GitHub Actions Example

Create `.github/workflows/ci.yml`:

```yaml
name: CI/CD Pipeline

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main, develop]

jobs:
  test:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Type check
        run: npm run type-check
      
      - name: Lint
        run: npm run lint
      
      - name: Run tests
        run: npm run test
      
      - name: Build
        run: npm run build
      
      - name: Upload build artifacts
        uses: actions/upload-artifact@v3
        with:
          name: dist
          path: dist/

  deploy:
    needs: test
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
          vercel-args: '--prod'
```

---

## 🐛 Troubleshooting

### Build Fails with TypeScript Errors
```bash
# Run type check to see errors
npm run type-check

# Common fix: Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Images Not Loading After Deployment
- Check if images are in `src/assets/` (correct) not `public/assets/` (wrong for imports)
- Verify image imports use `@/assets/` alias
- Ensure image files committed to Git

### 404 on Page Refresh (SPA Routing Issue)
- Add redirect rule to hosting platform (see Netlify/Vercel examples above)
- For nginx, ensure `try_files $uri /index.html` is set

### Environment Variables Not Working
- Prefix with `VITE_` for client-side access
- Restart dev server after changing `.env`
- Verify variables set in hosting platform dashboard

### Slow Build Times
```bash
# Analyze bundle size
npm run analyze

# Clear build cache
rm -rf dist/ node_modules/.vite/
npm run build
```

---

## 📊 Performance Monitoring

### Tools
- **Google PageSpeed Insights** - https://pagespeed.web.dev/
- **GTmetrix** - https://gtmetrix.com/
- **WebPageTest** - https://www.webpagetest.org/

### Metrics to Track
- **Time to First Byte (TTFB)** - < 600ms
- **First Contentful Paint (FCP)** - < 1.8s
- **Largest Contentful Paint (LCP)** - < 2.5s
- **Total Blocking Time (TBT)** - < 200ms
- **Cumulative Layout Shift (CLS)** - < 0.1

---

## 🔄 Rollback Strategy

### Vercel/Netlify
1. Go to Deployments dashboard
2. Find previous working deployment
3. Click "Promote to Production" or "Publish Deploy"

### Manual Deployment
1. Keep backup of previous `dist/` directory
2. Deploy backup if issues arise
3. Investigate and fix issue locally
4. Redeploy fixed version

---

## 📞 Support

For deployment assistance:
- **Email:** info@nextdocglobal.com
- **Documentation:** See `README.md`, `CONTRIBUTING.md`
- **Deployment Issues:** Create GitHub issue

---

**Last Updated:** 2025-10-19  
**Maintained by:** NextDoc Global Development Team
