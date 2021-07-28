/* exported drop */
function drop(array, count) {
  var newArray = [];

  /*
  for (var i = array.length - 1; i >= count; i--) {
    newArray.push(array[i]);
  }
  */
  for (var i = count; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
drop(['hey', 'bye', 'yo', 'oi', 'good'], 2);
