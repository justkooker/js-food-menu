import menu from './partials/menu';
import markup from './partials/menu';
import themeSwitcher from './modules/themeSwitcher';
import './css/styles.css';
const refs = {
  menu: document.querySelector('.menu'),
};
refs.menu.insertAdjacentHTML('beforeend', markup);
