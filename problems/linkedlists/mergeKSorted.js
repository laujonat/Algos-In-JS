/*
Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.

Example:

Input:
[
  1->4->5,
  1->3->4,
  2->6
]
Output: 1->1->2->3->4->4->5->6
*/
const Node = require("../../dsaa/node/Node.js");

function mergeKLists(lists) {
  const merge = (l1, l2) => {
    if (!l1 || !l2) {
      return l1 || l2;
    }
    let node = {};
    const root = node;
    while (l1 && l2) {
      if (l1.data <= l2.data) {
        node.next = l1;
        l1 = l1.next;
      } else {
        node.next = l2;
        l2 = l2.next;
      }
      node = node.next;
    }
    if (l1) {
      node.next = l1;
    }
    if (l2) {
      node.next = l2;
    }
    return root.next;
  };

  let root = lists[0];
  for (let i = 1; i < lists.length; i++) {
    root = merge(root, lists[i]);
  }

  return root || null;
}
// let a = new Node(1);
// a.next = new Node(4);
// a.next.next = new Node(5);

// let b = new Node(1);
// b.next = new Node(3);
// b.next.next = new Node(4);
// let c = new Node(2);
// c.next = new Node(6);

// let r = [a, b, c];
// let res = mergeKLists(r);

// while (res) {
//   console.log(res.data);
//   res = res.next;
// }

module.exports = mergeKLists;
