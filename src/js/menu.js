// (() => {
//   const refs = {
//     // Додати атрибут data-modal-open на кнопку відкриття
//     openModalBtn: document.querySelector('[data-menu-open]'),
//     // Додати атрибут data-modal-close на кнопку закриття
//     closeModalBtn: document.querySelector('[data-menu-close]'),
//     // Додати атрибут data-modal на бекдроп модалки
//     modal: document.querySelector('[data-menu]'),
//   };

//   refs.openModalBtn.addEventListener('click', toggleModal);
//   refs.closeModalBtn.addEventListener('click', toggleModal);

//   function toggleModal() {
//     // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
//     refs.modal.classList.toggle('is-open');
//   }
  
// })();

const menuSection = document.getElementById('mobile-menu');
const closeBtn = document.getElementById('data-burger-close');

// Закриття меню по кнопці
closeBtn.addEventListener('click', () => {
  menuSection.classList.remove('is-open');
});

// Відкриття меню по бургер-кнопці
const openBtn = document.getElementById('data-burger-open');
openBtn.addEventListener('click', () => {
  menuSection.classList.add('is-open');
});

// Закриття меню при кліку на пункт меню
const menuLinks = document.querySelectorAll('.nav-link');
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menuSection.classList.remove('is-open');
  });
});