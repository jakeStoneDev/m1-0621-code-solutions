/* exported reverseWords */
function reverseWords(string) {
  var newString = string.split(' ');
  var emptyString = '';

  for (var i = 0; i < newString.length; i++) {
    var splitWord = newString[i].split('');
    var reverseWord = splitWord.reverse();
    var joinedWord = reverseWord.join('');
    emptyString += joinedWord + ' ';
  }
  var finalStr = emptyString.trim();
  return finalStr;
}
