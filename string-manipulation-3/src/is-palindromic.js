/* exported isPalindromic */
function reverseString(word) {
  var newWord = '';
  var splitString = word.split('');
  for (var i = splitString.length - 1; i >= 0; i--) {
    newWord += splitString[i];
  }
  return newWord;
}

function isPalindromic(string) {
  var newString = string.replace(/ /g, '');
  if (reverseString(newString) === newString) {
    return true;
  } else {
    return false;
  }
}
