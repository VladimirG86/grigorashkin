// ============================================
// DOM Elements
// ============================================
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const backToTop = document.getElementById('back-to-top');
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioCards = document.querySelectorAll('.portfolio-card');
const modal = document.getElementById('project-modal');
const modalOverlay = modal.querySelector('.modal-overlay');
const modalClose = modal.querySelector('.modal-close');
const modalBody = modal.querySelector('.modal-body');
const contactForm = document.getElementById('contact-form');
const testimonialCards = document.querySelectorAll('.testimonial-card');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const dots = document.querySelectorAll('.dot');
const animateElements = document.querySelectorAll('.animate-fade-in');
const statNumbers = document.querySelectorAll('.stat-number');

// ============================================
// Particles Animation
// ============================================
class ParticleAnimation {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.particles = [];
        this.mouse = { x: null, y: null, radius: 150 };
        this.animationId = null;
        
        this.init();
        this.animate();
        
        window.addEventListener('resize', () => this.init());
        window.addEventListener('mousemove', (e) => {
            this.mouse.x = e.x;
            this.mouse.y = e.y;
        });
    }
    
    init() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        
        this.particles = [];
        const numberOfParticles = Math.min(80, Math.floor((this.canvas.width * this.canvas.height) / 15000));
        
        for (let i = 0; i < numberOfParticles; i++) {
            const size = Math.random() * 2 + 1;
            const x = Math.random() * (this.canvas.width - size * 2) + size;
            const y = Math.random() * (this.canvas.height - size * 2) + size;
            const directionX = (Math.random() * 0.4) - 0.2;
            const directionY = (Math.random() * 0.4) - 0.2;
            const color = `rgba(99, 102, 241, ${Math.random() * 0.5 + 0.2})`;
            
            this.particles.push(new Particle(x, y, directionX, directionY, size, color, this.canvas));
        }
    }
    
    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        for (let i = 0; i < this.particles.length; i++) {
            this.particles[i].update(this.mouse);
            this.particles[i].draw(this.ctx);
        }
        
        this.connect();
        this.animationId = requestAnimationFrame(() => this.animate());
    }
    
    connect() {
        for (let a = 0; a < this.particles.length; a++) {
            for (let b = a + 1; b < this.particles.length; b++) {
                const distance = Math.sqrt(
                    Math.pow(this.particles[a].x - this.particles[b].x, 2) +
                    Math.pow(this.particles[a].y - this.particles[b].y, 2)
                );
                
                if (distance < 120) {
                    const opacity = 1 - (distance / 120);
                    this.ctx.strokeStyle = `rgba(99, 102, 241, ${opacity * 0.3})`;
                    this.ctx.lineWidth = 1;
                    this.ctx.beginPath();
                    this.ctx.moveTo(this.particles[a].x, this.particles[a].y);
                    this.ctx.lineTo(this.particles[b].x, this.particles[b].y);
                    this.ctx.stroke();
                }
            }
        }
    }
}

class Particle {
    constructor(x, y, directionX, directionY, size, color, canvas) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
        this.canvas = canvas;
    }
    
    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
    
    update(mouse) {
        if (this.x > this.canvas.width || this.x < 0) {
            this.directionX = -this.directionX;
        }
        if (this.y > this.canvas.height || this.y < 0) {
            this.directionY = -this.directionY;
        }
        
        // Mouse interaction
        if (mouse.x !== null && mouse.y !== null) {
            const dx = mouse.x - this.x;
            const dy = mouse.y - this.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < mouse.radius) {
                const force = (mouse.radius - distance) / mouse.radius;
                const directionX = dx / distance;
                const directionY = dy / distance;
                this.x -= directionX * force * 2;
                this.y -= directionY * force * 2;
            }
        }
        
        this.x += this.directionX;
        this.y += this.directionY;
        this.draw(document.getElementById('particles-canvas').getContext('2d'));
    }
}

