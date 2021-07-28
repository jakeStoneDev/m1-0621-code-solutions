/* exported capitalize */
function capitalize(word) {
  word = word.split('');
  for (var i = 0; i < word.length; i++) {
    if (i === 0) {
      word[i] = word[i].toUpperCase();
    } else {
      word[i] = word[i].toLowerCase();
    }
  }
  word = word.join('');
  return word;
}
capitalize('hELLo');
