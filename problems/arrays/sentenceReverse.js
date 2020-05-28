/*
Sentence Reverse
You are given an array of characters arr that consists of sequences of characters separated by space characters. Each space-delimited sequence of characters defines a word.

Implement a function reverseWords that reverses the order of the words in the array in the most efficient manner.

Explain your solution and analyze its time and space complexities.
*/

function sentenceReverseDumb(arr) {
  return arr
    .join("")
    .split(" ")
    .reverse()
    .join(" ")
    .split("");
}

function reverse(arr, start, end) {
  let i = start;
  let j = end;
  while (i < j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    i++;
    j--;
  }
  return arr;
}
function sentenceReverse(arr) {
  reverse(arr, 0, arr.length - 1);
  let i = 0;
  let bound = 0;
  while (i < arr.length) {
    if (arr[i] === " ") {
      reverse(arr, bound, i - 1);
      bound = i + 1;
    }
    i++;
  }
  reverse(arr, bound, arr.length - 1);
  return arr;
}

let arr = ["h", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d"];
module.exports = sentenceReverse;
