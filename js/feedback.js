const feedbackButton = document.querySelector('.feedback');
const modalFeedback = document.querySelector('.modal-feedback');
const feedbackClose = modalFeedback.querySelector('.modal-close');
const feedbackName = modalFeedback.querySelector('#modal-login');
const feedbackEmail = modalFeedback.querySelector('#modal-email');
const feedbackArea = modalFeedback.querySelector('#modal-area');
const feedbackForm = modalFeedback.querySelector('.modal-description');


let isStorage = true;
let strogeN = '';
let storageE = '';
try {
  storageN = localStorage.getItem('name');
  storageE = localStorage.getItem('email');
} catch (err) {
  isStorage = false;
}

feedbackButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalFeedback.classList.add('modal-show');
  if (storageN || storageE) {
    feedbackName.value = storageN;
    feedbackEmail.value = storageE;
    feedbackArea.focus();
  } else {
    feedbackName.focus();
  }
});

feedbackClose.addEventListener('click', function () {
  modalFeedback.classList.remove('modal-show');
  modalFeedback.classList.remove('modal-error');
});

feedbackForm.addEventListener('submit', function (evt) {
  if (!feedbackName.value || !feedbackEmail.value) {
    evt.preventDefault();
    modalFeedback.classList.remove('modal-error');
    modalFeedback.offsetWidth = modalFeedback.offsetWidth;
    modalFeedback.classList.add('modal-error');
  } else {
    if (isStorage) {
      localStorage.setItem('name', feedbackName.value);
      localStorage.setItem('email', feedbackEmail.value);
    }
  }
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (modalFeedback.classList.contains('modal-show')) {
      evt.preventDefault();
      modalFeedback.classList.remove('modal-error');
      modalFeedback.classList.remove('modal-show');
    }
  }
});
