// @flow
/*
  Implement a priority queue using a min-heap.
  Arr[(i - 1) / 2] returns its parent node.
  Arr[(2 * i) + 1] returns its left child node.
  Arr[(2 * i) + 2] returns its right child node.
*/
// var a = [1, 2, 3, 4, 5, 6, 7, 8];
"use-strict";

module.exports = class MinHeap {
  elements: Array<number>;

  constructor(elements: Array<number> = []) {
    this.elements = elements;
  }

  getLeftChildIdx(parentIdx: number): number {
    return 2 * parentIdx + 1;
  }

  getRightChildIdx(parentIdx: number): number {
    return 2 * parentIdx + 2;
  }

  getParentIdx(childIdx: number): number {
    let index = Math.floor(childIdx - 1) / 2;
    return index;
  }

  leftChild(index: number): number {
    return this.elements[this.getLeftChildIdx(index)];
  }

  rightChild(index: number): number {
    return this.elements[this.getRightChildIdx(index)];
  }

  parent(index: number): number {
    return this.elements[this.getParentIdx(index)];
  }

  hasParent(index: number) {
    return index > 0;
  }

  hasLeftChild(index: number) {
    return this.elements[this.getLeftChildIdx(index)];
  }

  hasRightChild(index: number) {
    return this.elements[this.getRightChildIdx(index)];
  }

  peek() {
    if (this.elements.length === 0) {
      throw new Error("Empty");
    }
    return this.elements[0];
  }

  removeMin() {
    if (this.elements.length === 0) {
      throw new Error("Empty");
    }
    let item = this.elements[0];
    this.elements[0] = this.elements[this.elements.length - 1];
    this.heapifyDown();
    return item;
  }

  printMinHeap() {
    for (let i = 0; i < this.elements.length; i++) {
      console.log(this.elements[i]);
    }
  }

  add(item: number) {
    this.elements.push(item);
    console.log(this.elements);
    this.heapifyUp();
  }

  heapifyUp(): void {
    let index = this.elements.length - 1;
    console.log(index);
    let parentIdx = this.getParentIdx(index);
    // while parent element is larger than newly inserted item
    while (this.hasParent(index) && this.parent(index) > this.elements[index]) {
      console.log(this.parent(index) > this.elements[index]);
      let temp = this.elements[index];
      this.elements[index] = this.elements[this.getParentIdx(index)];
      this.elements[this.getParentIdx(index)] = temp;
      index = this.getParentIdx(index);
    }
    console.dir(this.elements);
  }

  heapifyDown() {
    let index = 0;
    while (this.hasLeftChild(index)) {
      let smallerChildIdx = this.getLeftChildIdx(index);
      if (
        this.hasRightChild(index) &&
        this.rightChild(index) < this.leftChild(index)
      ) {
        smallerChildIdx = this.getRightChildIdx(index);
      }
      if (this.elements[index] < this.elements[smallerChildIdx]) {
        break;
      } else {
        let temp = this.elements[index];
        this.elements[index] = this.elements[smallerChildIdx];
        this.elements[smallerChildIdx] = temp;
      }
      index = smallerChildIdx;
    }
    console.dir(this.elements);
  }
};
