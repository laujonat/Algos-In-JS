/*

Shortest Cell Path
In a given grid of 0s and 1s, we have some starting row and column sr, sc and a target row and column tr, tc. Return the length of the shortest path from sr, sc to tr, tc that walks along 1 values only.

Each location in the path, including the start and the end, must be a 1. Each subsequent location in the path must be 4-directionally adjacent to the previous location.

It is guaranteed that grid[sr][sc] = grid[tr][tc] = 1, and the starting and target positions are different.

If the task is impossible, return -1.

Examples:

input:
grid = [[1, 1, 1, 1], [0, 0, 0, 1], [1, 1, 1, 1]]
sr = 0, sc = 0, tr = 2, tc = 0
output: 8
(The lines below represent this grid:)
1111
0001
1111

grid = [[1, 1, 1, 1], [0, 0, 0, 1], [1, 0, 1, 1]]
sr = 0, sc = 0, tr = 2, tc = 0
output: -1
(The lines below represent this grid:)
1111
0001
1011
Constraints:

[time limit] 5000ms
[input] array.array.integer grid
1 ≤ arr.length = arr[i].length ≤ 10
[input] integer sr
[input] integer sc
[input] integer tr
[input] integer tc
All sr, sc, tr, tc are valid locations in the grid, grid[sr][sc] = grid[tr][tc] = 1, and (sr, sc) != (tr, tc).
[output] 
*/

function shortestCellPath(grid, sr, sc, tr, tc) {
  /**
	@param grid: integer[][]
	@param sr: integer
	@param sc: integer
	@param tr: integer
	@param tc: integer
	@return: integer
  */

  const queue = [];
  const seen = new WeakMap();
  let depth = 0;
  queue.push({ r: sr, c: sc, depth });
  while (queue) {
    const { r, c, depth } = queue.shift();
    if (tr === r && tc === c) {
      return depth;
    }
    if (r + 1 >= 0 && r + 1 < grid.length) {
      if (grid[r + 1][c]) {
        if (!seen.get([r + 1, c])) {
          queue.push({ r: r + 1, c, depth: depth + 1 });
          seen.set([r + 1, c], depth);
        }
      }
    }
    if (r - 1 >= 0 && r - 1 < grid.length) {
      if (grid[r - 1][c]) {
        if (!seen.get([r - 1, c])) {
          queue.push({ r: r - 1, c, depth: depth + 1 });
          seen.set([r - 1, c], depth + 1);
        }
      }
    }

    if (c + 1 >= 0 && c + 1 < grid[0].length) {
      if (grid[r][c + 1]) {
        if (!seen.get([r, c + 1])) {
          queue.push({ r, c: c + 1, depth: depth + 1 });
          seen.set([r, c + 1], depth);
        }
      }
    }

    if (c - 1 >= 0 && c - 1 < grid[0].length) {
      if (grid[r][c - 1]) {
        if (!seen.get([r, c - 1])) {
          queue.push({ r, c: c - 1, depth: depth + 1 });
          seen.set([r, c - 1], depth);
        }
      }
    }
  }

  return -1;
}

// let grid = [
//   [1, 1, 1, 1],
//   [0, 0, 0, 1],
//   [1, 1, 1, 1],
// ];
// let sr = 0,
//   sc = 0,
//   tr = 2,
//   tc = 0;
// let res = shortestCellPath(grid, sr, sc, tr, tc);
// console.log(res);
module.exports = shortestCellPath;
