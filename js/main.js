const preloader = document.getElementById('preloader');
const darkToggle = document.getElementById('themeToggle');
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
const typewriterTarget = document.getElementById('typewriter');
const stats = document.querySelectorAll('.stat-number');
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-link');

function hidePreloader() {
    if (!preloader) return;
    preloader.classList.add('preloader-hidden');
    setTimeout(() => preloader.remove(), 500);
}

window.addEventListener('load', () => {
    hidePreloader();
    runTypewriter();
    animateCounters();
});

navToggle?.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => document.body.classList.remove('nav-open'));
});

darkToggle?.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    const icon = darkToggle.querySelector('i');
    if (document.body.classList.contains('light-theme')) {
        icon.classList.replace('fa-sun', 'fa-moon');
    } else {
        icon.classList.replace('fa-moon', 'fa-sun');
    }
});

function runTypewriter() {
    if (!typewriterTarget) return;
    const descriptors = [
        'Software Developer',
        'Cloud Enthusiast',
        'React & Python Engineer',
        'Problem Solver'
    ];
    let index = 0;
    let text = '';
    let isDeleting = false;
    let charIndex = 0;

    function type() {
        const current = descriptors[index % descriptors.length];
        if (isDeleting) {
            text = current.substring(0, charIndex - 1);
            charIndex--;
        } else {
            text = current.substring(0, charIndex + 1);
            charIndex++;
        }

        typewriterTarget.textContent = text;
        let delay = isDeleting ? 80 : 120;

        if (!isDeleting && text === current) {
            delay = 1600;
            isDeleting = true;
        } else if (isDeleting && text === '') {
            isDeleting = false;
            index++;
            delay = 250;
        }

        setTimeout(type, delay);
    }

    type();
}

function animateCounters() {
    stats.forEach(counter => {
        const targetValue = Number(counter.dataset.count || 0);
        let currentValue = 0;
        const increment = Math.ceil(targetValue / 80);
        const interval = setInterval(() => {
            currentValue += increment;
            if (currentValue >= targetValue) {
                counter.textContent = String(targetValue);
                clearInterval(interval);
            } else {
                counter.textContent = String(currentValue);
            }
        }, 25);
    });
}

window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            navItems.forEach(link => {
                link.classList.toggle('active-link', link.getAttribute('href') === `#${section.id}`);
            });
        }
    });
});

const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', event => {
        event.preventDefault();
        const button = contactForm.querySelector('button[type="submit"]');
        button.textContent = 'Message Sent';
        button.disabled = true;
        setTimeout(() => {
            button.textContent = 'Send Message';
            button.disabled = false;
        }, 2000);
    });
}
