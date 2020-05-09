// @flow
const LinkedList = require("./DoublyLinkedList.js");

function Queue() {
  this.length = 0;
  this.list = new LinkedList();
}
// O(n)
Queue.prototype.enqueue = function(data) {
  let node = this.list.add(data);
  this.length++;
  return node ? node.data : null;
};

// O(1)
Queue.prototype.dequeue = function() {
  let node = this.list.removeRoot();
  if (node) {
    this.length--;
    return node.data;
  }
  return null;
};

// O(1)
Queue.prototype.peek = function() {
  let node = this.list.rootNode();
  node ? node.data : null;
};
// O(1)
Queue.prototype.isEmpty = function() {
  return this.length === 0;
};
// O(n) traversal
Queue.prototype.print = function() {
  let currIdx = 0;
  for (let node of this.list.iterateListForward()) {
    console.log(`[${currIdx}]: ${node.data}`);
    currIdx++;
  }
};

module.exports = Queue;
