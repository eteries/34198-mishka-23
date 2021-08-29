(function() {
  const toggle = document.querySelector('.main-nav__toggle');
  const menu = document.querySelector('.main-nav__list');

  const handleToggleClick = () => {
    menu.classList.toggle('main-nav__list--visible')
  };

  toggle.addEventListener('click', handleToggleClick);
})();

(function() {
  const modal = document.querySelector('.modal');
  const orderButton = document.querySelector('.promo-product__action');
  const submitButton = document.querySelector('.cart-form__submit');

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
