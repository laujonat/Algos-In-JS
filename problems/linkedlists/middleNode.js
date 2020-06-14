/*
Find The Middle Node In A Singly Linked List

Given an integer singly linked list L, find its middle element. L has n nodes.
If the list has even number of nodes, consider the second of the middle two nodes as the middle node.
Example One
Input: 1 -> 2 -> 3 -> 4 -> 5 -> NULL
Output: Node containing value 3.

Example Two
Input: 1 -> 2 -> 3 -> 4 -> NULL
Output: Node containing value 3.

Notes

Input Parameters: The function has one argument, head node of the linked list.
Output: Return the middle node of the given list.

Constraints:
  0 <= n <= 10^5
  -2 * 10^9 <= value contained in any node <= 2 * 10^9

Do it in one pass over the linked list.
If the given linked list is empty, return null.
*/
const { Node } = require("../../dsaa/node/Node.js");
function findMiddleNode(head) {}

module.exports = findMiddleNode;
