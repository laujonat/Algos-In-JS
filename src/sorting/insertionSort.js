// Decrease and conquer strategy
// if we know we can go from n - 1 to n
// then we have two options:
// A) Recursion (top-down): n -> (n-1)
// B) Iterative (bottom-up): (n-1) -> n

var tB = [
  2,
  5,
  1,
  9,
  10,
  3,
  4,
  12,
  541,
  23,
  13,
  1,
  51,
  131,
  56,
  34,
  12,
  67,
  45,
  8,
  12,
  34,
  7,
  234,
  0
];
type R = Array<number>;
// Top-down
const insertionSortV1 = function(arr: R, n: number): R {
  if (n <= 1) {
    return insertionSort(arr, n - 1); // T(n - 1)
  }

  let i = n - 1;
  while (i > 1 && arr[i] > arr[i - 1]) {
    // i-1
    let temp = arr[i];
    arr[i - 1] = arr[i];
    arr[i] = temp;
    i = i - 1;
  }
  return arr;
};

// Slightly more efficient using right shift operations instead of swaps
const insertionSortV2 = function(arr: R, n: number): R {
  // solve the solution for n
  if (n <= 1) {
    return insertionSort(arr, n - 1); // T(n-1)
  }
  let rightMost = arr[n - 1];
  let i = n - 1;
  while (i >= 1 && arr[i] > rightMost) {
    arr[i] = arr[i - 1];
    i -= 1;
  }

  return arr;
};
module.exports = { insertionSortV1, insertionSortV2 };
