/* exported union */
function union(first, second) {
  var newArray = [];
  var fullArray = first.concat(second);

  for (var i = 0; i < fullArray.length; i++) {
    if (newArray.indexOf(fullArray[i]) === -1) {
      newArray.push(fullArray[i]);
    }
  }
  return newArray;
}
