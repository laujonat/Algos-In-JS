type R = Array<number>;
const merge = function(leftArr: R, rightArr: R): R {
  let i = 0;
  let j = 0;
  let aux: Array<?number> = [];

  while (i <= leftArr.length - 1 && j <= rightArr.length - 1) {
    if (leftArr[i] <= rightArr[j]) {
      aux.push(leftArr[i]);
      i++;
    } else {
      aux.push(rightArr[j]);
      j++;
    }
  }

  while (i < leftArr.length) {
    aux.push(leftArr[i]);
    i++;
  }
  while (j < rightArr.length) {
    aux.push(rightArr[j]);
    j++;
  }

  return aux;
};

const mergeSort = function(arr: R, n: number): R {
  if (n <= 1) {
    return arr;
  }
  const mid = Math.floor(n / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid, n);

  const leftArr = mergeSort(left, left.length);
  const rightArr = mergeSort(right, right.length);
  const res = merge(leftArr, rightArr);
  return res;
};
module.exports = mergeSort;
