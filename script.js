// ===== constants.js - الثوابت =====
const CONFIG = {
    ANIMATION_DURATION: 300,
    AUTO_SLIDE_INTERVAL: 5000,
    STORAGE_KEYS: {
        THEME: 'green-awareness-theme',
        LANGUAGE: 'green-awareness-language',
        USER_STATS: 'green-awareness-stats'
    }
};

// ===== data.js - البيانات =====
let appState = {
    userStats: {
        plastic: 12450,
        water: 8230,
        trees: 156
    },
    currentFact: 0,
    currentLanguage: 'ar',
    isDarkMode: false,
    challenges: {
        water: { completed: false, progress: 60 },
        plastic: { completed: false, progress: 30 },
        recycle: { completed: false, progress: 45 }
    }
};

// ===== translations.js - الترجمة =====
const translations = {
    ar: {
        // العربية
        appName: 'Green Awareness',
        nav: {
            theme: 'تغيير الوضع',
            language: 'English'
        },
        hero: {
            title: 'معاً نحو كوكب أكثر اخضراراً',
            description: 'انضم إلى مجتمعنا وابدأ رحلتك في الحفاظ على البيئة',
            highlight: 'كوكب'
        },
        counter: {
            plastic: 'زجاجة بلاستيك تم توفيرها',
            water: 'لتر مياه تم توفيرها',
            trees: 'شجرة تم زراعتها'
        },
        challenges: {
            title: 'تحديات اليوم',
            subtitle: 'اختر تحدياً وابدأ الآن',
            water: {
                title: 'تحدي المياه',
                desc: 'قلل وقت الاستحمام إلى 5 دقائق فقط'
            },
            plastic: {
                title: 'بدون بلاستيك',
                desc: 'استخدم كيس قماش بدلاً من البلاستيك'
            },
            recycle: {
                title: 'إعادة تدوير',
                desc: 'افصل المخلفات القابلة للتدوير'
            },
            complete: 'تم التحدي',
            points: 'نقاط',
            difficulty: {
                easy: 'سهل',
                medium: 'متوسط'
            }
        },
        facts: {
            title: 'هل تعلم؟',
            fact1: '🥤 زجاجة بلاستيك واحدة تحتاج 450 سنة لتتحلل',
            fact2: '🚿 توفير دقيقة واحدة من الاستحمام = 10 لتر مياه',
            fact3: '🌳 زراعة شجرة واحدة تنتج أكسجين يكفي لـ 4 أشخاص'
        },
        messages: {
            welcome: 'مرحباً بك!',
            success: 'أحسنت!',
            join: 'شكراً لانضمامك! سنرسل لك أحدث التحديات قريباً'
        }
    },
    en: {
        // English
        appName: 'Green Awareness',
        nav: {
            theme: 'Toggle theme',
            language: 'العربية'
        },
        hero: {
            title: 'Together for a Greener Planet',
            description: 'Join our community and start your journey in environmental conservation',
            highlight: 'Greener'
        },
        counter: {
            plastic: 'Plastic bottles saved',
            water: 'Liters of water saved',
            trees: 'Trees planted'
        },
        challenges: {
            title: "Today's Challenges",
            subtitle: 'Pick a challenge and start now',
            water: {
                title: 'Water Challenge',
                desc: 'Reduce shower time to 5 minutes'
            },
            plastic: {
                title: 'Plastic Free',
                desc: 'Use a cloth bag instead of plastic'
            },
            recycle: {
                title: 'Recycle',
                desc: 'Separate recyclable waste'
            },
            complete: 'Completed',
            points: 'points',
            difficulty: {
                easy: 'Easy',
                medium: 'Medium'
            }
        },
        facts: {
            title: 'Did You Know?',
            fact1: '🥤 One plastic bottle takes 450 years to decompose',
            fact2: '🚿 Saving 1 minute of shower = 10 liters of water',
            fact3: '🌳 One tree produces oxygen for 4 people'
        },
        messages: {
            welcome: 'Welcome!',
            success: 'Great job!',
            join: 'Thanks for joining! We\'ll send you the latest challenges soon'
        }
    }
};

