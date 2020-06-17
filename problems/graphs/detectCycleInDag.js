/*
Detect Cycle In Directed Graph
Problem Statement:
Given a directed graph, find out whether it includes a cycle.

Input Format:
Function has three arguments:
  N, number of vertices.
  M, number of directed edges.

  edges, a two-dimensional array where each one of M rows represents an edge; integer values in the first and second columns of a row are (zero-based) indices of the starting and ending vertices, respectively, of that directed edge.

Output Format:
  Function must return boolean true if at least one cycle exist in the given graph, otherwise it must return false.

Constraints:
  2 <= N <= 100000
  1 <= M <= 100000
Nodes aren’t assigned values explicitly but indexed, i.e. 0, 1, ..., N-1.
Given graph doesn’t have multiple edges between the same vertices, i.e. if u→v edge is present, another u→v won’t be.

Given graph can have multiple components, in other words, it might not be a connected graph.
N = 5, M = 7, edges = [[0,1],[0,3],[1,3],[1,2],[2,3],[4,0],[2,4]]
*/

/*
 * Complete the 'hasCycle' function below.
 *
 * The function accepts INTEGER N, INTEGER M and 2D_INTEGER_ARRAY edges as parameter.
 * The function is expected to return a BOOLEAN.
 */
function hasCycle(N, M, edges) {
  let seen = new Array(N).fill(0);
  let graph = new Array(N);
  for (let i = 0; i < edges.length; i++) {
    let from = edges[i][0];
    let to = edges[i][1];
    if (!Array.isArray(graph[from])) {
      graph[from] = [];
    }
    graph[from].push(to);
  }
  function dfs(vertex) {
    if (seen[vertex] === 1) return true;
    else if (seen[vertex] === 0) {
      seen[vertex] = 1;
      let neighs = graph[vertex];
      if (neighs && neighs.length > 0) {
        for (let i = 0; i < neighs.length; i++) {
          let hasCycle = dfs(neighs[i]);
          if (hasCycle) return true;
        }
      }
    }
    seen[vertex] = 2;
    return false;
  }
  for (let i = 0; i < graph.length; i++) {
    if (seen[i] === 0) {
      if (dfs(i)) return true;
    }
  }
  return false;
}

let e = [
  [0, 1],
  [1, 3],
  [2, 3],
  [1, 2],
  [4, 1],
  [0, 4],
];

let edges = [
  [0, 1],
  [1, 2],
  [2, 3],
  [2, 4],
  [3, 4],
  [4, 5],
  [0, 5],
  [6, 7],
  [7, 8],
  [8, 9],
  [9, 6],
  [6, 10],
  [10, 7],
];

// console.log(hasCycle(11, 13, edges));
// console.log(hasCycle(5, 6, e));
module.exports = hasCycle;
