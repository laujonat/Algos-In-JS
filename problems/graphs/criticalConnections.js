/*
Critical Connections
Problem Statement:

There are n servers numbered from 0 to n-1 connected by undirected server-to-server connections forming a network where connections[i] = [a, b] represents a connection between servers a and b.
A critical connection is a connection that, if removed, will make some x server unable to reach some other y server which were initially reachable.

Return all critical connections in the network in any order.

Note: In case of no critical connection found then return a 2D array with single row containing two elements having value -1 i.e. [[-1, -1]].
Input Format:
  There are three arguments to the input function. First argument is an integer denoting noOfServers, second argument is an integer denoting noOfConnections and last argument is a 2D array of integers connections where each row is [a, b] denoting a single connection of network.

Output Format:
  Return a 2D array of integers denoting critical connections of network where each row is [a, b] denoting a single critical connection of network.

Constraints:
  1 <= noOfServers <= 4*10^5.
  0 <= noOfConnections <= minimum(4*10^5, noOfServers*(noOfServers-1)/2).
  0 <= connection[i][0], connection[i][1] < noOfServers.

Sample Input:
  noOfServers = 4, noOfConnections = 4, connections = [[0, 1], [1, 2], [2, 0], [1, 3]]

Sample Output:
  result=[[1, 3]]
*/

/*
Complete the function findCriticalConnections
The function takes integers noOfServers, noOfConnections and 2D integer array as parameters.
Returns a 2D integer array.
*/
function findCriticalConnections(noOfServers, noOfConnections, connections) {
  // Build adj matrix
  /*
    For every edge (u, v), do following:
      - Remove (u, v) from graph
      - See if the graph remains connected (We can either use BFS or DFS)
      - Add (u, v) back to the graph
  */
}

module.exports = findCriticalConnections;
