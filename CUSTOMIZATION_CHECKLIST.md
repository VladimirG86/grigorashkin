# ✅ Customization Checklist

Use this checklist to personalize your portfolio website.

## 📝 Personal Information

### Basic Info
- [ ] Replace name: "Full-stack разработчик" → Your name
- [ ] Update hero subtitle/tagline
- [ ] Update hero description
- [ ] Change years of experience (7+ → your number)
- [ ] Update number of projects (150 → your number)
- [ ] Update number of clients (50 → your number)

### Contact Information
- [ ] Email: `alex@example.com` → your email
- [ ] Telegram: `@yourusername` → your Telegram
- [ ] WhatsApp: `+79001234567` → your number
- [ ] Phone format: `+7 (900) 123-45-67`

### Social Links
- [ ] GitHub: `https://github.com/yourusername`
- [ ] LinkedIn: `https://linkedin.com/in/yourusername`
- [ ] HeadHunter: `https://hh.ru/resume/yourid`
- [ ] Freelance.ru: `https://freelance.ru/yourprofile`

## 🖼️ Images

### Photos
- [ ] Replace `uploads/я.png` with your photo (3:4 ratio recommended)
- [ ] Replace `uploads/fotop.png` with project placeholder
- [ ] Add project screenshots (16:10 ratio recommended)

### Favicon
- [ ] Update `favicon.svg` with your initials
- [ ] Or replace with custom favicon (32x32px, 16x16px)

### OG Image
- [ ] Create OG image (1200x630px)
- [ ] Update `og:image` meta tag
- [ ] Test with Facebook Debugger

## 🎨 Colors

### Primary Colors (in `styles.css`)
```css
:root {
    --accent-primary: #6366f1;      /* Change this */
    --accent-secondary: #8b5cf6;    /* Change this */
    --accent-gradient: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #06b6d4 100%);
}
```

### Popular Color Schemes
- **Purple-Blue**: `#6366f1` → `#8b5cf6` → `#06b6d4`
- **Green Neon**: `#22c55e` → `#10b981` → `#06b6d4`
- **Pink-Orange**: `#ec4899` → `#f97316` → `#eab308`
- **Blue-Cyan**: `#3b82f6` → `#06b6d4` → `#22d3ee`
- **Red-Orange**: `#ef4444` → `#f97316` → `#eab308`

## 💼 Services

### Update Service Cards
- [ ] Service 1: Разработка сайтов
- [ ] Service 2: Интеграции и автоматизация
- [ ] Service 3: Администрирование серверов
- [ ] Service 4: Настройка CRM/1С
- [ ] Service 5: IT-инфраструктура
- [ ] Service 6: Мобильная разработка

### For Each Service
- [ ] Update icon (Font Awesome)
- [ ] Update title
- [ ] Update description
- [ ] Update feature list

## 🛠️ Technology Stack

### Update Tech Icons
- [ ] JavaScript (fab fa-js-square)
- [ ] TypeScript (fas fa-code)
- [ ] React (fab fa-react)
- [ ] Node.js (fab fa-node-js)
- [ ] Python (fab fa-python)
- [ ] PostgreSQL (fas fa-database)
- [ ] Docker (fab fa-docker)
- [ ] Linux (fab fa-linux)
- [ ] 1С (fas fa-cogs)
- [ ] Git (fab fa-git-alt)

### Add/Remove Technologies
```html
<div class="tech-item" data-tooltip="Vue.js">
    <i class="fab fa-vuejs"></i>
    <span>Vue.js</span>
</div>
```

## 📁 Portfolio Projects

### Update Project Cards
- [ ] Project 1: E-commerce (TechStore)
- [ ] Project 2: Integration (ЛогистикПро)
- [ ] Project 3: SaaS (DataViz)
- [ ] Project 4: Mobile (FoodExpress)
- [ ] Project 5: EdTech (EduHub)
- [ ] Project 6: Automation (СервисМастер)

### For Each Project
- [ ] Update category (web/integration/mobile)
- [ ] Update icon
- [ ] Update title
- [ ] Update short description
- [ ] Update tech stack tags
- [ ] Update detailed description (in script.js)
- [ ] Update project details (timeline, team, etc.)
- [ ] Update results/metrics
- [ ] Add project screenshot

### Add New Project
1. Add card HTML in `index.html`
2. Add data in `projectData` object in `script.js`
3. Add filter category if needed

## ⭐ Testimonials

### Update Client Reviews
- [ ] Testimonial 1: Андрей Иванов (TechStart)
- [ ] Testimonial 2: Мария Смирнова (ЛогистикПро)
- [ ] Testimonial 3: Дмитрий Козлов (FoodExpress)
- [ ] Testimonial 4: Елена Петрова (EduHub)

### For Each Testimonial
- [ ] Update avatar initials
- [ ] Update name
- [ ] Update company/position
- [ ] Update star rating (1-5)
- [ ] Update review text

