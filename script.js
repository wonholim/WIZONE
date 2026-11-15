(() => {
  'use strict';
  document.documentElement.classList.add('js');
  const header = document.querySelector('.site-header');
  const nav = document.querySelector('#main-nav');
  const menu = document.querySelector('.menu-toggle');
  const mobile = matchMedia('(max-width: 800px)');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const closeMenu = (focus = false) => {
    menu.setAttribute('aria-expanded', 'false');
    nav.classList.remove('is-open');
    if (focus) menu.focus();
  };
  menu.addEventListener('click', () => {
    const open = menu.getAttribute('aria-expanded') !== 'true';
    menu.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('is-open', open);
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && nav.classList.contains('is-open')) closeMenu(true);
  });
  document.addEventListener('click', e => { if (!header.contains(e.target)) closeMenu(); });
  header.addEventListener('focusout', e => { if (!header.contains(e.relatedTarget)) closeMenu(); });
  nav.addEventListener('click', e => {
    const link = e.target.closest('a');
    if (!link) return;
    closeMenu();
    if (mobile.matches) {
      const target = document.querySelector(link.getAttribute('href'));
      target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll:true });
      target.addEventListener('blur', () => target.removeAttribute('tabindex'), { once:true });
    }
  });
  mobile.addEventListener('change', () => closeMenu());
  document.querySelector('#year').textContent = new Date().getFullYear();



  const hero = document.querySelector('.video-hero');
  const video = document.querySelector('#hero-video');
  let userPaused = reduced.matches;
  const connection = navigator.connection;
  let inView = true;
  let playbackRequest = 0;
  async function syncVideo() {
    const request=++playbackRequest;
    if(userPaused || !inView || document.hidden || connection?.saveData){video.pause();return;}
    if (!video.getAttribute('src')) {
      const small = mobile.matches || ['slow-2g', '2g', '3g'].includes(connection?.effectiveType);
      video.src = small ? 'assets/media/hero-mobile-fast.mp4' : 'assets/media/hero-desktop.mp4';
    }
    try { await video.play();if(request!==playbackRequest && (userPaused||!inView||document.hidden))video.pause(); } catch { /* Browser may require the play button. */ }
  }
  if(reduced.matches){video.autoplay=false;video.pause();}
  reduced.addEventListener('change',()=>{userPaused=reduced.matches;syncVideo();});
  document.addEventListener('visibilitychange',syncVideo);
  new IntersectionObserver(entries=>{inView=entries[0].isIntersecting;header.classList.toggle('header-on-video',inView);syncVideo();},{threshold:0}).observe(hero);
  header.classList.add('header-on-video');
  syncVideo();

})();
