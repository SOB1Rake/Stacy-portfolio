// Translation data
const translations = {
    uz: {
        nav_home: "Bosh sahifa",
        nav_about: "Malumot",
        nav_contact: "Aloqa",
        hero_greeting: "Assalom alaikum! 👋",
        hero_intro: "Men raqamli dizayner va web ishlashiga ishtiyoq qilaman",
        hero_description: "Estetik va funksional veb-saytlar yaratish orqali brend imijini oshirish meningning ehtirosi. Men har bir loyihaga kreativlik va texnik savodxonlikning to'q'on o'zini keltirib chiqaman.",
        cta_contact: "Aloqa qilish",
        image_placeholder: "Rasm qoyish uchun joyni yo'naltirish",
        about_title: "Meni tanishing",
        about_p1: "Men zamonaviy veb-dizayn va foydalanuvchi tajribasiga ihtisoslashmishman. Har bir loyihada, men sifat, estetika va qo'llanuvchi istiqboli to'g'ri muvozanatni ta'minlaymiz.",
        about_p2: "Mening ishim shaxsiy brend, startuplar va bizneslarni raqamli dunyoda o'zlarini namoyish qilishga yordam beradi. Qo'llanuvchi-markaziy yondashuvni yordamida men har bir sahifani maqsadli va taassurot qoldiruvchi qilaman.",
        about_p3: "Shuningdek, men dizayn va kodlash o'rtasidagi chuqur aloqalarni tushunaman, bu menga mustahkam va ham yaxshi ko'rinadigan veb-saytlar yaratish imkonini beradi.",
        skills_title: "Malakalar",
        contact_title: "Menga yozing",
        contact_subtitle: "Loyiha bo'yicha muloqot qilmoqchimiz? Menga o'z sharhingizni yuboring!",
        form_name: "Ismingiz",
        form_email: "Email",
        form_subject: "Mavzu",
        form_message: "Xabaringiz",
        form_submit: "Jo'natish",
        form_error_name: "Iltimos ismingizni kiriting",
        form_error_email: "Iltimos to'g'ri emailni kiriting",
        form_error_subject: "Iltimos mavzuni kiriting",
        form_error_message: "Iltimos xabar kiriting",
        contact_connect: "Meni ijtimoiy tarmoqlarda toping",
        footer_text: "© 2024 Mening Portfolio. Barcha huquqlar saqlanib qoladi."
    },
    en: {
        nav_home: "Home",
        nav_about: "About",
        nav_contact: "Contact",
        hero_greeting: "Hello there! 👋",
        hero_intro: "I'm a digital designer passionate about web creation",
        hero_description: "My passion is to enhance brand image by creating aesthetic and functional websites. I bring creativity and technical expertise to every project, ensuring that each design not only looks beautiful but also works seamlessly.",
        cta_contact: "Get in Touch",
        image_placeholder: "Click to upload your photo",
        about_title: "About Me",
        about_p1: "I specialize in modern web design and user experience. In every project, I ensure the right balance between quality, aesthetics, and user perspective.",
        about_p2: "My work helps personal brands, startups, and businesses showcase themselves in the digital world. Through a user-centered approach, I make every page purposeful and memorable.",
        about_p3: "I also understand the deep connection between design and coding, which allows me to create robust and visually stunning websites.",
        skills_title: "Skills",
        contact_title: "Get In Touch",
        contact_subtitle: "Want to discuss a project? Send me your thoughts!",
        form_name: "Your Name",
        form_email: "Your Email",
        form_subject: "Subject",
        form_message: "Your Message",
        form_submit: "Send",
        form_error_name: "Please enter your name",
        form_error_email: "Please enter a valid email",
        form_error_subject: "Please enter a subject",
        form_error_message: "Please enter a message",
        contact_connect: "Connect With Me",
        footer_text: "© 2024 My Portfolio. All rights reserved."
    },
    ru: {
        nav_home: "Главная",
        nav_about: "Обо мне",
        nav_contact: "Контакты",
        hero_greeting: "Привет! 👋",
        hero_intro: "Я цифровой дизайнер, увлеченный созданием веб-сайтов",
        hero_description: "Мне нравится создавать эстетичные и функциональные веб-сайты, которые повышают имидж бренда. Я вношу креативность и технические знания в каждый проект, следя за тем, чтобы каждый дизайн не только выглядел красиво, но и работал безупречно.",
        cta_contact: "Связаться со мной",
        image_placeholder: "Нажмите, чтобы загрузить фото",
        about_title: "Обо мне",
        about_p1: "Я специализируюсь на современном веб-дизайне и пользовательском опыте. В каждом проекте я обеспечиваю правильный баланс между качеством, эстетикой и точкой зрения пользователя.",
        about_p2: "Моя работа помогает личным брендам, стартапам и бизнесу выделиться в цифровом мире. Благодаря ориентированному на пользователя подходу я делаю каждую страницу значимой и запоминающейся.",
        about_p3: "Я также понимаю глубокую связь между дизайном и кодированием, что позволяет мне создавать надежные и визуально потрясающие веб-сайты.",
        skills_title: "Навыки",
        contact_title: "Свяжитесь со мной",
        contact_subtitle: "Хотите обсудить проект? Отправьте мне свои мысли!",
        form_name: "Ваше имя",
        form_email: "Ваш Email",
        form_subject: "Тема",
        form_message: "Ваше сообщение",
        form_submit: "Отправить",
        form_error_name: "Пожалуйста, введите свое имя",
        form_error_email: "Пожалуйста, введите действительный адрес электронной почты",
        form_error_subject: "Пожалуйста, введите тему",
        form_error_message: "Пожалуйста, введите сообщение",
        contact_connect: "Свяжитесь со мной",
        footer_text: "© 2024 Мой портфолио. Все права защищены."
    }
};

