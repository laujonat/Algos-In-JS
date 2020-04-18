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

function backtrack(res, slate, numOpen, numClose, bound) {
  console.log("PASSING SLATE", slate);
  if (numOpen === 0 && numClose === 0) {
    res.push(slate);
    console.log(res, "state", slate);
    return;
    // return res;
  }

  if (numOpen < bound) {
    console.log(numOpen, numClose);
    backtrack(res, slate.concat("("), numOpen++, numClose, bound);
  }
  if (numClose === numOpen) {
    console.log(numOpen, numClose);
    backtrack(res, slate.concat(")"), numOpen, numClose++, bound);
  }
}

function find_all_well_formed_brackets(n) {
  if (n <= 1) {
    return "";
  }
  let res = [];
  backtrack(res, "", 0, 0, n);
  return res;
}

$a = find_all_well_formed_brackets(2);
console.log($a);
