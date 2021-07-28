/* exported capitalizeWord */
function capitalizeWord(word) {
  if (word.toUpperCase() === 'JAVASCRIPT') {
    return 'JavaScript';
  }
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
capitalizeWord('hELLo');
