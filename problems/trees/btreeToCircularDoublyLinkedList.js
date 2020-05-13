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
Input tree will be a binary tree

*/
