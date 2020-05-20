/*
  Enumerate all possible binary strings of length n
*/

// O(2^n)
const helper = (slate, n) => {
  if (n === 0) {
    console.log(slate);
    return slate;
  }
  helper(slate + "0", n - 1);
  helper(slate + "1", n - 1);
};

const binaryStrings = (str) => {
  let n = str.length;
  return helper("", n);
};

module.exports = binaryStrings;
