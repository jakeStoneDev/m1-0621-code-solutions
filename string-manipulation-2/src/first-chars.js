/* exported firstChars */
function firstChars(length, string) {
  var newString = '';
  var splitString = string.split('');
  for (var i = 0; i < length; i++) {
    newString += splitString[i];
  }
  if (string === '') {
    return '';
  }
  if (length > string.length) {
    return string;
  }
  return newString;
}
