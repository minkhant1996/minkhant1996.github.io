const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if ('IntersectionObserver' in window && !reducedMotion.matches) {
  const targets = document.querySelectorAll(
    '.hero-copy, .hero-visual, .section-heading, .project-card, .about-content, ' +
    '.capabilities article, .timeline article, .education-list article, .contact-main, ' +
    '.subpage-hero, .detail-grid, .case-card, .list-card, .note-panel, .contact-option'
  );

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

  targets.forEach((target, index) => {
    target.classList.add('reveal');
    target.style.setProperty('--reveal-delay', `${(index % 4) * 65}ms`);
    observer.observe(target);
  });

  document.documentElement.classList.add('motion-enabled');
}
