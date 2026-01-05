// Hamburger menu toggle
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

// Return to start button
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.createElement('button');
  btn.id = 'backToTop';
  btn.textContent = '↑';

  document.body.appendChild(btn);

  window.addEventListener('scroll', () => {
    btn.classList.toggle('show', window.scrollY > 200);
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

// Refresh & go back to top
window.addEventListener('load', () => {
  if (window.location.hash) {
    window.scrollTo(0, 0);
    history.replaceState(null, null, window.location.pathname);
  }
});
