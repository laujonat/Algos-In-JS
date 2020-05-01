function Node(data) {
  this.data = data;
  this.next = null;
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
  }

  *[Symbol.iterator]() {
    let self = this;
    let curr = this.head;
    while (curr) {
      yield curr;
      curr = curr.next;
    }
  }

  size() {
    return this.length;
  }

  add(data) {
    let node = new Node(data);
    let curr = this.head;
    if (!curr) {
      this.head = node;
      this.length++;
      return node;
    }

    while (curr.next) {
      curr = curr.next;
    }
    curr.next = node;
    this.length++;
    return node;
  }

  search(pos) {
    let curr = this.head;
    if (pos > this.length - 1 || pos < 0 || !this.head) {
      console.trace("Invalid position given.");
      return null;
    }
    let currIdx = 0;
    while (currIdx <= pos) {
      curr = curr.next;
      currIdx++;
    }
    return curr;
  }

  remove(pos) {
    if (pos > this.length - 1 || pos < 0 || !this.head) {
      console.trace("Invalid position given.");
      return null;
    }
    let deleted = null;
    let curr = this.head;
    if (pos === 0) {
      this.head = curr.next;
      deleted = curr;
      curr = null;
      this.length--;
      return deleted;
    }

    let currIdx = 0;
    let prev;
    while (currIdx < pos) {
      prev = curr;
      deleted = curr.next;
      curr = curr.next;
      currIdx++;
    }
    prev.next = deleted.next;
    this.length--;
    return deleted;
  }

  printNodes() {
    let curr = this.head;
    if (!curr) {
      console.log("Empty list");
      return;
    }
    let currIdx = 0;
    while (curr) {
      console.log(`[${currIdx}]: ${curr.data}`);
      currIdx++;
      curr = curr.next;
    }
  }

  displayForward() {
    if (!this.head) {
      return null;
    }
    this[Symbol.iterator] = function() {
      let curr = this.head;
      return {
        next() {
          if (curr) {
            let res = { value: curr, done: false };
            curr = curr.next;
            return res;
          }
          return { done: true };
        },
      };
    };

    const res = [];
    for (let node of this) {
      res.push(node.data);
    }
  }
}

// const linkedList = new SinglyLinkedList();
// linkedList.add(5);
// linkedList.add(0);
// linkedList.add(3);
// linkedList.printNodes();
// linkedList.remove(2);
// linkedList.add(1);
// linkedList.printNodes();

module.exports = SinglyLinkedList;
