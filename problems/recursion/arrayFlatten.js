/*
Given a nested list of integers, implement an iterator to flatten it.

Each element is either an integer, or a list -- whose elements may also be integers or other lists.

Example 1:

Input: [[1,1],2,[1,1]]
Output: [1,1,2,1,1]
Explanation: By calling next repeatedly until hasNext returns false, 
             the order of elements returned by next should be: [1,1,2,1,1].
Example 2:

Input: [1,[4,[6]]]
Output: [1,4,6]
Explanation: By calling next repeatedly until hasNext returns false, 
             the order of elements returned by next should be: [1,4,6].

*/

// T(n): O(n)
// Space: O(n)
function arrayFlatten(arr, res = []) {
  if (arr.length <= 1) {
    return arr;
  }
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      let a = arrayFlatten(arr[i], res);
      res.concat(a);
    } else {
      res.push(arr[i]);
    }
  }
  return res;
}

function arrayFlattenV2(arr) {
  return arr.reduce(
    (a, b) => a.concat(Array.isArray(b) ? arrayFlattenV2(b) : b),
    []
  );
}
module.exports = arrayFlattenV2;
