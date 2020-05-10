/*
Generate All Subsets Of A Set
Generate ALL possible subsets of a given set. The set is givet in the form of a string s containing distinct lowercase characters 'a' - 'z'.
Example
Input: "xy" 
Output: ["", "x", "y", "xy"] 

Notes
Input Parameters: 
  There is only one argument denoting string s.
Output: 
  Return array of strings res, containing ALL possible subsets of given string. You need not to worry about order of strings in your output array. E.g. s = "a", arrays ["", "a"] and ["a", ""]  both will be accepted.
  Order of characters in any subset must be same as in the input string. 
  For s = "xy", array ["", "x", "y", "xy"] will be accepted, but ["", "x", "y", "yx"] will not be accepted. 
Constraints: 
  0 <= |s| <= 20
  s only contains distinct lowercase alphabetical letters ('a' - 'z').

Empty set is a subset of any set.
Any set is a subset of itself.
*/
"use-strict";

function generateAllSubsets(s) {
  if (s.length < 1) {
    return [s];
  }
  let res = [];
  const helper = function(str, start, slate) {
    if (str.length === start) {
      res.push(slate);
      return;
    }
    helper(str, start + 1, slate);
    helper(str, start + 1, slate + str[start]);
    return res;
  };

  return helper(s, 0, "");
}

const str = "xyz";
// const res = generateAllSubsets(str);
// const str_b = "a";
// const res_b = generateAllSubsets(str_b);
// console.assert(
//   res.toString() === ["", "z", "y", "yz", "x", "xz", "xy", "xyz"].toString(),
//   "result is ",
//   res
// );
// console.assert(res_b.toString() === ["", "a"].toString(), "result is", res_b);

module.exports = generateAllSubsets;
