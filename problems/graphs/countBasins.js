/*
Count Basins

Problem Statement:
  You are given a matrix where each number represents altitude of that cell, such that, water flows towards lower altitudes. If a cell’s four neighboring cells all have higher altitudes, we call this cell a sink; water collects in sinks. 
  Otherwise, water will flow to the neighboring cell with the lowest altitude. If a cell is not a sink, you may assume it has a unique lowest neighbor and that this will be lower than the cell. 
  Cells that drain into the same sink – directly or indirectly – are said to be part of the same basin. Your challenge is to partition the map into basins. Your code should output the sizes of the basins, in non-decreasing order.
Input/Output Format For The Function:

Input Format:
  There will be only one argument matrix denoting the matrix of size row_count * col_count, with the altitude represented as int in each cell.
Output Format:
  Return an array of integers, denoting the sizes of basins, in non-decreasing order.

Constraints:
  1 <= row_count * col_count <= 1000000.
  0 <= matrix[i][j] <= 1000000 where 0<=i<row_count, 0<=j<col_count.
*/

function findBasins(matrix) {
  //Write your code here
}

module.exports = findBasins;
