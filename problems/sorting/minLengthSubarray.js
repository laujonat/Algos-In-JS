/*
Given an array of n positive integers and a positive integer s, find the minimal length of a contiguous subarray of which the sum ≥ s. If there isn't one, return 0 instead.

Example: 

Input: s = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: the subarray [4,3] has the minimal length under the problem constraint.
Follow up:
If you have figured out the O(n) solution, try coding another solution of which the time complexity is O(n log n). 

*/
const minSumArray = function(arr, sum) {
  if (arr.length <= 0) {
    return 0;
  }
  let start = 0;
  let end = 0;
  let mlen = arr.length + 1;

  let rsum = arr[start];
  while (end < arr.length) {
    if (arr[end] > sum) {
      return 1;
    }
    if (rsum >= sum) {
      let len = end + 1 - start;
      if (len < mlen) {
        mlen = len;
      }
      rsum -= arr[start];
      start++;
    } else {
      end++;
      rsum += arr[end];
    }
  }
  end = arr.length - 1;
  while (start <= end) {
    rsum -= arr[start];
    start += 1;
    if (rsum >= sum) {
      let len = end - start;
      if (len < mlen) {
        mlen = len;
      }
    }
  }
  if (mlen === Math.POSITIVE_INFINITY) {
    return 0;
  }
  return mlen;
};

module.exports = minSumArray;
