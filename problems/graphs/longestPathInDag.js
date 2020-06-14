/*
Longest Path In Weighted DAG

[1] --> 2' --> [2]
|  \
4'   2'
|      ↘
v         ↘ 
[4] <- 3'-- [3]
Given a weighted directed acyclic graph (DAG), find the longest path between two nodes.

Example

Input:
dag_nodes = 4

dag_from = [1 1 1 3]

dag_to = [2 3 4 4]

dag_weight =  [2 2 4 3]

from_node = 1

to_node = 4

Output: [1, 3, 4]

Total there are two paths from node 1 to node 4:

1) 1 -> 4 with length 4.

2) 1 -> 3 -> 4 with length 2 + 3 = 5.

The latter is the longest one.

Notes

Input Parameters: There are six arguments.

An integer dag_nodes
An integer array dag_from
An integer array dag_to
An integer array dag_weight 
An integer from_node
An integer to_node
The first four arguments cumulatively describe the weighted DAG: there are dag_nodes nodes and there is an edge from dag_from[i] node to dag_to[i] node with length dag_weight[i].

Output: Return an array of integers, the nodes in the longest paths from from_node to to_node (including both ends). If from_node=to_node, return [from_node]. If there are multiple longest paths, return any one.

Constraints:

There will be at most one edge connecting any pair of nodes in one direction, i.e. no multi edges.
to_node is reachable from from_node.
1 <= dag_nodes <= 450
1 <= dag_from[i], dag_to[i], from_node, to_node <= dag_nodes
1 <= dag_weight[i] <= 2 * 10^9
Total number of edges in the graph <= (dag_nodes * (dag_nodes - 1)) / 2

*/
function findLongestPath(
  dag_nodes,
  dag_from,
  dag_to,
  dag_weight,
  from_node,
  to_node
) {}

module.exports = findLongestPath;
