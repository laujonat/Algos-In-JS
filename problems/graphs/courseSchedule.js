/*
Course Schedule
There are n courses to take, they are referred to by numbers from 0 to n-1. Some of them have prerequisites, e.g. courses A and B must be completed before course C can be taken (in other words, course C depends on A and B).
Find and return an ordering in which all the given courses can be taken while satisfying all the prerequisites. If there exists more than one such ordering, any one of them would be a correct answer. If no such ordering exists, return a special value.
Example

Input: n=4, prerequisites=[[1, 0], [2, 0], [3, 1], [3, 2]]

Output: [0, 1, 2, 3]
Per sample input, courses 1 and 2 must be done before course 3, course 0 must be done before both 1 and 2. Two possible orderings are [0, 1, 2, 3] and [0, 2, 1, 3] (both are correct answers).

Notes

Input Parameters: Function has two arguments.

First is an integer n, it denotes the number of courses.

Second parameter is a two-dimensional array (or a list of lists) of integers: prerequisites. All inner arrays have a length of two, so prerequisites is essentially a list of pairs. Each pair [X, Y] represents one prerequisite: course Y has to be completed before X can be taken (X depends on Y, in other words).

Output: Function must return an array (list) of integers.

If all given courses can be taken while satisfying given prerequisites, the returned array must contain a possible ordering (if more than one such ordering exists, any one must be returned). Otherwise the function must return an array with one element -1 in it.

Constraints:

1 <= n <= 10000
0 <= number of prerequisites <= 10000

*/
/*
Topological sort implementation via DFS goes like this:

Run top level DFS (iterate through all nodes and run DFS from each unvisited one) on the graph.
Remember the order in which the nodes were “finished with” by DFS.
Return the reverse of that order.
*/
function courseSchedule(n, prerequisites) {
  let visited = {};
  let visiting = {};
  let ordering = [];
  const dependencies = new Map();
  new Array(n).fill().map((_, i) => {
    dependencies.set(i, []);
  });
  //  Create adjacency list
  prerequisites.forEach(([c1, c2]) => {
    if (dependencies.has(c1)) {
      dependencies.get(c1).push(c2);
    }
  });
  // console.log(dependencies);
  let hasCycle = false;
  const dfs = (course) => {
    // console.log(course, visiting[course]);
    if (hasCycle || visiting[course]) {
      // visited but isn’t finished, that means there is a cycle.
      return -1;
    }

    visiting[course] = true;
    const neighbors = dependencies.get(course);
    neighbors.forEach((v, i) => {
      if (!visited[v]) {
        // continue visiting next available neighbor
        if (dfs(v) === -1) {
          hasCycle = true;
          return -1;
        }
      }
    });
    visited[course] = true;
    ordering.push(Number(course));
  };

  for (let [k, v] of dependencies.entries()) {
    if (!visited[k]) {
      const paths = dfs(k);
      if (paths === -1) {
        hasCycle = true;
        break;
      }
    }
  }
  // console.log(hasCycle);
  return !hasCycle ? ordering : [-1];
}
let n = 3,
  prerequisitesA = [
    [0, 1],
    [1, 0],
  ];
// prerequisites = [
//   [1, 0],
//   [2, 0],
//   [3, 1],
//   [3, 2],
// ];
// starts at 0, visits all neighbors of 0
//
// console.log(courseSchedule(n, prerequisitesA));
module.exports = courseSchedule;