### Add New Testimonial
```html
<div class="testimonial-card">
    <div class="testimonial-header">
        <div class="testimonial-avatar">
            <div class="avatar-placeholder">ИФ</div>
        </div>
        <div class="testimonial-info">
            <h4 class="testimonial-name">Имя Фамилия</h4>
            <p class="testimonial-company">Должность, Компания</p>
        </div>
    </div>
    <div class="testimonial-stars">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star-half-alt"></i>
    </div>
    <p class="testimonial-text">«Текст отзыва...»</p>
</div>
```

## 📋 Work Process

### Update Timeline Steps
- [ ] Step 1: Заявка и бриф
- [ ] Step 2: Обсуждение
- [ ] Step 3: Оценка и сроки
- [ ] Step 4: Разработка
- [ ] Step 5: Сдача и поддержка

### Customize Steps
- [ ] Update icons
- [ ] Update titles
- [ ] Update descriptions

## 🔍 SEO

### Meta Tags
- [ ] Update title tag
- [ ] Update meta description
- [ ] Update OG title
- [ ] Update OG description
- [ ] Update OG image URL
- [ ] Update OG URL

### Content
- [ ] Add alt texts to all images
- [ ] Use proper heading hierarchy (h1 → h2 → h3)
- [ ] Add structured data (JSON-LD) if needed
- [ ] Create robots.txt
- [ ] Create sitemap.xml

## 📧 Contact Form

### Form Handling
- [ ] Choose form submission method:
  - [ ] EmailJS (no backend)
  - [ ] Formspree (simple)
  - [ ] Custom backend (Node.js/Python/PHP)
- [ ] Update form action/endpoint
- [ ] Test form submission
- [ ] Add success/error messages
- [ ] Set up email notifications

### Form Fields
- [ ] Name field
- [ ] Contact field (email/phone)
- [ ] Service selector
- [ ] Message textarea

## 🚀 Deployment

### Before Deploying
- [ ] Test on mobile devices
- [ ] Test on different browsers
- [ ] Check all links work
- [ ] Verify form submission
- [ ] Run Lighthouse audit
- [ ] Validate HTML/CSS
- [ ] Optimize images
- [ ] Minify CSS/JS (optional)

### Deployment Platform
- [ ] GitHub Pages
- [ ] Netlify
- [ ] Vercel
- [ ] Custom hosting

### Post-Deployment
- [ ] Set up SSL certificate
- [ ] Configure custom domain
- [ ] Submit sitemap to Google
- [ ] Set up Google Analytics
- [ ] Monitor Core Web Vitals
- [ ] Test loading speed

## 📱 Responsive Testing

### Test On
- [ ] iPhone (Safari)
- [ ] Android (Chrome)
- [ ] iPad (Safari)
- [ ] Desktop (Chrome, Firefox, Safari, Edge)
- [ ] Different screen sizes (320px, 375px, 414px, 768px, 1024px, 1440px)

### Check
- [ ] Navigation menu works
- [ ] Images scale properly
- [ ] Text is readable
- [ ] Buttons are tappable
- [ ] Forms are usable
- [ ] Animations perform well

## 🎭 Animations

### Customize
- [ ] Particle animation speed
- [ ] Scroll animation timing
- [ ] Hover effect intensity
- [ ] Slider auto-play speed
- [ ] Typing effect speed

### Disable for Accessibility
- [ ] Respect `prefers-reduced-motion`
- [ ] Add animation toggle (optional)

## 📊 Analytics (Optional)

### Setup
- [ ] Google Analytics 4
- [ ] Google Search Console
- [ ] Facebook Pixel (if needed)
- [ ] Yandex.Metrika (for Russian audience)

## 🔒 Security

### Form Security
- [ ] Add CSRF protection
- [ ] Validate inputs server-side
- [ ] Sanitize user input
- [ ] Rate limiting
- [ ] Honeypot field for spam

### General
- [ ] HTTPS enabled
- [ ] Content Security Policy
- [ ] X-Frame-Options
- [ ] X-Content-Type-Options

## 📝 Content Updates

### Regular Updates
- [ ] Add new projects
- [ ] Update testimonials
- [ ] Refresh technology stack
- [ ] Update statistics
- [ ] Add blog posts (optional)

### Seasonal
- [ ] Update availability status
- [ ] Add holiday notice (if applicable)
- [ ] Update pricing (if shown)

---

## 🎯 Priority Order

1. **Personal Info** - Name, contact, social links
2. **Images** - Photos, favicon, OG image
3. **Services** - What you offer
4. **Portfolio** - Your best work
5. **Testimonials** - Social proof
6. **Colors** - Match your brand
7. **SEO** - Meta tags, sitemap
8. **Form** - Contact method
9. **Deploy** - Go live!
10. **Analytics** - Track visitors

---

**Estimated Time: 2-4 hours** ⏱️

Good luck with your portfolio! 🚀
