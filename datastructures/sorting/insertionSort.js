// Decrease and conquer strategy
// if we know we can go from n - 1 to n
// then we have two options:
// A) Recursion (top-down): n -> (n-1)
// B) Iterative (bottom-up): (n-1) -> n

type R = Array<number>;
// Top-down
const insertionSort = function(arr: R, n: number): R {
  if (n <= 1) {
    return;
  }
  insertionSort(arr, n - 1); // T(n - 1)
  let i = n - 1;
  while (i >= 0 && arr[i] < arr[i - 1]) {
    let temp = arr[i - 1];
    arr[i - 1] = arr[i];
    arr[i] = temp;
    i--;
  }
  return arr;
};

// let res = insertionSort(a, a.length);
// let resB = insertionSort(b, b.length);
// let resC = insertionSort(d, d.length);
// let resD = insertionSort(d, d.length);
// console.log(res, resB, resC, resD);
module.exports = insertionSort;
