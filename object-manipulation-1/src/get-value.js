/* exported getValue */
var Jacob = {
  firstName: 'Jacob',
  lastName: 'Stone'
};
function getValue(object, key) {
  return object[key];
}
getValue(Jacob, 'firstName');
