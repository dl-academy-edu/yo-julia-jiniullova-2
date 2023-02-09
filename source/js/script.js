const popup = document.querySelector('.modal');
const buttonOpen = document.querySelector('.button');
const buttonClose = document.querySelector('.modal__close');
const overlay = document.querySelector('.modal__overlay');

buttonOpen.addEventListener("click", () => {
    popup.classList.add('open');
    input.focus();
});

buttonClose.addEventListener("click", () => {
    popup.classList.remove('open');
});

overlay.addEventListener("click", () => {
    popup.classList.remove('open');
});
