/* exported getKeys */
function getKeys(object) {
  var array = [];
  for (var key in object) {
    array.push(key);
  }
  return array;
}
getKeys({
  firstName: 'Jacob',
  lastName: 'Stone',
  age: 25
});
