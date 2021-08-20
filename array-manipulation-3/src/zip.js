/* exported zip */
function zip(first, second) {
  var newArray = [];
  var shortLength;

  if (first.length < second.length) {
    shortLength = first.length;
  } else if (second.length < first.length) {
    shortLength = second.length;
  } else {
    shortLength = first.length;
  }

  for (var i = 0; i < shortLength; i++) {
    newArray.push([first[i], second[i]]);
  }
  return newArray;
}
