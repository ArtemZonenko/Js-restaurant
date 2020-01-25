const page = document.querySelector('.page');
const openModalBtn = document.querySelector('.js-open-modal');
const closeModalBtn = document.querySelector(
  'button[data-action="close-modal-reservation"]',
);
const closeModalMouseClose = document.querySelector(
  'div[data-action="modal-close-mouse"]',
);

openModalBtn.addEventListener('click', handleClickOpenPhone);
closeModalBtn.addEventListener('click', handleClickClosePhone);
closeModalMouseClose.addEventListener('click', handleClickCloseMousePhone);

function handleClickOpenPhone() {
  page.classList.add('show-modal');

  window.addEventListener('keydown', handleModalEckDown);
}

function handleClickClosePhone() {
  page.classList.remove('show-modal');

  window.removeEventListener('keydown', handleModalEckDown);
}

function handleClickCloseMousePhone() {
  page.classList.remove('show-modal');

  window.removeEventListener('keydown', handleModalEckDown);
}

function handleModalEckDown(evt) {
  const key = evt.code;

  if (key === 'Escape') {
    handleClickClosePhone();
  }
}

///////////
