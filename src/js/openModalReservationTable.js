const page = document.querySelector('.page');
const openModalReservation = document.querySelector('button[data-action="openModalReserv"]');
const closeModalReservation = document.querySelector(
  'button[data-action="closeModalReservation"]',
);
const closeModalReservationMouse = document.querySelector(
  'div[data-action="closeModalReservationMouse"]',
);

openModalReservation.addEventListener('click', handleClickOpenReservation);
closeModalReservation.addEventListener('click', handleClickCloseReservation);
closeModalReservationMouse.addEventListener('click', handleClickCloseMouseReservation);

function handleClickOpenReservation() {
  page.classList.add('show-modal-reserv');

  window.addEventListener('keydown', handleModalEckDown);
}

function handleClickCloseReservation() {
  page.classList.remove('show-modal-reserv');

  window.removeEventListener('keydown', handleModalEckDown);
}

function handleClickCloseMouseReservation() {
  page.classList.remove('show-modal-reserv');

  window.removeEventListener('keydown', handleModalEckDown);
}

function handleModalEckDown(evt) {
  const key = evt.code;

  if (key === 'Escape') {
    handleClickCloseReservation();
  }
}
