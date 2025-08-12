// Simple Testimonials Carousel
document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");
    let scrollAmount = 0;
    const scrollStep = 320; // pixels to scroll per step

    setInterval(() => {
        if (carousel.scrollWidth - carousel.clientWidth <= scrollAmount) {
            scrollAmount = 0; // Reset to start
        } else {
            scrollAmount += scrollStep;
        }
        carousel.scrollTo({
            left: scrollAmount,
            behavior: "smooth"
        });
    }, 3000); // Change testimonial every 3 seconds
});

// Fade-in animation for sections
const sections = document.querySelectorAll("section");

const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < triggerBottom) {
            section.classList.add("visible");
        }
    });
};

window.addEventListener("scroll", revealOnScroll);

// Initial reveal
revealOnScroll();
