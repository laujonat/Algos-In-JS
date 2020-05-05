/*
Given an integer array arr of size n, find all magic triplets in it.
Magic triplet is a group of three numbers whose sum is zero.
Note that magic triplets may or may not be made of consecutive numbers in arr.


Example One
Input: arr = [10, 3, -4, 1, -6, 9]
Output: [“10,-4,-6”, “3,-4,1”]

Example Two
Input: arr = [12, 34, -46]
Output: [“12,-46,34”]

Example Three
Input: arr = [0, 0, 0];
Output: [“0,0,0”]

Example Four
Input: arr = [-2, 2, 0 -2, 2];
Output: [“2,-2,0”]
*/

function findZeroSum(arr) {
  let sorted = arr.sort((a, b) => a - b);
  let res = [];
  let i = 0;
  while (i < sorted.length) {
    if (i > 0 && sorted[i] === sorted[i - 1]) {
      i++;
      continue;
    }

    let low = i + 1;
    let high = arr.length - 1;
    while (low < high) {
      let sum = sorted[low] + sorted[i] + sorted[high];
      if (sum > 0) {
        high--;
      } else if (sum < 0) {
        low++;
      } else {
        res.push([`${sorted[low]}, ${sorted[i]}, ${sorted[high]}`]);
        // handle duplicate elements
        while (low + 1 < high && sorted[low] === sorted[low + 1]) {
          low++;
        }
        while (high - 1 > low && sorted[high] === sorted[high - 1]) {
          high--;
        }
        low++;
        high--;
      }
    }
    i++;
  }
  return res;
}
let a = [10, 3, -4, 1, -6, 9];
let b = [-2, 2, 0, -2, 2];
// console.log(findZeroSum(a));
// console.log(findZeroSum(b));
module.exports = findZeroSum;
