// In-place solution O(nlogn)
const quickSortHelper = function(arr, start, end) {
  if (start >= end) {
    return arr;
  }

  let low = start;
  let pivot = arr[start + Math.floor(end - start)];
  for (let i = start; i < end; i++) {
    if (arr[i] < pivot) {
      [arr[i], arr[low]] = [arr[low], arr[i]];
      low++;
    }
  }
  [arr[low], arr[end]] = [arr[end], arr[low]];

  quickSortHelper(arr, start, low - 1); // move upper bound pointer left
  quickSortHelper(arr, low + 1, end); // move lower bound pointer right
  return arr;
};

const quickSort = function(arr, n) {
  if (n <= 1) {
    return arr;
  }
  const res = quickSortHelper(arr, 0, n - 1);
  return res;
};
// const a = [
//   3,
//   5,
//   56,
//   23,
//   3,
//   5,
//   6,
//   45,
//   3,
//   23,
//   456,
//   546,
//   45,
//   23,
//   3,
//   4,
//   6,
//   7,
//   43,
//   45,
//   6,
//   6,
// ];
// const b = [2, 7, 5, 3, 0, 0, 2];
// let res = quickSort(a, a.length);
// let resB = quickSort(b, b.length);
// console.log(res);
// console.log(resB);
module.exports = quickSort;
