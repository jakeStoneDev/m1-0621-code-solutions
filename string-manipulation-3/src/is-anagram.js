/* exported isAnagram */

function repetions(array) {

  var letterCountObject = {};

  for (var i = 0; i < array.length; i++) {
    if (!letterCountObject[array[i]]) {
      letterCountObject[array[i]] = 1;
    } else {
      letterCountObject[array[i]]++;
    }
  }
  return letterCountObject;
}

function isAnagram(firstString, secondString) {

  var newStringOne = firstString.replace(/ /g, '');
  var newStringTwo = secondString.replace(/ /g, '');
  /* string 1 with no spaces and being split into an array */
  var noSpaceArray1 = newStringOne.split('');
  /* string 2 with no spaces and being split into an array */
  var noSpaceArray2 = newStringTwo.split('');

  /* if string 1 and string 2 are not same length its false */
  // if (repetions(noSpaceArray1) !== repetions(noSpaceArray2)) {
  //   return false;
  // }
  for (var key in repetions(noSpaceArray1)) {
    if (repetions(noSpaceArray1)[key] !== repetions(noSpaceArray2)[key]) {
      return false;
    }
  }

  if (noSpaceArray1.length !== noSpaceArray2.length) {
    return false;
  } else {

    /* If a letter of string 1 isnt in string 2, false */
    for (var i = 0; i < noSpaceArray1.length; i++) {
      if (noSpaceArray2.indexOf(noSpaceArray1[i]) === -1) {
        return false;
      } else {
        continue;
      }
    }

    /* If a letter of string 2 isnt in string 1, false */
    for (var j = 0; j < noSpaceArray1.length; j++) {
      if (noSpaceArray1.indexOf(noSpaceArray2[j]) === -1) {
        return false;
      } else {
        continue;
      }
    }
  }
  return true;

}
