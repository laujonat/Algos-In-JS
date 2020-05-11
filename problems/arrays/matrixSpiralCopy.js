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

const matrixSpiralCopy = (arr: Array<Array<number>>) => {
  let row = arr.length;
  let col = arr[0].length;

  let top = 0;
  let down = row - 1;
  let left = 0;
  let right = col - 1;
  const res = [];
  while (top <= down && left <= right) {
    for (let i = left; i <= right; i++) {
      res.push(arr[top][i]);
    }
    top++;

    for (let i = top; i <= down; i++) {
      res.push(arr[i][right]);
    }

    right--;

    if (top <= down) {
      for (let i = right; i >= left; i--) {
        res.push(arr[down][i]);
      }
      down--;
    }
    if (left <= right) {
      for (let i = down; i <= top; i++) {
        res.push(arr[i][left]);
      }
      left++;
    }
  }
  return res;
};

module.exports = matrixSpiralCopy;
