/* exported filterOutNulls */
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
