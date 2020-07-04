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
const LinkedList = require("../../dsaa/struct/SinglyLinkedList.js");

function findMiddleNode(head) {
  if (!head) {
    return null;
  }
  let slow = head;
  let fast = head;
  while (fast) {
    if (fast.next) {
      fast = fast.next.next;
      slow = slow.next;
    } else {
      return slow;
    }
  }

  return slow;
}
const linkedList = new LinkedList();
linkedList.add(5);
linkedList.add(0);
linkedList.add(3);
linkedList.add(6);
// linkedList.add(67);
console.log(findMiddleNode(linkedList.head));
module.exports = findMiddleNode;
