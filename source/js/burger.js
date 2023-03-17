const buttonMenu = document.querySelector('.header__link--menu');
const menu = document.querySelector('.burger');
const menuClose = document.querySelector('.header__link--close');

buttonMenu.addEventListener("click", () => {
  menu.classList.add('burger__open');
  buttonMenu.classList.add('header__swap');
  menuClose.classList.remove('header__swap');
  input.focus();
});

menuClose.addEventListener("click", () => {
  menu.classList.remove('burger__open');
  menuClose.classList.add('header__swap');
  buttonMenu.classList.remove('header__swap');
  input.focus();
});
