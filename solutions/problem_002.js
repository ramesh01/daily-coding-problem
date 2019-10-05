/***
 *  This problem was asked by Uber.
    Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.
    For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].
    Follow-up: what if you can't use division?
*/

let input1 = [1, 2, 3, 4, 5]; // output : [120, 60, 40, 30, 24]
let input2 = [3, 2, 1]; // output : [2, 3, 6]

function productArray(input) {
  let output = [];
  for (let i = 0; i < input.length; i++) {
    let temp = 0;
    for (let j = 0; j < input.length; j++) {
      if (input[i] != input[j]) {
        temp = temp === 0 ? input[j] : temp * input[j];
      }
    }
    output.push(temp);
  }
}

productArray(input1);