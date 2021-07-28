/* exported lastChars */
function lastChars(length, string) {
  if (string === '') {
    return '';
  }
  if (length > string.length) {
    return string;
  }
  var slicedString = string.slice(string.length - length, string.length);
  return slicedString;
}
