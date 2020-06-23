/*
Toeplitz Matrix
A Toeplitz matrix is a matrix where every left-to-right-descending diagonal has the same element. Given a non-empty matrix arr, write a function that returns true if and only if it is a Toeplitz matrix. The matrix can be any dimensions, not necessarily square.

For example,

[[1,2,3,4],
 [5,1,2,3],
 [6,5,1,2]]
is a Toeplitz matrix, so we should return true, while

[[1,2,3,4],
 [5,1,9,3],
 [6,5,1,2]]
isn’t a Toeplitz matrix, so we should return false.

Constraints:

[time limit] 5000ms
[input] array.array.integer arr
0 ≤ arr.length ≤ 20
0 ≤ arr[i].length ≤ 20
0 ≤ arr[i][j] ≤ 20
[output] boolean

*/
function isToeplitz(arr) {
  if (!arr.length) {
    return false;
  }
  let col = 0;
  for (let row = arr.length - 1; row >= 0; row--) {
    let r = row + 1;
    let c = col + 1;
    let current = arr[row][col];
    while (r < arr.length && c < arr[0].length) {
      if (current !== arr[r][c]) {
        return false;
      }
      r = r + 1;
      c = c + 1;
    }
  }
  let row = 0;
  for (let col = 1; col < arr[0].length; col++) {
    let r = row + 1;
    let c = col + 1;
    let current = arr[row][col];
    while (r < arr.length && c < arr[0].length) {
      if (current !== arr[r][c]) {
        return false;
      }
      r = r + 1;
      c = c + 1;
    }
  }

  return true;
}
// let test = [
//   [1, 2, 3, 4],
//   [5, 1, 9, 3],
//   [6, 5, 1, 2],
// ];
// console.log("asjdlksajd");
// let r = isToeplitz(test);
// console.log(r);
module.exports = isToeplitz;
