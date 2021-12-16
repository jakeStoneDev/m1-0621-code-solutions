var lettersArray = document.getElementsByClassName('text');
var letterIndex = 0;
function keyDown(event) {
  if (lettersArray[letterIndex].textContent === event.key) {
    lettersArray[letterIndex].className = 'text correct';
    letterIndex++;
    lettersArray[letterIndex].className = 'text underline';
  } else if (event.key === ' ') {
    lettersArray[letterIndex].className = 'text';
    letterIndex++;
  } else {
    lettersArray[letterIndex].className = 'text incorrect';
  }
}

document.addEventListener('keydown', keyDown);
