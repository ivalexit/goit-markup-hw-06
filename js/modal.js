(() => {
  // Модальне вікно
  const modalRefs = {
    openModalButtons: document.querySelectorAll('[data-dialog-open]'),
    closeModalButton: document.querySelector('[data-dialog-close]'),
    modal: document.querySelector('[data-dialog]'),
  };

  // Відкриття модального вікна
  modalRefs.openModalButtons.forEach((button) =>
    button.addEventListener('click', () => toggleModal(modalRefs))
  );

  // Закриття модального вікна через кнопку
  modalRefs.closeModalButton?.addEventListener('click', () =>
    toggleModal(modalRefs)
  );

  // Закриття модального вікна по кліку на бекдроп
  modalRefs.modal?.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
      closeModal(modalRefs);
    }
  });

  // Закриття модального вікна по клавіші Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalRefs.modal?.classList.contains('is-hidden') === false) {
      closeModal(modalRefs);
    }
  });

  // Тогл класів для модального вікна
  function toggleModal(refs) {
    refs.modal.classList.toggle('is-hidden');
    document.body.classList.toggle('no-scroll');
  }

  // Закриття модального вікна
  function closeModal(refs) {
    refs.modal.classList.add('is-hidden');
    document.body.classList.remove('no-scroll');
  }

  // Мобільне меню
  const menuRefs = {
    openMenuButton: document.querySelector('.dialog-open-btn'),
    closeMenuButton: document.querySelector('.dialog-close-menu-btn'),
    mobileMenu: document.querySelector('.dialog-menu'),
  };

  // Відкриття/закриття мобільного меню
  menuRefs.openMenuButton?.addEventListener('click', () =>
    toggleMenu(menuRefs)
  );

  // Закриття мобільного меню через кнопку
  menuRefs.closeMenuButton?.addEventListener('click', () =>
    closeMenu(menuRefs)
  );

  // Тогл класів для мобільного меню
  function toggleMenu(refs) {
    refs.mobileMenu.classList.toggle('is-open');
  }

  // Закриття мобільного меню
  function closeMenu(refs) {
    refs.mobileMenu.classList.remove('is-open');
  }
})();