/*
Palindromic Decomposition Of A String

Find all palindromic decompositions of a given string s.

A palindromic decomposition of string is a decomposition of the string into substrings, such that 
all those substrings are valid palindromes.

Example

Input: "abracadabra"

Output: [ "a|b|r|a|c|a|d|a|b|r|a", "a|b|r|a|c|ada|b|r|a", "a|b|r|aca|d|a|b|r|a" ]
*/

function solve(str) {
  let path = [];
  function checkPalindrome(str) {
    let res = true;
    let s = 0;
    let e = str.length - 1;
    for (let i = 0; i < str.length; i++) {
      if (str.charAt(i) !== str.charAt(e)) {
        res = false;
      }
      e--;
    }
    return res;
  }
  let res = [];
  function helper(path, start, end) {
    console.log(str, start, end);

    if (end === str.length && start === str.length) {
      res.push(path.join("|"));
      return path;
    }
    // bab     ab
    let substr = str.slice(start, end + 1);

    if (checkPalindrome(substr)) {
      path.push(substr);

      helper(path, end + 1, end + 1);

      path.pop();
    }

    if (end + 1 !== str.length) {
      helper(path, start, end + 1);
    }
  }

  helper([], 0, 0);
  return res;
}

const str = "abracadabra";
// let res = solve(str);
module.exports = solve;
