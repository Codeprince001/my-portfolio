# SEO Pre-Launch Checklist

Complete this checklist before deploying your portfolio to production.

## 🔧 Configuration (DO THIS FIRST)

### Domain & URLs
- [ ] Replace `yourportfoliosite.com` with your actual domain in:
  - [ ] `index.html` (appears ~5 times)
  - [ ] `src/utils/seo.ts`
  - [ ] `src/pages/Project.tsx`
  - [ ] `public/robots.txt`
  - [ ] `public/sitemap.xml`

**Quick check:** Run this and fix all results:
```bash
grep -r "yourportfoliosite" .
```

### Personal Information

#### A. Update `src/utils/seo.ts` - getPersonSchema()
- [ ] Email address (your professional email)
- [ ] Image URL (link to your professional photo - 200x200px min)
- [ ] LinkedIn URL (your LinkedIn profile)
- [ ] GitHub URL (your GitHub profile)
- [ ] Twitter URL (optional, only if you have an account)

#### B. Update `index.html`
- [ ] Check og:image meta tag points to a real image
  - [ ] Create/upload 1200x630px social preview image
  - [ ] Set correct path in og:image tags
- [ ] Verify canonical URL is correct

#### C. Consider Adding
- [ ] Create a professional profile photo upload to your site
- [ ] Create an Open Graph preview image for social sharing
  - [ ] Use Figma, Canva, or generative tools
  - [ ] Save as `/public/og-image.png`

---

## 📝 Content & Heading Hierarchy

### Home Page (/)
- [ ] H1: "FULLSTACK SOFTWARE & DEVOPS ENGINEER" (or similar)
  - [ ] Only ONE H1 per page
  - [ ] Clear, descriptive, keyword-rich
- [ ] H2: "About" section
- [ ] H2: "Services" section
- [ ] H2: "Skills" section
- [ ] H2: "Projects" section
- [ ] H2: "Contact" section

### Projects Page (/projects)
- [ ] H1: "My Projects"
  - [ ] Ensure it's H1, not H2
- [ ] H2: Each project category (Web Development, Mobile Development)

### Image Alt Text
For every image, verify:
- [ ] All images have `alt=""` attributes
- [ ] Alt text is descriptive (not just "image" or "photo")
- [ ] Alt text includes relevant keywords when appropriate

**Examples:**
- ✅ Good: `alt="TekMedoc telemedicine platform dashboard"`
- ❌ Bad: `alt="screenshot"`

### Text Quality
- [ ] All sections have clear, readable descriptions
- [ ] Links have descriptive anchor text
  - [ ] ❌ Avoid: "click here"
  - [ ] ✅ Use: "View project demo" or "GitHub repository"

---

## 🔍 Technical Verification

### Meta Tags (in index.html)
- [ ] Title tag is 50-60 characters (check browser tab)
- [ ] Meta description is 150-160 characters
- [ ] Keywords are relevant (separate by comma)
- [ ] og:title and og:description are set
- [ ] og:image points to valid image URL
- [ ] Canonical URL is correct

### Schema Markup
- [ ] Validate at https://validator.schema.org/
  - [ ] Copy-paste your page's HTML
  - [ ] Should show "no errors"
  - [ ] Check for warnings
- [ ] Person schema has required fields
- [ ] Organization schema is complete

### Search Engine Files
- [ ] `public/robots.txt` is accessible
  - [ ] Visit: `yoursite.com/robots.txt`
  - [ ] Should display text content
- [ ] `public/sitemap.xml` is accessible
  - [ ] Visit: `yoursite.com/sitemap.xml`
  - [ ] Should display XML content
- [ ] Both files are updated with correct domain

### Mobile Responsiveness
- [ ] Test on phone/tablet
- [ ] All content is readable
- [ ] Links/buttons are touch-friendly (min 48px)
- [ ] Images don't overflow
- [ ] Navigation works on mobile

Test at: https://search.google.com/test/mobile-friendly

---

## ⚡ Performance (SEO-Critical)

### Page Speed
Target: 90+ on Google Lighthouse

```bash
npm run build  # Create optimized build
npm run preview  # Test production build
```

Then test at: https://pagespeed.web.dev/

Performance checklist:
- [ ] Largest Contentful Paint < 2.5s
- [ ] First Input Delay < 100ms
- [ ] Cumulative Layout Shift < 0.1
- [ ] Lighthouse Score > 90 (all categories)

### Images
- [ ] All images are optimized (compress if > 200KB)
- [ ] Use WebP format where possible
- [ ] Images have width/height attributes
- [ ] Lazy loading enabled: `loading="lazy"`
- [ ] Use responsive images (srcset)

### Code Quality
- [ ] Run linter: `npm run lint`
- [ ] No console errors/warnings
- [ ] No broken links
- [ ] All buttons/links are functional

---

## 📱 Social Media Preview

Test on each platform using their official tools:

### Twitter/X
1. Go to: https://cards-dev.twitter.com/validator
2. Enter your domain
3. ✅ Should show:
   - Correct title
   - Description
   - Image preview

- [ ] Twitter preview looks good
- [ ] No errors in validator

### Facebook / Instagram / LinkedIn
1. Go to: https://developers.facebook.com/tools/debug/ (Facebook)
2. Or: https://www.linkedin.com/post-inspector/ (LinkedIn)
3. Enter your domain
4. ✅ Should show:
   - Correct og:title
   - Correct og:description
   - og:image is visible

