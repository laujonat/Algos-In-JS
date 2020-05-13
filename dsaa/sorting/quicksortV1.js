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

module.exports = quickSort;
