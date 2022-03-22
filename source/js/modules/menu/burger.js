// Блокировка прокрутки и скачка ====================================================================================================================================================================================================================================================================================
export let bodyLockStatus = true;
export let bodyLockToggle = (delay = 500) => {
  if (document.documentElement.classList.contains('lock')) {
    bodyUnlock(delay);
  } else {
    bodyLock(delay);
  }
};

export let bodyUnlock = (delay = 500) => {
  let body = document.querySelector('body');
  if (bodyLockStatus) {
    let lockPadding = document.querySelectorAll('[data-lp]');
    setTimeout(() => {
      for (let index = 0; index < lockPadding.length; index++) {
        const el = lockPadding[index];
        el.style.paddingRight = '0px';
      }
      body.style.paddingRight = '0px';
      document.documentElement.classList.remove('lock');
    }, delay);
    bodyLockStatus = false;
    setTimeout(function () {
      bodyLockStatus = true;
    }, delay);
  }
};

export let bodyLock = (delay = 500) => {
  let body = document.querySelector('body');
  if (bodyLockStatus) {
    let lockPadding = document.querySelectorAll('[data-lp]');
    for (let index = 0; index < lockPadding.length; index++) {
      const el = lockPadding[index];
      el.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
    }
    body.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
    document.documentElement.classList.add('lock');

    bodyLockStatus = false;
    setTimeout(function () {
      bodyLockStatus = true;
    }, delay);
  }
};

// Модуль работы с меню (бургер) =======================================================================================================================================================================================================================
const initMenu = () => {
  document.querySelector('html').classList.remove('nojs');
  let iconMenu = document.querySelector('.icon-menu');
  if (iconMenu) {
    iconMenu.addEventListener('click', function () {
      if (bodyLockStatus) {
        bodyLockToggle();
        document.documentElement.classList.toggle('menu-open');
      }
    });
  }
};

export {initMenu};
