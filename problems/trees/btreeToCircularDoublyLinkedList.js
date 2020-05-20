/*

Convert a Binary Tree into a Circular Doubly Linked List

Problem Statement:

Write a function BTtoLL(TreeNode root) that takes a binary tree and rearranges its left_ptr and right_ptr pointers to make a circular doubly linked list out of the tree nodes in the in-order traversal order. The head of the list must be the leftmost node of the tree (since it is the first one in the in-order traversal) and the tail of the list must be the rightmost node of the tree. Tail’s “next” pointer must point to the head and head’s “previous” pointer must point to the tail (as circular doubly-linked lists go).

In the resultant data structure we will think of right_ptr as “next” pointer of the list and of left_ptr as the “previous” pointer of the list. Note that although the resultant data structure will consist of a bunch of TreeNode instances, it will not be a tree (because, as a graph, it will have cycles).

The function must not allocate any new TreeNode instances, it must not change existing TreeNodes’ values either. It must change left_ptr and right_ptr pointers of the existing TreeNodes to form the desired data structure.

The function must return a TreeNode instance which is the head of the resultant circular doubly-linked list. The function must not print anything to the standard output.

For example, if given TreeNode “4” as pictured on the first image, we must return TreeNode that’s labeled “ROOT” on the second image:

Input format:
There is only one argument named root denoting the root of the input tree.

Output format:
The function must return a TreeNode instance that is the head of the formed circular doubly-linked list.

Constraints:
0 <= number of nodes <= 100000
1 <= values stored in the nodes <= 10^9
*/
const { btree } = require("./test_utils/btree.js");

const bToll = function(root) {
  let prev = null;
  let head = null;
  let tail = null;
  const helper = (root) => {
    if (!root) {
      return null;
    }
    helper(root.left_ptr);
    if (!prev) {
      head = root;
    } else {
      prev.right_ptr = root;
      root.left_ptr = prev;
    }
    prev = root;
    helper(root.right_ptr);
  };
  helper(root);
  if (!head) {
    // tree is empty
    return null;
  }
  // connect last visited node to head of list
  tail = prev;
  tail.right_ptr = head;
  head.left_ptr = tail;

  return head;
};
// btree.printTree(btree.root);
// let tree = bToll(btree.root);
// console.table(tree);
// console.table(tree.right_ptr);
// console.table(tree.left_ptr);
module.exports = bToll;
