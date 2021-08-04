var clicks = 0;

var hotButton = document.querySelector('.hot-button');
var numClicks = document.querySelector('.click-count');

function clickResponse(click) {

  numClicks.textContent = 'Clicks: ' + clicks;
  clicks++;

  if (clicks < 4) {
    hotButton.className = 'hot-button cold';
  } else if (clicks < 7) {
    hotButton.className = 'hot-button cool';
  } else if (clicks < 10) {
    hotButton.className = 'hot-button tepid';
  } else if (clicks < 13) {
    hotButton.className = 'hot-button warm';
  } else if (clicks < 16) {
    hotButton.className = 'hot-button hot';
  } else if (clicks > 16) {
    hotButton.className = 'hot-button nuclear';
  }
}

hotButton.addEventListener('click', clickResponse);
