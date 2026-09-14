# ⚡ Performance Optimization Guide

## Current Optimizations

✅ **Already Implemented:**
- Pure HTML/CSS/JS (no heavy frameworks)
- CSS Variables for efficient theming
- Debounced scroll events
- Intersection Observer for lazy animations
- Optimized CSS selectors
- Minimal DOM manipulations
- Hardware-accelerated CSS transforms
- Efficient particle system with requestAnimationFrame

## Additional Optimizations

### 1. Image Optimization

**Convert images to WebP:**
```bash
# Using cwebp (install via package manager)
cwebp -q 80 uploads/я.png -o uploads/я.webp
cwebp -q 80 uploads/fotop.png -o uploads/fotop.webp
```

**Add responsive images:**
```html
<picture>
  <source srcset="uploads/я.webp" type="image/webp">
  <source srcset="uploads/я.png" type="image/png">
  <img src="uploads/photo.png" alt="Фото разработчика" loading="lazy">
</picture>
```

### 2. Font Optimization

**Preload critical fonts:**
```html
<link rel="preload" href="fonts/inter-var.woff2" as="font" type="font/woff2" crossorigin>
```

**Use font-display: swap:**
```css
@font-face {
  font-family: 'Inter';
  src: url('fonts/inter-var.woff2') format('woff2');
  font-display: swap;
}
```

### 3. CSS Optimization

**Minify CSS for production:**
```bash
# Using cssnano
npx cssnano styles.css styles.min.css

# Using clean-css
npx clean-css-cli -o styles.min.css styles.css
```

**Remove unused CSS:**
```bash
# Using PurgeCSS
npx purgecss --css styles.css --content index.html --output styles.purged.css
```

### 4. JavaScript Optimization

**Minify JS for production:**
```bash
# Using Terser
npx terser script.js -o script.min.js -c -m
```

**Code splitting (if needed):**
```javascript
// Load non-critical JS asynchronously
const loadScript = (src) => {
  const script = document.createElement('script');
  script.src = src;
  script.defer = true;
  document.body.appendChild(script);
};

// Load after page load
window.addEventListener('load', () => {
  loadScript('animations.js');
});
```

### 5. Caching Strategy

**Add cache headers (.htaccess for Apache):**
```apache
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType text/html "access plus 0 seconds"
</IfModule>
```

**Service Worker (for offline support):**
```javascript
// sw.js
const CACHE_NAME = 'portfolio-v1';
const urlsToCache = [
  '/',
  '/styles.css',
  '/script.js',
  '/favicon.svg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
```

### 6. Critical CSS

**Inline critical CSS:**
```html
<head>
  <style>
    /* Critical above-the-fold CSS */
    body { margin: 0; font-family: 'Inter', sans-serif; }
    .hero { min-height: 100vh; }
    /* ... */
  </style>
  <link rel="preload" href="styles.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
</head>
```

### 7. Resource Hints

**Add to HTML head:**
```html
<!-- DNS Prefetch -->
<link rel="dns-prefetch" href="//fonts.googleapis.com">
<link rel="dns-prefetch" href="//cdnjs.cloudflare.com">

<!-- Preconnect -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<!-- Prefetch (for next page resources) -->
<link rel="prefetch" href="/about.html">
```

### 8. Compression

**Enable Gzip/Brotli (.htaccess):**
```apache
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/css application/javascript
</IfModule>

<IfModule mod_brotli.c>
  AddOutputFilterByType BROTLI_COMPRESS text/html text/plain text/css application/javascript
</IfModule>
```

## Performance Testing Tools

### Google Lighthouse
```bash
# Install
npm install -g lighthouse

# Run audit
lighthouse https://yourdomain.com --view
```

### WebPageTest
- https://www.webpagetest.org
- Test from multiple locations
- Check First Contentful Paint (FCP)
- Check Largest Contentful Paint (LCP)
- Check Cumulative Layout Shift (CLS)

### PageSpeed Insights
- https://pagespeed.web.dev
- Mobile vs Desktop scores
- Core Web Vitals

## Performance Metrics Targets

| Metric | Target | Good | Needs Improvement |
|--------|--------|------|-------------------|
| FCP | < 1.8s | < 1.8s | 1.8s - 3s |
| LCP | < 2.5s | < 2.5s | 2.5s - 4s |
| CLS | < 0.1 | < 0.1 | 0.1 - 0.25 |
| TTI | < 3.8s | < 3.8s | 3.8s - 7.3s |
| TBT | < 200ms | < 200ms | 200ms - 600ms |

## Monitoring

### Google Analytics 4
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Web Vitals Library
```html
<script type="module">
  import {getCLS, getFID, getLCP} from 'https://unpkg.com/web-vitals?module';
  
  getCLS(console.log);
  getFID(console.log);
  getLCP(console.log);
</script>
```

## Checklist Before Launch

- [ ] Run Lighthouse audit (aim for 90+ on all metrics)
- [ ] Test on real mobile devices
- [ ] Check all links work
- [ ] Verify form submission
- [ ] Test in multiple browsers (Chrome, Firefox, Safari, Edge)
- [ ] Validate HTML (https://validator.w3.org)
- [ ] Validate CSS (https://jigsaw.w3.org/css-validator)
- [ ] Check accessibility (WAVE, axe)
- [ ] Set up 404 page
- [ ] Configure SSL certificate
- [ ] Set up redirects (www to non-www or vice versa)
- [ ] Test loading speed on 3G connection
- [ ] Verify OG tags with Facebook Debugger
- [ ] Test Twitter Card with Twitter Validator
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google Analytics
- [ ] Monitor Core Web Vitals

## Quick Wins

1. **Enable text compression** (Gzip/Brotli)
2. **Optimize images** (WebP, proper sizing)
3. **Minify CSS/JS**
4. **Leverage browser caching**
5. **Reduce third-party scripts**
6. **Use CDN for static assets**
7. **Implement lazy loading**
8. **Remove unused CSS/JS**
9. **Preload critical resources**
10. **Minimize render-blocking resources**

---

**Target: 95+ Lighthouse score on mobile** 🚀
