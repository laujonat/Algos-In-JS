/*
Number of Paths

You’re testing a new driverless car that is located at the Southwest (bottom-left) corner of 
an n×n grid. The car is supposed to get to the opposite, Northeast (top-right), corner of the 
grid. Given n, the size of the grid’s axes, write a function numOfPathsToDest that returns the number 
of the possible paths the driverless car can take.


[x,x,x,0]
[x,x,0,0]
[x,0,0,0]
[0,0,0,0]

For convenience, let’s represent every square in the grid as a pair (i,j). 
The first coordinate in the pair denotes the east-to-west axis, and the second coordinate denotes 
the south-to-north axis. The initial state of the car is (0,0), and the destination is (n-1,n-1).

The car must abide by the following two rules: it cannot cross the diagonal border. 
In other words, in every step the position (i,j) needs to maintain i >= j. See the illustration 
above for n = 5. In every step, it may go one square North (up), or one square East (right), 
but not both. E.g. if the car is at (3,1), it may go to (3,2) or (4,1).

Explain the correctness of your function, and analyze its time and space complexities.

Constraints:
  [time limit] 5000ms
  [input] integer n
    1 ≤ n ≤ 100
  [output] integer
*/

// T(n): O(2^n)
// Space: O(2^n)
function numOfPathsToDest(n) {
  let numPaths = 0;
  function helper(i = 0, j = 0) {
    if (i + 1 < n) {
      helper(i + 1, j);
    }
    if (i > j) {
      helper(i, j + 1);
    }
    if (i === n - 1 && j === n - 1) {
      numPaths++;
      return;
    }
    return numPaths;
  }
  helper();
  return numPaths;
}

// Dynamic Programming approach with memoization
// T(n): O(n^2)
// Space:O(n^2)
function numOfPathsToDestV2(n) {
  let numPaths = 0;
  let memo = new Array(n).fill(new Array(n).fill(-1));
  return helper(n, numPaths);
}

let res = numOfPathsToDest(4);

module.exports = numOfPathsToDest;
