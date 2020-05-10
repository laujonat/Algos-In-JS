/*
How Many Binary Search Trees With n Nodes?

Write a function that returns the number of distinct binary search trees that can be constructed with n nodes.
For the purpose of this exercise, do solve the problem using recursion first even if you see some non-recursive approaches.

Example One
Input: 1

Output: 1

Example Two
Input: 2
Output: 2
Suppose the values are 1 and 2, then the two trees that are possible are

   (2)               (1)

  /                and \

(1)                     (2)

Example Three
Input: 3

Output: 5

Suppose the values are 1, 2, 3 then the possible trees are

       (3)

      /

    (2)

   /

(1)



   (3)

  /

(1)

   \

   (2)



(1)

   \

    (2)

      \

       (3)



(1)

   \

    (3)

   /

(2)



   (2)

  /   \

(1)    (3)

Notes
Input Parameters: Function has one argument: n.
Output: Function must return an integer value.

Constraints:

1 <= n <= 16

*/

function howManyBSTs(n) {
  if (n <= 1) {
    return 1;
  }
  let res = [];
  const arr = new Array(3).fill().map((el, i) => i + 1);
  let count = 0;

  function helper(arr, subset) {
    if (arr.length === 0) {
      res.push(subset);
      return;
    }
    helper(arr.slice(1), subset);
    helper(arr.slice(1), subset.concat(arr[0]));

    return res;
  }
  return helper(arr, []);
}

module.exports = howManyBSTs;
// let res = howManyBSTs(3);
