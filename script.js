// Animazione allo scroll per testi
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Effetto Parallasse per Fiori e Rondini
window.addEventListener('scroll', () => {
    const scroll = window.pageYOffset;
    
    document.querySelectorAll('.flower').forEach(f => {
        f.style.transform = `translateY(${scroll * 0.2}px) rotate(${scroll * 0.1}deg)`;
    });
    
    document.querySelectorAll('.bird').forEach(b => {
        b.style.transform = `translateX(${scroll * 0.1}px) translateY(${scroll * -0.1}px)`;
    });
});

// Titolo Hero reveal
window.addEventListener('load', () => {
    document.querySelector('.hero-content').style.opacity = '1';
});
