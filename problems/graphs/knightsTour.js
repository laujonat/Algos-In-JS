/*
Knight's Tour On A Chess Board

You are given a rows * cols chessboard and a knight that moves like in normal chess. Currently knight is at starting position denoted by start_row th row and start_col th col, and want to reach at ending position denoted by end_row th row and end_col th col.  The goal is to calculate the minimum number of moves that the knight needs to take to get from starting position to ending position.

start_row, start_col, end_row and end_col are 0-indexed. 
Example

Input:

rows = 5

cols = 5

start_row = 0

start_col = 0

end_row = 4

end_col = 1

Output: 3
3 moves to reach from (0, 0) to (4, 1):

(0, 0) -> (1, 2) -> (3, 3) -> (4, 1). 

Notes

Input Parameters:

There are six arguments. First is an integer denoting rows, second is an integer denoting cols, third is an integer denoting start_row, fourth is an integer denoting start_col, fifth is an integer denoting end_row and sixth is an integer denoting end_col.

Output: Return an integer.

If it is possible to reach from starting position to ending position then return the minimum number of moves that the knight needs to take to get from starting position to ending position.

If it is not possible to reach from starting position to ending position then return -1.

Constraints:

1 <= rows * cols <= 10^5
0 <= start_row, end_row < rows
0 <= start_col, end_col < cols
*/
"use-strict";
function buildBoard(rows, cols) {
  const grid = new Array(rows);
  for (let i = 0; i < grid.length; i++) {
    grid[i] = new Array(cols).fill(0);
  }
  return grid;
}

function findMinimumNumberOfMoves(
  rows,
  cols,
  start_row,
  start_col,
  end_row,
  end_col
) {
  if (start_row === end_row && start_col === end_col) {
    return 0;
  }
  const result = bfs(
    start_row,
    start_col,
    end_row,
    end_col,
    buildBoard(rows, cols)
  );
  return result;
}
function bfs(sr, sc, end_row, end_col, board) {
  let cols = board[0].length;
  let rows = board.length;
  const withinColumnBounds = (col, cols) => {
    return col < cols && col >= 0;
  };
  const withinRowBounds = (row, rows) => {
    return row < rows && row >= 0;
  };
  const dir = [
    [-2, -1],
    [-2, 1],
    [2, -1],
    [2, 1],
    [-1, -2],
    [-1, 2],
    [1, 2],
    [1, -2],
  ];
  let Q = [];

  Q.push([sr, sc]);

  while (Q.length !== 0) {
    let [r, c] = Q.shift();
    // console.log(r, end_row, c, end_col);
    if (r === end_row && c === end_col) {
      return board[r][c];
    }
    for (let i = 0; i < dir.length; i++) {
      // current direction option
      let dirCurr = dir[i];
      let row = r + dirCurr[0];
      let col = c + dirCurr[1];

      if (
        withinColumnBounds(col, cols) &&
        withinRowBounds(row, rows) &&
        board[row][col] === 0 // not visited
      ) {
        board[row][col] += board[r][c] + 1; // set unvisted to some value other than 0
        Q.push([row, col]);
      }
    }
  }

  return -1;
}

module.exports = findMinimumNumberOfMoves;
