/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  var stringSplit = string.split('');

  var a = stringSplit[firstIndex];
  var b = stringSplit[secondIndex];
  stringSplit[firstIndex] = b;
  stringSplit[secondIndex] = a;
  var stringJoin = stringSplit.join('');
  return stringJoin;
}
swapChars('hello this is my sentence');
