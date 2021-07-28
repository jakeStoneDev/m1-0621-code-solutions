/* exported setValue */
var Jacob = {
  firstName: null
};
function setValue(object, key, value) {
  object[key] = value;
}
setValue(Jacob, 'firstName', 'Jacob');
