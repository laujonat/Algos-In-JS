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
// {1, 3} -> {3, 1}
const permutationHelper = function (slate, str) {
  if (str.length === 0) { // -> does nothing
    console.log(slate);
  }
  // character to pull out
  for(let i = 0; i < str.length; i++) {
   permutationHelper(slate.concat(str[i]), str.slice(0, i) + str.slice(i+1));
  }
};

const printPermutations = function (str) {
  permutationHelper("", str);
};

// O(2^n)
const permutationHelperV2 = function (slate: string, str: string): void {
  if (str.length === 0) { // -> does nothing
    console.log(slate);
  }
  // exclude
  permutationHelperV2(slate, str.slice(1));
  // include
  permutationHelperV2(slate.concat(str[0]), str.slice(1))
};

const printPermutationsV2 = function (str: string): void {
  permutationHelper("", str);
};

printPermutationsV2("abc");