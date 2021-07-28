/* exported isVowel */
function isVowel(char) {
  var vowel = ['A', 'E', 'I', 'O', 'U'];
  for (var i = 0; i < vowel.length; i++) {
    if (char.toUpperCase() === vowel[i]) {
      return true;
    }
  }
  return false;
}
isVowel('a');
