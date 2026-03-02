// Mobile menu toggle
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    const btn = document.querySelector('.mobile-menu-btn');
    const isOpen = navLinks.classList.toggle('open');
    btn.textContent = isOpen ? '✕' : '☰';
    btn.setAttribute('aria-expanded', isOpen);
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const nav = document.querySelector('nav');
    const btn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.getElementById('navLinks');

    if (!nav.contains(event.target) && navLinks.classList.contains('open')) {
        navLinks.classList.remove('open');
        if (btn) {
            btn.textContent = '☰';
            btn.setAttribute('aria-expanded', 'false');
        }
    }
});

// Close menu when a nav link is clicked (mobile)
document.querySelectorAll('.nav-links a').forEach(function(link) {
    link.addEventListener('click', function() {
        const navLinks = document.getElementById('navLinks');
        const btn = document.querySelector('.mobile-menu-btn');
        navLinks.classList.remove('open');
        if (btn) {
            btn.textContent = '☰';
            btn.setAttribute('aria-expanded', 'false');
        }
    });
});

// Active navigation highlighting
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});

// Smooth scroll for anchor links (if any)
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

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all fade-in elements
document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});
