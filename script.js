const navLinks = [...document.querySelectorAll('.nav a')];
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);

const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const themeToggle = document.getElementById('themeToggle');

const applyTheme = (theme) => {
  if (theme === 'dark') {
    document.body.classList.add('dark-theme');
    if (themeToggle) {
      themeToggle.textContent = '☀️';
      themeToggle.setAttribute('aria-label', 'Switch to light mode');
      themeToggle.setAttribute('title', 'Switch to light mode');
    }
    return;
  }

  document.body.classList.remove('dark-theme');
  if (themeToggle) {
    themeToggle.textContent = '🌙';
    themeToggle.setAttribute('aria-label', 'Switch to dark mode');
    themeToggle.setAttribute('title', 'Switch to dark mode');
  }
};

const storedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
applyTheme(storedTheme || (prefersDark ? 'dark' : 'light'));

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const isDark = document.body.classList.contains('dark-theme');
    const nextTheme = isDark ? 'light' : 'dark';
    applyTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);
  });
}

if (menuToggle && navMenu) {
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
    });
  });
}

const setActiveLink = () => {
  const scrollY = window.scrollY + 120;

  sections.forEach((section, index) => {
    const top = section.offsetTop;
    const height = section.offsetHeight;

    if (scrollY >= top && scrollY < top + height) {
      navLinks.forEach((link) => link.classList.remove('active'));
      navLinks[index]?.classList.add('active');
    }
  });
};

window.addEventListener('scroll', setActiveLink);
window.addEventListener('load', setActiveLink);

document.getElementById('year').textContent = new Date().getFullYear();
