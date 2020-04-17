// Trivial solution O(n^2)
const quickSort = function(arr: Array<number>, n: number): Array<number> {
  if (n <= 1) {
    return arr;
  }
  const pivot = Math.floor(Math.random() * Math.floor(n - 1));
  const left = [];
  const right = [];
  for (let i = 0; i < n; i++) {
    if (i === pivot) {
      continue;
    }
    if (arr[pivot] < arr[i]) {
      right.push(arr[i]);
    } else {
      left.push(arr[i]);
    }
  }

  const leftPartition = quickSort(left, left.length);
  leftPartition.push(arr[pivot]);
  const rightPartition = quickSort(right, right.length);
  return leftPartition.concat(rightPartition);
};

// In-place solution O(nlogn)
const quickSortV2Helper = function(arr, start, end) {
  if (start >= end) {
    return arr;
  }

  let low = start;
  let pivot = arr[end];
  for (let i = start; i < end; i++) {
    if (arr[i] < pivot) {
      [arr[i], arr[low]] = [arr[low], arr[i]];
      low++;
    }
  }
  [arr[low], arr[end]] = [arr[end], arr[low]];

  quickSortV2Helper(arr, start, low - 1); // move upper bound pointer left
  quickSortV2Helper(arr, low + 1, end); // move lower bound pointer right
  return arr;
};

const quickSortV2 = function(arr, n) {
  if (n <= 1) {
    return arr;
  }
  const res = quickSortV2Helper(arr, 0, n - 1);
  return res;
};
const a = [
  3,
  5,
  56,
  23,
  3,
  5,
  6,
  45,
  3,
  23,
  456,
  546,
  45,
  23,
  3,
  4,
  6,
  7,
  43,
  45,
  6,
  6,
];

let res = quickSortV2(a, a.length);
console.log(res);
module.exports = { quickSort, quickSortV2 };
