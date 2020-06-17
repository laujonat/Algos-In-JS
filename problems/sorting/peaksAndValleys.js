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
let r = [5, 3, 1, 2, 3, 7];

console.log(peaksAndValleys(r));
