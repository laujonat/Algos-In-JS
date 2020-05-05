// @flow
const List = require("./SinglyLinkedList.js");

function Dequeue() {
  this.length = 0;
  this.items = new List();
}

Dequeue.prototype.insertFront = function(el) {
  this.length++;
  return this.items.addFirst(el);
};

Dequeue.prototype.insertLast = function(el) {
  this.length++;
  return this.items.add(el);
};

Dequeue.prototype.deleteFront = function() {
  this.length--;
  return this.items.removeFirst();
};

// O(n) for singly linked list
Dequeue.prototype.deleteLast = function() {
  this.length--;
  return this.items.removeLast();
};

Dequeue.prototype.getFront = function() {
  if (this.isEmpty()) {
    return -1;
  } else {
    return this.items.getFirst();
  }
};

Dequeue.prototype.getRear = function(el) {
  if (this.isEmpty()) {
    return -1;
  } else {
    return this.items.getLast();
  }
};

Dequeue.prototype.isEmpty = function(): boolean {
  return !this.items.length;
};

module.exports = Dequeue;
