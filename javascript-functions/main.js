function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  console.log(minutes + ' minutes is = to ' + seconds + ' seconds.');
}
convertMinutesToSeconds(4);

function greet(name) {
  var hello = 'Hello there ' + name + '! it is so great to meet you!';
  console.log(hello);
}
greet('Jake');

function getArea(width, height) {
  var product = width * height;
  console.log('The area is: ', product);
}
getArea(2, 9);

function getFirstName(person) {
  var firstName = [person.firstName];
  console.log('This is the value of firstName: ', firstName);
}
getFirstName({
  firstName: 'Jacob',
  lastName: 'Stone'
});

function getLastElement(array) {
  var lastElement = array[array.length - 1];
  console.log('This is the lastElement in the array: ', lastElement);
}

getLastElement(['Dogs', 'Cats', 'Fish', 'Rabbits']);
