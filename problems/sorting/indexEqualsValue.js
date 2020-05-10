/*
Array Index & Element Equality
Given a sorted array arr of distinct integers, write a function indexEqualsValueSearch 
that returns the lowest index i for which arr[i] == i. Return -1 if there is no such index. Analyze the time and space complexities of your solution and explain its correctness.

Examples:

input: arr = [-8,0,2,5]
output: 2 # since arr[2] == 2

input: arr = [-1,0,3,6]
output: -1 # since no index in arr satisfies arr[i] == i.
Constraints:

[time limit] 5000ms

[input] array.integer arr

1 ≤ arr.length ≤ 100
[output] integer

*/

// O(n)
function indexEqualsValueSearchV1(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (i === arr[i]) {
      return i;
    }
  }
  return -1;
}
// O(logn)
/*
The naive solution is to iterate over all the values in the input array and return an index i for which the condition arr[i] == i is met. This takes a linear, O(N), time complexity.

To do better, we should recognize that the sequence of i (array indices) and the sequence of arr[i] (array values) are both strictly monotonically increasing sequences. If we subtract i from both sides of the equation arr[i] = i we get arr[i] - i = 0.

While we can use this to define another array diffArr where diffArr[i] = arr[i] - i and perform a Binary Search for 0 in diffArr, it’s unnecessary. Instead, we can simply modify the binary search condition to arr[i] - i == 0 (instead of the condition diffArr[i] == 0).

It important for the search condition to form a monotonically increasing sequence because otherwise there is no guarantee that the resulting sequence is sorted and binary search works only on sorted sequences. Recall that if an array consists of monotonically increasing values, then it’s sorted by definition (in an ascending order).
*/
function indexEqualsValueSearch(arr) {
  let start = 0;
  let end = arr.length - 1;
  let mid = start + (end - start);
  while (start <= end) {
    let i = Math.round(start + end / 2);
    // Check start of array
    if (arr[i] - i < 0) {
      start++;
    } else if (arr[i] - i === 0 && (i === 0 || arr[i - 1] - (i - 1) < 0)) {
      return i;
    } else {
      end--;
    }
  }
  return -1;
}

// const res = indexEqualsValueSearchV2([-5, 0, 3, 4, 10, 18, 27]);
// console.log(res);
module.exports = indexEqualsValueSearch;
