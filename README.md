# 🚀 Портфолио-сайт для веб-разработчика

Современный, минималистичный портфолио-сайт с тёмной темой и неоновыми акцентами.

## ✨ Особенности

- 🎨 **Тёмная тема** с градиентными акцентами (электрик-синий/фиолетовый)
- 📱 **Полностью адаптивный** дизайн (мобильная версия в приоритете)
- ⚡ **Быстрая загрузка** — чистый HTML/CSS/JS без тяжёлых фреймворков
- 🎭 **Анимации** — fade-in при скролле, hover-эффекты, частицы на фоне
- 🔍 **SEO-оптимизирован** — meta-теги, OG-разметка, семантическая вёрстка
- 📝 **Форма обратной связи** с валидацией
- 🎠 **Слайдер отзывов** с автопрокруткой
- 🖼️ **Модальные окна** для подробного описания проектов

## 📁 Структура файлов

```
portfolio/
├── index.html          # Основная HTML-разметка
├── styles.css          # Стили (CSS Variables, Grid, Flexbox)
├── script.js           # JavaScript (анимации, интерактивность)
├── README.md           # Документация
└── uploads/
    ├── fotop.png       # Фото для проектов (placeholder)
    └── я.png           # Личное фото
```

## 🚀 Быстрый старт

1. **Клонируйте или скачайте** файлы проекта
2. **Откройте** `index.html` в браузере
3. **Начните кастомизацию** под свои данные

Для локального сервера (рекомендуется):
```bash
# Python
python -m http.server 8000

# Node.js
npx serve

# PHP
php -S localhost:8000
```

## ✏️ Кастомизация

### 1. Личная информация

В `index.html` найдите и замените:

**Имя и слоган:**
```html
<span class="hero-name">Full-stack разработчик</span>
<p class="hero-subtitle">Full-stack разработка и IT-решения под ключ</p>
```

**Контактные данные:**
```html
<a href="mailto:alex@example.com">alex@example.com</a>
<a href="https://t.me/yourusername">@yourusername</a>
<a href="https://wa.me/79001234567">+7 (900) 123-45-67</a>
```

**Социальные сети:**
```html
<a href="https://github.com/yourusername">GitHub</a>
<a href="https://linkedin.com/in/yourusername">LinkedIn</a>
```

### 2. Фотографии

Замените изображения в папке `uploads/`:
- `я.png` — ваше профессиональное фото (рекомендуется 3:4)
- `fotop.png` — фото для проектов (16:10)

### 3. Технологический стек

В секции "Обо мне" добавьте/удалите технологии:

```html
<div class="tech-item" data-tooltip="React">
    <i class="fab fa-react"></i>
    <span>React</span>
</div>
```

Иконки Font Awesome: https://fontawesome.com/icons

### 4. Услуги

Добавьте или измените карточки услуг в секции `#services`:

```html
<div class="service-card">
    <div class="service-icon">
        <i class="fas fa-icon-name"></i>
    </div>
    <h3 class="service-title">Название услуги</h3>
    <p class="service-desc">Описание...</p>
    <ul class="service-features">
        <li><i class="fas fa-check"></i> Преимущество 1</li>
    </ul>
</div>
```

### 5. Портфолио

**Добавление нового проекта:**

1. Добавьте карточку в HTML:
```html
<div class="portfolio-card" data-category="web" data-modal="project7">
    <!-- ... -->
</div>
```

2. Добавьте данные в `script.js` в объект `projectData`:
```javascript
project7: {
    tag: 'Категория',
    title: 'Название проекта',
    subtitle: 'Краткое описание',
    icon: 'fas fa-icon',
    description: 'Подробное описание...',
    details: [...],
    stack: ['Tech1', 'Tech2'],
    results: 'Результаты проекта...'
}
```

**Категории фильтрации:**
- `all` — все проекты
- `web` — веб-разработка
- `integration` — интеграции
- `mobile` — мобильные приложения

