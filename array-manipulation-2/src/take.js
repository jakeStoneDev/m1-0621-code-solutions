/* exported take */
function take(array, count) {
  var newArray = [];
  for (var i = 0; i < count; i++) {
    newArray.push(array[i]);
  }
  if (!array[i]) {
    return [];
  }
  return newArray;
}
take(['hey', 'bye', 'yo'], 2);
