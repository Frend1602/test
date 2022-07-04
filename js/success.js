const buttonbBuy = document.querySelector('.button-buy');
const successPop = document.querySelector('.success');
const successClose = successPop.querySelector('.modal-close');
const cont = successPop.querySelector('.button:nth-child(2');

buttonbBuy.addEventListener('click', function (evt) {
  evt.preventDefault();
  successPop.classList.add('modal-show-grid');
});

successClose.addEventListener('click', function () {
  successPop.classList.remove('modal-show-grid');
});

cont.addEventListener('click', function () {
  successPop.classList.remove('modal-show-grid');
});
