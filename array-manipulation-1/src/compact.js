/* exported compact */
function compact(array) {
  var compactArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      compactArray.push(array[i]);
    }
    if (!array[i]) {
      continue;
    }
  }
  return compactArray;
}
compact(['hello', 'false', 'bye', 'true']);
