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

const isPalindrome = (str) => {
  let end = str.length - 1;
  let i = 0;
  while (i < end) {
    if (str.charAt(i) !== str.charAt(end)) {
      return false;
    }
    i++;
    end--;
  }
  return true;
};

var solveV2 = function(s) {
  const result = [];
  let partition = "";
  const helper = (input, partition, i, res = []) => {
    if (i === s.length) {
      if (isPalindrome(partition)) {
        result.push(res.join("|"));
        return;
      }
    }
    for (let j = i + 1; j <= s.length; j++) {
      if (isPalindrome(s.slice(i, j))) {
        partition = s.slice(i, j);
        res.push(partition);
        // console.log("res", res);
        helper(input, partition, j, res);
        res.pop();
        // console.log("popping", res.pop());
      }
    }
    return result;
  };

  return helper(s, partition, 0, []);
};

const str = "abracadabra";
let res = solveV2(str);
module.exports = solveV2;