- [ ] Facebook preview looks good
- [ ] LinkedIn preview looks good
- [ ] Image displays in all previews

### General Social Testing
- [ ] Copy a project link and share on LinkedIn
- [ ] Check how it appears
- [ ] Verify image shows correctly
- [ ] Verify title and description are correct

**Need to refresh preview cache?**
- Twitter: Click "Request Update" in validator
- Facebook: Resubmit in debug tool
- LinkedIn: Use post inspector refresh

---

## 🚀 Deployment Preparation

### Before Deploying
- [ ] All configuration complete (domain, personal info)
- [ ] Build succeeds: `npm run build`
- [ ] No errors in console
- [ ] Preview looks good: `npm run preview`
- [ ] All checks below pass

### Deployment Platform Setup
Choose one:
- [ ] **Vercel** (recommended for React)
  - [ ] Connect GitHub repo
  - [ ] Auto-deploys on push
  - [ ] HTTPS enabled automatically
  
- [ ] **Netlify**
  - [ ] Connect GitHub repo
  - [ ] Set build command: `npm run build`
  - [ ] Set publish directory: `dist`
  
- [ ] **GitHub Pages**
  - [ ] Enable Pages in settings
  - [ ] Set source to `main` branch
  - [ ] Ensure build workflow is set up
  
- [ ] **Self-hosted**
  - [ ] HTTPS is enabled
  - [ ] Gzip compression enabled
  - [ ] Cache headers configured (1 year for /assets/*)

### Post-Deployment (First 24 hours)
- [ ] Visit your live site
- [ ] Check all pages load correctly
- [ ] Verify meta tags in page source: `Ctrl+U` or Right-click → View Page Source
- [ ] Test on mobile
- [ ] Test social sharing (copy a project link)
- [ ] Monitor for console errors

---

## 🔐 Security & SEO Best Practices

### HTTPS
- [ ] Green lock icon 🔒 appears in browser
- [ ] All content loads over HTTPS
- [ ] No mixed content warnings

### robots.txt
- [ ] Doesn't block important pages
- [ ] Allows Google, Bing, other major crawlers
- [ ] Lists sitemap location

### Sitemap
- [ ] All important pages are included
- [ ] URLs are correct and accessible
- [ ] No broken links in sitemap

---

## 📊 Search Engine Registration (Day 1-2)

### Google Search Console
1. Go to: https://search.google.com/search-console
2. Create/sign in with Google account
3. Add property:
   - [ ] Choose "Domain" property type
   - [ ] Verify ownership (via DNS, HTML file, or Google Analytics)
4. Submit sitemap:
   - [ ] Go to "Sitemaps" section
   - [ ] Paste: `yoursite.com/sitemap.xml`
5. Monitor:
   - [ ] Indexing status (check after 24-48 hours)
   - [ ] Coverage (errors, warnings)
   - [ ] Performance metrics

### Bing Webmaster Tools
1. Go to: https://www.bing.com/webmasters
2. Add site
3. Verify ownership
4. Submit sitemap: `yoursite.com/sitemap.xml`

### Optional: Google Analytics 4
1. Create account at: https://analytics.google.com/
2. Add property for your domain
3. Copy tracking code
4. Add to `index.html` in `<head>`
5. Verify is working in Analytics

---

## 📈 Ongoing SEO Tasks (Monthly)

- [ ] Check Google Search Console for errors
- [ ] Monitor Core Web Vitals
- [ ] Update sitemap if adding new pages
- [ ] Update `lastmod` date in sitemap
- [ ] Monitor search traffic
- [ ] Check Lighthouse score monthly
- [ ] Update content if needed

---

## ❓ Common Issues & Solutions

### Pages Not Indexing
**Problem:** Pages not showing in Google search results after 1 week
**Solution:**
1. Check robots.txt isn't blocking the page
2. Verify page has H1 tag
3. Check for noindex meta tag
4. Manually request indexing in GSC

### Poor Search Rankings
**Problem:** Ranking on page 2-3 but want page 1
**Solution:**
1. Improve page speed (Lighthouse > 90)
2. Improve content quality (add more keywords naturally)
3. Get backlinks from other sites
4. Create more content (blog posts)
5. Wait (indexing takes time)

### Social Preview Not Working
**Problem:** Old preview appears after updates
**Solution:**
1. Use platform's cache refresh tool
2. Wait 24-48 hours for cache to expire
3. Update og:image with new URL (forces refresh)

### Schema Validation Errors
**Problem:** Validator shows errors
**Solution:**
1. Check JSON is properly formatted
2. Verify all required properties are present
3. Remove any trailing commas
4. Use online formatter to validate JSON

---

## ✅ Final Sign-Off

Before declaring "launch complete":

- [ ] All configuration done
- [ ] All checks passed
- [ ] Site deployed live
- [ ] Sitemap submitted to GSC
- [ ] Sitemap submitted to Bing
- [ ] No console errors
- [ ] Mobile responsive
- [ ] Page speed 90+ Lighthouse
- [ ] Social previews working
- [ ] Monitoring set up

**Congratulations! Your portfolio is SEO-optimized and live! 🎉**

Monitor Google Search Console regularly for the best results.
