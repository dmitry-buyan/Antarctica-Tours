const openMenu = () => {
  const modal = document.querySelector('[data-modal]');

  window.addEventListener('click', (evt) => {
    const target = evt.target;

    if (target.closest('[data-open-menu]')) {
      document.querySelector('html').classList.add('scroll-lock');
      document.querySelector('[data-menu]').classList.add('is-active');
      modal.classList.add('is-active');
    }
  });
};

const closeMenu = () => {
  const modal = document.querySelector('[data-modal]');

  window.addEventListener('click', (evt) => {
    const target = evt.target;

    if (target.closest('[data-close-menu]') || target.closest('[data-modal]')) {
      document.querySelector('html').classList.remove('scroll-lock');
      document.querySelector('[data-menu]').classList.remove('is-active');
      modal.classList.remove('is-active');
    }
  });
};

const initMenu = () => {
  openMenu();
  closeMenu();
};

export {initMenu};
