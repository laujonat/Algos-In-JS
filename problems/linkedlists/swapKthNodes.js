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

const linkedList = require("./test_utils/singlyll.js");

function swapNodes(head, k) {
  if (!head) {
    return null;
  }
  let prevleft = null;
  let leftPtr = head;
  let i = 1;
  while (i !== k) {
    prevleft = leftPtr;
    leftPtr = leftPtr.next;
    i++;
  }
  let afterKthNode = leftPtr;
  let prevright = null;
  let rightptr = head;
  while (afterKthNode.next) {
    afterKthNode = afterKthNode.next;
    prevright = rightptr;
    rightptr = rightptr.next;
  }
  if (prevleft !== null) {
    prevleft.next = rightptr;
  } else {
    head = rightptr;
  }

  if (prevright !== null) {
    prevright.next = leftPtr;
  } else {
    head = leftPtr;
  }
  let temp = leftPtr.next;
  leftPtr.next = rightptr.next;
  rightptr.next = temp;
  return head;
}

// let r = swapNodes(linkedList.head, 2);
// console.log(r);
module.exports = swapNodes;
