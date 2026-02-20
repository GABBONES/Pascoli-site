// Apparizione sezioni con sfocatura
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal-section').forEach(section => observer.observe(section));

// Effetto sfocatura dinamica dello sfondo allo scroll
window.addEventListener('scroll', () => {
    const scrollVal = window.scrollY;
    const blurAmount = Math.min(scrollVal / 100, 5); // Aumenta il blur man mano che scendi
    // document.querySelector('.blur-overlay').style.backdropFilter = `blur(${blurAmount}px)`;
});
