/*
/*    
 In an array of integers, a "peak" is an element which is  greater than or equal to    
 the adjacent integers and a "valley" is an element which is less than or equal to the    
 adjacent integers. For examples in the array:    
  [5,8,6,2,3,4,6],    
 [8,6] are peaks and [5,2] are valleys. Given an array of integers, sort the array into    
 an alternating sequence of peaks and valleys;    
    
 EXAMPLE    
 input: [5,3,1,2,3];    
 output: [5,1,3,2,3];    

  1, 2, 3, 3, 5, 7
  7 3 5 2 1 3
*/

// O(nlogn)
const peaksAndValleys = (arr) => {
  const sorted = arr.sort();
  let lo = 0;
  let hi = sorted.length - 1;
  const result = [];
  let mid = Math.floor(lo + hi / 2) + lo;
  while (lo < hi) {
    result.push(sorted[hi]);
    result.push(sorted[lo]);
    lo++;
    hi--;
  }
  if (result.length !== sorted.length) {
    result.push(sorted[lo]);
  }
  return result;
};

const peaksAndValleysV2 = (arr) => {
  if (arr.length < 3) {
    return arr;
  }
  function swap(i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  let lo = 0;
  let hi = 2;
  const result = [arr[0], arr[1], arr[2]];
  while (hi < arr) {
    let mid = arr[Math.floor(hi - lo / 2) + lo];
    let min = Math.min(arr[min], arr[lo], arr[hi]);
    if (arr[lo] > arr[hi]) {
      swap(hi, mid);
    } else {
      swap(lo, mid);
    }

    lo++;
    hi++;
  }

  return result;
};
let r = [5, 3, 1, 2, 3];

// console.log(peaksAndValleys(r));
module.exports = peaksAndValleysV2;
