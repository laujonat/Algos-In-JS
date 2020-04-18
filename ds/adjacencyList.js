/*
  Construct a graph using an adjacency list. 
*/

function Node(data) {
  this.data = data;
  this.next = null;
}

class List {
  constructor() {
    this.length = 0;
    this.head = null;
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

    console.log(res);
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
}

class Graph {
  constructor(n) {
    this.n = n;
    let obj = {};
    // this.adjList =
    this.adjList = new Map();
    for (let i = 0; i < n; i++) {
      this.adjList.set(i, new List());
    }
  }

  addEdge(start: number, end: number, bidir = true) {
    if (this.adjList.get(start)) {
      this.adjList.get(start).add(end);
    }
    if (bidir) {
      if (this.adjList.get(end)) {
        this.adjList.get(end).add(start);
      }
    }
  }
  // Every vertex must have even degree
  hasEulerianCycle() {
    let odd = 0; // no of vertices with odd degree
    for (let vertex of this.adjList.keys()) {
      if (this.adjList.get(vertex).length % 2 === 0) {
        odd++;
      }
    }
    if (odd === 0) {
      return true;
    }
    return false;
  }

  // Every vertex must have even degree
  hasEulerianPath() {
    let odd = 0; // no of vertices with odd degree
    for (let vertex of this.adjList.keys()) {
      if (this.adjList.get(vertex).length % 2 === 0) {
        odd++;
      }
    }
    if (odd === 0 || odd === 2) {
      return true;
    }
    return false;
  }
}

let g = new Graph(10);
g.addEdge(0, 1);
g.addEdge(0, 3);
g.addEdge(0, 6);
g.addEdge(0, 8);
g.addEdge(1, 4);
g.addEdge(1, 6);
g.addEdge(1, 9);
g.addEdge(2, 4);
g.addEdge(2, 6);
g.addEdge(3, 4);
g.addEdge(3, 5);
g.addEdge(3, 8);
g.addEdge(4, 5);
g.addEdge(4, 9);
g.addEdge(5, 9);
g.addEdge(7, 8);
g.addEdge(7, 9);
console.log("has cycle", g.hasEulerianCycle());
console.log("has eulerian path", g.hasEulerianPath());
