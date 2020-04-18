/*
  n -> length(A)
  if n <= 1 return;

  L = mergeSort(A[1:n/2])
  R = mergeSort(A[n/2 + 1, n])

  return merge(L, R);

  merge(L in A, R in A)
  i = 0 // leftStart
  j = 0 -> (n/2 - 1) // rightStart
  a = []
  k = 0
  1 4 99 23 89 
  1 

  for i in L and for j in R
    if A(i) <= A(j)
      a[k].push(A(i));
      i++

    else // A(i) > A(j)
    j++

  while i < length(A)
    
  while 
    


*/
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
module.exports = { mergeSort };
