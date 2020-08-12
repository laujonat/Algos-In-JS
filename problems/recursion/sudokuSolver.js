/*
Sudoku Solver
Write the function sudokuSolve that checks whether a given sudoku board (i.e. sudoku puzzle) is solvable. If so, the function will returns true. Otherwise (i.e. there is no valid solution to the given sudoku board), returns false.

In sudoku, the objective is to fill a 9x9 board with digits so that each column, each row, and each of the nine 3x3 sub-boards that compose the board contains all of the digits from 1 to 9. The board setter provides a partially completed board, which for a well-posed board has a unique solution. As explained above, for this problem, it suffices to calculate whether a given sudoku board has a solution. No need to return the actual numbers that make up a solution.

A sudoku board is represented as a two-dimensional 9x9 array of the characters ‘1’,‘2’,…,‘9’ and the '.' character, which represents a blank space. The function should fill the blank spaces with characters such that the following rules apply:

In every row of the array, all characters ‘1’,‘2’,…,‘9’ appear exactly once.
In every column of the array, all characters ‘1’,‘2’,…,‘9’ appear exactly once.
In every 3x3 sub-board that is illustrated below, all characters ‘1’,‘2’,…,‘9’ appear exactly once.
A solved sudoku is a board with no blank spaces, i.e. all blank spaces are filled with characters that abide to the constraints above. If the function succeeds in solving the sudoku board, it’ll return true (false, otherwise).*/

function getCandidates(board, row, col) {
  const options = new Array(9).fill().map((el, i) => i + 1);
  const candidates = [];
  options.forEach((s) => {
    let collision = false;
    let i = 0;
    let num = s.toString();
    while (i <= 8) {
      if (
        board[row][i] === num ||
        board[i][col] === num ||
        board[row - (row % 3) + Math.floor(i / 3)][col - (col % 3) + (i % 3)] ==
          num
      ) {
        collision = true;
        break;
      }
      i++;
    }

    if (!collision) {
      candidates.push(num);
    }
  });

  return candidates;
}

function sudokuSolve(board) {
  let row = -1;
  let col = -1;
  let candidates = null;
  const rows = new Array(9).fill().map((el, i) => i);
  const cols = new Array(9).fill().map((el, i) => i);

  for (const r in rows) {
    for (const c in cols) {
      if (board[r][c] === ".") {
        let newCandidates = getCandidates(board, r, c);
        if (!candidates || newCandidates.length < candidates.length) {
          candidates = newCandidates;
          row = r;
          col = c;
        }
      }
    }
  }
  if (!candidates) {
    return true;
  }

  for (let i = 0; i < candidates.length; i++) {
    board[row][col] = candidates[i];
    if (sudokuSolve(board)) {
      return true;
    } else {
      board[row][col] = ".";
    }
  }
  return false;
}

// const board = [
//   [".", ".", ".", "7", ".", ".", "3", ".", "1"],
//   ["3", ".", ".", "9", ".", ".", ".", ".", "."],
//   [".", "4", ".", "3", "1", ".", "2", ".", "."],
//   [".", "6", ".", "4", ".", ".", "5", ".", "."],
//   [".", ".", ".", ".", ".", ".", ".", ".", "."],
//   [".", ".", "1", ".", ".", "8", ".", "4", "."],
//   [".", ".", "6", ".", "2", "1", ".", "5", "."],
//   [".", ".", ".", ".", ".", "9", ".", ".", "8"],
//   ["8", ".", "5", ".", ".", "4", ".", ".", "."],
// ];
// console.log(sudokuSolve(board));
module.exports = sudokuSolve;
