(function() {
  const header = document.querySelector('.page__header');
  const toggle = header.querySelector('.main-nav__toggle');
  const menu = header.querySelector('.main-nav__list');
  const nav = header.querySelector('.main-nav');

  const setUpJSMenu = () => {
    menu.classList.remove('main-nav__list--no-js');
    header.classList.remove('page-header--no-js');
    nav.classList.remove('main-nav--no-js');
    toggle.classList.remove('main-nav__toggle--no-js');
  }

  const handleToggleClick = () => {
    menu.classList.toggle('main-nav__list--open');
    toggle.classList.toggle('main-nav__toggle--close');
  };

  setUpJSMenu();
  toggle.addEventListener('click', handleToggleClick);
})();

(function() {
  const mapBox = document.querySelector('.contacts__map-box');
  const mapImage = mapBox.querySelector('.contacts__map-image');
  const map = mapBox.querySelector('.contacts__map');

  mapImage.classList.remove('contacts__map-image--no-js');
  map.classList.remove('contacts__map--no-js');
})();

(function() {
  const modal = document.querySelector('.modal');
  const orderButton = document.querySelector('.promo-product__action');
  const submitButton = document.querySelector('.cart-form__submit');

  if (!modal || !orderButton || !submitButton) {
    return;
  }

  const orderButtonClickHandler = () => {
    modal.classList.add('modal--open');
  }

  const submitButtonClickHandler = (evt) => {
    evt.preventDefault();
    modal.classList.remove('modal--open');
  }

  orderButton.addEventListener('click', orderButtonClickHandler);
  submitButton.addEventListener('click', submitButtonClickHandler);
})();
