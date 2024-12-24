(() => {
  const refs = {
    openModalBtn: document.querySelectorAll('[data-dialog-open]'),
    closeModalBtn: document.querySelector('[data-dialog-close]'),
    modal: document.querySelector('[data-dialog]'),
  };

  // Відкривання модального вікна
  refs.openModalBtn.forEach((button) => {
    button.addEventListener('click', toggleModal);
  });


  // Знайти кнопку і меню
  const openMenuButton = document.querySelector('.dialog-open-btn');
  const mobileMenu = document.querySelector('.dialog-menu');

// Додати слухач подій на кнопку
  openMenuButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('is-open');
});

  // Закривання модального вікна через кнопку
  refs.closeModalBtn.addEventListener('click', toggleModal);

  // Закривання по кліку на бекдроп
  refs.modal.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
      refs.modal.classList.add('is-hidden');
      document.body.classList.remove('no-scroll');
    }
  });

  // Закривання по клавіші Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !refs.modal.classList.contains('is-hidden')) {
      refs.modal.classList.add('is-hidden');
      document.body.classList.remove('no-scroll');
    }
  });

  // Тогл класів для відображення/приховування модального вікна
  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    document.body.classList.toggle('no-scroll'); // Заборона прокрутки сторінки
  }
})();