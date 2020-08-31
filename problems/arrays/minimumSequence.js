/*
 Given an array of integers, write a method to find indices m and n such that if you sorted     
 elements m through n, the entire array would be sorted. Minimize n - m (that is, find the    
 smallest such sequence).    
    
 EXAMPLE    
 input = [1,2,4,7,10,11,7,12,6,7,16,18,19];    
 output: (3, 9);      
*/

function minimumSequence(arr): [number, number] {
  if (!arr.length) return [];

  let m = 0;
  let n = arr.length - 1;
  // find first unsorted index from start
  for (m = 0; m < arr.length - 1; m++) {
    if (arr[m] > arr[m + 1]) {
      break;
    }
  }
  if (m === arr.length - 1) {
    return [m, m];
  }
  // find first unsorted index from end
  for (n = arr.length - 1; n > 0; n--) {
    if (arr[n] < arr[n - 1]) {
      break;
    }
  }
  // start from first unsorted point
  let min = arr[m];
  let max = arr[m];

  // iterate over middle section between m and n
  for (let i = m + 1; i <= n; i++) {
    if (arr[i] > max) max = arr[i];
    if (arr[i] < min) min = arr[i];
  }
  // if first unsorted value from start is not the minimum, iterate from beg of array to first unsorted index
  for (let i = 0; i < m; i++) {
    if (arr[i] > min) {
      m = i;
      break;
    }
  }
  // if first unsorted value from end is not the maximum, iterate from end of array to first unsorted index
  for (let i = arr.length - 1; i >= n + 1; i--) {
    if (arr[i] < max) {
      n = i;
      break;
    }
  }

  return [m, n];
}

// let a = [10, 12, 20, 30, 25, 40, 32, 31, 35, 50, 60];
// let b = [0, 1, 15, 25];
module.exports = minimumSequence;
