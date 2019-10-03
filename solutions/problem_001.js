let arr = [11, 15, 2, 7];
let k = 17;

function hasSumKOne(arr, k) {
  hashMap = {};
  for (let value of arr) {
    if (hashMap[value]) { return true; }
    else { hashMap[k - value] = true };
  }
  return false;
}


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