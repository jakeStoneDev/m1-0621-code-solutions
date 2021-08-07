/* exported invert */
function invert(source) {
  var newObj = {};
  for (var propt in source) {

    var c = propt;
    propt = source[propt];
    source[propt] = c;
    newObj[propt] = source[propt];
  }
  return newObj;
}
