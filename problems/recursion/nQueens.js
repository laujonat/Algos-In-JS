/*
n Queen Problem

Given an integer n, find all the possible ways to position n queens on an n×n chessboard so that no two queens attack each other.
A queen in chess can move horizontally, vertically, or diagonally.
Do solve the problem using recursion first even if you see some non-recursive approaches.

Example One
Input: 4

Input: 4
Output: [
 [".Q..",  // Solution 1
  "...Q",
  "Q...",
  "..Q."],

 ["..Q.",  // Solution 2
  "Q...",
  "...Q",
  ".Q.."]
]

Example Two
Input: 2

Output: [ ]
No way to position two queens on a 2×2 chessboard without them attacking each other - so empty array.

Notes
Input Parameters: Function has one argument: n.
Output: Function must return a two-dimensional array of strings representing the arrangements. Size of the array must be m×n where m is the number of distinct arrangements. Length of each string must be n and the strings’ characters may be either ‘q’ (for a queen) or ‘-’ (for empty position on the chessboard). Valid arrangements may appear in the output in any order.
Constraints:
1 <= n <= 12

*/
type T = Array<Array<?string>>;
type PType = Array<?Array<{ i: number, j: number }>>;
function nQueens(n): T {
  // permutation of 4 distinct elements of arrays
  // const board: T = new Array(n).fill(new Array(n).fill("-"));

  const validPlacement = (row: number, col: number, board: T): boolean => {
    for (let i = row; i >= 0; i--) {
      if (board[i] === col) {
        return false;
      }
      if (Math.abs(row - i) === Math.abs(board[i] - col)) {
        return false;
      }
    }
    return true;
  };

  const format = (arrayOfColumnPlacements) => {
    const res = [];
    for (let row = 0; row < arrayOfColumnPlacements.length; row++) {
      let rowarr = new Array(arrayOfColumnPlacements.length).fill("-");
      for (let col = 0; col < arrayOfColumnPlacements.length; col++) {
        if (arrayOfColumnPlacements[row] === col) {
          rowarr[col] = "q";
        }
      }
      let drow = rowarr.join("");
      res.push(drow);
    }
    return res.map((el) => el);
  };

  const result = [];
  const arrangementHelper = (numRow: number, arrayOfColumnPlacements: T): T => {
    if (numRow === n) {
      result.push(format(arrayOfColumnPlacements));
    }

    for (let j = 0; j < n; j++) {
      if (validPlacement(numRow, j, arrayOfColumnPlacements)) {
        arrayOfColumnPlacements[numRow] = j;
        arrangementHelper(numRow + 1, arrayOfColumnPlacements);
        arrayOfColumnPlacements.pop(0);
        // console.log("Arrr", arrayOfColumnPlacements);
      }
    }

    return result;
  };

  return arrangementHelper(0, []);
}

let r = nQueens(4);
console.log(r);