// Initialize particles
const particlesCanvas = document.getElementById('particles-canvas');
if (particlesCanvas) {
    new ParticleAnimation(particlesCanvas);
}

// ============================================
// Navigation
// ============================================
// Scroll effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Back to top button
    if (currentScroll > 500) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
    
    lastScroll = currentScroll;
});

// Mobile menu toggle
navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
});

// Close mobile menu on link click
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// Back to top
backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ============================================
// Scroll Animations
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // Animate stat numbers
            if (entry.target.classList.contains('hero-stats')) {
                animateStats();
            }
        }
    });
}, observerOptions);

// Observe elements
animateElements.forEach(el => observer.observe(el));

// Also observe sections for animations
document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
});

// ============================================
// Counter Animation
// ============================================
function animateStats() {
    statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-count'));
        const duration = 2000;
        const start = 0;
        const increment = target / (duration / 16);
        let current = start;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                stat.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                stat.textContent = target;
            }
        };
        
        updateCounter();
    });
}

// ============================================
// Portfolio Filtering
// ============================================
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Update active button
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const filter = btn.getAttribute('data-filter');
        
        portfolioCards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.style.display = 'block';
                card.style.animation = 'fadeIn 0.5s ease forwards';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// ============================================
// Portfolio Modal
// ============================================
const projectData = {
    project1: {
        tag: 'E-commerce',
        title: 'Интернет-магазин «TechStore»',
        subtitle: 'Полнофункциональный маркетплейс электроники',
        icon: 'fas fa-shopping-cart',
        description: 'Разработал современный интернет-магазин электроники с нуля. Проект включает в себя личный кабинет пользователя, систему управления заказами, интеграцию с платёжными системами, адаптивную вёрстку и мощную админ-панель для управления товарами, заказами и аналитикой.',
        details: [
            { label: 'Сроки', value: '3 месяца' },
            { label: 'Команда', value: '1 разработчик' },
            { label: 'Тип проекта', value: 'С нуля' },
            { label: 'Поддержка', value: '6 месяцев' }
        ],
        stack: ['React', 'Node.js', 'MongoDB', 'Redux', 'Stripe API', 'AWS S3'],
        results: 'Увеличение конверсии на 35%, средний чек вырос на 20%. Система обрабатывает более 500 заказов в день без сбоев.'
    },
    project2: {
        tag: 'Интеграция',
        title: 'CRM-интеграция для «ЛогистикПро»',
        subtitle: 'Автоматизация обработки заказов',
        icon: 'fas fa-exchange-alt',
        description: 'Выполнил комплексную интеграцию между CRM-системой, 1С:Предприятие и складской системой. Автоматизировал процесс обработки заказов от создания до отгрузки, включая синхронизацию остатков, автоматическое создание документов и уведомления.',
        details: [
            { label: 'Сроки', value: '2 месяца' },
            { label: 'Команда', value: '1 разработчик' },
            { label: 'Тип проекта', value: 'Интеграция' },
            { label: 'Поддержка', value: '12 месяцев' }
        ],
        stack: ['Python', '1С API', 'PostgreSQL', 'REST API', 'Redis', 'Celery'],
        results: 'Сокращение времени обработки заказа с 15 минут до 2 минут. Устранение ошибок ручного ввода на 99%.'
    },
    project3: {
        tag: 'SaaS',
        title: 'Аналитическая панель «DataViz»',
        subtitle: 'Дашборд для визуализации бизнес-метрик',
        icon: 'fas fa-chart-pie',
        description: 'Создал интерактивную аналитическую панель для визуализации бизнес-данных в реальном времени. Пользователи могут настраивать виджеты, создавать отчёты, отслеживать KPI и получать уведомления при отклонении показателей.',
        details: [
            { label: 'Сроки', value: '4 месяца' },
            { label: 'Команда', value: '2 разработчика' },
            { label: 'Тип проекта', value: 'SaaS платформа' },
            { label: 'Поддержка', value: 'Постоянная' }
        ],
        stack: ['Vue.js', 'D3.js', 'Python', 'FastAPI', 'PostgreSQL', 'WebSocket'],
        results: 'Более 200 компаний используют платформу. Среднее время принятия решений сократилось на 40%.'
    },
    project4: {
        tag: 'Мобильное приложение',
        title: 'Доставка еды «FoodExpress»',
        subtitle: 'Кроссплатформенное приложение',
        icon: 'fas fa-utensils',
        description: 'Разработал мобильное приложение для сервиса доставки еды с нуля. Включает в себя геолокацию, систему лояльности, push-уведомления, онлайн-оплату и отслеживание заказа в реальном времени.',
        details: [
            { label: 'Сроки', value: '4 месяца' },
            { label: 'Команда', value: '1 разработчик' },
            { label: 'Тип проекта', value: 'С нуля' },
            { label: 'Поддержка', value: '12 месяцев' }
        ],
        stack: ['React Native', 'Firebase', 'Node.js', 'Google Maps API', 'Stripe'],
        results: 'Более 10 000 скачиваний за первый месяц. Рейтинг 4.8 в App Store и Google Play.'
    },
    project5: {
        tag: 'EdTech',
        title: 'Платформа онлайн-обучения «EduHub»',
        subtitle: 'LMS-система с видеокурсами',
        icon: 'fas fa-graduation-cap',
        description: 'Создал полнофункциональную платформу для онлайн-обучения с системой видеокурсов, тестирования, домашних заданий и сертификации. Включает личные кабинеты для студентов и преподавателей, систему оплаты и аналитику успеваемости.',
        details: [
            { label: 'Сроки', value: '5 месяцев' },
            { label: 'Команда', value: '2 разработчика' },
            { label: 'Тип проекта', value: 'С нуля' },
            { label: 'Поддержка', value: 'Постоянная' }
        ],
        stack: ['Next.js', 'PostgreSQL', 'AWS', 'FFmpeg', 'Stripe', 'Redis'],
        results: 'Более 5000 студентов. 92% завершаемость курсов. Средний рейтинг курсов 4.9.'
    },
    project6: {
        tag: 'Автоматизация',
        title: 'Чат-бот для «СервисМастер»',
        subtitle: 'Telegram-бот для записи клиентов',
        icon: 'fas fa-robot',
        description: 'Разработал интеллектуального Telegram-бота для автоматизации записи клиентов и обработки заявок. Бот умеет записывать на приём, отправлять напоминания, собирать обратную связь и передавать данные в CRM.',
        details: [
            { label: 'Сроки', value: '3 недели' },
            { label: 'Команда', value: '1 разработчик' },
            { label: 'Тип проекта', value: 'С нуля' },
            { label: 'Поддержка', value: '6 месяцев' }
        ],
        stack: ['Python', 'Aiogram', 'Redis', 'PostgreSQL', 'CRM API'],
        results: 'Сокращение нагрузки на администраторов на 70%. Увеличение записей через бота на 45%.'
    }
};

