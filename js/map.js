const modalMap = document.querySelector('.map');
const mapButton = document.querySelector('.contacts-r img');
const mapClose = modalMap.querySelector('.modal-close');

mapButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalMap.classList.add('modal-show');
});

mapClose.addEventListener('click', function () {
  modalMap.classList.remove('modal-show');
});
