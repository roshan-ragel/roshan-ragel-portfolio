// Mobile menu toggle
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const nav = document.querySelector('nav');
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.getElementById('navLinks');
    
    if (!nav.contains(event.target) && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
    }
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
```

## **Why You Don't Need to Change `script.js`:**

✅ **Mobile menu toggle** - Works for all pages  
✅ **Active navigation highlighting** - Automatically detects current page  
✅ **Smooth scroll** - Works for anchor links  
✅ **Fade-in animations** - Works with Intersection Observer  

The `resources.html` and `supervision.html` files I created already include their **own inline JavaScript** for:
- API fetching (resources.html)
- Batch toggling (resources.html)
- No additional JS needed (supervision.html)

---

## **Your Complete File Structure:**
```
roshan-ragel-portfolio/
├── index.html
├── about.html
├── publications.html
├── supervision.html       ← NEW (with students)
├── podcasts.html
├── videos.html
├── speaking.html
├── resources.html         ← UPDATED (with API projects)
├── styles.css
└── script.js              ← NO CHANGES NEEDED
