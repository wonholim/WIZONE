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
