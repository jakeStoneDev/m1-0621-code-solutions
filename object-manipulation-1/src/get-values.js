/* exported getValues */
var Jacob = {
  firstName: 'Jacob',
  lastName: 'Stone'
};
function getValues(object, key) {
  var values = [];
  for (key in object) {
    values.push(object[key]);
  }
  return values;
}
getValues(Jacob, 'firstName');
