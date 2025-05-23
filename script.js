const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle nav
        nav.classList.toggle('open');

        // Animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Burger animation
        burger.classList.toggle('toggle');
    });
}

const navLinkFade = () => {
    const navLinks = document.querySelectorAll('.nav-links li');
    navLinks.forEach((link, index) => {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
    });
}

// Simple gallery load more functionality
const gallerySection = document.getElementById('gallery');
const galleryGrid = gallerySection.querySelector('.gallery-grid');
const loadMoreButton = gallerySection.querySelector('.load-more');
let visibleImages = 6; // Initial number of visible images

if (loadMoreButton) {
    loadMoreButton.addEventListener('click', () => {
        const allImages = galleryGrid.querySelectorAll('img');
        const imagesToLoad = Math.min(allImages.length - visibleImages, 6); // Load up to 6 more images

        for (let i = visibleImages; i < visibleImages + imagesToLoad; i++) {
            if (allImages[i]) {
                allImages[i].style.display = 'block'; // Or any other display style like 'inline-block'
            }
        }

        visibleImages += imagesToLoad;

        if (visibleImages >= allImages.length) {
            loadMoreButton.style.display = 'none'; // Hide button when all images are visible
        }
    });

    // Initially hide images beyond the first 'visibleImages'
    const initialImages = galleryGrid.querySelectorAll('img');
    for (let i = visibleImages; i < initialImages.length; i++) {
        initialImages[i].style.display = 'none';
    }

    // Hide load more button if there are initially fewer than or equal to visibleImages
    if (initialImages.length <= visibleImages) {
        loadMoreButton.style.display = 'none';
    }
}

// Basic smooth scrolling for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

        // Close the navigation menu on mobile after clicking a link
        const nav = document.querySelector('.nav-links');
        const burger = document.querySelector('.burger');
        if (nav.classList.contains('open')) {
            nav.classList.remove('open');
            burger.classList.remove('toggle');
        }
    });
});

// Initialize navigation functionality
navSlide();