// @flow
/*
    Permutations of a string w/o repetition
    Order does matter, no repetition 
    i=0 (a) bc -> a| bc a| cb
    i=1 a(b)c -> b| ac b|ca
    i=2 ab(c) -> c|ab c|ba

    input: {a,b,c} 
    output: {abc}, {acb}, {bac}, {bca}, {cab}, {cba}
*/
// O(n!)
// Order matters
const permutationHelper = function(slate, str) {
  if (str.length === 0) {
    console.log(slate);
  }
  // character to pull out
  for (let i = 0; i < str.length; i++) {
    permutationHelper(slate.concat(str[i]), str.slice(0, i) + str.slice(i + 1));
  }
};

const printPermutations = function(str) {
  permutationHelper("", str);
};

const permutationsV2 = function(str: string) {
  const res = [];
  const helper = (current, i) => {
    if (i >= str.length) {
      res.push(current);
      return;
    }
    helper(current + str.slice(i), i + 1);
    helper(str.slice(i + 1) + current, i + 1);
    return res;
  };
  return helper("", 0);
};

// let res = permutationsV2("abc");
// console.log(res);
module.exports = permutationsV2;
