/*
Lexicographical Order
Problem Statement:
You are given a string array named arr, of size N, containing KEYS and VALUES separated by a space.
Your task is to find, for each unique KEY, the number of VALUES with that key and the VALUE with the highest lexicographical order (also called alphabetical order OR dictionary order).
(Have a look at the sample test cases for more clarity.)
Input/Output Format For The Function:
Input Format:
There is only one argument: String array arr.
Output Format:
Return a string array res, with an entry for each unique key. Each entry should contain key, number of values corresponding to that key and value with the highest lexicographical order in the below format:

"<KEY>:<COUNT>,<HIGHEST_LEXICOGRAPHICAL_VALUE>"

Order of the output does not matter.

Output Format:
There will be N lines of output, where ith line contains a string res[i], denoting value at index i of res.
Here, res is the result array returned by solution function.
For input N = 5 and arr = [“key1 abcd”, “key2 zzz”, “key1 hello”, “key3 world”, "key1 hello"], output will be:
  key3:1,world
  key2:1,zzz
  key1:3,hello

Constraints:
  1 <= N <= 10^4 bv  
  1 <= Length(KEYS) <= 256
  1 <= Length(VALUES) <= 800
KEYS can repeat.
VALUES can repeat.
Keys and values will contain only lower case letters and numerics.
*/

function solve(arr) {
  const dict = {};
  function capturePairs(str) {
    return str.match(/\b[a-z0-9]+\b/gi);
  }

  for (let i = 0; i < arr.length; i++) {
    let [key, val] = capturePairs(arr[i]);
    if (dict[key]) {
      if (val > dict[key].val) {
        dict[key].val = val;
      }
      dict[key].count++;
    } else {
      dict[key] = {
        count: 1,
        val: `${val}`,
      };
    }
  }
  let res = [];
  for (let [key, { val, count }] of Object.entries(dict)) {
    res.push(key + ":" + count + "," + val);
  }
  return res;
}
module.exports = solve;
// let arr = ["key1 abcd", "key2 two", "key3 aaaa", "key1 zzz"];
// let res = solve(arr);
// console.log(res);
