/*
Given an array of n positive integers and a positive integer s, find the minimal length of a contiguous subarray of which the sum ≥ s. If there isn't one, return 0 instead.

Example: 

Input: s = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: the subarray [4,3] has the minimal length under the problem constraint.
Follow up:
If you have figured out the O(n) solution, try coding another solution of which the time complexity is O(n log n). 

*/
// Not all cases passed
const minSumArray = function(arr, sum) {
  let mlen = arr.length;
  let end = 0;
  const minSumArrayHelper = function(arr, sum, start, end) {
    if (arr.length <= 1) {
      return arr[0];
    }
    let len = end - start;
    lsum = arr.slice(start, end).reduce((acc, el) => {
      return acc + el;
    }, 0);

    if (lsum >= sum) {
      if (len < mlen) {
        mlen = len;
      }
      console.log(mlen, arr);
      minSumArrayHelper(arr.slice(1), sum, start + 1, end + 1);
    } else {
      minSumArrayHelper(arr.slice(start), sum, start, end + 1);
    }
    return mlen;
  };
  return minSumArrayHelper(arr, sum, 0, 0);
};
// let res = minSumArray([1, 4, 4], 4);
module.exports = minSumArray;
