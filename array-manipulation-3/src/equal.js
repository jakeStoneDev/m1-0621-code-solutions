/* exported equal */

function equal(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  for (var i = 0; i < first.length; i++) {
    if (first[i] === second[i]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}
equal(
  ['foo', 'bar', 'baz'],
  ['foo', 'bar', 'baz']
);
