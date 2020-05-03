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

const merge = function(arr: A, start: number, n: number, order: boolean): A {
  if (start >= n) {
    return arr;
  }
  const checkOrder = (v1, v2) => {
    return order ? v1 < v2 : v1 >= v2;
  };
  let low = start;
  let pivot = arr[n];
  for (let i = start; i < n; i++) {
    if (checkOrder(arr[i], pivot)) {
      $tmp = arr[i];
      arr[i] = arr[low];
      arr[low] = $tmp;
      low++;
    }
  }

  $tmp = arr[low];
  arr[low] = arr[n];
  arr[n] = $tmp;
  merge(arr, start, low - 1);
  merge(arr, low + 1, n);
  return arr;
};

// Naive solution: O(nm*log(nm))
// Basically sorts the array first and then calls quicksort on the array.
function mergeKSorted(lists) {
  const length = lists.length;
  const res = [];
  const order = lists[0] < lists[length - 1] ? true : false;
  let k = 0;
  while (k < lists.length) {
    let i = 0;
    while (i < lists[k].length) {
      res.push(lists[k][i]);
      i++;
    }
    k++;
  }
  let a = merge(res, 0, res.length - 1, order);
  return a;
}

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

// let res = mergeKSorted(a);
module.exports = mergeKSorted;
