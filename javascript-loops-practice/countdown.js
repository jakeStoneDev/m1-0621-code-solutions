/* exported countdown */
function countdown(number) {
  var numArray = [];
  while (number >= 0) {
    numArray.push(number);
    number--;
  }
  return numArray;
}
countdown(5);

function sumAll(numbers) {
  var sum = 0;
  for (var x = 0; x < numbers.length; x++) {
    sum += numbers[x];
  }
  return sum;
}
sumAll([1, 2, 3]);

function getIndexes(array) {
  var indexArray = [];
  for (var x = 0; x < array.length; x++) {
    indexArray.push(x);
  }
  return indexArray;
}
getIndexes(['index1', 'index2', 'index3']);

function addSuffixToAll(words, suffix) {
  for (var x = 0; x < words.length; x++) {
    words[x] += suffix;
  }
  return words;
}
addSuffixToAll(['index', 'index2', 'index3']);

function getStudentNames(students) {
  var studentArray = [];
  for (var i = 0; i < students.length; i++) {
    studentArray.push(students[i].name);
  }
  return studentArray;
}

getStudentNames([{
  name: 'John'
},
{
  name: 'Jacob'
},
{
  name: 'Jingleheimer'
}]);

function filterOutNulls(values) {
  var valuesArray = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i] === null) {
      delete values[i];
    } else {
      valuesArray.push(values[i]);
    }
  }
  return valuesArray;
}
filterOutNulls(7, 8, null, 9);

function filterOutStrings(values) {
  var valuesArray = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof values[i] === 'string') {
      delete values[i];
    } else {
      valuesArray.push(values[i]);
    }
  }
  return valuesArray;
}
filterOutStrings('Hello', 1, 3);

function includesSeven(array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      return true;
    }
  }
  return false;
}
includesSeven([9, 8, 0, 7]);

function findIndex(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}
findIndex([9, 8, 0, 7]);

function oddOrEven(numbers) {
  var oddEven = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      oddEven.push('even');
    } else if (numbers[i] % 2 !== 0) {
      oddEven.push('odd');
    }
  }
  return oddEven;
}
oddOrEven(2, 5, 6, 8);
