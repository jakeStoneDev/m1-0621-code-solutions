/* exported capitalizeWords */
function capitalizeWords(string) {

  var newString = '';
  var stringSplit = string.split(' ');

  for (var i = 0; i < stringSplit.length; i++) {

    var charSplit = stringSplit[i].split('');

    for (var c = 0; c < charSplit.length; c++) {

      if (c === 0) {
        charSplit[c] = charSplit[c].toUpperCase();
      } else {
        charSplit[c] = charSplit[c].toLowerCase();
      }
    }

    var charJoin = charSplit.join('');
    newString += charJoin;
    if (i < stringSplit.length - 1) {
      newString += ' ';
    }
  }
  return newString;

}
capitalizeWords('hello this is my sentence');
/* stringSplit value: ['hello', 'this', 'is', 'my', 'sentence'] */
/* charSplit[i] value: ['h','e','l','l','o'] */
