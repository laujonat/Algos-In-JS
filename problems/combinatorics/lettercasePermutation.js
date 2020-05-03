/*
    Combination Problem
    Letter case permutation
    
    input: t1D2
    output: t1D2 t1d2 T1D2 T1d2
*/

const letterCasePermutation = function(str) {
  const regex = (str) => {
    return str ? str.match(/[a-z]/gi) : "";
  };
  const res = [];

  const helper = (i, current) => {
    if (i >= str.length) {
      res.push(current);
      return;
    }
    while (!regex(str.charAt(i))) {
      current += str.charAt(i);
      i++;
      if (!str.charAt(i)) {
        return helper(i + 1, current + str.charAt(i).toLowerCase());
      }
    }
    helper(i + 1, current + str.charAt(i).toLowerCase());
    helper(i + 1, current + str.charAt(i).toUpperCase());
  };
  helper(0, "");
  return res;
};

let str = "t1D1";
// let res = letterCasePermutation(str);

module.exports = letterCasePermutation;
