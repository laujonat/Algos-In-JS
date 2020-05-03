/*
Given K sorted arrays arr, of size N each, merge them into a new array res, such that res is a sorted array.

 Assume N is very large compared to K. N may not even be known. The arrays could be just sorted streams, for instance, timestamp streams.

All arrays might be sorted in increasing manner or decreasing manner. Sort all of them in the manner they appear in input.

Repeats are allowed.
Negative numbers and zeros are allowed.
Assume all arrays are sorted in the same order. Preserve that sort order in output.
It is possible to find out the sort order from at least one of the arrays.

Constraints:

1 <= N <= 500
1 <= K <= 500
-10^6 <= arr[i][j] <= 10^6, for all valid i,j

Input:
K = 3, N =  4
arr = [[1, 3, 5, 7],
       [2, 4, 6, 8],
       [0, 9, 10, 11]]
Output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

*/
type A = Array<number>;
type K = Array<A>;
const findOrder = (arr: A) => {
  let isAscending = true;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] > arr[i][arr[i].length - 1]) {
      isAscending = false;
      break;
    }
  }
  return isAscending;
};
// O(nklog(k))
// Merges two sorted arrays at a time
const mergeKSortedArrayV2 = function(arr: K): A {
  let order: boolean = findOrder(arr);

  while (arr.length > 1) {
    let a1: A = arr.shift();
    let a2: A = arr.shift();
    let aux = [];
    let i = 0;
    let j = 0;
    while (i < a1.length && j < a2.length) {
      if (order) {
        // true -> asc
        if (a1[i] <= a2[j]) {
          aux.push(a1[i++]);
        } else {
          aux.push(a2[j++]);
        }
      } else {
        if (a1[i] >= a2[j]) {
          aux.push(a1[i++]);
        } else {
          aux.push(a2[j++]);
        }
      }
    }
    while (i < a1.length) {
      aux.push(a1[i++]);
    }
    while (j < a2.length) {
      aux.push(a2[j++]);
    }

    arr.push(aux);
  }
  return arr[0];
};

let a = [
  [24, 23, 20, 15, 7, 4],
  [26, 21, 19, 11, 11, 3],
  [17, 13, 13, 12, 12, 7],
  [27, 23, 22, 19, 13, 7],
  [26, 26, 25, 18, 9, 3],
  [18, 17, 17, 16, 15, 8],
  [36, 34, 26, 24, 15, 8],
  [21, 14, 10, 5, 4, 3],
];
const lists = [
  [9, 9, 9, 9, 9],
  [9, 9, 9, 9, 9],
  [9, 9, 9, 9, 9],
  [9, 9, 9, 9, 10],
  [9, 9, 9, 9, 9],
  [9, 9, 9, 9, 9],
];
// let res = mergeKSortedArrayV2(lists);
// let res2 = mergeKSortedArrayV2(a);

module.exports = mergeKSortedArrayV2;