// Open modal
portfolioCards.forEach(card => {
    card.addEventListener('click', () => {
        const projectId = card.getAttribute('data-modal');
        const project = projectData[projectId];
        
        if (project) {
            modalBody.innerHTML = `
                <div class="modal-header">
                    <span class="modal-tag">${project.tag}</span>
                    <h2 class="modal-title">${project.title}</h2>
                    <p class="modal-subtitle">${project.subtitle}</p>
                </div>
                <div class="modal-image">
                    <i class="${project.icon}"></i>
                </div>
                <p class="modal-description">${project.description}</p>
                <div class="modal-details">
                    ${project.details.map(detail => `
                        <div class="detail-item">
                            <div class="detail-label">${detail.label}</div>
                            <div class="detail-value">${detail.value}</div>
                        </div>
                    `).join('')}
                </div>
                <h4 style="margin-bottom: 12px; font-weight: 600;">Технологии</h4>
                <div class="modal-stack">
                    ${project.stack.map(tech => `<span>${tech}</span>`).join('')}
                </div>
                <div class="modal-results">
                    <h4><i class="fas fa-chart-line"></i> Результаты</h4>
                    <p>${project.results}</p>
                </div>
            `;
            
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    });
});

// Close modal
function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

// ============================================
// Testimonials Slider
// ============================================
let currentSlide = 0;
const totalSlides = testimonialCards.length;

function showSlide(index) {
    testimonialCards.forEach(card => {
        card.style.transform = `translateX(-${index * 100}%)`;
    });
    
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
    
    currentSlide = index;
}

prevBtn.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
});

