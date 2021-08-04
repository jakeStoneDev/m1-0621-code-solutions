var modalButton = document.querySelector('.blue-button');
var modalBackground = document.querySelector('.modal-background');
var closeButton = document.querySelector('.modal-button');
function onClick() {
  modalBackground.className = 'modal-background';
}
modalButton.addEventListener('click', onClick);

function closeClick() {
  modalBackground.className = 'modal-background hidden';
}
closeButton.addEventListener('click', closeClick);
