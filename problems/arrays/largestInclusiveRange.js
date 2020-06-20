/*
Given an array of integers, return the largest range, inclusive, of integers that are all included in the array.

For example, given the array [9, 6, 1, 3, 8, 10, 12, 11], return (8, 12) since 8, 9, 10, 11, and 12 are all in the array.
*/

// T(n): O(nlogn)
// Space: O(n)
function largestInclusiveRange(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  arr = arr.sort((a, b) => a - b); // 1, 3, 6, 8, 9, 10, 11, 12
  let range = [arr[0], arr[1]];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1] + 1) {
      range[1] = arr[i]; // [8, 9]
    } else {
      range[0] = arr[i]; // [8, null]
    }
  }

  return range;
}
// T(n): O(n)
// Space: O(n)
function largestInclusiveRangeV2(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const map = new Map();
  arr.forEach((el) => {
    map.set(el, el - 1);
  });
  let range = [0, 0];
  for (let i = 0; i < arr.length; i++) {
    if (!map.has(arr[i - 1])) {
      let curr = arr[i] + 1;
      while (map.has(curr)) {
        curr += 1;
      }
      if (curr - arr[i] > range[1] - range[0]) {
        range = [map.get(arr[i]), curr - 1];
      }
    }
  }

  return range;
}
// let a = [9, 6, 1, 3, 8, 10, 12, 11
// console.log(largestInclusiveRangeV2(a));
module.exports = largestInclusiveRangeV2;
