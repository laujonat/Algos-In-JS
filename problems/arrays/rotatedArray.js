/*
Shifted Array Search
A sorted array of distinct integers shiftArr is shifted to the left by an unknown offset and you don’t have a pre-shifted copy of it. For instance, the sequence 1, 2, 3, 4, 5 becomes 3, 4, 5, 1, 2, after shifting it twice to the left.

Given shiftArr and an integer num, implement a function shiftedArrSearch that finds and returns the index of num in shiftArr. If num isn’t in shiftArr, return -1. Assume that the offset can be any value between 0 and arr.length - 1.

Explain your solution and analyze its time and space complexities.

Example:
input:  shiftArr = [9, 12, 17, 2, 4, 5], num = 2 # shiftArr is the
                                                 # outcome of shifting
                                                 # [2, 4, 5, 9, 12, 17]
                                                 # three times to the left

output: 3 # since it’s the index of 2 in arr
Constraints:

[time limit] 5000ms
[input] array.integer arr
[input] integer num
[output] integer  
*/
// T(n)
function rotatedArray(arr, num) {
  let low = 0;
  let hi = arr.length - 1;
  let mid = Math.floor(arr.length / 2);
  function inBound(p1, p2) {
    return num >= p1 && num <= p2;
  }

  if (arr[mid] === num) {
    return mid;
  } else if (arr[mid] > arr[low]) {
    if (inBound(arr[low], arr[mid])) {
      rotatedArray(arr.slice(low, mid), num);
    } else {
      rotatedArray(arr.slice(mid), num);
    }
  } else {
    if (inBound(arr[mid], arr[hi])) {
      rotatedArray(arr.slice(mid), num);
    } else {
      rotatedArray(arr.slice(low, mid), num);
    }
  }
}
// let shiftArr = [9, 12, 17, 2, 4, 5];
// let num = 2;
// let res = rotatedArray(shiftArr, num);
module.exports = rotatedArray;
