/*
  Construct a graph using an adjacency list. 
  A graph is connected is there is a path between any two vertices.
  An undirected graph is complete if there is an edge between every pair of vertices
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

  hasEulerianCycle(): boolean {
    let odd = 0; // no of vertices with odd degree
    for (const vertex of this.adjList.entries()) {
      const [key, neighbors] = vertex;
      let numEdges = neighbors.length;
      // If the graph is directed, count number of in-degree edges
      if (!this.bidir) {
        for (const edge of this.edgeMap.values()) {
          edge === key && numEdges++;
        }
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
  // Eulerian Path:
  // https://math.stackexchange.com/questions/1871065/euler-path-for-directed-graph
  hasEulerianPath() {
    let odd = 0;
    for (let vertex of this.adjList.entries()) {
      let [key, neighbors] = vertex;
      let numEdges = neighbors.length;
      // If the graph is directed, count number of in-degree edges
      if (!this.bidir) {
        for (const edge of this.edgeMap.values()) {
          edge === key && numEdges++;
        }
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

  shortestPathBFS(source, target) {}
  dfs(source) {
    // Vertices that have been discovered but not yet captured
    const stack = [];
    // Starting vertex
    const visited = new Map();
    const parent = {};
    const seen = {};
    let distance = 0;
    stack.push({ vertex: source, distance: 0 });
    while (stack.length !== 0) {
      let { vertex: v, distance: d } = stack.pop();
      seen[v] = 1;
      let d1 = [];
      console.log(`Distance from [${source}] to [${v}]: ${d}`);
      // Explore neighboring vertices
      this.neighbors(v).forEach((currentVertex) => {
        if (!seen[currentVertex]) {
          parent[currentVertex] = v;
          // Capture discovered vertex
          seen[currentVertex] = 1;
          // First edge to discover vertex
          d1.push(currentVertex);
          stack.push({ vertex: currentVertex, distance: d + 1 });
        }
      });
      visited.set(v, d1);
      console.log(`Vertex [${v}] discovered vertices: [${visited.get(v)}]`);
    }
  }

  // BFS -> queue
  bfs(source) {
    // Vertices that have been discovered but not yet captured
    const queue = new Queue();
    // Starting vertex
    const visited = new Map();
    const parent = {};
    const seen = {};
    let distance = 0;
    queue.enqueue({ vertex: source, distance: 0 });
    while (!queue.isEmpty()) {
      let { vertex: v, distance: d } = queue.dequeue();
      seen[v] = 1;
      let d1 = [];
      console.log(`Distance from [${source}] to [${v}]: ${d}`);
      // Explore neighboring vertices
      this.neighbors(v).forEach((currentVertex) => {
        if (!seen[currentVertex]) {
          parent[currentVertex] = v;
          // Capture discovered vertex
          seen[currentVertex] = 1;
          // First edge to discover vertex
          d1.push(currentVertex);
          queue.enqueue({ vertex: currentVertex, distance: d + 1 });
        }
      });
      visited.set(v, d1);
      console.log(`Vertex [${v}] discovered vertices: [${visited.get(v)}]`);
    }
  }
}

let dag = new Graph(5);
dag.addEdge(0, 1, false);
dag.addEdge(0, 2, false);
dag.addEdge(1, 3, false);
dag.addEdge(1, 4, false);
console.log("has cycle", dag.hasEulerianCycle());
console.log("has eulerian path", dag.hasEulerianPath());

let graph = new Graph(10);
graph.addEdge(0, 1);
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

let dfs = new Graph(8);
dfs.addEdge(0, 1, false);
dfs.addEdge(0, 2, false);
dfs.addEdge(1, 5, false);
dfs.addEdge(1, 6, false);
dfs.addEdge(6, 7, false);
dfs.addEdge(7, 8, false);
dfs.addEdge(2, 3, false);
dfs.addEdge(2, 4, false);
module.exports = dfs;
