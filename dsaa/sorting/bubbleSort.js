// @flow
type R = Array<number>;

class BubbleSort<R, Number> {
  arr: Array<number>;
  n: number;
  constructor(arr: Array<number>, n: number) {
    this.arr = arr;
    this.n = n || arr.length;
  }
  sort() {
    for (let i = 0; i < this.n - 1; i++) {
      for (let j = this.n - 1; j >= i; j--) {
        if (this.arr[j] < this.arr[j - 1]) {
          let temp = this.arr[j];
          this.arr[j] = this.arr[j - 1];
          this.arr[j - 1] = temp;
        }
      }
    }

    return this.arr;
  }
}

module.exports = BubbleSort;
