/* exported chunk */
function chunk(array, size) {
  var result = [];
  for (var value of array) {
    var lastArray = result[result.length - 1];
    if (!lastArray || lastArray.length === size) {
      result.push([value]);
    } else {
      lastArray.push(value);
    }
  }
  return result;
}
chunk(['1', '2', '3', '4'], 2);
