/* exported oddOrEven */
function oddOrEven(numbers) {
  var oddEven = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      oddEven.push('even');
    } else if (numbers[i] % 2 !== 0) {
      oddEven.push('odd');
    }
  }
  return oddEven;
}
oddOrEven(2, 5, 6, 8);
