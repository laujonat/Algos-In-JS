/*
  Construct a graph using an adjacency list. 

  A graph is connected is there is a path between any two vertices.
 


*/
const LinkedList = require("./DoublyLinkedList.js");
const Queue = require("./Queue.js");

class Graph {
  constructor(n) {
    this.n = n;
    this.bidir = true;
    this.adjList = new Map();
    for (let i = 0; i < n; i++) {
      this.adjList.set(i, new LinkedList());
    }
    this.edgeMap = new Map();
  }

  addEdge(start: number, end: number, bidir = true) {
    if (this.adjList.get(start)) {
      this.adjList.get(start).add(end);
      this.edgeMap.set(start, end);
    }
    if (!bidir) {
      this.bidir = false;
      this.edgeMap.set(start, end);
    } else {
      if (this.adjList.get(end)) {
        this.adjList.get(end).add(start);
      }
    }
  }
  rootVertex() {
    const iterable = this.adjList.values().next();
    if (iterable.value) {
      return iterable.value;
    }
    return null;
  }

  // Eulerian Cycle(cycle): Starts and ends at same vertex
  //   - 0 vertices with odd degree
  hasEulerianCycle(): boolean {
    let odd = 0; // no of vertices with odd degree
    for (const vertex of this.adjList.entries()) {
      const [key, neighbors] = vertex;
      let numEdges = neighbors.length;
      if (!this.bidir) {
        let inDeg = 0;
        for (const edge of this.edgeMap.values()) {
          if (edge === key) {
            inDeg++;
          }
        }
        numEdges += inDeg;
      }
      if (numEdges % 2 !== 0) {
        odd++;
      }
    }
    if (odd === 0) {
      return true;
    }
    return false;
  }
  //  Eulerian Path:
  //   - Traversal of the graph that passes through each edge exactly once.
  //   - There are either 0 or 2 vertices with odd degree.
  //   - Has path iff every vertex of degree >= 1 lies in the same connected component, and every vertex has an even degree.
  hasEulerianPath() {
    let odd = 0; // no of vertices with odd degree
    for (let vertex of this.adjList.entries()) {
      let [key, neighbors] = vertex;
      let numEdges = neighbors.length;
      if (!this.bidir) {
        let inDeg = 0;
        for (const edge of this.edgeMap.values()) {
          if (edge === key) {
            inDeg++;
          }
        }
        numEdges += inDeg;
      }
      if (numEdges % 2 !== 0) {
        odd++;
      }
    }
    if (odd === 0 || odd === 2) {
      return true;
    }
    return false;
  }

  *vertices(source) {
    let vertices = this.adjList.get(source);
    if (!vertices) {
      console.info("Vertex has no edges");
      return;
    }
    let currIdx = 0;
    let res = "";
    for (let v of vertices) {
      yield v;
      res.concat(`${v.data} -> `);
      currIdx++;
    }
  }

  neighbors(source) {
    const vertices = [];
    for (let node of this.vertices(source)) {
      vertices.push(node.data);
    }
    return vertices;
  }
  // BFS -> queue
  searchBFS(source) {
    let queue = new Queue();
    // Starting vertex
    queue.enqueue(source);
    let seen = {};
    while (!queue.isEmpty()) {
      let v = queue.dequeue();
      console.log("Current vertex", v);
      this.neighbors(v).forEach((el) => {
        if (!seen[el]) {
          seen[el] = 1;
          queue.enqueue(el);
        }
      });
      console.log("Seen", seen);
      queue.print();
    }
  }
}

let graph = new Graph(10);
// graph.addEdge(0, 1, false);
// graph.addEdge(0, 2, false);
// graph.addEdge(1, 3, false);
// graph.addEdge(1, 4, false);
graph.addEdge(0, 1);
graph.addEdge(0, 3);
graph.addEdge(0, 6);
graph.addEdge(0, 8);
graph.addEdge(1, 4);
graph.addEdge(1, 6);
graph.addEdge(1, 9);
graph.addEdge(2, 4);
graph.addEdge(2, 6);
graph.addEdge(3, 4);
graph.addEdge(3, 5);
graph.addEdge(3, 8);
graph.addEdge(4, 5);
graph.addEdge(4, 9);
graph.addEdge(5, 9);
graph.addEdge(7, 8);
graph.addEdge(7, 9);
console.log("has cycle", graph.hasEulerianCycle());
console.log("has eulerian path", graph.hasEulerianPath());
module.exports = graph;
