/*
Swap kth Nodes In Given Linked List


Given an integer singly linked list L of size n, and an integer k, you have to swap kth (1-indexed) node from the beginning, with kth node from the end. 
Note that you have to swap the nodes themselves, not just the contents.

Example

Input:
list: 1 -> 2 -> 3 -> 4 -> 7 -> 0 -> NULL
k: 2

Output:  
1 -> 7 -> 3 -> 4 -> 2 -> 0 -> NULL

Notes
Input Parameters: 
  There are two arguments in input. First is an integer singly linked list L and second is an integer k. 
Output: 
  Return resultant linked list resL, after swapping kth nodes of L. 
Constraints:
  1 <= n <= 100000
  -2 * 10^9 <= value stored in any node <= 2 * 10^9
  1 <= k <= n
Try to access linked list nodes minimum number of times.
*/
const { Node } = require("../../dsaa/node/Node.js");
const LinkedList = require("../../dsaa/struct/SinglyLinkedList.js");

function swapNodes(head, k) {}

module.exports = swapNodes;
