/***
 * Given a list of numbers, return whether any two sums to k.
  For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
  Bonus: Can you do this in one pass?
*/

let arr = [11, 15, 2, 7];
let k = 17;

// Method-1:
function hasSumKOne(arr, k) {
  hashMap = {};
  for (let value of arr) {
    if (hashMap[value]) { return true; }
    else { hashMap[k - value] = true };
  }
  return false;
}

// Method-2:
function hasSumKTwo(arr, k) {
  let status = false;
  for (let i = 0; i < arr.length; i++) {
    let iVal = arr[i];
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] + iVal === k) {
        status = true;
      }
    }
  }
  return status;
}

console.log(hasSumKOne(arr, k));
console.log(hasSumKTwo(arr, k));