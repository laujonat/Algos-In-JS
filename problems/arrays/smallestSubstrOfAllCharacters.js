/*
Smallest Substring of All Characters
Given an array of unique characters arr and a string str, Implement a function getShortestUniqueSubstring that finds the smallest substring of str containing all the characters in arr. Return "" (empty string) if such a substring doesn’t exist.

Come up with an asymptotically optimal solution and analyze the time and space complexities.

Example:

input:  arr = ['x','y','z'], str = "xyyzyzyx"

output: "zyx"
Constraints:

[time limit] 5000ms

[input] array.character arr

1 ≤ arr.length ≤ 30
[input] string str

1 ≤ str.length ≤ 500
[output] string

*/

function getShortestUniqueSubstring(arr, str) {
  const countMap = new Map();
  let result = "";
  let headIdx = 0;
  let unique = 0;
  for (let i = 0; i < arr.length; i++) {
    countMap.set(arr[i], 0);
  }

  for (let j = 0; j < str.length; j++) {
    let tailChar = str.charAt(j);
    console.log("current tail", tailChar, "header", headIdx);
    if (!countMap.has(tailChar)) {
      // characters not in arr
      continue;
    }
    let tailCount = countMap.get(tailChar);
    if (tailCount === 0) {
      unique += 1;
    }
    countMap.set(tailChar, tailCount + 1);
    while (unique === arr.length) {
      // all characters are within bounds
      let tempLen = j - headIdx + 1;
      console.log("tempLen", tempLen);
      if (tempLen == arr.length) {
        return str.substring(headIdx, j + 1);
      }

      if (result == "" || tempLen < result.length) {
        result = str.substring(headIdx, j + 1);
      }
      let headChar = str.charAt(headIdx);
      console.log("headChar", headChar);
      if (countMap.has(headChar)) {
        let headCount = countMap.get(headChar) - 1;
        if (headCount == 0) {
          unique = unique - 1;
        }
        countMap.set(headChar, headCount);
      }

      headIdx += 1;
    }
  }
  return result;
}
// var arr = ["x", "y", "z"],
//   str = "xyyzyzyx";
// // let a = ["A", "B", "C", "E", "K", "I"];
// // let b = "KADOBECODEBANCDDDEI";
// console.log(getShortestUniqueSubstring(arr, str));

module.exports = getShortestUniqueSubstring;
