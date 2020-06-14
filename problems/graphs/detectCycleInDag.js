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

*/

/*
 * Complete the 'hasCycle' function below.
 *
 * The function accepts INTEGER N, INTEGER M and 2D_INTEGER_ARRAY edges as parameter.
 * The function is expected to return a BOOLEAN.
 */
function hasCycle(N, M, edges) {}

module.exports = hasCycle;
