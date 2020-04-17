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
// INCOMPLETE BAD
function merger_first_into_second(arr1, arr2) {
  if (arr1.length <= 1) {
    return Array.from(Array(Math.floor(arr2.length / 2)).keys());
  }
  let i = 0;
  // find half way point of array2
  let j =
    arr2.length % 2 === 0
      ? Math.floor(arr2.length / 2) - 1
      : Math.floor(arr2.length / 2);
  console.log(j);
  let lastElementInArray1; // number
  while (j >= 0) {
    // n-1
    lastElementInArray1 = arr1[j - 1]; // smallest element greater than arr[j]
    let i;
    for (i = j; i >= 0 && arr1[i] > arr2[j]; i--) {
      arr1[i + 1] = arr1[i];
      // j--;
    }
    if (lastElementInArray1 > arr2[j] || i != j - 1) {
      arr1[i + 1] = arr2[j];
      arr2[j] = lastElementInArray1;
    }
    j--;
  }
  console.log(arr1, arr2);
}

var arr1 = [1, 3, 5];
var arr2 = [2, 4, 6, 0, 0, 0];
merger_first_into_second(arr1, arr2);
