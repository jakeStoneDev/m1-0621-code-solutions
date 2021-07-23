/* exported filterOutStrings */
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
