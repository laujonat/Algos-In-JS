// Decrease and conquer strategy
// if we know we can go from n - 1 to n
// then we have two options:
// A) Recursion (top-down): n -> (n-1)
// B) Iterative (bottom-up): (n-1) -> n

type R = Array<number>;
// Top-down

// Iterative bottom-up approach
const insertionSortV2 = function(arr: R, n: number): R {
  if (n <= 1) {
    return arr;
  }
  for (let i = 1; i < arr.length; i++) {
    let curr = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > curr) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = curr;
  }
  return arr;
};
// let a = [6, 4, 3, 3, 5, 5, 2, 1, 8, 7, 5, 5, 34, 456, 45];
// let b = [1, 4, 5, 2, 3, 7, 8, 6, 10, 9];
// let d = [
//   2,
//   5,
//   1,
//   9,
//   10,
//   3,
//   4,
//   12,
//   541,
//   23,
//   13,
//   1,
//   51,
//   131,
//   56,
//   34,
//   12,
//   67,
//   45,
//   8,
//   12,
//   34,
//   7,
//   234,
//   0,
// ];
// let res = insertionSortV2(a, a.length);
// let resB = insertionSortV2(b, b.length);
// let resC = insertionSortV2(d, d.length);
// let resD = insertionSortV2(d, d.length);
// console.log(res, resB, resC, resD);
module.exports = insertionSortV2;