let currentLanguage = 'en';

// Change language
function changeLanguage(lang) {
    currentLanguage = lang;
    updatePageText();
    updateLanguageButtons();
    localStorage.setItem('language', lang);
}

// Update page text based on current language
function updatePageText() {
    const textElements = document.querySelectorAll('[data-i18n]');
    textElements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLanguage][key]) {
            element.textContent = translations[currentLanguage][key];
        }
    });

    // Update placeholders
    const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
    placeholderElements.forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[currentLanguage][key]) {
            element.placeholder = translations[currentLanguage][key];
        }
    });

    // Update html lang attribute
    document.documentElement.lang = currentLanguage;
}

// Update language button styling
function updateLanguageButtons() {
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        if (btn.getAttribute('data-lang') === currentLanguage) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// Image upload functionality
function setupImageUpload() {
    const imageInput = document.getElementById('imageInput');
    const imagePlaceholder = document.querySelector('.image-placeholder');

    imagePlaceholder.addEventListener('click', () => {
        imageInput.click();
    });

    imageInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                if (document.getElementById('heroImage')) {
                    document.getElementById('heroImage').src = event.target.result;
                } else {
                    imagePlaceholder.innerHTML = `<img id="heroImage" src="${event.target.result}" alt="Profile">`;
                }
            };
            reader.readAsDataURL(file);
        }
    });
}

// Form validation and submission
function setupContactForm() {
    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const inputs = form.querySelectorAll('input, textarea');
        let isValid = true;
        
        inputs.forEach(input => {
            const group = input.parentElement;
            const error = group.querySelector('.form-error');
            
            if (!input.value.trim()) {
                error.classList.add('show');
                isValid = false;
            } else if (input.type === 'email' && !isValidEmail(input.value)) {
                error.classList.add('show');
                isValid = false;
            } else {
                error.classList.remove('show');
            }
        });
        
        if (isValid) {
            // Show success message
            const submitBtn = form.querySelector('.submit-btn');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = translations[currentLanguage]['form_submit'] + ' ✓';
            submitBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
            
            // Reset form
            setTimeout(() => {
                form.reset();
                submitBtn.textContent = originalText;
                submitBtn.style.background = '';
            }, 2000);
        }
    });
    
    // Remove error on input
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            const group = input.parentElement;
            const error = group.querySelector('.form-error');
            error.classList.remove('show');
        });
    });
}

// Email validation
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Smooth scroll behavior
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// Navbar scroll effect
function setupNavbarEffect() {
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.borderBottomColor = 'rgba(45, 45, 69, 0.5)';
        } else {
            navbar.style.borderBottomColor = 'rgb(45, 45, 69)';
        }
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Set initial language from localStorage or default to English
    const savedLanguage = localStorage.getItem('language') || 'en';
    
    // Set up language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            changeLanguage(btn.getAttribute('data-lang'));
        });
    });
    
    // Initialize
    currentLanguage = savedLanguage;
    updatePageText();
    updateLanguageButtons();
    setupImageUpload();
    setupContactForm();
    setupSmoothScroll();
    setupNavbarEffect();
    
    // Add scroll animation to elements
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe sections
    document.querySelectorAll('.about, .contact').forEach(section => {
        observer.observe(section);
    });
});
