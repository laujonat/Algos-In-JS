/*
Minimum Element In A Sorted And Rotated Array

Find the minimum element in an array that has been sorted and rotated by an unknown pivot.

Example

Input: [ 4, 5, 6, 7, 8, 1, 2, 3]

Output: 1

The array is sorted in the ascending order and right rotated by pivot 5. The minimum value 1 is at index 5.

*/

function findMinimum(rotated) {
  function solve(arr, start, end) {
    if (start > end) {
      return Infinity;
    }
    if (start === end) {
      return arr[end];
    }

    const mid = Math.floor((end - start) / 2) + start;
    const left = solve(arr, start, mid - 1);
    const right = solve(arr, mid + 1, end);

    return Math.min(left, right, arr[mid]);
  }

  return solve(rotated, 0, rotated.length - 1);
}

// var r = [5, 6, 2, 3, 4, 5];
// var r1 = [
//   10,
//   0,
//   -1000,
//   -100000,
//   -10000000,
//   -1000000000,
//   1000000000,
//   10000000,
//   100000,
//   1000,
//   10,
// ];
module.exports = findMinimum;
