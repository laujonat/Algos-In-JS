/*
Alternating Positives and Negatives

Given an array of positive and negative integers, rearrange the elements so that the positive and negative numbers alternate. Order of the positive elements should be preserved, same with the negative ones.
Consider zero a positive number for this exercise.
Start output with a positive integer if one exists in the input.
Number of positive and negative integers may not be equal and extra positives or negatives have to appear at the end of the output.

Example

Input: [2 3 -4 -9 -1 -7 1 -5 -6]

Output: [2 -4 3 -9 1 -1 -7 -5 -6]
The order of positives in the input: 2, 3, 1.
The order of negatives in the input: -4, -9, -1, -7, -5, -6.
We start with the first positive number, alternate until we run out of (in this case) positives, and dump the remaining negatives at the end of the output.

Notes
Input Parameters: There is only one argument in input, denoting integer array named array. 
Output: Return an integer array with alternate positive and negative numbers with order maintained. 

Constraints:
1 <= n <= 500000
-2 * 10^9 <= array[i] <= 2 * 10^9
*/

function alternatingPosAndNeg(arr) {
  const positives = [];
  const negatives = [];
  const result = [];
  let pcase = true;
  let pos = arr[0] >= 0 ? 0 : 1;
  let neg = pos === 0 ? 1 : 0;
  while (pos < arr.length && neg < arr.length) {
    if (pcase) {
      while (arr[pos] != null && arr[pos] < 0) {
        pos++;
      }
      if (arr[pos] !== undefined) {
        result.push(arr[pos++]);
      }
      pcase = false;
    } else {
      while (arr[neg] != null && arr[neg] >= 0) {
        neg++;
      }
      if (arr[neg] !== undefined) {
        result.push(arr[neg++]);
      }
      pcase = true;
    }
  }
  while (pos < arr.length) {
    if (arr[pos] >= 0) {
      result.push(arr[pos]);
    }
    pos++;
  }
  while (neg < arr.length) {
    if (arr[neg] < 0) {
      result.push(arr[neg]);
    }
    neg++;
  }
  return result;
}

// let a = [2, 3, -4, -9, -1, -7, 1, -5, -6];
// let b = [-1, 1];

module.exports = alternatingPosAndNeg;
