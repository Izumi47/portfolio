const navLinks = [...document.querySelectorAll('.nav a')];
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);

const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

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
