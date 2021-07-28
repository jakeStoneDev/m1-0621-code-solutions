/* exported getWords */
function getWords(string) {
  if (!string) {
    return [];
  }
  var str = string.split(' ');
  return str;
}
getWords('I am groot');
