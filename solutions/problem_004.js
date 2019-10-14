/***
  This problem was asked by Stripe.
  Given an array of integers, find the first missing positive integer in linear time and constant space. In other words, find the lowest positive integer that does not exist in the array. The array can contain duplicates and negative numbers as well.
  For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.
  You can modify the input array in-place.
 */

function missingNumber() {

  let tempArr = arr.filter(value => value > 0);
  //Sort lowest to highest
  tempArr.sort(function (a, b) { return a - b; });

  let misPositive = 1;
  for (let i = 0; i < tempArr.length; i++) {
    if (tempArr[i] == misPositive) {
      misPositive = tempArr[i] + 1;
    } else {
      break;
    }
  }
  return misPositive;
}