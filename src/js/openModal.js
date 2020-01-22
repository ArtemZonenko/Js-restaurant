const page = document.querySelector('.page');
const openModalBtn = document.querySelector('.js-open-modal');
const closeModalBtn = document.querySelector(
  'button[data-action="close-modal-reservation"]',
);
const closeModalMouseClose = document.querySelector(
  'div[data-action="modal-close-mouse"]',
);

openModalBtn.addEventListener('click', handleClickOpenReservation);
closeModalBtn.addEventListener('click', handleClickCloseReservation);
closeModalMouseClose.addEventListener('click', handleClickCloseMouse);

function handleClickOpenReservation() {
  page.classList.add('show-modal');

  window.addEventListener('keydown', handleModalEckDown);
}

function handleClickCloseReservation() {
  page.classList.remove('show-modal');

  window.removeEventListener('keydown', handleModalEckDown);
}

function handleClickCloseMouse() {
  page.classList.remove('show-modal');

  window.removeEventListener('keydown', handleModalEckDown);
}

function handleModalEckDown(evt) {
  const key = evt.code;

  if (key === 'Escape') {
    handleClickCloseReservation();
  }
}
