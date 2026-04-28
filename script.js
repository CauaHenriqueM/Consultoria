document.addEventListener("DOMContentLoaded", () => {
    
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const toggleIcon = menuToggle.querySelector('i');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            
            if (navMenu.classList.contains('active')) {
                toggleIcon.classList.remove('fa-bars');
                toggleIcon.classList.add('fa-xmark');
            } else {
                toggleIcon.classList.remove('fa-xmark');
                toggleIcon.classList.add('fa-bars');
            }
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                toggleIcon.classList.remove('fa-xmark');
                toggleIcon.classList.add('fa-bars');
            });
        });
    }

    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.15 
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    };

    const animationObserver = new IntersectionObserver(observerCallback, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-up, .animate-left, .animate-right');
    
    animatedElements.forEach(el => {
        animationObserver.observe(el);
    });

});