/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  for (var x = 0; x < words.length; x++) {
    words[x] += suffix;
  }
  return words;
}
addSuffixToAll(['index', 'index2', 'index3']);
