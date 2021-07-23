/* exported getIndexes */
function getIndexes(array) {
  var indexArray = [];
  for (var x = 0; x < array.length; x++) {
    indexArray.push(x);
  }
  return indexArray;
}
getIndexes(['index1', 'index2', 'index3']);
