const reveals = document.querySelectorAll(
    ".glass-card, .project-card, .service-card, .stat-card, .hero-card, .skill-pill"
);

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    },
    { threshold: 0.15 }
);

reveals.forEach((item) => {
    item.style.opacity = "0";
    item.style.transform = "translateY(18px)";
    item.style.transition = "opacity 0.7s ease, transform 0.7s ease";
    observer.observe(item);
});