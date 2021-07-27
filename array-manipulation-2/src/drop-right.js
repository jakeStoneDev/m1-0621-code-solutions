/* exported dropRight */
function dropRight(array, count) {
  var newArray = [];
  if (array.length === 0) {
    return [];
  }
  for (var i = 0; i < array.length - count; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
dropRight(['1', '2', '3', '4', '5'], 3);
