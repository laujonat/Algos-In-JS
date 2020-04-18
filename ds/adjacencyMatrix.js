class Graph {
  constructor(n) {
    this.n = n;
    this.matrix = new Array(n).fill().map((el) => new Array(n));
  }

  addEdge(start, end) {
    this.matrix[start][end];
  }
}
