const body = document.querySelector('body');
const switchInput = document.querySelector('.theme-switch__toggle');
const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };
const themeSwitcher = function () {
  if (switchInput.checked === false) {
    body.classList.remove(Theme.DARK);
    body.classList.add(Theme.LIGHT);
  }

  if (switchInput.checked === true) {
    body.classList.remove(Theme.LIGTH);
    body.classList.add(Theme.DARK);
  }
};

switchInput.addEventListener('change', themeSwitcher);