// ===== dom.js - عناصر DOM =====
const DOM = {
    // الأزرار
    themeToggle: document.getElementById('themeToggle'),
    langToggle: document.getElementById('langToggle'),
    scrollTopBtn: document.getElementById('scrollToTop'),
    
    // النماذج
    signupForm: document.getElementById('signupForm'),
    userEmail: document.getElementById('userEmail'),
    
    // العدادات
    plasticCounter: document.getElementById('plasticCounter'),
    waterCounter: document.getElementById('waterCounter'),
    treeCounter: document.getElementById('treeCounter'),
    
    // الحقائق
    factCards: document.querySelectorAll('.fact-card'),
    dots: document.querySelectorAll('.dot'),
    
    // بطاقات التحديات
    challengeCards: {
        water: document.getElementById('challenge-water'),
        plastic: document.getElementById('challenge-plastic'),
        recycle: document.getElementById('challenge-recycle')
    },
    
    // رسالة النجاح
    successMessage: document.getElementById('successMessage'),
    
    // جسم الصفحة
    body: document.body
};

// ===== theme.js - إدارة الوضع المظلم =====
function initTheme() {
    // التحقق من الوضع المحفوظ
    const savedTheme = localStorage.getItem(CONFIG.STORAGE_KEYS.THEME);
    
    if (savedTheme === 'dark') {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
}

function enableDarkMode() {
    DOM.body.classList.add('dark-mode');
    if (DOM.themeToggle) {
        DOM.themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
    localStorage.setItem(CONFIG.STORAGE_KEYS.THEME, 'dark');
    appState.isDarkMode = true;
}

function disableDarkMode() {
    DOM.body.classList.remove('dark-mode');
    if (DOM.themeToggle) {
        DOM.themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
    localStorage.setItem(CONFIG.STORAGE_KEYS.THEME, 'light');
    appState.isDarkMode = false;
}

function toggleTheme() {
    if (DOM.body.classList.contains('dark-mode')) {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
}

// ===== language.js - إدارة اللغة =====
function initLanguage() {
    const savedLang = localStorage.getItem(CONFIG.STORAGE_KEYS.LANGUAGE);
    if (savedLang && savedLang !== appState.currentLanguage) {
        toggleLanguage();
    }
}

function toggleLanguage() {
    // تبديل اللغة
    appState.currentLanguage = appState.currentLanguage === 'ar' ? 'en' : 'en';
    
    // تحديث اتجاه الصفحة
    document.documentElement.lang = appState.currentLanguage;
    document.documentElement.dir = appState.currentLanguage === 'ar' ? 'rtl' : 'ltr';
    
    // تحديث نص زر اللغة
    if (DOM.langToggle) {
        DOM.langToggle.innerHTML = `<i class="fas fa-globe"></i> ${translations[appState.currentLanguage].nav.language}`;
    }
    
    // تحديث كل النصوص في الصفحة
    updatePageContent();
    
    // حفظ اللغة
    localStorage.setItem(CONFIG.STORAGE_KEYS.LANGUAGE, appState.currentLanguage);
}

function updatePageContent() {
    const t = translations[appState.currentLanguage];
    
    // تحديث عنوان الصفحة
    document.title = t.appName;
    
    // تحديث شريط التنقل
    updateElementText('.logo-text', t.appName);
    
    // تحديث القسم الرئيسي
    updateElementText('.hero h1', t.hero.title, (el, text) => {
        el.innerHTML = text.replace(t.hero.highlight, `<span class="highlight">${t.hero.highlight}</span>`);
    });
    updateElementText('.hero-description', t.hero.description);
    
    // تحديث العدادات
    updateElementText('.counter-item:nth-child(1) .counter-label', t.counter.plastic);
    updateElementText('.counter-item:nth-child(2) .counter-label', t.counter.water);
    updateElementText('.counter-item:nth-child(3) .counter-label', t.counter.trees);
    
    // تحديث التحديات
    updateElementText('.section-header h2', t.challenges.title);
    updateElementText('.section-subtitle', t.challenges.subtitle);
    
    // تحديث الحقائق
    updateElementText('.facts-section h2', t.facts.title);
    updateElementText('.fact-card:nth-child(1) .fact-text', t.facts.fact1);
    updateElementText('.fact-card:nth-child(2) .fact-text', t.facts.fact2);
    updateElementText('.fact-card:nth-child(3) .fact-text', t.facts.fact3);
    
    // تحديث أزرار التحديات
    document.querySelectorAll('.complete-btn').forEach((btn, index) => {
        btn.innerHTML = `<i class="fas fa-check-circle"></i> ${t.challenges.complete}`;
    });
}

function updateElementText(selector, text, customUpdate = null) {
    const element = document.querySelector(selector);
    if (element) {
        if (customUpdate) {
            customUpdate(element, text);
        } else {
            element.textContent = text;
        }
    }
}

// ===== counter.js - إدارة العدادات =====
function updateCounters() {
    if (DOM.plasticCounter) {
        DOM.plasticCounter.textContent = formatNumber(appState.userStats.plastic);
    }
    if (DOM.waterCounter) {
        DOM.waterCounter.textContent = formatNumber(appState.userStats.water);
    }
    if (DOM.treeCounter) {
        DOM.treeCounter.textContent = formatNumber(appState.userStats.trees, 1);
    }
}

function formatNumber(num, decimals = 0) {
    if (decimals > 0) {
        return Math.round(num * 10) / 10;
    }
    return Math.round(num).toLocaleString();
}

function incrementCounter(type, value) {
    switch(type) {
        case 'plastic':
            appState.userStats.plastic += value;
            break;
        case 'water':
            appState.userStats.water += value;
            break;
        case 'trees':
            appState.userStats.trees += value;
            break;
    }
    updateCounters();
    saveStats();
}

// ===== challenges.js - إدارة التحديات =====
function completeChallenge(challengeType) {
    const btn = event.target.closest('.complete-btn');
    if (!btn || btn.classList.contains('completed')) return;
    
    // تحديث المظهر
    btn.classList.add('completed');
    const originalText = btn.innerHTML;
    btn.innerHTML = `<i class="fas fa-check-circle"></i> ${translations[appState.currentLanguage].messages.success}`;
    
    // تحديث الإحصائيات
    let points = 0;
    switch(challengeType) {
        case 'water':
            incrementCounter('water', 10);
            points = 10;
            break;
        case 'plastic':
            incrementCounter('plastic', 1);
            points = 15;
            break;
        case 'recycle':
            incrementCounter('trees', 0.1);
            points = 20;
            break;
    }
    
    // تحديث شريط التقدم
    const progressBar = btn.closest('.challenge-card').querySelector('.progress-bar');
    if (progressBar) {
        const currentWidth = parseInt(progressBar.style.width);
        progressBar.style.width = Math.min(100, currentWidth + 10) + '%';
    }
    
    // إظهار رسالة نجاح
    showSuccessMessage(`${translations[appState.currentLanguage].messages.success} +${points} ${translations[appState.currentLanguage].challenges.points}`);
    
    // إعادة الزر بعد ثانيتين
    setTimeout(() => {
        btn.classList.remove('completed');
        btn.innerHTML = originalText;
    }, 2000);
}

// ===== facts.js - إدارة الحقائق =====
function initFacts() {
    // بدء التبديل التلقائي
    setInterval(() => {
        nextFact();
    }, CONFIG.AUTO_SLIDE_INTERVAL);
}

function showFact(index) {
    DOM.factCards.forEach(fact => fact.classList.remove('active'));
    DOM.dots.forEach(dot => dot.classList.remove('active'));
    
    if (DOM.factCards[index]) {
        DOM.factCards[index].classList.add('active');
    }
    if (DOM.dots[index]) {
        DOM.dots[index].classList.add('active');
    }
    
    appState.currentFact = index;
}

function nextFact() {
    const nextIndex = (appState.currentFact + 1) % DOM.factCards.length;
    showFact(nextIndex);
}

function prevFact() {
    const prevIndex = (appState.currentFact - 1 + DOM.factCards.length) % DOM.factCards.length;
    showFact(prevIndex);
}

// ===== messages.js - إدارة الرسائل =====
function showSuccessMessage(message) {
    if (!DOM.successMessage) return;
    
    const messageSpan = DOM.successMessage.querySelector('span');
    if (messageSpan) {
        messageSpan.textContent = message;
    }
    
    DOM.successMessage.style.display = 'flex';
    
    setTimeout(() => {
        DOM.successMessage.style.display = 'none';
    }, 3000);
}

function showMotivationMessage() {
    const messages = [
        '🌟 رائع! أنت تصنع فرقاً!',
        '💚 استمر هكذا، كوكبنا يحتاجك!',
        '🦸‍♀️ أنت بطل البيئة!',
        '🤝 معاً نصنع التغيير!',
        '🌍 كل خطوة صغيرة تُحدث فرقاً كبيراً'
    ];
    
    const randomMsg = messages[Math.floor(Math.random() * messages.length)];
    showSuccessMessage(randomMsg);
}

// ===== form.js - إدارة النماذج =====
function initForm() {
    if (DOM.signupForm) {
        DOM.signupForm.addEventListener('submit', handleFormSubmit);
    }
}

function handleFormSubmit(e) {
    e.preventDefault();
    
    if (DOM.userEmail && DOM.userEmail.value) {
        const email = DOM.userEmail.value;
        
        // هنا يمكن إرسال البريد الإلكتروني إلى الخادم
        console.log('New subscription:', email);
        
        // إظهار رسالة نجاح
        showSuccessMessage(translations[appState.currentLanguage].messages.join);
        
        // إعادة تعيين النموذج
        DOM.signupForm.reset();
        
        // يمكن إرسال البيانات إلى API
        // sendToAPI(email);
    }
}

// ===== scroll.js - إدارة التمرير =====
function initScroll() {
    window.addEventListener('scroll', handleScroll);
    
    if (DOM.scrollTopBtn) {
        DOM.scrollTopBtn.addEventListener('click', scrollToTop);
    }
}

function handleScroll() {
    // إظهار/إخفاء زر العودة للأعلى
    if (window.scrollY > 300) {
        DOM.scrollTopBtn.classList.add('visible');
    } else {
        DOM.scrollTopBtn.classList.remove('visible');
    }
    
    // تأثيرات الظهور عند التمرير
    animateOnScroll();
}

function animateOnScroll() {
    const elements = document.querySelectorAll('.challenge-card, .counter-item, .fact-card');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// ===== storage.js - إدارة التخزين المحلي =====
function saveStats() {
    localStorage.setItem(CONFIG.STORAGE_KEYS.USER_STATS, JSON.stringify(appState.userStats));
}

function loadStats() {
    const savedStats = localStorage.getItem(CONFIG.STORAGE_KEYS.USER_STATS);
    if (savedStats) {
        try {
            appState.userStats = JSON.parse(savedStats);
        } catch (e) {
            console.error('Error loading stats:', e);
        }
    }
}

// ===== api.js - التعامل مع API (للإستخدام المستقبلي) =====
async function sendToAPI(email) {
    try {
        const response = await fetch('/api/subscribe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                email: email,
                language: appState.currentLanguage 
            })
        });
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        const data = await response.json();
        console.log('API response:', data);
        
    } catch (error) {
        console.error('Error sending to API:', error);
    }
}

// ===== init.js - تهيئة التطبيق =====
function initApp() {
    console.log('🚀 Green Awareness App initializing...');
    
    // تحميل البيانات المحفوظة
    loadStats();
    
    // تهيئة المكونات
    initTheme();
    initLanguage();
    initFacts();
    initForm();
    initScroll();
    
    // تحديث العدادات
    updateCounters();
    
    // إضافة مستمعي الأحداث
    addEventListeners();
    
    // تهيئة العناصر للرسوم المتحركة
    initializeAnimations();
    
    console.log('✅ Green Awareness App ready!');
}

function addEventListeners() {
    // تبديل الوضع
    if (DOM.themeToggle) {
        DOM.themeToggle.addEventListener('click', toggleTheme);
    }
    
    // تبديل اللغة
    if (DOM.langToggle) {
        DOM.langToggle.addEventListener('click', toggleLanguage);
    }
    
    // النقر على النقاط في شريط الحقائق
    DOM.dots.forEach((dot, index) => {
        dot.addEventListener('click', () => showFact(index));
    });
}

function initializeAnimations() {
    // إعداد العناصر للرسوم المتحركة
    const cards = document.querySelectorAll('.challenge-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.5s';
    });
    
    const counters = document.querySelectorAll('.counter-item');
    counters.forEach(counter => {
        counter.style.opacity = '0';
        counter.style.transform = 'translateY(20px)';
        counter.style.transition = 'all 0.5s';
    });
    
    // تشغيل الرسوم المتحركة بعد تحميل الصفحة
    setTimeout(() => {
        animateOnScroll();
    }, 100);
}

// ===== بدء التطبيق بعد تحميل الصفحة =====
document.addEventListener('DOMContentLoaded', initApp);

// ===== error-handling.js - معالجة الأخطاء =====
window.addEventListener('error', function(e) {
    console.error('Global error:', e.error);
    // يمكن إظهار رسالة خطأ للمستخدم
});

window.addEventListener('unhandledrejection', function(e) {
    console.error('Unhandled promise rejection:', e.reason);
});

// ===== service-worker.js - للاستخدام المستقبلي (PWA) =====
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').then(registration => {
            console.log('ServiceWorker registered:', registration);
        }).catch(error => {
            console.log('ServiceWorker registration failed:', error);
        });
    });
}