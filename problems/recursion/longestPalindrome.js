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

function solve(str) {
  let curr = "";
  function helper(start, end) {
    if (end === str.length && start === str.length) {
      return;
    }
    let substr = str.slice(start, end + 1);
    if (isPalindrome(substr)) {
      if (curr.length < substr.length) {
        curr = substr;
      }
      helper(end + 1, end + 1);
    }
    if (end + 1 !== str.length) {
      helper(start, end + 1);
    }
    return curr;
  }

  return helper(0, 0);
}

const longestPalindrome = function(s) {
  const result = [];
  let curr = "";
  const helper = (input, partition, i) => {
    // console.log("EVALUATING", partition, i);
    const len = input.length;
    if (i === len) {
      if (isPalindrome(partition)) {
        console.log("IS PALINDROME", partition, i);
        if (curr.length < partition.length) {
          curr = partition;
          return;
        }
      }
    }
    for (let j = i + 1; j <= len; j++) {
      // console.log("CURRENT", s.slice(i, j), j);
      if (isPalindrome(s.slice(i, j))) {
        if (curr.length < partition.length) {
          curr = partition;
        }
        partition = s.slice(i, j);
        // console.log("EXCLUSION", partition, j);

        helper(input, partition, j);
        // console.log("RESULT OF PARTIION", partition, i);
      }
    }
    return curr;
  };

  return helper(s, curr, 0);
};

// O(n^3)
var longestPalindromeV2 = function(s) {
  if (s.length <= 1) {
    return s;
  }
  let curr = "";
  for (let i = 0; i < s.length; i++) {
    // O(n)
    for (let j = i + 1; j < s.length; j++) {
      // O(n)
      let substr = s.slice(i, j);
      if (isPalindrome(substr) && substr.length > curr.length) {
        curr = substr;
      }
    }
  }
  return curr;
};
let str = "babad";
// let res = solve(str);
module.exports = longestPalindrome;
