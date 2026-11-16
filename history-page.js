(() => {
  const button=document.querySelector('.menu-toggle');
  const nav=document.querySelector('#main-nav');
  document.documentElement.classList.add('js');
  const close=()=>{button.setAttribute('aria-expanded','false');nav.classList.remove('is-open');};
  button.addEventListener('click',()=>{const open=button.getAttribute('aria-expanded')!=='true';button.setAttribute('aria-expanded',String(open));nav.classList.toggle('is-open',open);});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav.classList.contains('is-open')){close();button.focus();}});
  document.addEventListener('click',e=>{if(!e.target.closest('.site-header'))close();});
  document.querySelector('.site-header').addEventListener('focusout',e=>{if(!e.currentTarget.contains(e.relatedTarget))close();});
  matchMedia('(max-width:800px)').addEventListener('change',close);
  document.querySelector('#year').textContent=new Date().getFullYear();
})();

// Activate return links on the first touch; ignore swipes and multi-touch.
document.querySelectorAll('.greeting-return a, .history-return a').forEach(link => {
  let start = null;
  link.addEventListener('touchstart', event => {
    const touch = event.touches[0];
    start = event.touches.length === 1 ? {x:touch.clientX, y:touch.clientY} : null;
  }, {passive:true});
  link.addEventListener('touchmove', event => {
    const touch = event.touches[0];
    if (start && (event.touches.length !== 1 || Math.hypot(touch.clientX-start.x,touch.clientY-start.y)>10)) start=null;
  }, {passive:true});
  link.addEventListener('touchcancel', () => {start=null;}, {passive:true});
  link.addEventListener('touchend', event => {
    if (!start || event.touches.length) return;
    start=null;
    event.preventDefault();
    window.location.assign(link.href);
  }, {passive:false});
});
