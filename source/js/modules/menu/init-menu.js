import {Menu} from './menu';

let menu;

const settings = {
  'default': {
    preventDefault: true,
    stopPlay: true,
    lockFocus: true,
    startFocus: true,
    focusBack: true,
    eventTimeout: 400,
    openCallback: false,
    closeCallback: false,
  },
};

const initMenu = () => {
  menu = new Menu(settings);
  window.menu = menu;
};

export {menu, initMenu};
