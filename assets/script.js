const nav = document.getElementById('nav');
window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 40));
document.getElementById('year').textContent = new Date().getFullYear();
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{ if(entry.isIntersecting) entry.target.classList.add('in'); });
},{threshold:.14});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
