/*
Reverse Given Linked List In Groups Of k

Problem Statement:

Given an integer singly linked list L, of size n, and an integer k, you have to reverse every k nodes of the linked list.

There are two cases possible:
1) When n % k = 0: There will be n / k  groups of size k. So, you have to reverse n / k  groups of size k.
2) When n % k != 0: Considering first (floor(n / k) * k) nodes, there will be floor(n / k) groups of size k and one group made of last few nodes of size n % k. So, you have to reverse
floor(n / k) groups of size k and one group of size n % k.
(Looking at sample test cases will make it more clear.)

Input/Output Format For The Function:
Input Format:
  There are two arguments in input. First is an integer singly linked list L and second is an integer k.
Output Format:
  Return resultant linked list resL, after reversing L in groups of k, as asked in problem statement.  

Constraints:
  1 <= n <= 100000
  -2 * 10^9 <= value stored in any node <= 2 * 10^9
  1 <= k <= n
Solve it with constant extra space.

Sample Input 1:
  list: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> NULL
  k: 3

Sample Output 1:
  3 -> 2 -> 1 -> 6 -> 5 -> 4 -> NULL
Explanation 1:
  n = 6, k = 3 hence n % k = 0. So there are n / k = 6 / 3 = 2 groups of size k = 3.  
  Groups to be reversed are (1 -> 2 -> 3) and (4 -> 5 -> 6).
*/

/*
For the singly linked list head, the nodes are defined as:

const LinkedListNode = class {
    constructor(value) {
        this.val = value;
        this.next = null;
    }
};
*/
const { Node } = require("../../dsaa/node/Node.js");
const LinkedList = require("../../dsaa/struct/SinglyLinkedList.js");
function reverseLinkedListInGroupsOfK(head, k) {}

module.exports = reverseLinkedListInGroupsOfK;
