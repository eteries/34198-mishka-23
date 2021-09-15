(function() {
  const toggle = document.querySelector('.main-nav__toggle');
  const menu = document.querySelector('.main-nav__list');

  menu.classList.remove('main-nav__list--visible');

  const handleToggleClick = () => {
    menu.classList.toggle('main-nav__list--visible');
    toggle.classList.toggle('main-nav__toggle--close');
  };

  toggle.addEventListener('click', handleToggleClick);
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
