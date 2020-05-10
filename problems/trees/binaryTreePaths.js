/*
Print All Paths of a Tree
Given a binary tree, return all paths from root to leaf.

Example One
  Input: TreeNode -> [1, 2, 3, 4, 5, 6, 7]
  Output: [[1, 2, 4], [1, 2, 5], [1, 3, 6], [1, 3, 7]]
  There are four leafs in the given graph, so we have four paths: from the root to every leaf. Each path is a list of the values from the tree nodes on the path, and we have four lists. They can go in any order.
Example Two
  Input:  [10, 20, 30, 40, 50]
  Output: [[10, 20, 40], [10, 20, 50], [10, 30]]

  There are 3 paths in the tree. 
  The leftmost path contains values: 10 -> 20 -> 40
  The rightmost path contains values: 10 -> 30
  The other path contains values: 10 -> 20 -> 50
  The order of the paths (order of the lists in the outer list) does not matter, so [[10, 30], [10, 20, 40], [10, 20, 50]] is another correct answer.

Notes
  Input Parameters: Function has one argument, root of the input tree.
  Output: Return a list of integer lists.
Constraints:
  0 <= number of tree nodes <= 10^5
  -10^9 <= values in the nodes <= 10^9
*/
