// @flow

/*
Merge First Sorted Array Into Second Sorted Array
Given two arrays:
1) arr1 of size n, which contains n positive integers sorted in the ascending order.
2) arr2 of size (2*n) (twice the size of first), which contains n positive integers sorted in the ascending order in its first half. Second half of this array arr2 is empty. (Empty elements are marked by 0).
Write a function that takes these two arrays, and merges the first one into second one, resulting in an increasingly sorted array of (2*n) positive integers. 
Example
Input:
n = 3
arr1 = [1 3 5]
arr2 = [2 4 6 0 0 0]

Output: arr2 = [1 2 3 4 5 6]

Notes
Input Parameters: There are two arguments. First one is an integer array denoting arr1 and second one is also an integer array denoting arr2.
Output: You don't have to return anything. You just need to modify the given array arr2.



Constraints:

1 <= n <= 10^5
1 <= arr1[i] <= 2 * 10^9
1 <= arr2[i] <= 2 * 10^9 (for the first half)
arr2[i] = 0 (for the second half)
You can use only constant extra space.
0 denotes an empty space.
*/
"use-strict";
type A = Array<number>;
/*
  Steps:
    - Start at i = 0, j = 0, where i,j mark the start of each array
    - if arr1[i] < arr2[j] 
        swap(arr2[i], arr2[j])
          move j left until arr[j] > arr[i] && arr[j] <= arr[j+1] 
    - else 
        swap(arr2[j], arr2[arr1.length-1])
          ...
  arr1: [1, 3, 5]
  arr2: [2, 4, 6, 0, 0, 0] 
  -> [2, 4, 6, 1, 0, 0] -> [1, 4, 6, 2, 0, 0] -> [1, 2, 4, 6, 0 0]
*/

// better O(n)
// O(1) space
function mergeFirstIntoSecondArrV2(arr1, arr2) {
  let i = arr1.length - 1;
  let j = arr1.length - 1;
  let current = arr2.length - 1;

  while (current >= 0) {
    if (arr1[i] <= arr2[j]) {
      arr2[current] = arr2[j];
      j--;
    } else if (arr1[i] > arr2[j]) {
      arr2[current] = arr1[i];
      i--;
    } else if (i < 0) {
      // exhausting arr1 elements means all elements in arr2 are in their right place
      break;
    } else if (j < 0) {
      arr2[current] = arr1[i];
      i--;
    }
    current--;
  }
  return arr2;
}

function mergeFirstIntoSecondArr(arr1, arr2) {
  let i = 0;
  let j = 0;
  let half = arr2.length / 2;

  for (let i = 0; i < arr2.length / 2; i++) {
    arr2[half] = arr2[i];
    arr2[i] = 0;
    half++;
  }
  let start = 0;
  half = arr2.length / 2;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[half]) {
      arr2[start++] = arr1[i];
      i++;
    } else {
      arr2[start++] = arr2[half];
      half++;
    }
  }

  while (i < arr1.length) {
    arr2[start++] = arr1[i++];
  }
  return arr2;
}

// var arr1 = [5, 6, 7];
// var arr2 = [2, 4, 6, 0, 0, 0];
// mergeFirstIntoSecondArr(arr1, arr2);
// console.log(arr1, arr2);
