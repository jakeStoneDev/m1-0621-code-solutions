/* exported numVowels */
function numVowels(string) {
  var stringCap = string.toUpperCase();
  var stringSplit = stringCap.split('');
  var numVowelsArray = [];
  for (var i = 0; i < stringSplit.length; i++) {
    if (stringSplit[i] === 'A' || stringSplit[i] === 'E' || stringSplit[i] === 'I' || stringSplit[i] === 'O' || stringSplit[i] === 'U') {
      numVowelsArray.push(stringSplit[i]);
    }
  }
  return numVowelsArray.length;
}
numVowels('All Code All Day');
