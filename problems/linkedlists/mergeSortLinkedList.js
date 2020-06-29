/*
Merge Sort A Linked List

Given a singly linked list, sort it in the ascending order using the Merge Sort algorithm.


*/

"use-strict";
const Node = require("../../dsaa/node/Node.js");

function merge(l1, l2) {
  if (!l1 && !l2) {
    return null;
  }
  if (!l1 || !l2) {
    return l1 || l2;
  }
  let current, p1, p2;
  // select starting node
  if (l1.data < l2.data) {
    current = l1;
    p1 = l1.next;
    p2 = l2;
  } else {
    current = l2;
    p1 = l1;
    p2 = l2.next;
  }
  // keep reference to head;
  const head = current;
  while (p1 && p2) {
    if (p1.data < p2.data) {
      current.next = p1;
      p1 = p1.next;
    } else {
      current.next = p2;
      p2 = p2.next;
    }
    current = current.next;
  }

  if (p1) {
    current.next = p1;
  }

  if (p2) {
    current.next = p2;
  }

  return head;
}

function mergeSortLinkedList(head) {
  // Write your code here
  if (!head) {
    return null;
  }
  if (!head.next) {
    return head;
  }

  let p1 = head;
  let p2 = head;
  let prev = null;
  // find mid
  while (p2) {
    prev = p1;
    p1 = p1.next;
    if (p2.next) {
      p2 = p2.next.next;
    } else {
      p2 = null;
    }
  }
  // cut off mid point;
  prev.next = null;
  const left = mergeSortLinkedList(head);
  const right = mergeSortLinkedList(p1);
  return merge(left, right);
}
// let a = new Node(5);
// a.next = new Node(7);
// a.next.next = new Node(2);

// let b = new Node(1);
// b.next = new Node(4);
// const r = mergeSortLinkedList(a);
module.exports = mergeSortLinkedList;
