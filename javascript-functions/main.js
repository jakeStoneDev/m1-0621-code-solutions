function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}
var convertMinutesToSecondsResult = convertMinutesToSeconds(3);
console.log('convertMinutesToSecondsResult: ', convertMinutesToSecondsResult);

function greet(name) {
  var hello = 'Hello there ' + name + '! it is so great to meet you!';
  return hello;
}
var greetResult = greet('Jake');
console.log(greetResult);

function getArea(width, height) {
  var product = width * height;
  return product;
}
var getAreaResult = getArea(2, 9);
console.log('getAreaResult: ', getAreaResult);

function getFirstName(person) {
  var firstName = [person.firstName];
  return firstName;
}

var getFirstNameResult = getFirstName({
  firstName: 'Jacob',
  lastName: 'Stone'
});
console.log('getFirstNameResult: ', getFirstNameResult);

function getLastElement(array) {
  var lastElement = array[array.length - 1];
  return lastElement;
}
var getLastElementResult = getLastElement(['Dogs', 'Cats', 'Fish', 'Rabbits']);
console.log('getLastElementResult: ', getLastElementResult);
