/*
Shortest Path In 2D Grid With Keys And Doors
Problem Statement:

Given a two-dimensional grid of size n * m that represents a maze-like area, a start cell and a goal cell, you have to find the shortest path from the start to the goal.

You can go up, down, left or right from a cell, but not diagonally.

Each cell in the grid can be either land or water or door or key or start or goal.

You can travel on any cells but water.

Every key and every door belongs to a particular “type”. For example a key of type ‘a’ can open a door of type ‘A’ but not a door of type ‘B’. There can be more than one key of a particular type in the maze, all keys of one type are equivalent. Similarly there can be more than one door of any type. You cannot travel through a door unless you have picked up a key of the corresponding type before. A key is picked up by visiting its cell. If you have picked up a certain type of key, you can then travel through any doors of that type any number of times.

It is allowed to revisit a cell.

Input Format:

Function has one argument: an array of strings called grid. String grid[0] is the top row of cells in the maze. First character in that string represents the top-left corner of the maze, the [0, 0] position. 

Characters in the strings can be either:

'#' = Water.

'.' = Land.

'a' = Key of type 'a'. Any lowercase character represents a key.

'A' = Door that can be opened with key 'a'. Any uppercase character represents a door.

'@' = Starting cell.

'+' = The goal cell.
Output Format:
Function must return a two-dimensional array of integers describing the shortest path from the start cell to the goal cell. First cell in the path must be the start cell, last cell must be the goal cell.

Size of the array must be p * 2 where p is the number of cells in the path. array[i][0] and array[i][1] are the x and y coordinates of the i-th cell in the path.

Just like in the input, [0, 0] is the top-left corner of the maze, [0, 1] is the second cell in the top row.

If there are multiple shortest paths, any one of them will be accepted as a correct answer.
Constraints:

1 <= n, m <= 100
There will be exactly one start cell and one goal cell.
It is guaranteed that there exists a path from start to goal.
'a' <= key <= 'j'
'A' <= door <= 'J'
*/

class Point {
  constructor(coord, parent, ring) {
    this.x = coord[0];
    this.y = coord[1];
    this.parent = parent;
    this.keyRing = ring;
    this.id = this.x + "-" + this.y + "-" + this.keyRing;
  }
}

function shortestPathInGridWithKeysAndLocks(grid) {
  const rows = grid.length,
    cols = grid[0].length,
    queue = [],
    visited = {},
    doors = new Set("ABCDEFGHIJ"),
    keys = new Set("abcdefghij");
  let start = getStart(grid, rows, cols);

  const p = new Point(start, null);
  queue.push(p);
  visited[p.id] = p;

  while (queue.length) {
    const current = queue.shift();

    if (grid[current.x][current.y] === "+") return createPath(current, visited);
    const moves = [
      [current.x, current.y - 1],
      [current.x, current.y + 1],
      [current.x - 1, current.y],
      [current.x + 1, current.y],
    ];

    for (let [r, c] of moves) {
      // border
      if (r < 0 || c < 0 || r >= rows || c >= cols) continue;

      const v = grid[r].charAt(c);
      //water
      if (v === "#") continue;

      //door without keys
      if (doors.has(v) && !hasKey(v, current.keyRing)) continue;

      //new ring
      const newRing = updateKeyRing(v, current.keyRing, keys);
      const p = new Point([r, c], current, newRing);

      if (visited[p.id]) continue;

      queue.push(p);
      visited[p.id] = p;
    }
  }
}

function updateKeyRing(v, key, keys) {
  if (!keys.has(v)) return key;
  const keyVal = v.charCodeAt(0) - "a".charCodeAt(0);
  return key | (1 << keyVal);
}

function hasKey(v, key) {
  // console.log(v, v.charCodeAt(0));
  const doorKey = v.charCodeAt(0) - "A".charCodeAt(0);
  // console.log(v, doorKey);
  return key & (1 << doorKey);
}

function createPath(end, visited) {
  let current = end,
    result = [];
  while (current) {
    result.push([current.x, current.y]);
    current = current.parent;
  }
  return result.reverse();
}

function getStart(grid, rows, cols) {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i].charAt(j) === "@") {
        return [i, j];
      }
    }
  }
}
const grid = ["...B", ".b#.", "@#+."];
let r = shortestPathInGridWithKeysAndLocks(grid);
module.exports = shortestPathInGridWithKeysAndLocks;
