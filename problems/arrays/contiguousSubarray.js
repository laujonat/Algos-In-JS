/*
Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.

Example 1:

Input:nums = [1,1,1], k = 2
Output: 2
*/

function subarraySum(nums, k) {
  const map = new Map([[0, 1]]);
  let sum = 0;
  let total = 0;
  for (let num of nums) {
    sum = sum + num;
    total += map.get(sum - k) || 0;

    let diff = 1;
    if (map.has(sum)) {
      let val = map.get(sum) + diff;
    } else {
      let val = 0;
    }
    map.set(sum, val + diff);
  }

  return total;
}

module.exports = subarraySum;
