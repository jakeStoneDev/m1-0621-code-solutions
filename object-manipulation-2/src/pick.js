/* exported pick */
function pick(source, keys) {
  var newObj = {};
  for (keys in source) {
    newObj.push(source[keys]);
  }
  return newObj;
}
pick({ firstName: 1, lastName: 2, job: 3 }, ['Jacob', 'Stone']);
