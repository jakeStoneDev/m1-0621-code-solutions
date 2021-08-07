/* exported omit */
function omit(source, keys) {
  var newObj = {};
  for (var key in source) {
    if (!keys.includes(key)) {
      newObj[key] = source[key];
    }
  }
  return newObj;
}
omit({ foo: 1, bar: 2, baz: 3 }, ['foo', 'baz']);
