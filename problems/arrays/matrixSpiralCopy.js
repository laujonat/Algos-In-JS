/*
Matrix Spiral Copy
Given a 2D array (matrix) inputMatrix of integers, create a function spiralCopy that copies inputMatrix’s values into a 1D array in a spiral order, clockwise. Your function then should return that array. Analyze the time and space complexities of your solution.

Example:

input:  inputMatrix  = [ [1,    2,   3,  4,    5],
                         [6,    7,   8,  9,   10],
                         [11,  12,  13,  14,  15],
                         [16,  17,  18,  19,  20] ]

output: [1, 2, 3, 4, 5, 10, 15, 20, 19, 18, 17, 16, 11, 6, 7, 8, 9, 14, 13, 12]
See the illustration below to understand better what a clockwise spiral order looks like.
*/

function spiralMatrix(matrix) {
  if (!matrix.length || !matrix[0].length) return [];

  const solArr = [];

  let l = 0;
  let t = 0;
  let r = matrix[0].length - 1;
  let b = matrix.length - 1;

  while (l <= r && t <= b) {
    for (let i = l; i <= r; i++) {
      solArr.push(matrix[t][i]);
    }

    t++;

    for (let i = t; i <= b; i++) {
      solArr.push(matrix[i][r]);
    }

    r--;

    if (l <= r && t <= b) {
      for (let i = r; i >= l; i--) {
        solArr.push(matrix[b][i]);
      }

      b--;

      for (let i = b; i >= t; i--) {
        solArr.push(matrix[i][l]);
      }

      l++;
    }
  }

  return solArr;
}
const inputMatrix = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
];
// let output: [1, 2, 3, 4, 5, 10, 15, 20, 19, 18, 17, 16, 11, 6, 7, 8, 9, 14, 13, 12]

module.exports = spiralMatrix;
