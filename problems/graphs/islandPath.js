/*
Island Count
Given a 2D array binaryMatrix of 0s and 1s, implement a function getNumberOfIslands that returns the number of islands of 1s in binaryMatrix.

An island is defined as a group of adjacent values that are all 1s. A cell in binaryMatrix is considered adjacent to another cell if they are next to each either on the same row or column. Note that two values of 1 are not part of the same island if they’re sharing only a mutual “corner” (i.e. they are diagonally neighbors).

Explain and code the most efficient solution possible and analyze its time and space complexities.

Example:

input:  binaryMatrix = [ [0,    1,    0,    1,    0],
                         [0,    0,    1,    1,    1],
                         [1,    0,    0,    1,    0],
                         [0,    1,    1,    0,    0],
                         [1,    0,    1,    0,    1] ]

output: 6 # since this is the number of islands in binaryMatrix.
          # See all 6 islands color-coded below.
*/

type G = Array<Array<number>>;

function islandPath(grid: G) {
  let connected = 0;
  const visited = new Map();
  function isValid(row, col) {
    return (
      row < grid.length &&
      row >= 0 &&
      col < grid[0].length &&
      col >= 0 &&
      !visited.has([row, col].join(","))
    );
  }

  function findPaths(row, col) {
    const Q = [];
    Q.push([row, col]);

    while (Q.length) {
      const [r, c] = Q.pop();
      if (grid[r][c] === 0) {
        return;
      }
      const directions = [
        [r - 1, c],
        [r + 1, c],
        [r, c - 1],
        [r, c + 1],
      ];
      directions.forEach((coord) => {
        x = coord[0];
        y = coord[1];
        if (x >= 0 && x < grid.length && y >= 0 && y < grid[0].length) {
          if (grid[x][y] === 1) {
            if (isValid(x, y)) {
              visited.set([x, y].join(","), 1);
              grid[x][y] = "x";
              Q.unshift([x, y]);
            }
          }
        }
      });
    }
  }
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (!visited.has([i, j].join(","))) {
        visited.set([i, j].join(","), 1);
        if (grid[i][j] === 0) {
          continue;
        } else {
          grid[i][j] = "x";
          connected++;
          findPaths(i, j);
        }
      }
    }
  }

  return connected;
}

let binaryMatrix = [
  [0, 1, 0, 1, 0],
  [0, 0, 1, 1, 1],
  [1, 0, 0, 1, 0],
  [0, 1, 1, 0, 0],
  [1, 0, 1, 0, 1],
];

console.log(islandPath(binaryMatrix));

module.exports = islandPath;
