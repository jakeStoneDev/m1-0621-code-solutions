function biggestNum(num1, num2, num3) {
  var maximumValue = Math.max(num1, num2, num3);
  console.log('biggestNum result: ', maximumValue);
}
biggestNum(10, 20, 30);

function favHeroes(array) {
  var randomNumber = Math.random();
  var randomIndex = Math.floor(randomNumber * array.length);
  var randomHero = array[randomIndex];
  console.log('The value of randomHero: ', randomHero);
}
favHeroes(['Deadpool', 'Batman', 'Venom', 'Spiderman']);

function bookMethod(library) {
  var lastBook = library.pop();
  console.log('Value of lastBook: ', lastBook);
  var firstBook = library.shift();
  console.log('Value of firstBook: ', firstBook);
  library.push({
    title: 'JavaScript for Impatient Programmers',
    author: 'Dr. Axel Rauschmayer'
  });

  library.unshift({
    title: 'CSS Secrets',
    author: 'Lea Verou'
  });

  library.splice(1, 1);
  console.log('Current library: ', library);
}

bookMethod([{
  title: 'Star Wars',
  author: 'George Lucas'
},
{
  title: 'Lord of The Rings',
  author: 'JRR Tolkein'
},
{
  title: 'Harry Potter',
  author: 'JK Rowling'
}]);

var fullName = 'Jacob Stone';
var firstAndLastName = fullName.split(' ');
console.log(firstAndLastName);
var firstName = firstAndLastName[0];

var sayMyName = firstName.toUpperCase();
console.log(sayMyName);