nextBtn.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showSlide(index);
    });
});

// Auto-slide
let autoSlideInterval = setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}, 5000);

// Pause on hover
const slider = document.querySelector('.testimonials-slider');
slider.addEventListener('mouseenter', () => {
    clearInterval(autoSlideInterval);
});

slider.addEventListener('mouseleave', () => {
    autoSlideInterval = setInterval(() => {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }, 5000);
});

// ============================================
// Contact Form
// ============================================
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Simulate form submission
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Отправка...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        // Show success message
        submitBtn.innerHTML = '<i class="fas fa-check"></i> Отправлено!';
        submitBtn.style.background = 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)';
        
        // Reset form
        contactForm.reset();
        
        // Reset button after 3 seconds
        setTimeout(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.style.background = '';
            submitBtn.disabled = false;
        }, 3000);
        
        // Log form data (replace with actual form submission)
        console.log('Form submitted:', data);
        alert('Сообщение отправлено! Я свяжусь с вами в ближайшее время.');
    }, 1500);
});

// ============================================
// Smooth Scroll for Navigation Links
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// Active Navigation Link Highlight
// ============================================
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        
        if (navLink) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLink.classList.add('active');
            } else {
                navLink.classList.remove('active');
            }
        }
    });
});

// ============================================
// Typing Effect for Hero (Optional Enhancement)
// ============================================
const heroSubtitle = document.querySelector('.hero-subtitle');
if (heroSubtitle) {
    const text = heroSubtitle.textContent;
    heroSubtitle.textContent = '';
    heroSubtitle.style.borderRight = '2px solid var(--accent-primary)';
    
    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            heroSubtitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        } else {
            // Remove cursor after typing
            setTimeout(() => {
                heroSubtitle.style.borderRight = 'none';
            }, 1000);
        }
    };
    
    // Start typing after a delay
    setTimeout(typeWriter, 1000);
}

// ============================================
// Initialize
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Show first slide
    showSlide(0);
    
    // Add loaded class to body for animations
    document.body.classList.add('loaded');
    
    // Trigger initial animations
    setTimeout(() => {
        document.querySelectorAll('.animate-fade-in').forEach((el, index) => {
            setTimeout(() => {
                el.classList.add('visible');
            }, index * 100);
        });
    }, 300);
});

// ============================================
// Performance: Debounce scroll events
// ============================================
function debounce(func, wait = 10, immediate = true) {
    let timeout;
    return function() {
        const context = this, args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Apply debounce to scroll-heavy functions
const debouncedScroll = debounce(() => {
    // Any additional scroll-based animations can go here
}, 10);

window.addEventListener('scroll', debouncedScroll);

// ============================================
// Lazy Loading Images (if needed)
// ============================================
if ('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imgObserver.observe(img);
    });
}

// ============================================
// Console Easter Egg
// ============================================
console.log('%c👋 Привет! Заинтересовал код?', 'color: #6366f1; font-size: 20px; font-weight: bold;');
console.log('%cЕсли вам нужен разработчик — давайте обсудим ваш проект!', 'color: #8b5cf6; font-size: 14px;');
console.log('%c📧 alex@example.com | 💬 @yourusername', 'color: #06b6d4; font-size: 12px;');
