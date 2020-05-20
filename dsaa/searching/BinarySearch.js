/*
  Use the information that the array is sorted/ Time complexity to O(Log n).
*/
"use-strict";
class BinarySearch {
  constructor(arr, target) {
    this.arr = arr;
    this.target = target;
  }
  run() {
    let start = 0;
    let end = this.arr.length - 1;

    const helper = (arr, start, end, target) => {
      // It is also probably worth mentioning that in case negative indices are allowed, or perhaps it's not
      // even an array that's being searched (for example, searching for a value in some integer range satisfying some condition)
      let mid = Math.floor(
        start < 0 && end > 0 ? (start + end) / 2 : start + (end - start) / 2
      );
      if (this.arr[mid] === this.target) {
        return mid;
      } else if (this.arr[mid] > this.target) {
        return helper(this.arr, start, mid - 1, this.target);
      } else if (this.arr[mid] < this.target) {
        return helper(this.arr, mid + 1, end, this.target);
      } else {
        return -1;
      }
    };
    return helper(this.arr, start, end, this.target);
  }
}

module.exports = BinarySearch;
