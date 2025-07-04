// Navigation mobile
document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function () {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Fermer le menu lors du clic sur un lien
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function () {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // Smooth scrolling pour les liens d'ancrage
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function (e) {
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

    /* fonctions page contact */
    document.querySelectorAll('.dropdown').forEach(dropdown => {
        const selected = dropdown.querySelector('.dropdown-selected');
        const list = dropdown.querySelector('.dropdown-list');
        const input = dropdown.querySelector('input[type="hidden"]');

        selected.addEventListener('click', () => {
            dropdown.classList.toggle('open');
        });

        list.querySelectorAll('li').forEach(option => {
            option.addEventListener('click', () => {
                selected.textContent = option.textContent;
                input.value = option.getAttribute('data-value');
                dropdown.classList.remove('open');
            });
        });

        // Fermer dropdown si clic en dehors
        document.addEventListener('click', function (e) {
            if (!dropdown.contains(e.target)) {
                dropdown.classList.remove('open');
            }
        });
    });

    // carousel des témoignages
    const carousel = document.getElementById("testimonials-carousel");
    if (carousel) {
        const slides = carousel.querySelectorAll(".testimonial-slide");
        const dots = document.querySelectorAll(".dot");
        let currentIndex = 0;

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.toggle("active", i === index);
            });

            dots.forEach((dot, i) => {
                dot.classList.toggle("active", i === index);
            });

            currentIndex = index;
        }

        function changeSlide(direction) {
            let nextIndex = (currentIndex + direction + slides.length) % slides.length;
            showSlide(nextIndex);
        }

        // Navigation buttons
        document.querySelector(".testimonial-nav-btn.prev")?.addEventListener("click", () => changeSlide(-1));
        document.querySelector(".testimonial-nav-btn.next")?.addEventListener("click", () => changeSlide(1));

        // Dots navigation
        dots.forEach((dot, i) => {
            dot.addEventListener("click", () => showSlide(i));
        });
    }

    // carousel du process dans page produit
    const processCarousel = document.querySelector(".process-carousel");
    if (processCarousel) {
        const slides = processCarousel.querySelectorAll(".process-slide");
        const dots = processCarousel.querySelectorAll(".process-dot");
        let currentIndex = 0;

        function showProcessSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.toggle("active", i === index);
            });

            dots.forEach((dot, i) => {
                dot.classList.toggle("active", i === index);
            });

            currentIndex = index;
        }

        // Dots navigation pour le carousel process
        dots.forEach((dot, i) => {
            dot.addEventListener("click", () => showProcessSlide(i));
        });
    }
});
