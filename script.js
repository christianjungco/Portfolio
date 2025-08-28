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

// Projects data
const projects = [
  { id: 1, title: "Arid Green", subtitle: "Animation • Brand • Art Direction", video: "assets/project1.mp4" },
  { id: 2, title: "Jelly Fish Chair", subtitle: "Animation • Brand • Art Direction", video: "assets/project2.mp4" },
  { id: 3, title: "Hawaii Residential Solar", subtitle: "Animation • Brand • Art Direction", video: "assets/project3.mp4" },
  { id: 4, title: "Mr. House", subtitle: "Animation • Brand • Art Direction", video: "assets/project4.mp4" },
  { id: 5, title: "La Vina App", subtitle: "Animation • Brand • Art Direction", video: "assets/project5.mp4" },
  { id: 6, title: "Ey Bright Tree", subtitle: "Animation • Brand • Art Direction", video: "assets/project6.mp4" },
  { id: 7, title: "Radium", subtitle: "Animation • Brand • Art Direction", video: "assets/project7.mp4" },
  { id: 8, title: "Security Risk", subtitle: "Animation • Brand • Art Direction", video: "assets/project8.mp4" }
];

// Render projects
const grid = document.getElementById('projects-grid');
projects.forEach(p => {
  const a = document.createElement('a');
  a.href = "#";
  a.className = "group block rounded-lg overflow-hidden border border-gray-800 bg-[#111111] transform transition-all hover:scale-[1.01]";
  a.innerHTML = `
    <div class="relative h-48 md:h-56 lg:h-48 bg-gray-800">
      <video class="project-video" playsinline muted loop preload="metadata">
        <source src="${p.video}" type="video/mp4">
      </video>
      <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity"></div>
    </div>
    <div class="p-4">
      <div class="text-sm font-medium">${p.title}</div>
      <div class="text-xs opacity-60 mt-1">${p.subtitle}</div>
    </div>
  `;
  grid.appendChild(a);

  const vid = a.querySelector('video');
  if (vid) {
    vid.muted = true;
    vid.loop = true;
    vid.play().catch(() => {});
  }
});

// Experience data
const experiences = [
  { logo: "assets/logo1.jpg", quote: "Collaborated with Gateway Gears...", author: "Gateway Gears — Art Director | Animator" },
  { logo: "assets/logo1.jpg", quote: "Served as a 2D animator for marketing videos...", author: "Iconique Mall Colon — 2D Animator | Graphic Artist | Video Editor (Mar 2023)" },
  { logo: "assets/logo2.jpg", quote: "Collaborated with Toonstar for nearly five years...", author: "Toonstar (Fieldspar Studio) — 2D Animator (Aug 2018 – Nov 2022)" },
  { logo: "assets/logo3.jpg", quote: "Embarked on a freelance journey...", author: "Upwork — 2D Animator | Graphic Designer | Video Producer | Video Editor (2015 – 2017)" },
  { logo: "assets/logo4.jpg", quote: "As one of the pioneer students at Emottoons Studio...", author: "Emottoons Studio — 2D Animator | Graphic Designer (2010 – 2014)" }
];

let expIndex = 0;
function showExperience() {
  const e = experiences[expIndex];
  document.getElementById('experience-quote').innerText = `“${e.quote}”`;
  document.getElementById('experience-author').innerText = e.author;
  document.getElementById('experience-logo').src = e.logo;
}
document.getElementById('prev-exp').addEventListener('click', () => { expIndex = (expIndex - 1 + experiences.length) % experiences.length; showExperience(); });
document.getElementById('next-exp').addEventListener('click', () => { expIndex = (expIndex + 1) % experiences.length; showExperience(); });
showExperience();

// Hero video
(function setupHeroMedia() {
  const el = document.getElementById('hero-media');
  const vid = document.createElement('video');
  vid.className = 'w-full h-full rounded-xl project-video';
  vid.playsInline = true;
  vid.muted = true;
  vid.loop = true;
  vid.preload = 'metadata';

  const src = document.createElement('source');
  src.src = 'assets/hero-preview.mp4';
  src.type = 'video/mp4';
  vid.appendChild(src);

  el.innerHTML = '';
  el.appendChild(vid);
  vid.addEventListener('loadedmetadata', () => vid.play().catch(() => {}));
})();

// Contact form
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('form-result').classList.remove('hidden');
  setTimeout(() => document.getElementById('form-result').classList.add('hidden'), 3500);
  this.reset();
});

// Set year
document.getElementById('year').innerText = new Date().getFullYear();


