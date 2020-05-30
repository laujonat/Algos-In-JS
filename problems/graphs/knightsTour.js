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
