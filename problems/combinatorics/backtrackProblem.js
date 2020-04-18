/*
    Given two integers n and k, return all possible combinations of k numbers ouit of 1...n
    input n = 4, k = 2
    output: [2,4] [3,4] [2,3] [1,2] [1,3] [1,4]
*/

const helper = function(arr, start, slate, coll) {
  if (start === arr.length - 1) {
    coll.push(slate);
  }
  helper(arr, start + 1, slate);
};
