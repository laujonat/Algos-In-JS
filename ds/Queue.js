// @flow
const LinkedList = require("./DoublyLinkedList.js");

function Queue() {
  this.list = new LinkedList();
}
// O(n)
Queue.prototype.enqueue = function(data) {
  return this.list.add(data);
};

// O(1)
Queue.prototype.dequeue = function() {
  let node = this.list.removeRoot();
  return node ? node.data : null;
};
// O(1)
Queue.prototype.peek = function() {
  return this.list.rootNode();
};
// O(1)
Queue.prototype.isEmpty = function() {
  return !this.list.rootNode();
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
