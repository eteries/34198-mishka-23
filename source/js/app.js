const toggle = document.querySelector('.main-nav__toggle');
const menu = document.querySelector('.main-nav__list');

const handleToggleClick = () => {
  menu.classList.toggle('main-nav__list--visible')
};

toggle.addEventListener('click', handleToggleClick);
