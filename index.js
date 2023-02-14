const faBars = document.querySelector('.fa-bars');
const menuToggle = document.querySelector('.menu-toggle');
const bodyContainer = document.querySelector('.body');
const faX = document.querySelector('.fa-x');
const menuToggleAnchor = document.querySelector('.toggle-nav');

faBars.addEventListener('click', () => {
  bodyContainer.classList.toggle('overflow');
  menuToggle.classList.toggle('max');
});
faX.addEventListener('click', () => {
  bodyContainer.classList.toggle('overflow');
  menuToggle.classList.toggle('max');
});
menuToggleAnchor.addEventListener('click', () => {
  bodyContainer.classList.toggle('overflow');
  menuToggle.classList.toggle('max');
});
