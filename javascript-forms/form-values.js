var contact = document.getElementById('contact-form');
var obj = {
  name: '',
  email: '',
  message: ''
};

function submitEvent(event) {
  event.preventDefault();
  obj.name = contact.elements.name.value;
  obj.email = contact.elements.email.value;
  obj.message = contact.elements.message.value;
  console.log(contact.elements.email.value);

  // obj.push(document);
  console.log(obj);
  contact.reset();
}
contact.addEventListener('submit', submitEvent);
