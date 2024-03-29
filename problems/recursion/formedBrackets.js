/*
Find All Well Formed Brackets
Given a positive integer n, return ALL strings of length 2*n with well formed round brackets.
Example
Input: 3
Output:
[

    "((()))",

    "(()())",

    "(())()",

    "()(())",

    "()()()"

]
Any array containing these five strings in any order is a correct output.

Notes
Input Parameters: Function has one argument, integer n.

Output: Return array of strings containing all possible well formed round brackets string of length 2*n. Order of strings in the returned array is insignificant, e.g. for n=2 both ["(())", "()()"] and ["()()", "(())"] will be accepted.

Constraints:

1 <= n <= 13
Only use round brackets. '(' and ')'.

*/
function backtrack(
  res: Array<?string>,
  slate: string,
  numOpen: number,
  numClosed: number,
  n: number
): ?Array<?string> {
  if (numClosed === n) {
    res.push(slate);
    return;
  }
  // exclude
  if (numOpen < n) {
    backtrack(res, slate.concat("("), numOpen + 1, numClosed, n);
  }
  // include
  if (numClosed < numOpen) {
    backtrack(res, slate.concat(")"), numOpen, numClosed + 1, n);
  }
  return res;
}

function find_all_well_formed_brackets(n) {
  if (n <= 1) {
    return "";
  }
  let res = [];
  backtrack(res, "", 0, 0, n);
  return res;
}

// $a = find_all_well_formed_brackets(2);
module.exports = find_all_well_formed_brackets;
