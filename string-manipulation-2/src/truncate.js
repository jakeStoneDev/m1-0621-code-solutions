/* exported truncate */
function truncate(length, string) {
  var result = string.slice(0, length) + '...';
  return result;
}
truncate(8, 'Hello, this is a long sentence');
