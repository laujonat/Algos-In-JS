/**
 * The goal is break down the problem by finding permutations in subarrays.
 * So we will maintain a subarray of fixed elements and a subarray for
 * exploring permutations.
 *
 *                  [1], [2, 3]    [1, 2], [3]    [1, 2, 3]
 * [], [1, 2, 3] -> [2], [1, 3] -> [1, 3], [2] -> [1, 3, 2]
 *                  [3], [1, 2]    [2, 1], [1]    [2, 1, 3]
 *                                 [2, 3], [1]    [2, 3, 1]
 *                                 [3, 1], [2]    [3, 1, 2]
 *                                 [3, 2], [1]    [3, 2, 1]
 */

function permutation(nums) {
  if (nums.length === 1) {
    return [nums];
  }
  const result = [];
  const helper = (slate, arr) => {
    if (arr.length === 0) {
      result.push(slate);
      return;
    }
    for (let i = 0; i < arr.length; i++) {
      helper([...slate, arr[i]], [...arr.slice(0, i), ...arr.slice(i + 1)]);
    }
    return result;
  };
  return helper([], nums);
}

console.log(permutation([1, 2, 3]));
module.exports = permutation;
