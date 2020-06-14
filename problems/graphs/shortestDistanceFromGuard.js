/*
Shortest Distance From the Guard

You are given a two-dimensional character grid of size n * m. Each element of the grid is either a GUARD, an OPEN space or a WALL. Every guard can move up, down, left and right in the open space. They cannot move on the wall.

Find, for every cell, the distance from the nearest guard cell. Consider -1 as this distance for wall cells and unreachable cells.

Example One

Input:
  5
  5
  OOOOG
  OWWOO
  OOOWO
  GWWWO
  OOOOG

Output:
  3 3 2 1 0 
  2 -1 -1 2 1 
  1 2 3 -1 2 
  0 -1 -1 -1 1 
  1 2 2 1 0 

All the walls are -1. All other cells have the minimum distance to a Guard.

Example Two

Input:
1
5
GWOWG

Output: 0 -1 -1 -1 0

Open space in the middle is unreachable for the guards hence they have value -1.

Notes

Input Parameters: 
  The function has one parameter, an array of n strings. Each string is m characters long, together they represent the grid. Strings will consist of three different characters: ‘G’ for guard, ‘O’ for open space, and ‘W’ for wall.

Output: 
  Return a two-dimensional array of integers of size n * m. Numbers in the array must represent the distance from the corresponding cell to the nearest guard. Wall cells and cells from which a guard cannot be reached must have value -1.
Constraints:
  1 <= n, m <= 10^3
*/
function findShortestDistanceFromAGuard(grid) {
  // Write your code here
}

module.exports = findShortestDistanceFromAGuard;
