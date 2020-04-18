function Node(data) {
  this.data = data;
  this.prev = null;
  this.next = null;
}

class DoublyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  add(data) {
    let node = new Node(data);

    if (this.length > 0) {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    } else {
      this.head = node;
      this.tail = node;
    }

    this.length++;
  }

  search(pos) {
    if (pos > this.length - 1 || pos < 0 || !this.length) {
      console.trace("Invalid position given.");
      return null;
    }

    let curr = this.head;
    let currIdx = 0;

    while (currIdx < pos) {
      curr = curr.next;
      currIdx++;
    }

    return curr;
  }

  insertAfter(pos, data) {
    if (pos > this.length - 1 || pos < 0 || !this.length) {
      console.trace("Invalid position given.");
      return null;
    }

    let currIdx = 0;
    let curr = this.head;

    while (pos < this.length) {
      curr = curr.next;
      curr;
    }
  }

  displayForward() {
    // implement iterator
    let curr = this.head; // console.log(curr);
    let self = this;
    self[Symbol.iterator] = () => {
      return {
        next() {
          if (curr) {
            let res = {
              value: curr,
              done: false,
            };
            curr = curr.next;
            return res;
          }

          return {
            done: true,
          };
        },
      };
    };
    let currIdx = 0;
    for (let node of self) {
      console.log(`[${currIdx}]: ${node.data}`);
      currIdx++;
    }
  }

  displayBackward() {
    let self = this;
    let curr = this.tail;
    self[Symbol.iterator] = () => {
      return {
        next() {
          if (curr) {
            let res = { value: curr, done: false };
            curr = curr.prev;
            return res;
          }
          return {
            done: true,
          };
        },
      };
    };

    let currIdx = this.length - 1;
    for (let node of self) {
      console.log(`[${currIdx}]: ${node.data}`);
      currIdx--;
    }
  }

  removeLast() {
    let curr = this.head;
    let deleted = null;
    if (!curr) {
      console.trace("Empty list.");
      return deleted;
    } else {
      deleted = this.tail;
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    this.length--;
    return deleted;
  }

  remove(pos) {
    if (pos > this.length - 1 || pos < 0 || !this.length) {
      console.trace("Invalid position given.");
      return null;
    }

    let curr = this.head;
    let deleted;

    if (pos === 0) {
      this.head = curr.next;

      if (!this.head) {
        // second node exists
        this.head.prev = null;
      } else {
        // no second node
        this.tail = null;
      }
    } else if (pos === this.length - 1) {
      // last node
      this.tail = this.tail.prev;
      this.tail.next = null;
    } else {
      // pos is somewhere in between
      let currIdx = 0; // find node to delete

      while (currIdx < pos) {
        curr = curr.next;
        currIdx++;
      }

      let prev = curr.prev;
      let next = curr.next;
      prev.next = next;
      next.prev = prev;
      deleted = curr;
    }

    this.length--;
  }
}

var linkedList = new DoublyLinkedList();
linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
linkedList.add(4);
linkedList.displayForward();
console.log("remove last");
linkedList.removeLast();
linkedList.displayBackward();
