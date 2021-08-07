var textInput1 = document.getElementById('user-name');
var textInput2 = document.getElementById('user-email');
var textArea = document.getElementById('user-message');

function handleFocus(event) {
  console.log('focus event fired');
  console.log('focus on: ', event.target.name);
}

textInput1.addEventListener('focus', handleFocus);
textInput2.addEventListener('focus', handleFocus);
textArea.addEventListener('focus', handleFocus);

function handleBlur(event) {
  console.log('blur event fired');
  console.log('lost focus on: ', event.target.name);
}

textInput1.addEventListener('blur', handleBlur);
textInput2.addEventListener('blur', handleBlur);
textArea.addEventListener('blur', handleBlur);

function handleInput(event) {
  console.log('Input name: ', event.target.name);
  console.log('Input value: ', event.target.value);
}

textInput1.addEventListener('input', handleInput);
textInput2.addEventListener('input', handleInput);
textArea.addEventListener('input', handleInput);
