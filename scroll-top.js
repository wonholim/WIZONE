(() => {
  const button = document.querySelector('.scroll-top');
  const footer = document.querySelector('.site-footer');
  if (!button || !footer) return;
  new IntersectionObserver(entries => {
    button.hidden = !entries[0].isIntersecting;
  }).observe(footer);
  button.addEventListener('click', () => {
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      const root = document.documentElement;
      const previous = root.style.scrollBehavior;
      root.style.scrollBehavior = 'auto';
      window.scrollTo({top: 0, behavior: 'instant'});
      root.style.scrollBehavior = previous;
    } else {
      window.scrollTo({top: 0, behavior: 'smooth'});
    }
  });
})();
