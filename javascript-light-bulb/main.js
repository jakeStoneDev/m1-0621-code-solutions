var colorCircle = document.querySelector('.circle');
var background = document.querySelector('.main-container');

function turnON(click) {
  if (colorCircle.className === 'circle off') {
    colorCircle.className = 'circle on';
    background.className = 'main-container lightness';

  } else if (colorCircle.className !== 'circle off') {
    colorCircle.className = 'circle off';
    background.className = 'main-container darkness';
  }
}
colorCircle.addEventListener('click', turnON);
