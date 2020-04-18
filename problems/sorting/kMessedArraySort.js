/*
K-Messed Array Sort
Given an array of integers arr where each element is at most k places away from its sorted position, code an efficient function sortKMessedArray that sorts arr. 
For instance, for an input array of size 10 and k = 2, an element belonging to index 6 in the sorted array will be located at either index 4, 5, 6, 7 or 8 in the input array.

Analyze the time and space complexities of your solution.

Example:

input:  arr = [1, 4, 5, 2, 3, 7, 8, 6, 10, 9], k = 2

output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
Constraints:

[time limit] 5000ms

[input] array.integer arr

1 ≤ arr.length ≤ 100
[input] integer k

0 ≤ k ≤ 20
[output] array.integer
*/

const solve = function(arr, k) {
  if (arr.length <= 1) {
    return arr;
  }
  let n = arr.length - 1;
  for (let i = n; i >= 0; i--) {
    let curr = arr[i];
    let j = i;

    // This loop will run maximum k times
    // while (j < n && arr[j + 1] < curr) {
    let kk = 0;
    while (kk < k && arr[j + 1] < curr) {
      arr[j] = arr[j + 1];
      kk++;
      j++;
    }
    arr[j] = curr;
  }

  return arr;
};
let arr = [1, 4, 5, 2, 3, 7, 8, 6, 10, 9];
let k = 2;
let arr2 = [6, 1, 4, 11, 2, 0, 3, 7, 10, 5, 8, 9];
let k2 = 6;

let res = solve(arr, k);
let res2 = solve(arr2, k2);
console.log(res);
console.log(res2);
