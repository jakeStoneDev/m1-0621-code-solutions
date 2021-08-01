function handleClick(event) {
  console.log('button clicked');
  console.log(event);
  console.log(event.target);
}
var elementObj = document.getElementsByClassName('click-button');
elementObj.addEventListener('Click', handleClick);
