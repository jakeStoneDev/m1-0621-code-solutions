/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */

var numbers = [];
var currentNumber = 1;
function getNumbersToTen() {
  while (currentNumber < 11) {
    numbers.push(currentNumber);
    currentNumber++;
  }
  console.log('Value of numbers: ', numbers);
  return numbers;
}
getNumbersToTen();

var evenNumbers = [];
var currentEvenNumber = 2;
function getEvenNumbersToTwenty() {
  while (currentEvenNumber < 22) {
    evenNumbers.push(currentEvenNumber);
    currentEvenNumber += 2;
  }
  console.log('Value of evenNumbers: ', evenNumbers);
  return evenNumbers;
}
getEvenNumbersToTwenty();

function repeatWord(word, times) {
  var count = 1;
  var repeated = ' ';
  while (count < times) {
    repeated += word + ' ';
    count++;
  }
  console.log('Value of repeated: ', repeated);
  console.log('Value of times: ', times);
  return repeated;

}
repeatWord('Hello', 5);

function logEachCharacter(string) {
  for (var i = 0; i < string.length; i++) {
    console.log('Log each character: ', string[i]);
  }
}

logEachCharacter('Jacob');

function doubleAll(numbers) {
  var doubled = [];
  for (var i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] + numbers[i]);
  }
  console.log('Value of double all: ', doubled);
  return doubled;
}
doubleAll([2, 3, 4, 5]);

function getKeys(object) {
  var keys = [];
  for (var key in object) {
    keys.push(key);
  }
  console.log('Value of keys: ', keys);
  return keys;
}
getKeys({
  Hello: 'Hello',
  Bye: 'Goodbye',
  SeeYa: 'Later'
});

getKeys(
  {
    make: 'DeLorean',
    model: 'DMC',
    year: 1982
  });
