// @flow
type R = Array<number>;

const bubbleSort = function(arr: R, n: number): R {
  for (let i = 0; i < n - 1; i++) {
    for (let j = n - 1; j >= i; j--) {
      if (arr[j] < arr[j - 1]) {
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      }
    }
  }

  return arr;
};

module.exports = bubbleSort;
