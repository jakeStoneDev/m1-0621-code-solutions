/* exported ransomCase */
function ransomCase(string) {
  var stringSplit = string.split('');
  for (var i = 0; i < stringSplit.length; i++) {
    if (i % 2 === 0) {
      stringSplit[i] = stringSplit[i].toLowerCase();
    } else {
      stringSplit[i] = stringSplit[i].toUpperCase();
    }
  }
  var joinedString = stringSplit.join('');
  return joinedString;
}
ransomCase('Hello');
