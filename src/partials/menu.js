import menu from '../menu.json';
import menuTemplete from '../templates/food-card-template.hbs';

const buildMenu = function () {
  const markup = menu.map(dish => menuTemplete(dish)).join('');
  return markup;
};
export default buildMenu(menu);
