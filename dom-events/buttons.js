function handleClick(event) {
  console.log('button clicked');
  console.log(event);
  console.log(event.target);
}
var elementsC = document.getElementsByClassName('click-button');
for (var i = 0; i < elementsC.length; i++) {
  elementsC[i].addEventListener('click', handleClick);
}

function handleMouseover(event) {
  console.log('button hovered');
  console.log(event);
  console.log(event.target);
}
var elementsH = document.getElementsByClassName('hover-button');
for (var x = 0; x < elementsH.length; x++) {
  elementsH[x].addEventListener('mouseover', handleMouseover);
}

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log(event);
  console.log(event.target);
}
var elementsDC = document.getElementsByClassName('double-click-button');
for (var y = 0; y < elementsDC.length; y++) {
  elementsDC[y].addEventListener('dblclick', handleDoubleClick);
}