Добавьте новую категорию:
```html
<button class="filter-btn" data-filter="newcategory">Новая категория</button>
```

### 6. Отзывы

Замените placeholder-данные в секции `#testimonials`:

```html
<div class="testimonial-card">
    <div class="testimonial-header">
        <div class="testimonial-avatar">
            <div class="avatar-placeholder">ИО</div> <!-- Инициалы -->
        </div>
        <div class="testimonial-info">
            <h4 class="testimonial-name">Имя Фамилия</h4>
            <p class="testimonial-company">Должность, Компания</p>
        </div>
    </div>
    <div class="testimonial-stars">
        <i class="fas fa-star"></i> <!-- 1-5 звёзд -->
    </div>
    <p class="testimonial-text">«Текст отзыва...»</p>
</div>
```

### 7. Цветовая схема

Измените CSS-переменные в `styles.css`:

```css
:root {
    --accent-primary: #6366f1;      /* Основной акцент */
    --accent-secondary: #8b5cf6;    /* Вторичный акцент */
    --accent-gradient: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #06b6d4 100%);
}
```

**Популярные комбинации:**
- Фиолетово-голубой: `#6366f1` → `#8b5cf6` → `#06b6d4`
- Зелёный неон: `#22c55e` → `#10b981` → `#06b6d4`
- Розово-оранжевый: `#ec4899` → `#f97316` → `#eab308`

## 📱 Адаптивность

Сайт адаптируется под все устройства:
- 📱 Мобильные: < 480px
- 📱 Планшеты: 480px - 768px
- 💻 Ноутбуки: 768px - 1024px
- 🖥️ Десктопы: > 1024px

## ⚡ Производительность

- Чистый HTML/CSS/JS без фреймворков
- Ленивая загрузка изображений
- Debounce для scroll-событий
- Оптимизированные анимации (CSS transforms)
- Минимальный размер файлов

## 🔍 SEO

Уже настроены:
- Meta-теги (title, description)
- Open Graph (og:title, og:description, og:image)
- Семантическая HTML-разметка
- Alt-тексты для изображений
- Структурированные заголовки (h1-h4)

**Что добавить:**
1. Замените `https://yourdomain.com` на ваш домен
2. Добавьте `og-image.jpg` (1200x630px)
3. Настройте `robots.txt` и `sitemap.xml`
4. Добавьте структурированные данные (JSON-LD)

## 🚀 Деплой

### GitHub Pages
1. Загрузите файлы в репозиторий
2. Settings → Pages → Source: main branch
3. Сайт будет доступен по адресу: `https://username.github.io/repo-name`

### Netlify / Vercel
1. Подключите репозиторий
2. Deploy автоматически
3. Получите бесплатный домен

### Свой хостинг
1. Загрузите файлы через FTP/SFTP
2. Настройте SSL-сертификат
3. Проверьте работу формы (может потребоваться бэкенд)

## 📧 Форма обратной связи

Сейчас форма работает в демо-режиме (имитация отправки).

**Для реальной отправки:**

1. **EmailJS** (без бэкенда):
```javascript
// Подключите EmailJS SDK
emailjs.send('service_id', 'template_id', data);
```

2. **Formspree**:
```html
<form action="https://formspree.io/f/your-id" method="POST">
```

3. **Свой бэкенд** (Node.js/Python/PHP):
```javascript
// POST /api/contact
fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(data)
});
```

## 🛠️ Технологии

- **HTML5** — семантическая разметка
- **CSS3** — Grid, Flexbox, Variables, Animations
- **JavaScript (ES6+)** — Classes, IntersectionObserver, Canvas API
- **Font Awesome 6** — иконки
- **Google Fonts** — шрифт Inter

## 📄 Лицензия

MIT License — используйте как хотите!

## 🤝 Поддержка

Если возникли вопросы по кастомизации:
1. Проверьте комментарии в коде
2. Изучите CSS-переменные
3. Обратитесь к документации Font Awesome для иконок

---

**Удачного портфолио! 🚀**
