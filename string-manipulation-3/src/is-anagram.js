/* exported isAnagram */
function isAnagram(firstString, secondString) {
  var newStringOne = firstString.replace(/ /g, '');
  var newStringTwo = secondString.replace(/ /g, '');

  var noSpaceArray1 = newStringOne.split('');
  var noSpaceArray2 = newStringTwo.split('');

  console.log(noSpaceArray1);
  console.log(noSpaceArray2);

  if (noSpaceArray1.length !== noSpaceArray2.length) {
    return false;
  } else {
    for (var i = 0; i < noSpaceArray1.length; i++) {
      if (noSpaceArray2.indexOf(noSpaceArray1[i]) === -1) {
        return false;
      } else {
        continue;
      }
    }
    for (var j = 0; j < noSpaceArray1.length; j++) {
      if (noSpaceArray1.indexOf(noSpaceArray2[j]) === -1) {
        return false;
      } else {
        continue;
      }
    }
    return true;
  }
}

/* split the strings into two arrays of characters.
loop through the first array and check if that character is in the other
array. If not, return false.
if character is a space continue.
*/
